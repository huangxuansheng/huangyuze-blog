import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  base: "/",
  // head: [
  //   ['script', {
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9768010798351723',
  //     vcrossorigin: 'anonymous',
  //     'async': 'async',
  //   }]
  // ],
  open: false,
  title: "前端时光",
  description: "Just playing around",
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
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新",
      },
    },
    // series 为原 sidebar
    series: {
      //vue 开始
      // 原理
      "/docs/Vue/vue-hard/": [""],
      "/docs/Vue/vuex/": [""],
      "/docs/Vue/vue-router/": ["readme.md"],
      "/docs/Vue/vue2-easy/": [""],
      "/docs/Vue/vue2-mid/": [""],
      "/docs/Vue/vue-cli/": [""],
      //vue 结束
      // react
      "/docs/React/": [""],
      //微前端
      "/docs/other/micro-web/": [""],
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
      //aboutMe
      "/docs/aboutMe/": [""],
    },
    navbar: [
      { text: "首页", link: "/" },
      { text: "优质项目", link: "/" },
      { text: "若依", link: "/" },
      { 
        text: "前端", 
        children: [
          { text: "Html", link: "/", ariaLabel: "前端" },
          { text: "Css", link: "/", ariaLabel: "前端" },
          { text: "JavaScript、Es6", link: "/", ariaLabel: "前端" },
          { text: "TypeScript", link: "/docs/other/typescript/", ariaLabel: "前端" },
          { 
            text: "vue2、Vue3",
            children: [
              { text: "vue2基础", link: "/docs/Vue/vue2-easy/" }, // 可不写后缀 .md
              { text: "vue2进阶", link: "/docs/Vue/vue2-mid/" },
              { text: "vue-cli", link: "/docs/Vue/vue-cli/" },
              { text: "vue-理解", link: "/docs/Vue/vue-hard/" },
              { text: "vuex", link: "/docs/Vue/vuex/" },
              { text: "vue-router", link: "/docs/Vue/vue-router/" },
            ],  
            ariaLabel: "前端" },
          { text: "React", link: "/docs/React/", ariaLabel: "前端" },
          { text: "Http、浏览器", link: "/", ariaLabel: "前端" },
          { text: "web安全", link: "/docs/other/web-safe/", ariaLabel: "前端" },
          { text: "性能优化", link: "/docs/other/performance/", ariaLabel: "前端" },
          { text: "微前端", link: "/docs/other/micro-web/", ariaLabel: "前端" },
        ],
      },
      { text: "后端", link: "/" },
      { text: "开发工具", link: "/" },
      { text: "服务器部署", link: "/" },
      { 
        text: "学习资料", 
        children: [
          {
            text: "面试题",
            link: "/docs/other/questions/",
            ariaLabel: "分类",
          },
          {
            text: "网络面试题",
            link: "/docs/other/questions2/",
            ariaLabel: "分类",
          },
          {
            text: "我的CSDN",
            link: "https://blog.csdn.net/weixin_46820017?type=blog",
          },
        ] 
      },
      {
        text: "关于我",
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
