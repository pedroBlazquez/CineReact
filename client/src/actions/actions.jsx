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

/*
This action will be executed only in server, to update CART
*/
export function confirmCart(cartState) {
    return {
        meta:{remote:true},
        type: 'CONFIRM_CART',
        cartState
    }
}
