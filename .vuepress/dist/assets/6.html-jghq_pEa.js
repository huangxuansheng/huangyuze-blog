import{_ as i,r as c,o as l,c as o,d as n,e as s,f as e,b as t}from"./app-VnZbzlub.js";const p={},u=t(`<h1 id="前端如何实现即时通讯" tabindex="-1"><a class="header-anchor" href="#前端如何实现即时通讯" aria-hidden="true">#</a> 前端如何实现即时通讯？</h1><h3 id="短轮询" tabindex="-1"><a class="header-anchor" href="#短轮询" aria-hidden="true">#</a> 短轮询</h3><p>短轮询的原理很简单，每隔一段时间客户端就发出一个请求，去获取服务器最新的数据，一定程度上模拟实现了即时通讯。</p><ul><li>优点：兼容性强，实现非常简单</li><li>缺点：延迟性高，非常消耗请求资源，影响性能</li></ul><p>eg：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function poll() {
  setInterval(() =&gt; {
    fetch(&#39;/api/messages&#39;)
      .then(response =&gt; response.json())
      .then(messages =&gt; {
        // 更新消息列表
      });
  }, 1000); // 1秒钟请求一次
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="comet" tabindex="-1"><a class="header-anchor" href="#comet" aria-hidden="true">#</a> comet</h2><p>comet有两种主要实现手段，一种是基于 AJAX 的长轮询（long-polling）方式，另一种是基于 Iframe 及 htmlfile 的流（streaming）方式，通常被叫做长连接。</p>`,8),r={href:"http://www.52im.net/thread-334-1-1.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>长轮询优缺点：</p><ul><li>优点：兼容性好，资源浪费较小</li><li>缺点：服务器hold连接会消耗资源，返回数据顺序无保证，难于管理维护</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function longPoll() {
  fetch(&#39;/api/messages&#39;)
    .then(response =&gt; response.json())
    .then(messages =&gt; {
      // 更新消息列表
      longPoll(); // 再次发送请求
    })
    .catch(() =&gt; {
      setTimeout(longPoll, 1000); // 出错时等待 1 秒钟再次发送请求
    });
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>长连接优缺点：</p><ul><li>优点：兼容性好，消息即时到达，不发无用请求</li><li>缺点：服务器维护长连接消耗资源</li></ul><h3 id="sse" tabindex="-1"><a class="header-anchor" href="#sse" aria-hidden="true">#</a> SSE</h3>`,6),v={href:"https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>SSE（Server-Sent Event，服务端推送事件）是一种允许服务端向客户端推function longPoll() { fetch(&#39;/api/messages&#39;) .then(response =&gt; response.json()) .then(messages =&gt; { // 更新消息列表 longPoll(); // 再次发送请求 }) .catch(() =&gt; { setTimeout(longPoll, 1000); // 出错时等待 1 秒钟再次发送请求 }); }送新数据的HTML5技术。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const eventSource = new EventSource(&#39;/api/messages&#39;);
eventSource.onmessage = event =&gt; {
  const message = JSON.parse(event.data);
  // 更新消息列表
};


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>优点：基于HTTP而生，因此不需要太多改造就能使用，使用方便，而websocket非常复杂，必须借助成熟的库或框架</li><li>缺点：基于文本传输效率没有websocket高，不是严格的双向通信，客户端向服务端发送请求无法复用之前的连接，需要重新发出独立的请求</li></ul><p>!https://secure2.wostatic.cn/static/p7ZyAPsPEXoVLiiAeVzd9p/image.png?auth_key=1711245236-jvvRjZ5xh3NCimFbPmMuLH-0-7fd305a4d2045d5833c02d0cd6411d70</p><h3 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> Websocket</h3>`,5),m={href:"http://www.ruanyifeng.com/blog/2017/05/websocket.html",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>Websocket是一个全新的、独立的协议，基于TCP协议，与http协议兼容、却不会融入http协议，仅仅作为html5的一部分，其作用就是在服务器和客户端之间建立实时的双向通信。</p><ul><li>优点：真正意义上的实时双向通信，性能好，低延迟</li><li>缺点：独立与http的协议，因此需要额外的项目改造，使用复杂度高，必须引入成熟的库，无法兼容低版本浏览器</li></ul><p>!https://secure2.wostatic.cn/static/xyR9Ju6r3MR5U9vRKiLv5h/image.png?auth_key=1711245236-gUmMa3G96X8noGMixzK8VS-0-f5b30c1cadbd20cab8c514c0258775cf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const socket = new WebSocket(&#39;ws://localhost:8080&#39;);
socket.onmessage = event =&gt; {
  const message = JSON.parse(event.data);
  // 更新消息列表
};


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web-worker" tabindex="-1"><a class="header-anchor" href="#web-worker" aria-hidden="true">#</a> Web Worker</h3><p>Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行</p>`,6),h={href:"http://www.ruanyifeng.com/blog/2018/07/web-worker.html",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"service-workers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#service-workers","aria-hidden":"true"},"#"),s(" Service workers")],-1),f=n("p",null,"Service workers 本质上充当Web应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理，创建有效的离线体验。",-1),w={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API",target:"_blank",rel:"noopener noreferrer"},S=t(`<h2 id="实现websocket的代码" tabindex="-1"><a class="header-anchor" href="#实现websocket的代码" aria-hidden="true">#</a> 实现websocket的代码</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">import</span> <span class="token punctuation">{</span> getToken <span class="token punctuation">}</span> from <span class="token string">&quot;@/utils/auth&quot;</span><span class="token punctuation">;</span>
<span class="token selector">export default class MyWebSocket</span> <span class="token punctuation">{</span>
  <span class="token selector">constructor(serviceName, config =</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token selector">)</span> <span class="token punctuation">{</span>
    this.serviceName = serviceName<span class="token punctuation">;</span> // 服务名称，这个参数在后续处理中没有使用到，可能是留给以后扩展使用的；
    <span class="token comment">/**
     * 该参数是一个对象，包含了 WebSocket 对象的配置信息，它有以下属性：
     * params.url：WebSocket 连接的 url；
     * onopen：WebSocket 连接成功后的回调函数；
     * onmessage：接收到 WebSocket 收到消息时的回调函数；
     * onclose：WebSocket 连接关闭时的回调函数；
     * onerror：WebSocket 连接发生错误时的回调函数。
     * maxReconnectCount: 2, // 从连次数
     * reconnectInterval: 10000, //从连间隔
     * heartbeatInterval: 100000, // 心跳间隔
     */</span>
    this.config = config<span class="token punctuation">;</span> //
    this.protocol = config.protocol || <span class="token string">&quot;ws&quot;</span><span class="token punctuation">;</span>
    this.reconnectCount = 0<span class="token punctuation">;</span> //重连次数
    this.timer = null<span class="token punctuation">;</span> //心跳定时器
    this.ws = null<span class="token punctuation">;</span>
    this.<span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * WebSocket 连接方法
   */</span>
  <span class="token selector">connect()</span> <span class="token punctuation">{</span>
    <span class="token selector">// const wsUrl = \`$</span><span class="token punctuation">{</span>this.protocol<span class="token punctuation">}</span><span class="token selector">://$</span><span class="token punctuation">{</span>this.serviceName<span class="token punctuation">}</span>\`<span class="token punctuation">;</span>
    <span class="token selector">const wsUrl = \`$</span><span class="token punctuation">{</span>this.serviceName<span class="token punctuation">}</span>\`<span class="token punctuation">;</span>
    const token = <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    this.ws = new <span class="token function">WebSocket</span><span class="token punctuation">(</span>wsUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token selector">this.ws.onopen = (event) =&gt;</span> <span class="token punctuation">{</span>
      console.<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket 已连接！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      this.reconnectCount = 0<span class="token punctuation">;</span> //重置重连计数器
      this.<span class="token function">startHeartbeat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token selector">//开始心跳
      if (this.config.onOpen)</span> <span class="token punctuation">{</span>
        this.config.<span class="token function">onOpen</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token selector">;

    this.ws.onerror = (event) =&gt;</span> <span class="token punctuation">{</span>
      console.<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket 连接发生错误！&quot;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token selector">if (this.config.onError)</span> <span class="token punctuation">{</span>
        this.config.<span class="token function">onError</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token selector">;

    this.ws.onmessage = (event) =&gt;</span> <span class="token punctuation">{</span>
      <span class="token selector">if (this.config.onMessage)</span> <span class="token punctuation">{</span>
        this.config.<span class="token function">onMessage</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token selector">;

    this.ws.onclose = (event) =&gt;</span> <span class="token punctuation">{</span>
      console.<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket 连接已关闭！&quot;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
      this.<span class="token function">stopHeartbeat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token selector">//停止心跳
      if (this.config.onClose)</span> <span class="token punctuation">{</span>
        this.config.<span class="token function">onClose</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      this.<span class="token function">reconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * WebSocket 重连方法
   */</span>
  <span class="token selector">reconnect()</span> <span class="token punctuation">{</span>
    <span class="token selector">if (this.reconnectCount &lt; this.config.maxReconnectCount)</span> <span class="token punctuation">{</span>
      this.reconnectCount++<span class="token punctuation">;</span>
      <span class="token selector">console.log(\`WebSocket 第 $</span><span class="token punctuation">{</span>this.reconnectCount<span class="token punctuation">}</span> 次重连...\`<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token selector">setTimeout(() =&gt;</span> <span class="token punctuation">{</span>
        this.<span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> this.config.reconnectInterval<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token selector">else</span> <span class="token punctuation">{</span>
      <span class="token selector">if (this.reconnectCount != Infinity)
        console.log(
          \`WebSocket 重连超过 $</span><span class="token punctuation">{</span>this.config.maxReconnectCount<span class="token punctuation">}</span> 次，已放弃重连！\`
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * WebSocket 心跳检测方法
   */</span>
  <span class="token selector">startHeartbeat()</span> <span class="token punctuation">{</span>
    <span class="token selector">this.timer = setInterval(() =&gt;</span> <span class="token punctuation">{</span>
      <span class="token selector">if (this.ws.readyState == WebSocket.OPEN)</span> <span class="token punctuation">{</span>
        console.<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket 心跳检测...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        this.ws.<span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        // 避免重复打开定时器
        if <span class="token punctuation">(</span>this.timer == null<span class="token punctuation">)</span> return<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token selector">else</span> <span class="token punctuation">{</span>
        console.<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket 已断开连接&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> this.config.heartbeatInterval<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * WebSocket 停止心跳方法
   */</span>
  <span class="token selector">stopHeartbeat()</span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>this.timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    this.timer = null<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * 发送 WebSocket 消息
   * @param message 消息对象
   */</span>
  <span class="token selector">send(message)</span> <span class="token punctuation">{</span>
    <span class="token selector">if (!message)</span> <span class="token punctuation">{</span>
      console.<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket 消息不能为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      return<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">if (this.ws.readyState === WebSocket.OPEN)</span> <span class="token punctuation">{</span>
      this.ws.<span class="token function">send</span><span class="token punctuation">(</span>JSON.<span class="token function">stringify</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      this.<span class="token function">startHeartbeat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> //重置心跳定时器
    <span class="token punctuation">}</span> <span class="token selector">else</span> <span class="token punctuation">{</span>
      console.<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;WebSocket 连接未打开，不能发送消息！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * 关闭 WebSocket 连接
   */</span>
  <span class="token selector">close()</span> <span class="token punctuation">{</span>
    this.<span class="token function">stopHeartbeat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token selector">//停止心跳
    if (this.ws.readyState === WebSocket.OPEN)</span> <span class="token punctuation">{</span>
      this.reconnectCount = Infinity
      this.ws.<span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function _(W,x){const a=c("ExternalLinkIcon");return l(),o("div",null,[u,n("p",null,[s("具体两种手段的操作方法请移步"),n("a",r,[s("Comet技术详解：基于HTTP长连接的Web端实时通信技术"),e(a)])]),d,n("p",null,[s("使用指南请看"),n("a",v,[s("Server-Sent Events 教程"),e(a)])]),k,n("p",null,[s("使用指南请看"),n("a",m,[s("WebSocket 教程"),e(a)])]),b,n("p",null,[n("a",h,[s("Web Worker教程"),e(a)])]),g,f,n("p",null,[n("a",w,[s("Service workers教程"),e(a)])]),S])}const C=i(p,[["render",_],["__file","6.html.vue"]]);export{C as default};
