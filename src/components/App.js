import React, {Component} from 'react';
import {VotingContainer} from './Voting';
import '../styles/App.css';

class App extends Component{
    render(){
        return (
            <div className='app'>
                <VotingContainer />
            </div>
        )
    }
}
export default App;