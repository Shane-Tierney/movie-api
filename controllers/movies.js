const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const isRunning = () => {
  console.log('server is up on http://localhost:1337') // eslint-disable-line no-console
}

// const getDirector = (request, response) => {
//     const { director } = request.params

//     const foundMovie = movies.filter((movie) => movie.directors.includes(director))

//     return response.send(foundMovie)
// }

const getDirectorOrTitle = (request, response) => {
  const { directorOrTitle } = request.params

  // eslint-disable-next-line max-len
  const foundMovie = movies.filter((movie) => {
    return movie.title.includes(directorOrTitle) || movie.directors.find((director) => director.toLowerCase().includes(directorOrTitle.toLowerCase())) })

  return response.send(foundMovie)
}



module.exports = { getAllMovies, isRunning, getDirectorOrTitle }
