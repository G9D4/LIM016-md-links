const api = require ('../src/api')
const stats = require ('../src/commands/stats')
const validate = require ('../src/commands/validate')
const mdLinks = require ('../src/index')

const {relPath, absPath, dirPath, dirContent, fileContent, filePath, mdLinkArray, recursivePath} = require ('./infoTest')

describe('api', () => {

  describe('toAbsolute', () => {
    it('convierte ruta a absoluta', () => {
      expect(api.toAbsolute(relPath)).toBe(absPath)
    })
  })

  describe('isRealPath', () => {
    it('verifica existencia de la ruta, retorna un booleano', () => {
      expect(api.isRealPath(absPath)).toBe(true)
    })
  })

  describe('isMdFile', () => {
    it('verfica si es .md, retorna un booleano', () => {
      expect(api.isMdFile(absPath)).toBe(true)
    })
  })

  describe('isDirectory', () => {
    it('verifica si es un directorio, retorna un booleano', () => {
      expect(api.isDirectory(absPath)).toBe(false)
    })
  })

  describe('directoryContent', () => {
    it('retorna el contenido del directorio', () => {
      expect(api.directoryContent(dirPath)).toEqual(dirContent)
    })
  })

  describe('fileContent', () => {
    it('lee el contenido del file', () => {
      expect(api.fileContent(filePath)).toBe(fileContent)
    })
  })

  describe('getMdFilesWithLinks', () => {
    it('retorna un array de files .md con links', () => {
      expect(api.getMdFilesWithLinks(recursivePath)).toStrictEqual(mdLinkArray)
    })
  })

  describe('getLinks', () => {
    it('obtiene los links y su informacion basica', () => {
      expect(api.getLinks()).toBe()
    })
  })
})

// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });
