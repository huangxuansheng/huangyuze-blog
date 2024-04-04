# vue2 基础

## 安装

1. 全局安 Vue 脚手架工具

```sh
npm i -g @vue/cli
```

1.2 创建项目

```sh
vue create my-project
```

2. 目录结构

- src
- assets:放静态资源
- static:也是放静态资源的
- components:放置公共组件
- App.vue:入口组件
- main.js:入口 js 文件

3. Vue 项目是怎么添加到页面中的 main.js

- 第一种

```js
newVue({
  render: (h) => h(App),
  template: "<div></div>",
  el: "#app", //el属性指定添加到页面哪个容器中
});
```

-第二种

```js
newVue({
  render: (h) => h(App),
}).$mount("#app"); //$mount方法指定添加到页面哪个容器中
```

4.  vue 基础语法

- 组件的格式

vue 中的组件一般由 3 部分组成，template(页面结构),script(页面中的业务逻辑),style(当前页面的样式)

- 模板语法：

语法：

```html
<div>{{单行表达式}}</div>
```

注意：模板语法渲染的永远是一个字符串

- 组件中定义变量

变量属于 js 部分，需要在 script 标签内部来定义
语法:
`js export default { name: 'App', data(){ return { a:2 } } }`

使用变量：直接使用变量名

- 组件中定义函数

  ```js
  export default {
    name: "App",
    methods: {
      //定义方法的位置
      fn() {
        return 3;
      },
    },
  };
  ```

5. 指令
   指令：vue 中定义好的一些以"v-"开头+具体的名称的属性，这些属性都有特定的功能。

指令用法：

```html
<div v-xx:prevent.a="表达式"></div>
<div v-xx></div>
<div v-xx="表达式"></div>
<div v-xx:yy></div>
```

注意：指令等号后是 js 执行环境，里面要写 js 表达式指令分：自定义指令和内置指令内置指令不需要引入，直接调用即可，每个内置指令都有自己的固定用法自定义指令就是用户自己定义的

6. v-html
   作用把 html 渲染到页面,调用的是这个容器的 innerHTML 实现的用法：

```html
<div v-html="表达式">1234</div>
```

7. 条件渲染

- 指令：v-if / v-else-if / v-else
- 语法：

```html
<div v-if="count === 1"></div>
<div v-else-if="count === 2"></div>
<div v-else></div>
```

- 执行结果：
  只有满足条件的会被渲染，不满足的不渲染,另一个指令：v-show 指令语法：

```html
<div v-show="表达式"></div>
```

执行结果：条件为真就显示，条件为假就隐藏(是通过 css 控制)一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

8. 列表渲染

- 指令：v-for
- 语法：

```html
用法 1：遍历数组
<div v-for="(item,index) in arr">{{item}}</div>
用法 2：遍历对象
<div v-for="(item,key,index) in arr/obj"></div>
```

9.  动态绑定 v-bind

- 指令：让属性可以接受变量

```html
<div v-bind:id="js表达式"></div>
```

- 简写：
  v-bind  简写成  ：冒号

10. 事件处理
    v-on  简写成  @

- 可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。
  语法：

```html
<div v-on:click="dosomething"></div>
```

函数 dosomething 定义的位置：要求定义 mothds 属性中

- 鼠标修饰符：

  ```html
  <div v-on:click.stop="dosomething"></div>
  ```

  - stop//取消冒泡 event.stopPropagation()。
  - prevent//prevent  是拦截默认事件调用 event.preventDefault()。
  - capture
  - self//只当事件是从侦听器绑定的元素本身触发时才触发回调。
  - once//点一次
  - passive//passive 是不拦截默认事件。

- 键盘修饰符：
  - enter
  - tab
  - delete (捕获“删除”和“退格”键)
  - esc
  - space
  - up
  - down
  - left
  - right
- 系统修饰符：
  - ctrl
  - alt
  - shift
  - meta
- 传参问题： 1. 事件对象
  _ 当定义的事件没有其他参数时，第一个参数默认就是事件对象
  _ 当定义的事件有其他参数时，事件对象必须手动传入
  `html <div v-on:click='demo(123,$event)'>`
      2. this 问题：this 指向当前组件

11. 数组更新检测
    在列表渲染中，如果遍历是数组，当数组数据发生改变时，页面什么时候能自动更新(页面重新渲染)数组中分两类操作：

- 变异方法: 
  调用数组原生方法时能改变原数组的方法称为变异方法，变异方法会触发页面自动更新

  push() unshift() shift() pop() sort() splice() reserve()

