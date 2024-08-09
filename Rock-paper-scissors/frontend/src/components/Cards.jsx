const API_URL = 'http://localhost:8000/' 
const FILE_PREFIX = 'http://localhost:8081/'

import { useEffect, useState } from "react";

function Cards({ showModal }) {
    const [cards, setCards] = useState()

    useEffect(() => {
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

    const handleClick = () => {
        showModal(true)
    }

    return (
        <div className="cards">
            {cards && ( cards.map(card => {
                return (
                    <div className="card" key={card.id}>
                        <img src={card.image_url} alt={card.name} />
                        <h2>{card.name}</h2>
                        <p>Confidence: {card.confidence}%</p>
                    </div>
                )
            }))}
            <button className="add" onClick={handleClick}>
                <h1>+</h1>
            </button>
        </div>
    );
}

export { Cards }