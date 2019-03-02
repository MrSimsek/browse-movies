const initialState = {
    fetching: false,
    fetched: false,
    movies: [],
    error: null 
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_TRENDING_MOVIES_START':
            return {
                ...state, fetching: true
            };
        case 'FETCH_TRENDING_MOVIES_ERROR':
            return {
                ...state, fetching: false, error: action.payload
            }
        case 'FETCH_TRENDING_MOVIES_SUCCESS':
            return {
                ...state, fetching: false, fetched: true, movies: action.payload
            }
        default: 
            return state;

    }
}