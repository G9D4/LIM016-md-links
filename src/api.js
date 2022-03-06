const path = require ('path')
const fs = require ('fs')
// const chalk = require('chalk');

// const regexBackSlash = /\\/g
const regexLinkNotation = /^\[.*\]\(.*\)$/gm
const regexUrl = /\(.*\)/gm
const regexText = /\[.*\]/gm


const fakePath = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/pruebitas'
const emptyFolder = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/vacio'
const txtFile = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/archivo-no-md/prueba.txt'
const mdNoLinks = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/md-sin-links/prueba.md'
const mdWithLinks = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/md-con-links/prueba.md'
const recursiveSearch = 'C:/Users/gabri/Desktop/laboratoria-md-links/LIM016-md-links/pruebas/prueba-recursiva'

//Le damos formato a la ruta
// const renderPath = (enteredPath) => {
//     const filePath = enteredPath.replace(/\\/g, "/")
//     return filePath
// }

// //Verificamos si la ruta es absoluta
// const isAbsolute = (enteredPath) => {
//     return path.isAbsolute(enteredPath)
// }

//Convertimos la ruta relativa a absoluta
const toAbsolute = (enteredPath) => {
    return path.resolve(enteredPath)
}

//Verificamos si la ruta existe 
const isRealPath = (absolutePath) => {
    return fs.existsSync(absolutePath)
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
    return fs.readdirSync(dirPath)
}

//Verificamos el contenido del file
const fileContent = (filePath) => {
    return fs.readFileSync(filePath, 'utf-8')
}

//Recopilamos los archivos .md, si el path es de un directorio, lo exploramos aplicando recursividad
const getMdFilesWithLinks = (enteredPath) => {
    let fileArray=[]

    const recursiveSearch = (enteredPath) => {
        if(!isDirectory(enteredPath)){
            if(isMdFile(enteredPath)){
                if(fileContent(enteredPath).match(regexLinkNotation)){
                    fileArray.push(enteredPath)
                }
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

//Recopilar links si los hay y retornar su informacion basica
const getLinks = (mdPathArray) => {
    let linksArray = []

    mdPathArray.forEach((file) => {
        const fullLinks = fileContent(file).match(regexLinkNotation)
        fullLinks.map((fullLink) => {
            const href = fullLink.match(regexUrl).join().slice(1, -1)
            const text = fullLink.match(regexText).join().slice(1, -1)
            linksArray.push({
                href: href,
                text: text.substring(0, 50),
                file: file
            })
        })
    })
    return linksArray
}

//Renderizar los resultados completos
// const toRenderFull = (res) => {
//     res.map((r) => {
//         let stat
//         if(r.ok === 'OK'){
//             stat = chalk.green(r.ok)
//         }else{
//             stat = chalk.red(r.ok)
//         }
//         console.log(
//             chalk.white('Status: ',r.status),
//             '\n',
//             chalk.white('Ok:'),(stat)
//         )
//     })
// }

// const toRender = (res) => {
//     res.map((r) => {
//         console.log(
//             chalk.white('Href: ',r.href),
//             chalk.white('Text: ',r.text),
//             chalk.white('File: ',r.file)
//         )
//     })
// }


module.exports = {
    toAbsolute,
    isRealPath,
    isMdFile,
    isDirectory,
    directoryContent,
    fileContent,
    getMdFilesWithLinks,
    getLinks,
    // toRender,
    // toRenderFull
}


// let c = getMdFilesWithLinks(mdNoLinks)
// // // console.log(c)
// let d = getLinks(c)
// console.log(d)
// console.log(d.length === 0)
// // console.log(validateTrue(d))()

// const h = getMdFilesWithLinks('C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\prueba-recursiva')
// console.log(getLinks(h))