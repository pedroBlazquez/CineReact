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
        {name:'name', description:'description', price:10.50},
        {name:'other name', description:'other description', price:15.00},
        {name:'Terminator', description:'other description', price:15.00},
        {name:'SuperCool', description:'other description', price:15.00},
        {name:'Some movie', description:'other description', price:15.00},
        {name:'Avatar', description:'other description', price:15.00}
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
