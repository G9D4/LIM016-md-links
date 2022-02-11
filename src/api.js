const path = require ('path')
const fs = require ('fs')

const regxBackSlash = /\\/g
// const regxLinkNotation = 

const op1 = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/src'
const op2 = 'src/commands'
const op3 = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/prueba2.md'
const op4 = 'pruebas/prueba2.md'
const op5 = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/src/cli.js'
const op6 = 'src/cli.js'
const op7 = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebasss'



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
//(por que cuando no existe da undefined al final?)
const isRealPath = (enteredPath) => {
    return fs.existsSync(enteredPath)
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
    // if(fs.readdirSync(dirPath).length === 0){
    //     return false
    // }else{
    //     return true
    // }
    return fs.readdirSync(dirPath)
}

//Recopilamos los archivos .md, si el path es de un directorio, lo exploramos aplicando recursividad
const getMdFiles = (enteredPath) => {
    let fileArray=[]

    const recursiveSearch = (enteredPath) => {
        if(!isDirectory(enteredPath)){
            if(isMdFile(enteredPath)){
                fileArray.push(enteredPath)
            }
        }else{
            let filesList = directoryContent(enteredPath)
            let absolutePathsList = filesList.map((file) => path.join(enteredPath, file))
            absolutePathsList.forEach((path) => {
                recursiveSearch(path)                
            });
        }
    }
    recursiveSearch(enteredPath)
    return fileArray
}

// console.log(getMdFiles('C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links'))

//Verificar y recopilar links si los hay

const getLinks = (mdfileArray) => {

}