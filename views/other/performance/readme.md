# 性能优化

做性能优化的目的？

1. 首屏时间（比如刷新后的白屏）
2. 首次可交互时间 （比如输入框验证码）
3. 首次有意义内容渲染时间

## 从输入URL到页面加载的过程

* url解析：判断输入是关键字搜索还是url访问，对url进行解析
  - URL一般包括几大部分：
    - protocol，协议头，譬如有http，ftp等
    - host，主机域名或IP地址
    - port，端口号
    - path，目录路径
    - query，即查询参数
    - fragment，即#后的hash值，一般用来定位到某个位置

* 开启网络线程
* dns查询：域名解析得到IP。
    
  DNS查找过程为： 浏览器缓存->系统缓存->路由器缓存->ISP DNS缓存->递归搜索 

  递归搜索过程为：从根域名服务器到顶级域名服务器到所查询的域名服务器

  - 如果浏览器有缓存，直接使用浏览器缓存，否则使用本机缓存，再没有的话就是用系统缓存host
  - 向本地DNS服务器发送查询报文
  - 本地DNS服务器检查自身缓存，存在返回，不存在向根域名服务器发送查询报文，得到顶级域的顶级域名服务器地址
  - 查询到对应的IP
  - 使用IP建立TCP链接（三次握手）
* 建立TCP链接-三次握手
  - 第一次握手： 建立连接时，客户端发送SYN标记的数据包（syn=j）到服务器，并进入SYN_SENT状态，等待服务器确认；
  - 第二次握手： 服务器收到SYN标记的数据包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；
  - 第三次握手： 客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。

* http请求
发送http请求，服务器响应，缓存判断（强缓存和协商缓存304）
  - 请求：发送命令+发送请求头信息+空白行+请求体（post）
  - 响应：响应状态 + 响应头+空白行+响应体
  - 强缓存：cache-control（max-age）、Expires
  - 协商缓存：返回Etag、Last-modified和请求IF-none-match、IF-modified-since

* 浏览器解析渲染页面

  - 解析HTML，构建dom树，词法分析和语法分析
  - 加载外部js脚本和样式表文件;（预扫描)
  - 解析并执行js脚本;
  - 解析css，生成css规则树，从右往左解析
  - 合并DOM树和CSS规则树，生成render树
  - 布局render树，根据render节点的类型，确定元素大小和位置
  - 绘制render树，绘制页面像素信息
  - dom树构建完成- html解析完毕(完成后触发 onready ->即DOMContentLoaded) 
  - 加载图片等外部文件(完成后触发图片onload ) 
  - 浏览器将各层的信息发送给GUI，GUI将各层合成，展示在屏幕上
  - 细化流程：构件dom树、构建sytle Rules、样式计算、创建布局树、分层、绘制、分块和光栅化、合成和显示
  - 渲染是在渲染进程执⾏的，渲染进程分为渲染主线程、光栅线程、合成线程等
  - 从分块阶段开始，包括分块、光栅化、合成这三步是在⾮主渲染线程执⾏
  - 重排、重绘、合成：开发中尽量减少重排重绘
  - 重排：改变了 DOM 元素的⼏何位置属性，⽐如宽度、⾼度，那么就会触发重新布局（Layout 阶段），及之后的⼦阶段；重排需要更新完整的流⽔线，开销也⽐较⼤
  - 重绘：通过CSS 或 JS 改变了⾮ DOM 元素的⼏何位置属性，⽐如背景⾊、边框⾊等；那么会跳过布局、分层阶段，直接到绘制阶段，执⾏效率⽐重排⾼⼀些
  - 合成：CSS3 动画，⽐如transform，直接在合成线程上合成动画操作，效率⽐较⾼
  - 页面加载完毕(完成后触发页面onload)


* 连接结束关闭TCP链接（四次挥手）
  - 第一次挥手是浏览器发完数据后，发送FIN请求断开连接，进入FIN_WAIT_1状态
  - 第二次挥手是服务器收到FIN报文，返回ACK报文段表示同意，进入FIN_WAIT_2状态
  - 第三次挥手是服务器发送FIN报文请求关闭连接，进入LAST_ACK状态
  - 第四次挥手是浏览器收到FIN报文段，向服务器发送ACK报文段，进入TIME_WAIT状态。服务器接收到ACK报文关闭连接，浏览器等待一段时间后，表示服务器已关闭连接，也关闭连接。

## 性能优化

### vue框架层面
1. 减少data中的数据，因为会增加getter、setter，会手机对应的watcher
2. v-if和v-for不能连用
3. 可以采用keep-alive缓存组件
4. 一些业务情况，可以使用vif代替vshow
5. key保证唯一，有利于diff算法更好做对比
6. 使用路由懒加载，异步组件+webpack的ensure()
7. 第三方模块按需引入
  

### js层面
1. 可以使用事件委托代替给每一个原生都绑定事件
2. 滚动或输入框等事件，可以结合节流、防抖
3. 图片懒加载，列表滚动到可视区域动态加载
4. 组件销毁清除定时器
5. 垃圾回收机制方面：减少全局变量，少用闭包
6. 减少http请求，或者合并http请求，用promise.all

