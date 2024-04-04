
# 面试题

## 用 setTimeout 实现 setInterval

```js
let timer = null;
function mockSetInterval(fn, time, ...arg) {
  const recur = function() {
    timer = setTimeout(() => {
      fn.call(this, ...arg);
      recur();
    }, time);
  };
  recur();
}
function mockClear() {
  clearInterval(timer);
}

//定时器启动
mockSetInterval(
  (val) => {
    console.log("start", val);
  },
  1000,
  999
);

// 5s后clear定时器
setTimeout(() => {
  mockClear(timer);
}, 5000);
```

> 另一种实现方法 class

```js
class MockSet {
  constructor(fn, time, ...arg) {
    this.fn = fn;
    this.time = time;
    this.arg = arg;
    this.timer = null;
    (() => {
      const recur = () => {
        this.timer = setTimeout(() => {
          this.fn.apply(this, this.arg);
          recur();
        }, this.time);
      };
      recur();
    })();
  }
  clearInterval() {
    clearInterval(this.timer);
  }
}

var myset = new MockSet(
  (val) => {
    console.log(132, val);
  },
  1000,
  ["传的参数", 123, 43, 654]
);

setTimeout(() => {
  myset.clearInterval();
}, 4000);
```

## 实现红绿灯

要求使用一个 div 实现红绿灯效果, 把一个圆形 div 按照绿色 3 秒，黄色 1 秒，红色 2 秒循环改变背景色。

Tips: 也可以尝试使用 setTimeout 嵌套/promise 链式调用 分别实现一下

```js
const colorConfig = {
  green: 3000,
  yellow: 1000,
  red: 2000,
};
var delay = (time) => {
  return new Promise((res, rej) => {
    setTimeout(res, time);
  });
};
var changeColor = async (dom, color, time) => {
  dom.style.background = color;
  await delay(time);
};
var box = document.getElementById("box");
var run = async () => {
  for (const key in colorConfig) {
    await changeColor(box, key, colorConfig[key]);
  }
  run();
};
run();
```


## 闭包

1. 创建私有变量
2. 延长变量的生命周期



## EventBus-发布订阅模式

比如 Vue 的 event bus, node 的 eventemitter3

### 1. 这种模式, 事件的触发和回调之间是同步的还是异步的?

eventemitter3 是同步的，一般是同步的

### 2. 实现一个简单的 EventEmitter 并设置设置最大监听数?

包含：
on 添加监听
emit 触发
once 执行一次监听
off 解除监听

```js
class EventEmitter {
  constructor(options = {}) {
    this.events = {}; //存  {add：[cb1,cb2]}
    this.maxListeners = options.maxListeners || Infinity;
  }
  // 触发监听
  emit(event, ...args) {
    const cbs = this.events[event];

    if (!cbs) {
      console.warn(event, "哒咩这个事件");
      return this;
    }
    cbs.forEach((element) => {
      element.call(this, ...args);
    });
  }
  // 订阅监听
  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    if (
      this.maxListeners !== Infinity &&
      this.maxListeners <= this.events[event].length
    ) {
      console.warn(event, "超过最大监听数");
      return this;
    }
    this.events[event].push(cb);
    return this;//链式调用 所以return this
  }
  // 只会触发一次
  once(event, cb) {
    const func = (...args) => {
      this.off(event, func);
      cb.call(this, ...args);
    };
    this.on(event, func);
    return this;
  }
  // 关闭监听
  off(event, cb) {
    if (!cb) {
      this.events[event] = null;
    } else {
      this.events[event] = this.events[event].filter((item) => item !== cb);
    }
    return this;
  }
}

const add = (a, b) => console.log(a + b);
const log = (...args) => console.log(...args);
const myEvent = new EventEmitter({ maxListeners: 2 });

//测试超过最大监听数
myEvent.on("test", (val) => {
  console.log(1, val);
});
myEvent.on("test", (val) => {
  console.log(2, val);
});
myEvent.on("test", (val) => {
  console.log(3, val);
});
myEvent.on("test", (val) => {
  console.log(4, val);
});
myEvent.emit("test", "测试最大监听");

myEvent.on("log", log);
myEvent.emit("add", 1, 2); // 3
myEvent.emit("log", "hi~"); // 'hi~'
myEvent.off("add");
myEvent.emit("add", 1, 2); // Error: add event is not registered.
myEvent.once("once", add);
myEvent.emit("once", 1, 2); // 3
myEvent.emit("once", 1, 2);
myEvent.emit("once", 1, 2);
```

