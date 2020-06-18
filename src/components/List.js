import React,{Component} from 'react';
import axios from "axios";
import '../css/style.css';

class List extends Component{
  constructor(props){
    super(props);
    this.ars=[];
    this.js = 0;
    this.state={
      msg:'我是一个msg数据',
      ars:[],
      kindlists:[],
      class:"",
      percent:30
    };
  }
  //是否要更新数据，如果返回true才会更新数据
	shouldComponentUpdate(nextProps,nextState){
		//console.log('01是否要更新数据')
		console.log(nextProps)		//父组件传给子组件的值，这里没有会显示空
		console.log(this.state.percent)		//数据更新后的值
		return true;				//返回true，确认更新
  }
  
  componentDidMount(){
     
  }

  //将要更新数据的时候触发的
	componentWillUpdate(){
		//console.log('02组件将要更新')
	}
	//更新数据时候触发的生命周期函数
	componentDidUpdate(){
		console.log('04组件更新完成')
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
      url: "/api/clip/v1/video/zonelist?page=total&platform=pc"
    }).then((resp) => {
      let data = resp.data.data;
      let arss = Object.keys(data);
      let arss2 = Object.values(data);
      console.log(data)
      this.setState({
        ars: arss,
        kindlists:arss2,
        class : "on",
        percent : 60
      });

    }, (err) => {
      
    })
  }
  
  render(){
    
    return (
      <div>
        <span className={'animateLine '+this.state.class}>{this.state.percent+"%"}</span>
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

export default List;