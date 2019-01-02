const express = require('express') // Express is a minimal and flexible Node.js web application framework

const morgan = require('morgan') // HTTP request logger middleware for node.js

const cors = require('cors') // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

const bodyParser = require('body-parser') // Node.js body parsing middleware.
                //Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

 const mongoose = require('mongoose') // Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.



const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req , res) => {
    res.json({
        message: 'Hello , welcome to my application'
    })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    mongoose.connect('mongodb://localhost:27017/management-app',
    {useNewUrlParser: true}, 
    () => {
    console.log('Database connected...')
    });

})