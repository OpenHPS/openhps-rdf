#!/usr/bin/env node

import * as chalk from 'chalk';
import '@openhps/rf';
import * as path from 'path';
import { input } from '@inquirer/prompts';
import * as yargs from 'yargs';

const args: [K: string] = yargs.argv as any;
const data = {
    directory: path.normalize('tmp'),
};

/**
 * Main CLI entry
 */
function main() {
    console.log(chalk.redBright('OpenHPS RDF Generator'));

    if (args['help'] || args['?']) {
        console.log('Command line arguments:');
        console.log('-d <dir>\t\tSpecify the output directory to create the typings.');
        console.log('-v\t\tVerbose logging.');
        process.exit();
    }

    Promise.resolve(
        args['d'] ??
            input({
                message: 'Enter the output directory',
            }),
    ).then((directory) => {
        data.directory = directory;

    });
}



main();
