'use strict';

const express = require('express')
const hbs = require('hbs')
const engine = require('consolidate')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, 'src/views')
const partialsPath = path.join(__dirname, 'src/views/partials')
const imagesPath = path.join(__dirname, '/public/img')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static dir to serve
app.use(express.static(publicDirectoryPath))

// require('dotenv').config()

//parsing middleware
app.use(express.urlencoded({ extended: true}))

//rotas
const routes = require('./src/routes/routes')
app.use('/', routes)


app.listen(port, () => console.log('listening on port: ' + port))