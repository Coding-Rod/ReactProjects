import { useState, useEffect } from "react"

function useCategories() {
    const [categories, setCategories] = useState({
        all: true,
        rock: false,
        paper: false,
        scissors: false,
    });

    const updateCategories = ({ id }) => {
        setCategories({
            ...categories,
            [id]: !categories[id]
        })
    }

    useEffect(() => {
        if ((categories.all) &&
            (categories.rock || categories.paper || categories.scissors)
        ) {
            setCategories({
                all: true,
                rock: false,
                paper: false,
                scissors: false,
            })
        }
    }, [categories])

    return {
        categories: categories,
        updateCategories
    }
}

export { useCategories }