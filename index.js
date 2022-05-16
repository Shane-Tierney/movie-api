const express = require('express')
const movies = require('./movies')
const { getAllMovies, isRunning, getDirectorOrTitle } = require('./controllers/movies')

const app = express()

app.get('/', getAllMovies)

app.get('/movies/:directorOrTitle', getDirectorOrTitle)



app.listen(1337, isRunning)
