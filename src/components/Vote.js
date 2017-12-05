import React, {Component} from 'react';
import Winner from './Winner';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import PropTypes from 'prop-types';

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
        this.props.history.push('/results');
    }
    render(){
        return (
            <div className='voting'>
                {
                    this.props.winner
                    ?
                    <Winner winner={this.props.winner} />
                    :
                    this.getPairs().map(vote => {
                        return (
                            <button 
                                onClick={() => this.commitVote(vote)} 
                                key={vote}
                                disabled={this.isDisabled()}
                            >
                                <h2>{vote}</h2>
                                {
                                    this.hasVotedFor(vote)
                                    ?
                                    <div className="lable">Voted</div>
                                    :
                                    null
                                }
                            </button>
                        )
                    })
                }
            </div>
        )
    }
}
export default Vote;