const express = require('express')
const app = express()
// const tasks = require("./routes/task")

const connectDb = require('./db/connect')
require('dotenv').config()
// const notFound = require('./middleware/not-found')

// middleware
app.use(express.json())

// routes


// app.use(notFound)


const port = 3000

const start = async () =>{
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    } 
}

start()