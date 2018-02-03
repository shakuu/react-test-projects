import React from 'react'

import '../history.css'

const boardCoordinatesByIndex = new Map([
  [0, 'Row: 1, Col 1'],
  [1, 'Row: 1, Col 2'],
  [2, 'Row: 1, Col 3'],
  [3, 'Row: 2, Col 1'],
  [4, 'Row: 2, Col 2'],
  [5, 'Row: 2, Col 3'],
  [6, 'Row: 3, Col 1'],
  [7, 'Row: 3, Col 2'],
  [8, 'Row: 3, Col 3'],
])

export default function BoardHistory(props) {

  return props.history.map((history, stepNumber) => {
    const description = stepNumber === 0 ? 'Go to game start' : 'Go to move #' + stepNumber + ': ' + boardCoordinatesByIndex.get(history.clickedSquare);

    return (
      <li key={stepNumber}>
        <button className={props.stepNumber === stepNumber ? 'active-step' : ''} onClick={() => props.onJumpTo(stepNumber)}>
          {description}
        </button>
      </li>
    )
  })
}
