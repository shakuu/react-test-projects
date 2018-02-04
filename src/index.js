import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

import Game from './tic-tac-toe/game.component'

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
