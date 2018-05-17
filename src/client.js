import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import counterApp from './reducers';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__
// Create Redux store with initial state
const store = createStore(counterApp, preloadedState, applyMiddleware(
  thunk,
));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
