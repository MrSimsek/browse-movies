import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';

import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import userReducer from './reducers/userReducer';
import rootReducer from './reducers/rootReducer';

const allReducers = combineReducers({
    user: userReducer,
    trendingMovies: rootReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

// Create store with all reducers, initial values and store enhancers
const store = createStore(
    allReducers,
    {
        user: 'partner'
    },
    allStoreEnhancers
);

store.dispatch((dispatch) => {
    dispatch({type: 'FETCH_TRENDING_MOVIES_START'});
    axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=e4ec1a62ca35ee5e5b80771bbc54de06")
        .then((response) => {
            dispatch({ type: 'FETCH_TRENDING_MOVIES_SUCCESS', payload: response.data.results });
        })
        .catch((err) => {
            dispatch({ type: 'FETCH_TRENDING_MOVIES_ERROR', payload: err });
        });
})

ReactDOM.render(
    <Provider store={store}>
        <App randomProps="whatever" />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