### css层面
1. 减少回流与重绘
2. 减少CSS代码的层级，因为选择器是从左向右进行解析的
3. 尽量不要使用table布局， 一个小的改动可能会使整个table进行重新布局
4. 不要频繁操作元素的样式，对于静态页面，可以修改类名，而不是样式。
5. 使用iconfont代替小图，或者css雪碧图
### html层面
1. HTML文件的代码层级尽量不要太深
2. 使用语义化的标签，来避免不标准语义化的特殊处理
### seo优化
1. 服务端渲染SSR

## webpack方面

> 分为运行时优化 和打包时的优化

1. 压缩代码（css压缩 图片压缩 ）
   1. 使用uglifyjs-webpack-plugin实现js压缩
2. tree Shaking
3. 使用cdn加载第三方模块
4. 多线程打包 happypack
5. splitChunks抽离公共文件
6. sourceMap优化
7. 代码分割 做缓存

开启nginx的zip
### 合理利用缓存
1. cdn cdn预热（不通过访问，提前预热） cdn刷新（原站更新了，强制去cdn）
2. 对于一些服务器不需要的 可以session或location存 减少cookie存 
3.  http缓存，对于一些不经常更新的数据，最好采用浏览器的304做协商缓存
## 前端的性能优化

页面性能检测: https://developers.google.com/speed/pagespeed/insights/ 

