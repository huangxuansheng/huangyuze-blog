# qiankun

# 一、介绍

qiankun 是一个基于 single-spa 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。

## 1.1 什么是微前端

微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。

- 技术栈无关
  主框架不限制接入应用的技术栈，微应用具备完全自主权

- 独立开发、独立部署
  微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新

- 增量升级
  在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略

- 独立运行时
  每个微应用之间状态隔离，运行时状态不共享

## 1.2 qiankun 的核心设计理念

🥄 简单

由于主应用微应用都能做到技术栈无关，qiankun 对于用户而言只是一个类似 jQuery 的库，你需要调用几个 qiankun 的 API 即可完成应用的微前端改造。同时由于 qiankun 的 HTML entry 及沙箱的设计，使得微应用的接入像使用 iframe 一样简单。

🍡 解耦/技术栈无关

微前端的核心目标是将巨石应用拆解成若干可以自治的松耦合微应用，而 qiankun 的诸多设计均是秉持这一原则，如 HTML entry、沙箱、应用间通信等。这样才能确保微应用真正具备 独立开发、独立运行 的能力。

### 1.3 qiankun的优点/特点

#### 1.HTML Entry

qiankun 通过 HTML Entry 的方式来解决 JS Entry 带来的问题，让你接入微应用像使用iframe 一样简单。

#### 2.样式隔离

qiankun 实现了两种样式隔离

严格的样式隔离模式，为每个微应用的容器包裹上一个 shadow dom 节点，从而确保微应用的样式不会对全局造成影响

实验性的方式，通过动态改写 css 选择器来实现，可以理解为 css scoped 的方式

#### 3.运行时沙箱

qiankun 的运行时沙箱分为 JS 沙箱和 样式沙箱

JS 沙箱为每个微应用生成单独的 window proxy 对象，配合 HTML Entry 提供的 JS 脚本执行器 (execScripts) 来实现 JS 隔离；

样式沙箱 通过重写 DOM 操作方法，来劫持动态样式和 JS 脚本的添加，让样式和脚本添加到正确的地方，即主应用的插入到主应用模版内，微应用的插入到微应用模版，并且为劫持的动态样式做了 scoped css 的处理，为劫持的脚本做了 JS 隔离的处理，更加具体的内容可继续往下阅读或者直接阅读 qiankun 2.x 运行时沙箱 源码分析

#### 4.资源预加载

qiankun 实现预加载的思路有两种，一种是当主应用执行 start 方法启动 qiankun 以后立即去预加载微应用的静态资源，另一种是在第一个微应用挂载以后预加载其它微应用的静态资源，这个是利用 single-spa 提供的 single-spa:first-mount 事件来实现的

##### 5.应用间通信

qiankun 通过发布订阅模式来实现应用间通信，状态由框架来统一维护，每个应用在初始化时由框架生成一套通信方法，应用通过这些方法来更改全局状态和注册回调函数，全局状态发生改变时触发各个应用注册的回调函数执行，将新旧状态传递到所有应用

### 1.4 为什么不是 iframe

iframe 最大的特性就是提供了浏览器原生的硬隔离方案，不论是样式隔离、js 隔离这类问题统统都能被完美解决。但他的最大问题也在于他的隔离性无法被突破，导致应用间上下文无法被共享，随之带来的开发体验、产品体验的问题。

1. url 不同步。浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用。
2. UI 不同步，DOM 结构不共享。想象一下屏幕右下角 1/4 的 iframe 里来一个带遮罩层的弹框，同时我们要求这个弹框要浏览器居中显示，还要浏览器 resize 时自动居中…
3. 全局上下文完全隔离，内存变量不共享。iframe 内外系统的通信、数据同步等需求，主应用的 cookie 要透传到根域名都不同的子应用中实现免登效果。
4. 慢。每次子应用进入都是一次浏览器上下文重建、资源重新加载的过程。

## 二、快速上手

### 2.1 创建主应用

##### 1.安装 qiankun

```
$ yarn add qiankun # 或者 npm i qiankun -S

```

##### 2.在主应用中注册微应用

```
import { registerMicroApps, start } from 'qiankun'
// 根据路由配置
registerMicroApps([
    {
        name: 'vue-app', // 必须与微应用注册名字相同
        entry: 'http://localhost:8081', // 入口路径，开发时为微应用所启本地服务，上线时为微应用线上路径
        container: '#vue-app-container', // 微应用挂载的节点
        activeRule: '/micro-vue', // 当访问路由为 /micro-vue 时加载微应用
        props: {
            msg: "我是来自主应用的值-vue"  // 主应用向微应用传递参数
        }
    },
    {
        name: 'react-app',
        entry: 'http://localhost:8082',
        container: '#react-app-container',
        activeRule: '/micro-react',
        props: {
            msg: "我是来自主应用的值-react"
        }
    }
])
start()

```

