import React,{Component} from 'react';
import axios from "axios";
import '../css/style.css';

class List extends Component{
  constructor(props){
    super(props);
    console.log('footer:'+props);
    this.ars=[];
    this.js = 0;
    this.state={
      msg:'我是一个msg数据',
      ars:[],
      kindlists:[]
    };
  }
  //是否要更新数据，如果返回true才会更新数据
	shouldComponentUpdate(nextProps,nextState){
		//console.log('01是否要更新数据')
	//	console.log(nextProps)		//父组件传给子组件的值，这里没有会显示空
		console.log(nextState)		//数据更新后的值
		return true;				//返回true，确认更新
	}

  //将要更新数据的时候触发的
	componentWillUpdate(){
		//console.log('02组件将要更新')
	}
	//更新数据时候触发的生命周期函数
	componentDidUpdate(){
		//console.log('04组件更新完成')
  }
  //更新数据
  changeHandle = () => {
    this.setState({
      msg: "我被改变了"
    });
  };
  
  lits = () => {
   // var _this = this;
    axios({
      method: 'get',
      //url: "/act/jd08/api.php?c=index&a=userinfo"
      url: "/clip/v1/video/zonelist?page=total&platform=pc"
    }).then((resp) => {
      let data = resp.data.data;
      let arss = Object.keys(data);
      let arss2 = Object.values(data);
      console.log(arss2)
      this.setState({
        ars: arss,
        kindlists:arss2
      });

      //var a = 0.1+0.2;
      //var b = 0.3;
      //console.log(a===b);
    }, (err) => {
      
    })
  }
  
  render(){
    
    return (
      <div>
        <ul>
        {
          this.state.ars.map(data=>(<li key={this.state.ars.indexOf(data)}>
            {data}
              <div className="list">
                {
                  this.state.kindlists[this.state.ars.indexOf(data)] && this.state.kindlists[this.state.ars.indexOf(data)]["tags"].map((data2,index)=>
                    (<span key={'tags'+index}>{data2}</span>)
                  )
                }
              </div>
          </li>))
        }
        </ul>
        
        {
          this.state.msg
        }
        <button onClick={this.lits}>获取列表</button>
        <button onClick={this.changeHandle}>改变MSG数据</button>
      </div>
    );
  }
}

// function List(ary){
//   let ars = ary.ary,arr;
//   function lits(){
//     axios({
//       method: 'get',
//       //url: "/act/jd08/api.php?c=index&a=userinfo"
//       url: "/clip/v1/video/zonelist?page=total&platform=pc"
//     }).then((resp) => {
//       ars = Object.keys(resp.data.data);
//       arr = Object.values(resp.data.data)
//       console.log(ars);
//       console.log(arr);
//     }, (err) => {
//       console.log(err);
//     })
//   }
  
//   return (
//     <div>
//       <ul>
//       {
//         ars.map(data=>(<li>{data}</li>))
//       }
//       </ul>
//       <button onClick={lits}>获取列表</button>
//     </div>
//   );
// }

export default List;