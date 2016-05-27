import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {MovieContainer} from '../containers/MoviesContainer.jsx';
import Btn from '../components/customButton/CustomButton.jsx'

const routes =<Router history={hashHistory}>
    <Route path="/" component={MovieContainer}></Route>
    </Router>;

export default React.createClass({
    render: function () {
        return routes;
    }
})
