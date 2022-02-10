const path = require ('path')
const fs = require ('fs')

const regxSlash = /\\/g
const op1 = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/src/commands'
const op2 = 'src/commands'
const op3 = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/prueba2.md'
const op4 = 'pruebas/prueba2.md'


//Le damos formato a la ruta
// const renderPath = (enteredPath) => {
//     const filePath = enteredPath.replace(/\\/g, "/")
//     return filePath
// }

//Verificamos si la ruta es absoluta
const isAbsolute = (filePath) => {
    return path.isAbsolute(filePath)
}

//Convertimos la ruta relativa a absoluta
const toAbsolute = (filePath) => {
    return path.resolve(filePath)
}

//Verificamos si la ruta existe 
//(de ser true, deberia retornar la ruta?)(por que cuando no existe da undefined al final?)
const isrealPath = (filePath) => {
    if(fs.existsSync(filePath) === true){
        return filePath
    }
    return console.log("La ruta no existe")
}

//Verificamos si es un directorio
const isDirectory = (filePath) => {
        return fs.statSync(filePath).isDirectory()
}
