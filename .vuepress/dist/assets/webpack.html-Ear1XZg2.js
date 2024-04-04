import{_ as p,r as t,o,c,a as l,d as n,e as s,f as i,b as a}from"./app-fXA47Sip.js";const r={},u=a('<h2 id="webpack简介" tabindex="-1"><a class="header-anchor" href="#webpack简介" aria-hidden="true">#</a> webpack简介</h2><p>webpack是一个 <strong>模块打包工具</strong>，支持所有的打包语法，比如 <code>ES Module</code>、<code>CommonJS</code>、<code>CMD</code>、<code>AMD</code>。初期的webpack是用来模块打包js的，发展到现在，已经可以打包很多种文件类型，比如 <code>css</code>、<code>img</code> 。</p><p>优化打包速度最有效的方法就是保持 <code>nodejs</code> 和 <code>webpack</code> 为最新版本。</p>',3),d=a(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>安装 <code>webpack</code> 建议根据项目安装而不是全局安装，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli --save-dev

<span class="token comment"># 或</span>

<span class="token function">yarn</span> <span class="token function">add</span> webpack webpack-cli <span class="token parameter variable">--dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候执行 <code>webpack -v</code> 是查不到版本号的，因为 <code>nodejs</code> 默认是去全局找 <code>webpack</code>，这个时候是找不到的，nodejs还提供了 <code>npx webpack -v</code> 这个方法。</p><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><p>如果不生成配置文件，webpack会按照默认配置去打包，如果我们想自定义配置文件可以在项目根目录添加 <code>webpack.config.js</code> 来自定义配置信息，配置文件的名字也可以自定义：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认配置或者默认配置文件</span>
npx webpack

<span class="token comment"># 自定义配置并且修改默认配置名字</span>
npx webpack <span class="token parameter variable">--config</span> my-webpack-config.js

<span class="token comment"># npm scripts 中配置 &quot;build&quot;: &quot;webpack&quot;</span>
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个简单的配置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span> <span class="token comment">// production：默认，生产环境，代码被压缩；development：开发环境，代码不压缩</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>entry</code> 可以写成这样：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实，开始安装的 <code>webpack-cli</code> 就是为了在命令行工具中可以正确地执行命令行工具。</p><h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> loader</h2><p><code>webpack</code> 可以使用 <code>loader</code> 来预处理文件。这允许你打包除 <code>JavaScript</code> 之外的任何静态资源，js的打包是webpack内置的。你可以使用 <code>Node.js</code> 来很简单地编写自己的 <code>loader</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.jpg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="file-loader" tabindex="-1"><a class="header-anchor" href="#file-loader" aria-hidden="true">#</a> file-loader</h3><p>处理文件模块的 webpack loader。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.jpg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 设置输出文件名</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name]_[hash].[ext]&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 设置输出文件夹</span>
            <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;images/&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 指定目标文件的自定义公共路径</span>
            <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;assets/&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url-loader" tabindex="-1"><a class="header-anchor" href="#url-loader" aria-hidden="true">#</a> url-loader</h3><p><code>file-loader</code> 的增强版，除了上述功能，还可以将文件转换为 <code>base64 URI</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.jpg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 设置输出文件名</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name]_[hash].[ext]&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 设置需要转换base64的文件大小（太大的文件转换后需要更大的请求压力）</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">2048</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css相关" tabindex="-1"><a class="header-anchor" href="#css相关" aria-hidden="true">#</a> css相关</h3><h4 id="style-loader-和-css-loader" tabindex="-1"><a class="header-anchor" href="#style-loader-和-css-loader" aria-hidden="true">#</a> style-loader 和 css-loader</h4><ul><li>css-loader：加入 a.css 中引入了 b.css 和 c.css，css-loader 会将其合并成一个css文件</li><li>style-loader：将合并后的 css 文件挂载到 head 标签内</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sass-loader" tabindex="-1"><a class="header-anchor" href="#sass-loader" aria-hidden="true">#</a> sass-loader</h4><p>如果使用 scss、less、stylus 等 css 预处理器。例如，我们要使用 sass 预处理器，首先要安装 sass-loader 和 node-sass。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),k=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"loader的加载顺序是从右到左、从下到上，所以处理 scss 文件时，将 sass-loader放在最后。")],-1),v=a(`<h4 id="postcss-loader" tabindex="-1"><a class="header-anchor" href="#postcss-loader" aria-hidden="true">#</a> postcss-loader</h4><p>通过 postcss-loader 来给新属性添加厂商前缀。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.scss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> 
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> 
          <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;postcss-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// postcss.config.js</span>
<span class="token comment">// 首先安装 autoprefixer</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 a.css 中引入了 b.css 和 c.css，当读到 <code>@import(&#39;./b.css&#39;)</code> 时就会略过 postcss-loader 和 sass-loader，直接从 css-loader 直接运行，可以通过 <code>importLoaders</code> 配置来改善。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.scss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> 
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">importLoaders</span><span class="token operator">:</span> <span class="token number">2</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> 
          <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;postcss-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="css模块化" tabindex="-1"><a class="header-anchor" href="#css模块化" aria-hidden="true">#</a> css模块化</h4><p>在 <code>index.js</code> 通过import <code>&#39;./index.css&#39;</code> 引入样式会全局有效，如果想在某个模块有效，如何去做呢？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 模块A</span>

<span class="token keyword">import</span> style <span class="token keyword">from</span> <span class="token string">&#39;index.css&#39;</span>

<span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> headImg
img<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>style<span class="token punctuation">.</span>avator<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.scss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> 
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">importLoaders</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> 
          <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;postcss-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h4><p>字体文件只需要通过 file-loader 将字体文件转移到打包文件夹内即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(eot|ttf|svg|woff)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;fonts/&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>  
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> plugin</h2><p>可以在webpack运行到某个时刻的时候，做一些事情。</p><h3 id="html-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#html-webpack-plugin" aria-hidden="true">#</a> html-webpack-plugin</h3><p>会在打包之后，自动生成一个 html 文件，并把打包生成的 js 自动引入到这个 html 文件中。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是我们可能需要在 index.html 中写一些默认代码，比如 meta，这时就可以按照某个模板来生成这个 index.html。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;src/index.html&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clean-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#clean-webpack-plugin" aria-hidden="true">#</a> clean-webpack-plugin</h3><p>会在打包前先清空打包目标文件夹的文件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> CleanWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;src/index.html&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多个输出文件" tabindex="-1"><a class="header-anchor" href="#多个输出文件" aria-hidden="true">#</a> 多个输出文件</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> CleanWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sub</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们的打包后的文件中，index.html 需要给后台做配置文件，assets 文件夹需要放在 cdn 上，这样的话我们的就需要在 output 中设置 publicPath：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> CleanWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sub</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;http://cdn.com.cn&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sourcemap" tabindex="-1"><a class="header-anchor" href="#sourcemap" aria-hidden="true">#</a> sourceMap</h2><p>如果运行打包后的文件，某个地方有错误，控制台会显示打包后的文件的某个位置有错误，如果我们想知道错误来自于源文件的所在位置，那么就需要借助 sourceMap 了。所以 sourceMap 其实就是一种映射，它知道 dist 目录 main.js 文件的某个错误，实际对应的是 src 目录下 index.js 文件的第一行。</p><p>sourceMap 通过配置中的 devtool 去配置，参数的含义大概有以下几种情况：</p><table><thead><tr><th>devtool</th><th>作用</th></tr></thead><tbody><tr><td>source-map</td><td>生成 map 文件，错误精确到行和列</td></tr><tr><td>inline-source-map</td><td>inline，不生成 map 文件，以 base64 形式嵌入js中，错误精确到行和列</td></tr><tr><td>cheap-source-map</td><td>cheap，错误只精确到行，且只针对业务代码，不包括第三方模块</td></tr><tr><td>cheap-module-source-map</td><td>cheap-module，错误只精确到行，且只针对业务代码，包括第三方模块</td></tr><tr><td>eval-source-map</td><td>eval，不生成 map 文件，在 js 中以 eval 方法的形式出现，但是复杂项目的提示是不全的</td></tr></tbody></table><p><strong>最佳实践</strong></p><ol><li>develop：cheap-module-eval-source-map，提示比较全，打包速度快</li><li>production：cheap-module-source-map，提示更全面，打包稍微慢</li></ol><h2 id="监听变动" tabindex="-1"><a class="header-anchor" href="#监听变动" aria-hidden="true">#</a> 监听变动</h2><h3 id="webpack-watch" tabindex="-1"><a class="header-anchor" href="#webpack-watch" aria-hidden="true">#</a> webpack --watch</h3><p>监听文件的变动，自动进行打包。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;watch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --watch&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#webpack-dev-server" aria-hidden="true">#</a> webpack-dev-server</h3><p>上面的html的打开的方式还是需要通过 <code>file</code> 协议打开一个本地文件，在浏览器地址是这样的：<code>file:///Users/reco/workSpace/git/personal/work/test.html</code>。这样的话发送 <code>AJAX</code> 请求就有问题了，因为发送请求需要 <code>http</code> 或者 <code>https</code> 协议，这时需要的是在本地启动一个服务，我们可以借助 <code>webpack-dev-server</code> （打包时将打包的文件放在内存中，提高打包速度）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> webpack-dev-server <span class="token parameter variable">--dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;watch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --watch&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sub</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;http://cdn.com.cn&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 默认端口 8080</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 本地服务的根目录</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 服务启动后自动打开浏览器</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 端口</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token comment">// 跨域代理</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>自己写一个简单的 webpack-dev-server</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node server.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// server.js</span>

<span class="token keyword">const</span> espress <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webapck <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackDevMiddleware <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-dev-middleware&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.config.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> complier <span class="token operator">=</span> <span class="token function">webpack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// publicPath 不设置的话默认 &#39;/&#39;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">webpackDevMiddleware</span><span class="token punctuation">(</span>complier<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> config<span class="token punctuation">.</span>output<span class="token punctuation">.</span>publicPath
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server is running!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>**缺点：**需要自己手动刷新</p></blockquote><p>上面这种方式就是在node中使用webpack，这是除了在命令行中的使用 <code>webpack</code> 的另一种方式。</p><p><strong>开启 Hot Module Replacement</strong></p><p>解决下面的问题：</p><ol><li>修改页面某个颜色，页面会刷新，导致动态添加的 dom 会消失；</li><li>一个页面同时引入两个模块的js，修改某个模块的js，页面会刷新，导致灵感一个模块的js也会初始化。</li></ol><p>存在的问题：</p><ol><li>在多页面应用里，html更改时并不会刷新，需手动，所以这种情况下，可以去掉更更新功能。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 开启 HMR</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 只有在开启 HMR 的时候才会监听变动并刷新</span>
    <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 2. 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> counter <span class="token keyword">from</span> <span class="token string">&#39;./counter&#39;</span>
<span class="token keyword">import</span> number <span class="token keyword">from</span> <span class="token string">&#39;./number&#39;</span>

<span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">number</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 如果 HMR 生效的话</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 监听文件的变动</span>
  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">&#39;./number&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 做一些清空操作</span>
    <span class="token comment">// ...</span>

    <span class="token function">number</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当引用 css 的时候只需要引用，并不需要上面这一坨代码，就是因为 <code>css-loader</code> 已经内置了上面的方法，就像在写 vue、react 代码不需要写上面这坨代码一样，他们的 loader 中也内置了这些方法。只有在使用一些特殊的文件类型才需要。（react 是借助 babel-preset 实现的）</p><blockquote><p>业务开发时，一般不是设置 hotOnly 这样才能试试显示最新代码和更改效果</p></blockquote><h2 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> Babel</h2><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># babel-loader将 webpack 与 babel 建立关联</span>
<span class="token comment"># @babel/core 语法转换</span>

<span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-loader @babel/core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法转换" tabindex="-1"><a class="header-anchor" href="#语法转换" aria-hidden="true">#</a> 语法转换</h3><p>这个时候还是不可以转换，还需要这样</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @babel/preset-env --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后配置 options</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量、对象转换" tabindex="-1"><a class="header-anchor" href="#变量、对象转换" aria-hidden="true">#</a> 变量、对象转换</h3><p>这个时候也只能对一些语法进行转换，比如 “箭头函数”，如果想要对 <code>Promise</code> 这些新的对象进行转换（准确来说，浏览器可能不支持新规范的的一些对象，所以需要单独封装这些方法，然后在全局注入），还需要这样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> @babel/polyfill
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在入口文件</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/polyfill&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// or</span>
<span class="token keyword">import</span> <span class="token string">&quot;@babel/polyfill&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候会默认全部转换，这样会增加很多兼容性代码，如果我们想按需引入：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有的同学问：<code>babel-polyfill</code> 这样引用可不可以？答案是可以，但是在使用 <code>useBuiltIns: &#39;usage&#39;</code> 时就不可以了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在入口配置</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel-polyfill&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./app/js&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@babel/preset-env</code> 还可以拥有其他配置参数，比如：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    targets<span class="token operator">:</span> <span class="token punctuation">{</span>
      chrome<span class="token operator">:</span> <span class="token string">&quot;67&quot;</span>
    <span class="token punctuation">}</span>，
    useBuiltIns<span class="token operator">:</span> &#39;usage&#39;
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面配置的意思是，只需要兼容 chrome 浏览器 67 版本以上就可以了，这样转译时会根据浏览器的兼容性来合理处理转译结果。</p><h3 id="组件库的封装" tabindex="-1"><a class="header-anchor" href="#组件库的封装" aria-hidden="true">#</a> 组件库的封装</h3><p>如果只是开发业务代码，使用上面 <code>presets</code> + <code>babel-polyfill</code> 的方式就可以了，但是 <code>babel-polyfill</code> 有一个确定就是会将变量全局注入，这里可以使用 <code>transform-runtime</code> 来以闭包（或其他）的形式来进行引入，避免全局环境的污染。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @babel/plugin-transform-runtime

