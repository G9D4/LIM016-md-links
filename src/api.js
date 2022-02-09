const { resolve } = require('path')
const path = require ('path')

const regxSlash = /\\/g


//Le damos formato a la ruta
// const renderPath = (enteredPath) => {
//     const filePath = enteredPath.replace(/\\/g, "/")
//     return filePath
// }

//Verificamos si la ruta es absoluta

const absolutePath = (filePath) => {
    if(path.isAbsolute(filePath) === false){
        return path.resolve(filePath)
    }
    return filePath
}

