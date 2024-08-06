import "./App.css";
import { useRef } from "react";
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies.js';

function App() {
  const { movies } = useMovies()
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = inputRef.current.value
    console.log(value)

  }
 
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" placeholder="Avengers, Star Wars, The Matrix..." />
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
