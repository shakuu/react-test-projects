import React from 'react'

import Square from './square.component'

export default function Board(props) {
  const rowSize = props.rowSize || (Math.sqrt(props.squares.length) | 0);

  return (
    <div>
      {Array(rowSize).fill(null).map((_, row) => {
        const currentRow = row * rowSize;

        return (
          <div key={row} className="board-row">
            {Array(rowSize).fill(null).map((_, col) => {
              const squareIndex = currentRow + col
              const squareValue = props.squares[squareIndex]

              return (
                <Square key={col}
                  value={squareValue}
                  onClick={() => props.onClick(squareIndex)} />
              )
            })}
          </div>
        )
      })}
    </div>
  );
}
