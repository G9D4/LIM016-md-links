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
}

module.exports = {
    validateTrue
}