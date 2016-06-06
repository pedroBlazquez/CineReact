import React from 'react';
import {Map, List} from 'immutable';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/Reducer.jsx';
import {setMovies} from './actions/actions.jsx';
import MainContainer from './containers/MainPageContainer.jsx'


let m = Map({
    movies: List.of(
        Map({name:'name', description:'description', price:10.50}),
        Map({name:'other name', description:'other description', price:15.00}),
        Map({name:'Terminator', description:'other description', price:15.00, imgUrl:'http://t1.gstatic.com/images?q=tbn:ANd9GcRHzSaUCOKu1RwS-bfbaUeeo_I1JcBkiuJRjBElvJi7qsHXkUkJ'}),
        Map({name:'SuperCool', description:'other description', price:15.00}),
        Map({name:'Some movie', description:'other description', price:15.00}),
        Map({name:'Avatar', description:'other description', price:15.00})
    )
});

const store = createStore(reducer);
store.dispatch(setMovies(m));

ReactDOM.render(
    <Provider store={store}>
        <MainContainer></MainContainer>
    </Provider>,
    document.getElementById('app')
);
