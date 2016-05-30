import React from 'react';
import Movie from '../components/movie/Movie.jsx';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.jsx';


export const Cart = React.createClass({
    getMovies: function () {
        let cart = [];
        if (this.props.cart) {
            cart = this.props.cart.toJS();
        }

        return cart;
    },
    render: function () {
        return <div>
            {this.getMovies().map(movie =>
                <Movie key={movie.name} {...movie}></Movie>
            )}
        </div>
    }
});

function mapStateToProps (state) {
    return {
        cart: state.get('cart')
    };
}

export const CartContainer = connect(
    mapStateToProps,
    actions
)(Cart)
