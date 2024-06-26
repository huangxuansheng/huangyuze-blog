# React
安个vs的小插件   安好输入rcc  可快捷创建类 rfc快速创建函数


## React介绍
Facebook,React主要是用于构建用户界面的JavaScript 库，实现单页面应用。于 2013 年 5 月开源

React 拥有较高的性能:

1. 声明式设计 −React采用声明范式，可以轻松描述应用。
2. 高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
3. 灵活 −React可以与已知的库或框架很好地配合。
4. JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
5. 组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
6. 单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单

- 单页面应用和多页面应用
    - 多页面应用:页面跳转时跳转的都是完整的html页面
    - 单页面应用:只有1个html页面，所有内容都在这个页面中展示，通过“路由”来加载不同内容。全部是通过js来控制显示的。
- 单页面应用的优缺点:
    - 优点:用户体验比较好，加载比较流畅
    - 缺点:不利于seo(网站优化，能影响搜索排名)
- 特点:声明式设计(采用声明范式)、高效、灵活、JSX语法、组件、单向响应的数据流
创建项目,脚手架：下载别人写好的配置
`npm i -g yarn`先安这个 再安下面的更快

`npx create-react-app my-app`

安装时还可以先把脚手架下载好，再通过脚手架下载项目

`npm i -g create-react-app`

npx: npm中的个功能，npx的执行分3步，第一步:下载脚手架，第二步: 使用脚手架安装项目。第三步:下载好项目后删除脚手架。

## jsx语法

1. 在js中可以直接写html
   - HTML部分:直接写html标签
   - JS部分:写在{}内
   - babel会把j sx转成React. createElement( )
   - React. createElement()方法是创建react元素(虚拟DOM)的方法
   - ReactDOM. render()的第一 个参数，需要的就是react元素
2. jsx的特点
   - 大括号中写的js表达式,注意，大括号中不能直接渲染对象，能渲染数组(不能有普通对象)
   - JSX属性：写在标签的属性上
     - 改名`<div className=''></div>`  `<label htmlfor=''></label>`
     - 标签上添加行内样式时，需要使用对象形式
     - `<div id={uid}  style={color:'red',fontSize:'14px'}></div>`
        
    - react元素是不可变的,如果需要更新页面显示，就需要创建新的react元素
3. 元素渲染
    ReactDOM.render(react元素)
    react元素写法:
      - 直接使用jsx语法: `<div>{uname}</div>`
      - 使用 `React. createElement()`
3. 使用组件`<App />`
`ReactDOM.render(<Home/>,document.getElementById('root'))`

## 组件
1. 概念:从概念上类似于JavaScript 函数。它接受任意的入参(即"props") ，并返回用于描述页面展示内容的React元素。组件允许你将UI拆分为独立可复用的代码片段，并对每个片段进行独立构思。
2. 创建方式
- 函数式组件
```js
function App(props){
    return (<div>{props.name}</div>)
}
```
函数组件不用hook语法时，功能弱j，有hook语法后 替代类形式组件。
- 类形式组件 rcc
```js
class App extends React.Component{
    render(){}
    componentWillMount(){}
    states={}
}
```
前期使用类组件，会学习类组件中的state,生命周期函数。不管什么组件 必须引入react7
### 类形式组件
#### 创建组件rcc
```js
class Home extends React.Component{
    render(){
        return (<div><div>)
    }
}
```

说明：
   1. 组件名称首字母要求大写
   2. 需要继承React.Component这个类
   3. 必须有一个render函数，render必须return，return后写的是jsx语法
#### 导出组件
`export {Home}`
`export default Home`
#### 导入组件
`import {Home} from 'path'`
`import AppHome from 'path'`
#### 使用组件,当成标签使用
`<Home />`
`<Home></Home>`
#### 组件复用
把页面中的某一块UI拆分出去，做成一个组件，在原来的位置调用组件即可。

### props
- 当React元素为用户自定义组件时，它会将JSX 所接收的属性(attributes) 转换为单个对象传递给组件，这个对象被称之为“props”。
- 调用组件时可以通过属性的形式定义传递数据
`<Item data='string' arr={[1,2,3,4]}  />`
`<Item picurl={arr[0].picurl} title={arr[0].title} />`

在Item组件可以通过props对象，获取到用户调用组件时传入的数据

```js
class Item extends Component{
    console.log(this.props) // {data:'string ' ,arr:[1,2,3,4]
}
```

- 传递数据时，多个组件调用定义的属性名要一致。 
- 可以使用 ... 扩展运算符
- 还可以遍历时传递数据
- props是只读属性
## JSX中的循环
不能使用for循环,使用map()方法遍历对象或数组
`arr/obj.map(function(item,index){
    return item
})`
## state
- state是定义组件内部自己使用的数据
- 在类组件中有两种定义方式
  - 第一种：在constructor方法中定义
