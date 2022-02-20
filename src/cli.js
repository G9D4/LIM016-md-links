#! /usr/bin/env node

const mdLinks = require('./commands/index')
const stats = require ('./commands/stats')
const argv = require ('yargs')

    .usage('Usage: md-links <path> [options]')
    .example(
        ["md-links your/path", "returns URL, link text and full file path"],
        ["md-links your/path --validate", "returns URL, link text, full file path, status and ok/fail message"],
        ["md-links your/path --stats", "returns number of total and unique links"],
        ["md-links your/path --validate --stats", "returns values of both options plus number of broken links"]
        )
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
    .help('h')
    .alias('h', 'help').argv