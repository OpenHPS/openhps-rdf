import { Serializable, CHANGELOG_METADATA_KEY } from "@openhps/core";
import { Quad } from "n3";

export interface QuadChangeLog {
    additions?: Quad[];
    deletions?: Quad[];
}

export function getChangeLog<T>(object: Serializable<T>, serializer: Serua): QuadChangeLog {
    const quadChangelog: QuadChangeLog = {};
    const changelog = object[CHANGELOG_METADATA_KEY];
    if (changelog) {
        // Parse the change log to determine all quads that need to be
        // added or removed
        const changes = changelog.getLatestChanges();

    }
    return quadChangelog
}
