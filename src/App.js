/*
 * @Author: xiyu
 * @Date: 2020-04-13 13:29:50 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-06-17 18:45:32
 */

import React from 'react';
//import { BrowserRouter as Router, Route, Switch, NavLink, Link, Redirect, Prompt } from 'react-router-dom'
import './App.css';

// import List from './components/List'
// import Content from './components/Content'
// import Slider from './components/Slider'
// import Balls from './components/Balls'
// import Tcs from './components/Tcs'
// import Filter from './components/Filter'
// import Pip from './components/Pip'

// const isActiveFunc = (match, location) => {
//   console.log(match,'contact');
//   return match
// }
// const tsEvents = ()=>{
//   console.log("确定要离开吗？");
// }

// const pipe = (val)=>{
//   console.log(val)
// }

//   //内部组件
//   const Temp = (props)=>{
//     return (
//     <div className="hhh3">
//       <h3>{props["a"]}{props["b"]}{props["c"]}内部组件传值测试</h3>
//     </div>
//      )
//  }

function App() {
  let keys = [];
  
  //basename设置等于 Router里的子Route 路径全都指向 basename设置的路径下面（相当于vue 路由下面的Children）
  //Switch 如果页面有一大堆Route 那么它只会渲染其中一个，没有switch的话 每个route都会被渲染，相当于vue里的懒加载类似
  //link replace的作用 加入点击 one two three 正常情况点击浏览器后退按钮依次 是 two one,如果加了replace 那么点击后退按钮后将一次性返回到第一次点击的路由

  return (
    <div><h1>React微服务</h1></div>
  );
  // return (
  //   <Router basename="/minooo">
  //     <Temp a="你" b="无敌" c="牛逼日飞机"></Temp>
  //     <h1>React测试项目<br />哔哩哔哩网站数据列表爬取</h1>
  //     <Pip pipe={mode=>pipe(mode)} />
  //     <div className="App">
  //       <header className="App-header">
  //             <nav>
  //               <NavLink exact activeClassName="active" to="/">Home</NavLink>
  //               <NavLink activeStyle={{fontSize:'30px',color: '#ff0000'}} to="/content">Content</NavLink>
  //               <NavLink isActive={isActiveFunc} activeClassName="active"  to="/list">List</NavLink>
  //             </nav>
  //           <ul>
            
  //             <li>
  //             <Prompt message={tsEvents} />
  //             <Link to={{
  //                 pathname: '/courses',
  //                 search: '?sort=name',
  //                 hash: '#the-hash',
  //                 state: { fromDashboard: true }
  //               }}>带参数的链接</Link>
  //             </li>
  //             <li><Link to="/fliter">滤镜调试中</Link> </li>
  //             <li><Link to="/balls">球球</Link> </li>
  //             <li><Link to="/tanchishe">贪吃蛇</Link> </li>
  //             <li><Link to="/slider">slider</Link> </li>
  //             <li><Link to="/list">二级目录</Link> </li>
  //             <li><Link to="/nested/one">免费征途</Link></li>
  //             <li><Link to="/nested/two">征途2</Link></li>
  //             <li><Link replace to="/nested/Three">征途2手游</Link></li>
              
  //           </ul>
  //           <Switch>
  //             <Route path="/fliter" component={Filter}></Route>
  //             <Route path="/balls" component={Balls}></Route>
  //             <Route path="/tanchishe" render={()=>(
  //               <Tcs>
  //                 <Route path="/list" component={List} />
  //               </Tcs>
  //             )}></Route>
  //             <Route path="/slider" component={Slider}></Route>
  //             <Route path="/content" component={Content}></Route>
  //             <Route path="/list" render={()=>(
  //                 <List ary={keys}>
  //                     <Route path="/list/slider" component={Slider} />
  //                 </List>
  //             )}>
  //             </Route>
  //             <Route path="/" render={
  //               ()=>(
  //                 <Redirect to="/List" />
  //               )}>
  //             </Route>

  //           </Switch>
            
  //       </header>
  //     </div>
  //   </Router>
    
  // );
  
}

export default App;
