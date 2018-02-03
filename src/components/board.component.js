import React from 'react'

import Square from './square.component'

export default function Board(props) {

  return (
    <div>
      {Array(3).fill(null).map((_, row) => {
        const currentRow = row * 3;
        return (
          <div key={row} className="board-row">
            {Array(3).fill(null).map((_, col) => {
              const squareIndex = currentRow + col
              return (
                <Square key={col}
                  value={props.squares[squareIndex]}
                  onClick={() => props.onClick(squareIndex)} />
              )
            })}
          </div>
        )
      })}
    </div>
  );
}
