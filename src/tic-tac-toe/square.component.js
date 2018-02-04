import React from 'react'

import '../styles/square.css'

function getSquareClassName(shouldHighlight) {

  if (shouldHighlight === true) {
    return 'square square-highlight'
  }
  if (shouldHighlight === false) {
    return 'square square-opacity'
  }
  return 'square'
}

export default function Square(props) {
  return (
    <button className={getSquareClassName(props.highlightSquare)}
      onClick={() => props.onClick()}>

      {props.value}
    </button>
  )
}
