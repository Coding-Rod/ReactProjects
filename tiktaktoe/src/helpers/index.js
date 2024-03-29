export const calculateWinner = (squares) => {
    const lines = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6]           // diagonals
    ]
    for (let line of lines){

        if (line.some(i => !squares[i])) continue; // if any square is empty, skip
        const [a,b,c] = line

        if (squares[a] === squares[b] && squares[a] === squares[c]){ // if all squares are the same
            return squares[a] // X or O
        }
    }
    return null
    }