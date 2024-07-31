import { WINNER_COMBOS } from "../constants";

// The game ends if not empty spaces in board
const checkEndGame = (board2Check) =>
    board2Check.every((element) => element !== null);

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

export { checkWinner, checkEndGame };