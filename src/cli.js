#! /usr/bin/env node

// const api = require('./api')
const mdl = require('./index')
const stats = require ('./commands/stats')
const chalk = require('chalk');
const argv = require ('yargs')

    .usage('Usage: md-links <path> [options]')
    .example("md-links your/path --validate --stats", "returns both values plus broken links")
    .option(
        'validate', {
            name: 'validate',
            alias: 'v',
            default: false,
            type: 'boolean',
            describe: 'validates the links\' statuses'
    })
    .option(
        'stats', {
        name: 'stats',
        alias: 's',
        default: false,
        type: 'boolean',
        describe: 'retrieves statistics about the array of links'
    })
    .strictOptions(true)
    .showHelpOnFail(false, 'Oops, you need --help?')
    .help('h')
    .alias('h', 'help')
    .argv

let path = argv._

if (path.length > 1 || path.length === 0){
    console.log(chalk.bgRedBright('Enter 1 path please'))
}else if(argv.stats && argv.validate){
    mdl.mdLinks(path.toString(), {validate: true})
        .then((res) => {
            const total = stats.totalStat(res)
            const unique = stats.uniqueStat(res)
            const broken = stats.brokenStat(res)
            console.log(res) 
            console.log(total)
            console.log(chalk.yellowBright(unique)) 
            console.log(chalk.redBright(broken))
        })
        .catch((err) => console.log(err))
} else if(argv.validate){
    mdl.mdLinks(path.toString(), {validate: true})
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}else if(argv.stats){
    mdl.mdLinks(path.toString(), {validate: false})
        .then((res) => {
            const total = stats.totalStat(res)
            const unique = stats.uniqueStat(res)
            console.log(total)
            console.log(chalk.yellowBright(unique))
        })
        .catch((err) => console.log(err))
}else{
    mdl.mdLinks(path.toString(), {validate: false})
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}

