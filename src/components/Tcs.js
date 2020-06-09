import React,{Component} from 'react';
import '../css/style.css';
class Tcs extends Component{
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
        canvs : document.getElementById("tanchishe"),
        cxt : null,
        sW : 40,
        xg:0,   //横排格子
        yg:0,   //竖排格子
        head:"",  //蛇头
        sbody:"", //蛇身体
        sfood : "", //食物
        ballAry : [],
        food  : [], //食物仓库
        counts : 3, //身体段位数
        direction:2, //方向
        dullte : "0", //是否吃到食物
        Sx : 0, //头坐标
        Sy : 0, //头坐标
      }
      function init(){
        state.cxt = state.canvs.getContext("2d");
        state.canvs.width = state.cxt.width = state.w;
        state.canvs.height = state.cxt.height = state.h;

        state.xg = Math.floor(state.w/state.sW);
        state.yg = Math.floor(state.h/state.sW);

        state.head = new createTcs(state.sW);   //创建蛇头
        state.sbody = new createTcs(state.sW);  //创建蛇身体
        state.sfood = new createTcs(state.sW); //创建食物
        
        state.Sx = state.xg/2*state.sW;
        state.Sy = state.yg/2*state.sW;
        
        state.cxt.drawImage(state.head,state.Sx,state.Sy,state.sW,state.sW);
        for(let i = 0;i<state.counts;i++){

          state.Sx-=state.sW;
          state.ballAry.push({
            data:state.sbody,
            x:state.Sx,
            y:state.Sy,
            w:state.sW,
            h:state.sW
          })
        }
        for(let i = 0;i<1;i++){
          state.food.push({
            data:state.sfood,
            x:Math.floor(state.xg*Math.random())*state.sW,
            y:Math.floor(state.yg*Math.random())*state.sW,
            w:state.sW,
            h:state.sW
          })
        }        
       
      }
     
      //创建身体部位
      function createTcs(r){
          var canv = document.createElement("canvas");
          var cxt = canv.getContext("2d");
          canv.width = cxt.width = r;
          canv.height = cxt.height = r;
          var rgba = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`;
          cxt.beginPath();
          cxt.fillStyle=rgba;
          cxt.fillRect(0,0,r,r); 
          cxt.strokeRect(0,0,r,r);
          cxt.closePath();
    
          return canv;
      }


      
      function move(){

        state.ballAry.splice(0,0,{
          data:state.sbody,
          x:state.Sx,
          y:state.Sy,
          w:state.sW,
          h:state.sW
        });
        switch(state.direction){
          //左
          case 0:
            state.Sx-=state.sW;
            break;
           //上
           case 1:
            state.Sy-=state.sW;
          break;
           //右
           case 2:
            state.Sx+=state.sW;
          break;
           //下
           case 3:
            state.Sy+=state.sW;
          break;
        }

        state.cxt.drawImage(state.head,state.Sx,state.Sy,state.sW,state.sW);
        
        for(let i = 0;i<state.food.length;i++){
          let data = state.food[i];
          state.cxt.drawImage(state.sfood,data.x,data.y,data.w,data.h);
        }     

        for(let i = 0;i<state.ballAry.length;i++){
          let data = state.ballAry[i];
          state.cxt.drawImage(state.sbody,data.x,data.y,data.w,data.h);
        }

       
        if(state.Sx===state.food[0].x && state.Sy===state.food[0].y){
          state.food.pop();
          state.food.push({
            data:state.sfood,
            x:Math.floor(state.xg*Math.random())*40,
            y:Math.floor(state.yg*Math.random())*40,
            w:state.sW,
            h:state.sW
          })
        }else{
          state.ballAry.pop();
        }
        
        
      }
      init();
      function fnKeyup(e) {
        var ee = e || window.event;
        switch(ee.keyCode){
          //左
          case 37:
              state.direction = 0;
            break;
           //上
          case 38:
            state.direction = 1;
          break;
           //右
          case 39:
            state.direction = 2;
          break;
           //下
          case 40:
            state.direction = 3;
          break;
        }
      }
    
        if (document.addEventListener){
          document.addEventListener("keyup",fnKeyup,true);
        }else{
          document.attachEvent("onkeyup",fnKeyup);
        }
      setInterval((function(){
        state.cxt.clearRect(0, 0, state.w, state.h);     
        move();
      }),100);
  }
  componentDidUpdate(){
    
  }
  render(){
    return (
      <div>
        <canvas id="tanchishe"></canvas>
      </div>
    );
  }
}


export default Tcs;