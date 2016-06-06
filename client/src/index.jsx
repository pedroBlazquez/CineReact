import React from 'react';
import {Map, List} from 'immutable';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/Reducer.jsx';
import {setMovies} from './actions/actions.jsx';
import MainContainer from './containers/MainPageContainer.jsx'
import io from 'socket.io-client'
import middleWare from './MiddleWares/socketMiddleware.js';


const socket = io(`${location.protocol}//${location.hostname}:8090`);

const createStoreWithMiddleware = applyMiddleware(
    middleWare(socket)
)(createStore);

const store = createStoreWithMiddleware(reducer);

socket.on('SET_STATE', state => store.dispatch(setMovies(state)));

ReactDOM.render(
    <Provider store={store}>
        <MainContainer></MainContainer>
    </Provider>,
    document.getElementById('app')
);
