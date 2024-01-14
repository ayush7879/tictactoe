
import React, { useState } from 'react';
import Square from './square';

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  
  const handleClick = (index) => {
    if (state[index] !== null || winner) return;

    const copy = [...state];
    copy[index] = turn ? 'X' : 'O';
    setState(copy);
    setTurn(!turn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setTurn(true);
  };
  const checkWinner = () => {
    const winLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let logic of winLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) return state[a];
    }

    return state.every((square) => square !== null) ? 'draw' : false;
  };

  const winner = checkWinner();


  return (
    <div className="Board-container">
      {winner ? (
        <>
          {winner === 'draw' ? (
            <>
              <h1>It's a draw!
              </h1>
              <button onClick={handleReset}>Play Again</button>
            </>
          ) : (
            <>
              {winner} won the game{' '}
              <button onClick={handleReset}>Play Again</button>
            </>
          )}
        </>
      ) : (
        <>
          <h4>Player {turn ? 'X' : 'O'} please move</h4>
          <div className="Board-row">
            {[0, 1, 2].map((i) => (
              <Square key={i} onClick={() => handleClick(i)} value={state[i]} />
            ))}
          </div>
          <div className="Board-row">
            {[3, 4, 5].map((i) => (
              <Square key={i} onClick={() => handleClick(i)} value={state[i]} />
            ))}
          </div>
          <div className="Board-row">
            {[6, 7, 8].map((i) => (
              <Square key={i} onClick={() => handleClick(i)} value={state[i]} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
