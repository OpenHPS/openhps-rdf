import { Serializable, CHANGELOG_METADATA_KEY, Change, DataSerializerUtils } from "@openhps/core";
import { Quad } from "n3";

export interface QuadChangeLog {
    additions?: Quad[];
    deletions?: Quad[];
}

export function getChangeLog<T>(object: T, serializer: (object: any) => Quad[]): QuadChangeLog {
    const quadChangelog: QuadChangeLog = {};
    const changelog = object[CHANGELOG_METADATA_KEY];
    if (changelog) {
        // Parse the change log to determine all quads that need to be
        // added or removed
        const changes: Change[] = changelog.getLatestChanges();
        // Every change is a quad that is added and deleted
        // when the old value is different from the new value
        changes.forEach((change: Change) => {
            if (change.oldValue) {
                quadChangelog.deletions = quadChangelog.deletions || [];
                quadChangelog.deletions.push(...serializer(change.oldValue));
            }
            if (change.newValue) {
                quadChangelog.additions = quadChangelog.additions || [];
                quadChangelog.additions.push(...serializer(change.newValue));
            }
        });
    }
    // Check the changelog of sub objects
    const metadata = DataSerializerUtils.getOwnMetadata(object);
    if (metadata) {
        metadata.dataMembers.forEach((member) => {
            const subObject = object[member.key];
            const subChangelog = getChangeLog(subObject, serializer);
            if (subChangelog.additions) {
                quadChangelog.additions = quadChangelog.additions || [];
                quadChangelog.additions.push(...subChangelog.additions);
            }
            if (subChangelog.deletions) {
                quadChangelog.deletions = quadChangelog.deletions || [];
                quadChangelog.deletions.push(...subChangelog.deletions);
            }
        });
    }
    return quadChangelog
}
