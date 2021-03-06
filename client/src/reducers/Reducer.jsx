import {List, Map, fromJS} from 'immutable';

function setMovies(state, newState) {
    return state.merge(newState);
}

function setCart(cartState, movie) {
    let cart = cartState.get('cart');
    if (!cart) {
        cart = List();
    }

    return cartState.updateIn(['cart'], val => cart.push(movie));
}

function setFilteredMovies(state, movies) {
    return state.setIn(['filteredMovies'], movies);
}

function removeFromCart(cartState, movie) {
    let cart =  cartState.get('cart');

    if (!cart) {
        cart = List();
    } else {
        cart = cart.filter(v => !v.equals(movie));
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
        case 'FILTER_MOVIES':
        return setFilteredMovies(state,action.movie);
    }
    return state;
}
