import React from 'react'

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class SortOptions extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      sortDropdownOpen: false
    }
  }

  handelSortDropdownToggle() {

    this.setState({
      sortDropdownOpen: !this.state.sortDropdownOpen
    })
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.sortDropdownOpen} toggle={this.handelSortDropdownToggle.bind(this)}>
        <DropdownToggle color="secondary" caret>
          Sort History
        </DropdownToggle>
        <DropdownMenu>
          {this.props.sortOptions.map((option, index) => {
            return (
              <DropdownItem key={index} active={option.isActive} onClick={() => this.props.onClick(option.sort)}>{option.sort}</DropdownItem>
            )
          })}
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}
