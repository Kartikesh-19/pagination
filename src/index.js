import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const middlware = [thunk]

export const mystore=createStore(rootReducer, applyMiddleware(...middlware));

   ReactDOM.render(
   <Provider store={mystore}>
   <App />
   </Provider>
   ,document.getElementById('root')
);

