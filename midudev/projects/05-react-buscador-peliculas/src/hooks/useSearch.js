import { useEffect, useRef, useState } from "react";

function useSearch() {
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {
            // When search != '' isFirstInput.current is set to false
            isFirstInput.current = search === ''
            return
        }

        if (search === "") {
            setError("No se puede buscar una pelicula vacia");
            return
        }

        if (search.match(/^\d+$/)) {
            setError("No se puede buscar una película con un número");
            return
        }

        if (search.length < 3) {
            setError("La búsqueda debe tener al menos 3 caracteres");
            return
        }

        setError(null)

    }, [search]);

    const updateSearch = (value) => {
        const newQuery = value;
        if (newQuery.startsWith(" ")) return;
        setSearch(value);
    }

    return { search, updateSearch, error }
}

export { useSearch }