- 非变异方法:调用数组方法后不会改变原数组

  join() concat() slice() indexOf() lastIndexOf()

12. 对象变更检测注意事项
1. 默认只有修改能响应，会触发页面更新；添加，删除默认是不触发页面更新的
1. 怎么让添加或删除时能触发页面更新

- 方法 1：重新赋值{...this.obj,c:’c’}
- 方法 2: Object.assign(),This.obj=Object.assign({c:’c’,this.obj})
- 方法 3:  官方提供的方法
  - 添加：\$set(target,key,value)
  - 删除：\$delete(target,key)

## 常用指令
- v-bind：我们能将 data 中的值绑定到当前属性中，可简写为 :
- v-on：能够绑定实例中配置的事件，可简写为 @
- v-for：列表级别渲染，迭代渲染所有子元素
- v-if/v-else/v-show：控制子元素视图显隐
- v-model：应用于表单，创建与元素的双向绑定
- v-html：将最终值的结果渲染为 html
- v-text：等同于直接在文本处使用 {{xx}}
## 表单输入绑定

1. v-model 指令：
   实现数据的双向绑定,数据双向绑定指的是,input 中显示的数据是 data 中的数据，当数据发生改变时会更新页面和 data 中的数据
2. 语法：

```js
    <input v-model='msg' />  view 视图层
    data(){   model 数据层
        return {
    msg:''
        }
    }
```

3. vue 对常用的单选按钮，多选按钮，下拉框，文本域全部都处理了，只需要使用 v-model
4. v-model
   它会根据控件类型自动选取正确的方法来更新元素
5. 修饰符
   - .lazy :只有当 input 失去焦点时才更新数据
   - .number:把 input 标签中输入的内容转成数字，调用是 parseFloat(Nunber())
   - .trim:去除左右空格

## 计算属性

1. 作用

计算一个数据，把计算结果缓存起来，下次使用时，如果元数据没发生改变，就直接使用缓存；如果元数据发生改变了，计算属性会重新执行，再次把计算结果缓存起来。

2. 语法：

```js
computed:{
  dxstr(){
      console.log('1111111')
      return this.str.split('').reverse().join('')
  }
}
```

3. 调用

   把计算属性的函数名称作为字符串调用即可

## 侦听器 watch

1. 能监听数据的变化，当数据变化时可以触发指定的函数
2. 语法：

```js
    watch:{
        msg:function(n,o){
            //todo
        },
        msg(n,o){
        }
    }
```

## 组件基础

1. 局部组件

以.vue 的文件定义组件

使用流程：

- 定义(导出)
- 导入 import
- 注册 components 属性中注册
- 使用作为标签使用

2. 全局组件

```js
Vue.component("name", {
  render() {},
  template: "",
  data() {
    return {};
  },
  computed: {},
});
```

使用流程：在任意组件中直接调用即可

3. 组成部分
   以"局部组件"为例说明：一般由 3 部分组件

- template:页面结构     必须写的
- script:业务逻辑       可选的
- style:样式            可选的

template 定义的时候可以写在哪?

- 在 template 标签中
- template 属性中
- render(createElement){}函数中，createElement是一个函数，包括react的jsx最后通过babel的转化也和这个类似。

优先级：template 标签  > render(){}  > template 属性的

- 注意：如果使用 template 属性或 render 方法，引入的 vue 不能是 runtime 版本

style 标签：定义当前组件的 css 的样式

```html
<style lang="less" scoped></style>
```

- lang ：使用什么格式写样式,可以是 css，可以是 css 预处理语言(less,sass,stylus)
- scoped:  启动 css 命名空间，style 标签的样式只在当前组件生效
- script 部分:  虚拟 DOM 生成的地方

## props

- 作用：父传子，传递数据
- 语法：
  调用子组件时通过属性形式定义传递的数据
  Son title='标题'  在子级组件中,通过 props 属性接收,不写接收是接收不到的

          ```
           export default{
               props:['title']
              }
          ```

  在子级组件中使用 props 数据：直接当变量使用  title

- 静态 props，动态的 props

  - 静态 props `<Son title='标签'>`
  - 动态的 props `<Son :title='mytitle' />`

- props 类型验证

```js
        props:{
        title:Number，
            user:{
                type:String,
            required:true
            },
        }
```

- props 单向数据流
- 自定义事件:修改 props 的值,

## 数据传递方向：子传父

- 官网提供的:自定义事件
  语法：

```html
<Son v-on:xxx="changeprops"> <PhotoUpload @getImageurl="getImage"/></Son>
```

