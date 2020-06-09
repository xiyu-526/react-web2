import React,{Component} from 'react';
import '../css/style.css';
class Balls extends Component{
  constructor(props){
    super(props);
    this.state={
     
    }
  }
  
  
  componentDidMount(){
    
      function shuchu(params) {
        console.log("挂载完成");
      }
      shuchu();
      const state={
        w : document.documentElement.clientWidth,
        h : document.documentElement.clientHeight,
        canvs : document.getElementById("ball"),
        cxt : null,
        ballAry : [],
        counts : 20
      }
      function init(){
        state.cxt = state.canvs.getContext("2d");
        state.canvs.width = state.cxt.width = state.w;
        state.canvs.height = state.cxt.height = state.h;
        
        for(var i = 0;i<state.counts;i++){
          state.ballAry.push({
            ball:new createBalls(40),
            r:Math.random()*50+10,
            x:state.w/2,
            y:-50,
            xSp:Math.random()*6-3,
            ySp:Math.random()*5,
            g:0.05, //加速度
            _g:0.6  //递减力道
          });
        }
      }
      function createBalls(r){
          var canv = document.createElement("canvas");
          var cxt = canv.getContext("2d");
          canv.width = cxt.width = r*2;
          canv.height = cxt.height = r*2;
          var rgba = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`;
          cxt.beginPath();
          cxt.arc(r, r, r, 0, Math.PI * 2);
          cxt.fillStyle=rgba;
          cxt.fill();
          cxt.closePath();
    
          return canv;
    
      }
      
      function move(){
        for(let i = 0;i<state.ballAry.length;i++){
          const cxt = state.ballAry[i];
          cxt.ySp += cxt.g;

          cxt.y += cxt.ySp;
          cxt.x += cxt.xSp;
         
          cxt.y>=state.h-cxt.r && (cxt.ySp*=-1*cxt._g);
          cxt.y>=state.h-cxt.r && (cxt.y=state.h-cxt.r);
    
          cxt.x>=state.w-cxt.r && (cxt.xSp*=-1);
          cxt.x>=state.w-cxt.r && (cxt.x=state.w-cxt.r);

          cxt.x<=0 && (cxt.x=0) && (cxt.xSp*=-1);
    
          //cxt.y>=this.h && (cxt.ySp*=-1);
          
          state.cxt.drawImage(cxt.ball,cxt.x,cxt.y,cxt.r,cxt.r);
        }
      }
      init();
      setInterval((function(){
        
        state.ballAry.push({
          ball:new createBalls(40),
          r:Math.random()*50+10,
          x:state.w/2,
          y:-50,
          xSp:Math.random()*6-3,
          ySp:Math.random()*5,
          g:0.05, //加速度
          _g:0.6  //递减力道
        });

        state.cxt.clearRect(0, 0, state.w, state.h);
        move();
      }),20);
  }
  componentDidUpdate(){
    
  }
  render(){
    console.log(new Balls());
    return (
      <div>
        <canvas id="ball"></canvas>
      </div>
    );
  }
}


export default Balls;