import React from 'react';
import ReadDOM from 'react-dom';
import Voting from './components/Voting';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './components/App';
import Results from './components/Results';

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