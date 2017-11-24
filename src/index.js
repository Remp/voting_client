import React from 'react';
import ReadDOM from 'react-dom';
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

const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', state => {
    store.dispatch(setState(state))
})

//создаем store с посредником, который будет вызываться прежде попадания действия в store и reducer
const createStoreWithMiddleWare = applyMiddleware(remoteActionMiddleware)(createStore);
const store = createStoreWithMiddleWare(reducer);

const routes = (
    <Route component={App}>
        <Route path='/results' component={ResultsContainer} />
        <Route path='/' component={VotingContainer} />
    </Route>
)

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)