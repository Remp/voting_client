import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';

class Results extends Component{
    constructor(){
        super();
        this.mixins = [PureRenderMixin]
    }
    getPairs(){
        return this.props.pairs || []
    }
    getVotes(entry){
        if (this.props.tally && this.props.tally.has(entry))
            return this.props.tally.get(entry);
        return 0;
    }
    render(){
        return (
            <div  className="results">
                {
                    this.props.winner
                    ?
                    <Winner ref={el => this.winner = el} winner={this.props.winner} />
                    :
                    this.getPairs().map(vote => {
                        return (
                            <div key={vote} className="entry">
                                <h1>{vote}</h1>
                                <div className="votesCount">
                                    {this.getVotes(vote)}
                                </div>
                            </div>
                        )
                    })
                }
                <div className="next">
                    <button ref={(el) => this.result = el} onClick={this.props.next}>Next</button>
                </div>
            </div>
            
        )
    }
}
export default Results;