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
    const broken = array.filter((link) => link.ok === 'FAIL')
    const message = `Broken: ${broken.length}`
    return `${message}`
}

module.exports = {
    totalStat,
    uniqueStat,
    brokenStat
}