## 实现lodash中的get函数

```js
const get = (data, path, defaultValue = void 0) => {
    const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    console.log(paths);
    let result = data
    for (const path of paths) {
        result = result[path]
        console.log(result);
        if (result == null) {
            return defaultValue
        }
    }

    return result
}
console.log(132, get(obj, 'a.b.c', null))
```
## 实现add(1)(2)(3)-函数柯里化

:::tip 柯里化
英语：Currying，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
:::
### 参数固定版
  1. 知道原来的函数是需要多少参数的  fn.length（函数的length 属性指明函数的形参个数。）
  2. 每次都要返回一个新的函数
  3. 每次函数执行的时候，都要把参数收集起来 [...args]
  4. 终止条件：当收集的参数个数 (args.length === fn.length)
  5. fn.apply
```js
const curry = (fn, ...args) => {
    // 函数的参数个数可以直接通过函数数的.length属性来访问
    return args.length >= fn.length // 这个判断很关键！！！
        // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
        ? fn(...args)
        /**
         * 传入的参数小于原始函数fn的参数个数时
         * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
        */
        : (..._args) => curry(fn, ...args, ..._args);
}
function add1(x, y, z) {
    return x + y + z;
}

const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
```
### 参数不固定
```js
const add = (...args) => {
    return args.reduce((a, b) => a + b)
}

const curry = (fn) => {
    let args = []
    return function curring(..._args) {
        if (_args.length) {//还有参数
            args.push(..._args)
            // args = [...args, ..._args]
            return curring
        } else {
            let res = fn.apply(this, args)
            args = []//如果不清空再次调用的时候，会有残留
            return res
        }
    }
}

const curryAdd = curry(add)

console.log(curryAdd(1, 2, 3)());//注意调用的时候，需要()再调用
console.log(curryAdd(1)(2)(3)());
console.log(curryAdd(1, 2)(3)());
console.log(curryAdd(1)(2, 3)());
```

### 误人子弟版
  
网上很多说这种toString隐式转换的，但是我认为并不对,特别是用
`Array.prototype.slice.call(arguments)`这个的，对于新手来说不是特别清晰，花里胡哨搞一堆，下面贴代码。
```js
function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    let args = [...arguments]
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    let adder = function () {
        args.push(...arguments)
        return adder
    }

    //return一个函数会隐士转换为string类型，所以重写toString方法
    adder.toString = function () {
        return args.reduce((a, b) => {
            return a + b
        })
    }
    return adder
}

let a = add(1)(2)(3)
// firefox是直接打印对象，chorme打印的是fn
console.log(a);
console.log(add(1, 2, 3)(4));
console.log(add(1)(2)(3)(4)(5));
alert(add(2, 6)(1));//alert会触发隐式转换，console.log不行

```

### 实现async、await
....
## 工程化问题

### 如何优化node镜像制作
   - DOCKER_BUILDKIT 查看 dockerfile instruction 耗时
   - FROM YOUR_OLD_DOCK 基于历史最新的业务镜像构建
   - COPY 等指令，充分利用 cache
   - 优化 OS 大小，alpine
   - npm i --only=production 移除 devDependencies
   - 抽出来放 CDN 
   - ...
   - devOps

### webpack热更新原理


