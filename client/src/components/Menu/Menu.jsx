import React from 'react';
require('./menu.css');

export default React.createClass({
    getItems: function () {
        return this.props.items || []
    },
    render: function () {
        return<div className="menuContainer">
             <ul className="menu">
                {this.getItems().map(item =>
                    <li key={item.text} className="menu-item">
                        <a href={item.url}>{item.text}</a>
                    </li>
                )}
            </ul>
        </div>;
    }
});
