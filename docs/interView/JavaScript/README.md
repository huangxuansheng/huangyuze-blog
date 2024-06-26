## javascript是什么

### 1.概念：

是一种运行在客户端（浏览器）的编程语言，实现人机交互效果。

### 2.作用：

![img](https://img-blog.csdnimg.cn/img_convert/d1ba314196bc541bcf4763082145992e.png)

### 3.组成：

ECMAScript:

规定了Js基础语法核心知识，如：变量、分支语句、循环语句、对象等

Web APIs:

DOM:操作文档，如对页面元素进行移动，大小， 添加删除等操作
BOM：操作浏览器，如页面弹窗，检测窗口宽 度，存储数据到浏览器等
查资料网站：mdn

![img](https://img-blog.csdnimg.cn/img_convert/1ca8f94f2b378dee7b204b47d5df5853.png)

## javascript书写位置

![img](https://img-blog.csdnimg.cn/img_convert/9dcf8f755cd69179856631aac40f719c.png)


1.内部js
直接写在html文件里，用script标签包住

eg:

![img](https://img-blog.csdnimg.cn/img_convert/0f05fe4a7472c58ad88c3a0b06f8289d.png)

![img](https://img-blog.csdnimg.cn/img_convert/5e2aad686cdfcb1716855cd84793bf4d.png)

2.外部js
代码写在以,js结尾的文件里

语法：通过script标签，引入到htnl页面中

![img](https://img-blog.csdnimg.cn/img_convert/770f6d9d28241b6b5c68b66f98b98dc6.png)



3.内联js
代码写在标签内部

![img](https://img-blog.csdnimg.cn/img_convert/c80df4e0fdae82c685e979bb8055ba34.png)

javascript注释、结束符
注释

![img](https://img-blog.csdnimg.cn/img_convert/5e60791ae3db45f0bd02492108e49e43.png)

结束符

![img](https://img-blog.csdnimg.cn/img_convert/dd8e7e9500234ea199da620cc2d71e29.png)

输入和输出语法
语法的概念：人和计算机打交道的规则约定

输入输出也可以理解为人和计算机的交互，用户通过键盘，鼠标向计算机输入信息，计算机处理后再展示结果给用户，这就是一次输入输出过程。

输出语法：

1.

![img](https://img-blog.csdnimg.cn/img_convert/1ec2f1df5f3e847a47c24fe49f4e138d.png)

document：文档

作用：向body内输出内容

注意：若输出内容为标签，也会被解析成网页元素

2.

![img](https://img-blog.csdnimg.cn/img_convert/61004bc95b06bb2a71dad7783061598a.png)

页面弹出警告对话框

3.

![img](https://img-blog.csdnimg.cn/img_convert/61004bc95b06bb2a71dad7783061598a.png)

控制台输出语法，程序员调试使用 console(控制台)log(日志)

页面不显示，调试工具里看

![img](https://img-blog.csdnimg.cn/img_convert/e137d75d6df1649891998981c2d1753b.png)

输入语法：

1.

![img](https://img-blog.csdnimg.cn/img_convert/f6579584481b6bcf6047042eb373945d.png)

作用：显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字

![img](https://img-blog.csdnimg.cn/img_convert/d6f593977a56828a33be9b2651688f43.png)

执行顺序：

![img](https://img-blog.csdnimg.cn/img_convert/45d259d5e2c91f76059b75f2b22b5c41.png)

字面量
在计算机中描述 事/物

![img](https://img-blog.csdnimg.cn/img_convert/52a9097e6aa196c95fae27ab7e1e9599.png)

二.变量
1.变量是什么
变量是计算机存储数据的容器

1.变量：

一个装东西的盒子，是计算机中用来存储数据的容器，它可以让计算机变得有记忆。

变量是容器，不是数据

生活中的变量：HTML标签、教师、宿舍.....

2.变量基本使用
1.声明变量 （一个变量只能声明一次）

语法：声明关键字（let：允许、许可、让）、变量名（标识）

![img](https://img-blog.csdnimg.cn/img_convert/141f9ca10473ddcd0457980bd414c693.png)

eg:(age 即为变量名，也是标识符)

2.变量赋值：

变量名=值 （把值赋给变量）

![img](https://img-blog.csdnimg.cn/img_convert/5d9ea76ee444339cffcc673a8734efa6.png)

变量初始化

![img](https://img-blog.csdnimg.cn/img_convert/d25683947c93cf96a202fa2fedf99902.png)

3.更新变量

变量赋值后，还可以通过简单地给它一个不同的值来更新它。

![img](https://img-blog.csdnimg.cn/img_convert/a3043316149fa0f59939a480779a2ee2.png)

一次只能存一个值，19覆盖18

4.声明多个变量

![img](https://img-blog.csdnimg.cn/img_convert/6c232213ff56063c6630c6ebbf9dede3.png)

案例1：

![img](https://img-blog.csdnimg.cn/img_convert/e912881b18a5c2628552f0b51d007307.png)

案例2：

交换两个变量值：使用一个临时变量作为中间存储

![img](https://img-blog.csdnimg.cn/img_convert/9f06454f482f076090723602cb479045.png)

3.变量的本质
内存：计算机中存储数据的地方，相当于一个空间

![img](https://img-blog.csdnimg.cn/img_convert/95d2532e4b412125e256e2402b40eb23.png)

4.变量命名规则与规范
规则：必须遵守，否则报错

规范：建议，不报错

1.规则：

不能用关键字
关键字：有特殊含义的字符，js内置的一些英语词汇，如：let、var、if、for等。

只能用下划线(_)、字母(a)、数字、$组成，且不能用数字开头。
字母严格区分大小写，如Age和age是不同变量
2.规范

起名要有意义
遵守小驼峰算命法
第一个单词首字母小写，后面每个单词首字母大写，如：userName

![img](https://img-blog.csdnimg.cn/img_convert/01c192993cd78efe2071b7d1d9331cce.png)

5.let和var的区别

![img](https://img-blog.csdnimg.cn/img_convert/eadf9f40a41913bbcaf99616cc1ce2a5.png)