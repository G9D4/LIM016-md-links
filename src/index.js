const basic = require ('./api')
const validate = require ('./commands/validate')
const stats = require ('./commands/stats')

const fakePath = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/pruebitas'
const emptyFolder = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/vacio'
const txtFile = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/archivo-no-md/prueba.txt'
const mdNoLinks = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/md-sin-links/prueba.md'
const mdWithLinks = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/md-con-links/prueba.md'
const recursiveSearch = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/prueba-recursiva'

const mdLinks = (path, options) => new Promise((res, rej) => {

    const absolutePath = basic.toAbsolute(path)
    if(basic.isRealPath(absolutePath) === false){
        rej (`La ruta ${absolutePath} no existe`)
    }else{
        const mdFiles = basic.getMdFilesWithLinks(absolutePath)
        if(mdFiles.length === 0){
            rej (`No hay archivos .md con links`)
        }else{     
            const mdUrls = basic.getLinks(mdFiles)                
            if (options.validate === true) {
                const fullInfo = validate.validateTrue(mdUrls)
                res (fullInfo)
            }else{
                res (mdUrls)
            }
        }
    }  
})
.then((res) => res.map((prom) => prom.value ? prom.value : prom))

// mdLinks(recursiveSearch, {validate: true})
// .then(res => console.log(res))
// .catch(rej => console.log(rej))