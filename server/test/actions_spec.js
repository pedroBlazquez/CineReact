import {List, Map} from 'immutable';
import {expect} from 'chai';
import {addToCart} from '../src/actions.js';

describe('Actions', () => {
    describe('addToCart', () => {
        it('should add a movie to cart', () => {
            const state = List.of();
            const movie = Map({name:'Terminator', places:2});
            const cart = addToCart(state, movie);

            expect(cart).to.equal(List.of(Map({name:'Terminator', places:2})));
            expect(state).to.equal(List.of());
        });
    });

});
