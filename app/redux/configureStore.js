import { compose, applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { profileActions } from './modules/profile'
import * as ProfileService  from '../utils/ProfileService'
const configureStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(ProfileService.runner,logger),
      // Conditionally add the Redux DevTools extension enhancer if it is installed.
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

export default configureStore;
