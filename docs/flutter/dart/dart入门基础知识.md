# Dart入门基础知识

## 1.入口方法

```dart
main(){
  print('hello dart');
}
```

或者：

```dart
//void代表没有返回值
void main(){
  print('hello dart');
}
```

## **2.Dart变量**

dart是一种强大的脚本语言，可以不预先定义变量的类型，dart会自动类型推导

   可以通过var的关键字声明变量，也可通过显式类型来声明

```dart
如：
    var str = 'i am dart';
    string str = 'i am dart';
    var str =123;
    int str =123;

注意： var关键字和具体类型不要同时写，如：var int str =123;   报错
```

## **3.Dart的命名规则**

 1）.变量名称必须有数字，字母，下划线，和美元符号（$）组成

  2）.标识符的开头不能是数字开头

  3）.标识符不能使用关键字和保留字

  4）.变量的名称是会区分大小写的

  5）.定义标识符的时候意思要尽量明朗，通常变量的名称使用名词，方法的名称使用动词

## **4.Dart 常量**

Dart的常量使用final 和const修饰

const修饰的常量在一开始的时候就需要赋值（编译的时候就已经赋好值了）

final修饰的常量可以在一开始的时候不赋值，但同样只能赋值一次（惰性赋值，运行时第一次使用时赋值）

```dart
//const常量
const PI=3.14159；
PI=3；               //错误，常量的值不能修改了

//final常量
final a=new DateTime.now();     //给a运行时赋值
```

## **5.数据类型：**

常用的数据类型：

1）.Numbers（数值）：int,double

2）.Strings(字符串) ： String

3）.Booleans（布尔） ： bool

4）.List（数组） ： 在Dart中数组是列表对象

5）.Maps（字典） ： Map为键值对相关对象

### **5.1 数值类型**

#### 5.1.1  int 整型

```dart
int a = 1;
```

#### 5.1.2  double 浮点型

```dart
double b = 2.5 ;
double b = 2 ;    // 给浮点型变量赋值整型不会报错,但输出的结果会自动补小数点后的0
```

#### 5.1.3  运算符

运算符有加减乘除余，相对应 +，-，*，/，%; 取整~/

### **5.2 字符串类型**

1）可以用单引号，也可以用双引号

```dart
var str1 = ' i am str1';
或  String str1 = ' i am str1';
var str2 = "i am str2";
或 String str2 = "i am str2";
```

2）三引号

使用三引号定义字符串可以换行

```dart
String str3='''
i am str1
i am str2
i am str3''';

或：
String str3="""
i am str1
i am str2
i am str3""";
```

3）字符串拼接

```dart
print("$str1 $str2");
print(str1 + str2);
```

### **5.3 布尔类型**

5.3.1 bool

```dart
bool b1 = true;
bool b2 = false;
```

5.3.2 条件判断语句

```dart
var b1=true;
if(b1){
  print('true');
}else{
  print('false');
}
```

### **5.4 List集合类型**

#### 5.4.1 第一种定义List的方式

```dart
var l1=['a','b','c'];
print(l1);           // 输出[a, b, c]
print(l1.length);    // 输出3
print(l1[0]);        // 输出a
```

#### 5.4.2 第二种定义List的方式

> ```dart
> var l2= new List();
> l2.add('one');
> l2.add('two');
> l2.add('three');
> ```
>
> ```dart
> print(l2); // 输出[one, two, three]
> print(l2.length); // 输出3 
> print(l2[0]); // 输出one
> ```

#### 5.4.3 指定list的类型

> ```dart
> var l2= new List<String>();
> ```

### **5.5 maps类型**

#### 5.5.1  第一种定义方式

> ```dart
> var persion={
>   "name":"Dart",
>   "age":"8"
> };
> print(persion);                //输出 {name: Dart, age: 8}
> print(persion['name']);        //输出 Dart
> print(persion['age']);         //输出 8
> ```

#### 5.5.2  第二种定义方式

```dart
var persion1=new Map();
persion1["name"]="张三";
persion1["age"]="9";
print(persion1);                //输出 {name: 张三, age: 9}
print(persion1['name']);        //输出 张三
print(persion1['age']);         //输出 9
```

### **5.6 类型判断（is 关键字）**

