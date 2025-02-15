import{_ as e,o as i,c as a,b as n}from"./app-VnZbzlub.js";const d={},l=n(`<h1 id="浏览器重绘与重排的区别" tabindex="-1"><a class="header-anchor" href="#浏览器重绘与重排的区别" aria-hidden="true">#</a> 浏览器重绘与重排的区别?</h1><ul><li>重排: 部分渲染树（或者整个渲染树）需要重新分析并且节点尺寸需要重新计算，表现为重新生成布局，重新排列元素</li><li>重绘: 由于节点的几何属性发生改变或者由于样式发生改变，例如改变元素背景色时，屏幕上的部分内容需要更新，表现为某些元素的外观被改变</li></ul><p>单单改变元素的外观，肯定不会引起网页重新生成布局，但当浏览器完成重排之后，将会重新绘制受到此次重排影响的部分</p><p>重排和重绘代价是高昂的，它们会破坏用户体验，并且让UI展示非常迟缓，而相比之下重排的性能影响更大，在两者无法避免的情况下，一般我们宁可选择代价更小的重绘。</p><h2 id="如何触发重排和重绘" tabindex="-1"><a class="header-anchor" href="#如何触发重排和重绘" aria-hidden="true">#</a> 如何触发重排和重绘？</h2><p>任何改变用来构建渲染树的信息都会导致一次重排或重绘：</p><ul><li>添加、删除、更新DOM节点</li><li>通过display: none隐藏一个DOM节点-触发重排和重绘</li><li>通过visibility: hidden隐藏一个DOM节点-只触发重绘，因为没有几何变化</li><li>移动或者给页面中的DOM节点添加动画</li><li>添加一个样式表，调整样式属性</li><li>用户行为，例如调整窗口大小，改变字号，或者滚动。</li></ul><h2 id="如何避免重绘或者重排" tabindex="-1"><a class="header-anchor" href="#如何避免重绘或者重排" aria-hidden="true">#</a> 如何避免重绘或者重排？</h2><h3 id="集中改变样式" tabindex="-1"><a class="header-anchor" href="#集中改变样式" aria-hidden="true">#</a> 集中改变样式</h3><p>我们往往通过改变class的方式来集中改变样式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 判断是否是黑色系样式
const theme = isDark ? &#39;dark&#39; : &#39;light&#39;

// 根据判断来设置不同的class
ele.setAttribute(&#39;className&#39;, theme)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用documentfragment" tabindex="-1"><a class="header-anchor" href="#使用documentfragment" aria-hidden="true">#</a> 使用DocumentFragment</h3><p>我们可以通过createDocumentFragment创建一个游离于DOM树之外的节点，然后在此节点上批量操作，最后插入DOM树中，因此只触发一次重排</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var fragment = document.createDocumentFragment();

for (let i = 0;i&lt;10;i++){
  let node = document.createElement(&quot;p&quot;);
  node.innerHTML = i;
  fragment.appendChild(node);
}

document.body.appendChild(fragment);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提升为合成层" tabindex="-1"><a class="header-anchor" href="#提升为合成层" aria-hidden="true">#</a> 提升为合成层</h2><p>将元素提升为合成层有以下优点：</p><ul><li>合成层的位图，会交由 GPU 合成，比 CPU 处理要快</li><li>当需要 repaint 时，只需要 repaint 本身，不会影响到其他的层</li><li>对于 transform 和 opacity 效果，不会触发 layout 和 paint</li></ul><p>提升合成层的最好方式是使用 CSS 的 will-change 属性：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#target {
  will-change: transform;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),t=[l];function r(s,c){return i(),a("div",null,t)}const m=e(d,[["render",r],["__file","5.html.vue"]]);export{m as default};
