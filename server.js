'use strict'
const express = require('express')
const path = require('path')
const cppAddon = require('./cppaddon.node');

const app = express()
const port = process.env.PORT || 1337

// Use static resources in scripts folder
app.use('/styles', express.static(path.join(__dirname, 'styles')))
app.use('/scripts', express.static(path.join(__dirname, 'scripts')))
app.use('/three', express.static(path.join(__dirname, '/node_modules/three/build')))

// Setting view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Support get request for home page
app.get('/', (req, res) => {
    res.render('index', { title: 'Cube' })
})

// send response from C++ addon
app.get('/cppaddon', (req, res) => {
    res.send(cppAddon.Hello())
})

// Start listening to app requests
app.listen(port, () => {
    console.log('Started server on port ' + port)
})
