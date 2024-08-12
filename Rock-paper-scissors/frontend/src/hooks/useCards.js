const API_URL = 'http://localhost:8000/' 
const FILE_PREFIX = 'http://localhost:8081/'

import { useEffect, useMemo, useState } from "react";

function useCards({ categories }) {
    const [cards, setCards] = useState()
    
    const selectedCategories = useMemo(() => {
        return Object.keys(categories).filter(key => categories[key]);
    }, [categories]);
    
    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter((element) => {
                    const elementClass = element.classification.predictions[0].class.toLowerCase();
                    if (categories.all || selectedCategories.length === 0) {
                        return true;
                    }
                    return selectedCategories.includes(elementClass);
                });
                const newData = filteredData.map((element) => ({
                    id: element.id,
                    image_url: FILE_PREFIX + element.image_path,
                    name: element.classification.predictions[0].class,
                    confidence: (parseFloat(element.classification.predictions[0].confidence) * 100).toFixed(2),
                }));
                setCards(newData);
            });
    }, [categories, selectedCategories]);    

    return {
        cards
    }
}

export{ useCards }