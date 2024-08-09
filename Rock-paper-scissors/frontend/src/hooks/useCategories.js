import { useState, useEffect } from "react"

function useCategories() {
    const [all, setAll] = useState(false)
    const [rock, setRock] = useState(false)
    const [paper, setPaper] = useState(false)
    const [scissors, setScissors] = useState(false)

    const updateCategories = ({ id }) => {
        switch (id) {
            case 'all':
                setAll(!all)
                break
            case 'rock':
                setRock(!rock)
                break
            case 'paper':
                setPaper(!paper)
                break
            case 'scissors':
                setScissors(!scissors)
                break
        }
    }

    useEffect(() => {
        if (all) {
            setRock(false)
            setPaper(false)
            setScissors(false)
        }
    }, [all])

    return {
        categories: { all, rock, paper, scissors },
        updateCategories
    }
}

export { useCategories }