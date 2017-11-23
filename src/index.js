import React from 'react';
import ReadDOM from 'react-dom';
import Vote from './components/Vote'

const pairs = ["Transpoinig", "27 days later"];

ReactDOM.render(
    <Vote pairs={pairs} hasVoted='Transpoinig'/>,
    document.getElementById("root")
)