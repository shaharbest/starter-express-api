require('dotenv').config();
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hi')
})

app.get('/test', (req, res) => {
    res.send(process.env.SERVER_URL)
})

app.listen(process.env.PORT || 3000)