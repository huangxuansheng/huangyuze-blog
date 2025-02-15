import{_ as n,o as s,c as a,b as t}from"./app-VnZbzlub.js";const e={},p=t(`<h1 id="typeof-与-instanceof-区别" tabindex="-1"><a class="header-anchor" href="#typeof-与-instanceof-区别" aria-hidden="true">#</a> typeof 与 instanceof 区别</h1><p><img src="https://static.vue-js.com/3fc158f0-7710-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、typeof" tabindex="-1"><a class="header-anchor" href="#一、typeof" aria-hidden="true">#</a> 一、typeof</h2><p><code>typeof</code> 操作符返回一个字符串，表示未经计算的操作数的类型</p><p>使用方法如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> operand
<span class="token keyword">typeof</span><span class="token punctuation">(</span>operand<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>operand</code>表示对象或原始值的表达式，其类型将被返回</p><p>举个例子</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token number">1</span> <span class="token comment">// &#39;number&#39;</span>
<span class="token keyword">typeof</span> <span class="token string">&#39;1&#39;</span> <span class="token comment">// &#39;string&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">undefined</span> <span class="token comment">// &#39;undefined&#39;</span>
<span class="token keyword">typeof</span> <span class="token boolean">true</span> <span class="token comment">// &#39;boolean&#39;</span>
<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;symbol&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> console <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> console<span class="token punctuation">.</span>log <span class="token comment">// &#39;function&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面例子，前6个都是基础数据类型。虽然<code>typeof null</code>为<code>object</code>，但这只是<code> JavaScript</code> 存在的一个悠久 <code>Bug</code>，不代表<code>null </code>就是引用数据类型，并且<code>null </code>本身也不是对象</p><p>所以，<code>null </code>在 <code>typeof </code>之后返回的是有问题的结果，不能作为判断<code>null</code>的方法。如果你需要在 <code>if</code> 语句中判断是否为 <code>null</code>，直接通过<code>===null</code>来判断就好</p><p>同时，可以发现引用类型数据，用<code>typeof</code>来判断的话，除了<code>function</code>会被识别出来之外，其余的都输出<code>object</code></p><p>如果我们想要判断一个变量是否存在，可以使用<code>typeof</code>：(不能使用<code>if(a)</code>， 若<code>a</code>未声明，则报错)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">!=</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//变量存在</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、instanceof" tabindex="-1"><a class="header-anchor" href="#二、instanceof" aria-hidden="true">#</a> 二、instanceof</h2><p><code>instanceof</code> 运算符用于检测构造函数的 <code>prototype</code> 属性是否出现在某个实例对象的原型链上</p><p>使用如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>object <span class="token keyword">instanceof</span> <span class="token class-name">constructor</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>object</code>为实例对象，<code>constructor</code>为构造函数</p><p>构造函数通过<code>new</code>可以实例对象，<code>instanceof </code>能判断这个对象是否是之前那个构造函数生成的对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义构建函数</span>
<span class="token keyword">let</span> <span class="token function-variable function">Car</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> benz <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
benz <span class="token keyword">instanceof</span> <span class="token class-name">Car</span> <span class="token comment">// true</span>
<span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>
car <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token comment">// true</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span>
str <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于<code>instanceof</code>的实现原理，可以参考下面：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里先用typeof来判断基础数据类型，如果是，直接返回false</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> left <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token comment">// getProtypeOf是Object对象自带的API，能够拿到参数的原型对象</span>
    <span class="token keyword">let</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                  
        <span class="token keyword">if</span><span class="token punctuation">(</span>proto <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>proto <span class="token operator">===</span> right<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token comment">//找到相同原型对象，返回true</span>
        proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeof</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是顺着原型链去找，直到找到相同的原型对象，返回<code>true</code>，否则为<code>false</code></p><h2 id="三、区别" tabindex="-1"><a class="header-anchor" href="#三、区别" aria-hidden="true">#</a> 三、区别</h2><p><code>typeof</code>与<code>instanceof</code>都是判断数据类型的方法，区别如下：</p><ul><li><p><code>typeof</code>会返回一个变量的基本类型，<code>instanceof</code>返回的是一个布尔值</p></li><li><p><code>instanceof</code> 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型</p></li><li><p>而<code> typeof</code> 也存在弊端，它虽然可以判断基础数据类型（<code>null</code> 除外），但是引用数据类型中，除了<code> function</code> 类型以外，其他的也无法判断</p></li></ul><p>可以看到，上述两种方法都有弊端，并不能满足所有场景的需求</p><p>如果需要通用检测数据类型，可以采用<code>Object.prototype.toString</code>，调用该方法，统一返回格式<code>“[object Xxx]” </code>的字符串</p><p>如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>       <span class="token comment">// &quot;[object Object]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// 同上结果，加上call也ok</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>    <span class="token comment">// &quot;[object Number]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// &quot;[object String]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>  <span class="token comment">// &quot;[object Boolean]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// &quot;[object Function]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>   <span class="token comment">//&quot;[object Null]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">//&quot;[object Undefined]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">123</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>    <span class="token comment">//&quot;[object RegExp]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//&quot;[object Date]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>       <span class="token comment">//&quot;[object Array]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span>  <span class="token comment">//&quot;[object HTMLDocument]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>   <span class="token comment">//&quot;[object Window]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>了解了<code>toString</code>的基本用法，下面就实现一个全局通用的数据类型判断方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> type  <span class="token operator">=</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">!==</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">// 先进行typeof判断，如果是基础数据类型，直接返回</span>
    <span class="token keyword">return</span> type<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 对于typeof返回结果是object的，再进行如下的判断，正则返回结果</span>
  <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\[object (\\S+)\\]$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>     <span class="token comment">// &quot;Array&quot; typeof []是object，因此toString返回</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// &quot;string&quot; typeof 直接返回</span>
<span class="token function">getType</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> <span class="token comment">// &quot;Window&quot; toString返回</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>   <span class="token comment">// &quot;Null&quot;首字母大写，typeof null是object，需toString来判断</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>   <span class="token comment">// &quot;undefined&quot; typeof 直接返回</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment">// &quot;undefined&quot; typeof 直接返回</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;function&quot; typeof能判断，因此首字母小写</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">123</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>      <span class="token comment">//&quot;RegExp&quot; toString返回</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","typeof_instanceof.html.vue"]]);export{k as default};
