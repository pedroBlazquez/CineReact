import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    findRenderedDOMComponentWithClass,
    Simulate
} from 'react-addons-test-utils';
import {expect} from 'chai';
import Btn from '../../../src/components/customButton/CustomButton.jsx';

describe('CustomButton component', () => {
    it('Should should render with .btn class and the ones passed as parameter', () => {
        const component = renderIntoDocument(
            <Btn className="some"></Btn>
        );
        //This function throws an exception if there isn't exactly 1 match
        findRenderedDOMComponentWithClass(component, 'btn some');
    })
});
