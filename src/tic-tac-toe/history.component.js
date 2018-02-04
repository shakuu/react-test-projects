import React from 'react'

import '../styles/history.css'

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

function getHistoryButtonLabel(stepNumber, historyItem) {

  const isFirstItem = stepNumber === 0
  if (isFirstItem) {
    return 'Game start'
  }

  const coordinatesLabel = boardCoordinatesByIndex.get(historyItem.clickedSquare)
  if (historyItem.isWon) {
    return `#${stepNumber} ${historyItem.player} Won: ${coordinatesLabel}`
  }
  if (historyItem.isDraw) {
    return `#${stepNumber} ${historyItem.player} Draw: ${coordinatesLabel}`
  }

  return `#${stepNumber} ${historyItem.player} Move: ${coordinatesLabel}`
}

export default class BoardHistory extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isAscending: true
    }
  }

  handleSortButtonClick() {

    this.setState({
      isAscending: !this.state.isAscending
    })
  }

  render() {
    const historyLength = this.props.history.length;
    const isAscending = this.state.isAscending
    const sortButtonLabel = isAscending ? 'Descending' : 'Ascending'

    return (
      <div className="game-history">
        <button onClick={this.handleSortButtonClick.bind(this)}>
          Sort History {sortButtonLabel}
        </button>
        <ol>
          {Array.from({ length: historyLength }).map((_, index) => {

            const stepNumber = isAscending ? index : historyLength - 1 - index
            const historyItem = this.props.history[stepNumber]
            const description = getHistoryButtonLabel(stepNumber, historyItem)

            return (
              <li key={stepNumber}>
                <button
                  className={this.props.stepNumber === stepNumber ? 'active-step' : ''}
                  onClick={() => this.props.onJumpTo(stepNumber)}>
                  {description}
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}
