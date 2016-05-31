import React from 'react';
import Btn from '../customButton/CustomButton.jsx';
import {setCart} from '../../actions/actions.jsx';
require('./Movie.css');

export default React.createClass({
    propTypes: {
        imUrl: React.PropTypes.string,
        name: React.PropTypes.string,
        description: React.PropTypes.string,
        price: React.PropTypes.number,
        btnText: React.PropTypes.string,
        cartAction: React.PropTypes.func
    },
    render: function() {
        return <div className="movie">
                <h2 className="title">{this.props.name}</h2>
                <img src={this.props.imgUrl} className="image" alt="no image to display"></img>
                <div className="description">{this.props.description}</div>
                <div className="price">{'$'+this.props.price}</div>
                <Btn  text={this.props.btnText} clickAction={this.props.cartAction}></Btn>
        </div>;
    }
});
