# TypeScript

#### 参考链接
[typescript中文手册](https://typescript.bootcss.com/basic-types.html)

[AST抽象语法树](https://astexplorer.net/)

[在线开发 TypeScript](https://www.typescriptlang.org/zh/play)

## 安装 TypeScript

- 命令行运行如下命令，全局安装 TypeScript
```sh
npm install -g typescript
```
- 安装完成后，在控制台运行如下命令，检查安装是否成功(Version 4.4.3)：
```sh
tsc -v 
```

- 运行单独ts文件
```sh
ts-node  [文件名.ts]
```
- 将ts转换为js文件
```sh
tsc  [文件名.ts]
```

`tsc --init`  新建tsconfig.json配置文件


## 基础类型 
布尔值 数字 字符串 数组 元组 枚举
<img :src="$withBase('/ts1.png')" alt='基础类型'>

### 原始类型
```ts
const a:string='foobar'
const b:number=Infinity
const d:boolean=false
const d: null = null
const e: void = undefined
const f: symbol = Symbol()
```
### 数组类型
```ts
const arr1: Array<number> = [1, 2, 3]//纯数字组成
const arr2: number[] = [1, 2, 3]//常见
//元组属于数组的一种，元组中的元素可以不必全部保持类型一致
const foo: [number, string] = [1, 'foo']
```
### 对象类型
```ts
let obj: { foo: String, bar: number } = { foo: 'string', bar: 100 }//必须有foo/bar 数据类型正确
let obj: { foo?: String, bar: number } = { bar: 100 }//foo可有可无
let obj3：{ [string]: string }
obj3.key1 = 'value123'
obj3.key2 = 100//false
```
### 函数类型
```ts
 function sum(a: number, n?: number) {
     return a + b
 }
 sum(10, 20)
 sum(10, '20')
// 回调参数类型限制 
//n?: number加了问号是可选参数
//参数 age：number=20为默认参数
//void 类型表示没有任何类型，一般用于定义方法的时候方法没有返回值。
function foo(callback: (string, number) => void)) {
    callback('string', 100)
}
// 剩余参数 在参数的类型确定而参数个数不确定的情况时，我们需要用到剩余参数，
//它使用 ...将接收到的参数传到一个指定类型的数组中.剩余参数必须配置到参数的最后面。
function sum(one:string,...result:number[]):number{
    console.log(one,...result);
    return 123
}
sum('123',1,2,2,2,2,3,5,5)
//接受任意参数
...rest：number[]
```
### 特殊类型
```ts
const type: 'success' | 'warn' | 'danger' = 'success'
type StringOrNumber = string | Number
const b: StringOrNumber = 'string' //10

mixed/any类型接收任意类型
//any弱类型 mixed强类型
// never类型,永不存在的值类型
//never是任何类型的子类型，可以赋值任何类型。但是没有类型是 never 的子类型或可以赋值给 never 类型，
// 即使 any 类型也不可以赋值给never。这意味着声明 never 类型的变量只能被 never 类型所赋值。
function error(): never {
    throw new Error('抛出错误了');
}
var test = (): never => {//永远拿不到返回值
  while (true) {}
};
```

###  枚举类型
给一组数值取更好的名字。数据中只会出现固定的值
```ts
enum 枚举名 {
    标识符[= 整型常数/字符串],
    标识符[= 整型常数/字符串], 
    ...
    标识符[= 整型常数/字符串],
};

enum flag{
    pedding,
    succes='up',//字符串枚举之后，需要给后面参数赋值
    error=888,
    loading='456'
}
console.log(flag.pedding);//0
console.log(flag.succes);//up
console.log(flag.error);//888
console.log(flag.loading);//889
//如果标识符没有赋值，它的值就是下标。

enum Color {
  red,
  blue,
  green,
}

let color: Color = Color.red;
```

### Object类型
- 除了原始类型的其他类型
```ts
function getObj(options: object|string): object {//联合类型
  return {};
}
console.log(getObj({ xxx: 123 }));
```
## 断言
- 类型断言: 可以用来手动指定一个值的类型
- 类型推断: TS会在没有明确的指定类型的时候推测出一个类型
有下面2种情况: 
  1. 定义变量时赋值了, 推断为对应的类型
  2. 定义变量时没有赋值, 推断为any类型
```ts
/* 
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/
let nums=[110,200,300]
let res=nums.find(i=>i>50)//res可能是number|undefind
let num1=res as number //断言他是number类型，并非转换
let num2=<number>res //jsx不可使用，与标签冲突
```
## 接口
（一种规范，约定结构）最好约束一个规范，约束对象或者函数的类型
```ts
//定义接口
interface Post {
  title: string;
  content: number;
  subTitle?: string;//可选成员
  readonly task: string; //只读成员
}
//定义函数时掉用接口
function printPost(query: Post) {
  console.log(query.title);
  console.log(query.content);
}
//调用函数时 需要符合接口规范,参数&类型必须一样
printPost({
  title: "学习ts",
  content: 789,
});
//定义可选参数接口
interface myGo {
  [abckey: string]: string; //第一个string是key，第二个是value
}
var obj: myGo = {};
obj.lol = "英雄联盟";
obj.dota = "刀塔";
obj.run = 456; //报错
console.log(obj);
```


## 类
- 用来描述一类具体对象的抽象成员
  * public：公有类型，在当前类里面、子类、类外面都可以访问 （默认）
  * protected：保护类型，在当前类里面、子类里面可以访问，在类外部没法访问
  * private：私有类型，在当前类里面可以访问，子类、类外部都没法访问
  * static ： 静态方法，使用的时候类可以访问，比如Promise.all([])

  * readonly 只读属性 无法修改
```ts
//基本使用
class Person {
  name: string;//属性，前面省略了public关键词
  private sex: string;//属性，前面省略了public关键词
  constructor(name: string, sex: string) {//构造函数，实例化类的时候触发的方法
    this.name = name;
    this.sex = sex;
  }
  personcan(can: string): void {
    console.log(`这个${this.name}是${this.sex}的，可以去${can}`);
  }
}
var P1 = new Person("小名", "男");
console.log(P1.name);
P1.personcan("吃饭");
```
### 类与接口
```ts
// 类与接口
interface Eat {
  eat(food: string): void;
}
interface Run {
  run(distance: number): void;
}
// 定义类  接口约束 逗号隔开 implements后是接口约束
class Person implements Eat, Run {
  eat(food: string): void {
    console.log("优雅永不过时的吃" + food);
  }
  run(distance: number): void {
    console.log("站着走" + distance);
  }
}
```
### 接口继承接口

```ts
interface Person extends eat, study {

}
```
### abstract抽象类
- 约束子类当中必须有某一成员
```ts
//定义抽象类
abstract class Animal {
  eat(food: string): void {
    console.log("动物都会吃", food);
  }
  //方法“run”不能具有实现，因为它标记为抽象(只定义不写函数)
  abstract run(distance: number): void;
  //当用了Animal抽象类之后，必须要实现run这个方法
}
class Pig extends Animal {
  run(distance: number): void {
    console.log("随便走", distance);
  }
}
var pg = new Pig();
pg.eat("吃");
pg.run(566);
```
### 继承
extends 关键字
```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Student extends Person {
  constructor(name: string) {
    // 调用父类型构造方法
    super(name);
  }
  go() {
    // 调用父类型的一般方法
    // super.run(distance);
  }
}
```
### get|set
- 通过 getters/setters 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
```ts
class Person {
  firstName: string = "常山";
  lastName: string = "赵子龙";
  get fullName() {
    //获取时触发
    return this.firstName + "---" + this.lastName;
  }
  set fullName(value) {
    //修改时触发
    const names = value.split("---");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const p = new Person();
console.log(p.fullName);

p.firstName = "咏春";
p.lastName = "叶问";
console.log(p.fullName);

p.fullName = "篮球---蔡徐坤";
console.log(p.firstName, p.lastName);

```
### 多态 
子类重写父类的同名方法
### 函数重载 
同一个类里面，函数名字是一样的，但是参数有差别（类型||个数）,就是函数的重载

函数签名 = 函数名称+函数参数+函数参数类型+返回值类型四者合成，包含了实现签名和重载签名
`function funa(value: number, type: string): string` 这就是函数签名（重载签名）


函数重载由一个实现签名 + 一个或多个重载签名合成

参考：https://www.jianshu.com/p/98a4291d7ff4

### 函数重写
发生在父子类里面，方法名和参数也一样
## 泛型

泛型是指附属于函数、类、接口、类型别名之上的类型，当某个函数的参数，返回值和内部使用时的类型无法确定的情况下，就可以使用泛型来进行约束
```ts
//泛型 声明这个函数、接口或类的时候不指定具体类型 调用在指定
function createArray<T>(length: number, value: T): T[] {
  return Array<T>(length).fill(value);
}
//型类型“T”就像一个参数，可供传递，如我们在调用函数时在尖括号中传入，则这个T(泛型)的类型就是number,
//这样我们就可以any类型都换成泛型就可以了，这样就当泛型参数传入number类型时，函数的返回值就是number类型的数组
console.log(createArray<string>(25, "das"));
console.log(createArray<number>(25, 1326));
```
类型声明模块declare
```ts
import { camelase } from "lodash";
declare function camelase(params: string): string;
```

## Iterators 和 Generators
迭代器和生成器

## 装饰器

:::tip 概念
它是一个表达式,该表达式被执行后，返回一个函数,函数的入参分别为 target、name 和 descriptor
,执行该函数后，可能返回 descriptor 对象，用于配置 target 对象
::: 

装饰器的分类
### 类装饰器（Class decorators）
```ts
// 类装饰器
function Log(target: any) {
console.log(target);
console.log("in log decorator");
}

@Log
class A {
constructor() {
  console.log("constructor");
  // logger.log('ddd');
}
}
// new A();类装饰器在没new对象的时候，js就已经执行了类装饰器的方法
```
### 属性装饰器（Property decorators）
定义属性装饰器，用来装饰类的属性。它接收两个参数：
- target: Object - 被装饰的类
- propertyKey: string | symbol - 被装饰类的属性名

```ts
function logProperty(params: any) {
  // target--->类的原型对象；attr--->传入的参数url
  return function(target: any, attr: any) {
    console.log("属性装饰器;", target, attr);
    target[attr] = params;
  };
}

class HttpClient {
  @logProperty("http://www.baidu.com")
  public url: any | undefined;
  constructor() {}
  getUrl() {
    console.log("getUrl", this.url);
  }
}

console.log(new HttpClient().getUrl());
```
### 方法装饰器（Method decorators）
用来装饰类的方法。它接收三个参数：
- target: Object - 被装饰的类
- propertyKey: string | symbol - 方法名
- descriptor: TypePropertyDescript - 属性描述符

方法的装饰
```ts
// 方法装饰器
function GET(url: string) {
  console.log("entry GET decorator");
  return function(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("entry GET decorator function");
    !target.$Meta && (target.$Meta = {});
    target.$Meta[methodName] = url;
  };
}

class HelloService {
  constructor() {
    console.log("constructor");
  }
  //使用
  @GET("xx")
  getUser() {
    console.log("getUser function called");
  }
}
new HelloService().getUser();
// console.log((<any>HelloService).$Meta);
// console.log((new HelloService() as any).$Meta);

```
### 参数装饰器（Parameter decorators）
装饰函数参数，它接收三个参数：
- target: Object - 被装饰的类
- propertyKey: string | symbol - 方法名
- parameterIndex: number - 方法中参数的索引值
```ts
function PathParam(paramName: string) {
  return function(target: any, methodName: string, paramIndex: number) {
    !target.$Meta && (target.$Meta = {});
    target.$Meta[paramIndex] = paramName;
  };
}

class HelloService {
  constructor() {}
  getUser(@PathParam("userId") userId: string) {}
}

console.log((<any>HelloService).prototype.$Meta); // {'0':'userId'}
```
## 编译原理
Scanner 扫描仪 Parser 解析器 Binder 绑定器 Checker 检查器 Emitter 发射器
<img style='' :src="$withBase('/ts2.png')" alt='ts编译原理'>


## 面试题

### 类型推论 & 可赋值性

类型推论：没给标志，ts系统推导出来的，声明的应该是什么类型

可赋值性：数组，布尔，数字，对象，函数，类、字符串，字面量类型，满足以下任⼀条件时，A类型可以赋值给B类型。 
  - A是B的⼦类型 
  - A是any类型

### 什么是类型断言？

可以用来手动指定一个值的类型，定义变量时赋值了, 推断为对应的类型
  - 方式一: <类型>值
  - 方式二: 值 as 类型  tsx中只能用这种方式
  
缺点：运行时可能才报错

### type 和 interface的异同

- type（类型别名）侧重于描述类型
- interface侧重于描述数据结构，这个结构该有哪些类型的变量

相同点：
- 都可以描述⼀个对象或者函数
- interface和type都可以拓展，interface可以extends type, type也可以extends interface. 效果差不多，语法不同。

不同点：
  - 类型别名可以⽤于其它类型 （联合类型、元组类型、基本类型（原始值）），interface不⽀持
  - interface 可以多次定义 并被视为合并所有声明成员 type 不⽀持
  - type 能使⽤ in 关键字⽣成映射类型，但 interface 不⾏。

### 有哪些类型装饰器？执行的顺序是怎样的？

类装饰器、属性装饰器、方法装饰器、参数装饰器

#### 执行顺序
- 有多个参数装饰器时：从最后⼀个参数依次向前执⾏ 
- ⽅法和⽅法参数中参数装饰器先执⾏。 
- 类装饰器总是最后执⾏。 
- ⽅法和属性装饰器，谁在前⾯谁先执⾏。因为参数属于⽅法⼀部分，所以参数会⼀直紧紧挨着⽅法 执⾏。

### 接口类型有哪些种类
属性类接口 函数类接口 可索引接口 类类型接口 扩展接口


### TypeScript和JavaScript的区别
- 更规范，ts是js的超集，即你可以在ts中使用原生js语法。
- ts在开发时能给出编译错误，js是弱类型语言需要运行时暴露
- ts为强类型语言，代码可读性强，不允许类型随意转换，对值所具有的结构进行类型检查
- TypeScript是面向对象的编程语言，提供了类、模块和接口，更易于构建组件和维护
