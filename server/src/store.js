import {createStore} from 'redux';
import {connect} from 'react-redux'
import reducer from './reducer';

export default function makeStore() {
    return createStore(reducer);
}
