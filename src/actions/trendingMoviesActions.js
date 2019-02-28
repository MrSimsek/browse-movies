export const FETCH_TRENDING_MOVIES = 'trendingMovies:fetchTrendingMovies';

export function fetchTrendingMovies() {
    return dispatch => {
        fetch("https://api.themoviedb.org/3/trending/all/day?api_key=e4ec1a62ca35ee5e5b80771bbc54de06")
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            }).catch(() => {
                console.log("error");
            });
    }
}