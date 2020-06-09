import React,{Component} from 'react';
import '../css/style.css';
class Filter extends Component{
  constructor(props){
    super(props);
    this.state={
        bianhua:0,
    }
  }
  
  flite(){
    const state={
      w : document.documentElement.clientWidth,
      h : document.documentElement.clientHeight,
      canv : document.getElementById("fliter"),
      data : this.state
    
    }
    const cxt = state.canv.getContext("2d");

    const canvb = document.createElement("canvas");
    const cxtb = canvb.getContext("2d");

    canvb.width = cxtb.width = state.w;
    canvb.height = cxtb.height = state.h;

    state.canv.width = cxt.width = state.w;
    state.canv.height = cxt.height = state.h;

    var img = new Image();
    img.onload = function(){
        cxtb.drawImage(img, 0, 0, state.w, state.h);

        var imageData = cxtb.getImageData( 0 , 0 , state.w , state.h );
        var pixelData = imageData.data;

        if(state.data.bianhua == 1){
          for( var i = 0 ; i < pixelData.length ; i += 4 ){
              var r = pixelData[i];
              var g = pixelData[i+1];
              var b = pixelData[i+2];

              pixelData[i] = 255-r;
              pixelData[i+1] = 255-g;
              pixelData[i+2] = 255-b;
              pixelData[i+3] = 255;
          }
        }else{
          for( var i = 0 ; i < pixelData.length ; i += 4 ){
  
              var r = pixelData[i];
              var g = pixelData[i+1];
              var b = pixelData[i+2];
      
              var grey = r*0.3+g*0.59+b*0.11;  //0.3 + 0.59 + 0.11 = 1
      
              pixelData[i] = grey;
              pixelData[i+1] = grey;
              pixelData[i+2] = grey;
          }
        }
        
    
        cxt.putImageData( imageData , 0 , 0 , 0 , 0 , state.w , state.h );
    }
    img.src=require("../images/2020-04.jpg");
  }

  //更新数据时候触发的生命周期函数
	componentDidUpdate(){
		console.log('04组件更新完成')
  }
  componentDidMount(){
    
      function shuchu(params) {
        console.log("挂载完成");
      }
      shuchu();
      this.flite();
      
      
  }
  putData=()=>{
      // this.setState((prevState, props) => ({
      //   bianhua: 1
      // }));
      if(this.state.bianhua===0){
          this.setState({
            bianhua:1
          })
      }else{
        this.setState({
          bianhua:0
        })
      }
      this.flite();
      
  }
  componentDidUpdate(){
    
  }

  render(){
    return (
      <div>
        <canvas id="fliter"></canvas>
        <button onClick={this.putData} id="filterQh">滤镜切换</button>
      </div>
    );
  }
}


export default Filter;