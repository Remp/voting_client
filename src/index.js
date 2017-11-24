import React from 'react';
import ReadDOM from 'react-dom';
import Voting from './components/Voting';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './components/App';
import Results from './components/Results';
import {createStore} from 'redux';
import reducer from './reducer';
import {fromJS} from 'immutable';

const store = createStore(reducer);
store.dispatch({
    type: 'SET_STATE',
    state: fromJS({
        vote: {
            pairs: ["Transpoinig", "27 days later"],
            tally: {
                Transpoinig: 1
            }
        }
    })
})

const routes = (
    <Route component={App}>
        <Route path='/results' component={Results} />
        <Route path='/' component={Voting} />
    </Route>
)

ReactDOM.render(
    <BrowserRouter>
        {routes}
    </BrowserRouter>,
    document.getElementById("root")
)