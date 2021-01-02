'use strict'
const express = require('express')

const app = express()
const port = process.env.PORT || 1337

// Support get request for home page
app.get('/', (req, res) => {
    res.send('Hello Express')
})

// Start listening to app requests
app.listen(port, () => {
    console.log('Started server on port ' + port)
})
