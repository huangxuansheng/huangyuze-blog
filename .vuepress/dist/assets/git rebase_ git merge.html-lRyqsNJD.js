import{_ as e,o as d,c as a,b as c}from"./app-VnZbzlub.js";const i={},t=c(`<h1 id="git-rebase-和-git-merge的理解" tabindex="-1"><a class="header-anchor" href="#git-rebase-和-git-merge的理解" aria-hidden="true">#</a> git rebase 和 git merge的理解</h1><p><img src="https://static.vue-js.com/77590970-fdd4-11eb-bc6f-3f06e1491664.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>在使用 <code>git</code> 进行版本管理的项目中，当完成一个特性的开发并将其合并到 <code>master</code> 分支时，会有两种方式：</p><ul><li>git merge</li><li>git rebase</li></ul><p><code>git rebase</code> 与 <code>git merge</code>都有相同的作用，都是将一个分支的提交合并到另一分支上，但是在原理上却不相同</p><p>用法上两者也十分的简单：</p><h3 id="git-merge" tabindex="-1"><a class="header-anchor" href="#git-merge" aria-hidden="true">#</a> git merge</h3><p>将当前分支合并到指定分支，命令用法如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git merge xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="git-rebase" tabindex="-1"><a class="header-anchor" href="#git-rebase" aria-hidden="true">#</a> git rebase</h3><p>将当前分支移植到指定分支或指定<code>commit</code>之上，用法如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git rebase -i &lt;commit&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常见的参数有<code>--continue</code>，用于解决冲突之后，继续执行<code>rebase</code></p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git rebase --continue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二、分析" tabindex="-1"><a class="header-anchor" href="#二、分析" aria-hidden="true">#</a> 二、分析</h2><h3 id="git-merge-1" tabindex="-1"><a class="header-anchor" href="#git-merge-1" aria-hidden="true">#</a> git merge</h3><p>通过<code>git merge</code>将当前分支与<code>xxx</code>分支合并，产生的新的<code>commit</code>对象有两个父节点</p><p>如果“指定分支”本身是当前分支的一个直接子节点，则会产生快照合并</p><p>举个例子，<code>bugfix</code>分支是从<code>maste</code>r分支分叉出来的，如下所示：</p><p><img src="https://static.vue-js.com/88410a30-fdd4-11eb-991d-334fd31f0201.png" alt=""></p><p>合并<code> bugfix</code>分支到<code>master</code>分支时，如果<code>master</code>分支的状态没有被更改过，即 <code>bugfix</code>分支的历史记录包含<code>master</code>分支所有的历史记录</p><p>所以通过把<code>master</code>分支的位置移动到<code>bugfix</code>的最新分支上，就完成合并</p><p>如果<code>master</code>分支的历史记录在创建<code>bugfix</code>分支后又有新的提交，如下情况：</p><p><img src="https://static.vue-js.com/929eb220-fdd4-11eb-991d-334fd31f0201.png" alt=""></p><p>这时候使用<code>git merge</code>的时候，会生成一个新的提交，并且<code>master</code>分支的<code>HEAD</code>会移动到新的分支上，如下：</p><p><img src="https://static.vue-js.com/9fdfa3e0-fdd4-11eb-991d-334fd31f0201.png" alt=""></p><p>从上面可以看到，会把两个分支的最新快照以及二者最近的共同祖先进行三方合并，合并的结果是生成一个新的快照</p><h3 id="git-rebase-1" tabindex="-1"><a class="header-anchor" href="#git-rebase-1" aria-hidden="true">#</a> git rebase</h3><p>同样，<code>master</code>分支的历史记录在创建<code>bugfix</code>分支后又有新的提交，如下情况：</p><p><img src="https://static.vue-js.com/ab2d5120-fdd4-11eb-bc6f-3f06e1491664.png" alt=""></p><p>通过<code>git rebase</code>，会变成如下情况：</p><p><img src="https://static.vue-js.com/b72aed70-fdd4-11eb-991d-334fd31f0201.png" alt=""></p><p>在移交过程中，如果发生冲突，需要修改各自的冲突，如下：</p><p><img src="https://static.vue-js.com/c9ba0e80-fdd4-11eb-bc6f-3f06e1491664.png" alt=""></p><p><code>rebase</code>之后，<code>master</code>的<code>HEAD</code>位置不变。因此，要合并<code>master</code>分支和<code>bugfix</code>分支</p><p><img src="https://static.vue-js.com/dc660660-fdd4-11eb-991d-334fd31f0201.png" alt=""></p><p>从上面可以看到，<code>rebase</code>会找到不同的分支的最近共同祖先，如上图的<code>B</code></p><p>然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件（老的提交<code>X</code>和<code>Y</code>也没有被销毁，只是简单地不能再被访问或者使用）</p><p>然后将当前分支指向目标最新位置<code>D</code>, 然后将之前另存为临时文件的修改依序应用</p><h2 id="三、区别" tabindex="-1"><a class="header-anchor" href="#三、区别" aria-hidden="true">#</a> 三、区别</h2><p>从上面可以看到，<code>merge</code>和<code>rebasea</code>都是合并历史记录，但是各自特性不同：</p><h3 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> merge</h3><p>通过<code>merge</code>合并分支会新增一个<code>merge commit</code>，然后将两个分支的历史联系起来</p><p>其实是一种非破坏性的操作，对现有分支不会以任何方式被更改，但是会导致历史记录相对复杂</p><h3 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase" aria-hidden="true">#</a> rebase</h3><p><code>rebase </code>会将整个分支移动到另一个分支上，有效地整合了所有分支上的提交</p><p>主要的好处是历史记录更加清晰，是在原有提交的基础上将差异内容反映进去，消除了 <code>git merge</code>所需的不必要的合并提交</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://zhuanlan.zhihu.com/p/361182707</li><li>https://yuweijun.github.io/git-zh/1-git-branching.html#_rebasing</li><li>https://backlog.com/git-tutorial/cn/stepup/stepup1_4.html</li></ul>`,50),r=[t];function o(s,p){return d(),a("div",null,r)}const n=e(i,[["render",o],["__file","git rebase_ git merge.html.vue"]]);export{n as default};
