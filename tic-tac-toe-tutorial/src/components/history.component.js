import React from 'react'

import { ListGroup, ListGroupItem } from 'reactstrap';

import SortContainer from '../containers/Sort.container'

import '../styles/history.css'

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
    const historyLength = this.props.historyItems.length;

    return (
      <div className="game-history">
        <SortContainer />
        <ListGroup>
          {this.props.historyItems.map((item, index) => {

            return (
              <ListGroupItem
                key={item.index}
                tag="button"
                active={this.props.historyIndex === item.index}
                onClick={() => this.props.onClick(item.index)}>
                {item.description}
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </div>
    )
  }
}