changeprops '父类自己定义好 Son.vue
this.\$emit('xxx',data)xxx 写自己在父级写的事件名

- 事件传递
  `<Son :changeProps='changeProps'>`后者是父类自己定义的事件 Son.vue

```js
{
    props:['changeProps'],//shi:Function（写在 props 大对象中）
    methods:{
        tt(){
            this.changeProps('新标题')
        }
    }
}
```

## 动态绑定 class 和 style

### 动态绑定 class 类名

```html
<div v-bind:class="box1"></div>
```

动态绑定 class 类名有两种语法

1. 数组语法

`<div :class='["box1",{"box2":c===d},myclass]'></div>`

2. 对象语法
   - :class='{key:value}' key 代表的就是类名,value 控制 key 是否要被添加，如果返回 true 则添加，否则不添加
     `<div :class='{"box1":true,"box2":a>b}'></div>`

### 动态绑定 style

1. 数组语法

`<div :style='[{fontWeight:"500",mystyle}]'></div>`

```js
    :style='[{color:"red"},mystyle]'
    data(){
        return {
            mystyle:{
                 fontWeight:'400'
            }
        }
    }
```

- 对象语法：
   `<div :style='{color:"red",fontSize:"20px"}'></div>`
  注意：

```html
<div :class='{"box1":true}' class="box box2"></div>
<div
  :style='{color:"red"}'
  style='border:1px solid green; margin:"20px"; padding:"5px"'
></div>
```

## 插槽

1. Vue 实现了一套内容分发的API,定义时不知道具体要显示什么，只是留出来显示的位置，在组件调用时写具体内容，能展现在预留的位置上。
2. 定义：使用`<slot>`标签预留位置双标签`<slot name='default'></slot>`
3. 调用组件时，写具体的要呈现的内容，要显示在`<slot>`标签中
4. 匿名插槽
   - 定义时： `<slot name='default'></slot> / <slot></slot>`
   - 调用时不需要写具体的标识，都可以显示在匿名插槽中
5. 具名插槽各个组件的作用域是独立的，以name标识，从而可区分

- 定义时： `<slot name='head'></slot>`
- 调用时：  有些具体内容想放在  name='head'的插槽中，必须有特殊的标识，特殊标识是：
  `<template v-slot:head></template>`

6. 作用域插槽： 实现在作用域下 外部做结构描述勾勒，内部做传参
scope-slot 2.6before 
v-slot(after)
- 作用：让插槽内容能够访问子组件中才有的数据
- 语法：
  - 定义`<slot :count='count'>`把数据传递出去
  - 写插槽内容时，`<template v-slot:default='obj'></template>`obj 是一个对象，对象中保存了定义 slot 传出来的所有数据
  - 使用数据 obj.count

1. 动态插槽名

- 在调用插槽时，可以指定变量名
- 语法：

```html
<template v-slot:[curSlotName]></template>
    data(){
        return {
            curSlotName:'body'
        }
    }
```

8. 缩写：
       v-slot:  替换为字符  #
9. 后备内容(默认值)
   - 定义 slot 时可以有默认值
   - 语法：

```html
<slot>
  //...  这些是后备内容默认显示
</slot>
```

## 动态组件

1. 定义了一个特殊的标签`<component :is='ComponentName' />`，就可以加载这个组件
2. 如果有切换功能，切换时组件是进行销毁和重建的
3. 如果切换时不想让组件销毁重建，可以使用一个标签包裹`<component>`标签
       `<keep-alive></keep-alive>` - include :  规定对那个组件进行缓存 - exclude ：规定那个组件不缓存
4. 使用 keep-alive 后，会有两个专用的生命周期函数

# 异步组件

1. 作用：什么时候使用，什么时候加载
2. 语法：

   1. 简单语法:

   ```js 
   components: {
     Comp1: () => import("./Comp1");
   }
   ```

3. 复杂语法

```js
components: {
  Comp1: () => ({
    //  需要加载的组件  (应该是一个  `Promise`  对象)
    component: import("./MyComponent.vue"), //  异步组件加载时使用的组件
    loading: LoadingComponent, //  加载失败时使用的组件
    error: ErrorComponent, //  展示加载时组件的延时时间。默认值是  200 (毫秒)
    delay: 200, //  如果提供了超时时间且组件加载也超时了，则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: 3000,
  });
}
```

## 处理边界情况

v-node 显示组件名 tag

1. 访问根实例
        语法：\$root  是根实例
2. 访问父级实例
        语法：\$parent  是父级实例
3. 访问子组件实例或子元素

语法：`<div ref='myref'></div>`

