import{_ as l,r as a,o as d,c as r,d as n,e,f as s,b as c}from"./app-bTNKyK6n.js";const t={},v=c(`<h1 id="什么是浏览器同源策略" tabindex="-1"><a class="header-anchor" href="#什么是浏览器同源策略" aria-hidden="true">#</a> 什么是浏览器同源策略？</h1><p>同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。</p><p>同源是指&quot;协议+域名+端口&quot;三者相同，即便两个不同的域名指向同一个ip地址，也非同源。</p><p>下表给出了相对http://store.company.com/dir/page.html同源检测的示例:</p><p>!https://secure2.wostatic.cn/static/dnnuCAGe56xANBrzafvaDK/image.png?auth_key=1711245256-7EU3aUAfnqkHbZHc4t6Stz-0-b19ad4cb54ed0cfc556a910d1477ba44</p><p>浏览器中的大部分内容都是受同源策略限制的，但是以下三个标签可以不受限制：</p><ul><li><code>&lt;img src=XXX&gt;</code></li><li><code>&lt;link href=XXX&gt;</code></li><li><code>&lt;script src=XXX&gt;</code></li></ul><h2 id="如何实现跨域" tabindex="-1"><a class="header-anchor" href="#如何实现跨域" aria-hidden="true">#</a> 如何实现跨域？</h2><p>跨域是个比较古老的命题了，历史上跨域的实现手段有很多，我们现在主要介绍三种比较主流的跨域方案，其余的方案我们就不深入讨论了，因为使用场景很少，也没必要记这么多奇技淫巧。</p><h3 id="最经典的跨域方案jsonp" tabindex="-1"><a class="header-anchor" href="#最经典的跨域方案jsonp" aria-hidden="true">#</a> 最经典的跨域方案jsonp</h3><p>jsonp本质上是一个Hack，它利用<code>&lt;script&gt;</code>标签不受同源策略限制的特性进行跨域操作。</p><p>jsonp优点：</p><ul><li>实现简单</li><li>兼容性非常好</li></ul><p>jsonp的缺点：</p><ul><li>只支持get请求（因为<code>&lt;script&gt;</code>标签只能get）</li><li>有安全性问题，容易遭受xss攻击</li><li>需要服务端配合jsonp进行一定程度的改造</li></ul><p>jsonp的实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function JSONP({
  url,
  params,
  callbackKey,
  callback
}) {
  // 在参数里制定 callback 的名字
  params = params || {}
  params[callbackKey] = &#39;jsonpCallback&#39;
    // 预留 callback
  window.jsonpCallback = callback
    // 拼接参数字符串
  const paramKeys = Object.keys(params)
  const paramString = paramKeys
    .map(key =&gt; \`\${key}=\${params[key]}\`)
    .join(&#39;&amp;&#39;)
    // 插入 DOM 元素
  const script = document.createElement(&#39;script&#39;)
  script.setAttribute(&#39;src&#39;, \`\${url}?\${paramString}\`)
  document.body.appendChild(script)
}

JSONP({
  url: &#39;&lt;http://s.weibo.com/ajax/jsonp/suggestion&gt;&#39;,
  params: {
    key: &#39;test&#39;,
  },
  callbackKey: &#39;_cb&#39;,
  callback(result) {
    console.log(result.data)
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最流行的跨域方案cors" tabindex="-1"><a class="header-anchor" href="#最流行的跨域方案cors" aria-hidden="true">#</a> 最流行的跨域方案cors</h3><p>cors是目前主流的跨域解决方案，跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器 让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。</p><p>如果你用express，可以这样在后端设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header(&#39;Access-Control-Allow-Origin&#39;, &#39;&lt;http://example.com&gt;&#39;);
    res.header(&#39;Access-Control-Allow-Methods&#39;, &#39;GET,PUT,POST,DELETE&#39;);
    res.header(&#39;Access-Control-Allow-Headers&#39;, &#39;Content-Type&#39;);

    next();
}

//...
app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({ secret: &#39;cool beans&#39; }));
    app.use(express.methodOverride());
    app.use(allowCrossDomain);
    app.use(app.router);
    app.use(express.static(__dirname + &#39;/public&#39;));
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在生产环境中建议用成熟的开源中间件解决问题。</p><h3 id="最方便的跨域方案nginx" tabindex="-1"><a class="header-anchor" href="#最方便的跨域方案nginx" aria-hidden="true">#</a> 最方便的跨域方案Nginx</h3><p>nginx是一款极其强大的web服务器，其优点就是轻量级、启动快、高并发。</p><p>现在的新项目中nginx几乎是首选，我们用node或者java开发的服务通常都需要经过nginx的反向代理。</p><p>!https://secure2.wostatic.cn/static/xC3PJprcdFF1DzHW4SQsx/image.png?auth_key=1711245256-41aBKi7bM5hXVRT35KMYxR-0-e41e49063e0eb1502da0e65849742648</p><p>反向代理的原理很简单，即所有客户端的请求都必须先经过nginx的处理，nginx作为代理服务器再讲请求转发给node或者java服务，这样就规避了同源策略.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#进程, 可根据cpu数量调整
worker_processes  1;

events {
    #连接数
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    #连接超时时间，服务器会在这个时间过后关闭连接。
    keepalive_timeout  10;

    # gizp压缩
    gzip  on;

    # 直接请求nginx也是会报跨域错误的这里设置允许跨域
    # 如果代理地址已经允许跨域则不需要这些, 否则报错(虽然这样nginx跨域就没意义了)
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Headers X-Requested-With;
    add_header Access-Control-Allow-Methods GET,POST,OPTIONS;

    # srever模块配置是http模块中的一个子模块，用来定义一个虚拟访问主机
    server {
        listen       80;
        server_name  localhost;

        # 根路径指到index.html
        location / {
            root   html;
            index  index.html index.htm;
        }

        # localhost/api 的请求会被转发到192.168.0.103:8080
        location /api {
            rewrite ^/b/(.*)$ /$1 break; # 去除本地接口/api前缀, 否则会出现404
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass &lt;http://192.168.0.103:8080&gt;; # 转发地址
        }

        # 重定向错误页面到/50x.html
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其它跨域方案" tabindex="-1"><a class="header-anchor" href="#其它跨域方案" aria-hidden="true">#</a> 其它跨域方案</h3><p>1.HTML5 XMLHttpRequest 有一个API，postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递</p><p>2.WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了，因此可以跨域。</p>`,31),o={href:"http://window.name/",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"4.location.hash + iframe：a.html欲与c.html跨域相互通信，通过中间页b.html来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。",-1),u={href:"http://a.test.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://b.test.com/",target:"_blank",rel:"noopener noreferrer"},p={href:"http://test.com/",target:"_blank",rel:"noopener noreferrer"};function h(x,_){const i=a("ExternalLinkIcon");return d(),r("div",null,[v,n("p",null,[e("3."),n("a",o,[e("window.name"),s(i)]),e(" + iframe：window.name属性值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值，我们可以利用这个特点进行跨域")]),m,n("p",null,[e("5.document.domain + iframe： 该方式只能用于二级域名相同的情况下，比如 "),n("a",u,[e("a.test.com"),s(i)]),e(" 和 "),n("a",b,[e("b.test.com"),s(i)]),e(" 适用于该方式，我们只需要给页面添加 document.domain ='"),n("a",p,[e("test.com"),s(i)]),e("' 表示二级域名都相同就可以实现跨域，两个页面都通过js强制设置document.domain为基础主域，就实现了同域。")])])}const f=l(t,[["render",h],["__file","7.html.vue"]]);export{f as default};
