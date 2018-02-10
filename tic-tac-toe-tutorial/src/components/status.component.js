import React from 'react'
import PropTypes from 'prop-types'

import { Alert } from 'reactstrap';

export default function BoardStatus({ statusMessage }) {

  return (
    <div className="game-status">
      <Alert
        color="info">
        {statusMessage}
      </Alert>
    </div>
  )
}

BoardStatus.propTypes = {
  statusMessage: PropTypes.string.isRequired
}