<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> @babel/runtime
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> 
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">[</span>
            <span class="token string">&quot;@babel/plugin-transform-runtime&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token string-property property">&quot;absoluteRuntime&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;helpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;regenerator&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;useESModules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>corejs</code> 的值设置为 2，才会将 <code>map</code> 、<code>promise</code>等方法打包到 <code>main.js</code>，当然还需要引入另一个依赖：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> @babel/runtime-corejs2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="babelrc" tabindex="-1"><a class="header-anchor" href="#babelrc" aria-hidden="true">#</a> <code>.babelrc</code></h3><p>如果 babel 的配置过于复杂，内容较多，可以将其单独放在 <code>.babelrc</code> 文件内：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    useBuiltIns<span class="token operator">:</span> &#39;usage&#39;
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react打包" tabindex="-1"><a class="header-anchor" href="#react打包" aria-hidden="true">#</a> React打包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @babel/preset-react
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      useBuiltIns<span class="token operator">:</span> &#39;usage&#39;
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;@babel/preset-react&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pragma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dom&quot;</span><span class="token punctuation">,</span> <span class="token comment">// default pragma is React.createElement</span>
        <span class="token property">&quot;pragmaFrag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DomFrag&quot;</span><span class="token punctuation">,</span> <span class="token comment">// default is React.Fragment</span>
        <span class="token property">&quot;throwIfNamespace&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// defaults to true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> Tree Shaking</h2><blockquote><p>只支持 ES Module，因为 ES Module 是静态引入</p></blockquote><p>作用：模块按需引入，不会将全部代码引用过来</p><h3 id="development" tabindex="-1"><a class="header-anchor" href="#development" aria-hidden="true">#</a> development</h3><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> ture
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>usedExports</code> 意思就是检查一下哪些模块被使用了再做打包。</p><p><strong>package.json</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果引入的一些 <code>css</code> 或依赖不需要 <code>Tree Shaking</code>，那将 <code>sideEffects</code> 设置为 <code>[&quot;./a.css&quot;, &quot;@babel/polyfill&quot;]</code>，如果没有需要配置的，直接设置为 <code>false</code> 即可。</p><h3 id="production" tabindex="-1"><a class="header-anchor" href="#production" aria-hidden="true">#</a> production</h3><p>线上环境是不需要配置 <code>usedExports</code> 的，但是还是需要配置 <code>package.json</code>。</p><h2 id="配置文件整理" tabindex="-1"><a class="header-anchor" href="#配置文件整理" aria-hidden="true">#</a> 配置文件整理</h2><p>比如在 <code>Vue</code> 官方的脚手架中 <code>webpack</code> 的配置文件都放在 <code>build</code> 文件夹中，如果我们希望对配置文件进行整理的话，需要做一下处理：</p><ol><li><p>将开发环境和线上环境的公共配置提取到 <code>/build/webpack.base.js</code> 中</p></li><li><p>分别在开发环境和线上环境的配置中合并公共配置，配置合并需要使用 <code>webpack-merge</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /build/webpack.dev.js</span>
<span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> baseConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.base.js&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> devConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>baseConfig<span class="token punctuation">,</span> devConfig<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改 <code>package.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --config ./build/webpack.dev.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config ./build/webpack.prod.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>这个时候较之前打包输出和清空的目录就应该修改一下了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;src/index.html&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;dist&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">root</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>更新</strong>：上面 <code>CleanWebpackPlugin</code> 的语法是 <code>1.0</code> 版本的。<code>2.0</code> 它所清空的文件夹默认就是打包输出目录，无需再单独指定。</p></li></ol><h2 id="code-splitting" tabindex="-1"><a class="header-anchor" href="#code-splitting" aria-hidden="true">#</a> Code Splitting</h2><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3><p>代码拆分——通过对公用代码的拆分来提升性能。</p><p>本来代码拆分和 <code>webpack</code> 是没关系的，只不过是一种优化手段，比如将公共代码单独打包到一个文件内，业务代码打包到另一个文件内，从而提升加载体验。这里可以运用多入口文件的方式分开打包。</p><h3 id="webpack实现" tabindex="-1"><a class="header-anchor" href="#webpack实现" aria-hidden="true">#</a> webpack实现</h3><p><code>webpack4.0</code> 实现代码分割，分两种情况：</p><ol><li>同步代码需要配置 <code>splitChunks</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>异步代码不需要做任何操作，异步代码比如下面这种情况：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createElement</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> _ <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
    div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> element
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">createElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  documnet<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这个写法会报错，因为动态来获取依赖的这种方式是试验性语法，目前还不支持，需要借助插件：<code>babel-plugin-dynamic-import-webpack</code></p></blockquote><hr><h3 id="splitchunksplugin" tabindex="-1"><a class="header-anchor" href="#splitchunksplugin" aria-hidden="true">#</a> SplitChunksPlugin</h3><p><strong>魔法注释</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createElement</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;loadsh&#39; */</span><span class="token punctuation">,</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> _ <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
    div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> element
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">createElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  documnet<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>babel-plugin-dynamic-import-webpack</code> 不支持魔法注释，所以要换成 <code>@babel/plugin-syntax-dynamic-import</code>，这个时候会打包生成 <code>vendors~lodash.js</code>，如果需要修改打包后的名字，可以设置 <code>optimization</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&quot;async&quot;</span><span class="token punctuation">,</span> <span class="token comment">// async 异步，initial 同步， all 全部，但是同步还需要配置 cacheGroups，这是重点</span>
      <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span> <span class="token comment">// 可以处理依赖的最小值</span>
      <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 可以处理依赖的最大值</span>
      <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 被引用2次及以上，才会被拆分</span>
      <span class="token literal-property property">maxAsyncRequests</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 最大请求次数，也就是拆分时最多拆分5个包</span>
      <span class="token literal-property property">maxInitialRequests</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// 入口最大请求次数，也就是拆分时最多拆分3个包</span>
      <span class="token literal-property property">automaticNameDelimiter</span><span class="token operator">:</span> <span class="token string">&#39;~&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 文件生成时名字的连接符</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 拆分块的名称，提供true将根据块和缓存组密钥自动生成名称。</span>
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">vendors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 优先级，数值越大优先级越高，符合多个规则时优先权重高的规则</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;venders.js&quot;</span> <span class="token comment">// 打包时的名字</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 不在 verdors 内的打包</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token literal-property property">reuseExistingChunk</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 如果一个模块被打包过了，再次遇到，就不会再打包了，而是会去找之前打包过的那个模块</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lazy-loading-chunk" tabindex="-1"><a class="header-anchor" href="#lazy-loading-chunk" aria-hidden="true">#</a> Lazy Loading &amp; Chunk</h2><h3 id="lazy-loading" tabindex="-1"><a class="header-anchor" href="#lazy-loading" aria-hidden="true">#</a> Lazy Loading</h3><p><code>webpack</code> 可以识别 <code>ECMAScript</code> 的import返回的promise，并进行分割，实现懒加载，但是必须依赖 <code>babel-polyfill</code> 或者 <code>promise-polyfill</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createElement</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;loadsh&#39; */</span><span class="token punctuation">,</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> _ <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
    div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> element
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    documnet<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 <code>ES7</code> 的 <code>async</code> 和 <code>await</code> 函数重构一下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createElement</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> _ <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;loadsh&#39; */</span><span class="token punctuation">,</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> element
<span class="token punctuation">}</span>

