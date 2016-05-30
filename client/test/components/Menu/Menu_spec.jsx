import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-addons-test-utils';
import {expect} from 'chai';
import Menu from '../../../src/components/Menu/Menu.jsx';

describe('Menu Component', () => {
    it('Should render List Items acording to props', () => {
        let items = [{text:'Movies', url: '#/movies'},{text:'Cart', url: '#/cart'}];
        const menuComponent = renderIntoDocument(
            <Menu items={items}></Menu>
        );

        let menuItems = scryRenderedDOMComponentsWithTag(menuComponent,'li');
        expect(menuItems.length).to.equal(2);
    });
});
