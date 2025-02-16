import{_ as n,o as s,c as a,b as e}from"./app-bTNKyK6n.js";const t={},p=e(`<h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h1><p>安个vs的小插件 安好输入rcc 可快捷创建类 rfc快速创建函数</p><h2 id="react介绍" tabindex="-1"><a class="header-anchor" href="#react介绍" aria-hidden="true">#</a> React介绍</h2><p>Facebook,React主要是用于构建用户界面的JavaScript 库，实现单页面应用。于 2013 年 5 月开源</p><p>React 拥有较高的性能:</p><ol><li>声明式设计 −React采用声明范式，可以轻松描述应用。</li><li>高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。</li><li>灵活 −React可以与已知的库或框架很好地配合。</li><li>JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。</li><li>组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。</li><li>单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单</li></ol><ul><li>单页面应用和多页面应用 <ul><li>多页面应用:页面跳转时跳转的都是完整的html页面</li><li>单页面应用:只有1个html页面，所有内容都在这个页面中展示，通过“路由”来加载不同内容。全部是通过js来控制显示的。</li></ul></li><li>单页面应用的优缺点: <ul><li>优点:用户体验比较好，加载比较流畅</li><li>缺点:不利于seo(网站优化，能影响搜索排名)</li></ul></li><li>特点:声明式设计(采用声明范式)、高效、灵活、JSX语法、组件、单向响应的数据流 创建项目,脚手架：下载别人写好的配置 <code>npm i -g yarn</code>先安这个 再安下面的更快</li></ul><p><code>npx create-react-app my-app</code></p><p>安装时还可以先把脚手架下载好，再通过脚手架下载项目</p><p><code>npm i -g create-react-app</code></p><p>npx: npm中的个功能，npx的执行分3步，第一步:下载脚手架，第二步: 使用脚手架安装项目。第三步:下载好项目后删除脚手架。</p><h2 id="jsx语法" tabindex="-1"><a class="header-anchor" href="#jsx语法" aria-hidden="true">#</a> jsx语法</h2><ol><li>在js中可以直接写html <ul><li>HTML部分:直接写html标签</li><li>JS部分:写在{}内</li><li>babel会把j sx转成React. createElement( )</li><li>React. createElement()方法是创建react元素(虚拟DOM)的方法</li><li>ReactDOM. render()的第一 个参数，需要的就是react元素</li></ul></li><li>jsx的特点 <ul><li><p>大括号中写的js表达式,注意，大括号中不能直接渲染对象，能渲染数组(不能有普通对象)</p></li><li><p>JSX属性：写在标签的属性上</p><ul><li>改名<code>&lt;div className=&#39;&#39;&gt;&lt;/div&gt;</code> <code>&lt;label htmlfor=&#39;&#39;&gt;&lt;/label&gt;</code></li><li>标签上添加行内样式时，需要使用对象形式</li><li><code>&lt;div id={uid}  style={color:&#39;red&#39;,fontSize:&#39;14px&#39;}&gt;&lt;/div&gt;</code></li></ul></li><li><p>react元素是不可变的,如果需要更新页面显示，就需要创建新的react元素</p></li></ul></li><li>元素渲染 ReactDOM.render(react元素) react元素写法: <ul><li>直接使用jsx语法: <code>&lt;div&gt;{uname}&lt;/div&gt;</code></li><li>使用 <code>React. createElement()</code></li></ul></li><li>使用组件<code>&lt;App /&gt;</code><code>ReactDOM.render(&lt;Home/&gt;,document.getElementById(&#39;root&#39;))</code></li></ol><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><ol><li>概念:从概念上类似于JavaScript 函数。它接受任意的入参(即&quot;props&quot;) ，并返回用于描述页面展示内容的React元素。组件允许你将UI拆分为独立可复用的代码片段，并对每个片段进行独立构思。</li><li>创建方式</li></ol><ul><li>函数式组件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数组件不用hook语法时，功能弱j，有hook语法后 替代类形式组件。</p><ul><li>类形式组件 rcc</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    states<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前期使用类组件，会学习类组件中的state,生命周期函数。不管什么组件 必须引入react7</p><h3 id="类形式组件" tabindex="-1"><a class="header-anchor" href="#类形式组件" aria-hidden="true">#</a> 类形式组件</h3><h4 id="创建组件rcc" tabindex="-1"><a class="header-anchor" href="#创建组件rcc" aria-hidden="true">#</a> 创建组件rcc</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><ol><li>组件名称首字母要求大写</li><li>需要继承React.Component这个类</li><li>必须有一个render函数，render必须return，return后写的是jsx语法</li></ol><h4 id="导出组件" tabindex="-1"><a class="header-anchor" href="#导出组件" aria-hidden="true">#</a> 导出组件</h4><p><code>export {Home}</code><code>export default Home</code></p><h4 id="导入组件" tabindex="-1"><a class="header-anchor" href="#导入组件" aria-hidden="true">#</a> 导入组件</h4><p><code>import {Home} from &#39;path&#39;</code><code>import AppHome from &#39;path&#39;</code></p><h4 id="使用组件-当成标签使用" tabindex="-1"><a class="header-anchor" href="#使用组件-当成标签使用" aria-hidden="true">#</a> 使用组件,当成标签使用</h4><p><code>&lt;Home /&gt;</code><code>&lt;Home&gt;&lt;/Home&gt;</code></p><h4 id="组件复用" tabindex="-1"><a class="header-anchor" href="#组件复用" aria-hidden="true">#</a> 组件复用</h4><p>把页面中的某一块UI拆分出去，做成一个组件，在原来的位置调用组件即可。</p><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3><ul><li>当React元素为用户自定义组件时，它会将JSX 所接收的属性(attributes) 转换为单个对象传递给组件，这个对象被称之为“props”。</li><li>调用组件时可以通过属性的形式定义传递数据 <code>&lt;Item data=&#39;string&#39; arr={[1,2,3,4]}  /&gt;</code><code>&lt;Item picurl={arr[0].picurl} title={arr[0].title} /&gt;</code></li></ul><p>在Item组件可以通过props对象，获取到用户调用组件时传入的数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Item</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token comment">// {data:&#39;string &#39; ,arr:[1,2,3,4]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>传递数据时，多个组件调用定义的属性名要一致。</li><li>可以使用 ... 扩展运算符</li><li>还可以遍历时传递数据</li><li>props是只读属性</li></ul><h2 id="jsx中的循环" tabindex="-1"><a class="header-anchor" href="#jsx中的循环" aria-hidden="true">#</a> JSX中的循环</h2><p>不能使用for循环,使用map()方法遍历对象或数组 <code>arr/obj.map(function(item,index){ return item })</code></p><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h2><ul><li>state是定义组件内部自己使用的数据</li><li>在类组件中有两种定义方式 <ul><li>第一种：在constructor方法中定义</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第二种：直接在组件中定义</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用state数据 <code>this.state.xx</code></li><li>修改state数据,必须！this.setState()方法 <ul><li>用法1：对象形式的，多次调用 只加一次</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span> state <span class="token punctuation">.</span> count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>用法2：函数形式的,拿到更新前的值，多次调用可以一直加</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span>state<span class="token punctuation">.</span>count<span class="token operator">+</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>this.setState()方法有批量更新功能</li></ul><p><code>this.setState({count:this.state.count+1})</code></p><ul><li>this.setState()方法 可能是异步的</li></ul><p><code>this.setState({},()=&gt;{})</code></p><p>什么时候是异步的：不放在其他宏任务或微任务中 当setState直接放在事件的宏任务中执行时，是异步的</p><p>什么时候是同步的：setState又被放在别的宏任务中,或者其他的微任务中</p><ul><li>setState的函数形式：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span>state<span class="token punctuation">.</span>count<span class="token operator">+</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数中有一个参数state,这个state是谁?</p><p>state是上一次操作完state的结果(永远是最新的数据) 加this不累加,算最后一个;不加this的话,就累加加的多</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>page<span class="token operator">+</span><span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>page<span class="token operator">+</span><span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>page<span class="token operator">+</span><span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">++</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果视图内的数据需要修改, 并且同时页面响应变化，我们需要将数据放在state中, 使用setState来修改数据。</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Clock</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>date<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生命周期函数" tabindex="-1"><a class="header-anchor" href="#生命周期函数" aria-hidden="true">#</a> 生命周期函数</h2><p>又叫钩子函数，在组件运行的过程会在某些指定的条件下自动触发执行。 组件有三个生命周期函数一生只触发一次：</p><ul><li>componentWillMount</li><li>componentDidMount</li><li>componentWillUnMount</li></ul><ol><li>组件初始化阶段 initialization, 比如constructor</li></ol><ul><li>componentWillMount 组件挂载到DOM前调用,只会被调用一次, 这里写setState不会引起组件重新渲染,组件渲染前，可能会放网络请求(不太建议)</li><li>componentDidMount 组件渲染完成，网络请求，全局事件绑定, 且只会被调用一次</li><li>shouldComponentUpdate(nextProps, nextState){return false;} 是否允许组件更新，优化使用,比较之前和当前的props state是否有变化</li><li>componentWillUpdate(){} render方法前执行,更新前，一般不做任何处理 - componentDidUpdate(){} 组件更新完成，新网络请求 - componentWillReceiveProps(){}props改变了 接收新的props，一般不做任何处理</li><li>componentWillUnmount(){} 组件销毁前，清理一些定时器,把全局绑定的事件、网络请求等有副作用的全部清除</li></ul><h3 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> code</h3><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Lifecycle</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 常用于初始化状态</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1.组件构造函数执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 此时可以访问状态和属性，可进行api调用等</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;2.组件将要挂载&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件已挂载，可进行状态更新操作</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;3.组件已挂载&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 父组件传递的属性有变化，做相应响应</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;4.将要接收属性传递&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件是否需要更新，需要返回布尔值结果，优化点</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;5.组件是否需要更新？&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentWillUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件将要更新，可做更新统计</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;6.组件将要更新&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件更新</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;7.组件已更新&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件将要卸载, 可做清理工作</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;8.组件将要卸载&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;组件渲染&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">生命周期探究</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Fiber：</p><p>getDerivedStateFromProps(props,state)</p><p>在组件创建和更新的render之前调用</p><h3 id="事件系统" tabindex="-1"><a class="header-anchor" href="#事件系统" aria-hidden="true">#</a> 事件系统</h3><ul><li>react中自己重新定义事件系统，react绑定事件不需要获取到DOM元素，而是把事件绑定定义在虛拟DOM上了</li><li>语法: <code>&lt;div on+事件名={EventFunction}&gt;&lt;/div&gt;</code> 说明：</li></ul><ol><li>js的事件，驼峰命名法</li><li>EventFunction:对应的事件功能，编写的形式 <ol><li>直接定义一个箭头函数</li><li>可以定义函数 如果是类形式组件，需要使用this.clickme, clickme函数定义在类中</li></ol></li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">clickme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>clickme<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    }
}
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="this指向问题" tabindex="-1"><a class="header-anchor" href="#this指向问题" aria-hidden="true">#</a> this指向问题</h3><p>在react中，自定义事件中this默认是指向undefined的。</p><ul><li>在react组件的生命周期函数中，this指向当前组件</li><li>在react class定义的组件中，constructor构造方法中需要通过调用super()方法生成this，这时 this指向当前组件；否则不存在this，使用会报错。</li><li>在react 组件中，自定义function函数中this默认指向undefined）</li></ul><p>如果想让this指向当前组件</p><ul><li>方法1:使用bind,改变this指向</li><li>方法2：使用箭头函数</li><li>方法3：在constructor构造方法中通过bind绑定this</li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>clickme <span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token function">constructor</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span> <span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>clickme <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clickme</span> <span class="token punctuation">.</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果当函数调用时没有传参，建议使用方法3(constructor中绑定) 如果函数调用时需要传参，使用直接bind绑定更多一些</p><h3 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象" aria-hidden="true">#</a> 事件对象</h3><ul><li>事件对象不需要传递，直接调用就行，把事件对象方法函数形参的最后y一个位置</li><li>获取坐标信息</li></ul><p><code>event.pagex / event . pageY</code>获取事件触发者</p><p><code>e.preventDefault()</code>阻止冒泡</p><p><code>e.stopPropagation()</code> 阻止默认事件</p><h3 id="表单" tabindex="-1"><a class="header-anchor" href="#表单" aria-hidden="true">#</a> 表单</h3><ul><li>form标签 <code>&lt;form action= &#39;http://xx/xx.php/xx. jsp/xx.asp&#39; method= &#39;get post&#39; &gt;&lt;/ form&gt;</code></li><li>ajax:不刷新页面，能实现页面的局部更新，有ajax后form用的很少了</li><li>表单:收集用户输入的信息 <ul><li><p>第一种收集信息的形式：受控组件</p><p>受控组件：表单数据的显示和更改有react控制，具体是由react的state的控制。使 React 的 state 成为“唯一数据源”。</p><p><code>&lt;input value={this.state.user} onChange={(e)=&gt;this.setState({user:e.currentTarget.vale})} /&gt;</code> 特殊的受控组件：单选按钮,多选按钮</p><ul><li>value属性值不能改变</li><li>onChange事件只有在选中时触发</li></ul></li><li><p>第二种收集信息的形式：非受控组件，允许用户获取到原生DOM，自己来操作数据</p><ul><li>使用非受控组件获取input中值 <ul><li>创建ref ： React.createRef()</li><li>把创建ref添加到标签上，使用ref属性 ref={this.mref}</li><li>获取DOM，this.myref.current</li></ul></li></ul></li></ul></li></ul><h2 id="状态提升" tabindex="-1"><a class="header-anchor" href="#状态提升" aria-hidden="true">#</a> 状态提升</h2><ol><li>数据的传递方向： <ul><li>父级向子级传递，使用props</li><li>子级向父级传递，状态提升</li></ul></li><li>用法 <ol><li>让父级向子级传递一个函数 <code>&lt;Son user= getSonDate={this.getSonDate.bind(this)}/&gt;</code></li><li>在子级组件中调用传递来的这个方法 <code>this.props.getSonDate(this.state.user)</code></li><li>在子级组件中调用这个函数时可以传递实参 <code>this.setState({list:cs})</code></li><li>在父级函数中接收数据</li></ol></li></ol><h2 id="组合" tabindex="-1"><a class="header-anchor" href="#组合" aria-hidden="true">#</a> 组合</h2><ol><li>有些组件无法提前知晓它们子组件的具体内容。在Sidebar (侧边栏)和Dialog (对话框)等展现通用容器(box)的组件中特别容易遇到这种情况。我们建议这些组件使用一个特殊的childrenprop來将他们的子组件传递到渲染结果中</li><li>用法:</li><li>定义一个组件，组件中使用特殊的children prop属性 {this.props.children}</li><li>使用这个组件，作为双标签使用，在双标签内部定义具体内容</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TopBar</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">首页</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">组件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">TopBar</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>定义组件时使用childrenprop的位置就能显示双标签中的内容</li><li>React.createElement(type,options,children) <ul><li>type :标签类型</li><li>options:属性集合</li><li>children:子级元素</li></ul></li><li>props类型验证 <ol><li>PropTypes类型检测:父级向子级传递数据时，是否是子级要求的数据类型，如果不是PropTypes会报警告。</li><li>使用步骤</li><li>引入验证包 <code>import PropTypes from &#39;prop-types&#39; ;</code></li></ol></li><li>定义需要验证的prop属性 类组件中用法：</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>组件名<span class="token punctuation">.</span>propTypes<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span>propTypes<span class="token punctuation">.</span>string <span class="token comment">//验证单个类型</span>
  msg：propTypes<span class="token punctuation">.</span><span class="token function">oneOfType</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token comment">//验证多种类型</span>
    propTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>
    propTypes<span class="token punctuation">.</span>string
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">vnode</span><span class="token operator">:</span>propTypes<span class="token punctuation">.</span>element<span class="token punctuation">.</span>isRequired<span class="token comment">//验证必须项</span>
<span class="token punctuation">}</span>
<span class="token comment">//第二种写法：</span>
<span class="token keyword">static</span> propTypes <span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>给props定义默认值 类名.defaultProps={msg:&#39;hello&#39;,obj:{}}</li><li>执行顺序 默认值比验证执行的早</li></ol><h2 id="fetch网络请求" tabindex="-1"><a class="header-anchor" href="#fetch网络请求" aria-hidden="true">#</a> fetch网络请求</h2><p>介绍:</p><ol><li>是es6中提供的一种新的网络请求方式。Fetch API 提供了一个JavaScript接口，用于访问和操纵HTTP管道的部分，不是ajax 了。</li><li>fetch方法是一个全局方法，可以在任意位置使用</li><li>fetch()返回的Promise ，使用. then( )获取请求成功的结果,使用. catch捕获错误信息</li><li>默认情况下，fetch不会从服务端发送或接收任何cookies, 要发送cookies,必须设置credentials 选项，credentials的默认值是 same-origin</li></ol><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>        <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token punctuation">{</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>get<span class="token operator">/</span>post&#39;<span class="token punctuation">,</span><span class="token comment">//默认get</span>
            body<span class="token operator">:</span>data<span class="token punctuation">,</span><span class="token comment">//携带的是post数据</span>
            params<span class="token operator">:</span>data<span class="token comment">//携带的是get数据</span>
            header<span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//配置请求头</span>
                <span class="token string">&#39;Content-Type&#39;</span><span class="token operator">:</span><span class="token string">&#39;application/x-www-form-urlencoded&#39;</span>   <span class="token comment">//post以form data形式传递数据</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            credentials<span class="token operator">:</span><span class="token string">&#39;same-origin&#39;</span><span class="token punctuation">,</span> <span class="token comment">//是否允许携带cookie数据(include可携带)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回值：网络请求的结果 通过promise.then方法接收的不可直接用，fetch提供了对应的解析方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>        <span class="token punctuation">.</span><span class="token function">blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 把结果解析二进制
        <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 把结果解析字符串
        <span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 把结果解析json对象

        <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token operator">=&gt;</span>data<span class="token punctuation">.</span> <span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">data</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span> console <span class="token punctuation">.</span> <span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">//解析后的json对象格式：key：value</span>
            <span class="token punctuation">{</span>
                data：<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token comment">//真实请求结果</span>
                status：<span class="token number">200</span>，
                header：<span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>    4. 请求携带数据
       1. get
            1. 问号携带数据
                携带形式：url?key=value&amp;key=value
            2. restful数据
                携带形式：url/value/value2
                要求后台识别哪些是路径，哪些是数据
        2. post
            1. 需要加请求头header，method
            2. 传递的数据需要放在body上，而且是&#39;key=value&amp;key=value&#39; 的字符串
    5. 跨域解决
        1. cors : 后台配置，前台不需要管
        2. jsonp : 使用 fetch-jsonp插件
            1. 下载安装 npm i fetch-jsonp
            2. 引入插件
            3. 使用插件请求
    		 getJsonp(){
       			 fetchJsonp(&#39;http://localhost:5000/kuayu&#39;)
       			 .then(data=&gt;data.json())
       			 .then(data=&gt;console.log(data))
				}

        3. 代理
            1. 在package.json中写
            &quot;proxy&quot;: &quot;http://localhost:5000&quot;
                1. package.json中有一个字段：proxy,这个字段可以实现一个代理
                2. 重启前台服务
                3. 前台调用接口时只需要写接口名称，不写代理地址
            2. 使用http-proxy-middleware中间件
                1. 下载安装： npm i http-proxy-middleware
                2. 在src目录下创建一个setupProxy.js文件
                3. 编写配置
let {createProxyMiddleware} = require(&#39;http-proxy-middleware&#39;);
module.exports =function(app){
app.use(createProxyMiddleware(&#39;/inex&#39;,{
  target:&#39;https://3g.163.com//touch/reconstruct/article/list&#39;,
  changeOrigin:true,
  pathRewrite:{
    &#39;/inex&#39;:&#39;&#39;
  }
}))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="router-路由" tabindex="-1"><a class="header-anchor" href="#router-路由" aria-hidden="true">#</a> router 路由</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>1. 路由介绍:react主要实现单页面应用，也有切换内容显示的需求，定义一个可以根据不同的路径加载不同的内容的功能，这个功能就叫路由
    路由常用的有两种实现方法:
        1. hash路由，根据路径中的hash值来决定显示页面
        2. history路由：使用h5中的history对象
2. 安装:
    npm i -S react-router-dom
3. 配置
    1. 先决定使用哪种路由模式(hash,history)
       <span class="token code-snippet code keyword">\` &lt;HashRouter&gt;&lt;/HashRouter&gt;\`</span>  #
       <span class="token code-snippet code keyword">\` &lt;BrowserRouter&gt;&lt;/BrowserRouter&gt; \`</span>//
        提供了一个路由容器,在容器中定义具体
        路由，那么定义的路由就会按照决定好的路由模式来显示。
    2. 定义具体的路由
        <span class="token code-snippet code keyword">\`&lt;Route path=&#39;/about&#39; compoent={about}/&gt;\`</span>
        path:是路径，会在浏览器地址栏显示
        component：要加载的页面
        exact：精准匹配
    3. Route的特点:贪婪匹配
        不想贪婪，想一次加载一个路由，实现方式2种:
        1. exact精准匹配
        2. react-router-rom还提供了一个标签,<span class="token code-snippet code keyword">\`&lt;Switch&gt;\`</span>,作用是显示匹配到的第一个Path
    4. Link标签，导航
       <span class="token code-snippet code keyword">\` &lt;link to=&#39;/&#39; exact /&gt;去哪&lt;/link&gt;\`</span>
    5. 动态路由
        1. 定义路由时，规定哪些部分是动态的，如果是动态需要使用:variable 形式定义
          <span class="token code-snippet code keyword">\` &lt;Route path= &#39;/detail/:newsid&#39; component={Detail}&gt;\`</span>
        2. 跳转时(Link),需要给动态参加具体的数据
             <span class="token code-snippet code keyword">\`&lt;link to=&#39;/detail/1&#39;  /&gt;去哪&lt;/link&gt;\`</span>
            \`&lt;Link to={ /detail/\${id}^ }&gt;详情<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>L</span> <span class="token attr-name">ink</span><span class="token punctuation">&gt;</span></span>
            &lt;Link to={{<span class="token code-snippet code keyword">\`pathpame: /detail/\${id} |\`</span>}}&gt;\`
遍历
<span class="token code-snippet code keyword">\`{this.state.arr.map((ele,index)=&gt;(&lt;Link key={index} to={\`</span>/detail/\${ele.id}<span class="token code-snippet code keyword">\`}&gt;{ele.user}&lt;/Link&gt;))}\`</span>
        3. 在跳转后的组件中可以获取到动态路由的具体参数值
            从props.match.params这个对象获取
    6. Route加载的组件的props.上会自动多3个对象(history,match,loaction)
        history:h5的history对象，里面有push, goBack等常用浏览器的操作方法
        locatin:经过封装的浏览器的loaction对象
        match：接受路由参数的
    7. 路由嵌套
        1. 路由到的页面中又有其他的路由
        2. 常见的二层嵌套，多层嵌套
            1. 两层嵌套
                外层把组件作为路由标签用，在组件的属性上使用path属性，来定义路径内层被嵌套的组件使用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span><span class="token punctuation">&gt;</span></span>来定义
                在外层组件内部需要使用props. children来显示子级路由
                注意:内层路由路径要把父级的路径带上
            APP.js：
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Kemu</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/keyi<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Keyi}/</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/Keer<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Keer}/</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/Kesan<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Kesan}/</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/kemu/Kesi<span class="token punctuation">&#39;</span></span> <span class="token attr-name">component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{Kesi}/</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Kemu</span><span class="token punctuation">&gt;</span></span>
            2. 多层嵌套
                1. 不能把组件作为标签使用了
                2. 定义在组件内部，在组件内部使用<span class="token code-snippet code keyword">\`&lt;Route/&gt;\`</span>来定义路由,<span class="token code-snippet code keyword">\`&lt;Link/&gt;\`</span>定义导航
    8. 路由重定向
        1. 引入标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Redirect</span><span class="token punctuation">/&gt;</span></span>
        2. 用法
            1. &lt;Route path=&#39; /a&#39; render={()=&gt;{<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Redirect</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/b<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>}}&gt;
            2. 直接作为标签使用
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Redirect</span> <span class="token attr-name">from</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/c<span class="token punctuation">&#39;</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span>
            3. 在Route双标签内使用
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&#39;</span>/v<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Redirect</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Route</span> <span class="token punctuation">&gt;</span></span>
    9. 路由高亮
        1. 引入NavLink标签
        2. 这个标签在被选中时，能自动添加类名
        3. 自己添加css样式
    10. 编程式导航
        - 就是使用history的导航功能实现的
        - history.push() //正常的导航，会把这层路径添加到浏览器的历史记录中
        - history.replace() //替换导航
        - history.goBack() //返回上一层路径
        - history.go(number) //前进或后退
    11. withRouter()
        - 有些页面访问不到，如果想在这种页面使用编程式导航
        - withRouter是react-router 提供的一个高阶组件，使用这个函数调用时把不能访问
        history对象的组件放在实爹位置上，就可以返回一个新组件，这个新组件就具备了history ,loaction，match对象
        import {withRouter} from &#39;react-router&#39;//引入
        let Newkemu=withRouter(kemu)//引用
        export default Newkemu //导出
        - 除了withRouter,还可以通过props传参形式由父级传递下来
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置less" tabindex="-1"><a class="header-anchor" href="#配置less" aria-hidden="true">#</a> 配置less</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>- 使用create-react-app脚手架创建的项目，默认是不支持less。如果想在项目中使用less就需要自己配置
- 常用的方法：
    0. 首先下载 less 和 less-loader 
    1. 直接修改webpack的配置
        1. 运行 npm run eject ： 把webpack的配置文件显示出来
        2. 在webpack.config.js中进行修改
            1. 先搜索rules，直接自己添加loader配置
                {
                    test:/\\.less/,
                    use:[&#39;style-loader&#39;,&#39;css-loader&#39;,&#39;less-loader&#39;]
                }
            2. 参照sass的配置，搜索sass
                复制sass的配置，把其中的sass修改为less
    2. 使用中间件
        1. craco库，@craco/less插件
        2. customize-cra react-app-rewired库

2. mock
    1. 作用：生成随机数据，拦截 Ajax 请求
    2. 优点：
        前后端分离   开发无侵入
    3. 安装及使用
        npm install mockjs
    4. 数据模板定义规范：
        数据模板中的每个属性由 3 部分构成：属性名(name)、生成规则(rule)、属性值(value)
        语法：&#39;name|rule&#39;: value
        生成规则 有 7 种格式：
        &#39;name|min-max&#39;: value
        &#39;name|count&#39;: value
        &#39;name|min-max.dmin-dmax&#39;: value
        &#39;name|min-max.dcount&#39;: value
        &#39;name|count.dmin-dmax&#39;: value
        &#39;name|count.dcount&#39;: value
        &#39;name|+step&#39;: value
    5. 数据占位符定义规范：
        占位符 只是在属性值字符串中占个位置，并不出现在最终的属性值中
        语法：@占位符 cname
        @占位符(参数 [, 参数])
        注意：
        1.用 @ 来标识其后的字符串是 占位符。
        2.占位符 引用的是 Mock.Random 中的方法
        3.通过 Mock.Random.extend() 来扩展自定义占位符。
        4.占位符 也可以引用 数据模板 中的属性。
        5.占位符 会优先引用 数据模板 中的属性。
        6.占位符 支持 相对路径 和 绝对路径
    6. 拦截网络请求
        Mock.mock(url,type,template)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="provider" tabindex="-1"><a class="header-anchor" href="#provider" aria-hidden="true">#</a> Provider</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>作用：可以不通过props一层一层的传递数据，通过Provider提供数据，在组件树之间可以直接获取数据。
    1. 数据传递方向有父传子 (props),子传父 (事件)
        这两种形式都需要一层一层的传递
    2. 作用：Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法
    3. 使用
        1. 创建Context.js
            import React from &#39;react&#39;
            const Mycontext=React.createContext()
            export default Mycontext
        2. Mycontext.Provider : 提供数据
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mycontext.Provider</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{}</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Comp</span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mycontext.Provider</span><span class="token punctuation">&gt;</span></span>
        3. Mycontext.Consumer : 获取数据
           render() {
              return (
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mycontext.Consumer</span><span class="token punctuation">&gt;</span></span>
                     {(value)=&gt;{
                         console.log(value);
                         return <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                             item
                             {value.sun}
                             {value.pp}
                         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                     }}
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mycontext.Consumer</span><span class="token punctuation">&gt;</span></span>
              )
          }

        4. Class.contextType:获取数据
            Class.contextType = Mycontext;//写在最下
            在组件内可以使用context属性获取的数据 
        5. static contextType：获取数据
            static contextType = Mycontext;//在render的上一行
            在组件内可以使用context属性获取的数据
        6. contextType,Consumer 区别
            contextType 调用多次时，只有最后一次生效
            Consumer 调用多次，数据不覆盖


2. 错误边界
    1. react中一个页面中可能有很多组件，只要其中有一个组件运行出错，react会把页面中所有组件全卸载掉，显示空白屏幕
    2. 错误边界:当React运行中有错误时，这时显示一个备用的页面，不显示白屏，还可以把报错信息发送到指定的位置
    3. 用法：
         错误边界也是一个组件，定义好后包裹其他的组件，这个组件必须是class定义的，同时这个组件中必须有以下两个生命周期函数中的至少一个
             static getDerivedStateFromError(){
       		    return {iserror:true}
   			     }
        渲染备用 UI
            componentDidCatch(...rest){
               console.log(rest);
            }
        打印错误信息，可以把错误信息发送到指定位置
      render() {
        if(this.state.iserror){
            return <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>组件报错了<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        }
        return (
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
                {this.props.children}           
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        )  
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs-转发" tabindex="-1"><a class="header-anchor" href="#refs-转发" aria-hidden="true">#</a> Refs 转发</h2><ol><li>ref是什么？允许用户获取到原生DOM</li><li>ref放在组件上，这时current的值是谁？     就是这个组件</li><li>ref放在组件上时，我想获取的是这个组件内部的某个DOM元素 - react中组件上使用ref属性时，react会把ref从props中删除，根本不会传递到组件内部。 - refs转发就是解决上面这个问题的</li><li>用法：</li><li>创建ref 在父类</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>ref1<span class="token operator">=</span>React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在父类可以通过事件输出 console.log(this.ref1.current);</p><p>然后在组件中传过去ref <code>&lt;Sonref ref={this.ref1} msg=&#39;2006&#39;/&gt; </code> 2. 使用forwardRef来创建组件</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">let</span> Son<span class="token operator">=</span>React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>ref</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">son中的div</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\`
<span class="token keyword">export</span> <span class="token keyword">default</span> Son
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fragments" tabindex="-1"><a class="header-anchor" href="#fragments" aria-hidden="true">#</a> Fragments</h3><ol><li>Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。</li><li>语法： <code>&lt;React.Fragment&gt;&lt;/React.Fragment&gt;</code> 简写语法： &lt;&gt;...&lt;/&gt;</li></ol><h3 id="高阶组件" tabindex="-1"><a class="header-anchor" href="#高阶组件" aria-hidden="true">#</a> 高阶组件</h3><p>类似于高阶函数 一个函数返回一个函数 高阶组件 接受一个组件 返回一个组件 - 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式， 高阶组件本身是一个函数，接收一个组件，返回一个新组件,高阶组件是参数为组件，返回值为新组件的函数</p><p>代码如下</p><ul><li>//React的api, React.createElement(标签,{属性},children)</li><li>//React的api, React.cloneElement(react元素,{属性},children)</li><li>//React的api, React.Children.map()</li></ul><h3 id="react性能优化" tabindex="-1"><a class="header-anchor" href="#react性能优化" aria-hidden="true">#</a> react性能优化</h3><ul><li><p>shouldComponentUpdate(nextProps,nextState) this.props代表老状态，nextProps代表新状态 是否允许组件更新</p></li><li><p>PureComponent （export default class Son2 extends PureComponent） PureComponent来定义类形式组件，只有当props或state发生改变时才会触发组件更新</p></li><li><p>ComponentWillUnmount 组件注销   // 组件销毁前，把全局的事件删除了 比如         window.removeEventListener(&#39;scroll&#39;,this.myscroll);         clearTimeout(this.state.timer);</p></li><li><p>ComponentDidUpdate(prevProps,prevState)  防止死循环 可以加条件判断</p></li></ul><h3 id="render-props" tabindex="-1"><a class="header-anchor" href="#render-props" aria-hidden="true">#</a> Render Props</h3><p>- 术语 “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术，一些组件向外提供数据，不把需要数据的组件硬编程到这个组件内部，通过调用props.上 的一个方法，把数据提供处理</p><ul><li>语法 Data.jsx提供数据的组件</li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Data</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token keyword">this</span> <span class="token punctuation">.</span> props<span class="token punctuation">.</span> <span class="token function">render</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span> state<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//在公共app.js，等于把state传给son</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ap&#39;</span><span class="token punctuation">,</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Son1</span></span> <span class="token attr-name">state</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>state<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span>  
<span class="token comment">//Son.jsx在通过this.props接数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="懒加载" tabindex="-1"><a class="header-anchor" href="#懒加载" aria-hidden="true">#</a> 懒加载</h4><p>- 当组件什么时候使用到了，再动态加载这个组件 - 使用： let About = React.lazy(()=&gt;import(&#39;./About&#39;));</p><h2 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> hooks</h2><p>hook作用：让函数式组件能使用state和生命周期</p><p>import React, { useState, useEffect } from &quot;react&quot;;</p><ol><li>介绍：Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。 rfc快速创建     hook是给函数组件使用的，hook只能在函数组件中使用，不能在class组件中使用     没有破坏性改动，100%向后兼容，react版本大于16.8就可以直接使用Hook</li></ol><h3 id="state-hook" tabindex="-1"><a class="header-anchor" href="#state-hook" aria-hidden="true">#</a> State Hook</h3><ol><li>语法：</li></ol><ul><li>import React,{useState} from &#39;react&#39;</li><li>const [count, setCount] = useState(0);</li></ul><ol start="2"><li>调用</li></ol><ul><li>直接使用变量名 count</li></ul><ol start="3"><li>修改 调用setCount方法</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 第一种用法：在老状态上修改 <span class="token operator">--</span><span class="token operator">&gt;</span>
            <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                <span class="token comment">//count是老的状态</span>
                <span class="token keyword">return</span> count <span class="token operator">+</span> <span class="token number">5</span><span class="token comment">//没有批量更新</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 第二种用法：设置成固定值 <span class="token operator">--</span><span class="token operator">&gt;</span>
            <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 第三种用法： <span class="token operator">--</span><span class="token operator">&gt;</span>
            <span class="token function">setCount</span><span class="token punctuation">(</span>count<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//有批量更新功能</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>是否是批量更新</li></ol><p>setCount(count=&gt;count+1):不批量更新，写几个就执行几次</p><ol start="5"><li>是否是异步</li></ol><p>在非其他宏任务或微任务中时是异步的， 否则同步执行的</p><h3 id="effect-hook" tabindex="-1"><a class="header-anchor" href="#effect-hook" aria-hidden="true">#</a> Effect Hook</h3><ol><li>useEffect 是给函数组件提供 &quot;生命周期&quot; 的一个函数，相当于有3个生命周期</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token number">2.</span> 语法：
        <span class="token number">1.</span> 引入
            <span class="token keyword">import</span> React<span class="token punctuation">,</span><span class="token punctuation">{</span>useEffect<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
        <span class="token number">2.</span> 使用：
            <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                <span class="token operator">...</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token number">1.</span> 第一个参数位置是函数，作用相当于componentDidMount和componentDidUpdate
            <span class="token number">2.</span> 第二个参数位置是一个数组，可选的。这个数组是对componentDidUpdate优化使用的
                <span class="token number">1.</span> 不写第二个参数时：第一个参数位置的函数，在组件更新时会重新执行
                <span class="token number">2.</span> <span class="token function">第二个参数位置写空数组</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>：禁止ComponentDidUpdate执行
                <span class="token number">3.</span> 第二次参数位置数组中有值：只有数组中的参数的值发生改变时，才能执行ComponentDidUpdate
            <span class="token number">3.</span> <span class="token function">第一个参数位置的函数中的返回值</span><span class="token punctuation">(</span><span class="token keyword">return</span><span class="token punctuation">)</span> <span class="token operator">:</span> 相当于componentWillUnmount，effect 的清除阶段在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次。这个设计可以帮助我们创建 bug 更少的组件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="context-hook" tabindex="-1"><a class="header-anchor" href="#context-hook" aria-hidden="true">#</a> Context Hook</h3><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token operator">-</span> 在函数组件中使用Context的hook
<span class="token operator">-</span> 语法：
        这是获取数据 <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>MyContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
        提供数据：Context<span class="token punctuation">.</span>Provider
useContext
    <span class="token number">1.</span> 在函数组件中获取Context提供的数据
    <span class="token number">2.</span> 用法：
        <span class="token number">1.</span> 创建Context<span class="token punctuation">,</span>提供数据
            Let Mycontext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//写在export前面</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  &lt;Mycontext.Provider value={{}}&gt;&lt;Son /&gt;&lt;/Mycontext.Provider&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>Mycontext<span class="token punctuation">}</span>
        <span class="token number">2.</span> 在函数组件中调用useContext获取数据
            <span class="token keyword">function</span> <span class="token function">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>Mycontext<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token number">3.</span> 在函数组件中还可以使用Consumer获取数据
            <span class="token keyword">function</span> <span class="token function">Son</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> &lt;Mycontext.Consumer&gt;</span><span class="token template-punctuation string">\`</span></span>
                <span class="token punctuation">{</span>
                   <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Mycontext.Consumer</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token punctuation">}</span>

<span class="token number">4.</span> Hook 规则
    <span class="token number">1.</span> 只在最顶层使用 Hook<span class="token punctuation">,</span>不要在循环，条件或嵌套函数中调用 Hook
    <span class="token number">2.</span> 只在 React 函数中调用 Hook

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usereducer-usememo" tabindex="-1"><a class="header-anchor" href="#usereducer-usememo" aria-hidden="true">#</a> useReducer | useMemo</h3><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token number">1.</span>  useReducer 是功能更强大的<span class="token string">&quot;useState&quot;</span>
    <span class="token number">1.</span> 语法<span class="token operator">:</span>
        <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initialArg<span class="token punctuation">,</span> init<span class="token punctuation">)</span>
        <span class="token number">2.</span> dispatch：是useReducer产生的一个操作方法
            dispatch执行时需要传递一个对象 <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;ADD&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">payload</span><span class="token operator">:</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">}</span>
        <span class="token number">3.</span> reducer：提供对数据进行操作的方案
            <span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>action</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">case</span> <span class="token string">&#39;ADD&#39;</span><span class="token operator">:</span>
                        state <span class="token operator">=</span> state <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
                    <span class="token keyword">default</span><span class="token operator">:</span>
                        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
    <span class="token number">3.</span> 使用：
        直接调用变量名
    <span class="token number">4.</span> 修改：
        调用dispatch方法

# 注意：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">严格模式

- 检测意外的副作用
    严格模式不能自动检测到你的副作用，但它可以帮助你发现它们，使它们更具确定性。通过故意重复调用以下函数来实现的该操作：
    class 组件的 constructor，render 以及 shouldComponentUpdate 方法
    class 组件的生命周期方法 getDerivedStateFromProps
    函数组件体
    状态更新函数 (即 setState 的第一个参数）
    函数组件通过使用 useState，useMemo 或者 useReducer
这仅适用于开发模式。生产模式下生命周期不会被调用两次。

2. useMemo
    1. 把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算
    2. const memoizedValue = useMemo(() =&gt; computeExpensiveValue(a, b), [a, b]);
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useref" tabindex="-1"><a class="header-anchor" href="#useref" aria-hidden="true">#</a> useRef</h3><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token number">1.</span> useRef 返回一个可变的 ref 对象，其 <span class="token punctuation">.</span>current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。
<span class="token number">2.</span> 用法：
  <span class="token number">1.</span> 创建ref
  <span class="token number">2.</span> 语法：<span class="token keyword">const</span> myref <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token number">3.</span> 使用	<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">	&lt;div ref={myref}&gt;&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
  <span class="token number">4.</span> refs转发
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> &lt;Son ref={myref} /&gt;</span><span class="token template-punctuation string">\`</span></span>
  Son组件创建时，需要使用 React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>创建
  React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>ref</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义hook" tabindex="-1"><a class="header-anchor" href="#自定义hook" aria-hidden="true">#</a> 自定义hook</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>    1. 提取组件中的业务逻辑
    2. 语法：
        必须以 &#39;use&#39; 开头，可以使用内置hook
        function useXx(){
            const [list,setList] = useState([]);
            useEffect(()=&gt;{
            },[])
            return list
        }
    3. 使用：
        在组件中直接调用即可
        注意：1. 只能在函数组件中使用
              2. 不能放在 if,for,普通函数中调用，在设计的时候有顺序，单项链表

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> redux</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>1. 在react中数据传递方式有几种?
    1. 父传子： props
    2. 子传父： 使用事件
    3. Context：提供公共数据

2. Context的缺点：
    1. 公共数据特别多
    2. 组件也特别多时
    当上面两种情况同时存在时，最好把Context定义在App.js组件上
    但是都定义App.js上，会造成App.js组件上多很多对App组件来说没用的数据
    所以会有需求：把公共数据提取出去，单独放在一个存储空间中，使用数据时就从这个空间中取，修改时就修改这个空间中的数据。
3. redux
    1. 作用：把公共数据提取出去，单独放在一个存储空间中，使用数据时就从这个空间中取，修改时就修改这个空间中的数据。对数据操作时，redux提供的对应的方法
    2. 安装：npm install --save redux
       调试工具：npm install --save-dev redux-devtools
    3. 三大原则
        1.单一数据源
            整个应用的 state 被储存在一棵object tree中，并且这个 object tree 只存在于唯一一个 store 中。
        2.使用纯函数来执行修改
            如何改变 state tree ，你需要编写 reducers。它接收先前的 state 和 action，并返回新的 state
        3.State 是只读的
       唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。执行上面纯函数。

    4. 核心 store 
        1. store是存储数据的空间
        2. 创建存储空间语法：
            import {createStore} from &#39;redux&#39;
            const store = createStore(reducer,init)
        3. store上会提供操作数据的方法
            1. 获取数据 getState()
            2. 修改数据 dispatch()
            3. 监听方法 subscribe()

    5. 核心2 reducer
        1. reducer 提供可预测化的状态管理
        2. reducer 必须是一个纯函数
            function reducer(state,action){
                switch(action.type){
                    case &#39;ADD&#39;:
                        state = state + 1;
                        return state;
                    default:
                        return state
                }
            }
        3. 这个reducer是放在 createStore 的第一个参数位置

    6. 核心3 action
        1. 对store数据的具体操作
        2. 格式：
            1. 对象形式
                {
                    type:&#39;ADD&#39;,
                    payload:&#39;xxxxx&#39;
                }
            2. 函数形式
                function XX(yy){
                    return {
                        type:&#39;ADD&#39;,
                        payload:yy
                    }
                }
        3. action也必须是没有副作用的(网络请求，定时器)
        4. 触发action执行：
            调用store上的dispatch方法，把action放在dispatch中

    7. reducers合并
        1. 如果一个store中要存储多个公共数据，这些公共数据的操作又是不一样的
        2. 需要创建多个reducer,每个reducer中都保存相关的一组数据
        3. createStore(reducer)中只有第一个参数位置是放reducer的，而且只能放一个
        4. redux中提供了一个方法，combineReducers ，作用就是把多个reducer合并成一个
        5. combineReducers语法：
            import {combineReducers} from &#39;redux&#39;
            const all = combineReducers({
                reducer1:reducer1,
                reducerA
            })
            返回值：all ，也是一个函数
        6. 把合并后的all放到 createStore(all),
            1. store中就有多个reducer中的数据了
            2. store.dispatch()能触发所有reducer中的功能
    8. 支持异步action
        1. 需要使用中间件 ： redux-thunk
        2. 安装：npm i redux-thunk -S
        3. 配置store支持中间件
            import {applyMiddle} from &#39;redux&#39;
            import thunk from &#39;redux-thunk&#39;
            createStore(reducer,applyMiddle(thunk))
        4. 定义异步action
            const yibu=(url,data)=&gt;(dispatch, getState)=&gt;{
                fetch(url).then(data=&gt;data.json()).then(data=&gt;{
                    dispatch({
                        type:&#39;ADD&#39;,
                        payload:data
                    })
                })
            }
        
        5. 执行异步action
            dispatch(yibu())
        
    9. compose
        1. 合并applyMiddleware和其他的功能
        2. 让浏览器插件和中间件同时工作
const store = createStore(all,window.<span class="token bold"><span class="token punctuation">__</span><span class="token content">REDUX_DEVTOOLS_EXTENSION</span><span class="token punctuation">__</span></span> &amp;&amp; window.<span class="token bold"><span class="token punctuation">__</span><span class="token content">REDUX_DEVTOOLS_EXTENSION</span><span class="token punctuation">__</span></span>())
         composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose
 const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk,logger)));

3. react关联redux
    1. 安装一个库，react-redux
        npm i react-redux -S
    2. 使用 react-redux 把react项目和redux关联起来
        import {Provider } from &#39;react-redux&#39;
        import store from &#39;redux3.js&#39;
       \` <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Provider</span> <span class="token attr-name">store</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{store}</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Provider</span><span class="token punctuation">&gt;</span></span>\`
    3. 在组件中使用redux数据
        import {connect} from &#39;react-redux&#39;//引入高阶组件
        export default connect(mapStateToProps,mapDispatchToprops)(Son)
Connect里面是两个函数可定义
      1. 把store的存储的数据放到组件的props上
         function mapStateToProps(state){
 	 	console.log(&#39;son&#39;,state); 
 		return {user:state}
}
2.把store上的dispatch方法给组件使用
function mapDispatchToprops(dispatch){
    return {
        changeuser:(data)=&gt;dispatch({
            type:&#39;ADD&#39;,
            payload:&#39;花里胡哨&#39;
        }),
        deldel:(data)=&gt;dispatch({
            type:&#39;DEL&#39;

        })
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>`,162),i=[p];function l(c,o){return s(),a("div",null,i)}const r=n(t,[["render",l],["__file","index.html.vue"]]);export{r as default};