> ```dart
>   var str = '111';
>   if (str is String) {
>     print("str is String type");
>   } else if (str is int) {
>     print("str is int type");
>   } else {
>     print("str is other type");
>   }
> ```
>
> 结果 ： 输出  str is String type

## **6.运算符**

1）算数运算符

2）关系运算符

3）逻辑运算符

4）赋值运算符

5）条件表达式

6）类型转换

**6.1 算数运算符**

> ```dart
> int a=5;
> int b=4;
>  
> print(a+b);  //加
> print(a-b);  //减
> print(a*b);  //乘
> print(a/b);  //除
> print(a%b);  //取余
> print(a~/b); //取整
> ```

> ```dart
> 1
> 20
> 1.25
> 1
> 1
> ```

### 6.2 关系运算符

> ```dart
> int a=5;
> int b=4;
>  
> print(a==b);  //是否相等
> print(a!=b);  //是否不相等
> print(a>b);  //是否大于
> print(a<b);  //是否小于
> print(a>=b);  //是否大于或者等于
> print(a<=b); //是否小于或者等于
> ```
>
> 结果：
>
> false
> true
> true
> false
> true
> false

### **6.3逻辑运算符**

#### 6.3.1 取反（！）

> ```dart
> var b =false;
> print(!b);       //输出为true
> ```

#### 6.3.2  且运算（&&）

当且仅当所有的值都为true的时候，结果才为true，否则为false

```dart
var a = true;
var b = false;
print(b && a);    // 输出false
```

#### 6.3.3 或运算（ | | ）

只要有一个值为true，则结果为true

```dart
var a = true;
var b = false;
print(b || a);    // 输出true
```

### **6.4 赋值运算**

#### 6.4.1 直接赋值（=）

```dart
int b = 6;
```

#### 6.4.2 判断为空之后赋值（？？=）

```dart
int b;
  b??=6;   //当 b在这之前没有被赋值，则在这行代码中会被赋值
```

#### 6.4.3 复合赋值运算符（+=，-=，*=，/=，%=，~/=）

> ```dart
> int b = 6;
> b += 10;
> print(b);   //输出 16
> ```

#### 6.5.2  switch case

```dart
var sex = "boy";
switch(sex){
  case "boy" :
    print("boy");
    break;
  case "girl":
    print("girl");
    break;
  default:
    print("传入的参数错误");
    break; 
}
结果 ： boy
```

#### 6.5.3 三目运算（ ？ ：）

```dart
解释：当等号=后的变量为true时，给变量赋值 ： 前面的值，当flag为false时，给 变量赋值 ： 后面的值
 
bool flag = true;
String b = flag ? "I am a boy " : " I am a girl";
print(b);

结果 ： I am a boy

解释：flag 为true，赋值I am a boy
```

#### 6.5.4   ??运算符

> ```dart
> 解释：当a为null时，赋值？？符号后的10给a，然后将a赋值给b.
>       当a不为null时，直接将a赋值给b
>  
> var a;
> var b = a ?? 10;
> print(b);    // 输出10
> ```
>
> ```dart
> var a=20;
> var b = a ?? 10;
> print(b);    //输出20
> ```

### **6.6类型转换**

#### 6.6.1 Number 与String类型之间的转换

Number 转换为 String使用toString();

String转换为 Number 使用parse();

> ```dart
> //将字符串转换为整型
> String str='111';
> var myNum=int.parse(str);    //输出 111
> ```
>
> ```dart
> //将整型转换为字符串
> var myNum = 18;
> var str = myNum.toString();
> print(str is String);        //输出 true
> ```dart
>
> ```dart
> String str = '';   //字符串为空，转换为整型会报错
> try {
>   var myNum = int.parse(str);
>   print("myNum");
> } catch (err){
>   print("转换错误");
> }
> ```

## **7.循环语句**

### **7.1 for循环**

```dart
for (int i = 0; i < 5; i++) {
  print(i);
}

结果：

0
1
2
3
4
```

### **7.2 while和do while**

while :  先判断条件在进行操作

> ```dart
> var i = 0;
> while (i < 5) {
>   print(i);
>   i++;
> }
> ```
>
> 结果：
>
> 0
> 1
> 2
> 3
> 4

> do while: 先进行操作再判断条件
>
> ```dart
> do {
>   print(i);
>   i++;
> } while (i < 5);
> ```
>
> 结果：
>
> 0
> 1
> 2
> 3
> 4

