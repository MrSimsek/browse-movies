import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import TrendingMovies from '../TrendingMovies';

export default class HomePage extends Component {
    render() {
        return(
            <div className="HomePage">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home | Movies Search App</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <TrendingMovies/>
            </div>
        );
    }
}