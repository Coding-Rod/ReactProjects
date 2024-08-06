const API_URL = 'https://www.omdbapi.com/?apikey=8e8523df&s='

async function searchMovies({ search }) {
  if (search === '') return
  try {
    const response = await fetch(`${API_URL}${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));

  } catch (error) {
    throw new Error('Error searching movies')
  }
}

export { searchMovies }