获取 DOM： this.\$refs.myref

如果 ref 用在组件上，返回的是组件的实例。如果想访问组件内部某个标签的 DOM，没有 refs 转发，直接在这个标签上定义新的 ref 即可。

## 生命周期函数

- beforeCreate         创建前
- created              初始化完成
- beforeMount          渲染前
- mounted              渲染完成
- beforeUpdate         更新前
- updated              更新完成
- beforeDestroy        销毁前
- destroyed            销毁完成

keep-alive 的专用生命周期函数

- activated        活动状态
- deactivated      非活动状态

## 过渡动画

1. Vue 在插入、更新或者移除  DOM  时，提供多种不同方式的应用过渡效果
2. 可操作方法：
   1. 在  CSS  过渡和动画中自动应用  class
   2. 在过渡钩子函数中使用  JavaScript  直接操作  DOM
3. 在 CSS 过渡和动画中自动应用  class
   1. 添加过渡效果，使用  transition
   2. 添加动画效果，使用  animation
4. 当插入或删除包含在  transition  组件中的元素,会自动添加 6 个类名

```
    <transition>
        <div></div> 
    </transition>
```

- v-enter              添加元素时，元素初始状态
- v-enter-active       添加元素时，过渡效果
- v-enter-to           添加元素时，元素最终状态
- v-leave              离开元素时，元素初始状态
- v-leave-active       离开元素时，过渡效果
- v-leave-to           离开元素时，元素最终状态

5. 修改默认的类名

`<transition name='a'></transition>`所有的类名中的 v 会被 name 的属性值替换

6. 动画效果

```css
@keyframes donghua {
    0%  {
  }
  ....;
}
.dong-enter-active {
      animation: donghua 5s;
}
.dong-leave-active {
      animation: donghua 5s reverse;
}
```

### 自定义过渡的类名

1.自定义过渡的类名

```html
    <transition 
        enter-active-class='haha'
        自定义类名，配合第三方 css 动画库(animate.css)
        enter-active-class:'animatedfadeIn
        leave-active-class:'animatedrotateOut'
    </transition >

.haha{
    transition:all 3s;
}
//配合第三方 css 动画库
```

2. 初始渲染的过渡

`<transiton appear></transition>`

3. 过渡模式

多个元素进行切换，有切换效果，默认多个元素的动画同时执行,过渡模式就是指定动画执行的过程

- 语法：mode= in-out / out-in
- 当有相同标签名的元素切换时，需要通过  key attribute  设置唯一的值来标记以让  Vue  区分它们，否则  Vue  为了效率只会替换相同标签内部的内容

4. 多个组件的过渡

- 使用动态组件  `<component :is='cur' />`
- 可以使用路由

5. 列表过渡

- 使用 transition-group  来实现

```html
<transition-group>
  <div v-for="item in arr"></div>
</transition-group>
```

6. js 过渡

- 可以在  attribute  中声明  JavaScript  钩子

```html
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"
  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
></transition>
```

## provide 和 inject

1. 作用

provide 提供数据,inject(注入)，获取数据

2. 语法：

Parent.vue  可以写成函数记得 return

```
{
    provide:{obj:{}}
}
```

Son.vue 接的时候直接写调用时候记得+this

```
{
    inject:['obj']
}
```

## 自定义指令

1. 自定义指令语法

- 全局指令

```js
        Vue.directive('name',{
            <!-- 放置钩子函数 bind inserted update componentUpdated unbind -->
            <!-- bind:只调用一次，指令第一次绑定到元素时调用 -->
            <!-- inserted：被绑定元素插入父节点时调用 -->
            <!-- update:所在组件的 VNode 更新时调用 -->
            <!-- componentUpdated:指令所在组件的 VNode 及其子 VNode 全部更新后调用 -->
            <!-- unbind:只调用一次，指令与元素解绑时调用 -->
            <!-- 钩子函数参数: el 
            binding（对象）=>{name:指令名称
            value:指令的值
            expression:指令表达式
            arg:指令参数
            modify:修饰符
            }
    vnode(虚拟dom) oldVnode -->
            bind(el, binding){
            }
        })
```

- 局部指令

```js
        directives:{
    "name":{
        bind(el,binding,vnode){}
//el 是元素 bindingvnode 相当于虚拟 domvnode.context 一般这么用
 unbind(el,binding){todo}
 inserted(){}
            }
        }
```

2. 自定义指令的使用用法：

- `<div v-name></div>`或 v-outside='blur'

3. 函数简写

