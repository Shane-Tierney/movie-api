const express = require('express')
const movies = require('./movies')

const app = express()

app.get('/', (request, response) => {
    return response.send(movies)
})

app.listen(1337, () => {
    console.log('server is up on http://localhost:1337')
})