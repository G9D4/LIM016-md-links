const basic = require ('./api')
const validate = require ('./commands/validate')
const stats = require ('./commands/stats')

const fakePath = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/pruebitas'
const emptyFolder = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/vacio'
const txtFile = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/archivo-no-md/prueba.txt'
const mdNoLinks = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/md-sin-links/prueba.md'
const mdWithLinks = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/md-con-links/prueba.md'
const recursiveSearch = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/prueba-recursiva'

const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {   
        const absolutePath = basic.toAbsolute(path)
        if(basic.isRealPath(absolutePath) === false){
            reject (`La ruta ${absolutePath} no existe`)
        }else{
            const mdFiles = basic.getMdFiles(absolutePath)
            if(mdFiles === []){
                reject (`No hay archivos .md`)
            }else{     
                const mdUrls = mdFiles.map(e => basic.getLinks(e))
                if(mdUrls === false){
                    reject (`No se encontraron links`)          
                }else{                  
                    if (options.validate === true) {
                        const basicInfo = mdUrls.map(e => basic.validateFalse(e, absolutePath))
                        const fullInfo = basicInfo.map(e => validate.validateTrue(e)
                        .then((resolve) => fullInfo))
                        // resolve (fullInfo)
                    }else{
                        const validateBasic = mdUrls.map(e => basic.validateFalse(e, absolutePath))
                        resolve (validateBasic)
                    }
                }
            }
        }  
    })
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))
}


console.log(mdLinks(recursiveSearch, {validate: true})
// console.log(mdLinks(mdWithLinks)
.then(res => console.log(res))
.catch(rej => console.log(rej)))