```javascript
/**
 *           内存文件系统
 *               |
 *              读写
 *               |
 *          webpack compile     - watch -      代码
 *               |                               |
 *                ----------------------------change
 *               |
 *            server(websocket) --> manifest(hash.hot-update.json / hash.hot-update.js) ｜ hash & chunk
 *              |
 *              |
 *  Browser: hotDownloadManifest(拉 manifest)
 *              |
 *              | get hash chunkid
 *              |
 *           hotDownloadUpdateChunk(拉 chunkjs 文件)
 *              |
 *              |
 *           hotAddUpdateChunk(update the chunk)
 *              |
 *              |
 *           hotUpdateDownloaded
 */

// homework： 思考如何让传统的 webpack hmr 更快？
// 思路：
// 1. 为什么慢？
// 2. 跟模块模式有关联吗？ ESM
// 3. 想想 vite？
```

## 开放性问题实战

### `obj.a.b.c` 和 `obj['a']['b']['c']` 哪一个性能更好？

- AST
- 编译一下，汇编的角度去看
- 分析源码，V8 JerryScript...

### 如何突破 `localStorage` 的大小限制？

- 同域 ，破绽：port
> 127.0.0.1:1000 -> 127.0.0.1:1099

## 算法题实战

1. 最短编辑距离算法问题 难度：🪐

```javascript
// 给出两个单词word1和word2，计算出将word1 转换为word2的最少操作次数。

// 你总共三种操作方法：

// 插入一个字符
// 删除一个字符
// 替换一个字符

// 解答 👇

/**
 *  [
 *    [0, 1, 2],
 *    [1, x, x],
 *    [2, x, x]
 *  ]
 * */

// bai  -  bay  => 1
const levenshtein = (s1, s2) => {
  let l1 = s1.length;
  let l2 = s2.length;
  
  const matrix = [];

  for (let i = 0; i <= l1; i++) {
    matrix[i] = []; // [[], []]

    for (let j = 0; j <= l2; j++) {
      if (i === 0) {
        matrix[i][j] = [j]; // [[0, 1, 2]]
      }
      else if(j === 0) {
        matrix[i][j] = i; //  [[0, 1, 2], [1], [2]];
      }
      else {
        // 填写 xxxx

        // 相同为 0  不同为 1
        let cost = 0;
        if (s1[i - 1] !== s2[j - 1]) {
          cost = 1;
        }

        // 左上角顶点
        const temp = matrix[i - 1][j - 1] + cost;
        // 和上，下，左上角，取最小
        matrix[i][j] = Math.min(temp, matrix[i - 1][j] + 1, matrix[i][j - 1] + 1)
      }
    }
  }

  return matrix[l1][l2];
}

// homework: 思考 `Levenshtein Distance` 算法和 `React` 千丝万缕的联系.
```
## ajax请求放在vue的哪个生命周期里
我个人建议在mounted上进行获取。

为什么不在 created 里去发ajax？created 可是比 mounted 更早调用啊，更早调用意味着更早返回结果，那样性能不是更高？
首先，一个组件的 created 比 mounted 也早调用不了几微秒，性能没啥提高；
而且，等到异步渲染开启的时候，created 就可能被中途打断，中断之后渲染又要重做一遍，想一想，在 created 中做ajax调用，代码里看到只有调用一次，但是实际上可能调用 N 多次，这明显不合适。
相反，若把发ajax 放在 mounted，因为 mounted 在第二阶段，所以绝对不会多次重复调用，这才是ajax合适的位置.

在created的时候，视图中的dom并没有被渲染出来，所以此时如果直接去操作dom节点，无法找到相关元素。
在mounted中，由于此时的dom元素已经渲染出来了，所以可以直接使用dom节点。
一般情况下，都放在mounted中，保证逻辑的统一性。因为生命周期是同步执行的，ajax是异步执行的。
服务端渲染不支持mounted方法，所以在服务端渲染的情况下统一放在created中。在mounted里面不会冲突。

