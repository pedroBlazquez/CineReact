import React from 'react';
import Menu from '../components/Menu/Menu.jsx';
import Router from '../routes/Routes.jsx';
import {fromJS} from 'immutable';
require('./Containers.css');

let items = [{text:'Movies', url: '/#/movies'},{text:'Cart', url: '/#/cart'}];

export default React.createClass({
    render: function () {
        return <div className="mainContainer">
            <Menu items={items}></Menu>
            <Router></Router>
        </div>;
    }
});