```js
constructor(){
    super()
    this.state = {
        count:1
    }
}
```
  - 第二种：直接在组件中定义
```js
state = {
    count:2
}
```
- 使用state数据
    `this.state.xx`
- 修改state数据,必须！this.setState()方法
  - 用法1：对象形式的，多次调用 只加一次
```js
this.setState({
    count:this. state . count + 1
})
```
  - 用法2：函数形式的,拿到更新前的值，多次调用可以一直加
```js
this.setState((state)={
    return {
        count:state.count+1
    }
})
```
- this.setState()方法有批量更新功能
  
`this.setState({count:this.state.count+1})`

- this.setState()方法 可能是异步的

`this.setState({},()=>{})`

什么时候是异步的：不放在其他宏任务或微任务中 当setState直接放在事件的宏任务中执行时，是异步的

什么时候是同步的：setState又被放在别的宏任务中,或者其他的微任务中

- setState的函数形式：
```js
this.setState((state)={
    return {
        count:state.count+1
    }
})
```

函数中有一个参数state,这个state是谁?

state是上一次操作完state的结果(永远是最新的数据)
加this不累加,算最后一个;不加this的话,就累加加的多
```js
<button onClick={()=>{
    this.setState((state)=>({
        page:this.state.page+1
    }))
    this.setState((state)=>({
        page:this.state.page+2
    }))
    this.setState((state)=>({
        page:this.state.page+3
    }))
}}>++</button>
```


如果视图内的数据需要修改, 并且同时页面响应变化，我们需要将数据放在state中, 使用setState来修改数据。

```jsx
import React, { Component } from 'react'

export default class Clock extends Component {
  state = {
      date: new Date()
  }

  componentDidMount(){
      this.timer = setInterval(() => {
          this.setState({
              date: new Date()
          })
      }, 1000);
  }

  componentWillUnmount(){
      clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}
```
## 生命周期函数
又叫钩子函数，在组件运行的过程会在某些指定的条件下自动触发执行。
组件有三个生命周期函数一生只触发一次：
- componentWillMount
- componentDidMount
- componentWillUnMount
  
1. 组件初始化阶段 initialization, 比如constructor

  - componentWillMount 组件挂载到DOM前调用,只会被调用一次, 这里写setState不会引起组件重新渲染,组件渲染前，可能会放网络请求(不太建议)
  - componentDidMount 组件渲染完成，网络请求，全局事件绑定, 且只会被调用一次
  - shouldComponentUpdate(nextProps, nextState){return false;} 是否允许组件更新，优化使用,比较之前和当前的props state是否有变化
  - componentWillUpdate(){} render方法前执行,更新前，一般不做任何处理
  - componentDidUpdate(){} 组件更新完成，新网络请求
  - componentWillReceiveProps(){}props改变了 接收新的props，一般不做任何处理
  - componentWillUnmount(){} 组件销毁前，清理一些定时器,把全局绑定的事件、网络请求等有副作用的全部清除

### code
```jsx
import React, { Component } from "react";
export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    // 常用于初始化状态
    console.log("1.组件构造函数执行");
  }
  componentWillMount() {
    // 此时可以访问状态和属性，可进行api调用等
    console.log("2.组件将要挂载");
  }
  componentDidMount() {
    // 组件已挂载，可进行状态更新操作
    console.log("3.组件已挂载");
  }
  componentWillReceiveProps() {
    // 父组件传递的属性有变化，做相应响应
    console.log("4.将要接收属性传递");
  }
  shouldComponentUpdate() {
    // 组件是否需要更新，需要返回布尔值结果，优化点
    console.log("5.组件是否需要更新？");
    return true;
  }
  componentWillUpdate() {
    // 组件将要更新，可做更新统计
    console.log("6.组件将要更新");
  }
  componentDidUpdate() {
    // 组件更新
    console.log("7.组件已更新");
  }
  componentWillUnmount() {
    // 组件将要卸载, 可做清理工作
    console.log("8.组件将要卸载");
  }
  render() {
    console.log("组件渲染");
    return <div>生命周期探究</div>;
  }
}

```
Fiber：

getDerivedStateFromProps(props,state)

在组件创建和更新的render之前调用
### 事件系统
- react中自己重新定义事件系统，react绑定事件不需要获取到DOM元素，而是把事件绑定定义在虛拟DOM上了
- 语法:
`<div on+事件名={EventFunction}></div>`
说明：
1. js的事件，驼峰命名法
2. EventFunction:对应的事件功能，编写的形式
   1. 直接定义一个箭头函数
   2. 可以定义函数
    如果是类形式组件，需要使用this.clickme, clickme函数定义在类中
