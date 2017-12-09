import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import '../styles/Winner.css';

class Winner extends Component{
    constructor(){
        super();
        this.mixins = [PureRenderMixin];
    }
    render(){
        return (
            <div className="winner">{this.props.winner} has won</div>
        )
    }
}
export default Winner;