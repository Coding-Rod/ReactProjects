import { useState } from "react";
import confetti from "canvas-confetti";

const TURNS = {
    X: "x",
    O: "o",
};

const WINNER_COMBOS = [
    [0, 1, 2], // Rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonals
    [2, 4, 6],
];

const Square = ({ children, isSelected = false, updateBoard, index }) => {
    const classname = `square ${isSelected ? "is-selected" : ""}`;

    const handleClick = () => {
        updateBoard(index);
    };

    return (
        <div onClick={handleClick} className={classname}>
            {children}
        </div>
    );
};

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(TURNS.X);
    const [winner, setWinner] = useState(null);

    const checkWinner = (board2Check) => {
        for (const combo of WINNER_COMBOS) {
            const [a, b, c] = combo;
            if (
                board2Check[a] && // null or X pr O
                board2Check[a] === board2Check[b] &&
                board2Check[a] === board2Check[c]
            )
                return board2Check[a]; // X or O
        }
        return null;
    };

    // The game ends if not empty spaces in board
    const checkEndGame = (board2Check) =>
        board2Check.every((element) => element !== null);

    const updateBoard = (index) => {
        // Check if cell is not empty
        if (board[index] || winner) return;

        // Update board
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        // Change turn
        setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);

        // Check winner
        const newWinner = checkWinner(newBoard);
        if (newWinner){
            confetti();
            setWinner(newWinner); // This is async
        }

        // Check if game is over (for draw)
        if (checkEndGame(newBoard)) setWinner(false);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);
    };

    return (
        <main className="board">
            <h1>Tic tac toe</h1>
            <button onClick={resetGame}>Reset del juego</button>
            <section className="game">
                {board.map((square, index) => {
                    return (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                        >
                            {square}
                        </Square>
                    );
                })}
            </section>
            <section className="turn">
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>

            {winner !== null && (
                <div className="winner">
                    <div className="text">
                        <h2>{winner ? "Ganó: " : "Empate"}</h2>

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
            )}
        </main>
    );
}

export default App;
