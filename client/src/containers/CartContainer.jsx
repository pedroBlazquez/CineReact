import React from 'react';
import Movie from '../components/movie/Movie.jsx';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.jsx';


export const Cart = React.createClass({
    getMovies: function () {
        return this.props.cart.toJS() || [];
    },
    render: function () {
        let id = 0;
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
