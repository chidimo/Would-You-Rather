import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import { reducer } from './reducers/reducer';

import App from '../src/components/App';

const logger = createLogger()
const store = createStore( reducer, applyMiddleware(thunk, logger) )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