```jsx
class App extends React.Component{
    clickme(){}
    render(){
        return <div onClick={this.clickme}>
    }
}
```
### this指向问题
在react中，自定义事件中this默认是指向undefined的。
- 在react组件的生命周期函数中，this指向当前组件
- 在react class定义的组件中，constructor构造方法中需要通过调用super()方法生成this，这时	this指向当前组件；否则不存在this，使用会报错。
- 在react 组件中，自定义function函数中this默认指向undefined）

如果想让this指向当前组件   
  - 方法1:使用bind,改变this指向   
  - 方法2：使用箭头函数
  - 方法3：在constructor构造方法中通过bind绑定this
```jsx
<div onClick={this.clickme }></div>
constructor( ){
    super( )
    this.clickme = this.clickme . bind(this)
}
```
如果当函数调用时没有传参，建议使用方法3(constructor中绑定)
如果函数调用时需要传参，使用直接bind绑定更多一些
### 事件对象
- 事件对象不需要传递，直接调用就行，把事件对象方法函数形参的最后y一个位置
- 获取坐标信息
  
`event.pagex / event . pageY`获取事件触发者  

`e.preventDefault()`阻止冒泡

`e.stopPropagation()` 阻止默认事件
### 表单
- form标签
    `<form action= 'http://xx/xx.php/xx. jsp/xx.asp' method= 'get post' ></ form>`
- ajax:不刷新页面，能实现页面的局部更新，有ajax后form用的很少了
- 表单:收集用户输入的信息
  - 第一种收集信息的形式：受控组件
  
    受控组件：表单数据的显示和更改有react控制，具体是由react的state的控制。使 React 的 state 成为“唯一数据源”。

    `<input value={this.state.user} onChange={(e)=>this.setState({user:e.currentTarget.vale})} />`
  特殊的受控组件：单选按钮,多选按钮
    - value属性值不能改变
    - onChange事件只有在选中时触发
                    
  - 第二种收集信息的形式：非受控组件，允许用户获取到原生DOM，自己来操作数据
    - 使用非受控组件获取input中值
      - 创建ref ： React.createRef()
      - 把创建ref添加到标签上，使用ref属性 ref={this.mref}
      - 获取DOM，this.myref.current

## 状态提升
1. 数据的传递方向：
   - 父级向子级传递，使用props
   - 子级向父级传递，状态提升
2. 用法
    1. 让父级向子级传递一个函数 `<Son user= getSonDate={this.getSonDate.bind(this)}/>`
    2. 在子级组件中调用传递来的这个方法 `this.props.getSonDate(this.state.user)`
    3. 在子级组件中调用这个函数时可以传递实参 `this.setState({list:cs})`
    4. 在父级函数中接收数据
 	

## 组合
1. 有些组件无法提前知晓它们子组件的具体内容。在Sidebar (侧边栏)和Dialog (对话框)等展现通用容器(box)的组件中特别容易遇到这种情况。我们建议这些组件使用一个特殊的childrenprop來将他们的子组件传递到渲染结果中
2. 用法:
  1. 定义一个组件，组件中使用特殊的children prop属性 {this.props.children}
  2. 使用这个组件，作为双标签使用，在双标签内部定义具体内容
  ```jsx
  <TopBar>
    <div>首页</div>
    <div>组件</div>
  </TopBar>
  ```

  3. 定义组件时使用childrenprop的位置就能显示双标签中的内容
3. React.createElement(type,options,children)
   - type :标签类型
   - options:属性集合
   - children:子级元素
4. props类型验证
   1. PropTypes类型检测:父级向子级传递数据时，是否是子级要求的数据类型，如果不是PropTypes会报警告。
   2. 使用步骤
   3. 引入验证包 `import PropTypes from 'prop-types' ;`
1. 定义需要验证的prop属性
类组件中用法：
```jsx
组件名.propTypes={
  count:propTypes.string //验证单个类型
  msg：propTypes.oneOfType([//验证多种类型
    propTypes.number,
    propTypes.string
  ]),
  vnode:propTypes.element.isRequired//验证必须项
}
//第二种写法：
static propTypes ={}
```
2. 给props定义默认值
类名.defaultProps={msg:'hello',obj:{}}
1. 执行顺序
默认值比验证执行的早

