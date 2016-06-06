import React from 'react';
import Movie from '../components/movie/Movie.jsx';
import {Map,List} from 'immutable'
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap'
import * as actions from '../actions/actions.jsx';


export const Cart = React.createClass({
    getMovies: function () {
        return this.props.cart || List.of({})
    },
    getTotalBill: function () {
        let total = 0;
        this.getMovies().map(movie => total += movie.get('price'));
        return total;
    },
    removeFromCart: function (movie) {
        return () => {
            this.props.removeItemFromCart(movie);
        }
    },
    saveCart: function() {
        return () => {
            console.log(this.props.cart);
            this.props.confirmCart(this.props.cart)
        }
    },
    render: function () {
        return <div className='cartContainer'>
            <h2>Items: {this.getMovies().size}</h2>
            <h2>Total bill: {'$'+this.getTotalBill()}</h2>
            <div>
            {this.getMovies().map(movie =>
                <Movie key={movie.get('name')}
                    imgUrl={movie.get('imgUrl')}
                    description={movie.get('description')}
                    price={movie.get('price')}
                    btnText='Remove'
                    cartAction={this.removeFromCart(movie)}>
                </Movie>
            )}
            </div>
            <Button bsSize="small" onClick={this.saveCart()}>{'Aceptar'}</Button>
        </div>
    }
});

function mapStateToProps (state) {
    return {
        cart: state.getIn(['cart'])
    };
}

export const CartContainer = connect(
    mapStateToProps,
    actions
)(Cart)
