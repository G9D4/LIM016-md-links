const basic = require ('./api')
const validate = require ('./commands/validate')
const stats = require ('./commands/stats')

const fakePath = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/pruebitas'
const emptyFolder = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/vacio'
const txtFile = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/archivo-no-md/prueba.txt'
const mdNoLinks = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/md-sin-links/prueba.md'
const mdWithLinks = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/md-con-links/prueba.md'
const recursiveSearch = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/prueba-recursiva'

const mdLinks = (path, options) => new Promise((resolve, reject) => {

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
                    const basicInfo = mdUrls.map(e => basic.validateFalse(e))
                    const fullInfo = basicInfo.map(e => validate.validateTrue(e))
                    console.log(fullInfo)
                    resolve (fullInfo)
                }else{
                    const validateBasic = mdUrls.map(e => basic.validateFalse(e))
                    resolve (validateBasic)
                }
            }
        }
    }  
})
.then(resolve => console.log(resolve))

console.log(mdLinks(fakePath, {validate: true}))