### **7.3 break和continue**

break : 1.在switch语句中跳出switch结构

    2.在循环语句中跳出当前循环语句(注意只能向外跳出一层循环)

continue：1.只能在循环语句中使用

    2.跳出当前的此次循环，继续进行下一次循环

## **8.函数**

### **8.1 方法的定义**

自定义方法的格式：

> 返回类型    方法名称（参数1，参数2，......）{
>
> 方法体
>
> return 返回值；
>
> }

注：方法中可以定义一个内部方法并调用这个内部方法，该内部方法不能在方法外部调用

### **8.2 方法传参**

#### 8.2.1 位置可选参数

在参数中用中括号[ ] 包含的参数为位置可选参数：（调用的时候可以带上[ ]中的参数，也可不带，也可以带上其中几个）

> ```dart
> String getPersionInfo(String name, [int age, String sex]) {
>   return "name : $name   ;    age : $age    ;    sex : $sex";
> }
> print(getPersionInfo("name"));                // 输出name : name   ;    age : null    ;    sex : null
> print(getPersionInfo("name", 8));             //输出name : name   ;    age : 8    ;    sex : null
> ```

##### 8.2.1.1 可选参数可以通过"="赋一个默认值

```dart
String getPersionInfo(String name, [int age, String sex = "man"]) {
  return "name : $name   ;    age : $age    ;    sex : $sex";
}
```

当调用方法时没有传入参数sex，则sex默认被赋值为"man"。

#### 8.2.2 名字可选参数

在参数中用{ }包含的参数为命名可选参数

> ```dart
> String getPersionInfo(String name, {int age, String sex = "man"}) {
>   return "name : $name  -----  age : $age  -----  sex : $sex";
> }
>  
> print(getPersionInfo("Dart", age: 8));                //输出  name : Dart  -----  age : 8  -----  sex : man
> print(getPersionInfo("Dart", sex: "girl"));           //输出  name : Dart  -----  age : null  -----  sex :girl
> print(getPersionInfo("Dart", sex: "girl", age: 8));   //输出  name : Dart  -----  age : 8  -----  sex : girl
> ```
>
> 解释：在{ }外的参数为必传参数，而{ }里的参数为可选参数，即可传可不传，可以不按照{ }里的参数顺序传参，当传{ }中的参数时，应该用：
>
> **参数名：参数值**
>
> 的方式传递。

#### 8.2.3 方法可以作为参数传递

> ```dart
> //方法，可作为参数
> method1() {
>   print("I am method one");
> }
>  
> //参数为方法的函数
> method2(f()) {
>   f();
> }
> //调用方法method2
> method2(method1) ; 
> ```
>
> 结果：
>
> I am method one
>
> 解释：和匿名方法一样:
>
> ```dart
> var fn=(){
>   print("一个匿名方法");
> };
> ```
>
> fn是一个变量，代表着这个（）{ print("一个匿名方法"); };方法，可以直接当作参数传递。

#### 8.2.4 箭头函数

当函数体的内容只有一句时，可用箭头指向表示。

例如以下函数体可以改为用箭头=>指向：

> ```dart
> 使用箭头表示前：
>
> // 当数组中的元素大于5，则返回5
> List list = [2, 4, 6, 5, 8];
> var newList = list.map((e) {
>   if (e > 5) {
>     return 5;
>   }
>   return e;
> });
> print(newList.toList());
>
> 结果：[2, 4, 5, 5, 5]
>
> 使用箭头表示后:
>
> ```
>
> ```dart
> //使用三目运算，将函数体简化成一句话，输出的结果和上面的例子是一样的
>  
> List list = [2, 4, 6, 5, 8];
> var newList1 = list.map((e) => e > 5 ? 5 : e);
> print(newList1.toList());
> //结果：[2, 4, 5, 5, 5]
> ```

#### 8.2.5 匿名方法

匿名方法，顾名思义，即是没有名字的方法，匿名方法可以赋值给一个变量，例如：

> ```dart
> var fun = () {             //定义了一个变量fun()，这个变量的值是后面的方法体（匿名方法）
>   print("我是匿名方法");
> };
> fun();                    //在这里fun()是一个变量,在这里使用了这个变量
> ```
>
> 结果： 我是匿名方法

注：这个匿名方法也可以带参数。

