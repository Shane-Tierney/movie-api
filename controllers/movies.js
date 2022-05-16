/* eslint-disable max-len */
const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const isRunning = () => {
  console.log('server is up on http://localhost:1337') // eslint-disable-line no-console
}

const getDirectorOrTitle = (request, response) => {
  const { directorOrTitle } = request.params

  const foundMovie = movies.filter((movie) => {
    return movie.title.includes(directorOrTitle) || movie.directors.find((director) => director.toLowerCase().includes(directorOrTitle.toLowerCase())) })

  return response.send(foundMovie)
}

const createMovie = (request, response) => {
  const { title, directors, releaseDate, rating, runTime, genres } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('The following data fields are required: title, directors, releaseDate, rating, runTime, genres')
  }

  const newMovie = {
    title,
    directors,
    releaseDate,
    rating,
    runTime,
    genres
  }

  return response.status(201).send(newMovie)
}

module.exports = { getAllMovies, isRunning, getDirectorOrTitle, createMovie }
