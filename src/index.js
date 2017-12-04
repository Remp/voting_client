import React from 'react';
import ReactDOM from 'react-dom';
import {VotingContainer} from './components/Voting';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './components/App';
import {ResultsContainer} from './components/Results';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import {fromJS} from 'immutable';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import {setState} from './actionCreators';
import remoteActionMiddleware from './remoteActionMiddleware';
import {Map, List} from 'immutable';


const socket = io('http://localhost:7000');
socket.on('state', state => {
        console.log('state emitted');
        console.log(setState(state));
        console.log(store);
        store.dispatch(setState(state));
        console.log('state emit end')
});
const store = createStore(reducer, applyMiddleware(middleware));
// const createStoreWithMiddleWare = applyMiddleware(socket => store => next => action => {
//     console.log('in middleware');
//     if (action.meta.remote)
//         socket.emit('action', action);
//     return next(action);
// })(createStore);
// const store = createStoreWithMiddleWare(reducer);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>       
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)

function middleware({getState, dispatch}){
    return next => action => {
        if (action.meta && action.meta.remote)
            socket.emit('action', action);
        return next(action);
    }
}