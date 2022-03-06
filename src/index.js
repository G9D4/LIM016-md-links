const basic = require ('./api')
const validate = require ('./commands/validate')
const stats = require ('./commands/stats')
const chalk = require('chalk');

const fakePath = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/pruebitas'
const emptyFolder = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/vacio'
const txtFile = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/archivo-no-md/prueba.txt'
const mdNoLinks = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/md-sin-links/prueba.md'
const mdWithLinks = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/md-con-links/prueba.md'
const recursiveSearch = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/prueba-recursiva'

const mdLinks = (path, options) => new Promise((res, rej) => {

    const absolutePath = basic.toAbsolute(path)
    if(basic.isRealPath(absolutePath) === false){
        rej (chalk.bgRedBright(`Path doesn't exists`))
    }else{
        const mdFiles = basic.getMdFilesWithLinks(absolutePath)
        if(mdFiles.length === 0){
            rej (chalk.bgRedBright(`No .md files with links`))
        }else{     
            const mdUrls = basic.getLinks(mdFiles)                
            if (options.validate === true) {
                const fullInfo = validate.validateTrue(mdUrls)
                res (fullInfo)
            }else{
                res (chalk.red(mdUrls))
            }
        }
    }  
})
.then((res) => res.map((prom) => prom.value ? prom.value : prom))

// mdLinks(recursiveSearch, {validate: true})
// .then(res => console.log(res))
// .catch(rej => console.log(rej))

module.exports = { mdLinks }