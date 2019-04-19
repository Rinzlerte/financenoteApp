import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {bank} from './store/reducers';
import {profits} from './store/reducers';
import {expenses} from './store/reducers';
import {balance} from './store/reducers';


import App from './App';

import './index.css';

const store = createStore(combineReducers({
    bank, profits, expenses, balance
}), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById('root'));


