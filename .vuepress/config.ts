import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  port: 9000,
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,user-scalable=no,maximum-scale=1",
      },
    ],
  ],
  title: "前端时光",
  description: "前端小泽的blog",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/time.jpeg",
    author: "前端小泽",
    authorAvatar: "/time.jpeg",
    docsRepo: "https://gitee.com/huang_yuze/huangyuze-blog.git",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "上次更新时间",
    componentsDir: './showHtml/demo',
    vuePreviewsDir: './showHtml/demo',//展示的vue组件
    contributors: true,
    contributorsText: "贡献者列表",
    toggleDarkMode: "切换主题",
    colorMode: "dark", //  默认主题颜色
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新",
      },
    },
    // series 为原 sidebar
    series: {
      sidebarDepth: 1,
      series: "auto",
      //css
      "/docs/css/": [
        "BFC.md",
        "box.md",
        "center.md",
        "column_layout.md",
        "selector.md",
        "css_performance.md",
        "css3_features.md",
        "dp_px_dpr_ppi.md",
        "em_px_rem_vh_vw.md",
        "flexbox.md",
        "grid.md",
        "hide_attributes.md",
        "layout_painting.md",
        "less_12px.md",
        "responsive_layout.md",
        "animation.md",
        "sass_less_stylus.md",
        "single_multi_line.md",
        "triangle.md",
        "visual_scrolling.md",
      ],
      //javaScript
      "/docs/JavaScript/": [
        "== _===.md",
        "ajax.md",
        "array_api.md",
        "BOM.md",
        "bind_call_apply.md",
        "cache.md",
        "closure.md",
        "context_stack.md",
        "continue_to_upload.md",
        "copy.md",
        "data_type.md",
        "debounce_throttle.md",
        "Dom.md",
        "event_loop.md",
        "event_agent.md",
        "event_Model.md",
        "function_cache.md",
        "functional_programming.md",
        "inherit.md",
        "js_data_structure.md",
        "loss_accuracy.md",
        "memory_leak.md",
        "new.md",
        "prototype.md",
        "pull_up_loading_pull_down_refresh.md",
        "regexp.md",
        "scope.md",
        "security.md",
        "single_sign.md",
        "string_api.md",
        "tail_recursion.md",
        "this.md",
        "type_conversion.md",
        "this.md",
        "typeof_instanceof.md",
        "visible.md",
      ],
      //Es6
      "/docs/es6/": [
        "array.md",
        "decorator.md",
        "function.md",
        "module.md",
        "generator.md",
        "object.md",
        "proxy.md",
        "promise.md",
        "set_map.md",
        "var_let_const.md",
      ],

      //Typescript
      "/docs/typescript/": [
        "class.md",
        "data_type.md",
        "decorator.md",
        "enum.md",
        "function.md",
        "generic.md",
        "high type.md",
        "interface.md",
        "namespace_module.md",
        "react.md",
        "typescript_javascript.md",
        "vue.md",
      ],
      //vue 
      "/docs/Vue/": [
        "vue-cli.md",
        "vue-hard.md",
        "vue-router.md",
        "vue2-easy.md",
        "vue2-mid.md",
        "vuex.md",
      ],
      //vue3
      "/docs/Vue3/": [
        "composition.md",
        "goal.md",
        "modal_component.md",
        "performance.md",
        "treeshaking.md",
      ],
      // react
      "/docs/React/": [
        "animation.md",
        "Binding events.md",
        "Building components.md",
        "capture error.md",
        "class_function component.md",
        "communication.md",
        "controlled_Uncontrolled.md",
        "diff.md",
        "Fiber.md",
        "High order components.md",
        "how to use redux.md",
        "immutable.md",
        "import css.md",
        "Improve performance.md",
        "improve_render.md",
        "JSX to DOM.md",
        "life cycle.md",
        "React Hooks.md",
        "React refs.md",
        "React Router model.md",
        "React Router.md",
        "React.md",
      ],
      //http
      "/docs/http/": [
        "1.0_1.1_2.0.md", 
        "after_url.md", 
        "CDN.md", 
        "DNS.md", 
        "GET_POST.md", 
        "handshakes_waves.md", 
        "headers.md", 
        "HTTP_HTTPS.md", 
        "HTTPS.md", 
        "OSI.md", 
        "status.md", 
        "TCP_IP.md", 
        "UDP_TCP.md", 
        "WebSocket.md", 
      ],
      //Git
      "/docs/Git/": [
        "command.md",
        "conflict.md",
        "fork_clone_branch.md",
        "git pull _git fetch.md",
        "git rebase_ git merge.md",
        "git reset_ git revert.md",
        "git stash.md",
        "Git.md",
        "HEAD_tree_index.md",
        "Version control.md",
        "git常见指令集.md",
      ],
      //浏览器
      "/docs/browser/": [
        "1.md",
        "2.md",
        "3.md",
        "4.md",
        "5.md",
        "6.md",
        "7.md",
        "8.md",
      ],
      //微信小程序
      "/docs/applet/": [
        "applet.md",
        "lifecycle.md",
        "login.md",
        "navigate.md",
        "optimization.md",
        "publish.md",
        "requestPayment.md",
        "WebView_jscore.md",
      ],
      //算法
      "/docs/algorithm/": [
        "Algorithm.md",
        "BinarySearch.md",
        "bubbleSort.md",
        "design1.md",
        "design2.md",
        "graph.md",
        "Heap.md",
        "insertionSort.md",
        "Linked List.md",
        "mergeSort.md",
        "quickSort.md",
        "selectionSort.md",
        "set.md",
        "sort.md",
        "stack_queue.md",
        "structure.md",
        "time_space.md",
        "tree.md",
      ],
      //微前端
      "/docs/other/micro-web/": [
        "qiankun.md",
        "microapp.md",
      ],
      "/docs/other/questions/": [""],
      "/docs/other/questions2/": [
        // "readme.md",
        "1.HTML.md",
        "2.CSS.md",
        "3.JavaScript1.md",
        "4.JavaScript2.md",
        "5.Vue1.md",
        "6.Vue2.md",
        "7.React1.md",
        "8.React2.md",
        "9.http.md",
        "10.browser.md",
        "11.xingnengyouhua.md",
        "12.shouxie.md",
        "13.log.md",
        "14.url.md",
        "15.JSyunxing.md",
      ],
      //node
      "/docs/server/Nodejs": [
        "A_Node笔记总纲.md",
        "Buffer.md",
        "event_loop.md",
        "EventEmitter.md",
        "file_upload.md",
        "fs copy.md",
        "fs.md",
        "global.md",
        "jwt.md",
        "middleware.md",
        "nodejs.md",
        "paging.md",
        "performance.md",
        "process.md",
        "require_order.md",
        "Stream.md",
      ],
      //java
      "/docs/server/Java/": [
        "",
      ],
      //golang
      "/docs/server/Golang/": [
        "",
      ],
      //mysql
      "/docs/server/Mysql数据库": [
        "",
      ],
      //云服务器
      "/docs/server/云服务器": [
        "",
      ],
      //aboutMe
      "/docs/aboutMe/": [""],
    },
    navbar: [
      { text: "首页", link: "/",icon: 'Home' },
      { 
        text: "前端优质项目", 
        icon: 'DocumentProtected',
        link: "/"
      },
      { 
        text: "若依框架", 
        icon: 'VolumeObjectStorage',
        children: [
          { text: "RuoYi文档", link: "https://doc.ruoyi.vip/"},
          { text: "RuoYi项目拓展", link: "https://doc.ruoyi.vip/ruoyi/document/xmkz.html"},
          { text: "RuoYi-vue项目拓展", link: "https://doc.ruoyi.vip/ruoyi-vue/document/xmkz.html"},
          { text: "RuoYi-cloud项目拓展", link: "https://doc.ruoyi.vip/ruoyi-cloud/document/xmkz.html"},
          { text: "RuoYi-app项目拓展", link: "https://doc.ruoyi.vip/ruoyi-app/document/xmkz.html"},
          { 
            text: "Vue2项目", 
            children:[
              { text: "RuoYi源码", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi", ariaLabel: "若依框架" },
              { text: "RuoYi-Vue前端分离版", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-vue", ariaLabel: "若依框架" },
              { text: "RuoYi-Cloud微服务版", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-cloud", ariaLabel: "若依框架" },
              { text: "RuoYi-App移动端版", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-app", ariaLabel: "若依框架" },
              { text: "RuoYi-fast单应用版本", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-fast", ariaLabel: "若依框架" },
              { text: "RuoYi-process工作流版本", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-process", ariaLabel: "若依框架" },
              { text: "RuoYi-activity工作流版本", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-activity", ariaLabel: "若依框架" },
              { text: "RuoYi-blog博客管理系统", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-blog", ariaLabel: "若依框架" },
              { text: "RuoYi-content内容管理系统", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-content", ariaLabel: "若依框架" },
              { text: "RuoYi-CMS的CMS信息化平台", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-yun-cms", ariaLabel: "若依框架" },
              { text: "RuoYi-windPower风电场监控项目", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-wind-power", ariaLabel: "若依框架" },
            ], 
          },
          { 
            text: "Vue3项目", 
            children:[
              { text: "RuoYi-Vue3", link: "https://gitee.com/if-according-to-the-framework_1/RuoYi-Vue3", ariaLabel: "若依框架" },
              { text: "RuoYi-Vue3-NET", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-vue3-net", ariaLabel: "若依框架" },
              { text: "RuoYi-Vue3-FastApI", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-vue3-fast-api", ariaLabel: "若依框架" },
              { text: "RuoYi-Vue3-go", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-vue3-go", ariaLabel: "若依框架" },
              { text: "RuoYi-ts", link: "https://gitee.com/if-according-to-the-framework_1/ruoyi-ts", ariaLabel: "若依框架" },
              { text: "RuoYi-Vue3-Ts", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-vue3-ts", ariaLabel: "若依框架" },
            ],
          },
          { 
            text: "App项目", 
            children:[
              { text: "RuoYi-flutter-app", link: "https://gitee.com/if-according-to-the-framework_1/ruoyi_flutter_app", ariaLabel: "若依框架" },
              { text: "RuoYi-HM-app", link: "https://gitee.com/if-according-to-the-framework_1/rou-yi-app-hm", ariaLabel: "若依框架" },
              { text: "RuoYi-Open-HM-app", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-open-hm", ariaLabel: "若依框架" },
              { text: "RuoYi-Uview2-uniapp", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-uview2", ariaLabel: "若依框架" },
              { text: "RuoYi-UviewPlus-vue3", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-uview-plus-vue3", ariaLabel: "若依框架" },
              { text: "RuoYi-uniapp-vue3", link: "https://gitee.com/if-according-to-the-framework_1/ruo-yi-uniapp-vue3", ariaLabel: "若依框架" },
            ],
          },
          
        ]
      },
      { text: "移动端", icon: 'ApplicationWeb',
        children: [
          { text: "dart", link: "/docs/dart/", ariaLabel: "移动端" },
          { text: "flutter", link: "/docs/flutter/", ariaLabel: "移动端" },
          { text: "kotlin", link: "/docs/kotlin/", ariaLabel: "移动端" },
        ]
      },
      { 
        text: "前端", 
        icon: 'ApplicationWeb',
        children: [
          { text: "Html", link: "/docs/html/", ariaLabel: "前端" },
          { text: "Css", link: "/docs/css/", ariaLabel: "前端" },
          { text: "JavaScript", link: "/docs/JavaScript/", ariaLabel: "前端" },
          { text: "Es6", link: "/docs/es6/", ariaLabel: "前端" },
          { text: "TypeScript", link: "/docs/typescript/", ariaLabel: "前端" },
          { text: "vue2",link: "/docs/Vue/", ariaLabel: "前端"  },
          { text: "vue3",link: "/docs/Vue3/", ariaLabel: "前端"  },
          { text: "React", link: "/docs/React/", ariaLabel: "前端" },
          { text: "Webpack", link: "/docs/Webpack/", ariaLabel: "前端" },
          { text: "Git", link: "/docs/Git/", ariaLabel: "前端" },
          { text: "Http", link: "/docs/http/", ariaLabel: "前端" },
          { text: "浏览器", link: "/docs/browser/", ariaLabel: "前端" },
          { text: "小程序", link: "/docs/applet/", ariaLabel: "前端" },
          { text: "web安全", link: "/docs/other/web-safe/", ariaLabel: "前端" },
          { text: "性能优化", link: "/docs/other/performance/", ariaLabel: "前端" },
          { text: "微前端", link: "/docs/other/micro-web/", ariaLabel: "前端" },
          { text: "算法", link: "/docs/algorithm/", ariaLabel: "前端" },
        ],
      },
      { 
        text: "后端",
        icon: 'ServerProxy',
        children:[
          { text: "node", link: "/docs/server/Nodejs/", ariaLabel: "后端" },
          { text: "java", link: "/docs/server/Java/", ariaLabel: "后端" },
          { text: "golang", link: "/docs/server/Golang/", ariaLabel: "后端" },
          { text: "mysql", link: "/docs/server/Mysql数据库/", ariaLabel: "后端" },
          { text: "yunServer", link: "/docs/server/云服务器/", ariaLabel: "后端" },
        ]
      },
      { text: "服务器部署", link: "/",icon: 'ServerDns' },
      { 
        text: "学习资料",
        icon: 'Document',
        children: [
          {
            text: "面试题",
            link: "/docs/other/questions/",
          },
          {
            text: "网络面试题",
            link: "/docs/other/questions2/",
          },
        ] 
      },
      {
        text: "关于我",
        icon: 'UserProfileAlt',
        link: "/docs/aboutMe/",
      },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
