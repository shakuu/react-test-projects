import React from 'react'

import Square from './square.component'

export default function Board(props) {
  const squares = props.board.squares
  const rowSize = props.rowSize || (Math.sqrt(squares.length) | 0);

  return (
    <div>
      {Array(rowSize).fill(null).map((_, row) => {
        const currentRow = row * rowSize;

        return (
          <div key={row} className="board-row">
            {Array(rowSize).fill(null).map((_, col) => {
              const squareIndex = currentRow + col
              const squareValue = squares[squareIndex]
              let highlightSquare = null
              if (props.board.isWon) {
                highlightSquare = props.board.winningLine.indexOf(squareIndex) !== -1
              }

              return (
                <Square key={col}
                  value={squareValue}
                  highlightSquare={highlightSquare}
                  onClick={() => props.onClick(props.board.nextPlayer, squareIndex)} />
              )
            })}
          </div>
        )
      })}
    </div>
  );
}
