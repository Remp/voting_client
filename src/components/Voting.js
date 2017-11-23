import React, {Component} from 'react';
import Winner from './Winner';
import Vote from './Vote';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Voting extends Component{
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
export default Voting