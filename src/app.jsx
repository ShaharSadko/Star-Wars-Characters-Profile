import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer.js';
import {Provider} from 'react-redux';
import {getCharacters} from './actions/characters';

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(getCharacters());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'));