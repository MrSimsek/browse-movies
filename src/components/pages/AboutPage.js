import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class AboutPage extends Component {
    render() {
        return(
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>About | Movies Search App</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <div className="AboutPage-info" style={{marginTop: '2em', textAlign: 'center', fontSize: '2em'}}>
                    This is About!
                </div>
            </div>
        );
    }
}