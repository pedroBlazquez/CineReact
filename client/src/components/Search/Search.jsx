import React from 'react';
import {Button} from 'react-bootstrap';

export default React.createClass({

    render: function () {
        return (
            <div>
                <input type="text" onChange={this.props.handleSearch}></input><Button>{'Search'}</Button>
            </div>
        )
    }
});
