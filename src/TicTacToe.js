import Board from "./components/Game Board/Board";
import React from "react";


const TicTacToe = () => {
    const [squares, setSquares] = React.useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = React.useState(0);
    const currentSquare = squares[currentMove];
    const isNext = currentMove % 2 === 0;

    const handlePlay = (nextSquares) => {
        const nextMove = [...squares.slice(0,currentMove + 1), nextSquares]
        setSquares(nextMove);
        setCurrentMove(nextMove.length - 1);
    }

    const jumpTo = (nextMove) => {
        setCurrentMove(nextMove);
    }

    const moves = squares.map((squares, move)=>{
        let description;
        if (move > 0) {
            description = "Go to move #" + move;
        }else {
            description = "Go to game start";
        }

        return <li key={move}>
            <button onClick={()=>jumpTo(move)}>{description}</button>
        </li>
    })

    return (
            <div className="tic-tac-toe">
            <Board isNext={isNext} onPlay={handlePlay} squares={currentSquare} />
            <div className="moves">
                <ol>
                    {moves}
                </ol>
            </div>
            </div>
    );
}

export default TicTacToe;