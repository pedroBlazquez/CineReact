import React from 'react';
import {setCart} from '../../actions/actions.jsx';
import {Button, Image} from 'react-bootstrap';


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
                <Image src={this.props.imgUrl} className="image" alt="no image to display" rounded responsive></Image>
                <div className="description">{this.props.description}</div>
                <div className="price">{'$'+this.props.price}</div>
                <Button bsSize="small" onClick={this.props.cartAction}>{this.props.btnText}</Button>
        </div>;
    }
});