## fetch网络请求
介绍:
1. 是es6中提供的一种新的网络请求方式。Fetch API 提供了一个JavaScript接口，用于访问和操纵HTTP管道的部分，不是ajax 了。
2. fetch方法是一个全局方法，可以在任意位置使用
3. fetch()返回的Promise ，使用. then( )获取请求成功的结果,使用. catch捕获错误信息
4. 默认情况下，fetch不会从服务端发送或接收任何cookies, 要发送cookies,必须设置credentials 选项，credentials的默认值是 same-origin
### 语法
```js
        fetch(url,{
            method:''get/post',//默认get
            body:data,//携带的是post数据
            params:data//携带的是get数据
            header:{//配置请求头
                'Content-Type':'application/x-www-form-urlencoded'   //post以form data形式传递数据
            },
            credentials:'same-origin', //是否允许携带cookie数据(include可携带)
        })
```
返回值：网络请求的结果 通过promise.then方法接收的不可直接用，fetch提供了对应的解析方法
```js
        .blob() 把结果解析二进制
        .text() 把结果解析字符串
        .json() 把结果解析json对象

        then(data=>data. json())
        then( data=>{ console . log(data)})
        //解析后的json对象格式：key：value
            {
                data：{}//真实请求结果
                status：200，
                header：{}
            }
```
```md
    4. 请求携带数据
       1. get
            1. 问号携带数据
                携带形式：url?key=value&key=value
            2. restful数据
                携带形式：url/value/value2
                要求后台识别哪些是路径，哪些是数据
        2. post
            1. 需要加请求头header，method
            2. 传递的数据需要放在body上，而且是'key=value&key=value' 的字符串
    5. 跨域解决
        1. cors : 后台配置，前台不需要管
        2. jsonp : 使用 fetch-jsonp插件
            1. 下载安装 npm i fetch-jsonp
            2. 引入插件
            3. 使用插件请求
    		 getJsonp(){
       			 fetchJsonp('http://localhost:5000/kuayu')
       			 .then(data=>data.json())
       			 .then(data=>console.log(data))
				}

        3. 代理
            1. 在package.json中写
            "proxy": "http://localhost:5000"
                1. package.json中有一个字段：proxy,这个字段可以实现一个代理
                2. 重启前台服务
                3. 前台调用接口时只需要写接口名称，不写代理地址
            2. 使用http-proxy-middleware中间件
                1. 下载安装： npm i http-proxy-middleware
                2. 在src目录下创建一个setupProxy.js文件
                3. 编写配置
let {createProxyMiddleware} = require('http-proxy-middleware');
module.exports =function(app){
app.use(createProxyMiddleware('/inex',{
  target:'https://3g.163.com//touch/reconstruct/article/list',
  changeOrigin:true,
  pathRewrite:{
    '/inex':''
  }
}))
}
```
## router 路由
```md
1. 路由介绍:react主要实现单页面应用，也有切换内容显示的需求，定义一个可以根据不同的路径加载不同的内容的功能，这个功能就叫路由
    路由常用的有两种实现方法:
        1. hash路由，根据路径中的hash值来决定显示页面
        2. history路由：使用h5中的history对象
2. 安装:
    npm i -S react-router-dom
3. 配置
    1. 先决定使用哪种路由模式(hash,history)
       ` <HashRouter></HashRouter>`  #
       ` <BrowserRouter></BrowserRouter> `//
        提供了一个路由容器,在容器中定义具体
        路由，那么定义的路由就会按照决定好的路由模式来显示。
    2. 定义具体的路由
        `<Route path='/about' compoent={about}/>`
        path:是路径，会在浏览器地址栏显示
        component：要加载的页面
        exact：精准匹配
    3. Route的特点:贪婪匹配
        不想贪婪，想一次加载一个路由，实现方式2种:
        1. exact精准匹配
        2. react-router-rom还提供了一个标签,`<Switch>`,作用是显示匹配到的第一个Path
    4. Link标签，导航
       ` <link to='/' exact />去哪</link>`
    5. 动态路由
        1. 定义路由时，规定哪些部分是动态的，如果是动态需要使用:variable 形式定义
          ` <Route path= '/detail/:newsid' component={Detail}>`
        2. 跳转时(Link),需要给动态参加具体的数据
             `<link to='/detail/1'  />去哪</link>`
            `<Link to={ /detail/${id}^ }>详情</L ink>
            <Link to={{`pathpame: /detail/${id} |`}}>`
遍历
`{this.state.arr.map((ele,index)=>(<Link key={index} to={`/detail/${ele.id}`}>{ele.user}</Link>))}`
        3. 在跳转后的组件中可以获取到动态路由的具体参数值
            从props.match.params这个对象获取
    6. Route加载的组件的props.上会自动多3个对象(history,match,loaction)
        history:h5的history对象，里面有push, goBack等常用浏览器的操作方法
        locatin:经过封装的浏览器的loaction对象
        match：接受路由参数的
    7. 路由嵌套
        1. 路由到的页面中又有其他的路由
        2. 常见的二层嵌套，多层嵌套
            1. 两层嵌套
                外层把组件作为路由标签用，在组件的属性上使用path属性，来定义路径内层被嵌套的组件使用<Route>来定义
                在外层组件内部需要使用props. children来显示子级路由
                注意:内层路由路径要把父级的路径带上
            APP.js：
            <Kemu path='/kemu'>
              <Route path='/kemu/keyi' component={Keyi}/>
              <Route path='/kemu/Keer' component={Keer}/>
              <Route path='/kemu/Kesan' component={Kesan}/>
              <Route path='/kemu/Kesi' component={Kesi}/>
            </Kemu>
            2. 多层嵌套
                1. 不能把组件作为标签使用了
                2. 定义在组件内部，在组件内部使用`<Route/>`来定义路由,`<Link/>`定义导航
    8. 路由重定向
        1. 引入标签<Redirect/>
        2. 用法
            1. <Route path=' /a' render={()=>{<Redirect to='/b' />}}>
            2. 直接作为标签使用
                <Redirect from='/c' to='/'/>
            3. 在Route双标签内使用
                <Route path= '/v'>
                    <Redirect to='/'/>
                </Route >
    9. 路由高亮
        1. 引入NavLink标签
        2. 这个标签在被选中时，能自动添加类名
        3. 自己添加css样式
    10. 编程式导航
        - 就是使用history的导航功能实现的
        - history.push() //正常的导航，会把这层路径添加到浏览器的历史记录中
        - history.replace() //替换导航
        - history.goBack() //返回上一层路径
        - history.go(number) //前进或后退
    11. withRouter()
        - 有些页面访问不到，如果想在这种页面使用编程式导航
        - withRouter是react-router 提供的一个高阶组件，使用这个函数调用时把不能访问
        history对象的组件放在实爹位置上，就可以返回一个新组件，这个新组件就具备了history ,loaction，match对象
        import {withRouter} from 'react-router'//引入
        let Newkemu=withRouter(kemu)//引用
        export default Newkemu //导出
        - 除了withRouter,还可以通过props传参形式由父级传递下来
```