> ```dart
> var fun = (int i) {               //定义了一个变量fun,使用这个变量的时候需要带上一个参数
>   print("我是匿名方法 ：$i");
> };
>  
> fun(2);                           //这里使用fun(2)这一个变量  
> ```
>
> 结果:
>
> 我是匿名方法 ：2

匿名方法的常用场景：

1）将一个匿名函数赋值给一个变量；

2）在传参的时候，把匿名函数作为参数传递

#### 8.2.6 自执行方法

顾名思义，自执行方法，即指不需要主动的调用该方法，当程序启动的时候会自动执行该段代码；

```dart
((){
 //这里输入代码内容 
})();
```

> (() {
> print("这是一段自执行代码！");
> })();
>
> 结果： 这是一段自执行代码！

在括号里可以定义传入的参数，在第一个括号里定义形参，在最后一个括号里传入实参，如：

> ```dart
> ((int i) {
>   print(i);
>   print("这是一段自执行代码！");
> })(50);
> ```
>
> 结果：
>
> 50
> 这是一段自执行代码！

## **9.类，对象**

#### **9.1.1 Dart是一门面向对象的编程语言** ;

1）面向对象编程语言的三个基本特征是：封装，继承，多态

    封装：封装是对象和类的主要特征。封装，把客观事物封装成抽象的类，并且把自己的部分属性和方法提供给其他对象使用。

   继承： 面向对象编程语言的一个主要功能是“继承”。继承是指该实例化的对象能够使用现有类，以及这个类所继承的类的所有的变量和方法。

   多态：多态性是允许你将父对象设置成为一个或更多的他的子对象相等的技术。

 2）Dart所有的东西都是对象，所有的对象都是继承自Object类。Dart是单继承的面向对象语言，所有的对象都是类的实例，并且所有的类都是Object的子类。

3）一个类通常由属性和方法组成。

 9.1.2 类的构造函数

    构造函数有两种：

1）默认构造函数：

   当实例化对象的时候，会自动调用的函数，构造函数的名称和类的名称相同，在一个类中默认构造函数只能由一个。

2）命名构造函数：

  当通过指定的命名构造函数实例化对象时，会调用改命名构造函数，命名构造函数可以有多个。

> ```dart
> class Persion {                                  //persion为类名
>   String name;                                   //属性
>   int age;
>  
>   Persion(this.name, this.age);                 //默认构造函数，当实例化一个对象时，会自动调用到该函数
>  
>   Persion.now() {
>   print("这是一个命名构造函数");
>   }
>  
>   getInfo() {                                   //方法
>     print("name : $name  age : $age");
>   }
> }
>  
> void main() {
>   Persion man = new Persion("ShenZhen", 40);    //实例化对象（调用了默认构造函数）
>   man.getInfo();
>  
>   Persion man2 = new Persion.now();             //实例化对象的时候调用了命名构造函数
> }
> ```
>
> 结果 ：
>
> name : ShenZhen  age : 40
> 这是一个命名构造函数

#### 9.1.3 类的私有方法和属性

 java等语言中有private,public,proteccted关键字表示属性或者方法的私有性，而在Dart语言中使用下划线_表示该方法或属性为私有的。

注意：只有当类定义在其他独立的文件上时"_"表示私有性才是有效的，若和主入口函数main()在同一个文件下,私有性不会生效。

    如果想要使用类的私有方法或者私有属性，可以通过类中公有方法返回私有属性。

如私有属性（私有方法同理）：

> ```dart
> class Persion {
>   String _name;                            //私有属性
>  
>   Persion(this._name);                     //公有方法，返回私有属性
>  
>   getName() {
>     return _name;
>   }
> }
>  
> void main() {
>   Persion man = new Persion("Dart");
>   String myName = man.getName();           //Persion类的实例对象通过Persion类的公有方法getName()获取类中的私有属性
>   print(myName);
> }
> ```
>
> 结果：Dart

#### 9.1.4 类中的getter和setter修饰

类中用get修饰的方法块，使用的时候通过调用属性的方式使用。

如：

