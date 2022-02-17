const path = require ('path')
const fs = require ('fs')

// const regexBackSlash = /\\/g
const regexLinkNotation = /^\[([\w\s\d]+)\]\((https?:\/\/[\w\d.\/?=#]+)\)$/gm
const regexUrl = /\(https?:\/\/[\w\d.\/?=#]+\)/gm
const regexText = /\[[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*\]/gm


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

//Recopilar links si los hay
const getLinks = (mdPathArray) => {
    let linksArray = []

    mdPathArray.forEach((file) => {
        const fullLinks = fileContent(file).match(regexLinkNotation)
        fullLinks.map((fullLink) => {
            const href = fullLink.match(regexUrl).join().slice(1, -1)
            const text = fullLink.match(regexText).join().slice(1, -1)
            linksArray.push({
                href: href,
                text: text,
                file: file
            })
        })
    })
    return linksArray
}

const axios = require ('axios')

//Validate true
const validateTrue = (basicInfoArray) => {
    const httpRequest = basicInfoArray.map((link) => axios.get(link.href)
        .then((res) => {
            return {
            href: link.href,
            text: link.text,
            file: link.file,
            status: res.status,
            ok: res.status>=200 && res.status<300 ? "OK" : "FAIL" 
        }})
        .catch((err) => {
            return {
            href: link.href,
            text: link.text,
            file: link.file,
            status: err.response ? err.response.status : "Failed request",
            ok: "FAIL"
        }})
    )
    return Promise.allSettled(httpRequest)
    .then((res) => console.log(res))
}


module.exports = {
    toAbsolute,
    isRealPath,
    isMdFile,
    isDirectory,
    directoryContent,
    fileContent,
    getMdFilesWithLinks,
    getLinks
}

let a = toAbsolute(recursiveSearch)
let b = isRealPath(recursiveSearch)
let c = getMdFilesWithLinks(recursiveSearch)
// console.log(c)
let d = getLinks(c)
// console.log(d)
console.log(validateTrue(d))

