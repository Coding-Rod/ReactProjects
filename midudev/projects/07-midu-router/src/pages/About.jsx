import { Link } from "../Link";
import { useI18n } from "../i18n";


function AboutPage({ routeParams}) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.about.title}</h1>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1531424650823188481/PgYdrPIN_400x400.jpg"
          alt="Foto de Rodrigo"
        />
      </div>
      <p>{i18n.about.description}</p>
      <Link to="/">{i18n.about.button}</Link>
    </>
  );
}

export default AboutPage