> ```dart
> class Persion {
>   String _name;
>  
>   Persion(this._name);
>  
>   get getName {
>     return _name;
>   }
>  
>   set setName(value) {
>     _name = value;
>   }
> }
>  
> void main() {
>   Persion man = new Persion("深圳");           //实例化一个Persion对象
>   print(man.getName);                          //和调用类的属性的方式一样。通过“对象.属性”的方式调用get修饰的方法体
>  
>   man.setName = "惠州";                        //通过“对象.属性 = 值”的方式调用set修饰的方法体
>   print(man.getName);
> }
> ```
>
> 结果：
>
> 深圳
> 惠州

#### 9.1.5  类中的静态方法和静态成员

##### 9.1.5.1使用static 关键字来实现类级别的变量和函数

> ```dart
> class Persion {
>   static String name = "深圳";                  //name为static修饰的静态变量
>  
>   static void show() {
>     print("name : $name");
>   }
> }
>  
> void main() {
>   print(Persion.name);                        //使用name这个属性时直接通过“类名.属性”的方式   
> }
> ```
>
> //结果：深圳

##### 9.1.5.2静态方法不能访问非静态成员，非静态方法可以访问静态成员

#### 9.1.6  对象操作符

    ？   条件运算符

    as   类型转换

    is    类型判断

    ..      级联操作

##### 9.1.6.1  条件运算符(?)

在对象的后面使用？判断该对象是否是null.

```dart
class Persion {
  String name = "深圳";
  Persion(this.name);
  void show() {
    print("name : $name");
  }
}
 
void main() {
  Persion man;                              //这里只是定义了一个Persion的对象man,但是没有给man赋值
  print(man?.name);                         //这里会报错，使用了条件运算符？判断man是一个空值，故不会打印也不会报错
}
```

##### 9.1.6.2  类型判断(is)

使用 is 判断该变量是什么数据类型

> ```dart
> Persion man=new Persion("name");
> if(man is Persion){                          //判断man是否是Persion类型
>   print("true");
> }
> ```
>
> 结果：
>
> true

##### 9.1.6.3  类型判断(as)

使用as进行类型的转换

> man as Persion                       //将对象man转换为Persion对象

##### 9.1.6.4  级联操作(..)

在对象的后面使用级联符号“..”加属性或方法,会返回对象的本身，类似于java中的Builde建造者模式

> ```dart
> class Persion {
>   String name ;
>   int age ;
>  
>   Persion(this.name,this.age);
>  
>   void show() {
>     print("name : $name  and  age : $age");
>   }
> }
>  
> void main() {
>   Persion man = new Persion("深圳",40);
>   man..name = "惠州"                                   //使用..name后返回的还是man对象，可以进行接下来..age的操作
>      ..age=50
>      ..show();
> }
> ```
>
> 结果：
>
> name : 惠州  and  age : 50

#### **9.1.7 继承**

  1）一个子类继承自一个父类，那么这个子类的实例化对象直接可以使用这个父类的属性或方法。继承使用关键字extent  。

   格式：

   子类  extent  父类

 如:

> ```dart
> class Persion {
>   String name ;
>   int age ;
>   Persion(this.name,this.age);
>   void show() {
>     print("name : $name  and  age : $age");
>   }
> }
>  
> class Superman extends Persion{                         //Superman继承Persion
>   
>   Superman(String name, int age) : super(name, age);    //super()里的参数是要传递给父类的参数
> }
>  
> void main() {
>   Superman man = new Superman("深圳",40);               //Superman实例化对象
>   man.show();                                          //Superman实例化的对象可以直接使用父类Persion的方法show();
> }
> ```
>
> 结果：
>
> name : 深圳  and  age : 40

2）在子类中不仅仅可以扩展父类中的属性或者方法，还能重写父类中的方法

> ```dart
> class Persion {
>   String name;
>  
>   int age;
>  
>   Persion(this.name, this.age);
>  
>   void show() {
>     print("name : $name  and  age : $age");
>   }
> }
>  
> class Superman extends Persion {
>   Superman(String name, int age) : super(name, age);
>  
>   void show() {                                                  //在子类中复写了父类中的show方法
>     print("姓名: $name----年龄：$age");
>   }
> }
>  
> void main() {
>   Superman man = new Superman("深圳", 40);               
>   man.show();                                                    //通过子类的对象调用的是子类中复写的方法
> }  
> ```
>
> 结果：
>
> 姓名: 深圳----年龄：40

3）可以通过super关键字调用父类的方法

