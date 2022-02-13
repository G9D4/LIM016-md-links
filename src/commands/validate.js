const basicFunctions = require ('../api')

//Validate true
const validateTrue = (links, path) => {
    const basicInfoArray = validateFalse(links, path)
    const httpRequest = basicInfoArray.map((link) => {
        const axiosSearch = axios.get(link.href)
        .then((res) => {
            return {
            href: link.href,
            text: link.text,
            file: link.file,
            status: res.status,
            ok: res.status>=200 && res.status<300? "OK" : "FAIL" 
        }})
        .catch(() => {
            return {
            href: link.href,
            text: link.text,
            file: link.file,
            status: "Failed request",
            ok: "Unknown"
        }})
        return axiosSearch
    })
    return Promise.allSettled(httpRequest)
    // .then(res => console.log(res))
}

module.exports = {
    validateTrue
}