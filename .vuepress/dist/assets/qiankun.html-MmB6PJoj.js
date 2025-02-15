import{_ as d,r as l,o as a,c as r,d as e,e as n,f as v,b as i}from"./app-VnZbzlub.js";const t={},c=i(`<h1 id="qiankun" tabindex="-1"><a class="header-anchor" href="#qiankun" aria-hidden="true">#</a> qiankun</h1><h1 id="一、介绍" tabindex="-1"><a class="header-anchor" href="#一、介绍" aria-hidden="true">#</a> 一、介绍</h1><p>qiankun 是一个基于 single-spa 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。</p><h2 id="_1-1-什么是微前端" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是微前端" aria-hidden="true">#</a> 1.1 什么是微前端</h2><p>微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。</p><ul><li><p>技术栈无关 主框架不限制接入应用的技术栈，微应用具备完全自主权</p></li><li><p>独立开发、独立部署 微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新</p></li><li><p>增量升级 在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略</p></li><li><p>独立运行时 每个微应用之间状态隔离，运行时状态不共享</p></li></ul><h2 id="_1-2-qiankun-的核心设计理念" tabindex="-1"><a class="header-anchor" href="#_1-2-qiankun-的核心设计理念" aria-hidden="true">#</a> 1.2 qiankun 的核心设计理念</h2><p>🥄 简单</p><p>由于主应用微应用都能做到技术栈无关，qiankun 对于用户而言只是一个类似 jQuery 的库，你需要调用几个 qiankun 的 API 即可完成应用的微前端改造。同时由于 qiankun 的 HTML entry 及沙箱的设计，使得微应用的接入像使用 iframe 一样简单。</p><p>🍡 解耦/技术栈无关</p><p>微前端的核心目标是将巨石应用拆解成若干可以自治的松耦合微应用，而 qiankun 的诸多设计均是秉持这一原则，如 HTML entry、沙箱、应用间通信等。这样才能确保微应用真正具备 独立开发、独立运行 的能力。</p><h3 id="_1-3-qiankun的优点-特点" tabindex="-1"><a class="header-anchor" href="#_1-3-qiankun的优点-特点" aria-hidden="true">#</a> 1.3 qiankun的优点/特点</h3><h4 id="_1-html-entry" tabindex="-1"><a class="header-anchor" href="#_1-html-entry" aria-hidden="true">#</a> 1.HTML Entry</h4><p>qiankun 通过 HTML Entry 的方式来解决 JS Entry 带来的问题，让你接入微应用像使用iframe 一样简单。</p><h4 id="_2-样式隔离" tabindex="-1"><a class="header-anchor" href="#_2-样式隔离" aria-hidden="true">#</a> 2.样式隔离</h4><p>qiankun 实现了两种样式隔离</p><p>严格的样式隔离模式，为每个微应用的容器包裹上一个 shadow dom 节点，从而确保微应用的样式不会对全局造成影响</p><p>实验性的方式，通过动态改写 css 选择器来实现，可以理解为 css scoped 的方式</p><h4 id="_3-运行时沙箱" tabindex="-1"><a class="header-anchor" href="#_3-运行时沙箱" aria-hidden="true">#</a> 3.运行时沙箱</h4><p>qiankun 的运行时沙箱分为 JS 沙箱和 样式沙箱</p><p>JS 沙箱为每个微应用生成单独的 window proxy 对象，配合 HTML Entry 提供的 JS 脚本执行器 (execScripts) 来实现 JS 隔离；</p><p>样式沙箱 通过重写 DOM 操作方法，来劫持动态样式和 JS 脚本的添加，让样式和脚本添加到正确的地方，即主应用的插入到主应用模版内，微应用的插入到微应用模版，并且为劫持的动态样式做了 scoped css 的处理，为劫持的脚本做了 JS 隔离的处理，更加具体的内容可继续往下阅读或者直接阅读 qiankun 2.x 运行时沙箱 源码分析</p><h4 id="_4-资源预加载" tabindex="-1"><a class="header-anchor" href="#_4-资源预加载" aria-hidden="true">#</a> 4.资源预加载</h4><p>qiankun 实现预加载的思路有两种，一种是当主应用执行 start 方法启动 qiankun 以后立即去预加载微应用的静态资源，另一种是在第一个微应用挂载以后预加载其它微应用的静态资源，这个是利用 single-spa 提供的 single-spa:first-mount 事件来实现的</p><h5 id="_5-应用间通信" tabindex="-1"><a class="header-anchor" href="#_5-应用间通信" aria-hidden="true">#</a> 5.应用间通信</h5><p>qiankun 通过发布订阅模式来实现应用间通信，状态由框架来统一维护，每个应用在初始化时由框架生成一套通信方法，应用通过这些方法来更改全局状态和注册回调函数，全局状态发生改变时触发各个应用注册的回调函数执行，将新旧状态传递到所有应用</p><h3 id="_1-4-为什么不是-iframe" tabindex="-1"><a class="header-anchor" href="#_1-4-为什么不是-iframe" aria-hidden="true">#</a> 1.4 为什么不是 iframe</h3><p>iframe 最大的特性就是提供了浏览器原生的硬隔离方案，不论是样式隔离、js 隔离这类问题统统都能被完美解决。但他的最大问题也在于他的隔离性无法被突破，导致应用间上下文无法被共享，随之带来的开发体验、产品体验的问题。</p><ol><li>url 不同步。浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用。</li><li>UI 不同步，DOM 结构不共享。想象一下屏幕右下角 1/4 的 iframe 里来一个带遮罩层的弹框，同时我们要求这个弹框要浏览器居中显示，还要浏览器 resize 时自动居中…</li><li>全局上下文完全隔离，内存变量不共享。iframe 内外系统的通信、数据同步等需求，主应用的 cookie 要透传到根域名都不同的子应用中实现免登效果。</li><li>慢。每次子应用进入都是一次浏览器上下文重建、资源重新加载的过程。</li></ol><h2 id="二、快速上手" tabindex="-1"><a class="header-anchor" href="#二、快速上手" aria-hidden="true">#</a> 二、快速上手</h2><h3 id="_2-1-创建主应用" tabindex="-1"><a class="header-anchor" href="#_2-1-创建主应用" aria-hidden="true">#</a> 2.1 创建主应用</h3><h5 id="_1-安装-qiankun" tabindex="-1"><a class="header-anchor" href="#_1-安装-qiankun" aria-hidden="true">#</a> 1.安装 qiankun</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ yarn add qiankun # 或者 npm i qiankun -S

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-在主应用中注册微应用" tabindex="-1"><a class="header-anchor" href="#_2-在主应用中注册微应用" aria-hidden="true">#</a> 2.在主应用中注册微应用</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { registerMicroApps, start } from &#39;qiankun&#39;
// 根据路由配置
registerMicroApps([
    {
        name: &#39;vue-app&#39;, // 必须与微应用注册名字相同
        entry: &#39;http://localhost:8081&#39;, // 入口路径，开发时为微应用所启本地服务，上线时为微应用线上路径
        container: &#39;#vue-app-container&#39;, // 微应用挂载的节点
        activeRule: &#39;/micro-vue&#39;, // 当访问路由为 /micro-vue 时加载微应用
        props: {
            msg: &quot;我是来自主应用的值-vue&quot;  // 主应用向微应用传递参数
        }
    },
    {
        name: &#39;react-app&#39;,
        entry: &#39;http://localhost:8082&#39;,
        container: &#39;#react-app-container&#39;,
        activeRule: &#39;/micro-react&#39;,
        props: {
            msg: &quot;我是来自主应用的值-react&quot;
        }
    }
])
start()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当微应用信息注册完之后，一旦浏览器的 url 发生变化，便会自动触发 qiankun 的匹配逻辑，所有 activeRule 规则匹配上的微应用就会被插入到指定的 container 中，同时依次调用微应用暴露出的生命周期钩子。</p><p>如果微应用不是直接跟路由关联的时候，你也可以选择手动加载微应用的方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { loadMicroApp } from &#39;qiankun&#39;;

loadMicroApp({
  name: &#39;app&#39;,
  entry: &#39;//localhost:7100&#39;,
  container: &#39;#yourContainer&#39;,
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-微应用" tabindex="-1"><a class="header-anchor" href="#_2-2-微应用" aria-hidden="true">#</a> 2.2 微应用</h2><p>微应用分为有 webpack 构建和无 webpack 构建项目，有 webpack 的微应用（主要是指 Vue、React、Angular）需要做的事情有：</p><ul><li>新增 public-path.js 文件，用于修改运行时的 publicPath。</li></ul><blockquote><p>注意：运行时的 publicPath 和构建时的 publicPath 是不同的，两者不能等价替代。</p></blockquote><ul><li>微应用建议使用 history 模式的路由，需要设置路由 base，值和它的 activeRule 是一样的。</li><li>在入口文件最顶部引入 public-path.js，修改并导出三个生命周期函数。</li><li>修改 webpack 打包，允许开发环境跨域和 umd 打包。</li></ul><p>主要的修改就是以上四个，可能会根据项目的不同情况而改变。例如，你的项目是 index.html 和其他的所有文件分开部署的，说明你们已经将构建时的 publicPath 设置为了完整路径，则不用修改运行时的 publicPath （第一步操作可省）。</p><p>无 webpack 构建的微应用直接将 lifecycles 挂载到 window 上即可。</p><h3 id="react-微应用" tabindex="-1"><a class="header-anchor" href="#react-微应用" aria-hidden="true">#</a> React 微应用</h3><p>1.在 src 目录新增 public-path.js：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.设置 history 模式路由的 base：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? &#39;/app-react&#39; : &#39;/&#39;}&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.入口文件 index.js 修改，为了避免根 id #root 与其他的 DOM 冲突，需要限制查找范围。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;./public-path&#39;;
import React from &#39;react&#39;;
import ReactDOM from &#39;react-dom&#39;;
import App from &#39;./App&#39;;

function render(props) {
  const { container } = props;
  ReactDOM.render(&lt;App /&gt;, container ? container.querySelector(&#39;#root&#39;) : document.querySelector(&#39;#root&#39;));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log(&#39;[react16] react app bootstraped&#39;);
}

export async function mount(props) {
  console.log(&#39;[react16] props from main framework&#39;, props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector(&#39;#root&#39;) : document.querySelector(&#39;#root&#39;));
}

// 定义全局状态，并返回两个通信方法
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: &#39;qiankun&#39;,
});

// 监听全局状态的更改，当状态发生改变时执行回调函数
onGlobalStateChange((value, prev) =&gt; console.log(&#39;[onGlobalStateChange - master]:&#39;, value, prev));

// 设置新的全局状态，只能设置一级属性，微应用只能修改已存在的一级属性
setGlobalState({
  ignore: &#39;master&#39;,
  user: {
    name: &#39;master&#39;,
  },
});

// 设置默认进入的子应用，当主应用启动以后默认进入指定微应用
setDefaultMountApp(&#39;/react16&#39;);

// 启动应用
start();

// 当第一个微应用挂载以后，执行回调函数，在这里可以做一些特殊的事情，比如开启一监控或者买点脚本
runAfterFirstMounted(() =&gt; {
  console.log(&#39;[MainApp] first app mounted&#39;);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.修改 webpack 配置</p><p>安装插件 <code>@rescripts/cli</code>，当然也可以选择其他的插件，例如 <code>react-app-rewired</code>。</p><p>根目录新增 <code>.rescriptsrc.js</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { name } = require(&#39;./package&#39;);

module.exports = {
  webpack: (config) =&gt; {
    config.output.library = \`\${name}-[name]\`;
    config.output.libraryTarget = &#39;umd&#39;;
    // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    config.output.jsonpFunction = \`webpackJsonp_\${name}\`; 
    config.output.globalObject = &#39;window&#39;;

    return config;
  },

  devServer: (_) =&gt; {
    const config = _;

    config.headers = {
      &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;, // 允许开发环境跨域
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 <code>package.json</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-   &quot;start&quot;: &quot;react-scripts start&quot;,
+   &quot;start&quot;: &quot;rescripts start&quot;,
-   &quot;build&quot;: &quot;react-scripts build&quot;,
+   &quot;build&quot;: &quot;rescripts build&quot;,
-   &quot;test&quot;: &quot;react-scripts test&quot;,
+   &quot;test&quot;: &quot;rescripts test&quot;,
-   &quot;eject&quot;: &quot;react-scripts eject&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vue-微应用" tabindex="-1"><a class="header-anchor" href="#vue-微应用" aria-hidden="true">#</a> Vue 微应用</h4><p>1.在 src 目录新增 <code>public-path.js</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.入口文件 main.js 修改，为了避免根 id #app 与其他的 DOM 冲突，需要限制查找范围。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;./public-path&#39;;
import Vue from &#39;vue&#39;;
import VueRouter from &#39;vue-router&#39;;
import App from &#39;./App.vue&#39;;
import routes from &#39;./router&#39;;
import store from &#39;./store&#39;;

Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? &#39;/app-vue/&#39; : &#39;/&#39;,
    mode: &#39;history&#39;,
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) =&gt; h(App),
  }).$mount(container ? container.querySelector(&#39;#app&#39;) : &#39;#app&#39;);
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log(&#39;[vue] vue app bootstraped&#39;);
}
export async function mount(props) {
  storeTest(props);
  console.log(&#39;[vue] props from main framework&#39;, props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = &#39;&#39;;
  instance = null;
  router = null;
}


/**
 * 从 props 中获取通信方法，监听全局状态的更改和设置全局状态，只能操作一级属性
 * @param {*} props 
 */
function storeTest(props) {
  props.onGlobalStateChange &amp;&amp;
    props.onGlobalStateChange(
      (value, prev) =&gt; console.log(\`[onGlobalStateChange - \${props.name}]:\`, value, prev),
      true,
    );
  props.setGlobalState &amp;&amp;
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.打包配置修改（vue.config.js）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { name } = require(&#39;./package&#39;);
module.exports = {
  devServer: {
    headers: {
      &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;, // 允许开发环境跨域
    },
  },
  configureWebpack: {
    output: {
      library: \`\${name}-[name]\`,
      libraryTarget: &#39;umd&#39;, // 把微应用打包成 umd 库格式
      jsonpFunction: \`webpackJsonp_\${name}\`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    },
  },
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-jquery-微应用" tabindex="-1"><a class="header-anchor" href="#_2-3-jquery-微应用" aria-hidden="true">#</a> 2.3 jQuery 微应用</h3><p>这是一个使用了 jQuery 的项目，在 <code>examples/purehtml</code> 目录下，展示了如何接入使用 jQuery 开发的应用</p><h4 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h4><p>为了达到演示效果，使用 <code>http-server</code> 在起了一个本地服务器，并且支持跨域</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  ...
  &quot;scripts&quot;: {
    &quot;start&quot;: &quot;cross-env PORT=7104 http-server . --cors&quot;,
    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;
  },
  ...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="entry-js" tabindex="-1"><a class="header-anchor" href="#entry-js" aria-hidden="true">#</a> entry.js</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 渲染函数
const render = $ =&gt; {
  $(&#39;#purehtml-container&#39;).html(&#39;Hello, render with jQuery&#39;);
  return Promise.resolve();
};

// 在全局对象上导出三个生命周期函数
(global =&gt; {
  global[&#39;purehtml&#39;] = {
    bootstrap: () =&gt; {
      console.log(&#39;purehtml bootstrap&#39;);
      return Promise.resolve();
    },
    mount: () =&gt; {
      console.log(&#39;purehtml mount&#39;);
      // 调用渲染函数
      return render($);
    },
    unmount: () =&gt; {
      console.log(&#39;purehtml unmount&#39;);
      return Promise.resolve();
    },
  };
})(window);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="index-html" tabindex="-1"><a class="header-anchor" href="#index-html" aria-hidden="true">#</a> index.html</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Purehtml Example&lt;/title&gt;
  &lt;script src=&quot;//cdn.bootcss.com/jquery/3.4.1/jquery.min.js&quot;&gt;
  &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div style=&quot;display: flex; justify-content: center; align-items: center; height: 200px;&quot;&gt;
    Purehtml Example
  &lt;/div&gt;
  &lt;div id=&quot;purehtml-container&quot; style=&quot;text-align:center&quot;&gt;&lt;/div&gt;
  &lt;!-- 引入 entry.js，相当于 vue 项目的 publicPath 配置 --&gt;
  &lt;script src=&quot;//localhost:7104/entry.js&quot; entry&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-主应用与微应用通信" tabindex="-1"><a class="header-anchor" href="#_2-4-主应用与微应用通信" aria-hidden="true">#</a> 2.4 主应用与微应用通信</h3><p>initGlobalState(state) 定义全局状态，并返回通信方法，建议在主应用使用，微应用通过 props 获取通信方法。</p><ul><li>onGlobalStateChange: (callback: OnGlobalStateChangeCallback, fireImmediately?: boolean) =&gt; void， 在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback</li><li>setGlobalState: (state: Record&lt;string, any&gt;) =&gt; boolean， 按一级属性设置全局状态，微应用中只能修改已存在的一级属性</li><li>offGlobalStateChange: () =&gt; boolean，移除当前应用的状态监听，微应用 umount 时会默认调用</li></ul><p>主应用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { initGlobalState, MicroAppStateActions } from &#39;qiankun&#39;;

// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) =&gt; {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState(state);
actions.offGlobalStateChange();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>微应用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 从生命周期 mount 中获取通信方法，使用方式和 master 一致
export function mount(props) {
  props.onGlobalStateChange((state, prev) =&gt; {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
    // store.count = res.count
  });
  // 修改全局状态
  props.setGlobalState(state);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.5 UmiJS 配置qiankun UmiJS有自己独立支持qiankun的插件@umijs/plugin-qiankun</p><p>yarn add @umijs/plugin-qiankun -D 配置 qiankun 开启。 主应用配置 第一步：注册子应用 子应用注册有两种方式，二选一即可</p><p>a. 插件构建期配置子应用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: &#39;app1&#39;, // 唯一 id
          entry: &#39;//localhost:7001&#39;, // html entry
        },
        {
          name: &#39;app2&#39;, // 唯一 id
          entry: &#39;//localhost:7002&#39;, // html entry
        },
      ],
    },
  },
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b. 运行时动态配置子应用（src/app.ts 里开启）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
export const qiankun = fetch(&#39;/config&#39;).then(({ apps }) =&gt; ({
  // 注册子应用信息
  apps,
  // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
  lifeCycles: {
    afterMount: (props) =&gt; {
      console.log(props);
    },
  },
  // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
}));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,87),u={href:"https://umijs.org/zh-CN/plugins/plugin-qiankun#masteroptions",target:"_blank",rel:"noopener noreferrer"},m=i(`<h5 id="第二步-装载子应用" tabindex="-1"><a class="header-anchor" href="#第二步-装载子应用" aria-hidden="true">#</a> 第二步：装载子应用</h5><p>子应用的装载有两种方式，<strong>二选一即可</strong>：</p><p>a. 使用路由绑定的方式（建议使用这种方式来引入自带路由的子应用。）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在 /app1/project 和 /app2 这两个路径时分别加载微应用 app1 和 app2，只需要增加这样一些配置即可：
export default {
	routes: [
    {
      path: &#39;/&#39;,
      component: &#39;../layouts/index.js&#39;,
      routes: [
        {
          path: &#39;/app1&#39;,
          component: &#39;./app1/index.js&#39;,
          routes: [
            {
              path: &#39;/app1/user&#39;,
              component: &#39;./app1/user/index.js&#39;,
            },
+            // 配置微应用 app1 关联的路由
+            {
+              path: &#39;/app1/project&#39;,
+              microApp: &#39;app1&#39;,
+            },
          ],
        },
+       // 配置 app2 关联的路由
+       {
+         path: &#39;/app2&#39;,
+         microApp: &#39;app2&#39;
+       },
        {
          path: &#39;/&#39;,
          component: &#39;./index.js&#39;,
        },
      ],
    },
  ],
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>微应用路由也可以配置在运行时，通过 <code>src/app.ts</code> 添加：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export const qiankun = fetch(&#39;/config&#39;).then(({ apps }) =&gt; {
  return {
    apps,
    routes: [
      {
        path: &#39;/app1&#39;,
        microApp: &#39;app1&#39;,
      },
    ],
  };
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行时注册的路由会自动关联到你配置的根路由下面：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  routes: [
    {
      path: &#39;/&#39;,
      component: &#39;../layouts/index.js&#39;,
      routes: [
+       {
+         path: &#39;/app1&#39;,
+         microApp: &#39;app1&#39;,
+       },
        {
          path: &#39;/test&#39;,
          component: &#39;./test.js&#39;,
        },
      ],
    },
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b. 使用 <code>&lt;MicroApp /&gt;</code> 组件的方式（建议使用这种方式来引入不带路由的子应用。）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们可以直接使用 React 标签的方式加载我们已注册过的子应用：
import { MicroApp } from &#39;umi&#39;;

export function MyPage() {

  return (
    &lt;div&gt;
      &lt;div&gt;
+        &lt;MicroApp name=&quot;app1&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过配置 <code>autoSetLoading</code> 的方式，开启微应用的 loading 动画。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { MicroApp } from &#39;umi&#39;;

export function MyPage() {
  return (
    &lt;div&gt;
      &lt;div&gt;
        &lt;MicroApp name=&quot;app1&quot; autoSetLoading /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子应用配置" tabindex="-1"><a class="header-anchor" href="#子应用配置" aria-hidden="true">#</a> 子应用配置</h4><h5 id="第一步-插件注册-config-js" tabindex="-1"><a class="header-anchor" href="#第一步-插件注册-config-js" aria-hidden="true">#</a> 第一步：插件注册（config.js）</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  qiankun: {
    slave: {},
  },
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：配置运行时生命周期钩子（可选） 插件会自动为你创建好 qiankun 子应用需要的生命周期钩子，但是如果你想在生命周期期间加一些自定义逻辑，可以在子应用的 src/app.ts 里导出 qiankun 对象，并实现每一个生命周期钩子，其中钩子函数的入参 props 由主应用自动注入。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log(&#39;app1 bootstrap&#39;, props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log(&#39;app1 mount&#39;, props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log(&#39;app1 unmount&#39;, props);
  },
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="环境变量配置" tabindex="-1"><a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a> 环境变量配置</h5><p>建议您提前在子应用中指定应用启动的具体端口号，如通过<code>.env</code>指定</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PORT=8081

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="父子应用通讯" tabindex="-1"><a class="header-anchor" href="#父子应用通讯" aria-hidden="true">#</a> 父子应用通讯</h3><blockquote><p>配合 useModel 使用（推荐） 需确保已安装 @umijs/plugin-model 或 @umijs/preset-react</p></blockquote><p>主应用使用下面任一方式透传数据：</p><p>1.如果你用的 MicroApp 组件模式消费微应用，那么数据传递的方式就跟普通的 react 组件通信是一样的，直接通过 props 传递即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function MyPage() {
  const [name, setName] = useState(null);
  return (
    &lt;MicroApp name={name} onNameChange={(newName) =&gt; setName(newName)} /&gt;
  );
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.如果你用的 <code>路由绑定式</code> 消费微应用，那么你需要在 <code>src/app.ts</code> 里导出一个 <code>useQiankunStateForSlave</code> 函数，函数的返回值将作为 <code>props</code> 传递给微应用，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// src/app.ts
export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({});

  return {
    masterState,
    setMasterState,
  };
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>微应用中会自动生成一个全局 <code>model</code>，可以在任意组件中获取主应用透传的 <code>props</code> 的值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { useModel } from &#39;umi&#39;;

function MyPage() {
  const masterProps = useModel(&#39;@@qiankunStateFromMaster&#39;);
  return &lt;div&gt;{JSON.stringify(masterProps)}&lt;/div&gt;;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者可以通过高阶组件 <code>connectMaster</code> 来获取主应用透传的 <code>props</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { connectMaster } from &#39;umi&#39;;

function MyPage(props) {
  return &lt;div&gt;{JSON.stringify(props)}&lt;/div&gt;;
}

export default connectMaster(MyPage);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和 <code>&lt;MicroApp /&gt;</code> 的方式一同使用时，会额外向子应用传递一个 <code>setLoading</code> 的属性，在子应用中合适的时机执行 <code>masterProps.setLoading(false)</code>，可以标记微模块的整体 <code>loading</code> 为完成状态。</p><h5 id="基于-props-传递" tabindex="-1"><a class="header-anchor" href="#基于-props-传递" aria-hidden="true">#</a> 基于 props 传递</h5><p>主应用中配置 apps 时以 props 将数据传递下去（参考主应用运行时配置一节）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// src/app.js

export const qiankun = fetch(&#39;/config&#39;).then((config) =&gt; {
  return {
    apps: [
      {
        name: &#39;app1&#39;,
        entry: &#39;//localhost:2222&#39;,
        props: {
          onClick: (event) =&gt; console.log(event),
          name: &#39;xx&#39;,
          age: 1,
        },
      },
    ],
  };
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子应用在生命周期钩子中获取 props 消费数据（参考子应用运行时配置一节）</p><p>嵌套子应用 除了导航应用之外，App1 与 App2 均依赖浏览器 url，为了让 App1 嵌套 App2，两个应用同时存在，我们需要在运行时将 App2 的路由改为 memory 类型。</p><ol><li>在 App1 中加入 master 配置</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: &#39;app2&#39;, // 唯一 id
          entry: &#39;//localhost:7002&#39;, // html entry
        },
      ],
    },
  },
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>&lt;MicroAppWithMemoHistory /&gt;</code> 引入 App2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { MicroAppWithMemoHistory } from &#39;umi&#39;;

export function MyPage() {

  return (
    &lt;div&gt;
      &lt;div&gt;
+        &lt;MicroAppWithMemoHistory name=&quot;app2&quot; url=&quot;/user&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-vue3-vite-微应用" tabindex="-1"><a class="header-anchor" href="#_2-6-vue3-vite-微应用" aria-hidden="true">#</a> 2.6 vue3 vite 微应用</h3><p>1.安装插件 qiankun目前是不支持<code>vite</code>的，需要<code>vite-plugin-qiankun</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vite-plugin-qiankun

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.修改vite.config.ts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defineConfig, loadEnv } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import qiankun from &#39;vite-plugin-qiankun&#39;

// useDevMode 开启时与热更新插件冲突
const useDevMode = true // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功, 单独运行没影响

export default defineConfig(({ mode }) =&gt; {
  const root = process.cwd() //  process.cwd()返回当前工作目录
  const env = loadEnv(mode, root)

  let config = {
    base: env.VITE_BASE_API,
    plugins: [
    vue(),
    qiankun(&#39;vue-app&#39;, { // 微应用名字，与主应用注册的微应用名字保持一致
    { useDevMode }
    })
  ],
    resolve: {
      alias: {
        &#39;@&#39;: _resolve(&#39;src&#39;)
      }
    },
    server: {
      host: &#39;x.x.x.x&#39;, // 暴露内网ip
      port: 8000,
      cors: true,
      origin: mode === &#39;development&#39; ? env.VITE_ORIGIN_DEV : env.VITE_BASE_API
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: \`\${子应用名}-[name]\`,
      libraryTarget: &#39;umd&#39;,
      jsonpFunction: \`webpackJsonp_\${子应用名}\`
    },
  }
  return config
})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.修改main.ts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import { createRouter, createWebHashHistory } from &#39;vue-router&#39;
import {
  renderWithQiankun,
  qiankunWindow
} from &#39;vite-plugin-qiankun/dist/helper&#39;

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
    qiankunWindow.__POWERED_BY_QIANKUN__ ? &#39;/calendar-mobile&#39; : &#39;/&#39;
  )
  router = createRouter({
    history,
    routes
  })

  instance.use(router)
  //   instance.use(store);
  instance.mount(
    container ? container.querySelector(&#39;#app&#39;) : document.getElementById(&#39;app&#39;)
  )
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log(&#39;我正在作为子应用运行&#39;)
  }
}

// some code
renderWithQiankun({
  mount(props) {
    console.log(&#39;viteapp mount&#39;)
    render(props)
  },
  bootstrap() {
    console.log(&#39;bootstrap&#39;)
  },
  unmount(props) {
    console.log(&#39;vite被卸载了&#39;)
    instance.unmount()
    instance._container.innerHTML = &#39;&#39;
    history.destroy() // 不卸载  router 会导致其他应用路由失败
    router = null
    instance = null
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48);function o(b,p){const s=l("ExternalLinkIcon");return a(),r("div",null,[c,e("p",null,[n("完整的主应用配置项看这里 "),e("a",u,[n("masterOptions 配置列表"),v(s)])]),m])}const h=d(t,[["render",o],["__file","qiankun.html.vue"]]);export{h as default};