当微应用信息注册完之后，一旦浏览器的 url 发生变化，便会自动触发 qiankun 的匹配逻辑，所有 activeRule 规则匹配上的微应用就会被插入到指定的 container 中，同时依次调用微应用暴露出的生命周期钩子。

如果微应用不是直接跟路由关联的时候，你也可以选择手动加载微应用的方式：

```
import { loadMicroApp } from 'qiankun';

loadMicroApp({
  name: 'app',
  entry: '//localhost:7100',
  container: '#yourContainer',
});

```

## 2.2 微应用

微应用分为有 webpack 构建和无 webpack 构建项目，有 webpack 的微应用（主要是指 Vue、React、Angular）需要做的事情有：

- 新增 public-path.js 文件，用于修改运行时的 publicPath。

> 注意：运行时的 publicPath 和构建时的 publicPath 是不同的，两者不能等价替代。

- 微应用建议使用 history 模式的路由，需要设置路由 base，值和它的 activeRule 是一样的。
- 在入口文件最顶部引入 public-path.js，修改并导出三个生命周期函数。
- 修改 webpack 打包，允许开发环境跨域和 umd 打包。

主要的修改就是以上四个，可能会根据项目的不同情况而改变。例如，你的项目是 index.html 和其他的所有文件分开部署的，说明你们已经将构建时的 publicPath 设置为了完整路径，则不用修改运行时的 publicPath （第一步操作可省）。

无 webpack 构建的微应用直接将 lifecycles 挂载到 window 上即可。

### React 微应用

1.在 src 目录新增 public-path.js：

```react
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

```

2.设置 history 模式路由的 base：

```
<BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>

```

3.入口文件 index.js 修改，为了避免根 id #root 与其他的 DOM 冲突，需要限制查找范围。

```
import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function render(props) {
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

// 定义全局状态，并返回两个通信方法
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

// 监听全局状态的更改，当状态发生改变时执行回调函数
onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

// 设置新的全局状态，只能设置一级属性，微应用只能修改已存在的一级属性
setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

// 设置默认进入的子应用，当主应用启动以后默认进入指定微应用
setDefaultMountApp('/react16');

// 启动应用
start();

// 当第一个微应用挂载以后，执行回调函数，在这里可以做一些特殊的事情，比如开启一监控或者买点脚本
runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});

```

4.修改 webpack 配置

安装插件 `@rescripts/cli`，当然也可以选择其他的插件，例如 `react-app-rewired`。

根目录新增 `.rescriptsrc.js`：

```
const { name } = require('./package');

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    config.output.jsonpFunction = `webpackJsonp_${name}`; 
    config.output.globalObject = 'window';

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*', // 允许开发环境跨域
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};

```

修改 `package.json`：

```
-   "start": "react-scripts start",
+   "start": "rescripts start",
-   "build": "react-scripts build",
+   "build": "rescripts build",
-   "test": "react-scripts test",
+   "test": "rescripts test",
-   "eject": "react-scripts eject"

```

#### Vue 微应用

1.在 src 目录新增 `public-path.js`

```
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

```

2.入口文件 main.js 修改，为了避免根 id #app 与其他的 DOM 冲突，需要限制查找范围。

```
import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  storeTest(props);
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}


/**
 * 从 props 中获取通信方法，监听全局状态的更改和设置全局状态，只能操作一级属性
 * @param {*} props 
 */
function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true,
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

```

3.打包配置修改（vue.config.js）：

```
const { name } = require('./package');
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*', // 允许开发环境跨域
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    },
  },
};

```

### 2.3 jQuery 微应用

这是一个使用了 jQuery 的项目，在 `examples/purehtml` 目录下，展示了如何接入使用 jQuery 开发的应用

#### package.json

为了达到演示效果，使用 `http-server` 在起了一个本地服务器，并且支持跨域

```
{
  ...
  "scripts": {
    "start": "cross-env PORT=7104 http-server . --cors",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
}

```

#### entry.js

```
// 渲染函数
const render = $ => {
  $('#purehtml-container').html('Hello, render with jQuery');
  return Promise.resolve();
};

// 在全局对象上导出三个生命周期函数
(global => {
  global['purehtml'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('purehtml mount');
      // 调用渲染函数
      return render($);
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);

```

#### index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Purehtml Example</title>
  <script src="//cdn.bootcss.com/jquery/3.4.1/jquery.min.js">
  </script>
</head>
<body>
  <div style="display: flex; justify-content: center; align-items: center; height: 200px;">
    Purehtml Example
  </div>
  <div id="purehtml-container" style="text-align:center"></div>
  <!-- 引入 entry.js，相当于 vue 项目的 publicPath 配置 -->
  <script src="//localhost:7104/entry.js" entry></script>
