# vue-router


## Router 发展历史

路由的概念，是伴随 SPA 出现的。在此之前，页面的跳转是通过服务器端进⾏控制的；
* 传统的页面的跳转，是通过前端向后台发送请求 
* 后台通过模板引擎的渲染，将⼀个新的 html 界面 
* ⽐如页面跳转时：
  - from 表单的提交； 
  - a 标签的默认属性； 
  - js 调⽤ location.href，给其赋值； 
  - H5: history 的 go / forward / back -- // history.push / replace ?
* 在 SPA（即只有⼀个 html ） 的出现后，前端可以⾃由控制组件的渲染，来模拟页面的跳转。
  - 页面是怎么发⽣跳转，向服务端请求的呢？-- 浏览器劫持
  - SPA的⽅法，需要拦截请求；
    - hash 路由，当我的hash
    - history 的 go / forward / back 的时候，我的浏览器的地址，是发⽣了改变的，
:::tip 总结
后端路由是根据 url 访问相关的 controller 进⾏数据资源和模板引擎的拼接，返回前端；

前端路由是通过 js 根据 url 返回对应的组件加载。 
所以，前端的路由包含两个部分： 
- url 的处理
- 组件加载
:::

### 路由的分类

* history 路由 
* hash 路由 
* memory 路由 * 

### hash 路由
window.location.hash = "xxx" 

hash 的出现,他有以下⼏种特性：
1. url 中的 hash 值只是客⼾端/浏览器端的⼀种状态，向服务器发送请求的时候，hash 部分的值不 会携带。 
2. hash 值的更改，并不会导致页面的刷新
3. hash 值的更改，会在浏览器的访问历史中增加记录，所以我们可以通过浏览器的回退、前进按钮 控制 hash 的切换 
4. hash 值的更改，会触发 hashchange 事件（window.onhashchange()）

⽐如https://www.baidu.com/#/hash1, 改变#后面的内容并不会导致页面刷新，⽽且会触发 hashchange 事件。 

我们同样有两种⽅式来控制 hash 的变化： 

1. 通过 a 标签，设置 href 属性，当⽤⼾点击 a 标签的时候，Url 中的 hash 就会改变为 href 属性 值。
2. 通过 js location.hash = '#hash-change'
### history 路由

hash 虽然能解决问题，但是带有#很不美观。 

历史的⻋轮⽆情撵过 hash，到了 html5 时代，推出了 history api。

history./\(go|back|repalce|push|forward)/
```js
window.history.back(); // 后退 
window.history.forward(); // 前进 
window.history.go(-3); // 后退三个页面 
window.history.pushState(null, null, path); 
window.history.replaceState(null, null, path);
```

其中最主要的两个 api 是 pushState和replaceState ;

这两个 api 都可以在不刷新页面的情况下，操作浏览器历史记录。 

不同的是，pushState 会增加历史记录，replaceState 会直接替换当前历史记录

History Api 有以下⼏种特性：
1. history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页 面渲染；
2. 可以使⽤ popstate 事件来监听 url 的变化
3. 只有⽤⼾点击浏览器倒退按钮和前进按钮，或者使⽤ JavaScript 调⽤ back、forward、go ⽅法时才会触发 popstate。

他们的参数是⼀样的，三个参数分别是：
1. state:⼀个与指定⽹址相关的状态对象，popstate 事件触发时，该对象会传⼊回调函数。如果不需要这个对象，此处可以填 null。 
2. title：新页面的标题，但是所有浏览器⽬前都忽略这个值，因此这⾥可以填 null。 
3. url：新的⽹址，必须与当前页面处在同⼀个域。浏览器的地址栏将显⽰这个⽹址。
###  hash 路由 和 history 路由，有什么区别？

* hash 路由 ⼀般会携带 ⼀个 # 号，不够美观； history 路由不存在这个问题；
* 默认 hash 路由是不会像浏览器发出请求的，主要是⼀般⽤于锚点；history 中 go / back / forward 以及浏览器的前进、后退按钮⼀般都会像服务端发起请求；-- history 的所有 url 内容，服务端都可以获取到 
* 基于此，hash 模式，是不⽀持SSR的，但是 history 模式可以做 SSR 
* history 在部署的时候，如 nginx， 需要只渲染⾸页，让⾸页根据路径重新跳转。 
* 要注意：如何部署
```nginx
# 单个的服务器部署
location / {
 try_files uri $uri /xxx/main/index.html
}
# 存在代理的情况
location / {
 rewrite ^ /file/index.html break; # 这⾥代表的是xxx.cdn 的资源路径
  proxy_pass https://www.xxx.cdn.com;
}
```
* location.hash 的值实际就是 URL中#后面的东西。
* history 实际采用了HTML5中提供的API来实现，主要有history.pushState()和history.replaceState() 通过 window.addEventListener 监听popstate 变化
* hash 通过 hashchange 监听变化，

### 手写hash路由

