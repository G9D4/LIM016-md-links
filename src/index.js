const basic = require ('./api')
const validate = require ('./commands/validate')
const stats = require ('./commands/stats')

const mdLinks = (path, options) => {
    return new Promise((res, rej) => {
        const absolutePath = basic.toAbsolute(path)
        
        if(basic.isRealPath(absolutePath) === false){
            reject (`La ruta ${absolutePath} no existe`)
        }
        
        const mdFiles = basic.getMdFiles(absolutePath)
        if(mdFiles === []){
            reject (`No hay archivos .md`)
        }
        
        const mdUrls = mdFiles.map(e => basic.getLinks(e))
        if(mdUrls === false){
            reject (`No se encontraron links`)
        }

        

    })
}