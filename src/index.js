import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers--> this doesn't work

// import { rootReducer } from './reducers/index';
import { charsReducer } from './reducers/starWarsReducer';
import './index.css';
import { App } from './components';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(charsReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
