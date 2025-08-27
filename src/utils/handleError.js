const handleError = (res, err) => {
    console.log(err)

    if(err.name === "ValidationError" ){
        const messages = Object.values(err.errors).map((e) => {
            const field = e.path || "field"
            return `The ${field} field is ${e.kind || "invalid"}`
        })
        res.status(400).json({errors:messages})
    }

    if(err.code == 11000){
        const field = Object.keys(err.keyValue)[0]
        res.status(409).json({error:`A user with that ${field} already exists`})
    }
}

module.exports = handleError