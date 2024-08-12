const FILE_PREFIX = 'http://localhost:8081/'

import { useCallback, useMemo, useState } from "react";
import { getHands } from "../services/hands";

function useCards({ categories }) {
    const [cards, setCards] = useState([])
    
    const selectedCategories = useMemo(() => {
        return Object.keys(categories).filter(key => categories[key]);
    }, [categories]);
    
    const getCards = useCallback(
        async ({ categories }) => {
            try {
                const data = await getHands({ categories });
                setCards(data);
            } catch (error) {
                throw new Error('Error fetching cards');
            }
        }
    , [selectedCategories]);

    const formatedCards = useMemo(() => {
        return cards.map((element) => ({
            id: element.id,
            image_url: FILE_PREFIX + element.image_path,
            name: element.classification.predictions[0].class,
            confidence: (parseFloat(element.classification.predictions[0].confidence) * 100).toFixed(2),
        }));
    }, [cards]);

    return {
        cards: formatedCards,
        getCards
    }
}

export{ useCards }