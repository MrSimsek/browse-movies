import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class TrendingMovies extends Component {
    render() {
        const trendingMovies = this.props.trendingMovies;
        const trendingMoviesList = trendingMovies.length ? (
            trendingMovies.map(movie => {
                return (
                    <li key={movie.id} className="MoviesSliderItem">
                        <Link to={{pathname: `/movies/${movie.id}`, state: {movieJSON: movie}}}>    
                            <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} alt="movie poster" style={{display: 'block', borderRadius: 5}} />
                            <p>{movie.title}</p>
                        </Link>
                    </li>
                )
            })
        ) : (
            <div>No posts yet.</div>
        );
        return (
            <div className="TrendingMovies" style={{marginTop: '2em'}}>
                <h1>Trending Movies</h1>
                <div className="Trending">
                    <ul className="MoviesSlider active">
                        {trendingMoviesList}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trendingMovies: state.trendingMovies.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrendingMovies: () => { dispatch({ type: 'FETCH_TRENDING_MOVIES' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingMovies);