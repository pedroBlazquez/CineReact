import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';


export default React.createClass({
    getItems: function () {
        return this.props.items || []
    },
    render: function () {
        return <Navbar inverse>
            <Nav bsStyle="tabs">
                {this.getItems().map(item =>
                    <NavItem key={item.text} href={item.url}>
                        {item.text}
                    </NavItem>
                )}
            </Nav>
        </Navbar>;
    }
});
