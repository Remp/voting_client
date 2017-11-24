import React, {Component} from 'react';
import {List, Map} from 'immutable';

const pairs = List.of("Transpoinig", "27 days later");
const tally = new Map({
    Transpoinig: 3,
    '27 days later': 2
})

class App extends Component{
    render(){
        return React.cloneElement(this.props.children, {pairs: pairs, tally: tally});
    }
}