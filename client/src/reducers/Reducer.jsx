import {List, Map, fromJS} from 'immutable';

function setMovies(state, newState) {
    return state.merge(newState);
}

function setCart(cartState, movie) {
    let cart = cartState.get('cart');
    if (!cart) {
        cart = List();
    }

    return cartState.updateIn(['cart'], val => cart.push(fromJS(movie)));
}

function removeFromCart(cartState, movie) {
    let cart =  cartState.get('cart');

    if (!cart) {
        cart = List();
    } else {
        cart = cart.filter(v => !v.equals(fromJS(movie)));
    }

    return cartState.updateIn(['cart'], val => cart);
}

export default function (state = Map(), action) {
    switch (action.type) {
        case 'SET_MOVIES':
        return setMovies(state, action.state);
        case 'SET_CART':
        return setCart(state, action.movie);
        case 'REMOVE_FROM_CART':
        return removeFromCart(state, action.movie);
    }
    return state;
}
