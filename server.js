//Set Up Server
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

//Connect to MongoDB
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE, {
    useNewURLParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log('Connected to mongoose')
})

// Connection Error/Success --> optional
mongoose.connection.on("error", (err) => console.log(err.message + " is Mongo not running?"))
mongoose.connection.on("open", () => console.log("mongo connected: ", process.env.DATABASE))
mongoose.connection.on("close", () => console.log("mongo disconnected"))

//Middleware
app.use((req, res, next) => {
    console.log('running for all routes')
    next()
})
app.use(express.urlencoded({extended: false}))  //body-parser package
// app.use(express.static('public'))
app.use(cors({origin: '*'}))

//Setting Controller
const propertyController = require('./controllers/routes')
app.use('/property', propertyController)

//Server Status Check
app.listen(process.env.PORT || 3001, () => {
    console.log('listening')
})