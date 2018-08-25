import React from 'react';
import 'core-js/fn/object/assign';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProfileService from './utils/ProfileService'
import configureStore from './redux/configureStore';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
let reactHotLoader = require('react-hot-loader')
let AppContainer = reactHotLoader.AppContainer

// if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    var app = document.getElementById('root')
    ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,app);
    });
// }

export default store
