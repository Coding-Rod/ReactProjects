import { useState } from 'react'
import { Board } from './components/Board'

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  function handlePlay(winner, nextSquares){
    if (winner || squares.every(square => square)) setSquares(Array(9).fill(null)) // reset game
    setXIsNext(!xIsNext)
    setSquares(nextSquares)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
      </div>
    </div>
  )
  
    
}