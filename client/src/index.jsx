import React from 'react';
import {Map, List} from 'immutable';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/Reducer.jsx';
import {setMovies} from './actions/actions.jsx';
import MainContainer from './containers/MainPageContainer.jsx'


let m = Map({
    movies:
    [
        {name:"name", description:"description"},
        {name:"other name", description:"other description"}
    ]
});

const store = createStore(reducer);
store.dispatch(setMovies(m));

ReactDOM.render(
    <Provider store={store}>
        <MainContainer></MainContainer>
    </Provider>,
    document.getElementById('app')
);
