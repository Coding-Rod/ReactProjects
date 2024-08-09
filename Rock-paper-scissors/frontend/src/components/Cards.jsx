function Cards({ cards, showModal }) {

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