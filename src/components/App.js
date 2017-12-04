import React, {Component} from 'react';
import {List, Map} from 'immutable';
import {ResultsContainer} from './Results';
import {VotingContainer} from './Voting';
import {Route} from 'react-router';

const pairs = List.of("Transpoinig", "27 days later");
const tally = new Map({
    Transpoinig: 3,
    '27 days later': 2
})

class App extends Component{
    render(){
        return (
            <div>
                <Route path='/results' component={ResultsContainer} />
                <Route path='/' component={VotingContainer} />
            </div>
        )
        // return <div>hui</div>
    }
}
export default App;