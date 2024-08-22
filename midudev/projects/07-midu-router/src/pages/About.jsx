import { Link } from "../Link";

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1531424650823188481/PgYdrPIN_400x400.jpg"
          alt="Foto de Rodrigo"
        />
      </div>
      <p>Hola, estoy creando un clon de React-Router</p>
      <Link to="/">Ir a la Home</Link>
    </>
  );
}

export {
  AboutPage
}