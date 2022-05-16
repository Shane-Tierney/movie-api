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
    // eslint-disable-next-line max-len
    return movie.title.includes(directorOrTitle) || movie.directors.find((director) => director.toLowerCase().includes(directorOrTitle.toLowerCase())) })

  return response.send(foundMovie)
}



module.exports = { getAllMovies, isRunning, getDirectorOrTitle, createMovie }
