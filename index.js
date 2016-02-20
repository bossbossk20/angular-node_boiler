var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var info = require('./models/led/led.route.js')
var app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', info)

app.listen(3000)
console.log("running on port 3000")
