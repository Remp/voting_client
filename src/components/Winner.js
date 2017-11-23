import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Winner extends Component{
    constructor(){
        super();
        this.mixins = [PureRenderMixin];
    }
    render(){
        return (
            <div className="winner">{this.props.winner}</div>
        )
    }
}
export default Winner;