## 配置less
```md
- 使用create-react-app脚手架创建的项目，默认是不支持less。如果想在项目中使用less就需要自己配置
- 常用的方法：
    0. 首先下载 less 和 less-loader 
    1. 直接修改webpack的配置
        1. 运行 npm run eject ： 把webpack的配置文件显示出来
        2. 在webpack.config.js中进行修改
            1. 先搜索rules，直接自己添加loader配置
                {
                    test:/\.less/,
                    use:['style-loader','css-loader','less-loader']
                }
            2. 参照sass的配置，搜索sass
                复制sass的配置，把其中的sass修改为less
    2. 使用中间件
        1. craco库，@craco/less插件
        2. customize-cra react-app-rewired库

2. mock
    1. 作用：生成随机数据，拦截 Ajax 请求
    2. 优点：
        前后端分离   开发无侵入
    3. 安装及使用
        npm install mockjs
    4. 数据模板定义规范：
        数据模板中的每个属性由 3 部分构成：属性名(name)、生成规则(rule)、属性值(value)
        语法：'name|rule': value
        生成规则 有 7 种格式：
        'name|min-max': value
        'name|count': value
        'name|min-max.dmin-dmax': value
        'name|min-max.dcount': value
        'name|count.dmin-dmax': value
        'name|count.dcount': value
        'name|+step': value
    5. 数据占位符定义规范：
        占位符 只是在属性值字符串中占个位置，并不出现在最终的属性值中
        语法：@占位符 cname
        @占位符(参数 [, 参数])
        注意：
        1.用 @ 来标识其后的字符串是 占位符。
        2.占位符 引用的是 Mock.Random 中的方法
        3.通过 Mock.Random.extend() 来扩展自定义占位符。
        4.占位符 也可以引用 数据模板 中的属性。
        5.占位符 会优先引用 数据模板 中的属性。
        6.占位符 支持 相对路径 和 绝对路径
    6. 拦截网络请求
        Mock.mock(url,type,template)
```