> ```dart
> class Persion {
>   String name;
>  
>   int age;
>  
>   Persion(this.name, this.age);
>  
>   void show() {
>     print("name : $name  and  age : $age");
>   }
> }
>  
> class Superman extends Persion {
>   Superman(String name, int age) : super(name, age);
>  
>   void show() {
>     super.show();                                     //子类的show()方法通过super.show()的形式调用父类的方法
>   }
> }
>  
> void main() {
>   Superman man = new Superman("深圳", 40);
>   man.show();
> }
> ```
>
> 结果：
>
> name : 深圳  and  age : 40

#### **9.1.8 抽象类**

 Dart中的抽象类：Dart中的抽象类主要用于定义标准，子类可以继承抽象类，也可以实现抽象类接口。

1.抽象类通过abstract关键字来定义；

2.Dart中的抽象类不能通过abstract声明，Dart中没有方法体的方法我们称之为抽象方法；

3.如果子类继承抽象类必须实现里面的抽象方法；

4.如果把抽象类当作接口实现的话必须得实现抽象类里面定义的所有属性和方法；

5.抽象类不能被实例化，只有继承它的子类可以。

extends抽象类 和 implement 的区别：

1.如果要复用抽象类里面的方法，并且要用抽象方法约束自类的话我们就用extend继承抽象类

2.如果只是把抽象类当作标准的话我们就用implement实现抽象类

如：

```dart
abstract class Animal {                                //Animal 为抽象类
  eat();                                               //没有实现方法体，默认是一个抽象方法
}
class Dog extends Animal{
  @override
  eat() {                                             //如果在Dog类中没有定义eat()方法，将会报错
    // do something
  }
}
```

下面直接通过抽象类进行初始化，会报错

```dart
Animal a = new Animal();                           //会报错

```

#### **9.1.9 多态**

```dart
Animal d = new Dog();                   //使用d.eat()的时候会调用Dog类中复写的eat()方法
Animal c = new Cat();                   //使用c.eat()的时候会调用Cat类中复写的eat()方法
```

#### **9.1.10 接口**

  和java一样，Dart中也有接口，但是和java有区别。

    在Java 中用interface关键字定义接口，而在Dart语言中普通的类或者抽象类都可以作为接口被实现。同样是通过使用implement关键字实现。

注意：
    Dart中如果使用普通类或者抽象类做接口类，实现这个接口类的时候要覆写这个接口类所有属性和方法。抽象类中可以定义抽象方法，故建议使用抽象类定义接口。（接口通常是定义规范）

   如：

> ```dart
> abstract class Animal {                           //抽象类，用作接口
>   String size;
>   eat() {
>     //do something
>   }
> }
>  
> class Dog implements Animal {                      //implements 用于实现接口
>   @override
>   String size;                                     //需要重新定义属性size
>   
>   @override
>   eat() {                                         //需要重新定义方法eat()
>     // do something
>   }
> }
> ```

实现多个接口，通过逗号“，”分隔

> ```dart
> abstract class A {
>   String name;
>   doA(){}
> }
>  
> abstract class B {
>   String name;
>   doB() {}
> }
>  
> class C implements A,B {                          //要实现两个类，通过“，”分隔
>   @override
>   String name;
>   @override
>   doA() {}                                        //不覆写doA()会报错
>   @override
>   doB() {}                                        //不覆写doB()会报错
> }
> ```

#### **9.1.11 mixins（为了实现类似多继承）**

  mixins的中文意思是混入，就是在类中混入其他功能。

    在Dart中可以使用minxins实现类似多继承的功能。

mixins的使用条件随着Dart的版本不断更新而有所改变，此处讲的是Dart2.x中使用minxins的条件：

    1.作为minxins的类只能继承自Object,不能继承其他类

    2.作为minxins的类不能有构造函数

    3.一个类可以minxins多个minxins类

    4.minxins绝不是继承，也不是接口，而是一种全新的特性

> 如：
>
> ```dart
> class A {                                           //A作为minxins类，只能继承自Object
>   doA() {
>     print("I am A");
>   }
> }
>  
> class B {                                         //B作为minxins类，只能继承自Object
>   doB() { 
>     print("I am B");
>   }
> }
>  
> class C with A, B {}                             //C混合了A类和B类，类似继承，C的实例化类可以使用A类以及B类中的方法         
>  
> main() {
>   C c = new C();
>   c.doA();
>   c.doB();
> }
> ```
>
> 结果：
>
> I am A
> I am B

