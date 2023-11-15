const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const postRoutes= require('./routes/posts.js')

const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}))   //important middleware for form's input
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())
app.use('/posts', postRoutes)

const uri = 'mongodb+srv://cheesecakes:yhYE5T9T8nne8ZAP@cheesecakes.frbv9ae.mongodb.net/?retryWrites=true&w=majority'
const PORT = 4000 || process.env.PORT

mongoose.connect(uri)
    .then(() => {
        app.listen(PORT, () => console.log("server listening at port 4000"))
    })
    .catch((error) => console.log(error.message)) 

//m6BTd4ZtWvQ4uLqv