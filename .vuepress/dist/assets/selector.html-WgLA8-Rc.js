import{_ as s,o as n,c as a,b as e}from"./app-VnZbzlub.js";const t={},l=e(`<h1 id="css选择器和优先级" tabindex="-1"><a class="header-anchor" href="#css选择器和优先级" aria-hidden="true">#</a> css选择器和优先级</h1><p><img src="https://static.vue-js.com/f7dcd330-8fe1-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、选择器" tabindex="-1"><a class="header-anchor" href="#一、选择器" aria-hidden="true">#</a> 一、选择器</h2><p>CSS选择器是CSS规则的第一部分</p><p>它是元素和其他部分组合起来告诉浏览器哪个HTML元素应当是被选为应用规则中的CSS属性值的方式</p><p>选择器所选择的元素，叫做“选择器的对象”</p><p>我们从一个<code>Html</code>结构开始</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one_1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span> <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one_1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于<code>css</code>属性选择器常用的有：</p><ul><li><p>id选择器（#box），选择id为box的元素</p></li><li><p>类选择器（.one），选择类名为one的所有元素</p></li><li><p>标签选择器（div），选择标签为div的所有元素</p></li><li><p>后代选择器（#box div），选择id为box元素内部所有的div元素</p></li><li><p>子选择器（.one&gt;one_1），选择父元素为.one的所有.one_1的元素</p></li><li><p>相邻同胞选择器（.one+.two），选择紧接在.one之后的所有.two元素</p></li><li><p>群组选择器（div,p），选择div、p的所有元素</p></li></ul><p>还有一些使用频率相对没那么多的选择器：</p><ul><li>伪类选择器</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">:</span>link <span class="token property">：选择未被访问的链接</span>
<span class="token punctuation">:</span><span class="token property">visited：选取已被访问的链接</span>
<span class="token punctuation">:</span><span class="token property">active：选择活动链接</span>
<span class="token punctuation">:</span>hover <span class="token property">：鼠标指针浮动在上面的元素</span>
<span class="token punctuation">:</span>focus <span class="token property">：选择具有焦点的</span>
<span class="token punctuation">:</span>first-child：父元素的首个子元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>伪元素选择器</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">:</span>first-letter <span class="token property">：用于选取指定选择器的首字母</span>
<span class="token punctuation">:</span>first-line <span class="token property">：选取指定选择器的首行</span>
<span class="token punctuation">:</span><span class="token property">before</span> <span class="token punctuation">:</span> <span class="token property">选择器在被选元素的内容前面插入内容</span>
<span class="token punctuation">:</span><span class="token property">after</span> <span class="token punctuation">:</span> 选择器在被选元素的内容后面插入内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>属性选择器</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>[attribute] 选择带有attribute属性的元素
[attribute=value] 选择所有使用attribute=value的元素
[attribute~=value] 选择attribute属性包含value的元素
[attribute|=value]：选择attribute属性以value开头的元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>CSS3</code>中新增的选择器有如下：</p><ul><li>层次选择器（p~ul），选择前面有p元素的每个ul元素</li><li>伪类选择器</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">:</span>first-of-type <span class="token property">表示一组同级元素中其类型的第一个元素</span>
<span class="token punctuation">:</span>last-of-type <span class="token property">表示一组同级元素中其类型的最后一个元素</span>
<span class="token punctuation">:</span>only-of-type <span class="token property">表示没有同类型兄弟元素的元素</span>
<span class="token punctuation">:</span>only-child <span class="token property">表示没有任何兄弟的元素</span>
<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token property">根据元素在一组同级中的位置匹配元素</span>
<span class="token punctuation">:</span><span class="token function">nth-last-of-type</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token property">匹配给定类型的元素，基于它们在一组兄弟元素中的位置，从末尾开始计数</span>
<span class="token punctuation">:</span>last-child <span class="token property">表示一组兄弟元素中的最后一个元素</span>
<span class="token punctuation">:</span>root <span class="token property">设置HTML文档</span>
<span class="token punctuation">:</span>empty <span class="token property">指定空的元素</span>
<span class="token punctuation">:</span>enabled <span class="token property">选择可用元素</span>
<span class="token punctuation">:</span>disabled <span class="token property">选择被禁用元素</span>
<span class="token punctuation">:</span>checked <span class="token property">选择选中的元素</span>
<span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span> 选择与 &lt;selector&gt; 不匹配的所有元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>属性选择器</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>[attribute*=value]：选择attribute属性值包含value的所有元素
[attribute^=value]：选择attribute属性开头为value的所有元素
[attribute$=value]：选择attribute属性结尾为value的所有元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、优先级" tabindex="-1"><a class="header-anchor" href="#二、优先级" aria-hidden="true">#</a> 二、优先级</h2><p>相信大家对<code>CSS</code>选择器的优先级都不陌生：</p><blockquote><p>内联 &gt; ID选择器 &gt; 类选择器 &gt; 标签选择器</p></blockquote><p>到具体的计算层⾯，优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：</p><ul><li><p>如果存在内联样式，那么 A = 1, 否则 A = 0</p></li><li><p>B的值等于 ID选择器出现的次数</p></li><li><p>C的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数</p></li><li><p>D 的值等于 标签选择器 和 伪元素 出现的总次数</p></li></ul><p>这里举个例子：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>#nav-global &gt; ul &gt; li &gt; a.nav-link
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>套用上面的算法，依次求出 <code>A</code> <code>B</code> <code>C</code> <code>D</code> 的值：</p><ul><li><p>因为没有内联样式 ，所以 A = 0</p></li><li><p>ID选择器总共出现了1次， B = 1</p></li><li><p>类选择器出现了1次， 属性选择器出现了0次，伪类选择器出现0次，所以 C = (1 + 0 + 0) = 1</p></li><li><p>标签选择器出现了3次， 伪元素出现了0次，所以 D = (3 + 0) = 3</p></li></ul><p>上面算出的<code>A</code> 、 <code>B</code>、<code>C</code>、<code>D</code> 可以简记作：<code>(0, 1, 1, 3)</code></p><p>知道了优先级是如何计算之后，就来看看比较规则：</p><ul><li>从左往右依次进行比较 ，较大者优先级更高</li><li>如果相等，则继续往右移动一位进行比较</li><li>如果4位全部相等，则后面的会覆盖前面的</li></ul><p>经过上面的优先级计算规则，我们知道内联样式的优先级最高，如果外部样式需要覆盖内联样式，就需要使用<code>!important</code></p><h2 id="三、继承属性" tabindex="-1"><a class="header-anchor" href="#三、继承属性" aria-hidden="true">#</a> 三、继承属性</h2><p>在<code>css</code>中，继承是指的是给父元素设置一些属性，后代元素会自动拥有这些属性</p><p>关于继承属性，可以分成：</p><ul><li>字体系列属性</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">font</span><span class="token punctuation">:</span>组合字体
<span class="token property">font-family</span><span class="token punctuation">:</span>规定元素的字体系列
<span class="token property">font-weight</span><span class="token punctuation">:</span>设置字体的粗细
<span class="token property">font-size</span><span class="token punctuation">:</span>设置字体的尺寸
<span class="token property">font-style</span><span class="token punctuation">:</span>定义字体的风格
<span class="token property">font-variant</span><span class="token punctuation">:</span>偏大或偏小的字体
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>文本系列属性</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>text-indent：文本缩进
text-align：文本水平对刘
line-height：行高
word-spacing：增加或减少单词间的空白
letter-spacing：增加或减少字符间的空白
text-transform：控制文本大小写
direction：规定文本的书写方向
color：文本颜色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>元素可见性</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>visibility
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>表格布局属性</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>caption-side：定位表格标题位置
border-collapse：合并表格边框
border-spacing：设置相邻单元格的边框间的距离
empty-cells：单元格的边框的出现与消失
table-layout：表格的宽度由什么决定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列表属性</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>list-style-type：文字前面的小点点样式
list-style-position：小点点位置
list-style：以上的属性可通过这属性集合
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>引用</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>quotes：设置嵌套引用的引号类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>光标属性</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>cursor：箭头可以变成需要的形状
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>继承中比较特殊的几点：</p><ul><li><p>a 标签的字体颜色不能被继承</p></li><li><p>h1-h6标签字体的大下也是不能被继承的</p></li></ul><h3 id="无继承的属性" tabindex="-1"><a class="header-anchor" href="#无继承的属性" aria-hidden="true">#</a> 无继承的属性</h3><ul><li><p>display</p></li><li><p>文本属性：vertical-align、text-decoration</p></li><li><p>盒子模型的属性：宽度、高度、内外边距、边框等</p></li><li><p>背景属性：背景图片、颜色、位置等</p></li><li><p>定位属性：浮动、清除浮动、定位position等</p></li><li><p>生成内容属性：content、counter-reset、counter-increment</p></li><li><p>轮廓样式属性：outline-style、outline-width、outline-color、outline</p></li><li><p>页面样式属性：size、page-break-before、page-break-after</p></li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://www.html.cn/qa/css3/13444.html</li><li>https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors</li></ul>`,58),i=[l];function p(c,o){return n(),a("div",null,i)}const d=s(t,[["render",p],["__file","selector.html.vue"]]);export{d as default};
