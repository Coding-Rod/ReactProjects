import { useState } from 'react'
import './App.css'



function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <a href="/about">Ir a Sobre nosotros</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div><img src="https://pbs.twimg.com/profile_images/1531424650823188481/PgYdrPIN_400x400.jpg" alt="Foto de Rodrigo"/></div>
      <p>Hola, estoy creando un clon de React-Router</p>
      <a href="/">Ir a la Home</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
      
    </main>
  )
}

export default App
