'use strict'
const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 1337

// Setting view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Support get request for home page
app.get('/', (req, res) => {
    res.render('index', {title:'Pug'})
})

// Start listening to app requests
app.listen(port, () => {
    console.log('Started server on port ' + port)
})
