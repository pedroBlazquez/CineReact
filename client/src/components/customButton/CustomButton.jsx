import React from 'react';
require('./CustomButton.css');

export default React.createClass({
    getClasses: function () {
        return this.props.className ? this.props.className + " btn" : "btn";
    },
    render: function() {
        return <div className={this.getClasses()} onClick={this.props.clickAction}>
            <span className="text">{this.props.text}</span>
        </div>;
    }
});
