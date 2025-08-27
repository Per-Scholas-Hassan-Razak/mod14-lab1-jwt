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
        res.status(409).json({error:err.message})
    }

    if(err.statusCode === 400){
        res.status(400).json({error:err.message})
    }

    if(err.statusCode === 404){
        res.status(404).json({error:`NOT FOUND`})
    }
}

module.exports = handleError