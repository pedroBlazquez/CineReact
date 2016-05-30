import {List, Map, fromJS} from 'immutable';

function setMovies(state, newState) {
    return state.merge(newState);
}

function setCart(cartState, movie) {
    return cartState.updateIn(['cart', movie.name], val => fromJS(movie));
}

function removeFromCart(cartState, movie) {
    /*console.log('----SE REMOVIO------');
    console.log(cartState);
    console.log('-------------------');*/
    return cartState.deleteIn(['cart', movie.name]);
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
