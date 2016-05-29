import {List, Map} from 'immutable';

function setMovies(state, newState) {
    return state.merge(newState);
}

function setCart(cartState, movie) {
    console.log(cartState);
    return cartState.updateIn(['cart',movie.name], val => movie);
}

function removeFromCart(cartState, movie) {
    return cartState.deleteIn(['cart', movie.name]);
}

export default function (state = Map(), action) {
    switch (action.type) {
        case 'SET_MOVIES':
        return setMovies(state, action.state);
        case 'SET_CART':
        return setCart(state, action.state);
    }
    return state;
}
