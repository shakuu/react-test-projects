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

function getHistoryButtonLabel(stepNumber, clickedSquare) {

  const isFirstItem = stepNumber === 0
  if (isFirstItem) {
    return 'Go to game start'
  }

  return `#${stepNumber}: ${boardCoordinatesByIndex.get(clickedSquare)}`
}

export default function BoardHistory(props) {

  const historyLength = props.history.length;
  const isAscending = props.isAscending === void 0 ? true : props.isAscending;

  return Array.from({ length: historyLength }).map((_, index) => {

    const stepNumber = isAscending ? index : historyLength - 1 - index
    const historyItem = props.history[stepNumber]
    const description = getHistoryButtonLabel(stepNumber, historyItem.clickedSquare)

    return (
      <li key={stepNumber}>
        <button className={props.stepNumber === stepNumber ? 'active-step' : ''} onClick={() => props.onJumpTo(stepNumber)}>
          {description}
        </button>
      </li>
    )
  })
}
