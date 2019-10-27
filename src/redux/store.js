import { createStore, applyMiddleware, compose } from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [ logger, thunk ];

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;