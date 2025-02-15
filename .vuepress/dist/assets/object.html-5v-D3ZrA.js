import{_ as n,o as s,c as a,b as e}from"./app-VnZbzlub.js";const t={},p=e(`<h1 id="对象扩展" tabindex="-1"><a class="header-anchor" href="#对象扩展" aria-hidden="true">#</a> 对象扩展</h1><p><img src="https://static.vue-js.com/4da4dd40-5427-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、属性的简写" tabindex="-1"><a class="header-anchor" href="#一、属性的简写" aria-hidden="true">#</a> 一、属性的简写</h2><p>ES6中，当对象键名与对应值名相等的时候，可以进行简写</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span>foo<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法也能够进行简写</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>

<span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">method</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在函数内作为返回值，也会变得方便很多</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// {x:1, y:10}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：简写的对象方法不能用作构造函数，否则会报错</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">obj<span class="token punctuation">.</span>f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、属性名表达式" tabindex="-1"><a class="header-anchor" href="#二、属性名表达式" aria-hidden="true">#</a> 二、属性名表达式</h2><p>ES6 允许字面量定义对象时，将表达式放在括号内</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> lastWord <span class="token operator">=</span> <span class="token string">&#39;last word&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;first word&#39;</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>lastWord<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

a<span class="token punctuation">[</span><span class="token string">&#39;first word&#39;</span><span class="token punctuation">]</span> <span class="token comment">// &quot;hello&quot;</span>
a<span class="token punctuation">[</span>lastWord<span class="token punctuation">]</span> <span class="token comment">// &quot;world&quot;</span>
a<span class="token punctuation">[</span><span class="token string">&#39;last word&#39;</span><span class="token punctuation">]</span> <span class="token comment">// &quot;world&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表达式还可以用于定义方法名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token string">&#39;h&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;ello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hi&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// hi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，属性名表达式与简洁表示法，不能同时使用，会报错</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 报错</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>foo<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 正确</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>foo<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串<code>[object Object]</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> keyA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> keyB <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myObject <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>keyA<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;valueA&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>keyB<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;valueB&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

myObject <span class="token comment">// Object {[object Object]: &quot;valueB&quot;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、super关键字" tabindex="-1"><a class="header-anchor" href="#三、super关键字" aria-hidden="true">#</a> 三、super关键字</h2><p><code>this</code>关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字<code>super</code>，指向当前对象的原型对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> proto <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> proto<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 为obj设置原型对象</span>
obj<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、扩展运算符的应用" tabindex="-1"><a class="header-anchor" href="#四、扩展运算符的应用" aria-hidden="true">#</a> 四、扩展运算符的应用</h2><p>在解构赋值中，未被读取的可遍历的属性，分配到指定的对象上面</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token operator">...</span>z <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
x <span class="token comment">// 1</span>
y <span class="token comment">// 2</span>
z <span class="token comment">// { a: 3, b: 4 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：解构赋值必须是最后一个参数，否则会报错</p><p>解构赋值是浅拷贝</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token operator">...</span>x <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 修改obj里面a属性中键值</span>
x<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token comment">// 2，影响到了结构出来x的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象的扩展运算符等同于使用<code>Object.assign()</code>方法</p><h2 id="五、属性的遍历" tabindex="-1"><a class="header-anchor" href="#五、属性的遍历" aria-hidden="true">#</a> 五、属性的遍历</h2><p>ES6 一共有 5 种方法可以遍历对象的属性。</p><ul><li><p>for...in：循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）</p></li><li><p>Object.keys(obj)：返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名</p></li><li><p>Object.getOwnPropertyNames(obj)：回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名</p></li><li><p>Object.getOwnPropertySymbols(obj)：返回一个数组，包含对象自身的所有 Symbol 属性的键名</p></li><li><p>Reflect.ownKeys(obj)：返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举</p></li></ul><p>上述遍历，都遵守同样的属性遍历的次序规则：</p><ul><li>首先遍历所有数值键，按照数值升序排列</li><li>其次遍历所有字符串键，按照加入时间升序排列</li><li>最后遍历所有 Symbol 键，按照加入时间升序排</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// [&#39;2&#39;, &#39;10&#39;, &#39;b&#39;, &#39;a&#39;, Symbol()]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、对象新增的方法" tabindex="-1"><a class="header-anchor" href="#六、对象新增的方法" aria-hidden="true">#</a> 六、对象新增的方法</h2><p>关于对象新增的方法，分别有以下：</p><ul><li>Object.is()</li><li>Object.assign()</li><li>Object.getOwnPropertyDescriptors()</li><li>Object.setPrototypeOf()，Object.getPrototypeOf()</li><li>Object.keys()，Object.values()，Object.entries()</li><li>Object.fromEntries()</li></ul><h3 id="object-is" tabindex="-1"><a class="header-anchor" href="#object-is" aria-hidden="true">#</a> Object.is()</h3><p>严格判断两个值是否相等，与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是<code>+0</code>不等于<code>-0</code>，二是<code>NaN</code>等于自身</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">+</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">0</span> <span class="token comment">//true</span>
<span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span> <span class="token comment">// false</span>

Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-assign" tabindex="-1"><a class="header-anchor" href="#object-assign" aria-hidden="true">#</a> Object.assign()</h3><p><code>Object.assign()</code>方法用于对象的合并，将源对象<code>source</code>的所有可枚举属性，复制到目标对象<code>target</code></p><p><code>Object.assign()</code>方法的第一个参数是目标对象，后面的参数都是源对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> source1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> source2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source1<span class="token punctuation">,</span> source2<span class="token punctuation">)</span><span class="token punctuation">;</span>
target <span class="token comment">// {a:1, b:2, c:3}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code>Object.assign()</code>方法是浅拷贝，遇到同名属性会进行替换</p><h3 id="object-getownpropertydescriptors" tabindex="-1"><a class="header-anchor" href="#object-getownpropertydescriptors" aria-hidden="true">#</a> Object.getOwnPropertyDescriptors()</h3><p>返回指定对象所有自身属性（非继承属性）的描述对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">&#39;abc&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// { foo:</span>
<span class="token comment">//    { value: 123,</span>
<span class="token comment">//      writable: true,</span>
<span class="token comment">//      enumerable: true,</span>
<span class="token comment">//      configurable: true },</span>
<span class="token comment">//   bar:</span>
<span class="token comment">//    { get: [Function: get bar],</span>
<span class="token comment">//      set: undefined,</span>
<span class="token comment">//      enumerable: true,</span>
<span class="token comment">//      configurable: true } }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-setprototypeof" tabindex="-1"><a class="header-anchor" href="#object-setprototypeof" aria-hidden="true">#</a> Object.setPrototypeOf()</h3><p><code>Object.setPrototypeOf</code>方法用来设置一个对象的原型对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> prototype<span class="token punctuation">)</span>

<span class="token comment">// 用法</span>
<span class="token keyword">const</span> o <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-getprototypeof" tabindex="-1"><a class="header-anchor" href="#object-getprototypeof" aria-hidden="true">#</a> Object.getPrototypeOf()</h3><p>用于读取一个对象的原型对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="object-keys" tabindex="-1"><a class="header-anchor" href="#object-keys" aria-hidden="true">#</a> Object.keys()</h3><p>返回自身的（不含继承的）所有可遍历（enumerable）属性的键名的数组</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// [&quot;foo&quot;, &quot;baz&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-values" tabindex="-1"><a class="header-anchor" href="#object-values" aria-hidden="true">#</a> Object.values()</h3><p>返回自身的（不含继承的）所有可遍历（enumerable）属性的键对应值的数组</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// [&quot;bar&quot;, 42]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-entries" tabindex="-1"><a class="header-anchor" href="#object-entries" aria-hidden="true">#</a> Object.entries()</h3><p>返回一个对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对的数组</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// [ [&quot;foo&quot;, &quot;bar&quot;], [&quot;baz&quot;, 42] ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-fromentries" tabindex="-1"><a class="header-anchor" href="#object-fromentries" aria-hidden="true">#</a> Object.fromEntries()</h3><p>用于将一个键值对数组转为对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// { foo: &quot;bar&quot;, baz: 42 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://es6.ruanyifeng.com/#docs/object</li></ul>`,70),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","object.html.vue"]]);export{u as default};
