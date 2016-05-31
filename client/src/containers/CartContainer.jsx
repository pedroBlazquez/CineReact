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
    getTotalBill: function () {
        let total = 0;
        this.getMovies().forEach(function(m){
            total += m.price;
        });
        return total;
    },
    removeFromCart: function (movie) {
        return () => {
            this.props.removeItemFromCart(movie);
        }
    },
    render: function () {
        return <div className='cartContainer'>
            <h2>Items: {this.getMovies().length}</h2>
            <h2>Total bill: {'$'+this.getTotalBill()}</h2>
            {this.getMovies().map(movie =>
                <Movie key={movie.name} {...movie} btnText='Remove' cartAction={this.removeFromCart(movie)}></Movie>
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