**疑问：当两个混合类A和B中有相同的方法，那么C类中调用这个方法会产生什么样的结果呢？**

> ```dart
> class A {
>   run() {                                         //A类中run()方法
>     print("run A");                        
>   }
>  
>   doA() {
>     print("I am A");
>   }
> }
>  
> class B {
>   run() {                                          //B类中run()方法
>     print("run B");
>   }
>   doB() {
>     print("I am B");
>   }
> }
>  
> class C with A, B {}
>  
> main() {
>   C c = new C();
>   c.doA();
>   c.doB();
>   c.run();
> }
> ```
>
> 结果：
>
> I am A
> I am B
> run B
>
> 解释：**当两个混合类A和B中有相同的方法，那么C类调用该方法的时候会调用with关键字上最靠后的混合类的方法**

## **10.泛型**

### 10.1 泛型方法

先看一个例子:

> ```dart
> getData(int value) {
>   return value * 2;
> }
>  
> print(getData(3));
> ```
>
> 结果：6

 当我们想要返回一个数字类型的数据，可以调用getDate()方法，传入数字类型，返回数字类型

    但是当我们想要返回一个String类型的数据的时候，此时是需要定义一个返回String类型的方法的。

如：

> ```dart
> getData(String value) {
>   return value;
> }
>  
> print(getData("惠州"));
> ```
>
> 结果：惠州

但是这样又会出现另外一个问题，就是代码冗余问题，这两个方法大部分内容是相同的，只是我们传入和返回的数据类型不同。

    此时我们可以使用泛型的方式，可实现传什么类型就返回什么类型的功能，还支持类型校验。

    以下“T”为不固定的传入类型：

> ```dart
> T getData<T>(T value) {                                    //传入的实参是什么类型，则“T”就代表该类型
>   return value;
> }
>  
> print(getData<String>("深圳"));                            //<String>中的String为检验传的参数是否是String类型
> ```
>
> 结果：深圳

### 10.2  泛型类

#### 10.2.1 实例化类的时候没有指定类型

> ```dart
> class ListClass<T> {                                              //定义泛型类
>   List list = new List<T>();
>  
>   void printInfo() {
>     for (var i = 0; i < this.list.length; i++) {
>       print(this.list[i]);
>     }
>   }
>  
>   void add(T value) {
>     this.list.add(value);
>   }
> }
>  
> main() {
>   ListClass list = new ListClass();   //实例化一个泛型类（这里没有指定类型T的实际类型，因此没有类型校验，传各种类型）
>   list.add(1);                                  
>   list.add(2);
>   list.add(3);                        //添加int类型数据
>   list.add("深圳");                   //添加String类型数据，不会报错
>   list.printInfo();             
> }
> ```
>
> 结果：
>
> 1
> 2
> 3
> 深圳

#### 10.2. 2 实例化类的时候指定了类型

当实例化泛型类的时候传入了指定的类型，那么在调用其中该泛型类中的方法时会进行类型校验，只能使用指定的类型。否则将将会报错。

```dart
main() {
  ListClass list = new ListClass<int>();                       //指定了实例化ListClass 类时传入的类型为int类型
  list.add(1);
  list.add(2);
  list.add(3);
  list.add("深圳");                                            //报错
  list.printInfo();
}
```

#### 10. 3  泛型接口

在具体的类实现了泛型接口后，实例化该类需指定传入的类型：

如：

```dart
abstract class Cache<T> {                                     //抽象类Cache，此处做接口使用
  getByKey(String key);
 
  setByKey(String key, T value);
}
 
class FileCache<T> implements Cache<T> {                       //Cache类的实现类
  @override
  getByKey(String key) {
  }
 
  @override
  setByKey(String key, T value) {}
}
 
main() {
  FileCache fileCache = new FileCache<String>();               //实例化FileCache对象的时候，指定"T"的类型
  fileCache.setByKey("name", "深圳");
  fileCache.setByKey("name", 123);                             //报错，指定setByKey()的第二个参数为String类型，但是这里传入了int类型
}
```

### 11.Dart库

  在Dart中，库的使用通过import关键字引入。

  library指令可以创建一个库，每个Dart文件都是一个库，即使没有使用library指令来指定。

Dart中的库有三种：

1）自定义的库

2）系统内置库

3）Pub包管理系统中的库(第三方库)