document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    documnet<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chunk" tabindex="-1"><a class="header-anchor" href="#chunk" aria-hidden="true">#</a> Chunk</h3><p>像上面的 <code>Lazy Loading</code> 所拆分打包的每一个文件都是一个 <code>Chunk</code>，而前面的配置参数<code> minChunks: 2</code> 的意思就是：当有2个以上的 · 使用到某个依赖时，才会对其进行拆分成一个 <code>Chunk</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;http://cdn.com.cn&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;[name].chunk.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 打包之后的入口文件之外的js的会在这里过滤一下名字</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包分析" tabindex="-1"><a class="header-anchor" href="#打包分析" aria-hidden="true">#</a> 打包分析</h2><p><code>http://webpack.js.org/guides/code-splitting/#bundle-analysis</code>，这是官网对打包分析的几个总结，其中最好用的是 <code>webpack-bundle-analyzer</code>。</p><p><strong>webpack 希望我们怎么样写代码呢？</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 原来我们是这么写代码的</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token number">123</span>
  documnet<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码的加载利用率是较低的，因为创建元素实在点击事件触发后才触发的，所以可以分离出去：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 现在我们可以这么写</span>

<span class="token comment">// 将生成代码的代码放到另一个文件中去，比如叫 click.js</span>
<span class="token keyword">function</span> <span class="token function">createElement</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token number">123</span>
  documnet<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> createElement


document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./click.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token keyword">default</span><span class="token operator">:</span> func<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以我们现在写代码应该考虑的不是缓存的问题，而是代码的利用率。所以在 <code>chunks</code> 默认设置为 <code>async</code> 而不是 <code>all</code>，是因为，同步的代码只能增加缓存，而对性能提升非常有限。</p><blockquote><p>谷歌浏览器查看网页的利用率：控制台 --&gt; ctrl+shift+p --&gt; coverage</p></blockquote><hr><p>比如点击登录的时候会出现一个模态框，首页的加载并不需要加载模态框的，但是点击登录按钮再加载，模态框的加载是会变慢的，这就需要下面的两个方法了：<code>Preloading</code> 和 <code>Prefetching</code>。</p><h3 id="prefetching" tabindex="-1"><a class="header-anchor" href="#prefetching" aria-hidden="true">#</a> Prefetching</h3><p><strong>非主要业务模块会在主要业务模块加载完之后，空闲时间再去加载。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 现在我们可以这么写</span>

<span class="token comment">// 将生成代码的代码放到另一个文件中去，比如叫 click.js</span>
<span class="token keyword">function</span> <span class="token function">createElement</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token number">123</span>
  documnet<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> createElement


document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 通过魔法注释来开启 webpackPrefetch</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackPrefetch: true */</span><span class="token string">&#39;./click.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token keyword">default</span><span class="token operator">:</span> func<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="preloading" tabindex="-1"><a class="header-anchor" href="#preloading" aria-hidden="true">#</a> Preloading</h3><p><strong>而这个模式下，非主要业务模块会和主要业务模块一起加载</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 现在我们可以这么写</span>

<span class="token comment">// 将生成代码的代码放到另一个文件中去，比如叫 click.js</span>
<span class="token keyword">function</span> <span class="token function">createElement</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token number">123</span>
  documnet<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> createElement


