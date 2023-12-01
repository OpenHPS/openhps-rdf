#!/usr/bin/env node

import * as chalk from 'chalk';
import '@openhps/rf';
import * as path from 'path';
import { input } from '@inquirer/prompts';
import * as yargs from 'yargs';
import { Mirrors, Namespaces } from './types';
import { generateFiles } from './generateFiles';

const args = yargs.option('d', {
    alias: 'dictionary',
    default: undefined,
    description: "Specify the output directory to create the typings",
    type: 'string'
}).option('n', {
    alias: 'namespace',
    description: "Add one or more namespaces",
    type: 'string',
    array: true
}).option('m', {
    alias: 'mirror',
    description: "Add a mirror URI link for a namespace URI",
    type: 'string',
    array: true
}).option('?', {
    alias: 'help',
    default: undefined,
}).option('v', {
    alias: 'verbose',
    default: undefined,
    description: "Verbose logging"
}).argv;

const data: {
    directory: string;
    namespaces?: Namespaces;
    mirrors?: Mirrors;
} = {
    directory: path.normalize('tmp'),
};

/**
 * Main CLI entry
 */
function main() {
    console.log(chalk.redBright('OpenHPS RDF Generator'));

    Promise.resolve(
        args['d'] ??
            input({
                message: 'Enter the output directory',
            }),
    ).then(async (directory) => {
        data.directory = path.normalize(directory);
        if (args['n']) {
            return Promise.resolve((args['n'] as string[]).map(ns => {
                const i = ns.indexOf(":");
                return {
                    [ns.slice(0, i)]: ns.slice(i + 1)
                };
            }).reduce((a, b) => ({ ...a, ...b})));
        } else {
            const prefix = await input({
                message: 'Enter the prefix of the ontology to add',
            });
            const uri = await input({
                message: 'Enter the URI of the ontology to add',
            });
            return Promise.resolve({ [prefix]: uri });
        }
    }).then((namespaces: Namespaces) => {
        data.namespaces = namespaces;
        console.log("The following namespaces will be fetched:");
        Object.keys(data.namespaces).forEach(ns => {
            console.log(`\t@prefix ${ns}: <${data.namespaces[ns]}> .`)
        });

        if (args['m']) {
            const mirrors = {};
            for (let i = 0 ; i < args['m'].length ; i += 2) {
                mirrors[args['m'][i]] = args['m'][i + 1];
            }
            return Promise.resolve(mirrors);
        }
        return Promise.resolve(undefined);
    }).then(mirrors => {
        data.mirrors = mirrors;
        console.log("The following mirrors will be used:");
        Object.keys(data.mirrors).forEach(source => {
            console.log(`\t<${source}> -> <${data.mirrors[source]}>`)
        });

        return generateFiles(data.namespaces, { targetDir: data.directory, mirrors: data.mirrors });
    });
}

main();

export { generateFiles };
