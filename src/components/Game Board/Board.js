import Square from "./Square.js";
import React from "react";
import "./GameBoard.css";

const Board = ({isNext, onPlay, squares}) => {

  const handleClick = (i) => {
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (isNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "Y";
    }
    onPlay(nextSquares);
  }

  const winner = CalculateWinner(squares);
    let status;
    if (winner) {
      status = (
        <span className="winner">
          Winner: <span>{winner}</span>
        </span>
      );
    } else {
      status = (
        <span>
          Next Player: <span className="player">{isNext ? "X" : "Y"}</span>
        </span>
      );
    }

    return <div className="board">
      <div className="status">{status}</div>
      <div className="wrapper">
      <div className="board-row">
        <Square classname={"b1 b"} value={squares[0]} onSquareClick={()=>handleClick(0)} />
        <Square classname={"b2 b"} value={squares[1]} onSquareClick={()=>handleClick(1)} />
        <Square classname={"b3 b"} value={squares[2]} onSquareClick={()=>handleClick(2)} />
      </div>
      <div className="board-row">
        <Square classname={"b4 b"} value={squares[3]} onSquareClick={()=>handleClick(3)} />
        <Square classname={"b5 b"} value={squares[4]} onSquareClick={()=>handleClick(4)} />
        <Square classname={"b6 b"} value={squares[5]} onSquareClick={()=>handleClick(5)} />
      </div>
      <div className="board-row">
        <Square classname={"b7 b"} value={squares[6]} onSquareClick={()=>handleClick(6)} />
        <Square classname={"b8 b"} value={squares[7]} onSquareClick={()=>handleClick(7)} />
        <Square classname={"b9 b"} value={squares[8]} onSquareClick={()=>handleClick(8)} />
      </div>
      </div>
    </div>;
}

function CalculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;