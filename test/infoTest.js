const relPath = 'pruebas/md-con-links/prueba.md'

const absPath = 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\md-con-links\\prueba.md'

const dirPath = 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\md-sin-links'

const dirContent = ['prueba.md']

const filePath = 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\prueba-recursiva\\1\\2\\md-no-funcional.md'

const fileContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

const mdLinkArray = ['C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\prueba-recursiva\\1\\2\\3\\md-final.md', 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\prueba-recursiva\\1\\2\\md-funcional.md']

const recursivePath = 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\prueba-recursiva'

const getBasic = [
    {
      href: 'https://www.lipsum.com/',  
      text: 'Link final',
      file: 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\prueba-recursiva\\1\\2\\3\\md-final.md'
    },
    {
      href: 'https://nodejs.org/en/',   
      text: 'Link funcional',
      file: 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\prueba-recursiva\\1\\2\\md-funcional.md'
    },
    {
      href: 'https://nodejs.org/en/hello',
      text: 'Link no funcional 404',    
      file: 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\prueba-recursiva\\1\\2\\md-funcional.md'
    },
    {
      href: 'https://superpet.pe/412-cyber',
      text: 'Link no funcional 301',    
      file: 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\prueba-recursiva\\1\\2\\md-funcional.md'
    }
  ]

const arrayStatus = [
    {
      href: 'https://www.lipsum.com/',
      text: 'Link final',
      file: 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\prueba-recursiva\\1\\2\\3\\md-final.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://nodejs.org/en/',
      text: 'Link funcional',
      file: 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\prueba-recursiva\\1\\2\\md-funcional.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://nodejs.org/en/hello',
      text: 'Link no funcional 404',
      file: 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\prueba-recursiva\\1\\2\\md-funcional.md',
      status: 404,
      ok: 'FAIL'
    },
    {
      href: 'https://superpet.pe/412-cyber',
      text: 'Link no funcional 301',
      file: 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\prueba-recursiva\\1\\2\\md-funcional.md',
      status: 200,
      ok: 'OK'
    }
  ]

module.exports = {
    relPath,
    absPath,
    dirPath,
    dirContent,
    fileContent,
    filePath,
    mdLinkArray,
    recursivePath,
    getBasic,
    arrayStatus
}