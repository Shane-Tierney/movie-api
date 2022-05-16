const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, isRunning, getDirectorOrTitle, createMovie } = require('./controllers/movies')

const app = express()

app.get('/', getAllMovies)

app.get('/movies/:directorOrTitle', getDirectorOrTitle)

app.post('/movies', bodyParser.json(), createMovie)

app.listen(1337, isRunning)