### Provider
```md
作用：可以不通过props一层一层的传递数据，通过Provider提供数据，在组件树之间可以直接获取数据。
    1. 数据传递方向有父传子 (props),子传父 (事件)
        这两种形式都需要一层一层的传递
    2. 作用：Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法
    3. 使用
        1. 创建Context.js
            import React from 'react'
            const Mycontext=React.createContext()
            export default Mycontext
        2. Mycontext.Provider : 提供数据
            <Mycontext.Provider value={}>
                <Comp />
            </Mycontext.Provider>
        3. Mycontext.Consumer : 获取数据
           render() {
              return (
                 <Mycontext.Consumer>
                     {(value)=>{
                         console.log(value);
                         return <div>
                             item
                             {value.sun}
                             {value.pp}
                         </div>
                     }}
                 </Mycontext.Consumer>
              )
          }

        4. Class.contextType:获取数据
            Class.contextType = Mycontext;//写在最下
            在组件内可以使用context属性获取的数据 
        5. static contextType：获取数据
            static contextType = Mycontext;//在render的上一行
            在组件内可以使用context属性获取的数据
        6. contextType,Consumer 区别
            contextType 调用多次时，只有最后一次生效
            Consumer 调用多次，数据不覆盖


2. 错误边界
    1. react中一个页面中可能有很多组件，只要其中有一个组件运行出错，react会把页面中所有组件全卸载掉，显示空白屏幕
    2. 错误边界:当React运行中有错误时，这时显示一个备用的页面，不显示白屏，还可以把报错信息发送到指定的位置
    3. 用法：
         错误边界也是一个组件，定义好后包裹其他的组件，这个组件必须是class定义的，同时这个组件中必须有以下两个生命周期函数中的至少一个
             static getDerivedStateFromError(){
       		    return {iserror:true}
   			     }
        渲染备用 UI
            componentDidCatch(...rest){
               console.log(rest);
            }
        打印错误信息，可以把错误信息发送到指定位置
      render() {
        if(this.state.iserror){
            return <div>组件报错了</div>
        }
        return (
            <div>
                {this.props.children}           
            </div>
        )  
    }
```
## Refs 转发
1. ref是什么？允许用户获取到原生DOM
2. ref放在组件上，这时current的值是谁？
    就是这个组件
3. ref放在组件上时，我想获取的是这个组件内部的某个DOM元素
- react中组件上使用ref属性时，react会把ref从props中删除，根本不会传递到组件内部。
- refs转发就是解决上面这个问题的
4. 用法：
  1. 创建ref 在父类
```jsx
constructor(){
  super()
  this.ref1=React.createRef()
}
```
在父类可以通过事件输出 console.log(this.ref1.current);

然后在组件中传过去ref `<Sonref ref={this.ref1} msg='2006'/> `
   2. 使用forwardRef来创建组件
```jsx
let Son=React.forwardRef((props,ref)=>{
return <div>
  <div ref={ref}>son中的div</div>
</div>`
export default Son
```

### Fragments
1. Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
2. 语法：
`<React.Fragment></React.Fragment>`
简写语法： <>...</>

### 高阶组件
类似于高阶函数 一个函数返回一个函数
高阶组件 接受一个组件 返回一个组件
- 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式， 高阶组件本身是一个函数，接收一个组件，返回一个新组件,高阶组件是参数为组件，返回值为新组件的函数

代码如下

- //React的api, React.createElement(标签,{属性},children)
- //React的api, React.cloneElement(react元素,{属性},children)
- //React的api, React.Children.map()

### react性能优化
- shouldComponentUpdate(nextProps,nextState)
this.props代表老状态，nextProps代表新状态
是否允许组件更新
- PureComponent （export default class Son2 extends PureComponent）
PureComponent来定义类形式组件，只有当props或state发生改变时才会触发组件更新

- ComponentWillUnmount 组件注销
  // 组件销毁前，把全局的事件删除了 比如
        window.removeEventListener('scroll',this.myscroll);
        clearTimeout(this.state.timer);
- ComponentDidUpdate(prevProps,prevState)
 防止死循环 可以加条件判断


###  Render Props
- 术语 “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术，一些组件向外提供数据，不把需要数据的组件硬编程到这个组件内部，通过调用props.上
的一个方法，把数据提供处理
- 语法
Data.jsx提供数据的组件
```jsx
class Data extends Component {
  state ={count:1}
  render(){
    return <div>{this . props. render (this. state)}</div>
}
}
//在公共app.js，等于把state传给son
      <Data render={(state)=>{
        console.log('ap',state);
          return <Son1 state={state}/>
      }}/>  
//Son.jsx在通过this.props接数据
```
####  懒加载
- 当组件什么时候使用到了，再动态加载这个组件
- 使用：
let About = React.lazy(()=>import('./About'));

## hooks 

hook作用：让函数式组件能使用state和生命周期

import React, { useState, useEffect } from "react";

1. 介绍：Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。 rfc快速创建
    hook是给函数组件使用的，hook只能在函数组件中使用，不能在class组件中使用
    没有破坏性改动，100%向后兼容，react版本大于16.8就可以直接使用Hook
### State Hook
1. 语法：
- import React,{useState} from 'react'
- const [count, setCount] = useState(0);
2. 调用
- 直接使用变量名 count
3. 修改
调用setCount方法
```jsx
            <!-- 第一种用法：在老状态上修改 -->
            setCount((count)=>{
                //count是老的状态
                return count + 5//没有批量更新
            })
            <!-- 第二种用法：设置成固定值 -->
            setCount(2)
            <!-- 第三种用法： -->
            setCount(count+2) //有批量更新功能
