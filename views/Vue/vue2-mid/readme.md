# vue进阶用法

## 特征一：模板化
### 插槽
注重轻量化，如果代码很多行，不如直接写组件。
#### 默认插槽
组件外部维护参数以及结构，内部安排位置

#### 具名插槽
以name标识插槽的身份，从而在组件内部做到可区分

#### 作用域插槽
slot-scope（2.6 before）
v-slot(after)
外部做结构描述勾勒，内部做传参

### 模板数据的二次加工
1. watch、computed => 响应流过于复杂（computed赋值-不是特别好）
2. * 方案一：函数 - 独立、管道 / 无法响应式
   * 方案二：v-html 比如` <h1 v-html="money > 99 ? 99 : money"></h1>`
   * 方案三：过滤器
   如果单纯做数据处理用过滤器挺好的，没必要大张旗鼓的用watch、computed
    - 唯一缺点是拿不到上下文，不能用this，只能用入参，就是单纯的一个管道
   ```js
    {{ time | format }}
   ```

### jsx 更自由的基于js书写
```js
render(h){
     const moneyNode = (
      <p>{ this.money > 99 ? 99 : this.money }</p>
    );
    return (
        <ul>
            <content
                onClick={this.handleClick}//jsx方法点击事件
                item={item}//传递数据
                value={item.value}
                key={index}>
                { moneyNode }//其实相当于插槽 
            </content>
        </ul>
    )
}
```
遍历用map，记得写return，不能用forEach

1. v-model 如何实现 => 双向绑定 ？
    外层bind:value，内层@input
 
2. 写jsx的好处、劣势？
    vue的编译顺序：先template->转成render函数->然后挂在vm.render->最后执行vm.render()。用template的话，diff => 可以使用性能优化方案，
  
    优点：不太需要考虑vue出的语法糖，更原生自由的写js
    在jsx不需要考虑插槽，详见上面代码


## 特征二：组件化
### 传统模板化
```js
    Vue.component('component', {
        template: '<h1>组件</h1>'
    })
    new Vue({
        el: '#app'
    })
    // functional components
```
组件特点
* 1. 抽象复用
* 2. 精简 & 聚合

### 混入mixin - 逻辑混入

定义
```js
export default {
    data() {
        return {
            msg: '我是extends',
            obj: {
                title: 'extendsTitle',
            }
        }
    },
    created() {
        console.log('extends created'，this.$data);
    }
}
```
```js
import demoMixin from './fragments/demoMixin'//引入mixin
mixins: [demoMixin],//混入进来和data同级别
```
* 1. 应用： 抽离公共逻辑（逻辑相同，模板不同，可用mixin）使用场景：比如一个列表组件，后续来新需求，要求可以实现拖拽，就可以用mixin，因为拖拽是独立的，而且可以复用
* 2. 缺点： 数据来源不明确，debugger的时候不知哪里是来自mixins的
* 3. 合并策略
    - a. 递归合并
    - b. data合并冲突时，以组件优先
    - c. 生命周期回调函数不会覆盖，会先后执行，优先级为先mixin后组件

### 继承拓展extends - 逻辑拓展

定义时和mixin一样。

使用时：
```JS
import demoExtends from './fragments/demoExtends'
{
    name: 'HelloWorld',
    mixins: [demoMixin],//传值mixin为数组
    extends: demoExtends,//直接给我是
}
```

* 1. 应用： 拓展独立逻辑
* 2. 与mixin的区别，传值mixin为数组，extends是直接给
* 3. 合并策略
    - a. 同mixin，也是递归合并
    - b. 合并优先级 组件 > mixin > extends
    - c. 回调优先级 extends > mixin

#### 整体拓展类extend
参考链接： [Vue.extend（源码级详解）](https://juejin.cn/post/6914970829621035021)

Vue.extend是 Vue 里的一个全局 API，它提供了一种灵活的挂载组件的方式,挂载vue上，
从预定义的配置中拓展出来一个独立的配置项，进行合并

一个功能比如某些页面需要，某些页面不需要。

```js

// 拓展一个构造器
let _baseOptions = {
  data: function() {
    return {
      course: 'zhaowa',
      session: 'vue',
      teacher: 'yy'
    }
  },
  created() {
    console.log('extend base')
  }
}

const BaseComponent = Vue.extend(_baseOptions)
// 基于_BaseComponent，再拓展逻辑
new BaseComponent({
  created() {
    console.log('extend created')
  }
})

```

### Vue.use - 插件

参考链接： [vue中extend，mixins，extends，components,install的几个操作](https://juejin.cn/post/6844903636938522638)

vue提供的一种扩展能力。

* 1. 注册外部插件，作为整体实例的补充
* 2. 会除重，不会重复注册，底层map了下。
* 3. 手写插件
    - a. 外部使用Vue.use(myPlugin, options)
    - b. 默认调用的是内部的install方法

全局axios也可以挂在Vue.use上。

#### 定义： 新建/plugins/myPlugin.js
```js
export default {
    install: (Vue, option) => {
        Vue.methods = () => {
            //写全局方法
        }
        Vue.directive('my-directive', {
            bind(el, binding, vnode, oldVnode) {
                // 全局资源
            }
        })
        Vue.mixin({
            created() {
                console.log(option.name + 'created');
            }
        })
        Vue.prototype.$myMethod = function () {

        }
    }
}
```
#### 在main.js引入
```js
import MyPlugin from './plugins/myPlugin'

// 加载拓展插件
const _options = {
  name: 'my test plugin'
}

Vue.use(MyPlugin, _options)
```


### 组件的高级引用
* 1. 递归组件 - eg： vue-tree*
* 2. 动态组件 - `<component :is='name'></component>`
* 3. 异步组件 - vue-router的import的懒加载

$set $nextTick keep-alive
$router $route history hash 导航收尾
