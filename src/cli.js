#! /usr/bin/env node

const mdLinks = require('./commands/index')
const stats = require ('./commands/stats')
const argv = require ('yargs')

    .usage('Usage: md-links <path> [options]')
    .example("md-links your/path --validate --stats", "returns both values plus broken links")
        .options({
            validate: {
                name: 'validate',
                alias: 'v',
                default: false,
                type: 'boolean',
                describe: 'validates the links\' statuses'
            }
        },
        {
            stats: {
                name: 'stats',
                alias: 's',
                default: false,
                type: 'boolean',
                describe: 'retrieves statistics about the array of links'
            }
        })
    .strictOptions(true)
    .showHelpOnFail(false, 'Oops, you need --help?')
    .help('h')
    .alias('h', 'help')
    .argv

let path = argv._