在很多时候，你可能想在  bind  和  update  时触发相同行为，而不关心其它的钩子,就可以不写对象，直接写一个函数，（功能一样）Vue.directive('name',function(el,binding){})

## 过滤器

- 语法：

1. 全局过滤器
           Vue.filter('name',function(value,...rest){})
2. 局部过滤器
   filters:{'name':function(value){}}
3. 使用：模板语法加一个管道封号|name（true）

## axios 网络请求库(ajax)

- 完整语法

```js
    {
  // `url`  是用于请求的服务器  URL
  url: '/user',

// `method`  是创建请求时使用的方法
  method: 'get', //  默认是  get
  // `baseURL`  将自动加在  `url`  前面，除非  `url`  是一个绝对  URL。
  //  它可以通过设置一个  `baseURL`  便于为  axios  实例的方法传递相对  URL
  baseURL: 'https://some-domain.com/api/',
  // `transformRequest`  允许在向服务器发送前，修改请求数据
  //  只能用在  'PUT', 'POST'  和  'PATCH'  这几个请求方法
  //  后面数组中的函数必须返回一个字符串，或  ArrayBuffer，或  Stream
  transformRequest: [function (data) {
    //  对  data  进行任意转换处理
    return data;
  }],
  // `transformResponse`  在传递给  then/catch  前，允许修改响应数据
  transformResponse: [function (data) {
    //  对  data  进行任意转换处理
    return data;
  }],
  // `headers`  是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  // `params`  是即将与请求一起发送的  URL  参数
  //  必须是一个无格式对象(plain object)或  URLSearchParams  对象
  params: {
    ID: 12345
  },
  // `paramsSerializer`  是一个负责  `params`  序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },
  // `data`  是作为请求主体被发送的数据
  //  只适用于这些请求方法  'PUT', 'POST',  和  'PATCH'
  //  在没有设置  `transformRequest`  时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // -  浏览器专属：FormData, File, Blob
  // - Node  专属： Stream
  data: {
    firstName: 'Fred'
  },
  // `timeout`  指定请求超时的毫秒数(0  表示无超时时间)
  //  如果请求话费了超过  `timeout`  的时间，请求将被中断
  timeout: 1000,
  // `withCredentials`  表示跨域请求时是否需要使用凭证
  withCredentials: false, //  默认的
  // `adapter`  允许自定义处理请求，以使测试更轻松
  //  返回一个  promise  并应用一个有效的响应  (查阅  [response docs](#response-api)).
  adapter: function (config) {
    /_ ... _/
  },
  // `auth`  表示应该使用  HTTP  基础验证，并提供凭据
  //  这将设置一个  `Authorization`  头，覆写掉现有的任意使用  `headers`  设置的自定义  `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },
  // `responseType`  表示服务器响应的数据类型，可以是  'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', //  默认的
  // `xsrfCookieName`  是用作  xsrf token  的值的 cookie 的名称
  xsrfCookieName: 'XSRF-TOKEN', // default
  // `xsrfHeaderName`  是承载  xsrf token  的值的  HTTP  头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', //  默认的
  // `onUploadProgress`  允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    //  对原生进度事件的处理
  },
  // `onDownloadProgress`  允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    //  对原生进度事件的处理
  },
  // `maxContentLength`  定义允许的响应内容的最大尺寸
  maxContentLength: 2000,
  // `validateStatus`  定义对于给定的 HTTP  响应状态码是  resolve  或  reject  promise 。如果  `validateStatus`  返回  `true` (或者设置为  `null`  或  `undefined`)，promise  将被  resolve;  否则，promise  将被  rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; //  默认的
  },
  // `maxRedirects`  定义在  node.js  中  follow  的最大重定向数目
  //  如果设置为 0，将不会  follow  任何重定向
  maxRedirects: 5, //  默认的
  // `httpAgent`  和  `httpsAgent`  分别在  node.js  中用于定义在执行  http  和  https  时使用的自定义代理。允许像这样配置选项：
  // `keepAlive`  默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
  // 'proxy'  定义代理服务器的主机名称和端口
  // `auth`  表示  HTTP  基础验证应当用于连接代理，并提供凭据
  //  这将会设置一个  `Proxy-Authorization`  头，覆写掉已有的通过使用  `header`  设置的自定义  `Proxy-Authorization`  头。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: : {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },
  // `cancelToken`  指定用于取消请求的  cancel token
  // （查看后面的  Cancellation  这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
}
```

- 常用数据

  - url:请求的地址
  - method:'get|post'
  - params:{}   get 请求的数据
  - data:{}     post 请求的数据
  - headers:{}   请求头
  - transformResponse:  响应拦截
  - transformRequest:请求拦截
  - cancelToken ：   取消请求

- 请求写法
  - 完整写法：

```
axios(url,{
    method:'get',
    params:{},
    headers:{}
})
```

    - 简写形式：

get 请求简写 axios.get(url,{parmas:{}})对象形式
post 请求简写 axios.post(url,data)

- 携带参数问题

get 请求用对象形式的格式携带数据,post 请用 key=value&key=value 携带数据

- 响应结果

```js
    {
    config:{},
        data:{},        //  我们需要的数据在这个属性中
        headers:{},
        request:{},
        status: 200
        statusText: "OK"
    }
