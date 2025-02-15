import{_ as n,o as s,c as a,b as e}from"./app-VnZbzlub.js";const p={},t=e(`<h1 id="typescript-中类的理解" tabindex="-1"><a class="header-anchor" href="#typescript-中类的理解" aria-hidden="true">#</a> TypeScript 中类的理解</h1><p><img src="https://static.vue-js.com/e4c19060-0cb4-11ec-a752-75723a64e8f5.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>类（Class）是面向对象程序设计（OOP，Object-Oriented Programming）实现信息封装的基础</p><blockquote><p>类是一种用户定义的引用数据类型，也称类类型</p></blockquote><p>传统的面向对象语言基本都是基于类的，<code>JavaScript</code> 基于原型的方式让开发者多了很多理解成本</p><p>在 <code>ES6</code> 之后，<code>JavaScript</code> 拥有了 <code>class</code> 关键字，虽然本质依然是构造函数，但是使用起来已经方便了许多</p><p>但是<code> JavaScript</code> 的<code>class</code>依然有一些特性还没有加入，比如修饰符和抽象类</p><p><code>TypeScript</code> 的 <code>class</code> 支持面向对象的所有特性，比如 类、接口等</p><h2 id="二、使用方式" tabindex="-1"><a class="header-anchor" href="#二、使用方式" aria-hidden="true">#</a> 二、使用方式</h2><p>定义类的关键字为 <code>class</code>，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：</p><ul><li><strong>字段</strong> ： 字段是类里面声明的变量。字段表示对象的有关数据。</li><li><strong>构造函数</strong>： 类实例化时调用，可以为类的对象分配内存。</li><li><strong>方法</strong>： 方法为对象要执行的操作</li></ul><p>如下例子：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token comment">// 字段</span>
    engine<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token comment">// 构造函数</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>engine<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> engine
    <span class="token punctuation">}</span>

    <span class="token comment">// 方法</span>
    <span class="token function">disp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;发动机为 :   &quot;</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>engine<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>类的继承使用过<code>extends</code>的关键字</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">move</span><span class="token punctuation">(</span>distanceInMeters<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Animal moved </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>distanceInMeters<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">m.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Woof! Woof!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Dog</code>是一个 派生类，它派生自 <code>Animal</code> 基类，派生类通常被称作子类，基类通常被称作 超类</p><p><code>Dog</code>类继承了<code>Animal</code>类，因此实例<code>dog</code>也能够使用<code>Animal</code>类<code>move</code>方法</p><p>同样，类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写，通过<code>super</code>关键字是对父类的直接引用，该关键字可以引用父类的属性和方法，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">PrinterClass</span> <span class="token punctuation">{</span>
   <span class="token function">doPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;父类的 doPrint() 方法。&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">StringPrinter</span> <span class="token keyword">extends</span> <span class="token class-name">PrinterClass</span> <span class="token punctuation">{</span>
   <span class="token function">doPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">doPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 调用父类的函数</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;子类的 doPrint()方法。&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h3><p>可以看到，上述的形式跟<code>ES6</code>十分的相似，<code>typescript</code>在此基础上添加了三种修饰符：</p><ul><li>公共 public：可以自由的访问类程序里定义的成员</li><li>私有 private：只能够在该类的内部进行访问</li><li>受保护 protect：除了在该类的内部可以访问，还可以在子类中仍然可以访问</li></ul><h3 id="私有修饰符" tabindex="-1"><a class="header-anchor" href="#私有修饰符" aria-hidden="true">#</a> 私有修饰符</h3><p>只能够在该类的内部进行访问，实例对象并不能够访问</p><p><img src="https://static.vue-js.com/f57365f0-0cb4-11ec-a752-75723a64e8f5.png" alt=""></p><p>并且继承该类的子类并不能访问，如下图所示：</p><p><img src="https://static.vue-js.com/0072cc20-0cb5-11ec-8e64-91fdec0f05a1.png" alt=""></p><h3 id="受保护修饰符" tabindex="-1"><a class="header-anchor" href="#受保护修饰符" aria-hidden="true">#</a> 受保护修饰符</h3><p>跟私有修饰符很相似，实例对象同样不能访问受保护的属性，如下：</p><p><img src="https://static.vue-js.com/09e72580-0cb5-11ec-a752-75723a64e8f5.png" alt=""></p><p>有一点不同的是 <code>protected</code> 成员在子类中仍然可以访问</p><p><img src="https://static.vue-js.com/137f81a0-0cb5-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>除了上述修饰符之外，还有只读<strong>修饰符</strong></p><h4 id="只读修饰符" tabindex="-1"><a class="header-anchor" href="#只读修饰符" aria-hidden="true">#</a> 只读修饰符</h4><p>通过<code>readonly</code>关键字进行声明，只读属性必须在声明时或构造函数里被初始化，如下：</p><p><img src="https://static.vue-js.com/1e848d20-0cb5-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>除了实例属性之外，同样存在静态属性</p><h3 id="静态属性" tabindex="-1"><a class="header-anchor" href="#静态属性" aria-hidden="true">#</a> 静态属性</h3><p>这些属性存在于类本身上面而不是类的实例上，通过<code>static</code>进行定义，访问这些属性需要通过 类型.静态属性 的这种形式访问，如下所示：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> width <span class="token operator">=</span> <span class="token string">&#39;100px&#39;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Square<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token comment">// 100px</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述的类都能发现一个特点就是，都能够被实例化，在 <code>typescript</code>中，还存在一种抽象类</p><h3 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h3><p>抽象类做为其它派生类的基类使用，它们一般不会直接被实例化，不同于接口，抽象类可以包含成员的实现细节</p><p><code>abstract </code>关键字是用于定义抽象类和在抽象类内部定义抽象方法，如下所示：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;roaming the earch...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种类并不能被实例化，通常需要我们创建子类去继承，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>

    <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;miao miao&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

cat<span class="token punctuation">.</span><span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// miao miao</span>
cat<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// roaming the earch...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景" aria-hidden="true">#</a> 三、应用场景</h2><p>除了日常借助类的特性完成日常业务代码，还可以将类（class）也可以作为接口，尤其在 <code>React</code> 工程中是很常用的，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Carousel</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component<span class="token operator">&lt;</span>Props<span class="token punctuation">,</span> State<span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于组件需要传入 <code>props</code> 的类型 <code>Props</code> ，同时有需要设置默认 <code>props</code> 即 <code>defaultProps</code>，这时候更加适合使用<code>class</code>作为接口</p><p>先声明一个类，这个类包含组件 <code>props</code> 所需的类型和初始值：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// props的类型</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> children<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>React<span class="token punctuation">.</span>ReactElement<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;&gt;</span> <span class="token operator">|</span> React<span class="token punctuation">.</span>ReactElement<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">never</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">public</span> speed<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">500</span>
  <span class="token keyword">public</span> height<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">160</span>
  <span class="token keyword">public</span> animation<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;easeInOutQuad&#39;</span>
  <span class="token keyword">public</span> isAuto<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">public</span> autoPlayInterval<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">4500</span>
  <span class="token keyword">public</span> <span class="token function-variable function">afterChange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token function-variable function">beforeChange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">public</span> selesctedColor<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">public</span> showDots<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们需要传入 <code>props</code> 类型的时候直接将 <code>Props</code> 作为接口传入，此时 <code>Props</code> 的作用就是接口，而当需要我们设置<code>defaultProps</code>初始值的时候，我们只需要:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">public</span> <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Props</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Props</code> 的实例就是 <code>defaultProps</code> 的初始值，这就是 <code>class </code>作为接口的实际应用，我们用一个 <code>class</code> 起到了接口和设置初始值两个作用，方便统一管理，减少了代码量</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://www.tslang.cn/docs/handbook/classes.html</li><li>https://www.runoob.com/typescript/ts-class.html</li></ul>`,60),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","class.html.vue"]]);export{d as default};
