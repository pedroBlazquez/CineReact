import {List, Map} from 'immutable';

function setMovies(state, newState) {
    return state.merge(newState);
}

export default function (state = Map(), action) {
    switch (action.type) {
        case 'SET_MOVIES':
        return setMovies(state, action.state);
    }
    return state;
}
