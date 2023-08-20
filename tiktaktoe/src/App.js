import { useState } from 'react'
import { Board } from './components/Board'

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [xIsNext, setXIsNext] = useState(true);
  const squares = history[history.length - 1]
  
  function handlePlay(winner, nextSquares){
    if (winner || squares.every(square => square)){
      setHistory([Array(9).fill(null)])
      setXIsNext(true)
      return
    }
    setXIsNext(!xIsNext)
    setHistory([...history, nextSquares])
  }

  function jumpTo(step) {
    setHistory(history.slice(0, step + 1))
    setXIsNext(step % 2 === 0)
  }

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      )
    }
  )

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          xIsNext={xIsNext} 
          squares={squares} 
          onPlay={handlePlay} 
        />
      </div>
      <div className="game-info">
        <ol>{ moves }</ol>
      </div>
    </div>
  )
  
    
}