```

- 创建实例

```js
let instance = axios.create([config]);
instance.get(url, { params: {} });
instance.post(url, data, {});
```

- 直接定义 axios 的全局配置

`axios.defaults.baseUrl = '';`

- 拦截器

  1.  请求拦截

```js
axios.interceptors.request.use(
  function(config) {
    //  在发送请求之前做些什么
    return config;
  },
  function(error) {
    //  对请求错误做些什么
    return Promise.reject(error);
  }
);
```

2.  响应拦截

```js
axios.interceptors.response.use(
  function(response) {
    //  对响应数据做点什么
    return response;
  },
  function(error) {
    //  对响应错误做点什么
    return Promise.reject(error);
  }
);
```

- 并发请求

axios.all()  就是 promise 的 all()方法，

- 取消请求

```js
1. CancelToken.source  工厂方法创建  cancel token
        var CancelToken = axios.CancelToken;
        var source = CancelToken.source();
        axios.get('/user/12345', {
            <!-- 加上取消请求的标识 -->
            cancelToken: source.token
        })
        <!-- 取消请求方法 -->
        source.cancel('Operation canceled by the user.');
    2.  可以通过传递一个  executor  函数到  CancelToken  的构造函数来创建  cancel token
        var CancelToken = axios.CancelToken;
        var cancel;

axios.get('/user/12345', {
        cancelToken: new CancelToken(function executor(c) {
            // executor  函数接收一个  cancel  函数作为参数
            cancel = c;
        })
        });
        //  取消请求
        cancel();
```

## 路由

- 对比 vue-router  和  react-router
  1. vue-router  通过配置添加路由的;react-router 通过标签加载路由
  2. vue-router  展示路由的内容时需要使用 ``` <router-view> ``` 标签;react-router 不需要
  3. vue-router  的配置更集中一些，全部在 new VueRouter()时配置;react-router 更多是在标签上配置

  4. vue-router  有更高阶的用法，路由守卫; react-router 是没有。

- this.\$route 有哪些属性：

  - name：路由名称
  - meta：路由元信息
  - path:  和定义路由时的 path 对应
  - hash：路由的哈希值
  - query：路由上问号携带的数据
  - params:  动态路由的数据
  - fullPath：地址栏中完整的路由路径
  - matched：是一个数组!!!!  包含当前路由以及嵌套的父级及祖先级路由信息

- 导航：有两种写法，和定义时有关

  - 定义子级路由时，子级路由的 path 属性值上最前面不加'/',访问子级路由这样写： /users/profiles \*定义子级路由时，子级路由的 path 属性值上最前面加'/',访问子级路由这样写：/profiles
            `<router-link to='/users/profiles'></router-link>`

- 编程式导航

```js
    this.$router.push('/users')
    this.$router.replace('/users')
    this.\$router.back()     返回上一层路由
```

- 命名路由

在定义路由时添加 name 属性,路由跳转时可以通过路由的名称跳转
编程式导航: \$router.push({name:"details",params:{newsid:12445}})

- 命名视图

  1.  在一个路由下，同时展示多个组件的内容
      2.  定义路由语法：

```js
{
    path:'/',
    components:{
        default:()=>import('../views/head.vue'),
        body:()=>import('../views/body.vue')
    }
}
```

- 在页面中就需要定义多个 router-view,而且要定义 name

```js
        <router-view ></router-view>
        <router-view name='body'></router-view>
```

- 重定向和别名
  - 重定向:{ path: '/a', redirect: '/b' }
  - 别名

```
        {
            path:'/hello',
            alias:'/haha',
            component:Hello
        }
```

### -路由组件传参

- 使用  props  将组件和路由解耦
- 语法：

```js
        {
            path:'/details/:id',
            component:Details,
            props:true
        }
         //对于包含命名视图的路由，你必须分别为每个命名视图添加  `props`  选项：
        {
            path: '/user/:id',
            components: { default: User, sidebar: Sidebar },
            props: { default: true, sidebar: false }
        }
