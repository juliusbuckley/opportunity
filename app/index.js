import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
// import reducers from './reducers'
import App from './components/App';
import Bar from './components/Bar'

// Add the reducer to your store on the `routing` key
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     routing: routerReducer
//   })
// )


if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    var app = document.getElementById('root')
    ReactDOM.render(
      <Router>
        <div>
          <Route exact path="/" component={App} />
        </div>
      </Router>,app);
  });
}
