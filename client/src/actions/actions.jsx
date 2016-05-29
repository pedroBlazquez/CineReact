export function setMovies(state) {
    return {
        type: 'SET_MOVIES',
        state
    }
};

export function setCart(state) {
    return {
        type: 'SET_CART',
        state
    }
};

export function removeItemFromCart(movie) {
    return {
        type: 'REMOVE_FROM_CART',
        movie
    }
};
