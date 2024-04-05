# MicroApp微前端框架

MicroApp是一款由京东零售，平台前端团队出品的高性能低成本微前端框架，本文为MicroApp的使用初探，您可以选择通过 [官方demo](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmicro-zoe%2Fmicro-app-demo) 进行对框架全面了解。

# 微前端

微前端是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立运行、独立开发、独立部署。微前端架构与框架无关，每个微应用都可以使用不同的框架。

# MicroApp

> MicroApp借鉴了WebComponent的思想，通过CustomElement结合自定义的ShadowDom，将微前端封装成一个类WebComponent组件，从而实现微前端的组件化渲染。并且由于自定义ShadowDom的隔离特性，micro-app不需要像single-spa一样要求子应用修改渲染逻辑并暴露出方法，也不需要修改webpack配置，是目前市面上接入微前端成本最低的方案之一。 -- 《MicroApp》

MicroApp 的接入成本低、兼容性高、性能强是我们选择MicroApp作为微前端框架使用的重要因素~

# 快速开始

## 主应用 - react

![demo架构.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fde3f2cf51dc460aa75de3deebbfaeb9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

### 1. 项目准备

**1. 创建项目**

1. 创建主应用项目：`npx create-react-app react18`
2. 创建子应用项目-react：`npx create-react-app react18`
3. 创建子应用项目-vue3：`vue create vue3`

**2. 安装相关依赖**

1. 【主应用】安装微前端框架： `npm i @micro-zoe/micro-app --save`
2. 【主应用】安装路由依赖：`npm i react-router-dom`
3. 【子应用-react】安装路由依赖：`npm i react-router-dom`
4. 【子应用-react】安装跨域解决支持依赖：`npm install react-app-rewired customize-cra --save-dev`
5. 【子应用-vue3】安装路由依赖：`npm install vue-router`

### 2. 搭建相关路由系统

1. 【主应用】路由系统

   ```2. 搭建相关路由系统
   js
   // router/index.js
   import { lazy, Suspense } from 'react'
   import { createBrowserRouter } from 'react-router-dom'
   import Home from '../pages/home'
   
   const React18 = lazy(() =>
     import(/* webpackChunkName: "react18" */ '../pages/React18')
   )
   const Vue3 = lazy(() => import(/* webpackChunkName: "vue3" */ '../pages/Vue3'))
   
   const router = createBrowserRouter([
     {
       path: '/',
       element: <Home />,
       errorElement: <div>404</div>,
       children: [
         {
           path: 'react18',
           element: (
             <Suspense fallback={<div>loading...</div>}>
               <React18 />
             </Suspense>
           ),
         },
         {
           path: 'vue3',
           element: (
             <Suspense fallback={<div>loading...</div>}>
               <Vue3 />
             </Suspense>
           ),
         },
       ],
     },
   ])
   
   export default router
   
   ```

【主应用】路由系统相关组件

```
// react18
const React18 = () => {
  return (
    <div>
      <micro-app
        name="react18"
        url="http://localhost:3311/"
        baseroute="/react18"
      />
    </div>
  )
}

export default React18

// vue3
const Vue3 = () => {
  return (
    <div>
      <micro-app name="vue3" url="http://localhost:3312/" baseroute="/vue3" />
    </div>
  )
}

export default Vue3

```

【子应用-react】路由系统

```
// router/index.js
import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from '../pages/home'

const About = lazy(() =>
  import(/* webpackChunkName: "about" */ '../pages/about')
)
const Detail = lazy(() =>
  import(/* webpackChunkName: "detail" */ '../pages/detail')
)

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      // 这里放置自己的路由即可
      children: [
        {
          path: '/about',
          element: (
            <Suspense fallback={<div>loading</div>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: 'detail/:id',
          element: (
            <Suspense fallback={<div>loading</div>}>
              <Detail />
            </Suspense>
          ),
        },
      ],
    },
  ],
  // 注意此处为微前端侵入性修改
  {
    basename: window.__MICRO_APP_BASE_ROUTE__ || '/',
  }
)

export default router

```

【子应用-vue3】路由系统

```
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // 注意此处为微前端侵入性修改
  history: createWebHistory(
    window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL
  ),
  routes: [
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../pages/Detail.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue'),
    },
  ],
})

export default router

```

### 3. 引入微前端框架

【主应用】入口文件引入框架

```
// index.js
import microApp from '@micro-zoe/micro-app'

microApp.start()

```

### 4. 子应用跨域问题处理

1. 【子应用-react】修改package.json

```
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
},

```

【子应用-react】根目录下添加 `config-overrides.js`

```
const { overrideDevServer } = require('customize-cra')
module.exports = {
  devServer: overrideDevServer((config) => {
    return {
      ...config,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  }),
}

```

【子应用-vue】根目录`vue.config.js`中添加配置

```
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // ...
  devServer: {
    port: 3312,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})

```

### 5. 子应用设置publicPath

1. 【子应用-react】src目录下创建名称为`public-path.js`的文件，并添加如下内容

```
// __MICRO_APP_ENVIRONMENT__和__MICRO_APP_PUBLIC_PATH__是由micro-app注入的全局变量
if (window.__MICRO_APP_ENVIRONMENT__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__
}

```

【子应用-react】入口文件的`最顶部`引入`public-path.js`

```
// entry
import './public-path'

```

1. 【子应用-vue】src目录下创建名称为`public-path.js`的文件，并添加 同上述`react子应用`中相同内容
2. 【子应用-vue】入口文件的`最顶部`引入`public-path.js`

🏷提示：

到这里已经完成一个微前端的基本搭建工作，展示效果如下：

![basicdemo.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7eb886713cf479ab52244b18e3d7c0c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

整个接入过程非常简单，侵入性的操作总结有：

- 主应用
  - `microApp.start()`
  - 添加微应用的容器组件
  - 添加路由指向这个容器组件
- 微应用
  - 修改 public-path
  - 添加跨域访问
  - 自动切换路由的 `basename`

### [数据通信](https://link.juejin.cn/?target=https%3A%2F%2Fzeroing.jd.com%2Fdocs.html%23%2Fzh-cn%2Fdata)

#### 父传子

1. 【主应用】修改路由

   ```
   js
   // router/index.js
   import { lazy, Suspense } from 'react'
   import { createBrowserRouter } from 'react-router-dom'
   import Home from '../pages/home'
   
   const React18 = lazy(() =>
     import(/* webpackChunkName: "react18" */ '../pages/React18')
   )
   const Vue3 = lazy(() => import(/* webpackChunkName: "vue3" */ '../pages/Vue3'))
   
   const router = createBrowserRouter([
     {
       path: '/*',
       element: <Home />,
       errorElement: <div>404</div>,
       children: [
         {
           path: 'react18/*',
           element: (
             <Suspense fallback={<div>loading</div>}>
               <React18 />
             </Suspense>
           ),
         },
         {
           path: 'vue3/*',
           element: (
             <Suspense fallback={<div>loading</div>}>
               <Vue3 />
             </Suspense>
           ),
         },
       ],
     },
   ])
   
   export default router
   
   ```

【主应用】页面组件添加以下内容

```
// React18
const location = useLocation()

useEffect(() => {
  // 第一个参数为子应用名称
  microApp.setData('react18', {
    path: location.pathname.replace('/react18', ''),
  })
}, [location.pathname])

// 其他页面组件将相应第一个参数和路由进行修改即可

```

【子应用-react】在首页添加监听事件并重定向路由

```
const navigate = useNavigate()

  useEffect(() => {
    function dataListener(data) {
      if (data.path) {
        navigate(data.path)
      }
    }
    if (window.__MICRO_APP_ENVIRONMENT__) {
      window.microApp.addDataListener(dataListener)
    }
    return () => {
      if (window.__MICRO_APP_ENVIRONMENT__) {
        // 解绑监听函数
        window.microApp.removeDataListener(dataListener)
        // 清空当前子应用的所有绑定函数(全局数据函数除外)
        window.microApp.clearDataListener()
      }
    }
  }, [])

```

【子应用-vue】在首页添加监听事件并重定向路由

```
mounted() {
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

```

#### 子传父

1. 【子应用-react】监听路由改变

   ```
   // home/index.js
   const location = useLocation()
   
   useEffect(() => {
     if (window.microApp) {
       window.microApp.dispatch({
         path: location.pathname,
       })
     }
   }, [location.pathname])
   
   ```

   【主应用】获取数据并做出响应

```
// home/index.js
const [selectedKeys, setSelectedKeys] = useState([])

useEffect(() => {
  function dataListener(data) {
    setSelectedKeys([`/react18${data.path}`])
  }

  microApp.addDataListener('react18', dataListener)

  return () => {
    // 解绑监听my-app子应用的函数
    microApp.removeDataListener('react18', dataListener)
    // 清空所有监听appName子应用的函数
    microApp.clearDataListener('react18')
  }
}, [])

```

子应用发送数据等操作同理，这里就不做演示了，可直接看源码~

完成效果如下：

![数据通信.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/848ab6e23862403a8f189558caf1f5e2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)