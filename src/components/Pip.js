import React,{Component} from 'react';
import Mock from 'mockjs'
import Ld from 'lodash'
import '../css/style.css';
class Pip extends Component{
  constructor(props){
    super(props);
    this.state={
      percent:2300
    };
  }

  render(){
    return (
      <div className="Pis">
                <button handser={this.props.pipe(this.state.percent)}>子组件数据传输到父组件</button>

      </div>
    );
  }
}


export default Pip;