</body>
</html>

```

### 2.4 主应用与微应用通信

initGlobalState(state) 定义全局状态，并返回通信方法，建议在主应用使用，微应用通过 props 获取通信方法。

- onGlobalStateChange: (callback: OnGlobalStateChangeCallback, fireImmediately?: boolean) => void， 在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback
- setGlobalState: (state: Record<string, any>) => boolean， 按一级属性设置全局状态，微应用中只能修改已存在的一级属性
- offGlobalStateChange: () => boolean，移除当前应用的状态监听，微应用 umount 时会默认调用

主应用：


```
import { initGlobalState, MicroAppStateActions } from 'qiankun';

// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState(state);
actions.offGlobalStateChange();

```

微应用：

```
// 从生命周期 mount 中获取通信方法，使用方式和 master 一致
export function mount(props) {
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
    // store.count = res.count
  });
  // 修改全局状态
  props.setGlobalState(state);
}

```

2.5 UmiJS 配置qiankun
UmiJS有自己独立支持qiankun的插件@umijs/plugin-qiankun

yarn add @umijs/plugin-qiankun -D
配置 qiankun 开启。
主应用配置
第一步：注册子应用
子应用注册有两种方式，二选一即可

a. 插件构建期配置子应用


```
export default {
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:7001', // html entry
        },
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:7002', // html entry
        },
      ],
    },
  },
};

```

b. 运行时动态配置子应用（src/app.ts 里开启）

```
// 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
export const qiankun = fetch('/config').then(({ apps }) => ({
  // 注册子应用信息
  apps,
  // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
  lifeCycles: {
    afterMount: (props) => {
      console.log(props);
    },
  },
  // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
}));

```

完整的主应用配置项看这里 [masterOptions 配置列表](https://umijs.org/zh-CN/plugins/plugin-qiankun#masteroptions)

##### 第二步：装载子应用

子应用的装载有两种方式，**二选一即可**：

a. 使用路由绑定的方式（建议使用这种方式来引入自带路由的子应用。）

```
在 /app1/project 和 /app2 这两个路径时分别加载微应用 app1 和 app2，只需要增加这样一些配置即可：
export default {
	routes: [
    {
      path: '/',
      component: '../layouts/index.js',
      routes: [
        {
          path: '/app1',
          component: './app1/index.js',
          routes: [
            {
              path: '/app1/user',
              component: './app1/user/index.js',
            },
+            // 配置微应用 app1 关联的路由
+            {
+              path: '/app1/project',
+              microApp: 'app1',
+            },
          ],
        },
+       // 配置 app2 关联的路由
+       {
+         path: '/app2',
+         microApp: 'app2'
+       },
        {
          path: '/',
          component: './index.js',
        },
      ],
    },
  ],
}

```

微应用路由也可以配置在运行时，通过 `src/app.ts` 添加：

```
export const qiankun = fetch('/config').then(({ apps }) => {
  return {
    apps,
    routes: [
      {
        path: '/app1',
        microApp: 'app1',
      },
    ],
  };
});

```

运行时注册的路由会自动关联到你配置的根路由下面：

```
export default {
  routes: [
    {
      path: '/',
      component: '../layouts/index.js',
      routes: [
+       {
+         path: '/app1',
+         microApp: 'app1',
+       },
        {
          path: '/test',
          component: './test.js',
        },
      ],
    },
  ]
}

```

b. 使用 `<MicroApp />` 组件的方式（建议使用这种方式来引入不带路由的子应用。）

```
我们可以直接使用 React 标签的方式加载我们已注册过的子应用：
import { MicroApp } from 'umi';

export function MyPage() {

  return (
    <div>
      <div>
+        <MicroApp name="app1" />
      </div>
    </div>
  )
}

```

可以通过配置 `autoSetLoading` 的方式，开启微应用的 loading 动画。

```
import { MicroApp } from 'umi';

export function MyPage() {
  return (
    <div>
      <div>
        <MicroApp name="app1" autoSetLoading />
      </div>
    </div>
  );
}

```

#### 子应用配置

##### 第一步：插件注册（config.js）

```
export default {
  qiankun: {
    slave: {},
  },
};

```

第二步：配置运行时生命周期钩子（可选）
插件会自动为你创建好 qiankun 子应用需要的生命周期钩子，但是如果你想在生命周期期间加一些自定义逻辑，可以在子应用的 src/app.ts 里导出 qiankun 对象，并实现每一个生命周期钩子，其中钩子函数的入参 props 由主应用自动注入。

```
export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('app1 unmount', props);
  },
};

```

##### 环境变量配置

建议您提前在子应用中指定应用启动的具体端口号，如通过`.env`指定

```
PORT=8081

