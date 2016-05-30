import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {MovieContainer} from '../containers/MoviesContainer.jsx';
import {CartContainer} from '../containers/CartContainer.jsx';

const routes = <Router history={hashHistory}>
    <Route path="/movies" component={MovieContainer}></Route>
    <Route path="/cart" component={CartContainer}></Route>
    </Router>;

export default React.createClass({
    render: function () {
        return routes;
    }
})
