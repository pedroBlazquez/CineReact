import React from 'react';

export default React.createClass({
    getItems: function () {
        console.log(this.props.items);
        return this.props.items || []
    },
    render: function () {
        return<div className="navBar">
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
