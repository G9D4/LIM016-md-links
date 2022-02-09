const path = require ('path')
const fs = require ('fs')

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

//Verificamos si la ruta existe 
//(de ser true, deberia retornar la ruta?)(por que cuando no existe da undefined al final?)
const realPath = (filePath) => {
    if(fs.existsSync(filePath) === true){
        return filePath
    }
    return console.log("La ruta no existe")
}