```
4. 是否是批量更新

setCount(count=>count+1):不批量更新，写几个就执行几次

5. 是否是异步


在非其他宏任务或微任务中时是异步的， 否则同步执行的

### Effect Hook
1. useEffect 是给函数组件提供 "生命周期" 的一个函数，相当于有3个生命周期
```jsx
2. 语法：
        1. 引入
            import React,{useEffect} from 'react'
        2. 使用：
            useEffect(()=>{
                ...
                return ()=>{}
            },[])
            1. 第一个参数位置是函数，作用相当于componentDidMount和componentDidUpdate
            2. 第二个参数位置是一个数组，可选的。这个数组是对componentDidUpdate优化使用的
                1. 不写第二个参数时：第一个参数位置的函数，在组件更新时会重新执行
                2. 第二个参数位置写空数组([])：禁止ComponentDidUpdate执行
                3. 第二次参数位置数组中有值：只有数组中的参数的值发生改变时，才能执行ComponentDidUpdate
            3. 第一个参数位置的函数中的返回值(return) : 相当于componentWillUnmount，effect 的清除阶段在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次。这个设计可以帮助我们创建 bug 更少的组件。
```
### Context Hook
```jsx
- 在函数组件中使用Context的hook
- 语法：
        这是获取数据 const value = useContext(MyContext);
        提供数据：Context.Provider
useContext
    1. 在函数组件中获取Context提供的数据
    2. 用法：
        1. 创建Context,提供数据
            Let Mycontext = React.createContext() //写在export前面
          `  <Mycontext.Provider value={{}}><Son /></Mycontext.Provider>`
export {Mycontext}
        2. 在函数组件中调用useContext获取数据
            function Son(){
                let value = useContext(Mycontext);
            }
        3. 在函数组件中还可以使用Consumer获取数据
            function Son (){
               ` <Mycontext.Consumer>`
                {
                   (value)=>{
                        console.log(value);
                        
                    }
                }</Mycontext.Consumer>
            }

4. Hook 规则
    1. 只在最顶层使用 Hook,不要在循环，条件或嵌套函数中调用 Hook
    2. 只在 React 函数中调用 Hook

```
### useReducer | useMemo
```jsx
1.  useReducer 是功能更强大的"useState"
    1. 语法:
        const [state, dispatch] = useReducer(reducer, initialArg, init)
        2. dispatch：是useReducer产生的一个操作方法
            dispatch执行时需要传递一个对象 {type:'ADD',payload:'data'}
        3. reducer：提供对数据进行操作的方案
            function reducer(state,action){
                switch(action.type){
                    case 'ADD':
                        state = state + 1;
                        return state;
                    default:
                        return state;
                }
            }
    3. 使用：
        直接调用变量名
    4. 修改：
        调用dispatch方法

# 注意：<React.StrictMode>严格模式

