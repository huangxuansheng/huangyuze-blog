# 前端安全

# 性能优化

- cdn（静态资源存放）缓存 cdn预热（可遇见的活动，比如哪个路径资源需要提前预热）：提前让cdn没有经过用户请求的时候，直接拉取原服务器资源，做一份缓存。
- cdn刷新机制
## XSS （cross-site scripting，跨站脚本攻击

攻击者想尽一切办法把恶意代码注入到网页中

### 外在表现上，有哪些攻击场景？

1. 可输入到地方植入js代码（评论区等）存储型
2. url上拼接js代码


### 技术角度上，有哪些类型的攻击（分类）？

1. 存储型 server （持久型）
    论坛发帖，商品评价，用户私信等用户保存数据的网站

- 攻击步骤：
    * 攻击者将恶意代码提交到目标网站的数据库中
    * 用户打开目标网站的时候，服务端将评论（恶意代码）从数据库取出，返回到浏览器
    * 用户浏览器收到html后，混在其中的恶意代码就会被执行
    * 窃取用户数据，发送到攻击者网站

2. 反射型 Server （非持久）

攻击者结合各种手段，诱导用户点击恶意url。通过url传参数的功能，比如网站的搜索或者跳转

- 攻击步骤：
    * 攻击者构造自己恶意的url
    * 直接执行可执行的恶意代码

3. Dom型 Browser浏览器端

取出和执行恶意代码的操作，由浏览器完成，在地址栏输入javascript代码
xss-demo网址：alf.nu/alert1
```js
const search=window.location.search;
a.href=queryObject.redirectUrl

//比如在地址栏输入以下代码 1：00
var script=document.createElement(’script’)
script=type=‘text/javascript’
scrpt.async=true
script.src=‘remote.js’//攻击者的恶意代码
var s=document.getElementByTagName(’script’)[0]
s.parent.insertBefore(script,s)
```

攻击步骤：
* url参数

### 防范xss攻击方法？
主旨：防止攻击者提交恶意代码，防止浏览器执行恶意代码


1. 转译用户内容，对数据进行严格的输入编码，比如html元素，js，css，url
    vue html
    react dangerouslyHtml
2. CSP Content Security Policy
    - default-src ‘self‘ 所有加载的内容必须来自站点同一个源（有可信的域名在后面➕    *xxx.com
3. 输入验证，严格的数据校验
4. 开启浏览器的xss防御：开启http Only Cookie
5. 验证码





    
## CSRF 跨站请求伪造
corss-site request forgery

### 攻击步骤
1. 受害者登录 a.com 并且保留了登录凭证cookie
2. 攻击者诱导用户访问另一个网站 b.com，如果没安全策略限制.
3. b.com 向 a.com 发送请求，浏览器会自动带上 a.com 的cookie
4. 攻击者在用户不知情的情况下，冒充用户在 a.com 执行了自定义操作

### 攻击类型

##### get型 ：在页面中的某个img发起一个get请求

##### post型：自动提交表单到恶意网站
##### 诱导用户点击链接

### 防范方法-csrf

csrf一般都是发生在第三方域名，攻击者无法获取到cookie信息的。

1. 同源检测
2. cookie SamSite 控制cookie策略
    - strict属性：完全禁用第三方cookie
    - Lax：post img iframe 不会携带cookie
    - None:不设置
3. ##### 提交请求的时候附加额外信息
    1. csrf token
        - 用户每次打开页面的时候，服务端利用机密算法生成token
        - 每次加载的时候，前端把获取到的token，在请求时候携带token
        - 服务端每次接受请求后，进行校验token
    2. 双重cookie
        - 用户在访问网站的时候，服务端向浏览器注入一个额外的cookie
        - 每次发送请求，拼上去，服务端在检验
        - ##### 以上这么做cookie肯定不是http only，一旦遭受css攻击，cookie被窃取到，即凉凉。
    


## HTTPS
## CSP 
内容安全策略，可以禁止加载外域的代码，禁止外域的提交
## HSTS 
强制客户端使用https与服务端建立连接
## X-Frame-Options 
控制当前页面是否被嵌入到iframe中
## SRI （subresouce intergrity 子资源的完整性，传到服务器或cdn上的资源
    1. xxx.js 注入到index.js ，并且上传到cdn
    2. 用户在请求的时候，根据xxx.js,去请求，但是这个文件可能被篡改
    3. 打包的时候根据js文件生产一个hash值，并且把hash作为intergrity属性注入到script上
    4. 当浏览器在用户端请求的时候，拿到这个文件做hash，做对比，不一样，则不安全。
## Referer-Policy（控制referer的携带策略）

## Node（服务端）相关的安全：

### 本地文件操作相关，静态资源
比如提供一个静态服务，通过请求url参数来返回用户要的数据，攻击者通过请求参数输入奇怪的路径 比如：localhost：8080/?/../../text.js来查看本不应该看到的文件

- express.static
- koa-static
- resolve-path

### ReDos 正则表达式攻击
利用正则表达式的回溯特点，每当一次匹配不成，就会尝试回溯到上一个字符，来验证能不能有其他组合来匹配这个字符串，会走很多步，占用服务器资源，造成宕机。

测试网站： regex.rip
###  时序攻击
攻击者通过不停尝试，大量推断，大量分析代码执行执行来推导出他想知道的密码或信息。
###  ip origin || referrer || request headers校验（防止爬虫）

### 实现一个截图服务
node中的：puppeter-chromium-resolver