```

### 父子应用通讯

> 配合 useModel 使用（推荐）
> 需确保已安装 @umijs/plugin-model 或 @umijs/preset-react

主应用使用下面任一方式透传数据：

1.如果你用的 MicroApp 组件模式消费微应用，那么数据传递的方式就跟普通的 react 组件通信是一样的，直接通过 props 传递即可：

```
function MyPage() {
  const [name, setName] = useState(null);
  return (
    <MicroApp name={name} onNameChange={(newName) => setName(newName)} />
  );
}

```

2.如果你用的 `路由绑定式` 消费微应用，那么你需要在 `src/app.ts` 里导出一个 `useQiankunStateForSlave` 函数，函数的返回值将作为 `props` 传递给微应用，如：

```
// src/app.ts
export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({});

  return {
    masterState,
    setMasterState,
  };
}

```

微应用中会自动生成一个全局 `model`，可以在任意组件中获取主应用透传的 `props` 的值。

```
import { useModel } from 'umi';

function MyPage() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  return <div>{JSON.stringify(masterProps)}</div>;
}

```

或者可以通过高阶组件 `connectMaster` 来获取主应用透传的 `props`

```
import { connectMaster } from 'umi';

function MyPage(props) {
  return <div>{JSON.stringify(props)}</div>;
}

export default connectMaster(MyPage);

```

和 `<MicroApp />` 的方式一同使用时，会额外向子应用传递一个 `setLoading` 的属性，在子应用中合适的时机执行 `masterProps.setLoading(false)`，可以标记微模块的整体 `loading` 为完成状态。

##### 基于 props 传递

主应用中配置 apps 时以 props 将数据传递下去（参考主应用运行时配置一节）

```
// src/app.js

export const qiankun = fetch('/config').then((config) => {
  return {
    apps: [
      {
        name: 'app1',
        entry: '//localhost:2222',
        props: {
          onClick: (event) => console.log(event),
          name: 'xx',
          age: 1,
        },
      },
    ],
  };
});

```

子应用在生命周期钩子中获取 props 消费数据（参考子应用运行时配置一节）

嵌套子应用
除了导航应用之外，App1 与 App2 均依赖浏览器 url，为了让 App1 嵌套 App2，两个应用同时存在，我们需要在运行时将 App2 的路由改为 memory 类型。

1. 在 App1 中加入 master 配置
   


```
export default {
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:7002', // html entry
        },
      ],
    },
  },
};

```

通过 `<MicroAppWithMemoHistory />` 引入 App2

```
import { MicroAppWithMemoHistory } from 'umi';

export function MyPage() {

  return (
    <div>
      <div>
+        <MicroAppWithMemoHistory name="app2" url="/user" />
      </div>
    </div>
  )
}

```

### 2.6 vue3 vite 微应用

1.安装插件
qiankun目前是不支持`vite`的，需要`vite-plugin-qiankun`

```
npm install vite-plugin-qiankun

```

2.修改vite.config.ts

```
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// useDevMode 开启时与热更新插件冲突
const useDevMode = true // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功, 单独运行没影响

export default defineConfig(({ mode }) => {
  const root = process.cwd() //  process.cwd()返回当前工作目录
  const env = loadEnv(mode, root)

  let config = {
    base: env.VITE_BASE_API,
    plugins: [
    vue(),
    qiankun('vue-app', { // 微应用名字，与主应用注册的微应用名字保持一致
    { useDevMode }
    })
  ],
    resolve: {
      alias: {
        '@': _resolve('src')
      }
    },
    server: {
      host: 'x.x.x.x', // 暴露内网ip
      port: 8000,
      cors: true,
      origin: mode === 'development' ? env.VITE_ORIGIN_DEV : env.VITE_BASE_API
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${子应用名}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${子应用名}`
    },
  }
  return config
})


```

3.修改main.ts

```
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'

let router = null
let instance = null
let history = null

instance = createApp(App)

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: any
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__: any
  }
}

function render(props = {}) {
  const { container } = props as any
  history = createWebHashHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? '/calendar-mobile' : '/'
  )
  router = createRouter({
    history,
    routes
  })

  instance.use(router)
  //   instance.use(store);
  instance.mount(
    container ? container.querySelector('#app') : document.getElementById('app')
  )
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('我正在作为子应用运行')
  }
}

// some code
renderWithQiankun({
  mount(props) {
    console.log('viteapp mount')
    render(props)
  },
  bootstrap() {
    console.log('bootstrap')
  },
  unmount(props) {
    console.log('vite被卸载了')
    instance.unmount()
    instance._container.innerHTML = ''
    history.destroy() // 不卸载  router 会导致其他应用路由失败
    router = null
    instance = null
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}

```