document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 通过魔法注释来开启 webpackPreload</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackPreload: true */</span><span class="token string">&#39;./click.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token keyword">default</span><span class="token operator">:</span> func<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>目前考虑前端的性能优化，不能总是考虑缓存，而是主要考虑代码的使用率。</p><h2 id="css代码分割" tabindex="-1"><a class="header-anchor" href="#css代码分割" aria-hidden="true">#</a> CSS代码分割</h2><h3 id="css分割" tabindex="-1"><a class="header-anchor" href="#css分割" aria-hidden="true">#</a> CSS分割</h3><p>不做处理的情况下，<code>webpack</code> 会将 <code>css</code> 打包到 <code>js</code> 中去，如果需要生成单独的 <code>css</code> 文件，可以使用 <code>MiniCssExtractPlugin</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev mini-css-extract-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置步骤：</p><ol><li>配置 <code>plugins</code>；</li><li>将 <code>style-loader</code> 改为 <code>MiniCssExtractPlugin.loader</code>；</li><li>如果设置了 <code>Tree Shaking</code>，需要将 <code>&quot;sideEffects&quot;: false</code> 改为 <code>&quot;sideEffects&quot;: [&quot;*.css&quot;]</code>。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 设置输出文件的命名规则</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].css&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;[id].css&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// you can specify a publicPath here</span>
              <span class="token comment">// by default it uses publicPath in webpackOptions.output</span>
              <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;../&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">hmr</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> ture
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*.css&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-压缩" tabindex="-1"><a class="header-anchor" href="#css-压缩" aria-hidden="true">#</a> CSS 压缩</h3><p><code>optimize-css-assets-webpack-plugin</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> OptimizeCSSAssetsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并-css" tabindex="-1"><a class="header-anchor" href="#合并-css" aria-hidden="true">#</a> 合并 CSS</h3><p>将多个入口文件的 <code>css</code> 单独放到每个文件中，需要设置 <code>optimization.splitChunks.cacheGroups</code> 为对应的多个分组。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">recursiveIssuer</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span>issuer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">recursiveIssuer</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>issuer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> m<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src/foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bar</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src/bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fooStyles</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token punctuation">(</span>m<span class="token punctuation">,</span> c<span class="token punctuation">,</span> entry <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            m<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;CssModule&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">recursiveIssuer</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">===</span> entry<span class="token punctuation">,</span>
          <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">barStyles</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token punctuation">(</span>m<span class="token punctuation">,</span> c<span class="token punctuation">,</span> entry <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            m<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;CssModule&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">recursiveIssuer</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token operator">===</span> entry<span class="token punctuation">,</span>
          <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].css&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器缓存" tabindex="-1"><a class="header-anchor" href="#浏览器缓存" aria-hidden="true">#</a> 浏览器缓存</h2><p><code>contenthash</code> 如果内容没有变化，hash值不会变；如果内容变化，hash就会变。这样项目重新打包上线后，项目就不会全部重新加载了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;http://cdn.com.cn&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contenthash].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contenthash].chunk.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 <code>webpack</code> 是老版本，还需要配置一下 <code>runtimeChunk</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">runtimeChunk</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;runtime&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为：代码有没有变化的逻辑关系被打包到一个叫 <code>manifest</code> 的东西来里，旧版本的 <code>webpack</code> 是会将这个东西直接打包到每个 <code>chunk</code> 文件中，而所以导致每次打包都不一致，这样的话配置好 <code>runtimeChunk</code>之后，所有的<code>manifest</code> 都会提取到名为 <code>runtime</code> 的文件内，所以就不会影响打包了。</p><h2 id="shimming-垫片" tabindex="-1"><a class="header-anchor" href="#shimming-垫片" aria-hidden="true">#</a> Shimming (垫片)</h2><p><code>babel-polyfill</code> 就是一个全局垫片，<code>babel-plugin-transform-runtime</code> 是一个局部垫片。下面介绍几种垫片：</p><ol><li><p>如果我们在 <code>a.js</code> 引用了一个 <code>utils.js</code> 的里面的方法，而这个方法需要借助 <code>jquery</code>， <code>a.js</code> 引用了<code>jquery</code>，而 <code>utils.js</code> 没有，这时候是会报错的，所以可以借助 <code>webpack.ProvidePlugin</code> 全局 在使用 <code>$</code> 的地方引用 <code>jquery</code>。</p></li><li><p><code>webpack.ProvidePlugin</code> 还有另外一个功能：如果我们想要将 <code>$.each</code> 功能直接这样使用 <code>$each</code>，我们在下面这么来配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> webpack <span class="token keyword">from</span> <span class="token string">&#39;webpack&#39;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProvidePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">$</span><span class="token operator">:</span> <span class="token string">&#39;jquery&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">$each</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;each&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>每个模块的 <code>this</code> 都是指向当前模块的，如果想让每个模块都指向 <code>window</code>，我们需要借助 <code>imports-loader</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;imports-loader?this=?window&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.common.js</span>

