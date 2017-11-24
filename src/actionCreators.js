export function vote(entry){
    return {type: 'VOTE', entry}
}
export function setState(state){
    return {type: 'SET_STATE', state}
}