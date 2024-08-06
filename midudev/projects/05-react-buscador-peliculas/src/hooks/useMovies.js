import { useState } from 'react';
import { searchMovies } from '../services/movies';

function useMovies({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // const previousSearch = useRef(search)

  const getMovies = async () => {
    
    try {
      //Initial State
      setLoading(true)
      setError(null)

      // Fetch
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
      
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }  

  return { movies, getMovies, loading, error }
}

export { useMovies }