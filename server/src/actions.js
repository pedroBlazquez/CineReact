import {List, Map} from 'immutable';

export function setMovies(movies) {
    return {
        type:'SET_MOVIES',
        movies
    }
}

export function setCart(cart) {
    return {
        type:'SET_CART',
        cart
    }
}
