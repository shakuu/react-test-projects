import React from 'react'

import '../styles/square.css'

function getSquareClassName(shouldHighlight) {

  if (shouldHighlight) {
    return 'square square-highlight'
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
