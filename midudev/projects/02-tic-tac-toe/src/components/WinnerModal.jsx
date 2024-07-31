import { Square } from "./Square"

const WinnerModal = ({winner, resetGame}) => {
    if (winner === null) return;

    const header = winner ? "Ganó: " : "Empate"

    return (
        <div className="winner">
            <div className="text">
                <h2>{header}</h2>

                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button onClick={resetGame}>
                        Empezar de nuevo
                    </button>
                </footer>
            </div>
        </div>
    )
}

export { WinnerModal };