```

- 调用动态路由参数 props:['id'],直接访问 id 即可

- 切换路由模式

  - mode: 'history',  // history 模式
  - mode: 'hash' , // hash 模式默认是 hash

### 导航高亮效果

- Router-link 默认携带 class：router-link-active 和 router-link-exact-active
- 不想使用默认类名，可以进行修改

  1.  单独修改某一个路由的高亮类名
              `<router-link activeClass='active' exactActiveClass></router-link>`

  2.  全局修改
               全局配置来修改：linkActiveClass 和 linkExactActiveClass
           优先级：单个>全局的

- router-link

```html
<router-link      to=''      //实现页面跳转的
     activeClass='active'//改变类名      exactActiveClass='eactive',
     tag='span', //规定 router-link 被解析成什么标签，默认是 a 标签
     replace=true,  //启动替换功能把原来那层替换了原来失效了
     exact          //精准匹配 />
```

### 导航守卫

- 全局守卫：
  - 全局前置守卫 beforeEach()
  - 全局解析守卫 beforeResolve()
  - 全局后置守卫 afterEach()
- 路由独享守卫
  - beforeEnter()
- 组件级守卫
  - 进入页面前守卫 beforeRouteEnter()
  - 页面更新前守卫 beforeRouteUpdate()
  - 离开页面前守卫 beforeRouteLeave()

```
        router.beforeEach((to,from,next)=>{
            //to 到哪个路由去
            //from 从哪个路由来的
            next()
            <!-- 跳转到指定的路由 -->
            next('/login');
            next({name:'login'})
        })
         只要有路由跳转，就会触发它
    2.  全局解析守卫
        router.beforeResolve((to,from,next)=>{
            //to 到哪个路由去
            //from 从哪个路由来的
            next()
        })
    3.  全局后置钩子
         当页面跳转完成后触发这个守卫
        router.afterEach((to,from)=>{
        })
    4.  路由独享的守卫
         你可以在路由配置上直接定义  beforeEnter  守卫,只有进入这个路由时才触发的守卫函数
        {
            path:'/',
            component:Home,
            beforeEnter((to,from,next)=>{
 next()
            })
        }
    5. beforeRouteEnter
         在渲染该组件的对应路由被  confirm  前调用,这时组件还没有渲染，而且访问不到组件的实例 this
        beforeRouteEnter (to, from, next) {
            next(vm => {
 //  通过  `vm`  访问组件实例
            })
        }
    6. beforeRouteUpdate
         在当前路由改变，但是该组件被复用时调用
    7. beforeRouteLeave
         导航离开该组件的对应路由时调用
```

15.  路由元信息

- 定义路由的时候可以配置  meta  字段,在路由访问过程中可以携带这个 meta 字段，供守卫函数使用

### 过渡动效

1. 使用

```
<transition>
    <router-view />
</transition>
```

2. 定义 css 即可

### 滚动行为

1. 保持原先的滚动位置

```
    scrollBehavior (to, from, savedPosition) {
        return savedPosition
    }
```

2. 页面滚到顶部

```
    scrollBehavior (to, from, savedPosition) {
        return {y:0}
    }
