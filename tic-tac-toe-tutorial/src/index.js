import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

import Game from './components/game.component'

import gameApp from './reducers/game.reducer'
const store = createStore(gameApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
