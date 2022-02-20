const totalStat = (array) => {
    const total = array.length
    const message = `Total: ${total}`
    return `${message}`
}

const uniqueStat = (array) => {
    const unique = new Set(array.map((link) => link.href))
    const message = `Unique: ${unique.size}`
    return `${message}`
}

const brokenStat = (array) => {
    const broken = array.filter((link) => link.ok === "FAIL")
    const message = `Broken: ${broken.lenght}`
    return `${message}`
}

module.exports = {
    totalStat,
    uniqueStat,
    brokenStat
}

// console.log(uniqueStat([
//     {
//       href: 'https://nodejs.org/en/',
//       text: 'Link funcional',
//       file: 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\md-con-links\\prueba.md',
//       status: 200,
//       ok: 'OK'
//     },
//     {
//       href: 'https://nodejs.org/en/hello',    
//       text: 'Link no funcional',
//       file: 'C:\\Users\\gabri\\Desktop\\laboratoria-md-links\\LIM016-md-links\\pruebas\\md-con-links\\prueba.md',
//       status: 404,
//       ok: 'FAIL'
//     }
//   ]))