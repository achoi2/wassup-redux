import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

import { Provider } from 'react-redux'
import { createStore } from 'redux';

let intialState = {
    posts: [],
    newPost: '',
};

let reducer = (oldState, action) => {
    if (action.type === 'ADD_POST') {
        return oldState + action.newPosts;
      } else {
        return oldState
    }
}

console.log(reducer(intialState, {type: 'ADD_POST', newPosts: 'Hi'}))
console.log(intialState)

let store = createStore(
    reducer,
    intialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let app = <Provider store={store}>
    <Router/>
</Provider>

ReactDOM.render(app, document.getElementById('root'));