如果是一开始进入一个页面需要显示的数据放在created里，
如果是后续和页面交互需要的请求放在mounted里

建议都放在mounted，放在created相当于data里面的数据从空到有，
watch第一次会检测不到，数据类可以都放在mounted，没毛病的，别看网上都放在created

## 写出输入网址后到页面展现的过程
1. 浏览器发起DNS查询请求
  DNS查找过程为：
    浏览器缓存->系统缓存->路由器缓存->ISP DNS缓存->递归搜索
    递归搜索过程为：从根域名服务器到顶级域名服务器到所查询的域名服务器
2. 域名服务器向客户端返回查询结果域名，从而完成域名到IP地址的转换
3. 客户端向web服务器发送HTTP请求
  得到了域名对应的IP地址后客户端便可向真正的web服务器发生HTTP请求。通常一个HTTP请求格式如下：
  - 有cookie放http请求中
  - 进行TCP三次握手
4. 服务器端接收请求
5. 服务器处理响应请求
6. 把响应的数据发送给前端
7. 浏览器响应过程
  浏览器收到响应内容之后，生成主页框架，同时向服务端继续发送请求，请求的内容是主页里的一些资源，比如说图片、视频等。 对于静态的页面内容，浏览器通常进行缓存，对于动态的内容通常不缓存，缓存的时间也是有期限的。

  浏览器向服务器发送异步请求，因为有些页面显示完成之后客户端仍需要与服务端保持联系。

  整个过程结束之后，浏览器关闭TCP连接。
8. TCP四次挥手断开连接


## vue

### vue模板编译原理
讲template转换render函数的过程，会经历以下阶段：
1. 生成AST语法树
2. 优化
3. codegen

首先解析模版,生成AST语法树(一种用JavaScript对象的形式来描述整个模板)。使用大量的正则表达式对模板进行解析，遇到标签。文本的时候都会执行对应的钩子进行相关处理。
首先解析模版，生成AST语法树(一种用JavaScript对象的形式来描述整个模板)。使用大量的正则表达式对模板进行解析，遇到标签.文本的时候都会执行对应的钩子进行相关处理.

Vue 的数据是响应式的，但其实模板中并不是所有的数据都是响应式的。有一些数据首次渲染后就不会再变化,对应的DOM也不会变化。那么优化过程就是深度遍历AST树，按照相关条件对树节点进行标记。这些被标记的节点(静态节点)我们就可以跳过对它们的比对，对运行时的模板起到很大的优化作用。

编译的最后步是将优化后的AST树转换为可执行的代码。

### vue2和vue3渲染器的diff算法

简单来说,diff算法有以下过程


1. 同级比较，再比较子节点
2. 先判断—方有子节点一方没有子节点的情况(如果新的 children没有子节点，将旧的子节点移除)
3. 比较都有子节点的情况(核心diff)
4. 递归比较子节点

正常Diff两个树的时间复杂度是O(n^3)，但实际情况下我们很少会进行跨层级的移动DOM，所以Vue将 Diff进行了优化，从O(n^3) -> O(n)，只有当新旧children都为多个子节点时才需要用核心的Diff 算法进行同层级比较。

Vue2的核心Diff 算法采用了双端比较的算法，同时从新旧children 的两端开始进行比较，借助key值找到可复用的节点，再进行相关操作。相比 React的 Diff算法，同样情况下可以减少移动节点次数，减少不必要的性能损耗，更加的优雅。

vue3.x借鉴了ivi算法和inferno算法

在创建VNode时就确定其类型，以及在 mount/patch 的过程中采用位运算来判断一个VNode的类型，在这个基础之上再配合核心的 Diff算法，使得性能上较Vue2.x有了提升。(实际的实现可以结合Vue3.x源码看。)


该算法中还运用了动态规划的思想求解最长递归子序列。





