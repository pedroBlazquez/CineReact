import {fromJS} from 'immutable';
import makeStore from './src/store';
import startServer from './src/server';
import * as actions from './src/actions';
var movies = require('./src/staticDataTest');

export const store = makeStore();
store.dispatch(actions.setMovies(fromJS(movies)));

startServer(store);
