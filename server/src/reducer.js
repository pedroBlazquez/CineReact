import {Map,List} from 'immutable';

function setMovies (state, movies) {
    return state.merge(movies);
}

function setCart(cartState, newCartState) {
    console.log(newCartState);
    return cartState.updateIn(['cart'], val => newCartState);
}

export default function (state = Map(), action) {
    switch (action.type) {
        case 'SET_MOVIES':
            return setMovies(state, action.movies);
        case 'CONFIRM_CART':
            return setCart(state, action.cartState);
        default:
            return state;
    }
}
