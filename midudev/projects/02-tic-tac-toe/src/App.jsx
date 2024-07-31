// Libraries
import confetti from "canvas-confetti";

// React hooks
import { useState } from "react";

// Components
import { Square } from "./components/Square";
import { WinnerModal } from "./components/WinnerModal";

// Constants
import { TURNS } from "./constants";

// Logic
import { checkWinner, checkEndGame } from "./logic/board";

function App() {
    const [board, setBoard] = useState(() => {
        // Set board if exists on local storage
        const boardFromStorage = window.localStorage.getItem("board");
        if (!boardFromStorage) return Array(9).fill(null); // default value
        return JSON.parse(boardFromStorage);
    });
    const [turn, setTurn] = useState(() => {
        // Set board if exists on local storage
        const turnFromStorage = window.localStorage.getItem("turn");
        return turnFromStorage ?? TURNS.X;
    });
    const [winner, setWinner] = useState(null);

    const updateBoard = (index) => {
        // Check if cell is not empty
        if (board[index] || winner) return;

        // Update board
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        // Change turn
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);

        // Save match
        window.localStorage.setItem("board", JSON.stringify(newBoard));
        window.localStorage.setItem("turn", newTurn);

        // Check winner
        const newWinner = checkWinner(newBoard);
        if (newWinner) {
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

        // Clear localstorage
        window.localStorage.removeItem("board");
        window.localStorage.removeItem("turn");
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

            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    );
}

export default App;
