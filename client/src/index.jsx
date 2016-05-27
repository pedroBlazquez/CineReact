import React from 'react';
import {Map, List} from 'immutable';
import ReactDOM from 'react-dom';
import Movies from './containers/MoviesContainer.jsx';
import Router from './routes/Routes.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/Reducer.jsx';
import {setMovies} from './actions/actions.jsx';

let movies = {
    movies:[
        {
            name:"name",
            description:"description"
        },
        {
            name:"other name",
            description:"other descriptions"
        }
    ]
};
const store = createStore(reducer);
store.dispatch(setMovies(movies));

ReactDOM.render(
    <Provider store={store}>
        <Router></Router>
    </Provider>,
    document.getElementById('app')
);
