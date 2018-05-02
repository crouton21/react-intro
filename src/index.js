import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// createStore is a function
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider is a component
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import registerServiceWorker from './registerServiceWorker';

const firstReducer = (state = 0, action) => {
    switch(action.type){
        case ('BUTTON_ONE'):
            return state += 1;
        case ('BUTTON_TWO'):
            return state -= 1;
        default:
            return state;
    }
}

const elementReducer = (state = [], action) => {
    switch(action.type){
        case('ADD_ELEMENT'):
            return [...state, action.payload];
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        firstReducer,
        elementReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
