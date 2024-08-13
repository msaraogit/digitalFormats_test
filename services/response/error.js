// response400.js
function mapResponse400(error) {
    //console.log("🚀 ~ mapResponse400 ~ error:", error.response.data.error)
    
    return {
        error: error.response.data.error.map(err => ({
            code: err.code,
            expected: err.expected,
            received: err.received,
            path: err.path,
            message: err.message,
        }))
    };
}

module.exports = { mapResponse400 };
