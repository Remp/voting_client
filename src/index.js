import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import {fromJS} from 'immutable';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import {setState} from './actionCreators';
import {Map, List} from 'immutable';


const socket = io('http://localhost:7000');
socket.on('state', (state) => {
        store.dispatch(setState(state));
});
const store = createStore(reducer, applyMiddleware(middleware));

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