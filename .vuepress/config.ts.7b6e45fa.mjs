// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
var config_default = defineUserConfig({
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no,maximum-scale=1"
      }
    ]
  ],
  title: "\u524D\u7AEF\u65F6\u5149",
  description: "\u524D\u7AEF\u5C0F\u6CFD\u7684blog",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/time.jpeg",
    author: "\u524D\u7AEF\u5C0F\u6CFD",
    authorAvatar: "/time.jpeg",
    docsRepo: "https://gitee.com/huang_yuze/huangyuze-blog.git",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u65F6\u95F4",
    componentsDir: "./showHtml/demo",
    vuePreviewsDir: "./showHtml/demo",
    //展示的vue组件
    contributors: true,
    contributorsText: "\u8D21\u732E\u8005\u5217\u8868",
    toggleDarkMode: "\u5207\u6362\u4E3B\u9898",
    colorMode: "dark",
    //  默认主题颜色
    serviceWorker: {
      updatePopup: {
        message: "\u53D1\u73B0\u65B0\u5185\u5BB9\u53EF\u7528.",
        buttonText: "\u5237\u65B0"
      }
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
        "visual_scrolling.md"
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
        "visible.md"
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
        "var_let_const.md"
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
        "vue.md"
      ],
      //vue 
      "/docs/Vue/": [
        "vue-cli.md",
        "vue-hard.md",
        "vue-router.md",
        "vue2-easy.md",
        "vue2-mid.md",
        "vuex.md"
      ],
      //vue3
      "/docs/Vue3/": [
        "composition.md",
        "goal.md",
        "modal_component.md",
        "performance.md",
        "treeshaking.md"
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
        "React.md"
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
        "WebSocket.md"
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
        "git\u5E38\u89C1\u6307\u4EE4\u96C6.md"
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
        "8.md"
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
        "WebView_jscore.md"
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
        "tree.md"
      ],
      //微前端
      "/docs/other/micro-web/": [
        "qiankun.md",
        "microapp.md"
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
        "15.JSyunxing.md"
      ],
      //node
      "/docs/server/Nodejs": [
        "A_Node\u7B14\u8BB0\u603B\u7EB2.md",
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
        "Stream.md"
      ],
      //java
      "/docs/server/Java/": [
        ""
      ],
      //golang
      "/docs/server/Golang/": [
        ""
      ],
      //mysql
      "/docs/server/Mysql\u6570\u636E\u5E93": [
        ""
      ],
      //云服务器
      "/docs/server/\u4E91\u670D\u52A1\u5668\u76F8\u5173\u7B14\u8BB0": [
        ""
      ],
      //aboutMe
      "/docs/aboutMe/": [""]
    },
    navbar: [
      { text: "\u9996\u9875", link: "/", icon: "Home" },
      { text: "\u4F18\u8D28\u9879\u76EE", link: "/", icon: "DocumentProtected" },
      { text: "\u82E5\u4F9D", link: "/", icon: "VolumeObjectStorage" },
      {
        text: "\u524D\u7AEF",
        icon: "ApplicationWeb",
        children: [
          { text: "Html", link: "/docs/html/", ariaLabel: "\u524D\u7AEF" },
          { text: "Css", link: "/docs/css/", ariaLabel: "\u524D\u7AEF" },
          { text: "JavaScript", link: "/docs/JavaScript/", ariaLabel: "\u524D\u7AEF" },
          { text: "Es6", link: "/docs/es6/", ariaLabel: "\u524D\u7AEF" },
          { text: "TypeScript", link: "/docs/typescript/", ariaLabel: "\u524D\u7AEF" },
          { text: "vue2", link: "/docs/Vue/", ariaLabel: "\u524D\u7AEF" },
          { text: "vue3", link: "/docs/Vue3/", ariaLabel: "\u524D\u7AEF" },
          { text: "React", link: "/docs/React/", ariaLabel: "\u524D\u7AEF" },
          { text: "Webpack", link: "/docs/Webpack/", ariaLabel: "\u524D\u7AEF" },
          { text: "Git", link: "/docs/Git/", ariaLabel: "\u524D\u7AEF" },
          { text: "Http", link: "/docs/http/", ariaLabel: "\u524D\u7AEF" },
          { text: "\u6D4F\u89C8\u5668", link: "/docs/browser/", ariaLabel: "\u524D\u7AEF" },
          { text: "\u5C0F\u7A0B\u5E8F", link: "/docs/applet/", ariaLabel: "\u524D\u7AEF" },
          { text: "web\u5B89\u5168", link: "/docs/other/web-safe/", ariaLabel: "\u524D\u7AEF" },
          { text: "\u6027\u80FD\u4F18\u5316", link: "/docs/other/performance/", ariaLabel: "\u524D\u7AEF" },
          { text: "\u5FAE\u524D\u7AEF", link: "/docs/other/micro-web/", ariaLabel: "\u524D\u7AEF" },
          { text: "\u7B97\u6CD5", link: "/docs/algorithm/", ariaLabel: "\u524D\u7AEF" }
        ]
      },
      {
        text: "\u540E\u7AEF",
        icon: "ServerProxy",
        children: [
          { text: "node", link: "/docs/server/Nodejs/", ariaLabel: "\u540E\u7AEF" },
          { text: "java", link: "/docs/server/Java/", ariaLabel: "\u540E\u7AEF" },
          { text: "golang", link: "/docs/server/Golang/", ariaLabel: "\u540E\u7AEF" },
          { text: "mysql", link: "/docs/server/Mysql\u6570\u636E\u5E93/", ariaLabel: "\u540E\u7AEF" },
          { text: "yunServer", link: "/docs/server/\u4E91\u670D\u52A1\u5668\u76F8\u5173\u7B14\u8BB0/", ariaLabel: "\u540E\u7AEF" }
        ]
      },
      { text: "\u5F00\u53D1\u5DE5\u5177", link: "/", icon: "Tools" },
      { text: "\u670D\u52A1\u5668\u90E8\u7F72", link: "/", icon: "ServerDns" },
      {
        text: "\u5B66\u4E60\u8D44\u6599",
        icon: "Document",
        children: [
          {
            text: "\u9762\u8BD5\u9898",
            link: "/docs/other/questions/"
          },
          {
            text: "\u7F51\u7EDC\u9762\u8BD5\u9898",
            link: "/docs/other/questions2/"
          }
        ]
      },
      {
        text: "\u5173\u4E8E\u6211",
        icon: "UserProfileAlt",
        link: "/docs/aboutMe/"
      }
    ]
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
  })
  // debug: true,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L3BlcnNvbkJsb2cvaHVhbmd5dXplLWJsb2cvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxwZXJzb25CbG9nXFxcXGh1YW5neXV6ZS1ibG9nXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3BlcnNvbkJsb2cvaHVhbmd5dXplLWJsb2cvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lT3B0aW9ucyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xuaW1wb3J0IHJlY29UaGVtZSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtcmVjb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgaGVhZDogW1xuICAgIFtcImxpbmtcIiwgeyByZWw6IFwiaWNvblwiLCBocmVmOiBcIi9sb2dvLnBuZ1wiIH1dLFxuICAgIFtcbiAgICAgIFwibWV0YVwiLFxuICAgICAge1xuICAgICAgICBuYW1lOiBcInZpZXdwb3J0XCIsXG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLHVzZXItc2NhbGFibGU9bm8sbWF4aW11bS1zY2FsZT0xXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIF0sXG4gIHRpdGxlOiBcIlx1NTI0RFx1N0FFRlx1NjVGNlx1NTE0OVwiLFxuICBkZXNjcmlwdGlvbjogXCJcdTUyNERcdTdBRUZcdTVDMEZcdTZDRkRcdTc2ODRibG9nXCIsXG4gIHRoZW1lOiByZWNvVGhlbWUoe1xuICAgIHN0eWxlOiBcIkB2dWVwcmVzcy1yZWNvL3N0eWxlLWRlZmF1bHRcIixcbiAgICBsb2dvOiBcIi90aW1lLmpwZWdcIixcbiAgICBhdXRob3I6IFwiXHU1MjREXHU3QUVGXHU1QzBGXHU2Q0ZEXCIsXG4gICAgYXV0aG9yQXZhdGFyOiBcIi90aW1lLmpwZWdcIixcbiAgICBkb2NzUmVwbzogXCJodHRwczovL2dpdGVlLmNvbS9odWFuZ195dXplL2h1YW5neXV6ZS1ibG9nLmdpdFwiLFxuICAgIGRvY3NCcmFuY2g6IFwibWFpblwiLFxuICAgIGRvY3NEaXI6IFwiZXhhbXBsZVwiLFxuICAgIGxhc3RVcGRhdGVkVGV4dDogXCJcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjRcIixcbiAgICBjb21wb25lbnRzRGlyOiAnLi9zaG93SHRtbC9kZW1vJyxcbiAgICB2dWVQcmV2aWV3c0RpcjogJy4vc2hvd0h0bWwvZGVtbycsLy9cdTVDNTVcdTc5M0FcdTc2ODR2dWVcdTdFQzRcdTRFRjZcbiAgICBjb250cmlidXRvcnM6IHRydWUsXG4gICAgY29udHJpYnV0b3JzVGV4dDogXCJcdThEMjFcdTczMkVcdTgwMDVcdTUyMTdcdTg4NjhcIixcbiAgICB0b2dnbGVEYXJrTW9kZTogXCJcdTUyMDdcdTYzNjJcdTRFM0JcdTk4OThcIixcbiAgICBjb2xvck1vZGU6IFwiZGFya1wiLCAvLyAgXHU5RUQ4XHU4QkE0XHU0RTNCXHU5ODk4XHU5ODlDXHU4MjcyXG4gICAgc2VydmljZVdvcmtlcjoge1xuICAgICAgdXBkYXRlUG9wdXA6IHtcbiAgICAgICAgbWVzc2FnZTogXCJcdTUzRDFcdTczQjBcdTY1QjBcdTUxODVcdTVCQjlcdTUzRUZcdTc1MjguXCIsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiXHU1MjM3XHU2NUIwXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gc2VyaWVzIFx1NEUzQVx1NTM5RiBzaWRlYmFyXG4gICAgc2VyaWVzOiB7XG4gICAgICBzaWRlYmFyRGVwdGg6IDEsXG4gICAgICBzZXJpZXM6IFwiYXV0b1wiLFxuICAgICAgLy9jc3NcbiAgICAgIFwiL2RvY3MvY3NzL1wiOiBbXG4gICAgICAgIFwiQkZDLm1kXCIsXG4gICAgICAgIFwiYm94Lm1kXCIsXG4gICAgICAgIFwiY2VudGVyLm1kXCIsXG4gICAgICAgIFwiY29sdW1uX2xheW91dC5tZFwiLFxuICAgICAgICBcInNlbGVjdG9yLm1kXCIsXG4gICAgICAgIFwiY3NzX3BlcmZvcm1hbmNlLm1kXCIsXG4gICAgICAgIFwiY3NzM19mZWF0dXJlcy5tZFwiLFxuICAgICAgICBcImRwX3B4X2Rwcl9wcGkubWRcIixcbiAgICAgICAgXCJlbV9weF9yZW1fdmhfdncubWRcIixcbiAgICAgICAgXCJmbGV4Ym94Lm1kXCIsXG4gICAgICAgIFwiZ3JpZC5tZFwiLFxuICAgICAgICBcImhpZGVfYXR0cmlidXRlcy5tZFwiLFxuICAgICAgICBcImxheW91dF9wYWludGluZy5tZFwiLFxuICAgICAgICBcImxlc3NfMTJweC5tZFwiLFxuICAgICAgICBcInJlc3BvbnNpdmVfbGF5b3V0Lm1kXCIsXG4gICAgICAgIFwiYW5pbWF0aW9uLm1kXCIsXG4gICAgICAgIFwic2Fzc19sZXNzX3N0eWx1cy5tZFwiLFxuICAgICAgICBcInNpbmdsZV9tdWx0aV9saW5lLm1kXCIsXG4gICAgICAgIFwidHJpYW5nbGUubWRcIixcbiAgICAgICAgXCJ2aXN1YWxfc2Nyb2xsaW5nLm1kXCIsXG4gICAgICBdLFxuICAgICAgLy9qYXZhU2NyaXB0XG4gICAgICBcIi9kb2NzL0phdmFTY3JpcHQvXCI6IFtcbiAgICAgICAgXCI9PSBfPT09Lm1kXCIsXG4gICAgICAgIFwiYWpheC5tZFwiLFxuICAgICAgICBcImFycmF5X2FwaS5tZFwiLFxuICAgICAgICBcIkJPTS5tZFwiLFxuICAgICAgICBcImJpbmRfY2FsbF9hcHBseS5tZFwiLFxuICAgICAgICBcImNhY2hlLm1kXCIsXG4gICAgICAgIFwiY2xvc3VyZS5tZFwiLFxuICAgICAgICBcImNvbnRleHRfc3RhY2subWRcIixcbiAgICAgICAgXCJjb250aW51ZV90b191cGxvYWQubWRcIixcbiAgICAgICAgXCJjb3B5Lm1kXCIsXG4gICAgICAgIFwiZGF0YV90eXBlLm1kXCIsXG4gICAgICAgIFwiZGVib3VuY2VfdGhyb3R0bGUubWRcIixcbiAgICAgICAgXCJEb20ubWRcIixcbiAgICAgICAgXCJldmVudF9sb29wLm1kXCIsXG4gICAgICAgIFwiZXZlbnRfYWdlbnQubWRcIixcbiAgICAgICAgXCJldmVudF9Nb2RlbC5tZFwiLFxuICAgICAgICBcImZ1bmN0aW9uX2NhY2hlLm1kXCIsXG4gICAgICAgIFwiZnVuY3Rpb25hbF9wcm9ncmFtbWluZy5tZFwiLFxuICAgICAgICBcImluaGVyaXQubWRcIixcbiAgICAgICAgXCJqc19kYXRhX3N0cnVjdHVyZS5tZFwiLFxuICAgICAgICBcImxvc3NfYWNjdXJhY3kubWRcIixcbiAgICAgICAgXCJtZW1vcnlfbGVhay5tZFwiLFxuICAgICAgICBcIm5ldy5tZFwiLFxuICAgICAgICBcInByb3RvdHlwZS5tZFwiLFxuICAgICAgICBcInB1bGxfdXBfbG9hZGluZ19wdWxsX2Rvd25fcmVmcmVzaC5tZFwiLFxuICAgICAgICBcInJlZ2V4cC5tZFwiLFxuICAgICAgICBcInNjb3BlLm1kXCIsXG4gICAgICAgIFwic2VjdXJpdHkubWRcIixcbiAgICAgICAgXCJzaW5nbGVfc2lnbi5tZFwiLFxuICAgICAgICBcInN0cmluZ19hcGkubWRcIixcbiAgICAgICAgXCJ0YWlsX3JlY3Vyc2lvbi5tZFwiLFxuICAgICAgICBcInRoaXMubWRcIixcbiAgICAgICAgXCJ0eXBlX2NvbnZlcnNpb24ubWRcIixcbiAgICAgICAgXCJ0aGlzLm1kXCIsXG4gICAgICAgIFwidHlwZW9mX2luc3RhbmNlb2YubWRcIixcbiAgICAgICAgXCJ2aXNpYmxlLm1kXCIsXG4gICAgICBdLFxuICAgICAgLy9FczZcbiAgICAgIFwiL2RvY3MvZXM2L1wiOiBbXG4gICAgICAgIFwiYXJyYXkubWRcIixcbiAgICAgICAgXCJkZWNvcmF0b3IubWRcIixcbiAgICAgICAgXCJmdW5jdGlvbi5tZFwiLFxuICAgICAgICBcIm1vZHVsZS5tZFwiLFxuICAgICAgICBcImdlbmVyYXRvci5tZFwiLFxuICAgICAgICBcIm9iamVjdC5tZFwiLFxuICAgICAgICBcInByb3h5Lm1kXCIsXG4gICAgICAgIFwicHJvbWlzZS5tZFwiLFxuICAgICAgICBcInNldF9tYXAubWRcIixcbiAgICAgICAgXCJ2YXJfbGV0X2NvbnN0Lm1kXCIsXG4gICAgICBdLFxuXG4gICAgICAvL1R5cGVzY3JpcHRcbiAgICAgIFwiL2RvY3MvdHlwZXNjcmlwdC9cIjogW1xuICAgICAgICBcImNsYXNzLm1kXCIsXG4gICAgICAgIFwiZGF0YV90eXBlLm1kXCIsXG4gICAgICAgIFwiZGVjb3JhdG9yLm1kXCIsXG4gICAgICAgIFwiZW51bS5tZFwiLFxuICAgICAgICBcImZ1bmN0aW9uLm1kXCIsXG4gICAgICAgIFwiZ2VuZXJpYy5tZFwiLFxuICAgICAgICBcImhpZ2ggdHlwZS5tZFwiLFxuICAgICAgICBcImludGVyZmFjZS5tZFwiLFxuICAgICAgICBcIm5hbWVzcGFjZV9tb2R1bGUubWRcIixcbiAgICAgICAgXCJyZWFjdC5tZFwiLFxuICAgICAgICBcInR5cGVzY3JpcHRfamF2YXNjcmlwdC5tZFwiLFxuICAgICAgICBcInZ1ZS5tZFwiLFxuICAgICAgXSxcbiAgICAgIC8vdnVlIFxuICAgICAgXCIvZG9jcy9WdWUvXCI6IFtcbiAgICAgICAgXCJ2dWUtY2xpLm1kXCIsXG4gICAgICAgIFwidnVlLWhhcmQubWRcIixcbiAgICAgICAgXCJ2dWUtcm91dGVyLm1kXCIsXG4gICAgICAgIFwidnVlMi1lYXN5Lm1kXCIsXG4gICAgICAgIFwidnVlMi1taWQubWRcIixcbiAgICAgICAgXCJ2dWV4Lm1kXCIsXG4gICAgICBdLFxuICAgICAgLy92dWUzXG4gICAgICBcIi9kb2NzL1Z1ZTMvXCI6IFtcbiAgICAgICAgXCJjb21wb3NpdGlvbi5tZFwiLFxuICAgICAgICBcImdvYWwubWRcIixcbiAgICAgICAgXCJtb2RhbF9jb21wb25lbnQubWRcIixcbiAgICAgICAgXCJwZXJmb3JtYW5jZS5tZFwiLFxuICAgICAgICBcInRyZWVzaGFraW5nLm1kXCIsXG4gICAgICBdLFxuICAgICAgLy8gcmVhY3RcbiAgICAgIFwiL2RvY3MvUmVhY3QvXCI6IFtcbiAgICAgICAgXCJhbmltYXRpb24ubWRcIixcbiAgICAgICAgXCJCaW5kaW5nIGV2ZW50cy5tZFwiLFxuICAgICAgICBcIkJ1aWxkaW5nIGNvbXBvbmVudHMubWRcIixcbiAgICAgICAgXCJjYXB0dXJlIGVycm9yLm1kXCIsXG4gICAgICAgIFwiY2xhc3NfZnVuY3Rpb24gY29tcG9uZW50Lm1kXCIsXG4gICAgICAgIFwiY29tbXVuaWNhdGlvbi5tZFwiLFxuICAgICAgICBcImNvbnRyb2xsZWRfVW5jb250cm9sbGVkLm1kXCIsXG4gICAgICAgIFwiZGlmZi5tZFwiLFxuICAgICAgICBcIkZpYmVyLm1kXCIsXG4gICAgICAgIFwiSGlnaCBvcmRlciBjb21wb25lbnRzLm1kXCIsXG4gICAgICAgIFwiaG93IHRvIHVzZSByZWR1eC5tZFwiLFxuICAgICAgICBcImltbXV0YWJsZS5tZFwiLFxuICAgICAgICBcImltcG9ydCBjc3MubWRcIixcbiAgICAgICAgXCJJbXByb3ZlIHBlcmZvcm1hbmNlLm1kXCIsXG4gICAgICAgIFwiaW1wcm92ZV9yZW5kZXIubWRcIixcbiAgICAgICAgXCJKU1ggdG8gRE9NLm1kXCIsXG4gICAgICAgIFwibGlmZSBjeWNsZS5tZFwiLFxuICAgICAgICBcIlJlYWN0IEhvb2tzLm1kXCIsXG4gICAgICAgIFwiUmVhY3QgcmVmcy5tZFwiLFxuICAgICAgICBcIlJlYWN0IFJvdXRlciBtb2RlbC5tZFwiLFxuICAgICAgICBcIlJlYWN0IFJvdXRlci5tZFwiLFxuICAgICAgICBcIlJlYWN0Lm1kXCIsXG4gICAgICBdLFxuICAgICAgLy9odHRwXG4gICAgICBcIi9kb2NzL2h0dHAvXCI6IFtcbiAgICAgICAgXCIxLjBfMS4xXzIuMC5tZFwiLCBcbiAgICAgICAgXCJhZnRlcl91cmwubWRcIiwgXG4gICAgICAgIFwiQ0ROLm1kXCIsIFxuICAgICAgICBcIkROUy5tZFwiLCBcbiAgICAgICAgXCJHRVRfUE9TVC5tZFwiLCBcbiAgICAgICAgXCJoYW5kc2hha2VzX3dhdmVzLm1kXCIsIFxuICAgICAgICBcImhlYWRlcnMubWRcIiwgXG4gICAgICAgIFwiSFRUUF9IVFRQUy5tZFwiLCBcbiAgICAgICAgXCJIVFRQUy5tZFwiLCBcbiAgICAgICAgXCJPU0kubWRcIiwgXG4gICAgICAgIFwic3RhdHVzLm1kXCIsIFxuICAgICAgICBcIlRDUF9JUC5tZFwiLCBcbiAgICAgICAgXCJVRFBfVENQLm1kXCIsIFxuICAgICAgICBcIldlYlNvY2tldC5tZFwiLCBcbiAgICAgIF0sXG4gICAgICAvL0dpdFxuICAgICAgXCIvZG9jcy9HaXQvXCI6IFtcbiAgICAgICAgXCJjb21tYW5kLm1kXCIsXG4gICAgICAgIFwiY29uZmxpY3QubWRcIixcbiAgICAgICAgXCJmb3JrX2Nsb25lX2JyYW5jaC5tZFwiLFxuICAgICAgICBcImdpdCBwdWxsIF9naXQgZmV0Y2gubWRcIixcbiAgICAgICAgXCJnaXQgcmViYXNlXyBnaXQgbWVyZ2UubWRcIixcbiAgICAgICAgXCJnaXQgcmVzZXRfIGdpdCByZXZlcnQubWRcIixcbiAgICAgICAgXCJnaXQgc3Rhc2gubWRcIixcbiAgICAgICAgXCJHaXQubWRcIixcbiAgICAgICAgXCJIRUFEX3RyZWVfaW5kZXgubWRcIixcbiAgICAgICAgXCJWZXJzaW9uIGNvbnRyb2wubWRcIixcbiAgICAgICAgXCJnaXRcdTVFMzhcdTg5QzFcdTYzMDdcdTRFRTRcdTk2QzYubWRcIixcbiAgICAgIF0sXG4gICAgICAvL1x1NkQ0Rlx1ODlDOFx1NTY2OFxuICAgICAgXCIvZG9jcy9icm93c2VyL1wiOiBbXG4gICAgICAgIFwiMS5tZFwiLFxuICAgICAgICBcIjIubWRcIixcbiAgICAgICAgXCIzLm1kXCIsXG4gICAgICAgIFwiNC5tZFwiLFxuICAgICAgICBcIjUubWRcIixcbiAgICAgICAgXCI2Lm1kXCIsXG4gICAgICAgIFwiNy5tZFwiLFxuICAgICAgICBcIjgubWRcIixcbiAgICAgIF0sXG4gICAgICAvL1x1NUZBRVx1NEZFMVx1NUMwRlx1N0EwQlx1NUU4RlxuICAgICAgXCIvZG9jcy9hcHBsZXQvXCI6IFtcbiAgICAgICAgXCJhcHBsZXQubWRcIixcbiAgICAgICAgXCJsaWZlY3ljbGUubWRcIixcbiAgICAgICAgXCJsb2dpbi5tZFwiLFxuICAgICAgICBcIm5hdmlnYXRlLm1kXCIsXG4gICAgICAgIFwib3B0aW1pemF0aW9uLm1kXCIsXG4gICAgICAgIFwicHVibGlzaC5tZFwiLFxuICAgICAgICBcInJlcXVlc3RQYXltZW50Lm1kXCIsXG4gICAgICAgIFwiV2ViVmlld19qc2NvcmUubWRcIixcbiAgICAgIF0sXG4gICAgICAvL1x1N0I5N1x1NkNENVxuICAgICAgXCIvZG9jcy9hbGdvcml0aG0vXCI6IFtcbiAgICAgICAgXCJBbGdvcml0aG0ubWRcIixcbiAgICAgICAgXCJCaW5hcnlTZWFyY2gubWRcIixcbiAgICAgICAgXCJidWJibGVTb3J0Lm1kXCIsXG4gICAgICAgIFwiZGVzaWduMS5tZFwiLFxuICAgICAgICBcImRlc2lnbjIubWRcIixcbiAgICAgICAgXCJncmFwaC5tZFwiLFxuICAgICAgICBcIkhlYXAubWRcIixcbiAgICAgICAgXCJpbnNlcnRpb25Tb3J0Lm1kXCIsXG4gICAgICAgIFwiTGlua2VkIExpc3QubWRcIixcbiAgICAgICAgXCJtZXJnZVNvcnQubWRcIixcbiAgICAgICAgXCJxdWlja1NvcnQubWRcIixcbiAgICAgICAgXCJzZWxlY3Rpb25Tb3J0Lm1kXCIsXG4gICAgICAgIFwic2V0Lm1kXCIsXG4gICAgICAgIFwic29ydC5tZFwiLFxuICAgICAgICBcInN0YWNrX3F1ZXVlLm1kXCIsXG4gICAgICAgIFwic3RydWN0dXJlLm1kXCIsXG4gICAgICAgIFwidGltZV9zcGFjZS5tZFwiLFxuICAgICAgICBcInRyZWUubWRcIixcbiAgICAgIF0sXG4gICAgICAvL1x1NUZBRVx1NTI0RFx1N0FFRlxuICAgICAgXCIvZG9jcy9vdGhlci9taWNyby13ZWIvXCI6IFtcbiAgICAgICAgXCJxaWFua3VuLm1kXCIsXG4gICAgICAgIFwibWljcm9hcHAubWRcIixcbiAgICAgIF0sXG4gICAgICBcIi9kb2NzL290aGVyL3F1ZXN0aW9ucy9cIjogW1wiXCJdLFxuICAgICAgXCIvZG9jcy9vdGhlci9xdWVzdGlvbnMyL1wiOiBbXG4gICAgICAgIC8vIFwicmVhZG1lLm1kXCIsXG4gICAgICAgIFwiMS5IVE1MLm1kXCIsXG4gICAgICAgIFwiMi5DU1MubWRcIixcbiAgICAgICAgXCIzLkphdmFTY3JpcHQxLm1kXCIsXG4gICAgICAgIFwiNC5KYXZhU2NyaXB0Mi5tZFwiLFxuICAgICAgICBcIjUuVnVlMS5tZFwiLFxuICAgICAgICBcIjYuVnVlMi5tZFwiLFxuICAgICAgICBcIjcuUmVhY3QxLm1kXCIsXG4gICAgICAgIFwiOC5SZWFjdDIubWRcIixcbiAgICAgICAgXCI5Lmh0dHAubWRcIixcbiAgICAgICAgXCIxMC5icm93c2VyLm1kXCIsXG4gICAgICAgIFwiMTEueGluZ25lbmd5b3VodWEubWRcIixcbiAgICAgICAgXCIxMi5zaG91eGllLm1kXCIsXG4gICAgICAgIFwiMTMubG9nLm1kXCIsXG4gICAgICAgIFwiMTQudXJsLm1kXCIsXG4gICAgICAgIFwiMTUuSlN5dW54aW5nLm1kXCIsXG4gICAgICBdLFxuICAgICAgLy9ub2RlXG4gICAgICBcIi9kb2NzL3NlcnZlci9Ob2RlanNcIjogW1xuICAgICAgICBcIkFfTm9kZVx1N0IxNFx1OEJCMFx1NjAzQlx1N0VCMi5tZFwiLFxuICAgICAgICBcIkJ1ZmZlci5tZFwiLFxuICAgICAgICBcImV2ZW50X2xvb3AubWRcIixcbiAgICAgICAgXCJFdmVudEVtaXR0ZXIubWRcIixcbiAgICAgICAgXCJmaWxlX3VwbG9hZC5tZFwiLFxuICAgICAgICBcImZzIGNvcHkubWRcIixcbiAgICAgICAgXCJmcy5tZFwiLFxuICAgICAgICBcImdsb2JhbC5tZFwiLFxuICAgICAgICBcImp3dC5tZFwiLFxuICAgICAgICBcIm1pZGRsZXdhcmUubWRcIixcbiAgICAgICAgXCJub2RlanMubWRcIixcbiAgICAgICAgXCJwYWdpbmcubWRcIixcbiAgICAgICAgXCJwZXJmb3JtYW5jZS5tZFwiLFxuICAgICAgICBcInByb2Nlc3MubWRcIixcbiAgICAgICAgXCJyZXF1aXJlX29yZGVyLm1kXCIsXG4gICAgICAgIFwiU3RyZWFtLm1kXCIsXG4gICAgICBdLFxuICAgICAgLy9qYXZhXG4gICAgICBcIi9kb2NzL3NlcnZlci9KYXZhL1wiOiBbXG4gICAgICAgIFwiXCIsXG4gICAgICBdLFxuICAgICAgLy9nb2xhbmdcbiAgICAgIFwiL2RvY3Mvc2VydmVyL0dvbGFuZy9cIjogW1xuICAgICAgICBcIlwiLFxuICAgICAgXSxcbiAgICAgIC8vbXlzcWxcbiAgICAgIFwiL2RvY3Mvc2VydmVyL015c3FsXHU2NTcwXHU2MzZFXHU1RTkzXCI6IFtcbiAgICAgICAgXCJcIixcbiAgICAgIF0sXG4gICAgICAvL1x1NEU5MVx1NjcwRFx1NTJBMVx1NTY2OFxuICAgICAgXCIvZG9jcy9zZXJ2ZXIvXHU0RTkxXHU2NzBEXHU1MkExXHU1NjY4XHU3NkY4XHU1MTczXHU3QjE0XHU4QkIwXCI6IFtcbiAgICAgICAgXCJcIixcbiAgICAgIF0sXG4gICAgICAvL2Fib3V0TWVcbiAgICAgIFwiL2RvY3MvYWJvdXRNZS9cIjogW1wiXCJdLFxuICAgIH0sXG4gICAgbmF2YmFyOiBbXG4gICAgICB7IHRleHQ6IFwiXHU5OTk2XHU5ODc1XCIsIGxpbms6IFwiL1wiLGljb246ICdIb21lJyB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NEYxOFx1OEQyOFx1OTg3OVx1NzZFRVwiLCBsaW5rOiBcIi9cIixpY29uOiAnRG9jdW1lbnRQcm90ZWN0ZWQnIH0sXG4gICAgICB7IHRleHQ6IFwiXHU4MkU1XHU0RjlEXCIsIGxpbms6IFwiL1wiLCBpY29uOiAnVm9sdW1lT2JqZWN0U3RvcmFnZSd9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJcdTUyNERcdTdBRUZcIiwgXG4gICAgICAgIGljb246ICdBcHBsaWNhdGlvbldlYicsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIkh0bWxcIiwgbGluazogXCIvZG9jcy9odG1sL1wiLCBhcmlhTGFiZWw6IFwiXHU1MjREXHU3QUVGXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiQ3NzXCIsIGxpbms6IFwiL2RvY3MvY3NzL1wiLCBhcmlhTGFiZWw6IFwiXHU1MjREXHU3QUVGXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiSmF2YVNjcmlwdFwiLCBsaW5rOiBcIi9kb2NzL0phdmFTY3JpcHQvXCIsIGFyaWFMYWJlbDogXCJcdTUyNERcdTdBRUZcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJFczZcIiwgbGluazogXCIvZG9jcy9lczYvXCIsIGFyaWFMYWJlbDogXCJcdTUyNERcdTdBRUZcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJUeXBlU2NyaXB0XCIsIGxpbms6IFwiL2RvY3MvdHlwZXNjcmlwdC9cIiwgYXJpYUxhYmVsOiBcIlx1NTI0RFx1N0FFRlwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcInZ1ZTJcIixsaW5rOiBcIi9kb2NzL1Z1ZS9cIiwgYXJpYUxhYmVsOiBcIlx1NTI0RFx1N0FFRlwiICB9LFxuICAgICAgICAgIHsgdGV4dDogXCJ2dWUzXCIsbGluazogXCIvZG9jcy9WdWUzL1wiLCBhcmlhTGFiZWw6IFwiXHU1MjREXHU3QUVGXCIgIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlJlYWN0XCIsIGxpbms6IFwiL2RvY3MvUmVhY3QvXCIsIGFyaWFMYWJlbDogXCJcdTUyNERcdTdBRUZcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJXZWJwYWNrXCIsIGxpbms6IFwiL2RvY3MvV2VicGFjay9cIiwgYXJpYUxhYmVsOiBcIlx1NTI0RFx1N0FFRlwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIkdpdFwiLCBsaW5rOiBcIi9kb2NzL0dpdC9cIiwgYXJpYUxhYmVsOiBcIlx1NTI0RFx1N0FFRlwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIkh0dHBcIiwgbGluazogXCIvZG9jcy9odHRwL1wiLCBhcmlhTGFiZWw6IFwiXHU1MjREXHU3QUVGXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2RDRGXHU4OUM4XHU1NjY4XCIsIGxpbms6IFwiL2RvY3MvYnJvd3Nlci9cIiwgYXJpYUxhYmVsOiBcIlx1NTI0RFx1N0FFRlwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NUMwRlx1N0EwQlx1NUU4RlwiLCBsaW5rOiBcIi9kb2NzL2FwcGxldC9cIiwgYXJpYUxhYmVsOiBcIlx1NTI0RFx1N0FFRlwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIndlYlx1NUI4OVx1NTE2OFwiLCBsaW5rOiBcIi9kb2NzL290aGVyL3dlYi1zYWZlL1wiLCBhcmlhTGFiZWw6IFwiXHU1MjREXHU3QUVGXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2MDI3XHU4MEZEXHU0RjE4XHU1MzE2XCIsIGxpbms6IFwiL2RvY3Mvb3RoZXIvcGVyZm9ybWFuY2UvXCIsIGFyaWFMYWJlbDogXCJcdTUyNERcdTdBRUZcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTVGQUVcdTUyNERcdTdBRUZcIiwgbGluazogXCIvZG9jcy9vdGhlci9taWNyby13ZWIvXCIsIGFyaWFMYWJlbDogXCJcdTUyNERcdTdBRUZcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTdCOTdcdTZDRDVcIiwgbGluazogXCIvZG9jcy9hbGdvcml0aG0vXCIsIGFyaWFMYWJlbDogXCJcdTUyNERcdTdBRUZcIiB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiXHU1NDBFXHU3QUVGXCIsXG4gICAgICAgIGljb246ICdTZXJ2ZXJQcm94eScsXG4gICAgICAgIGNoaWxkcmVuOltcbiAgICAgICAgICB7IHRleHQ6IFwibm9kZVwiLCBsaW5rOiBcIi9kb2NzL3NlcnZlci9Ob2RlanMvXCIsIGFyaWFMYWJlbDogXCJcdTU0MEVcdTdBRUZcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJqYXZhXCIsIGxpbms6IFwiL2RvY3Mvc2VydmVyL0phdmEvXCIsIGFyaWFMYWJlbDogXCJcdTU0MEVcdTdBRUZcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJnb2xhbmdcIiwgbGluazogXCIvZG9jcy9zZXJ2ZXIvR29sYW5nL1wiLCBhcmlhTGFiZWw6IFwiXHU1NDBFXHU3QUVGXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwibXlzcWxcIiwgbGluazogXCIvZG9jcy9zZXJ2ZXIvTXlzcWxcdTY1NzBcdTYzNkVcdTVFOTMvXCIsIGFyaWFMYWJlbDogXCJcdTU0MEVcdTdBRUZcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJ5dW5TZXJ2ZXJcIiwgbGluazogXCIvZG9jcy9zZXJ2ZXIvXHU0RTkxXHU2NzBEXHU1MkExXHU1NjY4XHU3NkY4XHU1MTczXHU3QjE0XHU4QkIwL1wiLCBhcmlhTGFiZWw6IFwiXHU1NDBFXHU3QUVGXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogXCJcdTVGMDBcdTUzRDFcdTVERTVcdTUxNzdcIiwgbGluazogXCIvXCIsaWNvbjogJ1Rvb2xzJyB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NjcwRFx1NTJBMVx1NTY2OFx1OTBFOFx1N0Y3MlwiLCBsaW5rOiBcIi9cIixpY29uOiAnU2VydmVyRG5zJyB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJcdTVCNjZcdTRFNjBcdThENDRcdTY1OTlcIixcbiAgICAgICAgaWNvbjogJ0RvY3VtZW50JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlx1OTc2Mlx1OEJENVx1OTg5OFwiLFxuICAgICAgICAgICAgbGluazogXCIvZG9jcy9vdGhlci9xdWVzdGlvbnMvXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlx1N0Y1MVx1N0VEQ1x1OTc2Mlx1OEJENVx1OTg5OFwiLFxuICAgICAgICAgICAgbGluazogXCIvZG9jcy9vdGhlci9xdWVzdGlvbnMyL1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0gXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NTE3M1x1NEU4RVx1NjIxMVwiLFxuICAgICAgICBpY29uOiAnVXNlclByb2ZpbGVBbHQnLFxuICAgICAgICBsaW5rOiBcIi9kb2NzL2Fib3V0TWUvXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgLy8gYnVsbGV0aW46IHtcbiAgICAvLyAgIGJvZHk6IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIC8vICAgICAgIGNvbnRlbnQ6IGBcdUQ4M0NcdURGODlcdUQ4M0NcdURGODlcdUQ4M0NcdURGODkgcmVjbyBcdTRFM0JcdTk4OTggMi54IFx1NURGMlx1N0VDRlx1NjNBNVx1OEZEMSBCZXRhIFx1NzI0OFx1NjcyQ1x1RkYwQ1x1NTcyOFx1NTNEMVx1NUUwMyBMYXRlc3QgXHU3MjQ4XHU2NzJDXHU0RTRCXHU1MjREXHU0RTBEXHU0RjFBXHU1MThEXHU2NzA5XHU1OTI3XHU3Njg0XHU2NkY0XHU2NUIwXHVGRjBDXHU1OTI3XHU1QkI2XHU1M0VGXHU0RUU1XHU1QzNEXHU2MEM1XHU1QzFEXHU5QzlDXHU0RTg2XHVGRjBDXHU1RTc2XHU0RTE0XHU1RTBDXHU2NzFCXHU1OTI3XHU1QkI2XHU1NzI4IFFRIFx1N0ZBNFx1NTQ4QyBHaXRIdWIgXHU4RTBBXHU4REMzXHU1M0NEXHU5OTg4XHU0RjdGXHU3NTI4XHU0RjUzXHU5QThDXHVGRjBDXHU2MjExXHU0RjFBXHU1NzI4XHU3QjJDXHU0RTAwXHU2NUY2XHU5NUY0XHU1NENEXHU1RTk0XHUzMDAyYCxcbiAgICAvLyAgICAgICBzdHlsZTogXCJmb250LXNpemU6IDEycHg7XCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0eXBlOiBcImhyXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0eXBlOiBcInRpdGxlXCIsXG4gICAgLy8gICAgICAgY29udGVudDogXCJRUSBcdTdGQTRcIixcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIC8vICAgICAgIGNvbnRlbnQ6IGBcbiAgICAvLyAgICAgICA8dWw+XG4gICAgLy8gICAgICAgICA8bGk+UVFcdTdGQTQxXHVGRjFBMTAzNzI5NjEwNDwvbGk+XG4gICAgLy8gICAgICAgICA8bGk+UVFcdTdGQTQyXHVGRjFBMTA2MTU2MTM5NTwvbGk+XG4gICAgLy8gICAgICAgICA8bGk+UVFcdTdGQTQzXHVGRjFBOTYyNjg3ODAyPC9saT5cbiAgICAvLyAgICAgICA8L3VsPmAsXG4gICAgLy8gICAgICAgc3R5bGU6IFwiZm9udC1zaXplOiAxMnB4O1wiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdHlwZTogXCJoclwiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdHlwZTogXCJ0aXRsZVwiLFxuICAgIC8vICAgICAgIGNvbnRlbnQ6IFwiR2l0SHViXCIsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAvLyAgICAgICBjb250ZW50OiBgXG4gICAgLy8gICAgICAgPHVsPlxuICAgIC8vICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdnVlcHJlc3MtcmVjby92dWVwcmVzcy10aGVtZS1yZWNvLW5leHQvaXNzdWVzXCI+SXNzdWVzPGEvPjwvbGk+XG4gICAgLy8gICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92dWVwcmVzcy1yZWNvL3Z1ZXByZXNzLXRoZW1lLXJlY28tbmV4dC9kaXNjdXNzaW9ucy8xXCI+RGlzY3Vzc2lvbnM8YS8+PC9saT5cbiAgICAvLyAgICAgICA8L3VsPmAsXG4gICAgLy8gICAgICAgc3R5bGU6IFwiZm9udC1zaXplOiAxMnB4O1wiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdHlwZTogXCJoclwiLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdHlwZTogXCJidXR0b25ncm91cFwiLFxuICAgIC8vICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgIHRleHQ6IFwiXHU2MjUzXHU4RDRGXCIsXG4gICAgLy8gICAgICAgICAgIGxpbms6IFwiL2RvY3Mvb3RoZXJzL2RvbmF0ZS5odG1sXCIsXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgIF0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICBdLFxuICAgIC8vIH0sXG4gICAgLy8gY29tbWVudENvbmZpZzoge1xuICAgIC8vICAgdHlwZTogJ3ZhbGluZScsXG4gICAgLy8gICAvLyBvcHRpb25zIFx1NEUwRSAxLnggXHU3Njg0IHZhbGluZUNvbmZpZyBcdTkxNERcdTdGNkVcdTRFMDBcdTgxRjRcbiAgICAvLyAgIG9wdGlvbnM6IHtcbiAgICAvLyAgICAgLy8gYXBwSWQ6ICd4eHgnLFxuICAgIC8vICAgICAvLyBhcHBLZXk6ICd4eHgnLFxuICAgIC8vICAgICAvLyBwbGFjZWhvbGRlcjogJ1x1NTg2Qlx1NTE5OVx1OTBBRVx1N0JCMVx1NTNFRlx1NEVFNVx1NjUzNlx1NTIzMFx1NTZERVx1NTkwRFx1NjNEMFx1OTE5Mlx1NTRFNlx1RkYwMScsXG4gICAgLy8gICAgIC8vIHZlcmlmeTogdHJ1ZSwgLy8gXHU5QThDXHU4QkMxXHU3ODAxXHU2NzBEXHU1MkExXG4gICAgLy8gICAgIC8vIG5vdGlmeTogdHJ1ZSxcbiAgICAvLyAgICAgLy8gcmVjb3JkSVA6IHRydWUsXG4gICAgLy8gICAgIC8vIGhpZGVDb21tZW50czogdHJ1ZSAvLyBcdTk2OTBcdTg1Q0ZcdThCQzRcdThCQkFcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgfSksXG4gIC8vIGRlYnVnOiB0cnVlLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStSLFNBQVMsd0JBQXdCO0FBRWhVLE9BQU8sZUFBZTtBQUV0QixJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxJQUNKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLFlBQVksQ0FBQztBQUFBLElBQzNDO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFNBQ0U7QUFBQSxNQUNKO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE9BQU8sVUFBVTtBQUFBLElBQ2YsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsVUFBVTtBQUFBLElBQ1YsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsaUJBQWlCO0FBQUEsSUFDakIsZUFBZTtBQUFBLElBQ2YsZ0JBQWdCO0FBQUE7QUFBQSxJQUNoQixjQUFjO0FBQUEsSUFDZCxrQkFBa0I7QUFBQSxJQUNsQixnQkFBZ0I7QUFBQSxJQUNoQixXQUFXO0FBQUE7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLGFBQWE7QUFBQSxRQUNYLFNBQVM7QUFBQSxRQUNULFlBQVk7QUFBQSxNQUNkO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUE7QUFBQSxNQUVSLGNBQWM7QUFBQSxRQUNaO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BRUEscUJBQXFCO0FBQUEsUUFDbkI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BRUEsY0FBYztBQUFBLFFBQ1o7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUdBLHFCQUFxQjtBQUFBLFFBQ25CO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUVBLGNBQWM7QUFBQSxRQUNaO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUVBLGVBQWU7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BRUEsZ0JBQWdCO0FBQUEsUUFDZDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BRUEsZUFBZTtBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFFQSxjQUFjO0FBQUEsUUFDWjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUVBLGtCQUFrQjtBQUFBLFFBQ2hCO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BRUEsaUJBQWlCO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FB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QUFFLE1BQU0sNEJBQVEsTUFBTSw0QkFBNEIsV0FBVyxlQUFLO0FBQUEsVUFDbEUsRUFBRSxNQUFNLHNCQUFPLE1BQU0sMEJBQTBCLFdBQVcsZUFBSztBQUFBLFVBQy9ELEVBQUUsTUFBTSxnQkFBTSxNQUFNLG9CQUFvQixXQUFXLGVBQUs7QUFBQSxRQUMxRDtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixVQUFTO0FBQUEsVUFDUCxFQUFFLE1BQU0sUUFBUSxNQUFNLHdCQUF3QixXQUFXLGVBQUs7QUFBQSxVQUM5RCxFQUFFLE1BQU0sUUFBUSxNQUFNLHNCQUFzQixXQUFXLGVBQUs7QUFBQSxVQUM1RCxFQUFFLE1BQU0sVUFBVSxNQUFNLHdCQUF3QixXQUFXLGVBQUs7QUFBQSxVQUNoRSxFQUFFLE1BQU0sU0FBUyxNQUFNLHlDQUEwQixXQUFXLGVBQUs7QUFBQSxVQUNqRSxFQUFFLE1BQU0sYUFBYSxNQUFNLGtFQUEwQixXQUFXLGVBQUs7QUFBQSxRQUN2RTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEVBQUUsTUFBTSw0QkFBUSxNQUFNLEtBQUksTUFBTSxRQUFRO0FBQUEsTUFDeEMsRUFBRSxNQUFNLGtDQUFTLE1BQU0sS0FBSSxNQUFNLFlBQVk7QUFBQSxNQUM3QztBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFvRUYsQ0FBQztBQUFBO0FBRUgsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
