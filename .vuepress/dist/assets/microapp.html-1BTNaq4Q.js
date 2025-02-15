import{_ as s,r as a,o as r,c as v,d as e,e as i,f as d,b as l}from"./app-VnZbzlub.js";const t={},c=e("h1",{id:"microapp微前端框架",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#microapp微前端框架","aria-hidden":"true"},"#"),i(" MicroApp微前端框架")],-1),u={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmicro-zoe%2Fmicro-app-demo",target:"_blank",rel:"noopener noreferrer"},m=l(`<h1 id="微前端" tabindex="-1"><a class="header-anchor" href="#微前端" aria-hidden="true">#</a> 微前端</h1><p>微前端是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立运行、独立开发、独立部署。微前端架构与框架无关，每个微应用都可以使用不同的框架。</p><h1 id="microapp" tabindex="-1"><a class="header-anchor" href="#microapp" aria-hidden="true">#</a> MicroApp</h1><blockquote><p>MicroApp借鉴了WebComponent的思想，通过CustomElement结合自定义的ShadowDom，将微前端封装成一个类WebComponent组件，从而实现微前端的组件化渲染。并且由于自定义ShadowDom的隔离特性，micro-app不需要像single-spa一样要求子应用修改渲染逻辑并暴露出方法，也不需要修改webpack配置，是目前市面上接入微前端成本最低的方案之一。 -- 《MicroApp》</p></blockquote><p>MicroApp 的接入成本低、兼容性高、性能强是我们选择MicroApp作为微前端框架使用的重要因素~</p><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><h2 id="主应用-react" tabindex="-1"><a class="header-anchor" href="#主应用-react" aria-hidden="true">#</a> 主应用 - react</h2><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fde3f2cf51dc460aa75de3deebbfaeb9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="demo架构.png"></p><h3 id="_1-项目准备" tabindex="-1"><a class="header-anchor" href="#_1-项目准备" aria-hidden="true">#</a> 1. 项目准备</h3><p><strong>1. 创建项目</strong></p><ol><li>创建主应用项目：<code>npx create-react-app react18</code></li><li>创建子应用项目-react：<code>npx create-react-app react18</code></li><li>创建子应用项目-vue3：<code>vue create vue3</code></li></ol><p><strong>2. 安装相关依赖</strong></p><ol><li>【主应用】安装微前端框架： <code>npm i @micro-zoe/micro-app --save</code></li><li>【主应用】安装路由依赖：<code>npm i react-router-dom</code></li><li>【子应用-react】安装路由依赖：<code>npm i react-router-dom</code></li><li>【子应用-react】安装跨域解决支持依赖：<code>npm install react-app-rewired customize-cra --save-dev</code></li><li>【子应用-vue3】安装路由依赖：<code>npm install vue-router</code></li></ol><h3 id="_2-搭建相关路由系统" tabindex="-1"><a class="header-anchor" href="#_2-搭建相关路由系统" aria-hidden="true">#</a> 2. 搭建相关路由系统</h3><ol><li><p>【主应用】路由系统</p><div class="language-2. line-numbers-mode" data-ext="2."><pre class="language-2."><code>js
// router/index.js
import { lazy, Suspense } from &#39;react&#39;
import { createBrowserRouter } from &#39;react-router-dom&#39;
import Home from &#39;../pages/home&#39;

const React18 = lazy(() =&gt;
  import(/* webpackChunkName: &quot;react18&quot; */ &#39;../pages/React18&#39;)
)
const Vue3 = lazy(() =&gt; import(/* webpackChunkName: &quot;vue3&quot; */ &#39;../pages/Vue3&#39;))

const router = createBrowserRouter([
  {
    path: &#39;/&#39;,
    element: &lt;Home /&gt;,
    errorElement: &lt;div&gt;404&lt;/div&gt;,
    children: [
      {
        path: &#39;react18&#39;,
        element: (
          &lt;Suspense fallback={&lt;div&gt;loading...&lt;/div&gt;}&gt;
            &lt;React18 /&gt;
          &lt;/Suspense&gt;
        ),
      },
      {
        path: &#39;vue3&#39;,
        element: (
          &lt;Suspense fallback={&lt;div&gt;loading...&lt;/div&gt;}&gt;
            &lt;Vue3 /&gt;
          &lt;/Suspense&gt;
        ),
      },
    ],
  },
])

export default router

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>【主应用】路由系统相关组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// react18
const React18 = () =&gt; {
  return (
    &lt;div&gt;
      &lt;micro-app
        name=&quot;react18&quot;
        url=&quot;http://localhost:3311/&quot;
        baseroute=&quot;/react18&quot;
      /&gt;
    &lt;/div&gt;
  )
}

export default React18

// vue3
const Vue3 = () =&gt; {
  return (
    &lt;div&gt;
      &lt;micro-app name=&quot;vue3&quot; url=&quot;http://localhost:3312/&quot; baseroute=&quot;/vue3&quot; /&gt;
    &lt;/div&gt;
  )
}

export default Vue3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【子应用-react】路由系统</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// router/index.js
import { createBrowserRouter } from &#39;react-router-dom&#39;
import { lazy, Suspense } from &#39;react&#39;
import Home from &#39;../pages/home&#39;

const About = lazy(() =&gt;
  import(/* webpackChunkName: &quot;about&quot; */ &#39;../pages/about&#39;)
)
const Detail = lazy(() =&gt;
  import(/* webpackChunkName: &quot;detail&quot; */ &#39;../pages/detail&#39;)
)

const router = createBrowserRouter(
  [
    {
      path: &#39;/&#39;,
      element: &lt;Home /&gt;,
      // 这里放置自己的路由即可
      children: [
        {
          path: &#39;/about&#39;,
          element: (
            &lt;Suspense fallback={&lt;div&gt;loading&lt;/div&gt;}&gt;
              &lt;About /&gt;
            &lt;/Suspense&gt;
          ),
        },
        {
          path: &#39;detail/:id&#39;,
          element: (
            &lt;Suspense fallback={&lt;div&gt;loading&lt;/div&gt;}&gt;
              &lt;Detail /&gt;
            &lt;/Suspense&gt;
          ),
        },
      ],
    },
  ],
  // 注意此处为微前端侵入性修改
  {
    basename: window.__MICRO_APP_BASE_ROUTE__ || &#39;/&#39;,
  }
)

export default router

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【子应用-vue3】路由系统</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { createRouter, createWebHistory } from &#39;vue-router&#39;

const router = createRouter({
  // 注意此处为微前端侵入性修改
  history: createWebHistory(
    window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL
  ),
  routes: [
    {
      path: &#39;/detail&#39;,
      name: &#39;detail&#39;,
      component: () =&gt; import(&#39;../pages/Detail.vue&#39;),
    },
    {
      path: &#39;/about&#39;,
      name: &#39;about&#39;,
      component: () =&gt; import(&#39;../pages/AboutView.vue&#39;),
    },
  ],
})

export default router

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-引入微前端框架" tabindex="-1"><a class="header-anchor" href="#_3-引入微前端框架" aria-hidden="true">#</a> 3. 引入微前端框架</h3><p>【主应用】入口文件引入框架</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// index.js
import microApp from &#39;@micro-zoe/micro-app&#39;

microApp.start()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-子应用跨域问题处理" tabindex="-1"><a class="header-anchor" href="#_4-子应用跨域问题处理" aria-hidden="true">#</a> 4. 子应用跨域问题处理</h3><ol><li>【子应用-react】修改package.json</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
  &quot;start&quot;: &quot;react-app-rewired start&quot;,
  &quot;build&quot;: &quot;react-app-rewired build&quot;,
  &quot;test&quot;: &quot;react-app-rewired test&quot;,
  &quot;eject&quot;: &quot;react-scripts eject&quot;
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【子应用-react】根目录下添加 <code>config-overrides.js</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { overrideDevServer } = require(&#39;customize-cra&#39;)
module.exports = {
  devServer: overrideDevServer((config) =&gt; {
    return {
      ...config,
      headers: {
        &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;,
      },
    }
  }),
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【子应用-vue】根目录<code>vue.config.js</code>中添加配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { defineConfig } = require(&#39;@vue/cli-service&#39;)

module.exports = defineConfig({
  // ...
  devServer: {
    port: 3312,
    headers: {
      &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;,
    },
  },
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-子应用设置publicpath" tabindex="-1"><a class="header-anchor" href="#_5-子应用设置publicpath" aria-hidden="true">#</a> 5. 子应用设置publicPath</h3><ol><li>【子应用-react】src目录下创建名称为<code>public-path.js</code>的文件，并添加如下内容</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// __MICRO_APP_ENVIRONMENT__和__MICRO_APP_PUBLIC_PATH__是由micro-app注入的全局变量
if (window.__MICRO_APP_ENVIRONMENT__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【子应用-react】入口文件的<code>最顶部</code>引入<code>public-path.js</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// entry
import &#39;./public-path&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>【子应用-vue】src目录下创建名称为<code>public-path.js</code>的文件，并添加 同上述<code>react子应用</code>中相同内容</li><li>【子应用-vue】入口文件的<code>最顶部</code>引入<code>public-path.js</code></li></ol><p>🏷提示：</p><p>到这里已经完成一个微前端的基本搭建工作，展示效果如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7eb886713cf479ab52244b18e3d7c0c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="basicdemo.gif"></p><p>整个接入过程非常简单，侵入性的操作总结有：</p><ul><li>主应用 <ul><li><code>microApp.start()</code></li><li>添加微应用的容器组件</li><li>添加路由指向这个容器组件</li></ul></li><li>微应用 <ul><li>修改 public-path</li><li>添加跨域访问</li><li>自动切换路由的 <code>basename</code></li></ul></li></ul>`,42),o={id:"数据通信",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#数据通信","aria-hidden":"true"},"#",-1),p={href:"https://link.juejin.cn/?target=https%3A%2F%2Fzeroing.jd.com%2Fdocs.html%23%2Fzh-cn%2Fdata",target:"_blank",rel:"noopener noreferrer"},g=l(`<h4 id="父传子" tabindex="-1"><a class="header-anchor" href="#父传子" aria-hidden="true">#</a> 父传子</h4><ol><li><p>【主应用】修改路由</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>js
// router/index.js
import { lazy, Suspense } from &#39;react&#39;
import { createBrowserRouter } from &#39;react-router-dom&#39;
import Home from &#39;../pages/home&#39;

const React18 = lazy(() =&gt;
  import(/* webpackChunkName: &quot;react18&quot; */ &#39;../pages/React18&#39;)
)
const Vue3 = lazy(() =&gt; import(/* webpackChunkName: &quot;vue3&quot; */ &#39;../pages/Vue3&#39;))

const router = createBrowserRouter([
  {
    path: &#39;/*&#39;,
    element: &lt;Home /&gt;,
    errorElement: &lt;div&gt;404&lt;/div&gt;,
    children: [
      {
        path: &#39;react18/*&#39;,
        element: (
          &lt;Suspense fallback={&lt;div&gt;loading&lt;/div&gt;}&gt;
            &lt;React18 /&gt;
          &lt;/Suspense&gt;
        ),
      },
      {
        path: &#39;vue3/*&#39;,
        element: (
          &lt;Suspense fallback={&lt;div&gt;loading&lt;/div&gt;}&gt;
            &lt;Vue3 /&gt;
          &lt;/Suspense&gt;
        ),
      },
    ],
  },
])

export default router

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>【主应用】页面组件添加以下内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// React18
const location = useLocation()

useEffect(() =&gt; {
  // 第一个参数为子应用名称
  microApp.setData(&#39;react18&#39;, {
    path: location.pathname.replace(&#39;/react18&#39;, &#39;&#39;),
  })
}, [location.pathname])

// 其他页面组件将相应第一个参数和路由进行修改即可

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【子应用-react】在首页添加监听事件并重定向路由</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const navigate = useNavigate()

  useEffect(() =&gt; {
    function dataListener(data) {
      if (data.path) {
        navigate(data.path)
      }
    }
    if (window.__MICRO_APP_ENVIRONMENT__) {
      window.microApp.addDataListener(dataListener)
    }
    return () =&gt; {
      if (window.__MICRO_APP_ENVIRONMENT__) {
        // 解绑监听函数
        window.microApp.removeDataListener(dataListener)
        // 清空当前子应用的所有绑定函数(全局数据函数除外)
        window.microApp.clearDataListener()
      }
    }
  }, [])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【子应用-vue】在首页添加监听事件并重定向路由</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mounted() {
  const router = useRouter()
  function dataListener(data) {
    if (data.path) {
      router.push(data.path)
    }
  }
  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.microApp.addDataListener(dataListener)
  }
},
unmounted() {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 解绑监听函数
    window.microApp.removeDataListener()
    // 清空当前子应用的所有绑定函数(全局数据函数除外)
    window.microApp.clearDataListener()
  }
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子传父" tabindex="-1"><a class="header-anchor" href="#子传父" aria-hidden="true">#</a> 子传父</h4><ol><li><p>【子应用-react】监听路由改变</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// home/index.js
const location = useLocation()

useEffect(() =&gt; {
  if (window.microApp) {
    window.microApp.dispatch({
      path: location.pathname,
    })
  }
}, [location.pathname])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【主应用】获取数据并做出响应</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// home/index.js
const [selectedKeys, setSelectedKeys] = useState([])

useEffect(() =&gt; {
  function dataListener(data) {
    setSelectedKeys([\`/react18\${data.path}\`])
  }

  microApp.addDataListener(&#39;react18&#39;, dataListener)

  return () =&gt; {
    // 解绑监听my-app子应用的函数
    microApp.removeDataListener(&#39;react18&#39;, dataListener)
    // 清空所有监听appName子应用的函数
    microApp.clearDataListener(&#39;react18&#39;)
  }
}, [])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子应用发送数据等操作同理，这里就不做演示了，可直接看源码~</p><p>完成效果如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/848ab6e23862403a8f189558caf1f5e2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="数据通信.gif"></p>`,14);function h(_,f){const n=a("ExternalLinkIcon");return r(),v("div",null,[c,e("p",null,[i("MicroApp是一款由京东零售，平台前端团队出品的高性能低成本微前端框架，本文为MicroApp的使用初探，您可以选择通过 "),e("a",u,[i("官方demo"),d(n)]),i(" 进行对框架全面了解。")]),m,e("h3",o,[b,i(),e("a",p,[i("数据通信"),d(n)])]),g])}const w=s(t,[["render",h],["__file","microapp.html.vue"]]);export{w as default};
