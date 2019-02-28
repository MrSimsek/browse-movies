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

const initState = {
    favorites: [],
    garbages: []
}

// Reducers change the state
function favoritesReducer(state = initState, action) {
    switch(action.type) {
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [ ...state.favorites, action.favorite ]
            };
        default:
            return state;
    }
}

// Actions informs the store about a change
const favoriteAction = { type: 'ADD_FAVORITE', favorite: { type: "movie", data: {} }}

const allReducers = combineReducers({
    trendingMovies: trendingMoviesReducer,
    user: userReducer,
    favorites: favoritesReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

// Create store with all reducers, initial values and store enhancers
const store = createStore(
    allReducers,
    {
        trendingMovies: [{name: "spiderverse"}],
        user: 'Deniz'
    },
    allStoreEnhancers
);

// Dispatch the action
store.dispatch(favoriteAction);
store.dispatch({ type: 'ADD_FAVORITE', favorite: { type: "movie", data: {} }});

ReactDOM.render(<Provider store={store}><App randomProps="whatever" /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
