const mongoose = require("mongoose")
const uri = process.env.MONGO_URI

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(uri)
        console.log(`Connected to MongoDB ${conn.connection.host}`)
    }catch(err){
        console.error(`Unable to connect to database`, err.message)
    }
}

module.exports = connectDB




