import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Partials
import Nav from './components/partials/Nav';

// Import Components
import SearchPage from './components/pages/SearchPage';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import MovieDetails from './components/MovieDetails';

import { connect } from 'react-redux';
import { updateUser } from './actions/userActions';

class App extends Component {
  handleChange = (event) => {
    this.setState({user: event.target.value});
  }

  onUpdateUser = (event) => {
    event.preventDefault();
    this.props.onUpdateUser(this.state.user);
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Nav user={this.props.user} />

          {/* <form onSubmit={this.onUpdateUser} style={{margin: 'auto', width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '1.5em'}}>
            <input type="text" style={{fontSize: '1.5em'}} placeholder="What is your name?" onChange={this.handleChange} />
            <input style={{border: 'none', fontSize: '1.5em'}} type="submit" value="Submit" />
          </form> */}

          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/movies/:movieID" component={MovieDetails} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    trendingMovies: state.trendingMovies,
    user: state.user,
    userWithProps: `${state.user} ${props.randomProps}`
  }
};

const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapActionsToProps)(App);
