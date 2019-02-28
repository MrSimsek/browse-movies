import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <nav className="App-nav">
                <table>
                    <tbody>
                        <tr>
                            <td><span role="img" aria-label="Popcorn emoji" style={{margin: '0.5em'}}>🍿</span></td>
                            <td style={{fontWeight: 'bold'}}>Browse Movies</td>
                        </tr>
                    </tbody>
                </table>
                <ul className="App-navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <p>Howdy {this.props.user}!</p>
            </nav>
        );
    }
}