import React, {Component} from 'react';
import Winner from './Winner';
import Vote from './Vote';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../actionCreators';

export class Voting extends Component{
    constructor(){
        super();
        this.mixins = [PureRenderMixin];
    }
    render(){
        return (
            <div>
                {
                    this.props.winner
                    ?
                    <Winner ref={el => this.winner = el} winner={this.props.winner} />
                    :
                    <Vote {...this.props} />
                }
            </div>
        )
    }
}
function stateToProps(state){
    return {
        pairs: state.getIn(['vote', 'pairs']),
        hasVoted: state.get('hasVoted'),
        winner: state.get('winner')
    }
}

//вообщем функции из actionCreators будут переданы как свойства, а так как там есть ф-я vote 
//соответственно она будет вызываться при нажатии проголосовать, и далее идти в store
export const VotingContainer = connect(stateToProps, actionCreators)(Voting);