1. 只请求当前需要的资源
    路由异步加载, 图片懒加载, polyfill的优化(可以做低版本适配) 

    [(只引入需要的，cnd链接,实现对polyfill的按需加载)](https://polyfill.io/v3/url-builder/)
    
2. 缩减资源体积
    - 打包压缩 webpack4已经内置了
    - gzip 一种压缩的算法，压缩静态资源的，后端node或者nginx可以开启
    - 图片格式优化, 压缩(https://tinypng.com/), 根据屏幕分辨率展示不同分辨率的图片,webp可以无损压缩
    - 尽量控制cookie大小(每一个请求都会带cookie)
3. 时序优化
    - js中promise.all去并发的发请求
    - ssr-把打包放在服务端进行渲染，也方便seo
    - prefetch、prerender、preload
    - <link rel="dns-prefetch" href="xxxxxx" /> 立刻去请求dns
    - <link rel="preconnect" href="xxxxxxx" /> 域连接，访问域名的时候
    - <link rel="preload" as="image" href="xxxxxxxxx" /> 预加载
4. 合理利用缓存
    cdn cdn预热（不通过访问，提前预热） cdn刷新（原站更新了，强制去cdn）
    http缓存
    localStorage, sessionStorage

### 如果⼀段js执行时间非常长, 怎么去分析?

装饰器装饰一下
```ts
export function measure(target: any, name: string, descriptor: any) {
  const oldValue = descriptor.value;

  descriptor.value = async function() {
    console.time(name);
    const ret = await oldValue.apply(this, arguments);
    console.timeEnd(name);
    return ret;
  };

  return descriptor;
}

//使用
export default class Home extends Vue {
    public longTimefn() {
        return new Promise((resolve) => setTimeout(resolve, 3000));
    }

    @measure
    public async created() {
        await this.longTimefn();
    }
}
```


### 阿⾥云oss⽀持通过链接后拼参数实现图⽚格式转换, 尝试写⼀下, 把图⽚转为webp格式? 需要注意什么?

首先判断浏览器支不支持webp,处理边界
[caniuse](https://caniuse.com/)

```js
function checkWebp() {
    try {
        return (
            document
                .createElement('canvas')//创建canvas元素
                .toDataURL('image/webp')//转成base64
                .indexOf('data:image/webp') === 0//转成之后查找有没有data:image/webp，有就是转成了
        );
    } catch (err) {
        return false;
    }
}

const supportWebp = checkWebp();

export function getWebpImageUrl(url) {
    if (!url) {
        throw Error(url, 'url不能为空');
    }
    if (url.startsWith('data:')) {//是否是base64格式
        return url;
    }
    if (!supportWebp) {
        return url;
    }
    return url + '?x-oss-process=image/format,webp';
}
```

### 如果有巨量的图片需要展示在页面, 除了懒加载这种方式, 还有什么好的方法限制其同一时间加载的数量?

代码题, 使用promise实现并发控制
    
```js
function limitLoad(urls, handler, limit) {
    // 对数组做一个拷贝
    const sequence = [].concat(urls)
    let promises = [];//执行池子

    //并发请求到最大数
    promises = sequence.splice(0, limit).map((url, index) => {
        // 这里返回的 index 是任务在 promises 的脚标，
        //用于在 Promise.race 之后找到完成的任务脚标
        return handler(url).then(() => {
            return index
        });
    });

    let p = Promise.race(promises);//传入promise数组，返回第一个执行成功的结果
    for (let i = 0; i < sequence.length; i++) {
        p = p.then((res) => {
            promises[res] = handler(sequence[i]).then(() => {
                return res
            });
            return Promise.race(promises)
        })
    }
}

const urls = [{
    info: 'link1',
    time: 3000
},
{
    info: 'link2',
    time: 2000
},
{
    info: 'link3',
    time: 5000
},
{
    info: 'link4',
    time: 1000
},
{
    info: 'link5',
    time: 1200
},
{
    info: 'link6',
    time: 2000
},
{
    info: 'link7',
    time: 800
},
{
    info: 'link8',
    time: 3000
},
];

// 设置我们要执行的任务
function loadImg(url) {
    return new Promise((resolve, reject) => {
        console.log("----" + url.info + " start!");
        setTimeout(() => {
            console.log(url.info + " OK!!!");
            resolve();
        }, url.time)
    })
};

limitLoad(urls, loadImg, 3)
```


## 前端的内存处理

内存声明周期：分配，使用，垃圾回收机制回收

### js 的垃圾回收机制

- 引用计数法
  - 看一个对象是否有指向他的引用。如果没有其他对象指向他了，说明这个对象不再被需要了
  - 但是如果是循环引用，引用计数法会无法识别，导致内存泄露
- 标记清除法

  - 标记清除算法将“不再使用的对象”定义为“无法达到的对象”。
  - 简单来说，就是从根部（在 JS 中就是全局对象）出发定时扫描内存中的对象。 凡是能从根部到达的对象，都是还需要使用的。 那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。

    1. 垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记。
    2. 从根部出发将能触及到的对象的标记清除。
    3. 那些还存在标记的变量被视为准备删除的变量。
    4. 最后垃圾收集器会执行最后一步内存清除的工作，销毁那些带标记的值并回收它们所占用的内存空间。

### 常见的内存泄露

1. 万恶的全局变量
2. 未被清理的定时器和回调函数
3. 闭包
   一个内部函数，有权访问外部函数的变量

   ```js
   var theThing = null;
   var replaceThing = function() {
     var originalThing = theThing;
     console.log(originalThing);
     var unused = function() {
       //没被用到
       if (originalThing)
         // 对于 'originalThing'的引用
         console.log("hi");
     };
     theThing = {
       longStr: new Array(1000000).join("*"),
       someMethod: function() {
         console.log("message");
       },
     };
   };
   setInterval(replaceThing, 1000);
   ```

   定时器每次调用 replaceThing 的时候，会得到很长的 longStr 字符串和一个对于新闭包 someMethod 对象

   关键在于，闭包之间是共享作用域的，nused 引用了 originalThing，虽然 unused 可能一直没有被调用，但是 someMethod 可能会被调用，
   就会导致无法对其内存进行回收。 当这段代码被反复执行时，内存会持续增长。

4. DOM 引用

```js
var elements = {
  image: document.getElementById("image"),
};
function doStuff() {
  elements.image.src = "http://example.com/image_name.png";
}
function removeImage() {
  document.body.removeChild(document.getElementById("image"));
  // 这个时候我们对于 #image 仍然有一个引用, Image 元素, 仍然无法被内存回收.
}
```

上述案例中，即使我们对于 image 元素进行了移除，但是仍然有对 image 元素的引用，依然无法对齐进行内存回收。

### 避免内存泄露？

- 尽量减少全局变量，使用严格模式避免意外创建全局变量。
- 使用完数据后，及时解除引用（闭包中的变量，dom 引用，定时器清除）。

### 实现一个 sizeOf 函数。接收一个对象，计算传入的对象占用的字节数

```js
function calculator(object) {}

const testObj = {
  a: 1111,
  b: "ccc",
  2222: false,
};

console.log(calculator(testObj));
```

> 解答

```js
var myWeakSet = new WeakSet();
function objSize(object) {
  if (object === null) {
    return 0;
  }
  let bytes = 0;
  let properties = Object.keys(object); //拿到key
  for (let i = 0; i < properties.length; i++) {
    const element = properties[i];
    if (typeof object[element] === "object" && object[element] !== null) {
      if (myWeakSet.has(object[element])) {
        continue;
      }
      myWeakSet.add(object[element]);
    }
    bytes += calculator(object[element]); //value
    bytes += calculator(element); //key
  }

  return bytes;
}

function calculator(object) {
  /**
   * string 每个长度占2字节
   * number 8字节
   * boolean 4字节
   * 数组：数组内的元素相加
   * 对象：分别拿到key和value分别计算 判断value的时候需要判断：
   *      是不是两个key引用的同一个对象
   */
  let objType = typeof object;

  switch (objType) {
    case "string":
      return object.length * 2;
    case "number":
      return 8;
    case "boolean":
      return 4;
    case "object":
      if (Array.isArray(object)) {
        //map中的calculator等于： item => { return calculator(item) }
        return object.map(calculator).reduce((a, b) => {
          return a + b;
        }, 0);
      } else {
        return objSize(object);
      }
    default:
      return 0;
  }
}

const obj2 = {
  A: 132,
  B: [1, 2, 3],
}; //占用 2+8+2+24=36

const testObj = {
  a: obj2,
  b: obj2,
  c: [1, 0, false],
};

console.log(calculator(testObj));
```