<span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> devConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.dev.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> prodConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.prod.js&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> commonConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">env</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>env <span class="token operator">&amp;&amp;</span> env<span class="token punctuation">.</span>production<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig<span class="token punctuation">,</span> prodConfig<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig<span class="token punctuation">,</span> devConfig<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev-build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config ./build/webpack.common.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --config ./build/webpack.common.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --env.production --config ./build/webpack.common.js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="区分模式打包" tabindex="-1"><a class="header-anchor" href="#区分模式打包" aria-hidden="true">#</a> 区分模式打包</h2><p>区别：</p><ol><li>develop 模式下的sourceMap 是非常全的；</li><li>develop 模式下的代码不需要压缩；</li></ol><h2 id="函数库打包" tabindex="-1"><a class="header-anchor" href="#函数库打包" aria-hidden="true">#</a> 函数库打包</h2><h3 id="指定代码运行范围" tabindex="-1"><a class="header-anchor" href="#指定代码运行范围" aria-hidden="true">#</a> 指定代码运行范围</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;library.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&#39;library&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 通过 script 标签引入，全局注入 library 这个变量</span>
    <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span> <span class="token comment">// 模块引入方式 ES Module 和 CommonJS</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>library</code> 和 <code>libraryTarget</code> 两个是配合使用的，<code>library</code> 的意思就是指定暴露的全局变量的名字，但是这个全局变量挂在到哪里呢？这就由 <code>libraryTarget</code> 来指定了。<code>umd</code> 的意思是允许它与CommonJS，AMD和全局变量一起使用，除了它还有 <code>this/window/global/amd</code> 等值可以设置。</p><h3 id="略过不需要的依赖" tabindex="-1"><a class="header-anchor" href="#略过不需要的依赖" aria-hidden="true">#</a> 略过不需要的依赖</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;library.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;lodash&quot;</span><span class="token punctuation">]</span> <span class="token comment">// 打包时当遇到 lodash 这个依赖就自动忽略</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如我的这个函数库依赖 <code>jquery</code>，但是用户也可能引用了 <code>jquery</code>，这样就会多打包一份，所以为了减少代码量，这时就可以通过 <code>externals</code> 来忽略 <code>jquery</code>（<code>externals</code> 支持 <code>Arrary/Object</code>）。</p><h2 id="progressive-web-application" tabindex="-1"><a class="header-anchor" href="#progressive-web-application" aria-hidden="true">#</a> Progressive Web Application</h2><p>第一次访问成功，第二次访问时如果服务挂掉了，这个时候让项目走缓存，而不是显示服务错误页面。</p><p><code>PWA</code> 的技术原理是 <code>server work</code>，这里可以借助 <code>workbox-webpack-plugin</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> WorkboxPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;workbox-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">WorkboxPlugin<span class="token punctuation">.</span>GenerateSW</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">clientsClaim</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">skipWaiting</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打包之后就产生两个文件：<code>service-work.js</code> 和 <code>precache-manifest.js</code>，下面还需要在入口文件写一下相关配置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;serviceWorker&#39;</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;/service-work.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">registeration</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">service-work registered</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">service-work register error</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typescript-的打包配置" tabindex="-1"><a class="header-anchor" href="#typescript-的打包配置" aria-hidden="true">#</a> TypeScript 的打包配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> ts-loader <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.tsx&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.tsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;ts-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还需要创建 <code>tsconfig.json</code>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 打包到那个文件夹内</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 使用es6的模块化方式</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 打包成 es5 语法</span>
    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">// 允许在ts文件里在引入一些js模块</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们引入了 <code>jquery</code> 这个模块，要想在使用 <code>jquery</code> 语法时让typescript有效，还需要引入 <code>@types/jquery</code> 这个依赖（这是 2.0 的做法，1.0 稍有区别），不然会报错：<code>TS2688: Cannot find type definition file for &#39;unist&#39;.</code>。</p><h2 id="webpackdevserver-请求转发" tabindex="-1"><a class="header-anchor" href="#webpackdevserver-请求转发" aria-hidden="true">#</a> WebpackDevServer 请求转发</h2><h3 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> proxy</h3><p><code>WebpackDevServer</code> 的 <code>proxy</code> 是可以直接配置代理的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/react/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;https://www.xxx.com&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 可以对 https 生效</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 改变接口路由</span>
          <span class="token string-property property">&#39;header.json&#39;</span><span class="token operator">:</span> <span class="token string">&#39;demo.json&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 有些接口为了防止爬虫是不允许改变 origin 的，这里设置为 true 就可以了</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 改变请求头</span>
          <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;www.xxx.com&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="historyapifallback" tabindex="-1"><a class="header-anchor" href="#historyapifallback" aria-hidden="true">#</a> historyApiFallback</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">historyApiFallback</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个项目里在写单页面应用时，某个路由我们没有配置某个路由 A，访问时会显示 <code>can&#39;t get A</code>，这是我们可以配置 <code>historyApiFallback: true</code> 来将没有配置的页面直接转向 <code>index.html</code>，详细用法见 webpack官网。</p><h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESLint</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token comment"># eslint 是命令工具 eslint-loader 是在编译er或启动项目时实时报错</span>
<span class="token function">npm</span> <span class="token function">install</span> eslint eslint-loader --save-dev

