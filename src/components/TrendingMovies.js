import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TrendingMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        if(!localStorage.getItem('result')) {
            console.log('hey')
            fetch("https://api.themoviedb.org/3/trending/all/day?api_key=e4ec1a62ca35ee5e5b80771bbc54de06")
            .then((response) => response.json())
            .then((result) => {
                let trending = [];
                localStorage.setItem("result", JSON.stringify(result));
                result.results.forEach((movie) => {
                    trending.push(
                        <li key={movie.id} className="MoviesSliderItem">
                            <Link to={{pathname: `/movies/${movie.id}`, state: {movieJSON: movie}}}>    
                                <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} alt="movie poster" style={{display: 'block', borderRadius: 5}} />
                                <p>{movie.title}</p>
                            </Link>
                        </li>
                    );
                });
                this.setState({
                    movies: trending
                });
            });
        } else {
            let trending = [];
            const result = JSON.parse(localStorage.getItem("result"));
            result.results.forEach((movie) => {
                trending.push(
                    <li key={movie.id} className="MoviesSliderItem">
                        <Link to={{pathname: `/movies/${movie.id}`, state: {movieJSON: movie}}}>
                            <img src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} alt="movie poster" style={{display: 'block', borderRadius: 5}} />
                            <p>{movie.title}</p>
                        </Link>
                    </li>
                );
            });
            this.setState({
                movies: trending
            });
        }
    }

    render() {
        return(
            <div className="TrendingMovies" style={{marginTop: '2em'}}>
                <h1>Trending Movies</h1>
                <div className="Trending">
                    <ul className="MoviesSlider active">
                        {this.state.movies}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TrendingMovies;