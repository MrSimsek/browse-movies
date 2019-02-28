import React, { Component } from 'react';

export default class GameItem extends Component {
    render() {
        return(
            <li className="MovieItemContainer">
                <div className="MovieItemPoster">
                    <img width="150" src={"http:" + this.props.game.cover.url} alt="Game Poster" />
                </div>
                <div className="MovieItemInfo">
                    <h2>{this.props.game.name}</h2>
                    <p>{this.props.game.summary}</p>
                </div>
            </li>
        );
    }
}