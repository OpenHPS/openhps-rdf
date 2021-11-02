/**
 * @author Vincent Tunri
 * @see {@link https://gitlab.com/vincenttunru/rdf-namespaces}
 */

import { promisify } from 'util';
import { writeFile, mkdir, exists } from 'fs';
import { generateNamespaceTs, Mirrors } from './generateNamespaceTs';
import { resolve } from 'path';
import { Namespaces } from '../namespaces';

const fsWriteFile = promisify(writeFile);
const fsExists = promisify(exists);
const fsMkdir = promisify(mkdir);

/**
 * @param namespacesToGenerate
 * @param root0
 * @param root0.targetDir
 * @param root0.mirrors
 */
export async function generateFiles(
    namespacesToGenerate: Namespaces,
    { targetDir = resolve(__dirname, '../vocab'), mirrors = {} as Mirrors } = {},
) {
    if (!(await fsExists(targetDir))) {
        await fsMkdir(targetDir);
    }
    const generatedFilenames = await Promise.all(
        Object.entries(namespacesToGenerate).map(([filename, namespace]) =>
            generateFile(filename, namespace, { targetDir, mirrors }),
        ),
    );
    const indexContents = Object.keys(namespacesToGenerate)
        // This is a somewhat hackish workaround to this proposal not being ratified for Ecmascript yet:
        // https://github.com/tc39/proposal-export-ns-from
        .map((filename) => {
            const exportLine = `import * as ${filename}Import from './${filename}'; export const ${filename} = ${filename}Import;`;
            return generatedFilenames.includes(filename)
                ? exportLine
                : `// This vocabulary was unavailable when this file was generated:\n// ${exportLine}`;
        })
        .join('\n');
    return fsWriteFile(resolve(targetDir, 'index.ts'), indexContents);
}

/**
 * @param filename
 * @param namespace
 * @param root0
 * @param root0.targetDir
 * @param root0.mirrors
 */
async function generateFile(
    filename: string,
    namespace: string,
    { targetDir = resolve(__dirname, '../dist'), mirrors = {} as Mirrors } = {},
) {
    try {
        const contents = await generateNamespaceTs(namespace, { mirrors });
        await fsWriteFile(resolve(targetDir, `${filename}.ts`), contents);
        return filename;
    } catch (e) {
        console.error(`Error generating constants for namespace <${namespace}>:`, e);
        return null;
    }
}
