import{_ as e,o as c,c as a,b as d}from"./app-VnZbzlub.js";const o={},t=d('<h1 id="git中-fork-clone-branch这三个区别" tabindex="-1"><a class="header-anchor" href="#git中-fork-clone-branch这三个区别" aria-hidden="true">#</a> Git中 fork, clone,branch这三个区别?</h1><p><img src="https://static.vue-js.com/9c4eb9a0-f7ad-11eb-bc6f-3f06e1491664.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><h3 id="fork" tabindex="-1"><a class="header-anchor" href="#fork" aria-hidden="true">#</a> fork</h3><p><code>fork</code>，英语翻译过来就是叉子，动词形式则是分叉，如下图，从左到右，一条直线变成多条直线</p><p><img src="https://static.vue-js.com/ad04ade0-f7ad-11eb-991d-334fd31f0201.png" alt=""></p><p>转到<code>git</code>仓库中，<code>fork</code>则可以代表分叉、克隆 出一个（仓库的）新拷贝</p><p><img src="https://static.vue-js.com/b4b31450-f7ad-11eb-991d-334fd31f0201.png" alt=""></p><p>包含了原来的仓库（即upstream repository，上游仓库）所有内容，如分支、Tag、提交</p><p>如果想将你的修改合并到原项目中时，可以通过的 Pull Request 把你的提交贡献回 原仓库</p><h3 id="clone" tabindex="-1"><a class="header-anchor" href="#clone" aria-hidden="true">#</a> clone</h3><p><code>clone</code>，译为克隆，它的作用是将文件从远程代码仓下载到本地，从而形成一个本地代码仓</p><p>执行<code>clone</code>命令后，会在当前目录下创建一个名为<code>xxx</code>的目录，并在这个目录下初始化一个 <code>.git</code> 文件夹，然后从中读取最新版本的文件的拷贝</p><p>默认配置下远程 <code>Git</code> 仓库中的每一个文件的每一个版本都将被拉取下来</p><h3 id="branch" tabindex="-1"><a class="header-anchor" href="#branch" aria-hidden="true">#</a> branch</h3><p><code>branch</code>，译为分支，其作用简单而言就是开启另一个分支， 使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线</p><p><code> Git</code> 处理分支的方式十分轻量，创建新分支这一操作几乎能在瞬间完成，并且在不同分支之间的切换操作也是一样便捷</p><p>在我们开发中，默认只有一条<code>master</code>分支，如下图所示：</p><p><img src="https://static.vue-js.com/7fa8e9c0-f923-11eb-991d-334fd31f0201.png" alt=""></p><p>通过<code>git branch </code>可以创建一个分支，但并不会自动切换到新分支中去</p><p><img src="https://static.vue-js.com/89efd560-f923-11eb-bc6f-3f06e1491664.png" alt=""></p><p>通过<code>git checkout</code>可以切换到另一个<code>testing</code>分支</p><p><img src="https://static.vue-js.com/91d1cef0-f923-11eb-bc6f-3f06e1491664.png" alt=""></p><h2 id="二、如何使用" tabindex="-1"><a class="header-anchor" href="#二、如何使用" aria-hidden="true">#</a> 二、如何使用</h2><h3 id="fork-1" tabindex="-1"><a class="header-anchor" href="#fork-1" aria-hidden="true">#</a> fork</h3><p>当你在<code>github</code>发现感兴趣开源项目的时候，可以通过点击<code>github</code>仓库中右上角<code>fork</code>标识的按钮，如下图：</p><p><img src="https://static.vue-js.com/bc4c4510-f7ad-11eb-991d-334fd31f0201.png" alt=""></p><p>点击这个操作后会将这个仓库的文件、提交历史、issues和其余东西的仓库复制到自己的<code>github</code>仓库中，而你本地仓库是不会存在任何更改</p><p>然后你就可以通过<code>git clone</code>对你这个复制的远程仓库进行克隆</p><p>后续更改任何东西都可以在本地完成，如<code>git add</code>、<code>git commit</code>一系列的操作，然后通过<code>push</code>命令推到自己的远程仓库</p><p>如果希望对方接受你的修改，可以通过发送<code>pull requests</code>给对方，如果对方接受。则会将你的修改内容更新到仓库中</p><p><img src="https://static.vue-js.com/c5265a40-f7ad-11eb-991d-334fd31f0201.png" alt=""></p><p>整体流程如下图：</p><p><img src="https://static.vue-js.com/ced8ce10-f7ad-11eb-bc6f-3f06e1491664.png" alt=""></p><h3 id="clone-1" tabindex="-1"><a class="header-anchor" href="#clone-1" aria-hidden="true">#</a> clone</h3><p>在<code>github</code>中，开源项目右侧存在<code>code</code>按钮，点击后则会显示开源项目<code>url</code>信息，如下图所示：</p><p><img src="https://static.vue-js.com/d8685090-f7ad-11eb-bc6f-3f06e1491664.png" alt=""></p><p>通过<code>git clone xxx</code>则能完成远程项目的下载</p><h3 id="branch-1" tabindex="-1"><a class="header-anchor" href="#branch-1" aria-hidden="true">#</a> branch</h3><p>可通过<code>git branch</code>进行查看当前的分支状态，</p><p>如果给了<code>--list</code>，或者没有非选项参数，现有的分支将被列出；当前的分支将以绿色突出显示，并标有星号</p><p>以及通过<code>git branch</code>创建一个新的分支出来</p><h2 id="三、区别" tabindex="-1"><a class="header-anchor" href="#三、区别" aria-hidden="true">#</a> 三、区别</h2><p>其三者区别如下：</p><ul><li>fork 只能对代码仓进行操作，且 fork 不属于 git 的命令，通常用于代码仓托管平台的一种“操作”</li><li>clone 是 git 的一种命令，它的作用是将文件从远程代码仓下载到本地，从而形成一个本地代码仓</li><li>branch 特征与 fork 很类似，fork 得到的是一个新的、自己的代码仓，而 branch 得到的是一个代码仓的一个新分支</li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://git-scm.com/book/zh/v2/Git-基础-获取-Git-仓库</li><li>https://git-scm.com/book/zh/v2/Git-分支-分支简介</li></ul>',47),r=[t];function i(h,p){return c(),a("div",null,r)}const n=e(o,[["render",i],["__file","fork_clone_branch.html.vue"]]);export{n as default};
