const express = require('express')
const app = express()

var bodyParser = require('body-parser')
var twitters = require('./routes/twitters')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', twitters)


app.listen(3000)
