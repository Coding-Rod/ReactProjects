import { useMemo, useRef, useState } from 'react';
import { searchMovies } from '../services/movies';

function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      //Initial State
      setLoading(true)
      setError(null)
      previousSearch.current = search

      // Fetch
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
      
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }},[])

  // This hook is used to excecute and return information
  // once one of its dependencies changes
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, error }
}

export { useMovies }