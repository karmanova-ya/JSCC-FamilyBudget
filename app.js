const express = require('express')
const bodyParser = require('body-parser')

const userRouter = require('./routes/user')
const cardRouter = require('./routes/card')

require('./mongo-connection') 

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/card', cardRouter)

app.get('/', (req, res) => {
    res.render('index')
})

module.exports = app