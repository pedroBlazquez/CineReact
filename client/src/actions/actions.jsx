export function setMovies(state) {
    return {
        type: 'SET_MOVIES',
        state
    }
};

export function setCart(movie) {
    return {
        type: 'SET_CART',
        movie
    }
};

export function removeItemFromCart(movie) {
    return {
        type: 'REMOVE_FROM_CART',
        movie
    }
};
