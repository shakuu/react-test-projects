import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

import App from './components/App';
import todoApp from './reducers/app.reducer'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
