import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class MovieItem extends Component {
    render() {
        const movie = this.props.movie;
        return(
            <li className="MovieItemContainer">
                <div className="MovieItemPoster">
                    <img width="150" src={"http://image.tmdb.org/t/p/w185" + movie.poster_path} alt="Movie Poster" />
                </div>
                <div className="MovieItemInfo">
                    <Link to={{pathname: `/movies/${movie.id}`, state: {movieJSON: movie}}}><h2>{movie.title}</h2></Link>
                    <span>{movie.vote_average}</span> | <span>{movie.release_date}</span>
                    <p>{movie.overview}</p>
                </div>
            </li>
        );
    }
}