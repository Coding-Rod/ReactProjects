const API_URL = 'http://localhost:8000/' 
const FILE_PREFIX = 'http://localhost:8081/'

import { useEffect, useMemo, useState } from "react";

function useCards({ categories = {} }) {
    const [cards, setCards] = useState()
    
    const categoriesToFetch = useMemo(() => {
        console.log({categories})
        return  Object.keys(categories).filter(key => categories[key])
    }, [categories])

    useEffect(() => {
        console.log(categoriesToFetch)
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                const newData = data.map(element => {
                    return {
                        id: element.id,
                        image_url: FILE_PREFIX + element.image_path,
                        name: element.classification.predictions[0].class,
                        confidence: parseFloat(element.classification.predictions[0].confidence).toFixed(4) * 100
                    }
                })
                setCards(newData)
            })
    }, [])

    return {
        cards
    }
}

export{ useCards }