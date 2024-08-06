function ListOfMovies({ movies, loading, error }) {
  if (loading) return (<p>Loading...</p>)
  if (error) return (<span style={{color: 'red'}}>{error}</span>)
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoResultsFound() {
  return <p>No se encontraron resultados</p>;
}

function Movies({ movies, loading, error }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} loading={loading} error={error} /> : <NoResultsFound />;
}

export { Movies };