#### 11.1 自定义库

格式：

> import 'lib/xxx.dart';

当一个类的内容过多时，若把这个类与main()主方法或与其他类写在同一个文件中，将会导致这个文件过大而不便于管理，此时我们可以把这个类独立成一个文件,当另一个类需要使用这个独立成文件的类，通过以上的引用格式，就可以使用这个独立类里的方法了。

#### 11.2 系统内置库

##### 11.2.1   dart:math';

格式：

```dart
import 'dart:math';
```

在math库中有许多数学操作方法

例如以下截图中的求最大值和最小值：
![] (https://img-blog.csdnimg.cn/20201028113911392.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQzMzA5NA==,size_16,color_FFFFFF,t_70)

使用：

```dart
min(20, 10);                                   //返回10
max(20, 10);                                   //返回20
```

##### 11.2.2   dart:io';

格式：

```dart
import 'dart:io';
```

###### async 和 await

在Dart中async 和 await关键字

###### async 是让方法变成异步方法。

###### await是等待异步方法执行完毕。

1）只有async 方法才能使用await关键字去调用方法

2）如果调用别的async方法必须使用 await关键字

如：

```dart
import 'dart:io';

main() {                                       
  test1();                          //调用test1()方法,要使用await关键字，否则若有返回值会报错
  test2();                          //调用test2()方法
  print("----over-----");
}

test1() async {                     //此方法为async异步方法
  print("test---1");
  await test3();                    //调用了异步方法test3()，(注意如果test3()有返回值，这里必须用await关键字调用)
  print("test---1.1");
}

test2() {
  print("test---2");
}

test3() async {                     //声明test3()方法为异步方法
  print("test---3");
}
结果：

test---1
test---3
test---2
----over-----
test---1.1

解释：在main()方法中依次调用了test1 ( )方法和test2（ ）方法，test1（）方法为异步方法，故不需要test1（）方法执行完才开始执行test2（）方法，在test1（）方法中调用了异步方法test3( ),这里使用了await关键字来调用test3( )方法，此时test2( )方法同时在执行。
```

##### 11.3  Pub包管理系统中的库(第三方库)

例如从  [https://pub.dev/packages]() 获取http第三方库

* 从下面网址中找到要用的库（以http库为例）：

[https://pub.dev/packages]()

* 打开项目中的pubspec.yaml文件，找到  dependencies：，在dependencies下面添加内容：

> http: ^0.12.2
* 打开AndroidStudio的命令工作台：运行pub get 命令 ，获取远程库

* 引用库

#### 11.4  Dart库冲突的解决办法
当两个库中有相同名称的标识符时，我们不能辨别我们要使用到的标识符是属于哪一个库里面的，在java中通常是通过导入完整的包名路径来指定使用哪一个库里的标识符，在Dart语言中我们要使用到库的重命名的方法。

如下：

在当前类中引用了两个库文件，Persion1.dart和Persion2.dart,这两个库文件中都有对Perdsion类的定义，当前类中有一个main（）方法，这个方法实例化了一个Persion类，但是这个时候回报错，因为IDE不清楚调用的是哪一个库文件里定义的Persion类。
```dart
import 'package:flutter_app_demo14/Persion1.dart';
import 'package:flutter_app_demo14/Persion2.dart';

main() {
  Persion p = new Persion();                             //报错，IDE不清楚调用的是哪一个库文件里定义的Persion类
}
```
解决办法：

使用 as 关键字给引用到的库重命名：

格式：

   库名   as   XXX
```dart
import 'package:flutter_app_demo14/Persion1.dart';
import 'package:flutter_app_demo14/Persion2.dart' as lib;            // as关键字给库重命名为lib

main() {
  Persion p = Persion();                                            //这里Persion使用的是Persion1.dart里的
  lib.Persion p1 = new lib.Persion();                               //这里Persion使用的是Persion2.dart里的
}
```
##### 11.5  库的部分导入
部分导入的的两种模式：

模式一：只导入需要的部分，使用show关键字，如下：
```dart
import 'Persion1.dart'  show getName;          //此时可以使用Persion1.dart库文件中的getName()方法
```
模式二：隐藏不需要的部分，使用hide关键字，如下：
```dart
import 'Persion1.dart'  hide getName;           //此时不可以使用Persion1.dart库文件中的getName()方法
```
