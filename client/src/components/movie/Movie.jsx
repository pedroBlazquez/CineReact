import React from 'react';
import Btn from '../customButton/CustomButton.jsx'
import {setCart} from '../../actions/actions.jsx';

export default React.createClass({
    render: function() {
        return <div className="movie">
            <h2 className="title">{this.props.name}</h2>
            <div className="description">{this.props.description}</div>
            <img src={this.props.imgUrl} className="image" alt="no image to display"></img>
            <Btn  text="Agregar" clickAction={this.props.addToCart}></Btn>
        </div>;
    }
});
