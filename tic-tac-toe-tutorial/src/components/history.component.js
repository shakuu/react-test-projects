import React from 'react'

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap';

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
