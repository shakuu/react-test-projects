import React from 'react'

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