```

### 路由懒加载

1. 定义路由时，要加载的组件是异步加载来的
2. 优化：
   只需要使用命名 chunk，一个特殊的注释语法来提供 chunkname
   constFoo=()=>import(/_webpackChunkName:"group-foo"_/'./Foo.vue')

## vuex 介绍

Vuex  是一个专为  Vue.js  应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化

### 回顾常用数据传递方式

- props  :  父传子
- 自定义事件：  子传父
- provide ， inject:  适合两个组件层级比较多时
- \$root :  能直接获取到跟实例对象(new Vue()创建的)
- \$parent :  直接获取当前组件的父级组件
- ref :  获取子级组件或 DOM 元素
- EventBus :  使用 new Vue 传递数据

### 安装

1. 创建项目时安装
2. 手动安装
   1. 下载安装:npm install vuex -S
   2. 挂载到 Vue 上：import Vuex from 'vuex' Vue.use(Vuex)
   3. 让 store 生效
              new Vue({
                  store:mystore
              })

### 使用

1.  创建仓库

```js
let store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules,
});
```

### state

- 仓库中存放的公共状态,类似于 data

```js
state: {
  count: 1;
}
```

3. 在组件中使用 state

import { mapState, mapMutations,mapActions} from 'vuex'

1.  直接访问：this.\$store.state
2.  mapState  辅助函数,要放在计算属性中

```js
// 数组语法:mapState(['count']) ,不能修改 state 中的名称
computed:{
  ...mapState(['count'])
},
//对象语法:
 mapState({
   count,
   mycont:'count',
   count2:state=>state.count,
   sideTheme: (state) => state.settings.sideTheme,
    sidebar: (state) => state.app.sidebar,
    device: (state) => state.app.device,
   getCount(state){
       return state.count + this.ds
   }
})
```

### mutation

1. 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation,Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型  (type)和一个回调函数  (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受  state  作为第一个参数,第二个参数就是用户调用时传递进来的数据
2. 定义

```js
new Vuex.Store({
  mutations: {
    setcount(state, payload) {
      state.count += payload;
    },
  },
});
```

3. 使用
      commit 作用就是触发 mapMutations

- 直接调用：this.\$store.commit('setcount',payload)

- mapMutations  辅助函数
  - 放在 methods 属性中
  - 数组语法
  ```js
  import {mapMutations} from 'vuex'
  methods:{
    ...mapMutations(['add','del'])
  }
  ```
  - 对象语法
  - 让 action 触发 mutation 执行

### Action

- Action 提交的是  mutation，而不是直接变更状态。Action 可以包含任意异步操作
- 定义

```js
new Vuex.Store({
  actions: {
    increment(context, payload) {
      context.commit("setcount", payload);
    },
  },
});
```

- 调用
  - 直接调用：store.dispatch('increment',payload)
  - mapActions 辅助函数放在 methods 中

```js
import { mapstate, mapMutations,mapActions} from 'vuex'
  methods: {
   ...mapActions(["setTeamStyle"]),
}
```

### getters

- 就是 vuex 中的计算属性，包装作用，不会修改原数据，store 变化，getters 也变
- 定义

```js
new Vuex.Store({
  getters: {
    fn() {
      return xxx;
    },
  },
});
```

- 调用
  - 直接调用：this.\$store.getters.fn
  - mapGetters  辅助函数,放在 computed 中

```js
import { mapGetters, mapState } from "vuex";
computed: {
  ...mapGetters(["sidebarRouters", "sidebar"]),
}
<h3>{{tostr}}</h3>
```

### module

- Vuex  允许我们将  store  分割成模块（module）。每个模块拥有自己的  state、mutation、action、getter.
- 定义

```js
new Vuex.Store({
  actions,
  modules: {
    moduleName: {
      namespaced: true,
      state,
      mutations,
      actions,
      getters,
    },
  },
});
```

### namespaced

- namespaced 是命名空间，当 module 中定义 namespaced 为 true，这时是开启命名空间，开启后 mutations,actions,getters 都会变成局部的 module 中的方法如果没有开启命名空间，mutations,actions,getters 相对于直接定义在最外层。
- 调用
  - 开启命名空间时,调用 mutations,actions,getters 时，就需要带着命名空间。使用辅助函数所有的辅助函数都有一个可选的第一个参数，这个参数就是命名空间
  - 没有开启命名空间时除了 state，其他的全部是全局的。在命名空间内访问全局 state,getters，命名空间内的 getters：在第三和第四个参数位置放 rootState 和 rootGetters 即可，在 action 中访问：通过 context 来获取  rootState 和  rootGetters
  - 在命名空间内访问全局  mutations， actions 若需要在全局命名空间内分发 action 或提交  mutation，将  { root: true }  作为第三参数传给  dispatch  或  commit  即可
  - 让命名空间下的某个 action 变成全局的你可添加  root: true，并将这个 action 的定义放在函数 handler 中

### 严格模式

- 当不开启严格模式时，state 可以不是 mutation 修改的
- 开启严格模式时，state 必须由 mutation 修改，否则会报错

#### 表单处理

- v-model 双向绑定，如果值是 store 中的数据，在严格模式下会报错
  - 第一种处理方案：把  v-model  拆成  :value+@input  实现
  - 第二种解决方法：在计算属性中使用 getter 和 setter 功能

### 插件

Vuex 的 store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子。

#### 表单组件之间的双向绑定

.sync 自定义事件
在父类写：`<UeditorWrap:desc.sync="form.desc"/>`
在子类写

```html
<!-- v-model不适用于组件双向绑定  -->
<vue-ueditor-wrap :config="myConfig"      :value='desc'     @input='changeDesc'
props: ["desc"], //Update 是必须写的 this.\$emit('update:desc',value)
```


无状态组件：纯ui组件,直接渲染
有状态组件：比如需要ajax得到数据的组件