import { connect } from 'react-redux'

import { sortHistory, HistorySortTypes } from '../actions/sort-history.action'

import SortOptions from '../components/sort.component'

const mapStateToProps = state => {

  const sortOptions = Object.keys(HistorySortTypes).map(key => {
    const sort = HistorySortTypes[key]
    return {
      sort,
      isActive: sort === state.sortHistory
    }
  })

  return {
    sortOptions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (option) => {
      dispatch(sortHistory(option))
    }
  }
}

const SortContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortOptions)

export default SortContainer
