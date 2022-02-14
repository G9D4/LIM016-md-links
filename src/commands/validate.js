const axios = require ('axios')

//Validate true
const validateTrue = (basicInfoArray) => {
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
    .then(res => res)
}

module.exports = {
    validateTrue
}