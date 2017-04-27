import { createStore, combineReducers, applyMiddleware } from 'redux';
import {
    middleware
} from '../middleware';

import {
    productReducer
} from '../reducers';

const middlewareCall = applyMiddleware(...middleware);

const store = createStore(productReducer, middlewareCall);

export default store;