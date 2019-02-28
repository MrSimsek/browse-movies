import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import '../../App.css';
import MovieItem from '../MovieItem';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: []
    }
  }

  componentDidMount () {
    this.getInfo("lord");
  }

  getInfo(query) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e4ec1a62ca35ee5e5b80771bbc54de06&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(
        (result) => {
          let moviesData = [];
          result.results.forEach((movie) => {
            moviesData.push(<MovieItem key={movie.id} movie={movie} />);
          });
          this.setState({
            isLoaded: true,
            movies: moviesData
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  getGamesInfo(query) {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?search=${query}&fields=*`, {
      headers: {
        "user-key": "fbc3ffb2e1799b86b346746b3ef47da8",
        Accept: "application/json"
      }
    })
    .then(response => {
      // Do work here
      console.log(response.data);
    })
    .catch(e => {
      console.log("error", e);
    });
  }

  handleInputChange = () => {
    const query = this.search.value;
    if(query) {
      this.getInfo(query);
    } else {
      this.getInfo("lord");
    }
  }
  
  render() {
    const {error, isLoaded, movies} = this.state;
    if(error) {
      return (
          <div>Error: {error}</div>
      );
    } else if (!isLoaded) {
      return (
          <div>Loading...</div>
      );
    } else {
      return (
        <div className="SearchPage">
          <Helmet>
              <meta charSet="utf-8" />
              <title>Search | Movies Search App</title>
              <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <input
            className="SearchBar"
            placeholder="Enter search term"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <ul className="MoviesList">
            {movies}
          </ul>
        </div>
      );
    }
  }
}
