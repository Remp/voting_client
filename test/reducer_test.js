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
    });
    it('handle Vote', () => {
        const state = fromJS({
            vote: {
                pairs: ["Transpoinig", "27 days later"],
                tally: {
                    Transpoinig: 1
                }
            }
        });
        const action = {
            type: 'VOTE',
            entry: 'Transpoinig'
        };
        const newState = reducer(state, action);
        expect(newState).to.equal(fromJS({
            vote: {
                pairs: ["Transpoinig", "27 days later"],
                tally: {
                    Transpoinig: 1
                }
            },
            hasVoted: 'Transpoinig'
        }))
    });
    it('в случае неправильной записи ничего не делает', () => {
        const state = fromJS({
            vote: {
                pairs: ["Transpoinig", "27 days later"],
                tally: {
                    Transpoinig: 1
                }
            }
        });
        const action = {
            type: 'VOTE',
            entry: 'Sunshine'
        };
        const newState = reducer(state, action);
        expect(newState).to.equal(fromJS({
            vote: {
                pairs: ["Transpoinig", "27 days later"],
                tally: {
                    Transpoinig: 1
                }
            }
        }))
    });
    it('если пара изменилась, тогда очищаем hasVoted', () => {
        const state = fromJS({
            vote: {
                pairs: ["Sunshine", "something another"],
                tally: {
                    Sunshine: 1
                }
            },
            hasVoted: 'Sunshine'
        })
        const action = {
            type: 'SET_STATE',
            state: fromJS({
                vote: {
                    pairs: ["Transpoinig", "27 days later"]
                }
            })
        };
        const newState = reducer(state, action);
        expect(newState).to.equal(fromJS({
            vote: {
                pairs: ["Transpoinig", "27 days later"]
            }
        }))
    })
})