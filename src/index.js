import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// createStore is a function
import { createStore, applyMiddleware } from 'redux';
// Provider is a component
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducers from './redux/reducers/app.reducer';

import registerServiceWorker from './registerServiceWorker';



const storeInstance = createStore(
    reducers,
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
