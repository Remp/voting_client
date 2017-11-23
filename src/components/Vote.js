import React, {Component} from 'react';
import Winner from './Winner';

class Vote extends Component{
    getPairs(){
        return this.props.pairs || []
    }
    isDisabled(){
        return !!this.props.hasVoted
    }
    hasVotedFor(entry){
        return this.props.hasVoted === entry
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
                                onClick={() => this.props.vote(vote)} 
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