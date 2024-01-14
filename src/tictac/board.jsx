import React from 'react'
import { useState } from 'react'
import Square from './square'
const Board=()=> {
  const [state, setstate] = useState(Array(9).fill(null));
  const [turn, setturn] = useState(true);
  const checkwinner=()=>{
    const winlogic=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let logic of winlogic){
      const [a,b,c]=logic;
      if(state[a]!==null&&state[a]===state[b]&&state[b]===state[c])return state[a];
    }
    return false;
  };
  const  iswinner= checkwinner();
  const handleClick= (index)=>{
    if(state[index]!=null)return ;
const copy=[...state];
copy[index]= turn?'X':'O';
setstate(copy);
setturn(!turn);
  }
  const handleReset=()=>{
    setstate(Array(9).fill(null));
  }
  return (
    <div className="Board-container">
      {iswinner ? (
        <>
          {iswinner} won the game{" "}
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <h4>Player {turn ? "X" : "O"} please move</h4>
          <div className="Board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="Board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="Board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
