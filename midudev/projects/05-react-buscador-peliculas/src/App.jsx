import "./App.css";
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies.js';

function App() {
  const { movies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(
      new FormData(event.target)
    )
    console.log(query)

    // En caso de existir más campos:
    /*
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields)
    */

  }
 
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name="query" type="text" placeholder="Avengers, Star Wars, The Matrix..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