<span class="token comment"># 初始化 eslint 规范，生成 .eslintrc.js 文件</span>
<span class="token comment"># Aribnb 是一种很变态的规范</span>
npx eslint init 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node-modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 先进行代码检验，再编译</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 如果过程出现错误，会通过蒙层来提示错误</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>eslint-loader</code> 还有许多配置参数可以设置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node-modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 如果有小的错误，可以直接修复</span>
              <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 优化打包速度</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span> <span class="token comment">// 虽然在 babel-loader 前面，但是可以提前执行(实际测试这个参数放在这里有问题，这里的loader就按照它本该有的循序去排列它，不要使用这个参数去控制了)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> 
          <span class="token string">&#39;babel-loader&#39;</span>
        <span class="token punctuation">]</span> <span class="token comment">// 先进行代码检验，再编译</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 如果过程出现错误，会通过蒙层来提示错误</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;airbnb&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;babel-eslint&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;react/prefer-stateless-function&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;react/jsx-filename-extension&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">document</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 解决全局变量出错</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>VSCode 安装 ESLint 插件，实时显示错误。</p></blockquote>`,210),m=n("code",null,"Eslint parsing error: Unexpected token <",-1),b={href:"https://github.com/BenoitZugmeyer/eslint-plugin-html",target:"_blank",rel:"noopener noreferrer"},g=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("实际项目中为了不影响打包速度，可以不配置 "),n("code",null,"eslint-loader"),s("，而是直接通过 git 钩子，在提交命令代码时进行检测，当然这个时候就放弃了实时报错的特性。")]),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"git"),s(` 钩子 eslint src
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])],-1),y=a(`<h2 id="提升打包速度" tabindex="-1"><a class="header-anchor" href="#提升打包速度" aria-hidden="true">#</a> 提升打包速度</h2><ol><li>跟上技术的迭代，保持最新（Node/Npm/Yarn）</li><li>在尽快少的模块上使用 <code>loader</code>，比如通过 <code>include</code> 和 <code>exclude</code> 来指定打包监听范围<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>尽量精简 <code>plugin</code>，并且确保其可靠性</li><li>合理配置 extensions<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置太多多引发多次查找，注意精简</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.jsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.css&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 引用如果引用文件时只写到上级目录，会默认引用 index 文件，这样如果没有 index 回去找 child 文件，也不要配置特别多，尽量不使用</span>
    <span class="token literal-property property">mainFiles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;child&#39;</span><span class="token punctuation">]</span>
    <span class="token comment">// 配置别名，缩短引用名称</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;@component&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src/component&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="loader-原理" tabindex="-1"><a class="header-anchor" href="#loader-原理" aria-hidden="true">#</a> Loader 原理</h2><h3 id="小案例" tabindex="-1"><a class="header-anchor" href="#小案例" aria-hidden="true">#</a> 小案例</h3><p>创建一个可以将 字符串 <code>reco</code> 替换为 <code>luan</code> 的简单 <code>loader</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 新建一个loader /loaders/replaceLoader.js</span>

<span class="token comment">// 这里不可以使用箭头函数</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;reco&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;luan&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;/loaders/replaceLoader.js&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取参数" tabindex="-1"><a class="header-anchor" href="#获取参数" aria-hidden="true">#</a> 获取参数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;loader-utils&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 参数会被放在 this.query 里面</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>query

  <span class="token comment">// 有的时候 options 可能不是对象而是字符串，我们可以借助 loader-utils</span>
  <span class="token keyword">const</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;loader-utils&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;reco&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;/loaders/replaceLoader.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;luan&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="丰富反馈内容" tabindex="-1"><a class="header-anchor" href="#丰富反馈内容" aria-hidden="true">#</a> 丰富反馈内容</h3><p>借助 <code>this.callback</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span>
  <span class="token literal-property property">err</span><span class="token operator">:</span> Error <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> string <span class="token operator">|</span> Buffer<span class="token punctuation">,</span>
  sourceMap<span class="token operator">?</span><span class="token operator">:</span> sourceMap<span class="token punctuation">,</span>
  meta<span class="token operator">?</span><span class="token operator">:</span> any
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;loader-utils&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;reco&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">,</span> sourceMap<span class="token punctuation">,</span> meta<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="resolveloader" tabindex="-1"><a class="header-anchor" href="#resolveloader" aria-hidden="true">#</a> resolveLoader</h3><p>作用是寻找 loader 时可以直接去我们自定义的文件夹内去寻找。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">resolveLoader</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./loaders&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;replaceLoader2&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;/loaders/replaceLoader.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;luan&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步处理" tabindex="-1"><a class="header-anchor" href="#异步处理" aria-hidden="true">#</a> 异步处理</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;loader-utils&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">asunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;reco&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;loader-utils&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;reco&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">,</span> sourceMap<span class="token punctuation">,</span> meta<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>loader 还可以做哪些工作呢？比如 给代码添加 try catch，本地化，替换中英文</p></blockquote><h2 id="plugin-原理" tabindex="-1"><a class="header-anchor" href="#plugin-原理" aria-hidden="true">#</a> Plugin 原理</h2><h3 id="简单-plugin" tabindex="-1"><a class="header-anchor" href="#简单-plugin" aria-hidden="true">#</a> 简单 Plugin</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /plugins/copyright-webpack-plugin.js</span>

<span class="token keyword">class</span> <span class="token class-name">CopyrightWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token comment">// { name: &#39;reco&#39; }</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// compiler 是 webapck 的一个实例，存放着配置等所有的东西</span>
  <span class="token function">apply</span> <span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * hooks       是钩子
     * emit        将打包好的文件放到输出目录之前（异步钩子）
     * compilation 和本次打包相关的东西
    */</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">&#39;CopyrightWebpackPlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 增加一个 txt 文件</span>
      compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span><span class="token string">&#39;copyright.txt&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * source 文本内容
         * size   文本字节大小
        */</span>
        <span class="token function-variable function">source</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token string">&#39;copyright by reco_luan&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">size</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token number">22</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 必须回调</span>
      <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// compile 同步钩子，不需要callback</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>compile<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;CopyrightWebpackPlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;同步钩子&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> CopyrightWebpackPlugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /webpack.config.js</span>

<span class="token keyword">const</span> CopyrightWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;/plugins/copyright-webpack-plugin.js&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CopyrightWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;reco&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="node-调试" tabindex="-1"><a class="header-anchor" href="#node-调试" aria-hidden="true">#</a> Node 调试</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;debug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node --inspect --inspect-brk node_modules/webpack/bin/webpack.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>--inspect</code> 开启 Node 调试</li><li><code>--inspect-brk</code> 在代码第一行添加一个 debug 命令</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CopyrightWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span> <span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>compile<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;CopyrightWebpackPlugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 打断点</span>
      <span class="token keyword">debugger</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;同步钩子&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> CopyrightWebpackPlugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开控制台的 Node 图标，就进入了 Node 调试</p><h2 id="bundler-源码编写" tabindex="-1"><a class="header-anchor" href="#bundler-源码编写" aria-hidden="true">#</a> Bundler 源码编写</h2><h3 id="入口文件分析" tabindex="-1"><a class="header-anchor" href="#入口文件分析" aria-hidden="true">#</a> 入口文件分析</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/core&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 分析抽象语法树</span>
<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/traverse&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default


<span class="token comment">// ************ 入口文件分析 **************</span>
<span class="token keyword">const</span> <span class="token function-variable function">moduleAnalyser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 读取文件</span>
  <span class="token keyword">const</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">//分析抽象语法树</span>
  <span class="token keyword">const</span> ast <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 分析依赖</span>
  <span class="token keyword">let</span> dependencies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">// 第一个语法是抽象语法树</span>
    <span class="token function">ImportDeclaration</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> node <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取依赖的相对路径</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value
      <span class="token keyword">const</span> dirname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
      <span class="token keyword">const</span> newFile <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

      <span class="token comment">// key: 将相对路径 value: 绝对路径</span>
      dependencies<span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> newFile
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 将 ES6 语法转译为 浏览器可以执行的语法</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> babel<span class="token punctuation">.</span><span class="token function">transformFromAst</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 需要安装 @babel/preset-env</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token doc-comment comment">/**
   * filename     // 入口文件
   * dependencies // 依赖关系
   * code         // 打包后的代码
  */</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    filename<span class="token punctuation">,</span>
    dependencies<span class="token punctuation">,</span>
    code
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> moduleInfo <span class="token operator">=</span> <span class="token function">moduleAnalyser</span><span class="token punctuation">(</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleInfo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖图谱" tabindex="-1"><a class="header-anchor" href="#依赖图谱" aria-hidden="true">#</a> 依赖图谱</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/core&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 分析抽象语法树</span>
<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/traverse&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default

<span class="token comment">// ************ 入口文件分析 **************</span>
<span class="token keyword">const</span> <span class="token function-variable function">moduleAnalyser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 读取文件</span>
  <span class="token keyword">const</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">//分析抽象语法树</span>
  <span class="token keyword">const</span> ast <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 分析依赖</span>
  <span class="token keyword">let</span> dependencies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">// 第一个语法是抽象语法树</span>
    <span class="token function">ImportDeclaration</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> node <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取依赖的相对路径</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value
      <span class="token keyword">const</span> dirname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
      <span class="token keyword">const</span> newFile <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

      <span class="token comment">// key: 将相对路径 value: 绝对路径</span>
      dependencies<span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> newFile
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 将 ES6 语法转译为 浏览器可以执行的语法</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> babel<span class="token punctuation">.</span><span class="token function">transformFromAst</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 需要安装 @babel/preset-env</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token doc-comment comment">/**
   * filename     // 入口文件
   * dependencies // 依赖关系
   * code         // 打包后的代码
  */</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    filename<span class="token punctuation">,</span>
    dependencies<span class="token punctuation">,</span>
    code
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// const moduleInfo = moduleAnalyser(&#39;./src/index.js&#39;)</span>
<span class="token comment">// console.log(moduleInfo)</span>

<span class="token comment">// ************ 依赖图谱 **************</span>
<span class="token keyword">const</span> <span class="token function-variable function">makeDependenciesGraph</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 首先在依赖图谱中插入入口文件的分析</span>
  <span class="token keyword">const</span> entryModule <span class="token operator">=</span> <span class="token function">moduleAnalyser</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span>
  <span class="token keyword">const</span> graphArray <span class="token operator">=</span> <span class="token punctuation">[</span> entryModule <span class="token punctuation">]</span>

  <span class="token doc-comment comment">/**
   * 循环入口文件的依赖并将其添加到 graphArray 中，因为 graphArray 是动态的，
   * graphArray.length 也是动态的，所以可以进入下一轮循环
   */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> graphArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> graphArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> dependencies <span class="token punctuation">}</span> <span class="token operator">=</span> item
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token keyword">in</span> dependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        graphArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">moduleAnalyser</span><span class="token punctuation">(</span>dependencies<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 依键值对的形式重新组合数据</span>
  <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  graphArray<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    graph<span class="token punctuation">[</span>item<span class="token punctuation">.</span>filename<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">dependencies</span><span class="token operator">:</span> item<span class="token punctuation">.</span>dependencies<span class="token punctuation">,</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> item<span class="token punctuation">.</span>code
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> graph
<span class="token punctuation">}</span>

<span class="token keyword">const</span> graphInfo <span class="token operator">=</span> <span class="token function">makeDependenciesGraph</span><span class="token punctuation">(</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>graphInfo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成可用代码" tabindex="-1"><a class="header-anchor" href="#生成可用代码" aria-hidden="true">#</a> 生成可用代码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/core&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 分析抽象语法树</span>
<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/traverse&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default

<span class="token comment">// ************ 入口文件分析 **************</span>
<span class="token keyword">const</span> <span class="token function-variable function">moduleAnalyser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 读取文件</span>
  <span class="token keyword">const</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">//分析抽象语法树</span>
  <span class="token keyword">const</span> ast <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 分析依赖</span>
  <span class="token keyword">let</span> dependencies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">// 第一个语法是抽象语法树</span>
    <span class="token function">ImportDeclaration</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> node <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取依赖的相对路径</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value
      <span class="token keyword">const</span> dirname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
      <span class="token keyword">const</span> newFile <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

      <span class="token comment">// key: 将相对路径 value: 绝对路径</span>
      dependencies<span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> newFile
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 将 ES6 语法转译为 浏览器可以执行的语法</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> babel<span class="token punctuation">.</span><span class="token function">transformFromAst</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 需要安装 @babel/preset-env</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token doc-comment comment">/**
   * filename     // 入口文件
   * dependencies // 依赖关系
   * code         // 打包后的代码
  */</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    filename<span class="token punctuation">,</span>
    dependencies<span class="token punctuation">,</span>
    code
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// const moduleInfo = moduleAnalyser(&#39;./src/index.js&#39;)</span>
<span class="token comment">// console.log(moduleInfo)</span>

<span class="token comment">// ************ 依赖图谱 *****************</span>
<span class="token keyword">const</span> <span class="token function-variable function">makeDependenciesGraph</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 首先在依赖图谱中插入入口文件的分析</span>
  <span class="token keyword">const</span> entryModule <span class="token operator">=</span> <span class="token function">moduleAnalyser</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span>
  <span class="token keyword">const</span> graphArray <span class="token operator">=</span> <span class="token punctuation">[</span> entryModule <span class="token punctuation">]</span>

  <span class="token doc-comment comment">/**
   * 循环入口文件的依赖并将其添加到 graphArray 中，因为 graphArray 是动态的，
   * graphArray.length 也是动态的，所以可以进入下一轮循环
   */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> graphArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> graphArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> dependencies <span class="token punctuation">}</span> <span class="token operator">=</span> item
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token keyword">in</span> dependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        graphArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">moduleAnalyser</span><span class="token punctuation">(</span>dependencies<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 依键值对的形式重新组合数据</span>
  <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  graphArray<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    graph<span class="token punctuation">[</span>item<span class="token punctuation">.</span>filename<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">dependencies</span><span class="token operator">:</span> item<span class="token punctuation">.</span>dependencies<span class="token punctuation">,</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> item<span class="token punctuation">.</span>code
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> graph
<span class="token punctuation">}</span>

<span class="token comment">// const graphInfo = makeDependenciesGraph(&#39;./src/index.js&#39;)</span>
<span class="token comment">// console.log(graphInfo)</span>

<span class="token comment">// ************ 生成代码 *****************</span>
<span class="token keyword">const</span> <span class="token function-variable function">generateCode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 依赖树是一个对象，需要解析成字符串</span>
  <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token function">makeDependenciesGraph</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token doc-comment comment">/**
   * 依赖树每个模块对应的代码都需要 require/modules 对象，所以需要自己来构建
   */</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    (function (graph) {
      function require (module) {
        // require 需要引用相对路径，所以创建 localRequire
        function localRequire (relativePath) {
          return require(graph[module].dependencies[relativePath])
        }

        // 没有 exports 对象，需要手动创建
        // 切记，这里的 分号 是必须有的
        var exports = {};
        (function (require, exports, code) {
          // 执行代码
          eval(code)
        })(localRequire, exports, graph[module].code)

        // 导出后别的依赖，才能进行引用
        return exports
      }
      require(&#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entry<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;)
    })(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>graph<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)
  </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">generateCode</span><span class="token punctuation">(</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="深入学习" tabindex="-1"><a class="header-anchor" href="#深入学习" aria-hidden="true">#</a> 深入学习</h2><h3 id="createreactapp" tabindex="-1"><a class="header-anchor" href="#createreactapp" aria-hidden="true">#</a> CreateReactApp</h3><h3 id="vue-cli" tabindex="-1"><a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a> vue-cli</h3><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h3><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="清除性能报错" tabindex="-1"><a class="header-anchor" href="#清除性能报错" aria-hidden="true">#</a> 清除性能报错</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">performance</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动一个服务" tabindex="-1"><a class="header-anchor" href="#启动一个服务" aria-hidden="true">#</a> 启动一个服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> http-server <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 dist 目录 作为根目录启动服务：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http-server dist&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46);function h(f,x){const e=t("ExternalLinkIcon");return o(),c("div",null,[u,l(" more "),d,k,v,n("p",null,[s("如果报错 "),m,s("，可以借助 "),n("a",b,[s("eslint-plugin-html"),i(e)]),s("来解决。")]),g,y])}const j=p(r,[["render",h],["__file","webpack.html.vue"]]);export{j as default};