import { useEffect } from "react";

function useQueryParams() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return Object.fromEntries(params.entries());
}

function SearchPage({ routeParams }) {
  const { limit } = useQueryParams();

  console.log({ limit });

  useEffect(() => {
    document.title = `Buscando ${routeParams.query}`;
  }, []);

  return <h1>Buscando {routeParams.query}</h1>;
}

export default SearchPage;