- 检测意外的副作用
    严格模式不能自动检测到你的副作用，但它可以帮助你发现它们，使它们更具确定性。通过故意重复调用以下函数来实现的该操作：
    class 组件的 constructor，render 以及 shouldComponentUpdate 方法
    class 组件的生命周期方法 getDerivedStateFromProps
    函数组件体
    状态更新函数 (即 setState 的第一个参数）
    函数组件通过使用 useState，useMemo 或者 useReducer
这仅适用于开发模式。生产模式下生命周期不会被调用两次。

2. useMemo
    1. 把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算
    2. const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### useRef
```jsx
1. useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。
2. 用法：
  1. 创建ref
  2. 语法：const myref = useRef()
  3. 使用	`	<div ref={myref}></div>`
  4. refs转发
` <Son ref={myref} />`
  Son组件创建时，需要使用 React.forwardRef()创建
  React.forwardRef((props,ref)=>{
    return <div ref={ref}></div>
  })
```


### 自定义hook
```md
    1. 提取组件中的业务逻辑
    2. 语法：
        必须以 'use' 开头，可以使用内置hook
        function useXx(){
            const [list,setList] = useState([]);
            useEffect(()=>{
            },[])
            return list
        }
    3. 使用：
        在组件中直接调用即可
        注意：1. 只能在函数组件中使用
              2. 不能放在 if,for,普通函数中调用，在设计的时候有顺序，单项链表

```

## redux
```md
1. 在react中数据传递方式有几种?
    1. 父传子： props
    2. 子传父： 使用事件
    3. Context：提供公共数据

2. Context的缺点：
    1. 公共数据特别多
    2. 组件也特别多时
    当上面两种情况同时存在时，最好把Context定义在App.js组件上
    但是都定义App.js上，会造成App.js组件上多很多对App组件来说没用的数据
    所以会有需求：把公共数据提取出去，单独放在一个存储空间中，使用数据时就从这个空间中取，修改时就修改这个空间中的数据。
3. redux
    1. 作用：把公共数据提取出去，单独放在一个存储空间中，使用数据时就从这个空间中取，修改时就修改这个空间中的数据。对数据操作时，redux提供的对应的方法
    2. 安装：npm install --save redux
       调试工具：npm install --save-dev redux-devtools
    3. 三大原则
        1.单一数据源
            整个应用的 state 被储存在一棵object tree中，并且这个 object tree 只存在于唯一一个 store 中。
        2.使用纯函数来执行修改
            如何改变 state tree ，你需要编写 reducers。它接收先前的 state 和 action，并返回新的 state
        3.State 是只读的
       唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。执行上面纯函数。

    4. 核心 store 
        1. store是存储数据的空间
        2. 创建存储空间语法：
            import {createStore} from 'redux'
            const store = createStore(reducer,init)
        3. store上会提供操作数据的方法
            1. 获取数据 getState()
            2. 修改数据 dispatch()
            3. 监听方法 subscribe()

    5. 核心2 reducer
        1. reducer 提供可预测化的状态管理
        2. reducer 必须是一个纯函数
            function reducer(state,action){
                switch(action.type){
                    case 'ADD':
                        state = state + 1;
                        return state;
                    default:
                        return state
                }
            }
        3. 这个reducer是放在 createStore 的第一个参数位置

    6. 核心3 action
        1. 对store数据的具体操作
        2. 格式：
            1. 对象形式
                {
                    type:'ADD',
                    payload:'xxxxx'
                }
            2. 函数形式
                function XX(yy){
                    return {
                        type:'ADD',
                        payload:yy
                    }
                }
        3. action也必须是没有副作用的(网络请求，定时器)
        4. 触发action执行：
            调用store上的dispatch方法，把action放在dispatch中

    7. reducers合并
        1. 如果一个store中要存储多个公共数据，这些公共数据的操作又是不一样的
        2. 需要创建多个reducer,每个reducer中都保存相关的一组数据
        3. createStore(reducer)中只有第一个参数位置是放reducer的，而且只能放一个
        4. redux中提供了一个方法，combineReducers ，作用就是把多个reducer合并成一个
        5. combineReducers语法：
            import {combineReducers} from 'redux'
            const all = combineReducers({
                reducer1:reducer1,
                reducerA
            })
            返回值：all ，也是一个函数
        6. 把合并后的all放到 createStore(all),
            1. store中就有多个reducer中的数据了
            2. store.dispatch()能触发所有reducer中的功能
    8. 支持异步action
        1. 需要使用中间件 ： redux-thunk
        2. 安装：npm i redux-thunk -S
        3. 配置store支持中间件
            import {applyMiddle} from 'redux'
            import thunk from 'redux-thunk'
            createStore(reducer,applyMiddle(thunk))
        4. 定义异步action
            const yibu=(url,data)=>(dispatch, getState)=>{
                fetch(url).then(data=>data.json()).then(data=>{
                    dispatch({
                        type:'ADD',
                        payload:data
                    })
                })
            }
        
        5. 执行异步action
            dispatch(yibu())
        
    9. compose
        1. 合并applyMiddleware和其他的功能
        2. 让浏览器插件和中间件同时工作
const store = createStore(all,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
         composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose
 const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk,logger)));

3. react关联redux
    1. 安装一个库，react-redux
        npm i react-redux -S
    2. 使用 react-redux 把react项目和redux关联起来
        import {Provider } from 'react-redux'
        import store from 'redux3.js'
       ` <Provider store={store}>
            <App />
        </Provider>`
    3. 在组件中使用redux数据
        import {connect} from 'react-redux'//引入高阶组件
        export default connect(mapStateToProps,mapDispatchToprops)(Son)
Connect里面是两个函数可定义
      1. 把store的存储的数据放到组件的props上
         function mapStateToProps(state){
 	 	console.log('son',state); 
 		return {user:state}
}
2.把store上的dispatch方法给组件使用
function mapDispatchToprops(dispatch){
    return {
        changeuser:(data)=>dispatch({
            type:'ADD',
            payload:'花里胡哨'
        }),
        deldel:(data)=>dispatch({
            type:'DEL'

        })
}
}
```
        















