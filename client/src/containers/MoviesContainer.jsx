import React from 'react';
import Movie from '../components/movie/Movie.jsx';
import Immutable, {List} from 'immutable'
import {connect} from 'react-redux';
import * as actions from '../actions/actions.jsx';

export const Movies = React.createClass({
    addToCart: function (movie) {
        return  () => {
            this.props.setCart(movie);
        };
    },
    removeFromCart: function (movie) {
        return () => {
            this.props.removeItemFromCart(movie);
        };
    },
    isMovieOnCart: function (movie) {
        let isOnCart = false;
        if(this.props.cart) {
            if (this.props.cart.has(movie.name)) {
                isOnCart = true;
            }
        }

        return isOnCart;
    },
    render: function() {
        return <div className="moviesContainer">
            {this.props.movies.map(movie =>
                <Movie key={movie.name} {...movie} addToCart={this.isMovieOnCart(movie) ?
                        this.removeFromCart(movie) : this.addToCart(movie)}></Movie>
            )}
        </div>;

    }
});

function mapStateToProps (state) {
    return {
        movies: state.get('movies'),
        cart: state.get('cart')
    };
}

export const MovieContainer = connect(
    mapStateToProps,
    actions
)(Movies)
