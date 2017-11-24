import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe('reducer', () => {
    it('handle SET_STATE', () => {
        const init = new Map();
        const action = {
            type: 'SET_STATE',
            state: fromJS({
                vote: {
                    pairs: ["Transpoinig", "27 days later"],
                    tally: {
                        Transpoinig: 1
                    }
                }
            })
        }
        const state = reducer(init, action);
        expect(state).to.equal(fromJS({
            vote: {
                pairs: ["Transpoinig", "27 days later"],
                tally: {
                    Transpoinig: 1
                }
            }
        }))      
    });
    it('handle SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: fromJS({
                vote: {
                    pairs: ["Transpoinig", "27 days later"],
                    tally: {
                        Transpoinig: 1
                    }
                }
            })
        }
        const state = reducer(undefined, action);
        expect(state).to.equal(fromJS({
            vote: {
                pairs: ["Transpoinig", "27 days later"],
                tally: {
                    Transpoinig: 1
                }
            }
        }))   
    })
})