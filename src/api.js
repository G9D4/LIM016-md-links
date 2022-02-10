const path = require ('path')
const fs = require ('fs')

const regxSlash = /\\/g
const op1 = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/src'
const op2 = 'src/commands'
const op3 = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/prueba2.md'
const op4 = 'pruebas/prueba2.md'
const op5 = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/src/cli.js'
const op6 = 'src/cli.js'
const op7 = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebasss'
// const op8 = 


//Le damos formato a la ruta
// const renderPath = (enteredPath) => {
//     const filePath = enteredPath.replace(/\\/g, "/")
//     return filePath
// }

//Verificamos si la ruta es absoluta
const isAbsolute = (enteredPath) => {
    return path.isAbsolute(enteredPath)
}

//Convertimos la ruta relativa a absoluta
const toAbsolute = (enteredPath) => {
    return path.resolve(enteredPath)
}

//Verificamos si la ruta existe 
//(de ser true, deberia retornar la ruta?)(por que cuando no existe da undefined al final?)
const isRealPath = (enteredPath) => {
    if(fs.existsSync(enteredPath) === true){
        return enteredPath
    }
    return console.log("La ruta no existe")
}

//Verificamos si es un file .md
const isMdFile = (filePath) => {
    return path.extname(filePath) === ".md"
}

//Verificamos si es un directorio
const isDirectory = (enteredPath) => {
        return fs.statSync(enteredPath).isDirectory()
}

//Verificamos el contenido del directorio
const directoryContent = (dirPath) => {
    if(fs.readdirSync(dirPath).length === 0){
        return false
    }else{
        return true
    }
}

//Recopilamos los archivos del directorio (cambiar instruccion)
// const getFiles = (enteredPath) => {
//     let fileArray=[]
//     if(isDirectory(enteredPath) === false && isMdFile(enteredPath === true)){
//         getFiles.push(enteredPath)
//     }else{
//         if(isDirectory(enteredPath) ===  true){
//             directoryContent(enteredPath)
//         }
//     }
// }