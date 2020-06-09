import React,{Component} from 'react';
import Mock from 'mockjs'
import Ld from 'lodash'
import '../css/style.css';
class Slider extends Component{
  constructor(props){
    super(props);
    this.state={
      msg:'我是一个msg数据',
      ars:[],
      slidelists:this.data.list,
      lodashData:Ld.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }),
      partition:Ld.partition([1, 2, 3, 4], n => n % 2)
    };
  }
  
  get data(){
    return Mock.mock({
       'list|1-10':[
         {
           'id|+1':2,
           'name|':String,
           'first': '@FIRST',
           'middle': '@FIRST',
           'last': '@LAST',
           'full': '@first @middle @last',
           'regexp1': /[a-z][A-Z][0-9]/,
            'regexp2': /\w\W\s\S\d\D/,
            'regexp3': /\d{5,10}/
         }
       ]
    })
  }
  
  util(...dat){
    console.log('Mock数据生成：'+dat[0]);
    console.log('Lodash数据处理1：'+dat[1]);
    console.log('Lodash数据处理2：'+dat[2]);
  }

  render(){
    this.util(this.state.slidelists,this.state.lodashData,this.state.partition)
    return (
      <div>
        <h1>Slider列表区域</h1>
        <ul>
          {
            this.state.slidelists.map((element,index) =>(
            <li key={'mock'+element.id}>{'mock数据'+element.id+";;"+element.name+";;"+element.first+";;"+element.regexp3}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}


export default Slider;