import React from 'react';
import ReactDOM from 'react-dom';
import {fromJS} from 'immutable';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import {expect} from 'chai';
import {Cart} from '../../src/containers/CartContainer.jsx';

describe('CartContainer', () => {
    it('Should render each movie on CartState', () => {
        const cartState = fromJS(
            {
                'cart':
                    [
                        {
                            name:'movieName',
                            description:'movieDescription'
                        }
                    ]
            }
        );

        let cart = cartState.get('cart');
        const cartComponent = renderIntoDocument(
            <Cart cart={cart}></Cart>
        );
        let movies = scryRenderedDOMComponentsWithClass(cartComponent, 'movie');
        expect(movies.length).to.equal(1);

    });
});
