import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import trendingMoviesReducer from './reducers/trendingMoviesReducer';
import userReducer from './reducers/userReducer';

const allReducers = combineReducers({
    trendingMovies: trendingMoviesReducer,
    user: userReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

const store = createStore(
    allReducers,
    {
        trendingMovies: [{name: "spiderverse"}],
        user: 'Mike'
    },
    allStoreEnhancers
);

ReactDOM.render(<Provider store={store}><App randomProps="whatever" /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
