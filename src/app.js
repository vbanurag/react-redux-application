// /**
//  * Created by anurag on 24/4/17.
//  */
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import fetch from 'isomorphic-fetch';

// console.log('hello from redux');

// const reducer = (state = { a: 1, counter: 0 }, action) => {
//     switch (action.type) {
//         case 'INC':
//             {
//                 return {
//                     ...state,
//                     counter: state.counter + action.val
//                 }
//             }
//         case 'DEC':
//             {
//                 state.counter -= action.val;
//                 return state;
//             }
//     }
//     return state;
// }
// const reducerTwo = (state = 0, action) => {
//     switch (action.type) {
//         case 'DEC':
//             {
//                 return state - action.val;
//             }
//     }
//     return state;
// }

// const allreducer = combineReducers({
//     state1: reducer,
//     state2: reducerTwo
// })
// const logger = (store) => (next) => (action) => {
//     console.log(action.type);
//     next(action);
// }

// const middleware = applyMiddleware(logger, thunk);




// const intialState = {
//     users: [],
//     loading: false,
//     err: null
// }

// const userReducer = (state = intialState, action) => {
//     switch (action.type) {
//         case 'FETCH_USER_STARTED':
//             {
//                 return {
//                     ...state,
//                     loading: true
//                 }
//             }
//         case 'FETCH_USER_SUCCESS':
//             {
//                 let user = state.users.concat(action.users);
//                 return {
//                     ...state,
//                     users: user,
//                     loading: false
//                 }
//             }
//         case 'FETCH_USER_ERROR':
//             {
//                 return {
//                     ...state,
//                     err: action.err
//                 }
//             }

//     }
//     return state;
// }
// const store = createStore(userReducer, middleware);

// function fetchUser() {
//     return (dispatch) => {
//         dispatch({ type: 'FETCH_USER_STARTED' });
//         fetch('http://rest.learncode.academy/api/learncode/friends')
//             .then(response => response.json())
//             .then(users => {
//                 dispatch({ type: 'FETCH_USER_SUCCESS', users })
//             })
//             .catch((err) => { dispatch({ type: 'FETCH_USER_ERROR', err }) })
//     }
// }

// store.subscribe(() => {
//     console.log(store.getState());
// })

// const increment = (val) => {
//     return { type: 'INC', val: val }
// }
// const decrement = (val) => {
//     return { type: 'DEC', val: val }
// }

// // store.dispatch(increment(5));
// // store.dispatch(increment(5));
// // store.dispatch(decrement(5));

// store.dispatch(fetchUser());

// import store from '../src/stores/app.store';
// import {
//     fetchUser,
//     addUser
// } from '../src/actions';

// store.subscribe(() => {
//     console.log(store.getState());
// })

// store.dispatch(fetchUser())
// store.dispatch(addUser())

// react app start

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import App from './component/app.component';
import store from '../src/stores/app.store';

render(
    <Provider store = { store } >
        <App />
    </Provider>,
    document.getElementById('app')
)