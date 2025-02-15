import{_ as a,o as e,c as i,b as t}from"./app-VnZbzlub.js";const r={},n=t(`<h1 id="浅谈浏览器垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#浅谈浏览器垃圾回收机制" aria-hidden="true">#</a> 浅谈浏览器垃圾回收机制</h1><blockquote><p>参考文章： https8</p><p>😕/www.jianshu.com/p/0cdf8f60400d</p></blockquote><h2 id="一、垃圾回收机制原理" tabindex="-1"><a class="header-anchor" href="#一、垃圾回收机制原理" aria-hidden="true">#</a> 一、垃圾回收机制原理</h2><p>由于字符串、对象和数组没有固定大小，所有当他们的大小已知时，才能对他们进行动态的存储分配。JavaScript程序每次创建字符串、数组或对象时，解释器都必须分配内存来存储那个实体。只要像这样动态地分配了内存，最终都要释放这些内存以便他们能够被再用，否则，JavaScript的解释器将会消耗完系统中所有可用的内存，造成系统崩溃。</p><blockquote><p>浏览器内核英文是Rendering Engine/Layout Engine，准确翻译应该是渲染引擎/排版引擎/模板引擎（指是同一个）。</p></blockquote><p>浏览器内核分为两部分，除了渲染引擎之外，就是JavaScript引擎，由于现在JavaScript引擎越来越独立，内核就倾向于只指渲染引擎。</p><p>不同的浏览器内核对网页编写语法的解释有不同，因此同一网页在不同的内核的浏览器里的渲染（显示）效果可能不同，这也是网页编写开发人员需要在不同内核的浏览器中测试网页显示效果的原因。</p><p>!https://secure2.wostatic.cn/static/q7dY1a4Ut3Zb4r5NNGPYT5/image.png?auth_key=1711245163-99R2FVSxDyy47HvV8M2F78-0-3b3060bebb87abfe4d02194efd48c6c4</p><p>!https://secure2.wostatic.cn/static/fPVc1D1QGSb5zvACeK1pNv/image.png?auth_key=1711245163-uq2m1JzY7EPLiDRwfKPMVd-0-0b8b5dd5555a55f9b2ce68ee4536e3de</p><h3 id="_1-什么是渲染引擎-排版引擎-模板引擎" tabindex="-1"><a class="header-anchor" href="#_1-什么是渲染引擎-排版引擎-模板引擎" aria-hidden="true">#</a> 1.什么是渲染引擎/排版引擎/模板引擎？</h3><p>渲染引擎是一种对HTML文档进行解析并将其显示在页面上的工具。它负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要渲染引擎。</p><p>在Mozilla将其渲染引擎（Gecko）作为独立于浏览器的一个配件之后，“渲染引擎”这个词汇才被广泛使用。也就是说，除了Mozilla浏览器，其它浏览器也可以使用Gecko作自己渲染引擎。IE的渲染引擎被称为Trident，被用在许多Windows的应用程式上。</p><h3 id="_2-什么是javascript引擎" tabindex="-1"><a class="header-anchor" href="#_2-什么是javascript引擎" aria-hidden="true">#</a> <strong>2.什么是JavaScript引擎？</strong></h3><p>JavaScript引擎就是能够提供执行JavaScript代码的运行环境。要想了解这一概念，需要了解编译原理的基础概念和现代语言需要的新编译技术。</p><p>JavaScript引擎包括以下部分：</p><blockquote><p>第一， 编译器。主要工作是将源代码编译成抽象语法树，然后在某些引擎中还包含将抽象语法树转换成字节码。</p><p>第二， 解释器。在某些引擎中，解释器主要是接受字节码，解释执行这个字节码，然后也依赖来及回收机制等。</p><p>第三， JIT工具。一个能够能够JIT的工具，将字节码或者抽象语法树转换成本地代码，当然它也需要依赖牢记</p><p>第四， 垃圾回收器和分析工具（profiler）。它们负责垃圾回收和收集引擎中的信息，帮助改善引擎的性能和功效。</p></blockquote><h2 id="二、垃圾回收原理浅析" tabindex="-1"><a class="header-anchor" href="#二、垃圾回收原理浅析" aria-hidden="true">#</a> 二、垃圾回收原理浅析</h2><p>现在各大浏览器通常用采用的垃圾回收有两种方法：标记清除、引用计数。</p><p>现在各大浏览器通常用采用的垃圾回收有两种方法：标记清除、引用计数。 1、标记清除（mark and sweep）  大部分浏览器以此方式进行垃圾回收，当变量进入执行环境（函数中声明变量,执行时）的时候，垃圾回收器将其标记为“进入环境”，当变量离开环境的时候（函数执行结束）将其标记为“离开环境”，在离开环境之后还有的变量则是需要被删除的变量。标记方式不定，可以是某个特殊位的反转或维护一个列表等。  垃圾收集器给内存中的所有变量都加上标记，然后去掉环境中的变量以及被环境中的变量引用的变量的标记。在此之后再被加上的标记的变量即为需要回收的变量，因为环境中的变量已经无法访问到这些变量</p><h3 id="_2、引用计数" tabindex="-1"><a class="header-anchor" href="#_2、引用计数" aria-hidden="true">#</a> <strong>2、引用计数</strong></h3><p>另一种不太常见的垃圾回收策略是引用计数。引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型赋值给该变量时，则这个值的引用次数就是1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数就减1。当这个引用次数变成0时，则说明没有办法再访问这个值了，因而就可以将其所占的内存空间给收回来。这样，垃圾收集器下次再运行时，它就会释放那些引用次数为0的值所占的内存。</p><p>该方式会引起内存泄漏的原因是它不能解决循环引用的问题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sample(){
    var a={};
    var b={};
    a.prop = b;
    b.prop = a;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况下每次调用sample()函数，a和b的引用计数都是2，会使这部分内存永远不会被释放，即内存泄漏。</p>`,24),c=[n];function p(d,s){return e(),i("div",null,c)}const h=a(r,[["render",p],["__file","2.html.vue"]]);export{h as default};
