// Libraries
import debounce from "just-debounce-it";
import { useCallback, useState } from "react";

// Css
import "./App.css";

// Hooks
import { useMovies } from "./hooks/useMovies.js";
import { useSearch } from "./hooks/useSearch.js";

// Components
import { Movies } from "./components/Movies";

function App() {
  const [sort, setSort] = useState(false);

  const { search, updateSearch, error } = useSearch();
  const {
    movies,
    getMovies,
    loading,
    error: fetchError,
  } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 500)
  ,[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error) return
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort)
  };

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    if (error) return
    debouncedGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="query"
            type="text"
            placeholder="Avengers, Star Wars, The Matrix..."
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} loading={loading} error={fetchError} />
      </main>
    </div>
  );
}

export default App;