- hash 值的更改，会触发 hashchange 事件
- window.addEventLisenter('hashchange', () => {})
#3、history路由
```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hash 路由</title>
</head>
<body>
    <div id="container" >
        <button onclick="window.location.hash = '#'">首页</button>
        <button onclick="window.location.hash = '#about'">关于我们</button>
        <button onclick="window.location.hash = '#user'">用户列表</button>
    </div>

    <div id="context"></div>
    
</body>
<script>

    class BaseRouter {
        constructor() {
            this.routes = {};
            this.refresh = this.refresh.bind(this);
            window.addEventListener('load', this.refresh);
            window.addEventListener('hashchange', this.refresh);
        }

        route(path, callback) {
            this.routes[path] = callback || function() {}
        }

        refresh() {
            const path = `/${window.location.hash.slice(1) || ''}`;
            this.routes[path]();
        }      
    }

    const Route = new BaseRouter();

    Route.route('/about', () => changeText("关于我们页面"));
    Route.route('/user', () => changeText("用户列表页"));
    Route.route('/', () => changeText("首页"));

    function changeText(arg) {
        document.getElementById('context').innerHTML = arg;
    }

</script>
</html>
```
### 手写history路由
```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>H5 路由</title>
</head>
<body>
    <div id="container">
        <a href="./" >首页</a>
        <a href="./about">关于我们</a>
        <a href="./user">用户列表</a>
    </div>
    <div id="context"></div>
    <script>
        class BaseRouter {
            constructor() {
                this.routes = {};
                this._bindPopstate();
                this.init();
            }

            init(path) {
                window.history.replaceState({path}, null, path);
                const cb = this.routes[path];
                if(cb) {
                    cb();
                }
            }

            route(path, callback) {
                this.routes[path] = callback || function() {}
            }

            go(path) {
                window.history.pushState({path}, null, path);
                const cb = this.routes[path];
                if(cb) {
                    cb();
                }
            }

            _bindPopstate() {
                window.addEventListener('popstate', e => {
                    const path = e.state && e.state.path;
                    this.routes[path] && this.routes[path]();
                })
            }
        }

        const Route = new BaseRouter();

    Route.route('./about', () => changeText("关于我们页面"));
    Route.route('./user', () => changeText("用户列表页"));
    Route.route('./', () => changeText("首页"));

    function changeText(arg) {
        document.getElementById('context').innerHTML = arg;
    }

    container.addEventListener('click' , e => {
        if(e.target.tagName === 'A') {
            e.preventDefault();
            Route.go(e.target.getAttribute('href'))
        }
    })
    </script>
</body>
</html>
```
### history.go / back ⼀定会刷新吗？
要根据指定页面和当前界面的构建关系，动态决定；
### pushState 会触发 popState 事件吗？

popState 是监听其他的操作。 
pushState/replaceState 都不会触发 popState 事件，需要触发页面的重新渲染。 
popState 什么时候触发？ 
  - 点击浏览器的前进、后退按钮 
  - back / forward / go

## vue导航守卫

### 导航解析流程

- 导航被触发。
- 在失活的组件里调用离开守卫。
- 调用全局的beforeEach守卫。
- 在重用的组件里调用beforeRouteUpdate 守卫(2.2+)。
- 在路由配置里调用beforeEnter。
- 解析异步路由组件。
- 在被激活的组件里调用beforeRouteEnter。
- 调用全局的 beforeResolve守卫(2.5+)。
- 导航被确认。
- 调用全局的afterEach 钩子。
- 触发DOM更新。
- 用创建好的实例调用beforeRouteEnter守卫中传给next的回调函数。

### 导航守卫的执行顺序

1. [组件] 前一个组件的beforeRouteLeave
2. [全局] router.beforeEach
3. [路由参数变化] beforeRouteUpdate
4. [配置文件里] beforeEnter
5. [组件] beforeRouteEnter
6. [全局] afterEach

### next必须调用

* next():进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是confirmed(确认的)。
* next(false):中断当前的导航。如果浏览器的URL 改变了(可能是用户手动或者浏览器后退按钮)，那么URL地址会重置到from路由对应的地址。
* next('/')或者next( path: '/' }):跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向next传递任意位置对象，且允许设置诸如replace: true、name: home'之类的选项以及任何用在router-link 的to prop或 router.push 中的选项。
* next(error):(2.4.0+)如果传入next的参数是一个Error实例，则导航会被终止且该错误会被传递给router.onError()注册过的回调。

#### vue router 从列表 浏览了一段时间 , 点击进了一个详情页, 然后返回的时候, 我期望回到列表页还是停留在原来的浏览位置, 可以怎么做

* keep-alive
* localStorage/sessionStorage + scrollTop +  scrollTo
* scrollBehavior
#### scollBehavior生效的条件

1. 浏览器支持的History api
2. 点击浏览器的返回/前进按钮
3. router-link是不可以触发的

