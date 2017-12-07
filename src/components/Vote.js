import React, {Component} from 'react';
import Winner from './Winner';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import PropTypes from 'prop-types';
import '../styles/Vote.css';

class Vote extends Component{
    constructor(){
        super();
        this.mixins = [PureRenderMixin];
    }
    getPairs(){
        return this.props.pairs || []
    }
    isDisabled(){
        return !!this.props.hasVoted
    }
    hasVotedFor(entry){
        return this.props.hasVoted === entry
    }
    commitVote(vote){
        this.props.vote(vote);
    }
    render(){
        return (
            <div className='vote'>
                {
                    this.props.winner
                    ?
                    <Winner winner={this.props.winner} />
                    :
                    this.getPairs().map(vote => {
                        return (
                            <div 
                                onClick={() => this.commitVote(vote)} 
                                key={vote}
                                disabled={this.isDisabled()}
                                className={this.hasVotedFor(vote) ? 'vote-item checked': 'vote-item'}
                            >
                                {vote}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Vote;