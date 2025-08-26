require('dotenv').config()
const app = require("./src/app/app")
const port = process.env.PORT
const connectDB = require('./src/db/connection')

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Express server running on: http://localhost:${port}`)
    })
})
