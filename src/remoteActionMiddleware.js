export default ({getState, dispatch}) => socket => store => next => action => {
    console.log('in middleware');
    if (action.meta.remote)
        socket.emit('action', action);
    return next(action);
}