import React from 'react'

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap';

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
      isAscending: true,
      sortDropdownOpen: false
    }
  }

  handleSortButtonClick(isAscending) {

    this.setState({
      isAscending: isAscending
    })
  }

  handelSortDropdownToggle() {

    this.setState({
      sortDropdownOpen: !this.state.sortDropdownOpen
    })
  }

  shouldDisabledropdown(historyLength) {
    historyLength = historyLength || 1;

    // return historyLength <= 1;
    return false;
  }

  render() {
    const historyLength = this.props.history.length;
    const isAscending = this.state.isAscending

    return (
      <div className="game-history">
        <ButtonDropdown isOpen={this.state.sortDropdownOpen} toggle={this.handelSortDropdownToggle.bind(this)}>
          <DropdownToggle color="secondary" disabled={this.shouldDisabledropdown(historyLength)} caret>
            Sort History
        </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => this.handleSortButtonClick(false)}>Newest first</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.handleSortButtonClick(true)}>Oldest first</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <ListGroup>
          {Array.from({ length: historyLength }).map((_, index) => {

            const stepNumber = isAscending ? index : historyLength - 1 - index
            const historyItem = this.props.history[stepNumber]
            const description = getHistoryButtonLabel(stepNumber, historyItem)

            return (
              <ListGroupItem
                key={stepNumber}
                tag="button"
                active={this.props.stepNumber === stepNumber}
                onClick={() => this.props.onJumpTo(stepNumber)}>
                {description}
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </div>
    )
  }
}
