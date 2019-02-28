import React, { Component } from 'react';

export default class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
    }
    componentDidMount() {
        // const movieID = this.props.match.params.movieID;
        const { movieJSON } = this.props.location.state;
        if(movieJSON) {
            console.log('entered!')
            this.setState({
                movie: movieJSON
            });
        } else {
            console.log('hey entered!')
            this.setState({
                movie: {
                    title: "not found!"
                }
            });
        }
    }
    render() {
        const movie = this.state.movie;
        return(
            <div className="MovieDetails">
                <img className="MoviePoster" src={"https://image.tmdb.org/t/p/w400" + movie.poster_path} alt={movie.title} style={{display: 'block'}}/>
                <div className="MovieDetails-info" style={{margin: '1em 3em'}}>
                    <h1 className="MovieDetails-info-title" style={{marginTop: 0, fontSize: '2.5em'}}>{movie.title}</h1>
                    <span><strong>Average Vote:</strong> {movie.vote_average}</span> | <span><strong>Release Date:</strong> {movie.release_date}</span>
                    <p style={{fontSize: '1.5em'}}>{movie.overview}</p>
                </div>
            </div>
        );
    }
}