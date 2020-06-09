import React,{Component} from 'react';
import '../css/style.css';

class Content extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state={
      msg:'我是一个msg数据',
      ars:[],
      kindlists:[]
    };
  }
  
  
  render(){
    
    return (
      <div>
        <h1>主要内容区域</h1>
      </div>
    );
  }
}


export default Content;