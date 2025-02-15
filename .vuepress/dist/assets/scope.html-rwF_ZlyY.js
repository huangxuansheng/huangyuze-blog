import{_ as n,o as s,c as a,b as e}from"./app-VnZbzlub.js";const t={},p=e(`<h1 id="作用域和作用域链" tabindex="-1"><a class="header-anchor" href="#作用域和作用域链" aria-hidden="true">#</a> 作用域和作用域链</h1><p><img src="https://static.vue-js.com/16f614a0-718f-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、作用域" tabindex="-1"><a class="header-anchor" href="#一、作用域" aria-hidden="true">#</a> 一、作用域</h2><p>作用域，即变量（变量作用域又称上下文）和函数生效（能被访问）的区域或集合</p><p>换句话说，作用域决定了代码区块中变量和其他资源的可见性</p><p>举个例子</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> inVariable <span class="token operator">=</span> <span class="token string">&quot;函数内部变量&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//要先执行这个函数，否则根本不知道里面是啥</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inVariable<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: inVariable is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述例子中，函数<code>myFunction</code>内部创建一个<code>inVariable</code>变量，当我们在全局访问这个变量的时候，系统会报错</p><p>这就说明我们在全局是无法获取到（闭包除外）函数内部的变量</p><p>我们一般将作用域分成：</p><ul><li><p>全局作用域</p></li><li><p>函数作用域</p></li><li><p>块级作用域</p></li></ul><h3 id="全局作用域" tabindex="-1"><a class="header-anchor" href="#全局作用域" aria-hidden="true">#</a> 全局作用域</h3><p>任何不在函数中或是大括号中声明的变量，都是在全局作用域下，全局作用域下声明的变量可以在程序的任意位置访问</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 全局变量</span>
<span class="token keyword">var</span> greeting <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 打印 &#39;Hello World!&#39;</span>
<span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域" aria-hidden="true">#</a> 函数作用域</h3><p>函数作用域也叫局部作用域，如果一个变量是在函数内部声明的它就在一个函数作用域下面。这些变量只能在函数内部访问，不能在函数以外去访问</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> greeting <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 打印 &#39;Hello World!&#39;</span>
<span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 报错： Uncaught ReferenceError: greeting is not defined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见上述代码中在函数内部声明的变量或函数，在函数外部是无法访问的，这说明在函数内部定义的变量或者方法只是函数作用域</p><h3 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域" aria-hidden="true">#</a> 块级作用域</h3><p>ES6引入了<code>let</code>和<code>const</code>关键字,和<code>var</code>关键字不同，在大括号中使用<code>let</code>和<code>const</code>声明的变量存在于块级作用域中。在大括号之外不能访问这些变量</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// 块级作用域中的变量</span>
  <span class="token keyword">let</span> greeting <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> lang <span class="token operator">=</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints &#39;Hello World!&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 变量 &#39;English&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 报错：Uncaught ReferenceError: greeting is not defined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、词法作用域" tabindex="-1"><a class="header-anchor" href="#二、词法作用域" aria-hidden="true">#</a> 二、词法作用域</h2><p>词法作用域，又叫静态作用域，变量被创建时就确定好了，而非执行阶段确定的。也就是说我们写好代码时它的作用域就确定了，<code>JavaScript</code> 遵循的就是词法作用域</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码改变成一张图</p><p><img src="https://static.vue-js.com/29fab3d0-718f-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>由于<code>JavaScript</code>遵循词法作用域，相同层级的 <code>foo</code> 和 <code>bar</code> 就没有办法访问到彼此块作用域中的变量，所以输出2</p><h2 id="三、作用域链" tabindex="-1"><a class="header-anchor" href="#三、作用域链" aria-hidden="true">#</a> 三、作用域链</h2><p>当在<code>Javascript</code>中使用一个变量的时候，首先<code>Javascript</code>引擎会尝试在当前作用域下去寻找该变量，如果没找到，再到它的上层作用域寻找，以此类推直到找到该变量或是已经到了全局作用域</p><p>如果在全局作用域里仍然找不到该变量，它就会在全局范围内隐式声明该变量(非严格模式下)或是直接报错</p><p>这里拿《你不知道的Javascript(上)》中的一张图解释：</p><p>把作用域比喻成一个建筑，这份建筑代表程序中的嵌套作用域链，第一层代表当前的执行作用域，顶层代表全局作用域</p><p><img src="https://static.vue-js.com/33f9c100-718f-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>变量的引用会顺着当前楼层进行查找，如果找不到，则会往上一层找，一旦到达顶层，查找的过程都会停止</p><p>下面代码演示下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> sex <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 张三</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 男 </span>
    <span class="token punctuation">}</span>
    <span class="token function">student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: age is not defined</span>
<span class="token punctuation">}</span>
<span class="token function">person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码主要主要做了以下工作：</p><ul><li><code>student</code>函数内部属于最内层作用域，找不到<code>name</code>，向上一层作用域<code>person</code>函数内部找，找到了输出“张三”</li><li><code>student</code>内部输出<code>sex</code>时找不到，向上一层作用域<code>person</code>函数找，还找不到继续向上一层找，即全局作用域，找到了输出“男”</li><li>在<code>person</code>函数内部输出<code>age</code>时找不到，向上一层作用域找，即全局作用域，还是找不到则报错</li></ul>`,38),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","scope.html.vue"]]);export{d as default};
