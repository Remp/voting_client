import React, {Component} from 'react';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends Component{
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
export default Voting