import {Map, List, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../../src/reducers/Reducer.jsx';

describe('reducer',() =>{
    it('Should create new state if no one is given', () => {
        expect(reducer(undefined,{action:'SET_MOVIES',state:undefined})).to.equal(Map());
    });

    describe('Should return a new Cart State', () => {
        it('Should add movie to cart', () => {
            let action = {type:'SET_CART', movie:{name:'movie name', description:'movie description'}};
            let newCartState = reducer(undefined, action);

            expect(newCartState).to.equal(fromJS(
                {'cart':
                    {'movie name':{name:'movie name', description:'movie description'}
                }
            }));
        });

        it('Should remove a movie from cart', () => {
            let action = {type:'REMOVE_FROM_CART', movie:{name:'movie name', description:'movie description'}};
            const cartState = fromJS(
                {
                    'cart':
                        {
                            'movie name':{name:'movie name', description:'movie description'},
                            'other movie':{name:'other movie', description:'other movie description'}
                        }
                }
            );

            expect(reducer(cartState, action)).to.equal(fromJS(
                {
                'cart':
                    {
                        'other movie':{name:'other movie', description:'other movie description'}
                    }
                }
            ));

            expect(cartState).to.equal(fromJS(
                {
                    'cart':
                        {
                            'movie name':{name:'movie name', description:'movie description'},
                            'other movie':{name:'other movie', description:'other movie description'}
                        }
                }
            ));

        });

    });
});
