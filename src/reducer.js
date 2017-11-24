import {Map, List} from 'immutable';

export default function(state = new Map(), action){
    switch(action.type){
        case 'SET_STATE': {
            return resetVote(setState(state, action.state));
        }
        case 'VOTE': {
            return vote(state, action.entry)
        }
    }
    return state;
}
function setState(state, newState){
    return state.merge(newState);
}
function resetVote(state){
    const hasVoted = state.get('hasVoted');
    const pairs = state.getIn(['vote', 'pairs'], new List());
    if (hasVoted && !pairs.includes(hasVoted))
        return state.remove('hasVoted')
    return state
}
function vote(state, entry){
    if (state.getIn(['vote', 'pairs']).includes(entry))
        return state.set('hasVoted', entry)
    return state;
}