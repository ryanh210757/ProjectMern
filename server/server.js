const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const postRoutes= require('./routes/posts.js')

const app = express()
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}))   //important middleware for form's input
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())
app.use('/posts', postRoutes)


const PORT = 4000 || process.env.PORT

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => console.log("server listening at port 4000"))
    })
    .catch((error) => console.log(error.message)) 

//m6BTd4ZtWvQ4uLqv