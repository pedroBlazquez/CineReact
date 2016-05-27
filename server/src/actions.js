import {List, Map} from 'immutable';

export function addToCart (state, movie) {
    return state.push(movie);
}
