import React from 'react';
import Movie from '../components/movie/Movie.jsx';
import Immutable, {List} from 'immutable'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions.jsx';

export const Movies = React.createClass({
    addToCart: function (movie) {
        return  () => {
            this.props.setCart(movie);
        };
    },
    removeFromCart: function () {

    },
    render: function() {
        return <div className="moviesContainer">
            {this.props.movies.map(movie =>
                <Movie key={movie.name} {...movie} addToCart={this.addToCart(movie)}></Movie>
            )}
        </div>;

    }
});

function mapStateToProps (state) {
    return {
        movies: state.get("movies")
    };
}

export const MovieContainer = connect(
    mapStateToProps,
    actions
)(Movies)
