# Dart 简介

![](https://img-blog.csdnimg.cn/direct/34854d2021344d128ed8865a5df50616.png)

### 1.1 概述

Dart 是由 Lars Bak 和 Kasper Lund 设计、 Google开发的一种编程语言。它可用于开发网络和移动应用程序以及服务器和桌面应用程序。

Dart 是一种面向对象、基于类、垃圾收集的语言，具有C风格的语法。它可以编译为机器代码、JavaScript或WebAssembly。它支持接口、混合、抽象类、具体化 泛型和类型推断。

### 1.2 发展历程

##### Dart语言的诞生

2011年10月10日,Google 发布了Dart语言，是一个开发web应用的语言，其主要是为了创建大型web应用而发明的。

Dart的设计目标:
创建用于Web编程的结构化但灵活的语言
使Dart 对程序员感到熟悉和自然，从而易于学习。
确保Dart 在从小型手持设备到服务器端执行的所有现代Web浏览器和环境中提供高性能。
第一个正式稳定的版本
2013年11月14日，谷歌发布Dart 1.0版本，并推出了相关开源工具箱和配套的编辑器。 从13至18年，Dart不问不火，特别是其运行效率成为了被人诟病的槽点。

##### Dart 2.0 重生的版本

2018年8月8日，谷歌发布Dart2.0版本，对Dart进行全新改版，从底层重构了Dart，加入了很多面向未来的新特性，语言性能大幅提高。还重写了Dart web platform提供了一套高性能、可扩展的生产工具。

Dart2标志着Dart作为主流编程语言的重生，为移动和Web应用程序实现快速开发并拥有出色的用户体验。(使开发客户端应用程序的开发人员能够使用减少重复样板的语言，框架和组件来提高工作效率，并让他们专注于业务逻辑)

Dart 2专注于三个领域：
语言功能不断加强并更加严谨；
支持web和移动客户端开发；
丰富工具箱和组件；

#### Dart 3 发布 【100% 空安全】

Google I/O 2023 大会发布 Dart 3。

### 1.3 优势

Dart可基于AOT（Ahead Of Time）编译，即编译成平台的本地代码，运行性能高。
Dart也可基于JIT（Just In Time）编译，编译快速，可热加载，使开发周期加倍提升（Flutter亚秒级有状态热重载）
Dart可以更轻松地创建以60fps运行的流畅动画和转场。Dart在没有锁的情况下进行对象分配和垃圾回收
Dart语法结合Java与JavaScript语法特点，几乎没有令人不适的怪异语法，使Java程序员倍感亲切，快速上手

## 2 语言介绍

### 介绍

### Hello World

每个应用都有一个顶层的 main() 函数来作为运行入口。没有指定返回类型的方法的返回类型会推导为 void。你可以使用顶层函数 print() 来将一段文本输出显示到控制台：

```dart
void main() {
  print('Hello, World!');
}
```

### Variables

虽然 Dart 是 代码类型安全 的语言，你仍然可以用 var 来定义变量，而不用显式指定它们的类型。由于其支持类型推断，因此大多数变量的类型会由它们的初始化内容决定：

```dart
var name = 'Voyager I';
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};
```

### 流程控制语句

Dart 支持常用的流程控制语句：

```dart
if (year >= 2001) {
  print('21st century');
} else if (year >= 1901) {
  print('20th century');
}

for (final object in flybyObjects) {
  print(object);
}

for (int month = 1; month <= 12; month++) {
  print(month);
}

while (year < 2016) {
  year += 1;
}

```

### 函数

我们建议 为每个函数的参数以及返回值都指定类型：

```dart
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);

```

=> (胖箭头) 简写语法用于仅包含一条语句的函数。该语法在将匿名函数作为参数传递时非常有用：

```dart
flybyObjects.where((name) => name.contains('turn')).forEach(print);

```

上面的示例除了向你展示了匿名函数（上例中传入 where() 函数的参数即是一个匿名函数）外，还向你展示了将函数作为参数使用的方式：上面示例将顶层函数 print() 作为参数传给了 forEach() 函数。

你可以 阅读更多 Dart 中有关函数的内容，包括可选参数、默认参数值以及词法作用域。

注释
Dart 通常使用双斜杠 // 作为注释的开始。

```dart
// This is a normal, one-line comment.

/// This is a documentation comment, used to document libraries,
/// classes, and their members. Tools like IDEs and dartdoc treat
/// doc comments specially.

/* Comments like these are also supported. */

```

### 导入 (Import)

使用 import 关键字来访问在其它库中定义的 API。

```dart
// Importing core libraries
import 'dart:math';

// Importing libraries from external packages
import 'package:test/test.dart';

// Importing files
import 'path/to/my_other_file.dart';

```

### 类 (Class)

下面的示例中向你展示了一个包含三个属性、两个构造函数以及一个方法的类。其中一个属性不能直接赋值，因此它被定义为一个 getter 方法（而不是变量）。该方法使用字符串插值来打印字符串文字内变量的字符串。

```dart
class Spacecraft {
  String name;
  DateTime? launchDate;

  // Read-only non-final property
  int? get launchYear => launchDate?.year;

  // Constructor, with syntactic sugar for assignment to members.
  Spacecraft(this.name, this.launchDate) {
    // Initialization code goes here.
  }

  // Named constructor that forwards to the default one.
  Spacecraft.unlaunched(String name) : this(name, null);

  // Method.
  void describe() {
    print('Spacecraft: $name');
    // Type promotion doesn't work on getters.
    var launchDate = this.launchDate;
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}

```

你可以 阅读更多 关于字符串的内容，包括字符串插值、表达式以及 toString() 方法。

你可以像下面这样使用 Spacecraft 类：

```dart
var voyager = Spacecraft('Voyager I', DateTime(1977, 9, 5));
voyager.describe();

var voyager3 = Spacecraft.unlaunched('Voyager III');
voyager3.describe();

```

### 枚举类型 (Enum)

枚举类型的取值范围是一组预定义的值或实例。

下面这个简单的枚举示例定义了一组行星类别：

```dart
enum PlanetType { terrestrial, gas, ice }
```

下面是一个增强型枚举的示例，定义了一组行星类的常量实例，即太阳系的行星：

```dart
/// Enum that enumerates the different planets in our solar system
/// and some of their properties.
enum Planet {
  mercury(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  venus(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  // ···
  uranus(planetType: PlanetType.ice, moons: 27, hasRings: true),
  neptune(planetType: PlanetType.ice, moons: 14, hasRings: true);

  /// A constant generating constructor
  const Planet(
      {required this.planetType, required this.moons, required this.hasRings});

  /// All instance variables are final
  final PlanetType planetType;
  final int moons;
  final bool hasRings;

  /// Enhanced enums support getters and other methods
  bool get isGiant =>
      planetType == PlanetType.gas || planetType == PlanetType.ice;
}

```

你可以这样使用 Planet 枚举：

```dart
final yourPlanet = Planet.earth;
if (!yourPlanet.isGiant) {
  print('Your planet is not a "giant planet".');
}
```

你可以 阅读更多 Dart 中有关枚举的内容，包括增强型枚举的限制条件、枚举默认包含的属性、如何获取枚举值的名称以及在 switch 语句中使用枚举等等。

### 扩展类（继承）

Dart 支持单继承。

```dart
class Orbiter extends Spacecraft {
  double altitude;

  Orbiter(super.name, DateTime super.launchDate, this.altitude);
}
```

#### Mixins

Mixin 是一种在多个类层次结构中重用代码的方法。下面的是声明一个 Mixin 的做法：

```dart
mixin Piloted {
  int astronauts = 1;

  void describeCrew() {
    print('Number of astronauts: $astronauts');
  }
}
```

现在你只需使用 Mixin 的方式继承这个类就可将该类中的功能添加给其它类。

```dart
class PilotedCraft extends Spacecraft with Piloted {
  // ···
}
```

自此，PilotedCraft 类中就包含了 astronauts 字段以及 describeCrew() 方法。

你可以 阅读更多 关于 Mixin 的内容。

接口和抽象类
所有的类都隐式定义成了一个接口。因此，任意类都可以作为接口被实现。

```dart
class MockSpaceship implements Spacecraft {
  // ···
}
```

你可以阅读更多关于 隐式接口 或者 interface 关键词 的内容。

你可以创建一个被任意具体类扩展（或实现）的抽象类。抽象类可以包含抽象方法（不含方法体的方法）。

```dart
abstract class Describable {
  void describe();

  void describeWithEmphasis() {
    print('=========');
    describe();
    print('=========');
  }
}
```

任意一个扩展了 Describable 的类都拥有 describeWithEmphasis() 方法，这个方法又会去调用实现类中实现的 describe() 方法。

你可以 阅读更多 关于抽象类和抽象方法的内容。

### 异步

使用 async 和 await 关键字可以让你避免回调地狱 (Callback Hell) 并使你的代码更具可读性。

```dart
const oneSecond = Duration(seconds: 1);
// ···
Future<void> printWithDelay(String message) async {
  await Future.delayed(oneSecond);
  print(message);
}
```

上面的方法相当于：

```dart
Future<void> printWithDelay(String message) {
  return Future.delayed(oneSecond).then((_) {
    print(message);
  });
}
```

如下一个示例所示，async 和 await 关键字有助于使异步代码变得易于阅读。

```dart
Future<void> createDescriptions(Iterable<String> objects) async {
  for (final object in objects) {
    try {
      var file = File('$object.txt');
      if (await file.exists()) {
        var modified = await file.lastModified();
        print(
            'File for $object already exists. It was modified on $modified.');
        continue;
      }
      await file.create();
      await file.writeAsString('Start describing $object in this file.');
    } on IOException catch (e) {
      print('Cannot create description for $object: $e');
    }
  }
}
```

你也可以使用 async* 关键字，其可以为你提供一个可读性更好的方式去生成 Stream。

```dart
Stream<String> report(Spacecraft craft, Iterable<String> objects) async* {
  for (final object in objects) {
    await Future.delayed(oneSecond);
    yield '${craft.name} flies by $object';
  }
}
```

你可以 阅读更多 关于异步支持的内容，包括异步函数、Future、Stream 以及异步循环（await for）。

### 异常

使用 throw 关键字抛出一个异常：

```dart
if (astronauts == 0) {
  throw StateError('No astronauts.');
}
```

使用 try 语句配合 on 或 catch（两者也可同时使用）关键字来捕获一个异常:

```dart
Future<void> describeFlybyObjects(List<String> flybyObjects) async {
  try {
    for (final object in flybyObjects) {
      var description = await File('$object.txt').readAsString();
      print(description);
    }
  } on IOException catch (e) {
    print('Could not describe object: $e');
  } finally {
    flybyObjects.clear();
  }
}
```

注意上述代码是异步的；同步代码以及异步函数中得代码都可以使用 try 捕获异常。

你可以 阅读更多 关于异常的内容，包括栈追踪、rethrow 关键字以及 Error 和 Exception 之间的区别。

#### Important concepts

当您继续学习Dart语言时，请记住这些事实和概念:

* 可以放在变量中的所有东西都是对象，而每个对象都是类的实例。偶数、函数和null都是对象。除了null(如果启用了可靠的null安全)之外，所有对象都继承自Object类。

注意版本
空安全性在Dart 2.12中引入。使用null安全要求语言版本至少为2.12。

* 尽管Dart是强类型的，但类型注释是可选的，因为Dart可以推断类型。在var number = 101中，number被推断为int类型。
* 如果启用null安全，则变量不能包含null，除非您允许。通过在变量类型的末尾加上问号(?)，可以使变量为空。例如，int类型的变量?可能是整数，也可能是空值。如果您知道表达式的计算结果永远不会为空，但Dart不同意，则可以添加!断言它不为空(如果为空则抛出异常)。示例:int x = nullableButNotNullInt!
* 当您想显式地表示允许任何类型时，请使用Object?(如果启用了null安全)、Object，或者——如果必须将类型检查推迟到运行时——特殊类型dynamic。
* Dart支持泛型类型，如List(整数列表)或List(任何类型的对象列表)。
* Dart支持顶级函数(比如main())，以及绑定到类或对象的函数(分别是静态方法和实例方法)。您还可以在函数中创建函数(嵌套函数或局部函数)。
* 类似地，Dart支持顶级变量，以及绑定到类或对象的变量(静态和实例变量)。实例变量有时被称为字段或属性。
* 与Java不同，Dart没有public、protected和private关键字。如果标识符以下划线(_)开头，则它对其库是私有的。详细信息请参见库和导入。
* 标识符可以以字母或下划线(_)开头，后面是这些字符加上数字的任意组合。
* Dart既有表达式(有运行时值)，也有语句(没有运行时值)。例如，条件表达式condition ?Expr1: expr2取值为Expr1或expr2。将其与没有值的if-else语句进行比较。语句通常包含一个或多个表达式，但表达式不能直接包含语句。
* Dart工具可以报告两种问题:警告和错误。警告只是指示您的代码可能无法工作，但它们不会阻止您的程序执行。错误可以是编译时的，也可以是运行时的。编译时错误会阻止代码执行;运行时错误会导致在执行代码时引发异常。

#### 其他资源

核心库文档 中会有更多的文档和代码示例。你也可以查阅 Dart API 文档，里面也常常会有示例代码。本网站的代码风格遵循 Dart 代码风格指南。

#### 基础表达式

##### 变量

下面是创建并初始化变量的例子：

```dart
var name = 'Bob';
```

变量会保存引用。name 变量包含一个值为 “Bob” 的 String 对象的引用。

变量 name 的类型被推断为 String，但你可以通过指定类型来更改它。如果一个对象不受限于单一类型，可以指定为 Object 类型（或在必要时使用 dynamic）。

```dart
Object name = 'Bob';
```

另一种选择是显式声明将要被推断的类型：

```dart
String name = 'Bob';
```

#### Null safety 空安全

Dart 语言要求以健全的空安全方式编写代码。

空安全能够防止意外访问 null 的变量而导致的错误。这样的错误也被称为空解引用错误。访问一个求值为 null 的表达式的属性或调用方法时，会发生空解引用错误。但是对于 toString() 方法和 hashCode 属性，空安全会体现出例外情况。 Dart 编译器可以在空安全的基础上在编译期检测到这些潜在的错误。

例如，假设你想要查找 int 变量 i 的绝对值。如果 i 是 null ，调用 i.abs() 会导致空解引用错误。在其他语言中，尝试这样做可能会导致运行时错误，但是 Dart 的编译器禁止这些操作。所以 Dart 应用程序不会引发运行时错误。

空安全引入了三个关键更改：

* 当你为变量、参数或另一个相关组件指定类型时，可以控制该类型是否允许 null 。要让一个变量可以为空，你可以在类型声明的末尾添加 ? 。

```dart
  String? name  // Nullable type. Can be `null` or string.
  String name   // Non-nullable type. Cannot be `null` but can be string.
```

* 你必须在使用变量之前对其进行初始化。可空变量是默认初始化为 null 的。 Dart 不会为非可空类型设置初始值，它强制要求你设置初始值。 Dart 不允许你观察未初始化的变量。这可以防止你在接收者类型可以为 null 但 null 不支持的相关方法或属性的情况下使用它。
* 你不能在可空类型的表达式上访问属性或调用方法。同样的例外情况适用于 null 支持的属性或方法，例如 hashCode 或 toString() 。
  空安全将潜在的 运行时错误 转变为 编辑时 分析错误。当非空变量处于以下任一状态时，空安全会识别该变量：
* 未使用非空值进行初始化。
* 赋值为 null 。
  此检查允许你在部署应用程序 之前 修复这些错误。

#### 默认值

具有可空类型的未初始化变量的初始值为 null 。即使是具有数值类型的变量，初始值也为空，因为数字（就像 Dart 中的其他所有东西一样）都是对象。

```dart
int? lineCount;
assert(lineCount == null);
```

对于空安全，你必须在使用非空变量之前初始化它们的值：

```dart
int lineCount = 0;
```

你不必在声明变量时初始化变量，但在使用之前需要为其赋值。例如以下代码是合法的，因为 Dart 可以检测到 lineCount 在传递给 print() 时是非空的：

```dart
int lineCount;

if (weLikeToCount) {
  lineCount = countLines();
} else {
  lineCount = 0;
}

print(lineCount);
```

顶级变量和类变量是延迟初始化的，它们会在第一次被使用时再初始化。

#### 延迟初始化变量

late 修饰符有两种用法：

* 声明一个非空变量，但不在声明时初始化。
* 延迟初始化一个变量。

通常 Dart 的语义分析可以检测非空变量在使用之前是否被赋值，但有时会分析失败。常见的两种情况是在分析顶级变量和实例变量时，Dart 通常无法确定它们是否已设值，因此不会尝试分析。

如果你确定变量在使用之前已设置，但 Dart 推断错误的话，可以将变量标记为 late 来解决这个问题：

```dart
late String description;

void main() {
  description = 'Feijoada!';
  print(description);
}
```

> 如果你没有初始化一个 late 变量，那么当变量被使用时会发生运行时错误。

当一个 late 修饰的变量在声明时就指定了初始化方法，那么内容会在第一次使用变量时运行初始化。这种延迟初始化在以下情况很方便：

*（Dart 推断）可能不需要该变量，并且初始化它的开销很高。

* 你正在初始化一个实例变量，它的初始化方法需要调用 this。
  在下面的例子中，如果 temperature 变量从未被使用，则 readThermometer() 这个开销较大的函数也永远不会被调用：

```dart
// This is the program's only call to readThermometer().
late String temperature = readThermometer(); // Lazily initialized.
```

#### 终值 (final) 和常量 (const)

如果你不打算更改一个变量，可以使用 final 或 const 修饰它，而不是使用 var 或作为类型附加。一个 final 变量只能设置一次，const 变量是编译时常量。（const 常量隐式包含了 final。）

> 实例变量 可以是 final 但不能是 const。

下面是创建和设置 final 变量的示例：

```dart
final name = 'Bob'; // Without a type annotation
final String nickname = 'Bobby';
```

你不能修改 final 变量的值：

```dart
✗ static analysis: failure
name = 'Alice'; // Error: a final variable can only be set once.
```

请使用 const 修饰 编译时常量 的变量。如果 const 变量位于类级别，请将其标记为 static const（静态常量）。在声明变量的位置，将其值设置为编译时常量，比如数字、字符串、const 常量或在常量数字上进行的算术运算的结果：

```daet
const bar = 1000000; // Unit of pressure (dynes/cm2)
const double atm = 1.01325 * bar; // Standard atmosphere
```

const 关键字不仅仅可用于声明常量，你还可以使用它来创建常量 值(values)，以及声明 创建(create) 常量值的构造函数。任何变量都可以拥有常量值。

```dart
var foo = const [];
final bar = const [];
const baz = []; // Equivalent to `const []`
```

你可以省略以 const 声明中的值的 const 修饰，就像上面的 baz 一样。更多详细信息请参考 不要重复使用常量。

如果变量的值没有被 final 或者 const 修饰，即使它以前被 const 修饰，你也可以修改这个变量：

```dart
foo = [1, 2, 3]; // Was const []
```

你不能修改 const 变量的值：

```dart
✗ static analysis: failure
baz = [42]; // Error: Constant variables can't be assigned a value.
```

你可以在定义常量时使用 类型检查和转换（is 和 as）、 集合中的 if 和 展开操作符（… 和 …?）：

```dart
const Object i = 3; // Where i is a const Object with an int value...
const list = [i as int]; // Use a typecast.
const map = {if (i is int) i: 'int'}; // Use is and collection if.
const set = {if (list is List `<int>`) ...list}; // ...and a spread.
```

> 虽然 final 对象不能被修改，但它的字段可能可以被更改。相比之下，const 对象及其字段不能被更改：它们是不可变的。

#### 操作符

Dart 支持下表所示的运算符。该表从最高到最低显示了 Dart 的运算符关联性和运算符优先级，它们是Dart 运算符关系的近似值。您可以将许多这样的运算符实现为类成员。

| Description              | Operator                                   | Associativity |
| ------------------------ | ------------------------------------------ | ------------- |
| unary postfix            | expr++ expr-- () [] ?[] . ?. !             | None          |
| unary prefix             | -expr !expr ~expr ++expr --expr await expr | None          |
| multiplicative           | ./ % ~/                                    | Left          |
| additive                 | +-                                         | Left          |
| shift                    | << >> >>>                                  | Left          |
| bitwise AND              | &                                          | Left          |
| bitwise XOR              | ^                                          | Left          |
| bitwise OR               |                                            | Left          |
| relational and type test | >= > <= < as is is!                        | None          |
| equality                 | == !=                                      | None          |
| logical AND              | &&                                         | Left          |
| logical OR               |                                            | Left          |
| if-null                  | ??                                         | Left          |
| conditional              | expr1 ? expr2 : expr3                      | Right         |
| cascade                  | … ?..                                     | Left          |
| assignment               | = *= /= += -= &= ^= etc.                   | Right         |
| spread (See note)        | … …?                                     | None          |

> 上表只能用作有用的指南。运算符优先级和结合性的概念是语言语法中事实的近似值。您可以在Dart 语言规范中定义的语法中找到 Dart 运算符关系的权威行为。

当您使用运算符时，您创建了表达式。以下是运算符表达式的一些示例：

```dart
a++
a + b
a = b
a == b
c ? a : b
a is T

```

#### 运算符优先级示例

在运算符表中，每个运算符的优先级都高于其后面的行中的运算符。例如，乘法运算符的%优先级高于等号运算符（因此在其之前执行）==，等号运算符的优先级高于逻辑 AND 运算符&&。该优先级意味着以下两行代码以相同的方式执行：

```dart
// Parentheses improve readability.
if ((n % i == 0) && (d % i == 0)) ...
// Harder to read, but equivalent.
if (n % i == 0 && d % i == 0) ...
```

对于采用两个操作数的运算符，最左边的操作数决定使用哪种方法。例如，如果您有一个Vector对象和一个Point对象，则aVector + aPoint使用Vector加法 ( +)。

#### 算术运算符

Dart 支持常用的算术运算符，如下表所示。

| Operator | Meaning                                  |
| -------- | ---------------------------------------- |
| +        | 加号                                     |
| -        | 减号                                     |
| -expr    | 一元减号，也称为否定（反转表达式的符号） |
| *        | 乘                                       |
| /        | 除                                       |
| ~/       | 取整，返回整数结果                       |
| %        | 取余，获取整数除法的余数（模）           |

```dart
assert(2 + 3 == 5);
assert(2 - 3 == -1);
assert(2 * 3 == 6);
assert(5 / 2 == 2.5); // Result is a double
assert(5 ~/ 2 == 2); // Result is an int
assert(5 % 2 == 1); // Remainder

assert('5/2 = ${5 ~/ 2} r ${5 % 2}' == '5/2 = 2 r 1');

```

art 还支持前缀和后缀递增和递减运算符。

| Operator | Meaning                            |
| -------- | ---------------------------------- |
| ++var    | var = var + 1（表达式值为var + 1） |
| var++    | var = var + 1（表达式值为var）     |
| --var    | var = var - 1（表达式值为var）    |
| var--    | var = var - 1（表达式值为var）     |

```dart
int a;
int b;

a = 0;
b = ++a; // Increment a before b gets its value.
assert(a == b); // 1 == 1

a = 0;
b = a++; // Increment a after b gets its value.
assert(a != b); // 1 != 0

a = 0;
b = --a; // Decrement a before b gets its value.
assert(a == b); // -1 == -1

a = 0;
b = a--; // Decrement a after b gets its value.
assert(a != b); // -1 != 0

```

相等和关系运算符
下表列出了相等运算符和关系运算符的含义。

| Operator | Meaning    |
| -------- | ---------- |
| ==       | 等于       |
| !=       | 不等于     |
| <        | 小于       |
| >=       | 大于或等于 |
| <=       | 小于或等于 |

要测试两个对象 x 和 y 是否表示同一事物，请使用==运算符。（在极少数情况下，您需要知道两个对象是否是完全相同的对象，请使用Sametime()函数。）该运算符的工作原理如下==：

* 1.如果x或y为 null，则如果两者都为 null，则返回 true；如果只有一个为 null，则返回 false。
* 2.返回使用参数y对x==调用该方法的结果。 没错，像==这样的操作符是在其第一个操作数上调用的方法。具体操作请参见操作符
  以下是使用每个等式和关系运算符的示例：

```dart
assert(2 == 2);
assert(2 != 3);
assert(3 > 2);
assert(2 < 3);
assert(3 >= 3);
assert(2 <= 3);

```

#### 赋值运算符

正如您已经看到的，您可以使用运算符赋值=。要仅在分配的变量为 null 时进行分配，请使用??=运算符。

```dart
// Assign value to a
a = value;
// Assign value to b if b is null; otherwise, b stays the same
b ??= value;
```

复合赋值运算符，例如+=将运算与赋值组合起来。

| =  | *=  | %=  | >>>= | ^= |
| -- | --- | --- | ---- | -- |
| += | /=  | <<= | &=   |    |
| -= | ~/= | >>= |      |    |

    复合赋值运算符的工作原理如下：

| For an operator | op: a op= b | a = a op b |
| --------------- | ----------- | ---------- |
| Example:        | a += b      | a = a + b  |

以下示例使用赋值和复合赋值运算符：

```dart
var a = 2; // Assign using =
a *= 3; // Assign and multiply: a = a * 3
assert(a == 6);
```

### 逻辑运算符

您可以使用逻辑运算符反转或组合布尔表达式。

| Operator | Meaning |
| -------- | ------- |
| !expr    | 逻辑非  |
|          |         |
| &&       | 逻辑与  |

以下是使用逻辑运算符的示例：

```dart
if (!done && (col == 0 || col == 3)) {
  // ...Do something...
}
```

### 按位 和 移位运算符

您可以在 Dart 中操作数字的各个位。通常，您会将这些按位和移位运算符与整数一起使用。

| Operator | Meaning                            |
| -------- | ---------------------------------- |
| &        | 与                                 |
|          | 或                                 |
| ^        | 异或                               |
| ~expr    | 一元按位求补（0 变为 1；1 变为 0） |
| <<       | 左移                               |
| >>       | 右移                               |
| >>>      | 无符号右移                         |

> 具有大操作数或负操作数的按位运算的行为可能因平台而异。要了解更多信息，请查看按位运算平台差异。

下面是使用按位和移位运算符的示例：

```dart
final value = 0x22;
final bitmask = 0x0f;

assert((value & bitmask) == 0x02); // AND
assert((value & ~bitmask) == 0x20); // AND NOT
assert((value | bitmask) == 0x2f); // OR
assert((value ^ bitmask) == 0x2d); // XOR

assert((value << 4) == 0x220); // Shift left
assert((value >> 4) == 0x02); // Shift right

// Shift right example that results in different behavior on web
// because the operand value changes when masked to 32 bits:
assert((-value >> 4) == -0x03);

assert((value >>> 4) == 0x02); // Unsigned shift right
assert((-value >>> 4) > 0); // Unsigned shift right
```

> 该>>>运算符（称为Triple-shift或unsigned shift）需要至少 2.14 的语言版本。

#### 条件表达式

Dart 有两个运算符，可让您简洁地计算可能需要if-else语句的表达式：

condition ? expr1 : expr2
如果条件为 true，则计算expr1（并返回其值）；否则，计算并返回expr2的值。

expr1 ?? expr2
如果expr1非空，则返回其值；否则，计算并返回expr2的值。

当您需要基于布尔表达式分配值时，请考虑使用条件运算符?and :。

```dart
var visibility = isPublic ? 'public' : 'private';
```

如果布尔表达式测试是否为 null，请考虑使用 if-null 运算符??（也称为 null 合并运算符）。

```dart
String playerName(String? name) => name ?? 'Guest';
```

前面的示例至少可以用两种其他方式编写，但不那么简洁：

```dart
// Slightly longer version uses ?: operator.
String playerName(String? name) => name != null ? name : 'Guest';

// Very long version uses if-else statement.
String playerName(String? name) {
  if (name != null) {
    return name;
  } else {
    return 'Guest';
  }
}
```

#### 级联表示法

级联 ( …, ?..) 允许您对同一对象进行一系列操作。除了访问实例成员之外，您还可以调用同一对象的实例方法。这通常可以节省您创建临时变量的步骤，并允许您编写更流畅的代码。

考虑以下代码：

```dart
var paint = Paint()
  ..color = Colors.black
  ..strokeCap = StrokeCap.round
  ..strokeWidth = 5.0;
```

构造函数Paint()返回一个Paint对象。级联表示法后面的代码对此对象进行操作，忽略可能返回的任何值。

前面的示例相当于以下代码：

```dart
var paint = Paint();
paint.color = Colors.black;
paint.strokeCap = StrokeCap.round;
paint.strokeWidth = 5.0;
```

如果级联操作的对象可以为空，则对第一个操作使用空短路级联 ( )。?..从 开始?..保证不会对该空对象尝试任何级联操作。

```dart
querySelector('#confirm') // Get an object.
  ?..text = 'Confirm' // Use its members.
  ..classes.add('important')
  ..onClick.listen((e) => window.alert('Confirmed!'))
  ..scrollIntoView();
```

> 该?..语法需要至少 2.12 的语言版本。

前面的代码等效于以下内容：

```dart
var button = querySelector('#confirm');
button?.text = 'Confirm';
button?.classes.add('important');
button?.onClick.listen((e) => window.alert('Confirmed!'));
button?.scrollIntoView();
```

您还可以嵌套级联。例如：

```dart
final addressBook = (AddressBookBuilder()
      ..name = 'jenny'
      ..email = 'jenny@example.com'
      ..phone = (PhoneNumberBuilder()
            ..number = '415-555-0100'
            ..label = 'home')
          .build())
    .build();
```

在返回实际对象的函数上构建级联时要小心。例如，以下代码会失败：

```dart
var sb = StringBuffer();
sb.write('foo')
  ..write('bar'); // Error: method 'write' isn't defined for 'void'.
```

该sb.write()调用返回 void，并且您无法在 上构造级联void。

> 严格来说，级联的“双点”表示法不是运算符。它只是 Dart 语法的一部分。

#### 展开运算符

展开运算符计算生成集合的表达式，解压结果值，并将它们插入到另一个集合中。

展开运算符实际上不是运算符表达式。…/…? 语法 是文本集合本身的一部分。因此，您可以在“集合”页面上了解有关展开运算符的更多信息。

因为它不是运算符，所以语法没有任何“运算符优先级”。实际上，它具有最低的“优先级”——任何类型的表达式都可以作为传播目标，例如：

```dart
[...a + b]
```

#### 其他运算符

您已经在其他示例中看到了大部分剩余的运算符：

| Operator | Name           | Meaning                                                                                                                                                                     |
| -------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ()       | 函数           | 代表一个函数调用                                                                                                                                                            |
| []       | 下标访问       | 表示对可重写的 [] 运算符的调用；示例：fooList[1] 将 int 1 传递给 fooList 以访问索引 1 处的元素                                                                              |
| ?[]      | 条件下标       | access 与 [] 类似，但最左边的操作数可以为 null；示例： fooList?[1] 将 int 1 传递给 fooList 以访问索引 1 处的元素，除非 fooList 为 null（在这种情况下表达式计算结果为 null） |
| .        | 成员访问       | 指的是表达式的属性；示例： foo.bar 从表达式 foo 中选择属性 bar                                                                                                              |
| ?.       | 有条件成员访问 | 与.类似，但最左边的操作数可以为空；示例： foo?.bar 从表达式 foo 中选择属性 bar，除非 foo 为 null（在这种情况下，foo?.bar 的值为 null                                        |
| !        | 非空断言运算符 | 将表达式转换为其基础的不可为空类型，如果转换失败，则抛出运行时异常；示例： foo!.bar 断言 foo 为非 null 并选择属性 bar，除非 foo 为 null，在这种情况下会引发运行时异常       |

#### 注释

Dart 支持单行注释、多行注释和文档注释。

#### 单行注释

单行注释以 // 开始。Dart 编译器会忽略 // 和行尾之间的所有内容。

```dart
void main() {
  // TODO: refactor into an AbstractLlamaGreetingFactory?
  print('Welcome to my Llama farm!');
}
```

#### 多行注释

多行注释以 /* 开始并以 / 结束。/ 和 */ 之间的所有内容都会被 Dart 编译器忽略（除非注释是文档注释；请参阅下一节）。多行注释可以嵌套。

```dart
void main() {
  /*

* This is a lot of work. Consider raising chickens.

  Llama larry = Llama();
  larry.feed();
  larry.exercise();
  larry.clean();
  */
  }
```

#### 文档注释

  文档注释是以 /// 或 /** 开头的多行或单行注释。在连续行上使用///与多行文档注释具有相同的效果。

在文档注释中，分析器会忽略所有文本，除非它包含在括号中。使用方括号，您可以引用类、方法、字段、顶级变量、函数和参数。括号中的名称在记录的程序元素的词法范围内解析。

以下是引用其他类和参数的文档注释示例：

```dart
/// A domesticated South American camelid (Lama glama).
///
/// Andean cultures have used llamas as meat and pack
/// animals since pre-Hispanic times.
///
/// Just like any other animal, llamas need to eat,
/// so don't forget to [feed] them some [Food].
class Llama {
  String? name;

  /// Feeds your llama [food].
  ///
  /// The typical llama eats one bale of hay per week.
  void feed(Food food) {
    // ...
  }

  /// Exercises your llama with an [activity] for
  /// [timeLimit] minutes.
  void exercise(Activity activity, int timeLimit) {
    // ...
  }
}
```

在类的生成文档中，[feed]成为该方法的文档的链接feed，并[Food]成为该类的文档的链接Food。

要解析 Dart 代码并生成 HTML 文档，可以使用 Dart 的文档生成工具dart doc.有关生成文档的示例，请参阅Dart API 文档。有关如何构建评论的建议，请参阅Effective Dart：文档。

#### 注解

使用元数据提供有关代码的附加信息。元数据注释以字符 @ 开头，后跟对编译时常量（例如deprecated）的引用或对常量构造函数的调用。

所有 Dart 代码都可以使用四种注释：@Deprecated、@deprecated、@override和@pragma。有关使用示例@override，请参阅扩展类。这是使用注释的示例@Deprecated：

```dart
class Television {
  /// Use [turnOn] to turn the power on instead.
  @Deprecated('Use turnOn instead')
  void activate() {
    turnOn();
  }

  /// Turns the TV's power on.
  void turnOn() {...}
  // ···
}
```

如果您不想指定消息，则可以使用 @deprecated。但是，我们建议始终使用 @Deprecated 指定消息。

您可以定义自己的元数据注释。下面是定义@Todo带有两个参数的注释的示例：

```dart
class Todo {
  final String who;
  final String what;

  const Todo(this.who, this.what);
}
```

这是使用该注释的示例@Todo：

```dart
@Todo('Dash', 'Implement this function')
void doSomething() {
  print('Do something');
}
```

元数据可以出现在库、类、typedef、类型参数、构造函数、工厂、函数、字段、参数或变量声明之前以及导入或导出指令之前。

#### 库 & 导库

import指令和library可以帮助您创建模块化且可共享的代码库。库不仅提供 API，而且还是一个隐私单位：以下划线 (_) 开头的标识符仅在库内部可见。每个 Dart 文件（及其部分）都是一个库，即使它不使用library指令。

库可以使用包来分发。

#### 使用库

用于import指定如何在另一个库的作用域中使用一个库中的命名空间。

例如，Dart Web 应用程序通常使用dart:html库，可以像这样导入：

```dart
import 'dart:html';
```

唯一需要的参数import是指定库的 URI。对于内置库，URI 有特殊的dart: scheme。对于其他库，您可以使用文件系统路径或package:scheme。该package:scheme指定由包管理器（例如 pub 工具）提供的库。例如：

```dart
import 'package:test/test.dart';
```

URI代表统一资源标识符。URL（统一资源定位符）是一种常见的 URI。

#### 指定库前缀

如果导入两个具有冲突标识符的库，则可以为一个或两个库指定前缀。例如，如果library1和library2都有一个Element类，那么您可能有这样的代码：

```dart
import 'package:lib1/lib1.dart';
import 'package:lib2/lib2.dart' as lib2;

// Uses Element from lib1.
Element element1 = Element();

// Uses Element from lib2.
lib2.Element element2 = lib2.Element();
```

#### 仅导入库的一部分

如果您只想使用库的一部分，可以有选择地导入该库。例如：

```dart
// Import only foo.
import 'package:lib1/lib1.dart' show foo;

// Import all names EXCEPT foo.
import 'package:lib2/lib2.dart' hide foo;
```

#### 延迟加载库

延迟加载（也称为延迟加载）允许 Web 应用程序在需要库时按需加载库。当您想要满足以下一项或多项需求时，请使用延迟加载。

* 减少网络应用程序的初始启动时间。
* 执行 A/B 测试——例如，尝试算法的替代实现。
* 加载很少使用的功能，例如可选屏幕和对话框。
* 这并不意味着 Dart 在启动时加载所有延迟的组件。 Web 应用程序可以在需要时通过 Web 下载延迟组件。

该dart工具不支持 Web 以外的目标的延迟加载。如果您正在构建 Flutter 应用程序，请参阅 Flutter延迟组件指南 中的延迟加载实现。

要延迟加载库，请首先使用 导入它deferred as。

```dart
import 'package:greetings/hello.dart' deferred as hello;
```

当您需要该库时，请loadLibrary()使用该库的标识符进行调用。

```dart
Future<void> greet() async {
  await hello.loadLibrary();
  hello.printGreeting();
}
```

在前面的代码中，await关键字暂停执行，直到加载库为止。有关async和 的更多信息await，请参阅异步支持。

您可以loadLibrary()在库上多次调用而不会出现问题。该库仅加载一次。

使用延迟加载时请记住以下几点：

* 延迟库的常量不是导入文件中的常量。请记住，在加载延迟库之前，这些常量并不存在。
* 您不能在导入文件中使用延迟库中的类型。相反，请考虑将接口类型移动到由延迟库和导入文件导入的库。
* Dart 隐式插入loadLibrary()到您使用 定义的命名空间中。该函数返回一个.deferred as namespaceloadLibrary()Future

#### library 指令

要指定库级文档注释或元数据注释，请将它们附加到library文件开头的声明中。

```dart
/// A really great test library.
@TestOn('browser')
library;
```

#### 实现库

有关如何实现包的建议，请参阅创建包，包括：

* 如何组织库源代码。
* 如何使用该export指令。
* 何时使用该part指令。
* 如何使用条件导入和导出来实现支持多个平台的库。

#### 关键字

下表列出了 Dart 语言保留供自己使用的单词。请勿使用这些术语作为标识符，除非该术语指出例外情况。要了解有关标识符使用的更多信息，请单击该术语。

| abstract ^2  | else             | import ^2    | show ^1    |
| ------------ | ---------------- | ------------ | ---------- |
| as ^2        | enum             | in           | static ^2  |
| assert       | export ^2        | interface ^2 | super      |
| async ^1     | extends          | is           | switch     |
| await ^3     | extension ^2     | late ^2      | sync ^1    |
| base ^2      | external ^2      | library ^2   | this       |
| break        | factory ^2       | mixin ^2     | throw      |
| case         | false            | new          | true       |
| catch        | final (variable) | null         | try        |
| class        | final (class) ^2 | on ^1        | type ^3    |
| const        | finally          | operator ^2  | typedef ^2 |
| continue     | for              | part ^2      | var        |
| covariant ^2 | Function ^2      | required ^2  | void       |
| default      | get ^2           | rethrow      | when       |
| deferred ^2  | hide ^1          | return       | while      |
| do           | if               | sealed ^2    | with       |
| dynamic ^2   | implements ^2    | set ^2       | yield ^3   |

避免使用这些词作为标识符。但是，如果有必要，用上标标记的关键字可以作为标识符:

* 带有上标1的单词是上下文关键字，它们只在特定的地方有意义。它们在任何地方都是有效的标识符。
* 带有上标2的单词是内置标识符。这些关键字在大多数地方都是有效的标识符，但它们不能用作类名或类型名，也不能用作导入前缀。
* 带有上标3的单词是与异步支持相关的有限保留单词。不能在任何带有async、async或sync标记的函数体中使用await或yield作为标识符。
  表中的所有其他字都是保留字，不能作为标识符。

### 类型

### 基本类型

Dart 语言对以下内容有特殊支持：

* Numbers (int, double)
* Strings (String)
* Booleans (bool)
* Records ((value1, value2))
* Lists (List, also known as arrays)
* Sets (Set)
* Maps (Map)
* Runes (Runes; often replaced by the characters API)
* Symbols (Symbol)
* The value null (Null)
  此支持包括使用文字创建对象的能力。例如，'this is a string’是字符串文字，true是布尔文字。

因为 Dart 中的每个变量都引用一个对象（类的实例） ，所以您通常可以使用构造函数来初始化变量。一些内置类型有自己的构造函数。例如，您可以使用Map()构造函数来创建地图。

其他一些类型在 Dart 语言中也具有特殊作用：

* Object：除 Null 之外的所有 Dart 类的超类。
* Enum：所有枚举的超类。
* Futureand Stream：用于异步支持。
* Iterable：用在for-in 循环和同步生成器函数中。
* Never：表示表达式永远无法成功完成计算。最常用于总是抛出异常的函数。
* dynamic：表示您要禁用静态检查。通常你应该使用ObjectorObject?来代替。
* void：表示从未使用过某个值。通常用作返回类型。
* Object、Object?、Null和类Never在类层次结构中具有特殊作用。在了解 null 安全性中了解这些角色。

#### Numbers

飞镖数字有两种形式：

#### int

整数值不大于 64 位，具体取决于平台。在本机平台上，值的范围可以是 -2^63到 2^63-1。在 Web 上，整数值表示为 JavaScript 数字（没有小数部分的 64 位浮点值），并且可以是从 -2^53 到 2^53-1.

#### double

64 位（双精度）浮点数，由 IEEE 754 标准指定。
和int都是double的子类型num。 num 类型包括基本运算符，例如 +、-、/ 和 *，并且您还可以在其他方法中找到abs()、ceil()、 和floor()。 （按位运算符，例如 >>，在类中定义int。）如果 num 及其子类型没有您要查找的内容，则dart:math库可能有。

整数是没有小数点的数字。以下是定义整数文字的一些示例：

```dart
var x = 1;
var hex = 0xDEADBEEF;
```

如果数字包含小数，则它是双精度数。以下是定义双文字的一些示例：

```dart
var y = 1.1;
var exponents = 1.42e5;
```

您还可以将变量声明为 num。如果这样做，变量可以同时具有整数和双精度值。

```dart
num x = 1; // x can have both int and double values
x += 2.5;
```

必要时，整数字面量会自动转换为双精度数：

```dart
double z = 1; // Equivalent to double z = 1.0.
```

以下是将字符串转换为数字的方法，反之亦然：

```dart
// String -> int
var one = int.parse('1');
assert(one == 1);

// String -> double
var onePointOne = double.parse('1.1');
assert(onePointOne == 1.1);

// int -> String
String oneAsString = 1.toString();
assert(oneAsString == '1');

// double -> String
String piAsString = 3.14159.toStringAsFixed(2);
assert(piAsString == '3.14');
```

该int类型指定传统的按位移位 ( <<、>>、>>>)、补码 ( ~)、AND ( &)、OR ( |) 和 XOR ( ^) 运算符，这些运算符对于操作和屏蔽位字段中的标志很有用。例如：

```dart
assert((3 << 1) == 6); // 0011 << 1 == 0110
assert((3 | 4) == 7); // 0011 | 0100 == 0111
assert((3 & 4) == 0); // 0011 & 0100 == 0000
```

有关更多示例，请参阅按位和移位运算符部分。

文字数字是编译时常量。许多算术表达式也是编译时常量，只要它们的操作数是计算结果为数字的编译时常量。

```dart
const msPerSecond = 1000;
const secondsUntilRetry = 5;
const msUntilRetry = secondsUntilRetry * msPerSecond;
```

有关更多信息，请参阅Dart 中的数字。

#### Strings

Dart 字符串（String对象）保存一系列 UTF-16 代码单元。您可以使用单引号或双引号来创建字符串：

```dart
var s1 = 'Single quotes work well for string literals.';
var s2 = "Double quotes work just as well.";
var s3 = 'It\'s easy to escape the string delimiter.';
var s4 = "It's even easier to use the other delimiter.";
```

您可以使用 来将表达式的值放入字符串中。如果表达式是标识符，则可以跳过.为了获取与某个对象对应的字符串，Dart 调用该对象的方法。${expression}{}toString()

```dart
var s = 'string interpolation';

assert('Dart has $s, which is very handy.' ==
    'Dart has string interpolation, '
        'which is very handy.');
assert('That deserves all caps. '
        '${s.toUpperCase()} is very handy!' ==
    'That deserves all caps. '
        'STRING INTERPOLATION is very handy!');
```

该==运算符测试两个对象是否等效。如果两个字符串包含相同的代码单元序列，则它们是等效的。

您可以使用相邻的字符串文字或运算符连接字符串+：

```dart
var s1 = 'String '
    'concatenation'
    " works even over line breaks.";
assert(s1 ==
    'String concatenation works even over '
        'line breaks.');

var s2 = 'The + operator ' + 'works, as well.';
assert(s2 == 'The + operator works, as well.');
```

要创建多行字符串，请使用带有单引号或双引号的三引号：

```dart
var s1 = '''
You can create
multi-line strings like this one.
''';

var s2 = """This is also a
multi-line string.""";
```

您可以通过添加前缀来创建“原始”字符串r：

```dart
var s = r'In a raw string, not even \n gets special treatment.';
```

有关如何在字符串中表达 Unicode 字符的详细信息，请参阅符文和字素簇。

只要任何内插表达式是计算结果为 null 或数字、字符串或布尔值的编译时常量，文字字符串就是编译时常量。

```dart
// These work in a const string.
const aConstNum = 0;
const aConstBool = true;
const aConstString = 'a constant string';

// These do NOT work in a const string.
var aNum = 0;
var aBool = true;
var aString = 'a string';
const aConstList = [1, 2, 3];

const validConstString = '$aConstNum $aConstBool $aConstString';
// const invalidConstString = '$aNum $aBool $aString $aConstList';
```

有关使用字符串的更多信息，请查看字符串和正则表达式。

#### Booleans

为了表示布尔值，Dart 有一个名为 的类型bool。只有两个对象具有 bool 类型：布尔文字true和false，它们都是编译时常量。

Dart 的类型安全意味着您不能使用这样的代码 if (nonbooleanValue) or assert (nonbooleanValue)。相反，显式检查数值，如下所示：

#### Runes and grapheme clusters 字母 和 字符集

在Dart中，runes表示字符串的Unicode码位。您可以使用characters包查看或操作用户感知的字符，也称为Unicode(扩展)字素簇。

Unicode为世界上所有书写系统中使用的每个字母、数字和符号定义了一个唯一的数值。由于Dart字符串是UTF-16代码单元序列，因此在字符串中表达Unicode代码点需要特殊的语法。表示Unicode码位的常用方法是\uXXXX，其中XXXX是一个4位十六进制值。例如，心形字符(♥)是\u2665。若要指定多于或少于4个十六进制数字，请将值放在花括号中。例如，笑的表情符号(😆)是\u{1f606}。

如果您需要读取或写入单个 Unicode 字符，请使用 charactersstrings 包在 String 上定义的 getter。返回的Characters对象是作为字素簇序列的字符串。以下是使用字符 API 的示例：

```dart
import 'package:characters/characters.dart';

void main() {
  var hi = 'Hi 🇩🇰';
  print(hi);
  print('The end of the string: ${hi.substring(hi.length - 1)}');
  print('The last character: ${hi.characters.last}');
}
```

根据您的环境，输出如下所示：

```dart
$ dart run bin/main.dart
Hi 🇩🇰
The end of the string: ???
The last character: 🇩🇰
```

有关使用字符包操作字符串的详细信息，请参阅字符包的示例和API 参考。

#### 符号

对象Symbol表示 Dart 程序中声明的运算符或标识符。您可能永远不需要使用符号，但它们对于按名称引用标识符的 API 来说非常宝贵，因为缩小会更改标识符名称，但不会更改标识符符号。

要获取标识符的符号，请使用符号文字，后面紧跟#标识符：

```dart
#radix
#bar
```

符号文字是编译时常量。

#### 记录(Records)

记录需要至少 3.0 的语言版本。

> 记录是匿名的、不可变的聚合类型。与其他集合类型一样，它们允许您将多个对象捆绑到一个对象中。与其他集合类型不同，记录是固定大小的、异构的和类型化的。

记录是真实的值；您可以将它们存储在变量中、嵌套它们、将它们传递给函数或从函数中传递它们，以及将它们存储在列表、映射和集合等数据结构中。

#### Record 语法

记录表达式是以逗号分隔的命名或位置字段列表，括在括号中：

```dart
var record = ('first', a: 2, b: true, 'last');
```

记录类型注释是括在括号中的以逗号分隔的类型列表。您可以使用记录类型注释来定义返回类型和参数类型。例如，以下(int, int)语句是记录类型注释：

```dart
(int, int) swap((int, int) record) {
  var (a, b) = record;
  return (b, a);
}
```

记录表达式和类型注释中的字段反映了参数和参数在函数中的工作方式。位置字段直接位于括号内：

```dart
// Record type annotation in a variable declaration:
(String, int) record;

// Initialize it with a record expression:
record = ('A string', 123);
```

在记录类型注释中，命名字段位于类型和名称对的大括号分隔部分内，位于所有位置字段之后。在记录表达式中，名称位于每个字段值之前，后面带有冒号：

```dart
// Record type annotation in a variable declaration:
({int a, bool b}) record;

// Initialize it with a record expression:
record = (a: 123, b: true);
```

记录类型中命名字段的名称是记录类型定义或其形状的一部分。具有不同名称的命名字段的两条记录具有不同的类型：

```dart
({int a, int b}) recordAB = (a: 1, b: 2);
({int x, int y}) recordXY = (x: 3, y: 4);

// Compile error! These records don't have the same type.
// recordAB = recordXY;
```

在记录类型注释中，您还可以命名位置字段，但这些名称纯粹用于文档，不会影响记录的类型：

```dart
(int a, int b) recordAB = (1, 2);
(int x, int y) recordXY = (3, 4);

recordAB = recordXY; // OK.
```

这类似于函数声明或函数 typedef 中的位置参数可以具有名称，但这些名称不会影响函数的签名。

有关更多信息和示例，请查看记录类型和记录相等性。

#### Record 字段

记录字段可以通过内置的 getter 访问。记录是不可变的，因此字段没有设置器。

命名字段公开同名的 getter。位置字段公开 name 的 getter $，跳过命名字段：

```dart
记录字段可以通过内置的 getter 访问。记录是不可变的，因此字段没有设置器。

命名字段公开同名的 getter。位置字段公开 name 的 getter $`<position>`，跳过命名字段：
```

#### Record 类型

单个记录类型没有类型声明。记录根据其字段的类型进行结构类型化。记录的形状（其字段集、字段类型及其名称（如果有））唯一地确定记录的类型。

记录中的每个字段都有自己的类型。同一记录中的字段类型可以不同。无论从记录中访问哪个字段，类型系统都知道每个字段的类型：

```dart
(num, Object) pair = (42, 'a');

var first = pair.$1; // Static type `num`, runtime type `int`.
var second = pair.$2; // Static type `Object`, runtime type `String`.
```

考虑两个不相关的库，它们创建具有相同字段集的记录。即使库彼此不耦合，类型系统也知道这些记录是相同的类型。

#### Record 相等

如果两条记录具有相同的形状（字段集），并且它们对应的字段具有相同的值，则它们相等。由于命名字段顺序不是记录形状的一部分，因此命名字段的顺序不会影响相等性。

例如：

```dart
(int x, int y, int z) point = (1, 2, 3);
(int r, int g, int b) color = (1, 2, 3);

print(point == color); // Prints 'true'.
```

```dart
({int x, int y, int z}) point = (x: 1, y: 2, z: 3);
({int r, int g, int b}) color = (r: 1, g: 2, b: 3);

print(point == color); // Prints 'false'. Lint: Equals on unrelated types.
```

记录根据其字段的结构自动定义hashCode和==方法。

#### 多个返回

记录允许函数返回捆绑在一起的多个值。要从返回中检索记录值，请使用模式匹配将值解构为局部变量。

```dart
// Returns multiple values in a record:
(String name, int age) userInfo(Map<String, dynamic> json) {
  return (json['name'] as String, json['age'] as int);
}

final json = <String, dynamic>{
  'name': 'Dash',
  'age': 10,
  'color': 'blue',
};

// Destructures using a record pattern with positional fields:
var (name, age) = userInfo(json);

/* Equivalent to:
  var info = userInfo(json);
  var name = info.$1;
  var age  = info.$2;
*/

```

您还可以使用冒号语法使用其命名字段来解构记录:，您可以在模式类型页面上阅读更多相关信息：

```dart
({String name, int age}) userInfo(Map<String, dynamic> json)
// ···
// Destructures using a record pattern with named fields:
final (:name, :age) = userInfo(json);
```

您可以从没有记录的函数返回多个值，但其他方法有缺点。例如，创建一个类要冗长得多，并且使用其他集合类型（例如List或 ）Map会失去类型安全性。

#### 集合(Collections)

Dart 内置了对列表、集合和映射集合的支持。要了解有关配置集合包含的类型的更多信息，请查看泛型。

#### Lists

也许几乎所有编程语言中最常见的集合是数组，或者有序的对象组。在 Dart 中，数组是List对象，因此大多数人简称它们为列表。

Dart 列表文字由逗号分隔的表达式或值列表表示，并括在方括号 ( []) 中。这是一个简单的 Dart 列表：

```dart
var list = [1, 2, 3];
```

> Dart 推断其list类型为List。如果您尝试将非整数对象添加到此列表，分析器或运行时会引发错误。有关更多信息，请阅读类型推断。

您可以在 Dart 集合文字中的最后一项后添加逗号。此尾随逗号不会影响集合，但它可以帮助防止复制粘贴错误。

```dart
var list = [
  'Car',
  'Boat',
  'Plane',
];
```

列表使用从零开始的索引，其中 0 是第一个值的索引，也是list.length - 1最后一个值的索引。您可以使用 属性获取列表的长度.length，并使用下标运算符 ( ) 访问列表的值[]：

```dart
var list = [1, 2, 3];
assert(list.length == 3);
assert(list[1] == 2);

list[1] = 1;
assert(list[1] == 1);
```

要创建一个编译时常量列表，请const在列表文字之前添加：

```dart
var constantList = const [1, 2, 3];
// constantList[1] = 1; // This line will cause an error.
```

dart:core有关列表的更多信息，请参阅文档的列表部分。

#### Sets

Dart 中的集合是独特项目的无序集合。 Dart 对集合的支持是由集合文字和Set类型提供的。

这是一个简单的 Dart 集，使用集合文字创建：

```dart
var halogens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'};
```

Dart 推断其halogens类型为Set。如果您尝试向集合中添加错误类型的值，分析器或运行时会引发错误。有关更多信息，请阅读类型推断。

要创建空集，请{}在前面添加类型参数，或分配{}给类型为 的变量Set：

```dart
var names = `<String>`{};
// Set`<String>` names = {}; // This works, too.
// var names = {}; // Creates a map, not a set.
```

映射文字的语法与集合文字的语法类似。因为映射文字首先出现，所以{}默认为Map类型。如果您忘记了类型注释{}或它分配给的变量，则 Dart 会创建一个类型的对象Map<dynamic, dynamic>。

使用add()或addAll()方法将项目添加到现有集合中：

```dart
var elements = `<String>`{};
elements.add('fluorine');
elements.addAll(halogens);
```

用于.length获取集合中的项目数：

```dart
var elements = `<String>`{};
elements.add('fluorine');
elements.addAll(halogens);
assert(elements.length == 5);
```

要创建一个作为编译时常量的集合，请const在集合文字之前添加：

```dart
final constantSet = const {
  'fluorine',
  'chlorine',
  'bromine',
  'iodine',
  'astatine',
};
// constantSet.add('helium'); // This line will cause an error.
```

dart:core有关集合的更多信息，请参阅文档的集合部分。

#### Maps

一般来说，映射是一个将键和值关联起来的对象。键和值都可以是任何类型的对象。每个键仅出现一次，但您可以多次使用相同的值。 Dart 对映射的支持是由映射文字和Map类型提供的。

以下是使用地图文字创建的几个简单的 Dart 地图：

```dart
var gifts = {
  // Key:    Value
  'first': 'partridge',
  'second': 'turtledoves',
  'fifth': 'golden rings'
};

var nobleGases = {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};
```

Dart 推断gifts具有 typeMap<String, String>且nobleGases具有 type Map<int, String>。如果您尝试向任一映射添加错误类型的值，分析器或运行时会引发错误。有关更多信息，请阅读类型推断。

您可以使用 Map 构造函数创建相同的对象：

```dart
var gifts = Map<String, String>();
gifts['first'] = 'partridge';
gifts['second'] = 'turtledoves';
gifts['fifth'] = 'golden rings';

var nobleGases = Map<int, String>();
nobleGases[2] = 'helium';
nobleGases[10] = 'neon';
nobleGases[18] = 'argon';
```

如果您来自 C# 或 Java 等语言，您可能希望看到的new Map()不仅仅是Map().在 Dart 中，new关键字是可选的。有关详细信息，请参阅使用构造函数。

使用下标赋值运算符 ( ) 将新的键值对添加到现有映射[]=：

```dart
var gifts = {'first': 'partridge'};
gifts['fourth'] = 'calling birds'; // Add a key-value pair
```

使用下标运算符 ( ) 从映射中检索值[]：

```dart
var gifts = {'first': 'partridge'};
assert(gifts['first'] == 'partridge');
```

如果你寻找地图上没有的钥匙，你会得到null回报：

```dart
var gifts = {'first': 'partridge'};
assert(gifts['fifth'] == null);
```

用于.length获取映射中键值对的数量：

```dart
var gifts = {'first': 'partridge'};
gifts['fourth'] = 'calling birds';
assert(gifts.length == 2);
```

要创建一个编译时常量的映射，请const在映射文字之前添加：

```dart
final constantMap = const {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};

// constantMap[2] = 'Helium'; // This line will cause an error.
```

dart:core有关地图的更多信息，请参阅文档的地图部分。

#### Operators

#### Spread operators 扩展运算符

Dart 支持列表、映射和集合文字中的扩展运算符(…) 和空值安全的展开操作符(…?)。扩展运算符提供了一种将多个值插入到集合中的简洁方法。

例如，您可以使用扩展运算符 (…) 将一个列表的所有值插入到另一个列表中：

```dart
var list = [1, 2, 3];
var list2 = [0, ...list];
assert(list2.length == 4);
```

如果扩展运算符右侧的表达式可能为 null，则可以使用支持 null 的扩展运算符 ( …?) 来避免异常：

```dart
var list2 = [0, ...?list];
assert(list2.length == 1);
```

有关使用展开运算符的更多详细信息和示例，请参阅展开运算符提案。

#### Control-flow operators

Dart 提供了集合 if 和集合 for，可以在列表、映射和集合字面量中使用。您可以使用这些操作符使用条件语句（if）和循环（for）来构建集合。

以下是一个使用集合 if 来创建包含三个或四个项目的列表的示例：

```dart
var nav = ['Home', 'Furniture', 'Plants', if (promoActive) 'Outlet'];
```

Dart 还支持集合文字内的if-case ：

```dart
var nav = ['Home', 'Furniture', 'Plants', if (login case 'Manager') 'Inventory'];
```

以下是在将列表项添加到另一个列表之前使用集合来操作列表项的示例：

```dart
var listOfInts = [1, 2, 3];
var listOfStrings = ['#0', for (var i in listOfInts) '#$i'];
assert(listOfStrings[1] == '#1');
```

有关使用集合 if 和 for 的更多详细信息和示例，请参阅控制流集合提案。

#### 泛型(Generics)

如果你查看基本数组类型 List 的 API 文档，你会看到其类型实际上是 List。这里的 <…> 符号表示 List 是一个泛型（或参数化）类型——一个具有形式类型参数的类型。按照惯例，大多数类型变量都使用单字母名称，如 E、T、S、K 和 V。

为什么要使用泛型？
泛型通常是为了类型安全而必需的，但它们的好处并不仅仅局限于让代码能够运行：

* 正确指定泛型类型会生成更好的代码。
* 你可以使用泛型来减少代码重复。
  如果你希望一个列表只包含字符串，你可以将其声明为 List（读作“字符串列表”）。这样，你、你的同事以及你的工具都可以检测到向列表分配非字符串类型是一个错误。以下是一个示例：

```dart
✗ static analysis: failure
var names = `<String>`[];
names.addAll(['Seth', 'Kathy', 'Lars']);
names.add(42); // Error
```

使用泛型的另一个原因是减少代码重复。泛型允许你在多个类型之间共享单个接口和实现，同时还能利用静态分析的优势。例如，假设你创建了一个用于缓存对象的接口：

```dart
abstract class ObjectCache {
  Object getByKey(String key);
  void setByKey(String key, Object value);
}
```

您发现您需要此接口的特定于字符串的版本，因此您创建了另一个接口：

```dart
abstract class StringCache {
  String getByKey(String key);
  void setByKey(String key, String value);
}
```

后来，您决定想要该界面的特定于数字的版本…您明白了。

泛型类型可以省去您创建所有这些接口的麻烦。相反，您可以创建一个带有类型参数的接口：

```dart
abstract class Cache`<T>` {
  T getByKey(String key);
  void setByKey(String key, T value);
}
```

在此代码中，T 是替代类型。它是一个占位符，您可以将其视为开发人员稍后定义的类型。

使用集合文字
列表、集合和映射文字可以参数化。参数化文字就像您已经看到的文字一样，只不过您在左括号之前添加（对于列表和集合）或（对于映射）。下面是使用类型化文字的示例：<keyType, valueType>

```dart
var names = `<String>`['Seth', 'Kathy', 'Lars'];
var uniqueNames = `<String>`{'Seth', 'Kathy', 'Lars'};
var pages = <String, String>{
  'index.html': 'Homepage',
  'robots.txt': 'Hints for web robots',
  'humans.txt': 'We are people, not machines'
};
```

将参数化类型与构造函数一起使用
要在使用构造函数时指定一种或多种类型，请将类型放在<…>类名后面的尖括号 ( ) 中。例如：

```dart
var nameSet = Set`<String>`.from(names);

以下代码创建一个具有整数键和 View 类型值的映射：
var views = Map<int, View>();
```

#### 通用集合及其包含的类型

Dart 泛型类型是具体化的，这意味着它们在运行时携带其类型信息。例如，您可以测试集合的类型：

```dart
var names = `<String>`[];
names.addAll(['Seth', 'Kathy', 'Lars']);
print(names is List`<String>`); // true
```

> 相比之下，Java 中的泛型使用擦除，这意味着泛型类型参数在运行时被删除。在Java中，你可以测试一个对象是否是一个List，但你不能测试它是否是一个List.

### 限制参数化类型

实现泛型类型时，您可能希望限制可以作为参数提供的类型，以便参数必须是特定类型的子类型。您可以使用 来执行此操作extends。

Object一个常见的用例是通过使其成为 的子类型（而不是默认的）来确保类型不可为 null Object?。

```dart
class Foo`<T extends Object>` {
  // Any type provided to Foo for T must be non-nullable.
}
```

extends除了 之外，您还可以与其他类型一起使用Object。下面是扩展 的示例SomeBaseClass，以便SomeBaseClass可以在类型 的对象上调用的成员T：

```dart
class Foo`<T extends SomeBaseClass>` {
  // Implementation goes here...
  String toString() => "Instance of 'Foo<$T>'";
}

class Extender extends SomeBaseClass {...}
```

可以使用SomeBaseClass或其任何子类型作为通用参数：

```dart
var someBaseClassFoo = Foo`<SomeBaseClass>`();
var extenderFoo = Foo`<Extender>`();
```

不指定通用参数也可以：

```dart
var foo = Foo();
print(foo); // Instance of 'Foo`<SomeBaseClass>`'
```

指定任何非SomeBaseClass类型都会导致错误：

```dart
✗ 静态分析：失败
var foo = Foo`<Object>`();
```

#### 使用通用方法

方法和函数还允许类型参数：

```dart
T first`<T>`(List`<T>` ts) {
  // Do some initial work or error checking, then...
  T tmp = ts[0];
  // Do some additional checking or processing...
  return tmp;
}
```

first这里( )上的泛型类型参数允许您在多个地方使用类型参数：T

* 在函数的返回类型中（T）。
* 在参数类型中 (List)。
* 局部变量的类型 (T tmp)。

#### 别名(Typedefs)

类型别名（通常称为typedef，因为它是用关键字声明的typedef）是一种引用类型的简洁方式。下面是声明和使用名为 IntList 的类型别名的示例：

```dart
typedef IntList = List`<int>`;
IntList il = [1, 2, 3];
```

类型别名可以有类型参数：

```dart
typedef ListMapper`<X>` = Map<X, List`<X>`>;
Map<String, List`<String>`> m1 = {}; // Verbose.
ListMapper`<String>` m2 = {}; // Same thing but shorter and clearer.
```

> 在 2.13 之前，typedef 仅限于函数类型。使用新的 typedef 需要至少 2.13 的语言版本。

在大多数情况下，我们建议使用内联函数类型而不是函数的 typedef。然而，函数 typedef 仍然有用：

```dart
typedef Compare`<T>` = int Function(T a, T b);

int sort(int a, int b) => a - b;

void main() {
  assert(sort is Compare`<int>`); // True!
}
```

#### 类型系统

Dart 语言是类型安全的：它结合使用静态类型检查和运行时检查来确保变量的值始终与变量的静态类型匹配，有时称为健全类型。尽管类型是强制性的，但由于类型推断，类型注释是可选的。

静态类型检查的好处之一是能够使用 Dart 的静态分析器在编译时查找错误。

您可以通过向泛型类添加类型注释来修复大多数静态分析错误。最常见的泛型类是集合类型List和Map<K,V>。

例如，在以下代码中，该printInts()函数打印一个整数列表，main()创建一个列表并将其传递给printInts().

```dart
✗ 静态分析：失败
void printInts(List`<int>` a) => print(a);

void main() {
  final list = [];
  list.add(1);
  list.add('2');
  printInts(list);
}
```

前面的代码list在调用时会导致类型错误（上面突出显示）printInts(list)：

```dart
error - The argument type 'List`<dynamic>`' can't be assigned to the parameter type 'List`<int>`'. - argument_type_not_assignable
```

高亮错误是因为产生了从 List 到 List 的不正确的隐式转换。 list 变量是 List 静态类型。这是因为 list 变量的初始化声明 var list = [] 没有为分析器提供足够的信息来推断比 dynamic 更具体的类型参数。 printInts() 函数需要 List 类型的参数，因此导致类型不匹配。

在创建 list 时添加类型注释 （代码中高亮显示部分）后，分析器会提示无法将字符串参数分配给 int 参数。删除 list.add(“2”) 中的字符串引号使代码通过静态分析并能够正常执行。

```dart
void printInts(List`<int>` a) => print(a);

void main() {
  final list = `<int>`[];
  list.add(1);
  list.add(2);
  printInts(list);
}
```

#### 类型安全的好处

安全的类型系统有以下几个好处：

* 在编译时就可以检查并显示类型相关的错误。
  安全的类型系统强制要求代码明确类型，因此在编译时会显示与类型相关的错误，这些错误可能在运行时可能很难发现。
* 代码更容易阅读。
  代码更容易阅读，因为我们信赖一个拥有指定类型的值。在类型安全的 Dart 中，类型是不会骗人的。因为一个拥有指定类型的值是可以被信赖的。
* 代码可维护性更高。
  在安全的类型系统下，当更改一处代码后，类型系统会警告因此影响到的其他代码块。
* 更好的 AOT 编译。
  虽然在没有类型的情况下可以进行 AOT 编译，但生成的代码效率要低很多。

#### 静态检查中的一些技巧

大多数静态类型的规则都很容易理解。下面是一些不太明显的规则：

* 重写方法时，使用类型安全返回值。
* 重写方法时，使用类型安全的参数。
* 不要将动态类型的 List 看做是有类型的 List。
  让我们通过下面示例的类型结构，来更深入的了解这些规则：

![] (https://img-blog.csdnimg.cn/direct/a49be697b32e4cc6904a9307e85a1074.png)

#### 重写方法时，使用类型安全的返回值

子类方法中返回值类型必须与父类方法中返回值类型的类型相同或其子类型。考虑 Animal 类中的 Getter 方法：

```dart
class Animal {
  void chase(Animal a) { ... }
  Animal get parent => ...
}
```

父类 Getter 方法返回一个 Animal 。在 HoneyBadger 子类中，可以使用 HoneyBadger（或 Animal 的任何其他子类型）替换 Getter 的返回值类型，但不允许使用其他的无关类型。

```dart
✔ static analysis: success
class HoneyBadger extends Animal {
  @override
  void chase(Animal a) { ... }

  @override
  HoneyBadger get parent => ...
}
```

```dart
✗ static analysis: failure
class HoneyBadger extends Animal {
  @override
  void chase(Animal a) { ... }

  @override
  Root get parent => ...
}
```

#### 重写方法时，使用类型安全的参数。

子类方法的参数必须与父类方法中参数的类型相同或是其参数的父类型。不要使用原始参数的子类型，替换原有类型，这样会导致参数类型"收紧"。

> 如果有合理的理由使用子类型，可以使用 covariant 关键字。

考虑 Animal 的 chase(Animal) 方法：

```dart
class Animal {
  void chase(Animal a) { ... }
  Animal get parent => ...
}
```

chase() 方法的参数类型是 Animal 。一个 HoneyBadger 可以追逐任何东西。因此可以在重写 chase() 方法时将参数类型指定为任意类型 (Object) 。

```dart
✔ static analysis: success
class HoneyBadger extends Animal {
  @override
  void chase(Object a) { ... }

  @override
  Animal get parent => ...
}
```

Mouse 是 Animal 的子类，下面的代码将 chase() 方法中参数的范围从 Animal 缩小到 Mouse 。

```dart
✗ static analysis: failure
class Mouse extends Animal { ... }

class Cat extends Animal {
  @override
  void chase(Mouse a) { ... }
}
```

下面的代码不是类型安全的，因为 a 可以是一个 cat 对象，却可以给它传入一个 alligator 对象。

```dart
Animal a = Cat();
a.chase(Alligator()); // Not type safe or feline safe.
```

### 不要将动态类型的 List 看做是有类型的 List

当期望在一个 List 中可以包含不同类型的对象时，动态列表是很好的选择。但是不能将动态类型的 List 看做是有类型的 List 。

这个规则也适用于泛型类型的实例。

下面代码创建一个 Dog 的动态 List ，并将其分配给 Cat 类型的 List ，表达式在静态分析期间会产生错误。

```dart
✗ static analysis: failure
void main() {
  List`<Cat>` foo = `<dynamic>`[Dog()]; // Error
  List`<dynamic>` bar = `<dynamic>`[Dog(), Cat()]; // OK
}
```

### 运行时检查

运行时检查工具会处理分析器无法捕获的类型安全问题。

例如，以下代码在运行时会抛出异常，因为将 Dog 类型的 List 赋值给 Cat 类型的 List 是错误的：

```dart
✗ runtime: failure
void main() {
  List`<Animal>` animals = `<Dog>`[Dog()];
  List`<Cat>` cats = animals as List`<Cat>`;
}
```

#### 类型推断

分析器 (analyzer) 可以推断字段，方法，局部变量和大多数泛型类型参数的类型。当分析器没有足够的信息来推断出一个特定类型时，会使用 dynamic 作为类型。

下面是在泛型中如何进行类型推断的示例。在此示例中，名为 arguments 的变量包含一个 Map ，该 Map 将字符串键与各种类型的值配对。

如果显式键入变量，则可以这样写：

```dart
Map<String, dynamic> arguments = {'argA': 'hello', 'argB': 42};
```

或者，使用 var 让 Dart 来推断类型：

```dart
var arguments = {'argA': 'hello', 'argB': 42}; // Map<String, Object>
```

Map 字面量从其条目中推断出它的类型，然后变量从 Map 字面量的类型中推断出它的类型。在此 Map 中，键都是字符串，但值具有不同的类型（ String 和 int ，它们具有共同的上限类型 Object ）。因此，Map 字面量的类型为 Map<String, Object> ，也就是 arguments 的类型。

#### 字段和方法推断

重写父类的且没有指定类型的字段或方法，继承父类中字段或方法的类型。

没有声明类型且不存在继承类型的字段，如果在声明时被初始化，那么字段的类型为初始化值的类型。

#### 静态字段推断

静态字段和变量的类型从其初始化程序中推断获得。需要注意的是，如果推断是个循环，推断会失败（也就是说，推断变量的类型取决于知道该变量的类型）。

#### 局部变量推断

在不考虑连续赋值的情况下，局部变量如果有初始化值的情况下，其类型是从初始化值推断出来的。这可能意味着推断出来的类型会非常严格。如果是这样，可以为他们添加类型注释。

```dart
✗ static analysis: failure
var x = 3; // x is inferred as an int.
x = 4.0;
```

```dart
✔ static analysis: success
num y = 3; // A num can be double or int.
y = 4.0;
```

#### 参数类型推断

构造函数调用的类型参数和 泛型方法 调用是根据上下文的向下信息和构造函数或泛型方法的参数的向上信息组合推断的。如果推断没有按照意愿或期望进行，那么你可以显式的指定他们的参数类型。

```dart
✔ static analysis: success
// Inferred as if you wrote `<int>`[].
List`<int>` listOfInt = [];

// Inferred as if you wrote `<double>`[3.0].
var listOfDouble = [3.0];

// Inferred as Iterable`<int>`.
var ints = listOfDouble.map((x) => x.toInt());
```

在最后一个示例中，根据向下信息 x 被推断为 double 。闭包的返回类型根据向上信息推断为 int 。在推断 map() 方法的类型参数： 时，Dart 使用此返回值的类型作为向上信息。

#### 替换类型

当重写方法时，可以使用一个新类型（在新方法中）替换旧类型（在旧方法中）。类似地，当参数传递给函数时，可以使用另一种类型（实际参数）的对象替换现有类型（具有声明类型的参数）要求的对象。什么时候可以用具有子类型或父类型的对象替换具有一种类型的对象那？

从_消费者_和_生产者_的角度有助于我们思考替换类型的情况。消费者接受类型，生产者产生类型。

可以使用父类型替换消费者类型，使用子类型替换生产者类型。

下面让我们看一下普通类型赋值和泛型类型赋值的示例。

#### 普通类型赋值

将对象赋值给对象时，什么时候可以用其他类型替换当前类型？答案取决于对象是消费者还是生产者。

分析以下类型层次结构：
![] (https://img-blog.csdnimg.cn/direct/b3142821591f4e32b6b86773e2ec800c.png)

思考下面示例中的普通赋值，其中 Cat c 是 消费者 而 Cat() 是 生产者：

```dart
Cat c = Cat();
```

在消费者的位置，任意类型（Animal）的对象替换特定类型（Cat）的对象是安全的。因此使用 Animal c 替换 Cat c 是允许的，因为 Animal 是 Cat 的父类。

```dart
✔ static analysis: success
Animal c = Cat();
```

但是使用 MaineCoon c 替换 Cat c 会打破类型的安全性，因为父类可能会提供一种具有不同行为的 Cat ，例如 Lion ：

```dart
✗ static analysis: failure
MaineCoon c = Cat();
```

在生产者的位置，可以安全地将生产类型 (Cat) 替换成一个更具体的类型 (MaineCoon) 的对象。因此，下面的操作是允许的：

```dart
✔ static analysis: success
Cat c = MaineCoon();
```

#### 泛型赋值

上面的规则同样适用于泛型类型吗？是的。考虑动物列表的层次结构— Cat 类型的 List 是 Animal 类型 List 的子类型，是 MaineCoon 类型 List 的父类型。

在下面的示例中，可以将 MaineCoon 类型的 List 赋值给 myCats ，因为 List 是 List 的子类型：

```dart
✔ static analysis: success
List`<MaineCoon>` myMaineCoons = ...
List`<Cat>` myCats = myMaineCoons;
```

从另一个角度看，可以将 Animal 类型的 List 赋值给 List 吗？

```dart
✗ static analysis: failure
List`<Animal>` myAnimals = ...
List`<Cat>` myCats = myAnimals;
```

这个赋值不能通过静态分析，因为它创建了一个隐式的向下转型 (downcast)，这在非 dynamic 类型中是不允许的，比如 Animal。

若要这段代码能够通过静态分析，需要使用一个显式转换，这可能会在运行时导致失败。

```dart
List`<Animal>` myAnimals = ...
List`<Cat>` myCats = myAnimals as List`<Cat>`;
```

不过，显式转换在运行时仍然可能会失败，这取决于转换被转换内容的实际类型 (此处是 myAnimals)。

#### 方法

在重写方法中，生产者和消费者规则仍然适用。例如：
![] (https://img-blog.csdnimg.cn/direct/a1353c4478ab44de8545f8cc191c69cb.png)
对于使用者（例如 chase(Animal) 方法），可以使用父类型替换参数类型。对于生产者（例如 父类 的 Getter 方法），可以使用子类型替换返回值类型。

有关更多信息，请参阅 重写方法时，使用类型安全的返回值 以及 重写方法时，使用类型安全的参数。

#### 其他资源

以下是更多关于 Dart 类型安全的相关资源：

* 修复常见类型问题 - 编写类型安全的 Dart 代码时可能遇到的错误，以及解决错误的方法。
* 修复类型转换错误 - 了解和学习如何修复类型转换错误
* 健全的空安全 - 学习关于如何撰写健全的空安全代码。
* Customizing static analysis - 如何使用分析配置文件设置及自定义分析器和 linter。

#### 模式匹配

##### 概览 & 用法

> 模式需要至少 3.0 的语言版本。

模式是 Dart 语言中的语法类别，就像语句和表达式一样。模式表示一组值的形状，它可以与实际值相匹配。

本页描述：

* 什么模式做什么。
* Dart 代码中允许使用模式的地方。
* 模式的常见用例是什么。
* 要了解不同类型的模式，请访问模式类型页面。

#### 模式匹配有什么作用

一般来说，模式可以匹配一个值、解构一个值，或者两者兼而有之，具体取决于模式的上下文和形状。

首先，模式匹配允许您检查给定值是否：

* 具有一定的形状。
* 是一定的常数。
* 等于其他东西。
* 有一定的类型。
  然后，模式解构为您提供了一种方便的声明性语法来将该值分解为其组成部分。相同的模式还可以让您将变量绑定到流程中的部分或全部部分。

匹配
模式始终针对某个值进行测试，以确定该值是否具有您期望的形式。换句话说，您正在检查该值是否与模式匹配。

匹配的构成取决于您使用的模式类型。例如，如果值等于模式的常量，则常量模式匹配：

```dart
switch (number) {
  // Constant pattern matches if 1 == number.
  case 1:
    print('one');
}
```

许多模式都使用子模式，有时分别称为外部模式和内部模式。模式在其子模式上递归匹配。例如，任何集合类型模式的各个字段都可以是变量模式或常量模式：

```dart
const a = 'a';
const b = 'b';
switch (obj) {
  // List pattern [a, b] matches obj first if obj is a list with two fields,
  // then if its fields match the constant subpatterns 'a' and 'b'.
  case [a, b]:
    print('$a, $b');
}
```

要忽略匹配值的部分内容，您可以使用通配符模式作为占位符。对于列表模式，您可以使用剩余元素。

#### 解构

当对象和模式匹配时，模式可以访问对象的数据并将其部分提取。换句话说，该模式解构了对象：

```dart
var numList = [1, 2, 3];
// List pattern [a, b, c] destructures the three elements from numList...
var [a, b, c] = numList;
// ...and assigns them to new variables.
print(a + b + c);
```

您可以在解构模式中嵌套任何类型的模式。例如，此 case 模式匹配并解构第一个元素为’a’or的二元素列表’b’：

```dart
switch (list) {
  case ['a' || 'b', var c]:
    print(c);
}
```

#### 可以出现模式匹配的地方

您可以在 Dart 语言的多个位置使用模式：

* 局部变量声明和赋值
* for 和 for-in 循环
* if-case和switch-case
* 集合文字中的控制流
  本节介绍模式匹配和解构的常见用例。

### 变量声明

您可以在 Dart 允许局部变量声明的任何地方使用模式变量声明。该模式与声明右侧的值相匹配。一旦匹配，它就会解构该值并将其绑定到新的局部变量：

```dart
// Declares new variables a, b, and c.
var (a, [b, c]) = ('str', [1, 2]);
```

模式变量声明必须以 或 开头var，final后跟模式。

### 变量赋值

变量赋值模式位于赋值的左侧。首先，它解构匹配的对象。然后它将值分配给现有变量，而不是绑定新变量。

使用变量赋值模式交换两个变量的值，而无需声明第三个临时变量：

```dart
var (a, b) = ('left', 'right');
(b, a) = (a, b); // Swap.
print('$a $b'); // Prints "right left".
```

#### Switch 语句和表达式

每个 case 子句都包含一个模式。这适用于switch 语句和表达式，以及if-case 语句。您可以在案例中使用任何类型的图案。

案例模式是可以反驳的。它们允许控制流到：

* 匹配并解构正在打开的对象。
* 如果对象不匹配则继续执行。
  模式在案例中解构的值成为局部变量。它们的范围仅限于该案例的主体范围内。

```dart
switch (obj) {
  // Matches if 1 == obj.
  case 1:
    print('one');

  // Matches if the value of obj is between the
  // constant values of 'first' and 'last'.
  case >= first && <= last:
    print('in range');

  // Matches if obj is a record with two fields,
  // then assigns the fields to 'a' and 'b'.
  case (var a, var b):
    print('a = $a, b = $b');

  default:
}

```

逻辑或模式对于让多个 case 在 switch 表达式或语句中共享一个主体非常有用：

```dart
var isPrimary = switch (color) {
  Color.red || Color.yellow || Color.blue => true,
  _ => false
};
```

Switch 语句可以让多个 case 共享一个主体，而不使用逻辑或模式，但它们对于允许多个 case 共享一个防护仍然非常有用：

```dart
switch (shape) {
  case Square(size: var s) || Circle(size: var s) when s > 0:
    print('Non-empty symmetric shape');
}
```

Guard 子句将任意条件评估为 case 的一部分，如果条件为 false，则不会退出 switch（就像if在 case 主体中使用语句会导致的情况一样）。

```dart
switch (pair) {
  case (int a, int b):
    if (a > b) print('First element greater');
  // If false, prints nothing and exits the switch.
  case (int a, int b) when a > b:
    // If false, prints nothing but proceeds to next case.
    print('First element greater');
  case (int a, int b):
    print('First element not greater');
}
```

##### for 和 for-in 循环

您可以在for 和 for-in 循环中使用模式来迭代和解构集合中的值。

此示例在 for-in 循环中使用对象解构MapEntry来解构调用返回的对象.entries：

```dart
Map<String, int> hist = {
  'a': 23,
  'b': 100,
};

for (var MapEntry(key: key, value: count) in hist.entries) {
  print('$key occurred $count times');
}
```

对象模式检查 是否hist.entries具有命名类型MapEntry，然后递归到命名字段子模式key和value。它在每次迭代中调用keygetter 和valuegetter MapEntry，并将结果分别绑定到局部变量key和count。

将 getter 调用的结果绑定到同名变量是一种常见的用例，因此对象模式还可以从变量subpattern推断 getter 名称。这允许您将变量模式从冗余的东西简化key: key为:key：

```dart
for (var MapEntry(:key, value: count) in hist.entries) {
  print('$key occurred $count times');
}
```

#### 模式匹配的用例

上一节描述了模式如何适应其他 Dart 代码结构。您看到了一些有趣的用例作为示例，例如交换两个变量的值，或解构映射中的键值对。本节描述了更多用例，回答：

* 您何时以及为何需要使用模式。
* 他们解决什么样的问题。
* 它们最适合哪些成语。
* 解构多值返回
  记录允许从单个函数调用中聚合和返回多个值。模式添加了将记录的字段直接解构为局部变量的能力，与函数调用内联。

而不是为每个记录字段单独声明新的局部变量，如下所示：

```dart
var info = userInfo(json);
var name = info.$1;
var age = info.$2;
```

您可以使用变量声明或赋值模式以及记录模式作为其子模式将函数返回的记录字段解构为局部变量：

```dart
var (name, age) = userInfo(json);
```

#### 解构类实例

对象模式与命名对象类型相匹配，允许您使用对象类已经公开的 getter 来解构其数据。

要解构类的实例，请使用命名类型，后跟括号中的要解构的属性：

```dart
final Foo myFoo = Foo(one: 'one', two: 2);
var Foo(:one, :two) = myFoo;
print('one $one, two $two');
```

#### 代数数据类型

对象解构和 switch case 有利于以代数数据类型风格编写代码。在以下情况下使用此方法：

* 你有一个相关类型的家族。
* 您的操作需要每种类型的特定行为。
* 您希望将该行为分组到一个位置，而不是将其分散到所有不同的类型定义中。
* 不要将操作实现为每种类型的实例方法，而是将操作的变体保留在切换子类型的单个函数中：

```dart
sealed class Shape {}

class Square implements Shape {
  final double length;
  Square(this.length);
}

class Circle implements Shape {
  final double radius;
  Circle(this.radius);
}

double calculateArea(Shape shape) => switch (shape) {
      Square(length: var l) => l * l,
      Circle(radius: var r) => math.pi * r * r
    };
```

#### 验证传入的 JSON

映射和列表模式非常适合解构 JSON 数据中的键值对：

```dart
var json = {
  'user': ['Lily', 13]
};
var {'user': [name, age]} = json;
```

如果您知道 JSON 数据具有您期望的结构，则前面的示例是现实的。但数据通常来自外部来源，例如通过网络。您需要先对其进行验证以确认其结构。

如果没有模式，验证就会很冗长：

```dart
if (json is Map<String, Object?> &&
    json.length == 1 &&
    json.containsKey('user')) {
  var user = json['user'];
  if (user is List`<Object>` &&
      user.length == 2 &&
      user[0] is String &&
      user[1] is int) {
    var name = user[0] as String;
    var age = user[1] as int;
    print('User $name is $age years old.');
  }
}
```

单例模式可以实现相同的验证。单个案例作为if-case语句效果最好。模式提供了一种更具声明性且更简洁的验证 JSON 的方法：

```dart
if (json case {'user': [String name, int age]}) {
  print('User $name is $age years old.');
}
```

此案例模式同时验证了：

json是一个映射，因为它必须首先匹配外部映射模式才能继续。而且，由于它是一张地图，它也确认json不为空。
*json包含一把钥匙user。

* 密钥user与两个值的列表配对。
* 列表值的类型为String和int。
* 用于保存值的新局部变量是name和age。

#### 模式匹配类型

这个页面是对不同类型模式的参考。要了解模式的工作原理的概述、在Dart中可以使用模式的地方以及常见用例，请访问主要的Patterns页面。

#### 模式优先级

类似于操作符的优先级，模式评估也遵循优先级规则。你可以使用括号化模式来首先评估低优先级的模式。

本文档按优先级升序列出了模式类型：

* 逻辑或模式的优先级低于逻辑与模式，逻辑与模式的优先级低于关系模式，以此类推。
* 后缀一元模式（类型转换、空值检查和空值断言 cast、null-check和null-assert）具有相同的优先级。
* 其余的基本模式共享最高的优先级。集合类型（记录、列表和映射）和对象模式包含其他数据，因此作为外部模式首先进行评估。

#### 逻辑或 Logical-or

subpattern1 || subpattern2
逻辑或模式将子模式分隔开，||如果任何分支匹配，则匹配。分支是从左到右评估的。一旦一个分支匹配，其余的就不会被评估。

```dart
var isPrimary = switch (color) {
  Color.red || Color.yellow || Color.blue => true,
  _ => false
};
```

逻辑或模式中的子模式可以绑定变量，但分支必须定义同一组变量，因为模式匹配时只会评估一个分支。

#### 逻辑与 Logical-and

subpattern1 && subpattern2
仅当两个子模式匹配时，一对模式才由&&匹配项分隔。如果左分支不匹配，则不评估右分支。
逻辑与模式中的子模式可以绑定变量，但每个子模式中的变量不能重叠，因为如果模式匹配，它们都会被绑定：

```dart
switch ((1, 2)) {
  // Error, both subpatterns attempt to bind 'b'.
  case (var a, var b) && (var b, var c): // ...
}
```

#### 关系 Relational

== expression
< expression

关系模式使用任何相等或关系运算符将匹配值与给定常量进行比较：==、!=、<、>、<=和>=。

当以常量作为参数对匹配值调用适当的运算符时，模式会匹配返回true。

关系模式对于数字范围的匹配非常有用，特别是与逻辑与模式结合使用时：

```dart
String asciiCharType(int char) {
  const space = 32;
  const zero = 48;
  const nine = 57;

  return switch (char) {
    < space => 'control',
    == space => 'space',
    > space && < zero => 'punctuation',
    >= zero && <= nine => 'digit',
    _ => ''
  };
}
```

#### 类型转换 Cast

foo as String
转换模式允许您在将值传递给另一个子模式之前在解构过程中插入类型转换：

```dart
(num, Object) record = (1, 's');
var (i as int, s as String) = record;
```

如果值没有指定的类型，则转换模式将抛出异常。与空断言模式一样，这可以让您强制断言某些解构值的预期类型。

#### 空值检查 Null-check

subpattern?
如果值不为空，则空检查模式首先匹配，然后将内部模式与相同的值进行匹配。它们允许您绑定一个变量，该变量的类型是所匹配的可为空值的不可为空基类型。

要将null值视为匹配失败而不抛出异常，请使用空检查模式。

```dart
String? maybeString = 'nullable with base type String';
switch (maybeString) {
  case var s?:
  // 's' has type non-nullable String here.
}
```

要在值为 null 时进行匹配，请使用常量 pattern null。

#### 空值断言 Null-assert

subpattern!
如果对象不为空，则空断言模式首先匹配，然后匹配值。它们允许非空值流过，但如果匹配的值为空则抛出异常。

为了确保null值不会被默默地视为匹配失败，请在匹配时使用空断言模式：

```dart
List<String?> row = ['user', null];
switch (row) {
  case ['user', var name!]: // ...
  // 'name' is a non-nullable string here.
}
```

要从变量声明模式中消除null值，请使用空断言模式：

```dart
(int?, int?) position = (2, 3);

var (x!, y!) = position;
```

要在值为 null 时进行匹配，请使用常量 pattern null。

#### 常量 Constant

123, null, ‘string’, math.pi, SomeClass.constant, const Thing(1, 2), const (1 + 2)
当值等于常量时常量模式匹配：

```dart
switch (number) {
  // Matches if 1 == number.
  case 1: // ...
}
```

您可以直接使用简单的文字和对命名常量的引用作为常量模式：

* 数字文字 ( 123, 45.56)
* 布尔文字 ( true)
* 字符串文字 ( ‘string’)
* 命名常量 ( someConstant, math.pi, double.infinity)
* 常量构造函数 ( const Point(0, 0))
* 常量集合文字 ( const [], const {1, 2})
  更复杂的常量表达式必须用括号括起来并以const( const (1 + 2)) 为前缀：

```dart
// List or map pattern:
case [a, b]: // ...

// List or map literal:
case const [a, b]: // ...
```

#### 变量 Variable

var bar, String str, final int _
变量模式将新变量绑定到已匹配或解构的值。它们通常作为解构模式的一部分出现，以捕获解构值。

这些变量位于仅当模式匹配时才可访问的代码区域的范围内。

```dart
switch ((1, 2)) {
  // 'var a' and 'var b' are variable patterns that bind to 1 and 2, respectively.
  case (var a, var b): // ...
  // 'a' and 'b' are in scope in the case body.
}
```

类型化变量模式仅在匹配值具有声明的类型时才匹配，否则失败：

```dart
switch ((1, 2)) {
  // Does not match.
  case (int a, String b): // ...
}
```

您可以使用通配符模式作为变量模式。

#### 标识符 Identifier

foo, _

标识符模式的行为可能类似于常量模式或变量模式，具体取决于它们出现的上下文：

* 声明上下文：声明一个带有标识符名称的新变量：var (a, b) = (1, 2);
* 赋值上下文：分配给具有标识符名称的现有变量：(a, b) = (3, 4);
* 匹配上下文：视为命名常量模式（除非其名称为_）：

```dart
const c = 1;
switch (2) {
  case c:
    print('match $c');
  default:
    print('no match'); // Prints "no match".
}
```

* 任何上下文中的通配符标识符：匹配任何值并丢弃它：case [_, var y, _]: print(‘The middle element is $y’);

#### 括号化 Parenthesized

(subpattern)
与带括号的表达式一样，模式中的括号可让您控制模式优先级，并在需要较高优先级的模式时插入较低优先级的模式。

例如，分别想象布尔常量x、y、 和zequal true、true、 和false。尽管以下示例类似于布尔表达式求值，但该示例匹配模式。

```dart
// ...
x || y => 'matches true',
x || y && z => 'matches true',
x || (y && z) => 'matches true',
// `x || y && z` is the same thing as `x || (y && z)`.
(x || y) && z => 'matches nothing',
// ...
```

Dart 开始从左到右匹配模式。

* 1.第一个模式匹配true为xmatches true。
* 2.第二个模式匹配true为xmatches true。
* 3.第三个模式匹配true为xmatches true。
* 4.第四个模式(x || y) && z没有匹配项。
* 匹配x，true因此 Dart 不会尝试匹配y。
* 虽然(x || y)匹配true，z但不匹配true
* 因此，模式(x || y) && z不匹配true。
* 子模式(x || y)不匹配false，因此 Dart 不会尝试匹配z。
* 因此，模式(x || y) && z不匹配false。
* 结论是，(x || y) && z没有匹配项。

#### 列表 List

[subpattern1, subpattern2]
列表模式匹配实现 的值List，然后递归地将其子模式与列表元素匹配，以按位置解构它们：

```dart
const a = 'a';
const b = 'b';
switch (obj) {
  // List pattern [a, b] matches obj first if obj is a list with two fields,
  // then if its fields match the constant subpatterns 'a' and 'b'.
  case [a, b]:
    print('$a, $b');
}
```

列表模式要求模式中的元素数量与整个列表匹配。但是，您可以使用剩余元素作为占位符来说明列表中任意数量的元素。

#### 剩余元素 Rest element

列表模式可以包含一个剩余元素 ( …)，它允许匹配任意长度的列表。

```dart
var [a, b, ..., c, d] = [1, 2, 3, 4, 5, 6, 7];
// Prints "1 2 6 7".
print('$a $b $c $d');
```

剩余元素还可以有一个子模式，该子模式将与列表中其他子模式不匹配的元素收集到一个新列表中：

```dart
var [a, b, ...rest, c, d] = [1, 2, 3, 4, 5, 6, 7];
// Prints "1 2 [3, 4, 5] 6 7".
print('$a $b $rest $c $d');
```

#### 映射 Map

{“key”: subpattern1, someConst: subpattern2}
映射模式匹配实现 的值Map，然后递归地将其子模式与映射的键匹配以解构它们。

地图模式不需要模式匹配整个地图。映射模式会忽略映射包含的与该模式不匹配的任何键。

#### 记录 Record

(subpattern1, subpattern2)
(x: subpattern1, y: subpattern2)
记录模式匹配记录对象并解构其字段。如果该值不是与模式形状相同的记录，则匹配失败。否则，字段子模式将与记录中的相应字段进行匹配。

记录模式要求模式与整个记录匹配。要使用模式解构具有命名字段的记录，请在模式中包含字段名称：

```dart
var (myString: foo, myNumber: bar) = (myString: 'string', myNumber: 1);
```

可以省略 getter 名称，并从字段子模式中的变量模式或标识符模式推断出来。这些模式对都是等效的：

```dart
// Record pattern with variable subpatterns:
var (untyped: untyped, typed: int typed) = record;
var (:untyped, :int typed) = record;

switch (record) {
  case (untyped: var untyped, typed: int typed): // ...
  case (:var untyped, :int typed): // ...
}

// Record pattern with null-check and null-assert subpatterns:
switch (record) {
  case (checked: var checked?, asserted: var asserted!): // ...
  case (:var checked?, :var asserted!): // ...
}

// Record pattern with cast subpattern:
var (untyped: untyped as int, typed: typed as String) = record;
var (:untyped as int, :typed as String) = record;

```

### 对象 Object

SomeClass(x: subpattern1, y: subpattern2)

对象模式根据给定的命名类型检查匹配的值，以使用对象属性上的 getter 来解构数据。如果值不具有相同的类型，它们就会被驳斥。

```dart
switch (shape) {
  // Matches if shape is of type Rect, and then against the properties of Rect.
  case Rect(width: var w, height: var h): // ...
}
```

可以省略 getter 名称，并从字段子模式中的变量模式或标识符模式推断：

```dart
// Binds new variables x and y to the values of Point's x and y properties.
var Point(:x, :y) = Point(1, 2);
```

对象模式不要求模式匹配整个对象。如果对象具有该模式不会解构的额外字段，它仍然可以匹配。

#### 通配符 Wildcard

_

命名的模式_是通配符，可以是变量模式或标识符模式，它不绑定或分配给任何变量。

在需要子模式的地方，它作为占位符很有用，以便解构以后的位置值：

```dart
var list = [1, 2, 3];
var [_, two, _] = list;
```

当您想要测试值的类型但不将该值绑定到名称时，带有类型注释的通配符名称非常有用：

```dart
switch (record) {
  case (int _, String _):
    print('First field is int and second is String.');
}
```

#### 函数方法

Dart 是一种真正的面向对象语言，因此即使是函数也是对象并且具有类型Function。这意味着函数可以分配给变量或作为参数传递给其他函数。您还可以像调用函数一样调用 Dart 类的实例。有关详细信息，请参阅可调用对象。

这是实现函数的示例：

```dart
bool isNoble(int atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}
```

尽管Effective Dart建议公共API使用类型注释，但如果省略类型，该功能仍然有效：

```dart
isNoble(atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}

```

对于仅包含一个表达式的函数，您可以使用一种简写语法：

```dart
bool isNoble(int atomicNumber) => _nobleGases[atomicNumber] != null;
```

=> expr 语法是 { return expr; } 的简写。这种 => 符号有时被称为箭头语法。

> 箭头 (=>) 和分号 (😉 之间只能出现表达式，而不是语句。例如，您不能在那里放置if 语句，但可以使用条件表达式。

#### 参数 Parameters

函数可以具有任意数量的所需位置参数。这些参数后面可以跟有命名参数或可选的位置参数（但不能同时跟有两者）。

> 一些 API（尤其是Flutter小部件构造函数）仅使用命名参数，即使对于强制参数也是如此。有关详细信息，请参阅下一节。

当您将参数传递给函数或定义函数参数时，可以使用尾随逗号。

#### 命名参数 Named parameters

命名参数是可选的，除非它们被明确标记为required.

定义函数时，使用{param1, param2, …}来指定命名参数。如果您不提供默认值或将命名参数标记为required，则它们的类型必须可为空，因为它们的默认值将是null：

```dart
/// Sets the [bold] and [hidden] flags ...
void enableFlags({bool? bold, bool? hidden}) {...}
```

调用函数时，可以使用 paramName: value 指定命名参数。例如：

```dart
enableFlags(bold: true, hidden: false);
```

在Dart等语言中，如果你想为命名参数定义一个除null之外的默认值，你可以使用=来指定这个默认值。所指定的值必须是一个编译时常量。这样，在调用函数时如果没有提供该命名参数的值，那么就会使用这个默认值。例如：

```dart
/// Sets the [bold] and [hidden] flags ...
void enableFlags({bool bold = false, bool hidden = false}) {...}

// bold will be true; hidden will be false.
enableFlags(bold: true);

如果您希望命名参数是强制性的，要求调用者提供参数的值，请使用以下注释required：
```dart
const Scrollbar({super.key, required Widget child});
```

如果有人尝试创建一个 Scrollbar 而不指定child参数，则分析器会报告问题。

> 标记为 required 的参数仍然可以为空：
> const Scrollbar({super.key, required Widget? child});

您可能想首先放置位置参数，但 Dart 不需要它。当适合您的 API 时，Dart 允许将命名参数放置在参数列表中的任何位置：

```dart
repeat(times: 2, () {
  ...
});
```

### 可选位置参数 Optional positional parameters

将一组函数参数包装在 [] 中，将它们标记为可选位置参数。如果未提供默认值，则其类型必须为空，因为它们的默认值为 null：

```dart
String say(String from, String msg, [String? device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  return result;
}
```

下面是在不带可选参数的情况下调用此函数的示例：

```dart
assert(say('Bob', 'Howdy') == 'Bob says Howdy');
```

下面是使用第三个参数调用此函数的示例：

```dart
assert(say('Bob', 'Howdy', 'smoke signal') ==
    'Bob says Howdy with a smoke signal');
```

在Dart中，为可选的位置参数定义除null之外的默认值时，确实可以使用=来指定默认值。例如：

```dart
String say(String from, String msg, [String device = 'carrier pigeon']) {
  var result = '$from says $msg with a $device';
  return result;
}

assert(say('Bob', 'Howdy') == 'Bob says Howdy with a carrier pigeon');
```

#### 主函数 The main() function

每个应用都必须具有 main() 顶级函数，该函数用作应用的入口点。该 main() 函数返回 void 并具有参数的可选 List 参数。

下面是一个简单的 main() 函数：

每个应用都必须具有 main() 顶级函数，该函数用作应用的入口点。该 main() 函数返回 void 并具有参数的可选 List `<String>` 参数。

下面是一个简单的 main() 函数：

下面是接受参数的命令行应用的函数示例 main() ：

```dart
// Run the app like this: dart run args.dart 1 test
void main(List`<String>` arguments) {
  print(arguments);

  assert(arguments.length == 2);
  assert(int.parse(arguments[0]) == 1);
  assert(arguments[1] == 'test');
}
```

您可以使用 args 库 来定义和分析命令行参数。
函数作为一等对象 Functions as first-class objects
您可以将一个函数作为参数传递给另一个函数。例如：

```dart
void printElement(int element) {
  print(element);
}

var list = [1, 2, 3];

// Pass printElement as a parameter.
list.forEach(printElement);
```

您还可以将函数分配给变量，例如：

```dart
var loudify = (msg) => '!!! ${msg.toUpperCase()} !!!';
assert(loudify('hello') == '!!! HELLO !!!');
```

此示例使用匿名函数。有关这些内容的更多信息，请参见下一节。

#### 匿名函数 Anonymous functions

大多数函数都命名，例如 main() 或 printElement()。您还可以创建称为 匿名函数的无名函数，有时也可以创建 lambda 或 闭包。您可以将匿名函数分配给变量，以便例如，可以在集合中添加或删除该函数。

匿名函数看起来类似于命名函数 - 零个或多个参数，括号之间用逗号和可选类型注释分隔。

下面的代码块包含函数的正文：

```dart
([[Type] param1[, …]]) {
  codeBlock;
};
```

下面的示例使用非类型化参数 定义一个匿名函数， item并将其传递给该 map 函数。为列表中的每个项目调用的函数将每个字符串转换为大写。然后在传递给 forEach的匿名函数中，每个转换后的字符串都与其长度一起打印出来。

```dart
const list = ['apples', 'bananas', 'oranges'];
list.map((item) {
  return item.toUpperCase();
}).forEach((item) {
  print('$item: ${item.length}');
});
```

如果函数仅包含单个表达式或 return 语句，则可以使用箭头表示法将其缩短。将以下行粘贴到 DartPad 中，然后单击 “运行 ”以验证它在功能上是否等效。

```dart
list
    .map((item) => item.toUpperCase())
    .forEach((item) => print('$item: ${item.length}'));
```

#### 词法作用域 Lexical scope

Dart 是一种词法范围语言，这意味着变量的范围是静态确定的，只需通过代码的布局即可。您可以“向外跟随大括号”以查看变量是否在范围内。

下面是每个作用域级别具有变量的嵌套函数的示例：

```dart
bool topLevel = true;

void main() {
  var insideMain = true;

  void myFunction() {
    var insideFunction = true;

    void nestedFunction() {
      var insideNestedFunction = true;

      assert(topLevel);
      assert(insideMain);
      assert(insideFunction);
      assert(insideNestedFunction);
    }
  }
}
```

> 请注意如何使用 nestedFunction() 每个级别的变量，一直到顶层。

#### 词法闭包 Lexical closures

闭包是一个函数对象，它有权访问其词法作用域中的变量，即使该函数在其原始作用域之外使用也是如此。

函数可以关闭在周围作用域中定义的变量。在以下示例中， makeAdder() 捕获变量 addBy。无论返回的函数走到哪里，它都会 addBy记住 。

```dart
/// Returns a function that adds [addBy] to the
/// function's argument.
Function makeAdder(int addBy) {
  return (int i) => addBy + i;
}

void main() {
  // Create a function that adds 2.
  var add2 = makeAdder(2);

  // Create a function that adds 4.
  var add4 = makeAdder(4);

  assert(add2(3) == 5);
  assert(add4(3) == 7);
}

```

测试函数是否相等 Testing functions for equality
下面是测试顶级函数、静态方法和实例方法的相等性示例：

```dart
void foo() {} // A top-level function

class A {
  static void bar() {} // A static method
  void baz() {} // An instance method
}

void main() {
  Function x;

  // Comparing top-level functions.
  x = foo;
  assert(foo == x);

  // Comparing static methods.
  x = A.bar;
  assert(A.bar == x);

  // Comparing instance methods.
  var v = A(); // Instance #1 of A
  var w = A(); // Instance #2 of A
  var y = w;
  x = w.baz;

  // These closures refer to the same instance (#2),
  // so they're equal.
  assert(y.baz == x);

  // These closures refer to different instances,
  // so they're unequal.
  assert(v.baz != w.baz);
}

``
#### 返回值 Return values
所有函数都返回一个值。如果未指定返回值，则该语句 return null; 将隐式追加到函数体中。
```dart
foo() {}

assert(foo() == null);
```

返回多个值时，你可以通过将这些值聚合到一个记录（record）中来实现。这样，函数就可以返回一个包含多个字段的对象，每个字段对应一个要返回的值。

```dart
(String, int) foo() {
  return ('something', 42);
}
```

#### 生成器 Generators

当需要延迟生成值序列时，请考虑使用生成器函数。Dart 内置了对两种生成器功能的支持：

* 同步 生成器：返回一个 Iterable 对象。
* 异步 生成器：返回一个 Stream 对象。
  要实现 同步生成 器函数，请将函数体 sync*标记为 ，并使用 yield 语句传递值：

当你需要惰性地产生一系列值时，可以考虑使用生成器函数。Dart 内置支持两种类型的生成器函数：

* 同步生成器：返回一个 Iterable 对象。
* 异步生成器：返回一个 Stream 对象。
  要实现一个同步生成器函数，需要在函数体前标记为 sync*，并使用 yield 语句来提供值。下面是一个同步生成器函数的示例：

```dart
Iterable<int> naturalsTo(int n) sync* {
  int k = 0;
  while (k < n) yield k++;
}
```

若要实现 异步 生成器函数，请将函数体 async*标记为 ，并使用 yield 语句传递值：

```dart
Stream<int> asynchronousNaturalsTo(int n) async* {
  int k = 0;
  while (k < n) yield k++;
}
```

如果您的生成器是递归的，则可以使用以下方法 yield*提高其性能：

```dart
Iterable<int> naturalsDownFrom(int n) sync* {
  if (n > 0) {
    yield n;
    yield* naturalsDownFrom(n - 1);
  }
}
```

#### 外部函数 External functions

外部函数是其主体与其声明分开实现的函数。在函数声明之前包含 external 关键字，如下所示：

```dart
external void someFunc(int i);
```

外部函数的实现可以来自另一个 Dart 库，或者更常见的是来自另一种语言。在互操作上下文中， external 引入外部函数或值的类型信息，使其在 Dart 中可用。实现和使用在很大程度上特定于平台，因此请查看 C 或 JavaScript 等互操作文档以了解更多信息。

外部函数可以是顶级函数、 实例方法、 getter 或 setter 或 非重定向构造函数。 实例变量 也可以是 external ，它等效于外部 getter 和（如果变量不是 final）外部 setter。

### 控制流

#### 循环

本页展示了如何使用循环和支持语句来控制 Dart 代码的流：

```dart
for loops
while and do while loops
break and continue
您还可以使用以下命令在 Dart 中操作控制流：

Branching, like if and switch
Exceptions, like try, catch, and throw
For loops
您可以使用标准 for 循环进行迭代。例如：

var message = StringBuffer('Dart is fun');
for (var i = 0; i < 5; i++) {
  message.write('!');
}
```

在 Dart 的 for 循环中，闭包捕获索引的值是一个特性，它避免了在 JavaScript 中常见的陷阱。例如：

```dart
var callbacks = [];
for (var i = 0; i < 2; i++) {
  callbacks.add(() => print(i));
}

for (final c in callbacks) {
  c();
}
```

输出是 0 和 1然后 ，正如预期的那样。相比之下，该示例将打印 2 ，然后在 2 JavaScript 中打印。

有时，在迭 Iterable 代类型时，您可能不需要知道当前迭代计数器，例如 List 或 Set.在这种情况下，请使用 for-in 循环来获取更简洁的代码：

```dart
for (final candidate in candidates) {
  candidate.interview();
}
```

若要处理从可迭代对象获取的值，还可以在循环中使用for-in模式：

```dart
for (final Candidate(:name, :yearsExperience) in candidates) {
  print('$name has $yearsExperience of experience.');
}
```

> 要练习使用 for-in，请遵循 Iterable collections Codelab。

可迭代类还有一个 forEach（） 方法作为另一个选项：

```dart
var collection = [1, 2, 3];
collection.forEach(print); // 1 2 3
1
2
While and do-while
while循环在循环之前评估条件：

while (!isDone()) {
  doSomething();
}
```

do-while 循环计算循环后的条件：

```dart
do {
  printLine();
} while (!atEndOfPage());
```

#### Break and continue

用于 break 停止循环：

```dart
while (true) {
  if (shutDownRequested()) break;
  processIncomingRequests();
}
```

用于 continue 跳到下一个循环迭代：

```dart
for (int i = 0; i < candidates.length; i++) {
  var candidate = candidates[i];
  if (candidate.yearsExperience < 5) {
    continue;
  }
  candidate.interview();
}
```

如果使用的 Iterable 是列表或集，则编写上一个示例的方式可能会有所不同：

```dart
candidates
    .where((c) => c.yearsExperience >= 5)
    .forEach((c) => c.interview());
```

#### 分支

本页展示了如何使用分支控制 Dart 代码的流：

* if statements and elements
* if-case statements and elements
* switch statements and expressions
  您还可以使用以下命令在 Dart 中操作控制流：

Loops, like for and while
Exceptions, like try, catch, and throw

##### If

Dart 支持 if 带有可选 else 子句的语句。 括号中的 if 条件必须是 计算结果为 布尔值的表达式：

```dart
if (isRaining()) {
  you.bringRainCoat();
} else if (isSnowing()) {
  you.wearJacket();
} else {
  car.putTopDown();
}
```

在表达式上下文中学习如何使用 if，可以查看条件表达式（Conditional expressions）。

##### If-case

Dart if 语句支持 case 子句，后跟一个 模式：

```dart
if (pair case [int x, int y]) return Point(x, y);
```

如果模式与值匹配，则分支将使用模式在作用域中定义的任何变量执行。

在前面的示例中，列表模式 [int x, int y] 与值 pair 匹配，因此分支 return Point(x, y) 使用模式定义 x 的变量执行，并且 y。

否则，控制流将进展到要执行的 else 分支（如果有）：

```dart
if (pair case [int x, int y]) {
  print('Was coordinate array $x,$y');
} else {
  throw FormatException('Invalid coordinates.');
}
```

if-case 语句提供了一种针对单个模式进行匹配和解构的方法。若要针对多个模式测试值，请使用 switch。

> if 语句中的 Case 子句要求语言 版本 至少为 3.0。

#### Switch statements

switch语句根据一系列情况计算值表达式。每个case子句都是要匹配的值的模式。您可以对案例使用任何类型的模式。

当值与案例的模式匹配时，将执行案例正文。非空 case 子句在完成后跳转到开关的末尾。它们不需要声明 break 。结束非空 case 子句 continue的其他有效方法是 、 throw或 return 语句。

default当没有case子句匹配时，使用 or 通配符_子句执行代码：

```dart
var command = 'OPEN';
switch (command) {
  case 'CLOSED':
    executeClosed();
  case 'PENDING':
    executePending();
  case 'APPROVED':
    executeApproved();
  case 'DENIED':
    executeDenied();
  case 'OPEN':
    executeOpen();
  default:
    executeUnknown();
}
```

在 switch 语句中，如果没有为某个 case 语句提供特定的执行代码（即“空”的 case），程序的控制流会“贯穿”（fall through）到下一个 case。这意味着多个 case 可以共享相同的代码块。

```dart
switch (command) {
  case 'OPEN':
    executeOpen();
    continue newCase; // Continues executing at the newCase label.

  case 'DENIED': // Empty case falls through.
  case 'CLOSED':
    executeClosed(); // Runs for both DENIED and CLOSED,

  newCase:
  case 'PENDING':
    executeNowClosed(); // Runs for both OPEN and PENDING.
}
```

在Dart中，你可以使用逻辑或模式（logical-or patterns）来允许不同的case共享相同的代码体或守卫条件。逻辑或模式允许你使用|运算符来指定多个可能的匹配项，这些匹配项将共享相同的代码块。

#### Switch expressions

switch 表达式基于表达式生成值 正文匹配。 您可以在 Dart 允许表达式的地方使用 switch 表达式， 表达式语句的开头除外。例如：

```dart
var x = switch (y) { ... };

print(switch (x) { ... });

return switch (x) { ... };
```

如果要在表达式语句的开头使用开关， 使用 switch 语句。

switch 表达式允许您重写 switch 语句 ，如下所示：

```dart
// Where slash, star, comma, semicolon, etc., are constant variables...
switch (charCode) {
  case slash || star || plus || minus: // Logical-or pattern
    token = operator(charCode);
  case comma || semicolon: // Logical-or pattern
    token = punctuation(charCode);
  case >= digit0 && <= digit9: // Relational and logical-and patterns
    token = number();
  default:
    throw FormatException('Invalid');
}
```

变成 一个表达式，如下所示：

```dart
token = switch (charCode) {
  slash || star || plus || minus => operator(charCode),
  comma || semicolon => punctuation(charCode),
  >= digit0 && <= digit9 => number(),
  _ => throw FormatException('Invalid')
};
```

确实，Dart中的switch表达式语法与传统的switch语句语法有所不同。以下是它们之间的一些主要区别：

* 不使用case关键字：在switch表达式中，每个匹配项（或称为“情况”）不是以case关键字开始的。
* 单个表达式作为体：每个匹配项后面跟着的是一个表达式，而不是一系列语句。这个表达式的值就是整个switch表达式的返回值。
* 没有隐式贯穿：在switch表达式中，如果某个匹配项没有对应的表达式体，则不会贯穿到下一个匹配项。每个匹配项都需要一个表达式体。
* 使用=>而不是:：在switch表达式中，匹配项和它们的表达式体之间使用=>分隔，而不是使用:。
* 使用,分隔匹配项：不同的匹配项之间使用,分隔，而不是使用break来分隔它们。此外，最后一个匹配项后面也可以有一个可选的,。
* 默认情况使用_：在switch表达式中，默认情况（即当没有匹配项时）使用_来表示，而不是使用default关键字。

> 切换表达式要求 语言版本 至少为 3.0。

#### 穷举检查 Exhaustiveness checking

穷举性检查是一项功能，如果值可能进入开关但与任何情况都不匹配，则报告编译时错误。

```dart
// Non-exhaustive switch on bool?, missing case to match null possibility:
switch (nullableBool) {
  case true:
    print('yes');
  case false:
    print('no');
}
```

默认情况 （default 或 _） 涵盖可流经交换机的所有可能值。这使得任何类型的开关都详尽无遗。

枚举和sealed类型对于交换机特别有用，因为即使没有默认情况，它们的可能值也是已知的并且完全可枚举。在类上使用修饰符可在切换该类的子类型时启用穷举性检查：

```dart
sealed class Shape {}

class Square implements Shape {
  final double length;
  Square(this.length);
}

class Circle implements Shape {
  final double radius;
  Circle(this.radius);
}

double calculateArea(Shape shape) => switch (shape) {
      Square(length: var l) => l * l,
      Circle(radius: var r) => math.pi * r * r
    };

```

如果有人要添加一个新的 Shape子类 ， 这个 switch 表达是不完整的。 详尽性检查将通知您缺少的子类型。 这使您可以在某种程度上使用 Dart 函数代数数据类型样式。

#### Guard clause

若要在子句之后 case 设置可选的 guard 子句，请使用关键字 when。 guard 子句可以跟在 if case后面，并且 switch 语句和表达式。

```dart
// Switch statement:
switch (something) {
  case somePattern when some || boolean || expression:
    //             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Guard clause.
    body;
}

// Switch expression:
var value = switch (something) {
  somePattern when some || boolean || expression => body,
  //               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Guard clause.
}

// If-case statement:
if (something case somePattern when some || boolean || expression) {
  //                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Guard clause.
  body;
}
```

在编程中，守卫（Guard）是在匹配到某个情况（case）后评估一个任意的布尔表达式。它允许你为情况体（case body）的执行添加进一步的约束条件。如果守卫子句评估结果为false，则执行会继续到下一个情况，而不是退出整个switch结构。

#### 错误处理

##### 异常 Exceptions

您的 Dart 代码可以抛出和捕获异常。例外是错误 表明发生了意想不到的事情。如果例外不是 捕获后，引发异常的 隔离 被暂停， 通常，隔离物及其程序被终止。

与 Java 相比，Dart 的所有异常都是未经检查的异常。 方法不会声明它们可能会引发哪些异常，而您也不会 需要捕获任何异常。

Dart 提供 Exception 和 Error 类型，以及许多预定义的子类型。当然，你可以 定义自己的例外。但是，Dart 程序可以抛出任何 非 null 对象（而不仅仅是 Exception 和 Error 对象）作为异常。

异常 Throw
下面是抛出或 引发异常的示例：

```dart
throw FormatException('Expected at least 1 section');
```

您还可以抛出任意对象：

```dart
throw 'Out of llamas!';
```

> 生产质量代码通常会抛出以下类型： implement Error 或 Exception.

由于引发异常是一个表达式，因此可以引发异常 在 => 语句中，以及允许表达式的其他任何位置：

```dart
void distanceTo(Point other) => throw UnimplementedError();
```

##### 捕获 Catch

捕获或捕获异常会阻止异常 传播（除非重新抛出异常）。 捕获异常后，您有机会处理它：

```dart
try {
  breedMoreLlamas();
} on OutOfLlamasException {
  buyMoreLlamas();
}
```

若要处理可能引发多种类型异常的代码，可以 指定多个 catch 子句。与 Thrown Object 的类型处理异常。如果 catch 子句没有 指定一个类型，该子句可以处理任何类型的抛出对象：

```dart
try {
  breedMoreLlamas();
} on OutOfLlamasException {
  // A specific exception
  buyMoreLlamas();
} on Exception catch (e) {
  // Anything else that is an exception
  print('Unknown exception: $e');
} catch (e) {
  // No specified type, handles all
  print('Something really unknown: $e');
}
```

如前面的代码所示，可以使用其中之一oncatch或两者。 在需要指定异常类型时使用on。在以下情况下使用catch 异常处理程序需要异常对象。

您可以指定一个或两个参数。 catch() 第一个是抛出的异常， 第二个是堆栈跟踪（对象 StackTrace ）。

```dart
try {
  // ···
} on Exception catch (e) {
  print('Exception details:\n $e');
} catch (e, s) {
  print('Exception details:\n $e');
  print('Stack trace:\n $s');
}
```

要部分处理异常， 在允许它传播的同时， rethrow 使用关键字。

```dart
void misbehave() {
  try {
    dynamic foo = true;
    print(foo++); // Runtime error
  } catch (e) {
    print('misbehave() partially handled ${e.runtimeType}.');
    rethrow; // Allow callers to see the exception.
  }
}

void main() {
  try {
    misbehave();
  } catch (e) {
    print('main() finished handling ${e.runtimeType}.');
  }
}

```

##### Finally

若要确保某些代码在是否引发异常的情况下运行，请使用 一个 finally 子句。如果没有 catch 子句与异常匹配，则 Exception 在子句运行后 finally 传播：

```dart
try {
  breedMoreLlamas();
} finally {
  // Always clean up, even if an exception is thrown.
  cleanLlamaStalls();
}
```

该 finally 子句运行在任何匹配 catch 子句之后：

```dart
try {
  breedMoreLlamas();
} catch (e) {
  print('Error: $e'); // Handle the exception first.
} finally {
  cleanLlamaStalls(); // Then clean up.
}
```

要了解更多信息，请查看 核心库例外文档。

#### 断言 Assert

在开发过程中，使用断言 语句— assert(, ); —至 如果布尔条件为 false，则中断正常执行。

```dart
// Make sure the variable has a non-null value.
assert(text != null);

// Make sure the value is less than 100.
assert(number < 100);

// Make sure this is an https URL.
assert(urlString.startsWith('https'));
```

要将消息附加到断言， 添加一个字符串作为第二个参数 assert （可选使用 尾部逗号）：

```dart
assert(urlString.startsWith('https'),
    'URL ($urlString) should start with "https".');
```

第一个 assert 参数可以是任何表达式 解析为布尔值。如果表达式的值 为真，则断言成功并执行 继续。如果为 false，则断言失败并出现异常 （ AssertionError） 被抛出。

断言究竟何时起作用？ 这取决于您使用的工具和框架：

* Flutter 在调试模式下启用断言。
* 仅限开发的工具，例如 webdev serve 通常默认启用断言。
* 一些工具，例如 dart run 和 dart compile js 通过命令行标志支持断言： --enable-asserts.
  在生产代码中，断言将被忽略，并且 不计算要计算的 assert 参数。

### 类 & 对象

### 类

Dart 是一种面向对象的语言，它支持类和基于混入（mixin）的继承。在 Dart 中，每个对象都是某个类的实例，除了 Null 以外的所有类都继承自 Object。

基于混入的继承意味着虽然每个类（除了顶级类 Object?）都只有一个直接的父类，但是一个类的主体可以在多个类层次结构中重复使用。这种特性允许开发者以灵活的方式组合和重用代码，从而创建出复杂但易于维护的类结构。

扩展方法（extension methods）是 Dart 中一种为现有类添加功能的方式，而无需修改该类的源代码或创建子类。通过扩展方法，你可以在不改变原始类的情况下，向它添加新的方法或属性。

#### 使用类成员 Using class members

对象具有由函数和数据（分别为方法和实例变量）组成的成员。调用方法时，可以在对象上调用它：该方法可以访问该对象的函数和数据。

使用点 （.） 来引用实例变量或方法：

```dart
var p = Point(2, 2);

// Get the value of y.
assert(p.y == 2);

// Invoke distanceTo() on p.
double distance = p.distanceTo(Point(4, 4));
```

在 Dart 语言中，?. 运算符被称为安全导航运算符（safe navigation operator）。它的作用是在尝试访问一个可能为 null 的对象的属性或方法时，如果对象本身是 null，则不会抛出异常，而是直接返回 null。

```dart
// If p is non-null, set a variable equal to its y value.
var a = p?.y;
```

##### 使用构造函数 Using constructors

您可以使用构造函数创建对象。构造函数名称可以是 或 ClassName ClassName.identifier。例如，以下代码使用 Point() and Point.fromJson() 构造函数创建Point对象：

```dart
var p1 = Point(2, 2);
var p2 = Point.fromJson({'x': 1, 'y': 2});
```

下面的代码具有相同的效果，但在构造函数名称之前使用 optional new 关键字：

```dart
var p1 = new Point(2, 2);
var p2 = new Point.fromJson({'x': 1, 'y': 2});
```

某些类提供 常量构造函数。若要使用常量构造函数创建编译时常量，请将关键字放在 const 构造函数名称之前：

```dart
var p = const ImmutablePoint(2, 2);
```

构造两个相同的编译时常量会生成一个规范实例：

```dart
var a = const ImmutablePoint(1, 1);
var b = const ImmutablePoint(1, 1);

assert(identical(a, b)); // They are the same instance!
```

在 常量上下文中，可以省略 const 构造函数或文本之前的 。例如，请看以下代码，它创建了一个 const map：

```dart
// Lots of const keywords here.
const pointAndLine = const {
  'point': const [const ImmutablePoint(0, 0)],
  'line': const [const ImmutablePoint(1, 10), const ImmutablePoint(-2, 11)],
};
```

除了关键字的第一次使用 const 外，您可以省略所有内容：

```dart
// Only one const, which establishes the constant context.
const pointAndLine = {
  'point': [ImmutablePoint(0, 0)],
  'line': [ImmutablePoint(1, 10), ImmutablePoint(-2, 11)],
};
```

如果常量构造函数位于常量上下文之外，并且在没有 const的情况下调用，则会创建一个 非常量对象：

```dart
var a = const ImmutablePoint(1, 1); // Creates a constant
var b = ImmutablePoint(1, 1); // Does NOT create a constant

assert(!identical(a, b)); // NOT the same instance!
```

#### 获取对象的类型 Getting an object’s type

若要在运行时获取对象的类型，可以使用 Object 属性 ，该属性 runtimeType返回一个 Type 对象。

```dart
print('The type of a is ${a.runtimeType}');
```

> 使用 类型测试运算符 ，而不是 runtimeType 测试对象的类型。在生产环境中，测试 object is Type 比测试 object.runtimeType == Type更稳定。

到这里为止，您已经了解了 如何使用 类。本节的其余部分演示如何 实现 类。

#### 实例变量 Instance variables

声明实例变量的方法如下：

```dart
class Point {
  double? x; // Declare instance variable x, initially null.
  double? y; // Declare y, initially null.
  double z = 0; // Declare z, initially 0.
}
```

一个声明为可为空类型的未初始化实例变量的值为null。非空实例变量必须在声明时进行初始化。

所有实例变量都会生成一个隐式的getter方法。没有初始化器的非final实例变量和late final实例变量也会生成一个隐式的setter方法。详细信息请查阅Getters和setters。

```dart
class Point {
  double? x; // Declare instance variable x, initially null.
  double? y; // Declare y, initially null.
}

void main() {
  var point = Point();
  point.x = 4; // Use the setter method for x.
  assert(point.x == 4); // Use the getter method for x.
  assert(point.y == null); // Values default to null.
}
```

初始化声明该变量的非实例late变量将在创建实例时，在构造函数及其初始值设定项列表执行之前设置该值。因此，非late实例变量的初始化表达式（在 =之后）无法访问 this。

```dart
double initialX = 1.5;

class Point {
  // OK, can access declarations that do not depend on `this`:
  double? x = initialX;

  // ERROR, can't access `this` in non-`late` initializer:
  double? y = this.x;

  // OK, can access `this` in `late` initializer:
  late double? z = this.x;

  // OK, `this.fieldName` is a parameter declaration, not an expression:
  Point(this.x, this.y);
}
```

实例变量可以是 final，在这种情况下，它们必须只设置一次。在声明时，使用构造函数参数或使用构造函数的初始值设定项列表初始化final非late实例变量：

```dart
class ProfileMark {
  final String name;
  final DateTime start = DateTime.now();

  ProfileMark(this.name);
  ProfileMark.unnamed() : name = '';
}
```

如果需要在构造函数正文启动后分配实例变量的 final 值，可以使用下列方法之一：

#### 使用工厂构造函数。

使用 late final，但 要小心： 没有初始值设定项的 a late final 会向 API 添加一个 setter。

##### 隐式接口 Implicit interfaces

每个类都隐式定义一个接口，其中包含该类的所有实例成员及其实现的任何接口。如果要创建支持 B 类 API 的 A 类而不继承 B 类的实现，则 A 类应实现 B 接口。

类通过在子句中 implements 声明一个或多个接口，然后提供接口所需的 API 来实现这些接口。例如：

```dart
// A person. The implicit interface contains greet().
class Person {
  // In the interface, but visible only in this library.
  final String _name;

  // Not in the interface, since this is a constructor.
  Person(this._name);

  // In the interface.
  String greet(String who) => 'Hello, $who. I am $_name.';
}

// An implementation of the Person interface.
class Impostor implements Person {
  String get _name => '';

  String greet(String who) => 'Hi $who. Do you know who I am?';
}

String greetBob(Person person) => person.greet('Bob');

void main() {
  print(greetBob(Person('Kathy')));
  print(greetBob(Impostor()));
}

```

下面是指定一个类实现多个接口的示例：

```dart
class Point implements Comparable, Location {...}
```

#### 类变量和方法 Class variables and methods

static使用关键字实现全类变量和方法。

##### 静态变量 Static variables

静态变量（类变量）对于类范围的状态和常量很有用：

```dart
class Queue {
  static const initialCapacity = 16;
  // ···
}

void main() {
  assert(Queue.initialCapacity == 16);
}
```

静态变量在使用之前不会初始化。

> 本页遵循 样式指南建议 ， lowerCamelCase 首选常用名称。

#### 静态方法 Static methods

静态方法（类方法）不在实例上运行，因此无权访问 this.但是，它们确实可以访问静态变量。如以下示例所示，直接在类上调用静态方法：

```dart
import 'dart:math';

class Point {
  double x, y;
  Point(this.x, this.y);

  static double distanceBetween(Point a, Point b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return sqrt(dx * dx + dy * dy);
  }
}

void main() {
  var a = Point(2, 2);
  var b = Point(4, 4);
  var distance = Point.distanceBetween(a, b);
  assert(2.8 < distance && distance < 2.9);
  print(distance);
}
```

> 请考虑使用顶级函数（而不是静态方法）来处理常见或广泛使用的实用程序和功能。

可以使用静态方法作为编译时常量。例如，可以将静态方法作为参数传递给常量构造函数。

#### 构造方法

通过创建与其同名的函数来声明构造函数 类（以及（可选）附加标识符，如 命名构造函数）。

使用最常见的构造函数（生成式构造函数）创建一个新的 类的实例，并 初始化形式参数 如有必要，实例化任何实例变量：

```dart
class Point {
  double x = 0;
  double y = 0;

  // Generative constructor with initializing formal parameters:
  Point(this.x, this.y);
}
```

this关键字是指当前实例。

仅当存在名称冲突时才使用 this 。 否则，Dart 样式将 this省略 .

#### 初始化形式参数 Initializing formal parameters

Dart 具有 初始化形式参数 以简化 将构造函数参数分配给实例变量。 直接在构造函数声明中使用 this.propertyName ， 并省略正文。

初始化参数还允许您初始化 不可为空的变量或 final 实例变量， 两者都必须初始化或提供默认值：

```dart
class Point {
  final double x;
  final double y;

  // Sets the x and y instance variables
  // before the constructor body runs.
  Point(this.x, this.y);
}
```

初始化形式引入的变量 是隐含的最终结果，并且仅在 初始值设定项列表。

如果需要执行一些无法在初始值设定项列表中表达的逻辑， 创建 工厂构造函数 （或 静态方法）与该逻辑 然后将计算值传递给普通构造函数。

#### 默认构造函数 Default constructors

如果你没有声明构造函数，那么会为你提供一个默认构造函数。默认构造函数没有参数，并且会调用父类中的无参数构造函数。

#### 构造函数不被继承 Constructors aren’t inherited

子类不会从其父类继承构造函数。如果一个子类没有声明任何构造函数，那么它只有默认的（无参数、无名称）构造函数。

#### 命名构造函数 Named constructors

使用命名构造函数实现类的多个构造函数 或提供额外的清晰度：

```dart
const double xOrigin = 0;
const double yOrigin = 0;

class Point {
  final double x;
  final double y;

  // Sets the x and y instance variables
  // before the constructor body runs.
  Point(this.x, this.y);

  // Named constructor
  Point.origin()
      : x = xOrigin,
        y = yOrigin;
}

```

请记住，构造函数不是继承的，这意味着 超类的命名构造函数不由子类继承。如果你 想要创建一个子类，其中包含 superclass，则必须在子类中实现该构造函数。

#### 调用非默认的父类构造函数 Invoking a non-default superclass constructor

默认情况下，子类中的构造函数会调用父类的无名无参数构造函数。父类的构造函数在构造函数体的开始处被调用。如果还使用了初始化列表，那么它会在父类被调用之前执行。总结来说，执行顺序如下：

* 初始化列表
* 父类的无参构造函数
* 主类的无参构造函数
  如果父类没有无名无参数构造函数，那么你必须手动调用父类中的某个构造函数。在构造函数体（如果有的话）之前，使用冒号（:）来指定父类构造函数。

在下面的例子中，Employee 类的构造函数调用了其父类 Person 的命名构造函数。点击“运行”来执行代码。

```dart
class Person {
  String? firstName;

  Person.fromJson(Map data) {
    print('in Person');
  }
}

class Employee extends Person {
  // Person does not have a default constructor;
  // you must call super.fromJson().
  Employee.fromJson(super.data) : super.fromJson() {
    print('in Employee');
  }
}

void main() {
  var employee = Employee.fromJson({});
  print(employee);
  // Prints:
  // in Person
  // in Employee
  // Instance of 'Employee'
}

```

由于超类构造函数的参数在调用构造函数之前会进行计算，因此参数可以是表达式，例如函数调用：

```dart
class Employee extends Person {
  Employee() : super.fromJson(fetchDefaultData());
  // ···
}
```

超类构造函数的参数无权访问 this。例如，参数可以调用静态方法，但不能调用实例方法。

#### 父类参数 Super parameters

若要避免手动将每个参数传递到构造函数的超级调用中，可以使用超级初始值设定项参数将参数转发到指定或默认的超类构造函数。此功能不能与重定向构造函数一起使用。超级初始值设定项参数具有与 初始化形式参数类似的语法和语义：

```dart
class Vector2d {
  final double x;
  final double y;

  Vector2d(this.x, this.y);
}

class Vector3d extends Vector2d {
  final double z;

  // Forward the x and y parameters to the default super constructor like:
  // Vector3d(final double x, final double y, this.z) : super(x, y);
  Vector3d(super.x, super.y, this.z);
}
```

如果超级构造函数调用已经具有位置参数，则超级初始值设定项参数不能是位置参数，但它们始终可以命名：

```dart
class Vector2d {
  // ...

  Vector2d.named({required this.x, required this.y});
}

class Vector3d extends Vector2d {
  // ...

  // Forward the y parameter to the named super constructor like:
  // Vector3d.yzPlane({required double y, required this.z})
  //       : super.named(x: 0, y: y);
  Vector3d.yzPlane({required super.y, required this.z}) : super.named(x: 0);
}
```

使用超级初始值设定项参数需要至少 2.17 的语言版本 。如果您使用的是早期语言版本，则必须手动传入所有超级构造函数参数。

#### 初始化列表 Initializer list

除了调用超类构造函数之外，还可以在构造函数主体运行之前初始化实例变量。用逗号分隔初始值设定项。

```dart
// Initializer list sets instance variables before
// the constructor body runs.
Point.fromJson(Map<String, double> json)
    : x = json['x']!,
      y = json['y']! {
  print('In Point.fromJson(): ($x, $y)');
}
```

初始值设定项的右侧无权访问 this.

在开发过程中，可以使用初始值设定项列表中的 assert 输入来验证输入。

```dart
Point.withAssert(this.x, this.y) : assert(x >= 0) {
  print('In Point.withAssert(): ($x, $y)');
}
```

初始值设定项列表在设置最终字段时非常方便。下面的示例初始化初始值设定项列表中的三个最终字段。单击 “运行”以执行代码。

```dart
import 'dart:math';

class Point {
  final double x;
  final double y;
  final double distanceFromOrigin;

  Point(double x, double y)
      : x = x,
        y = y,
        distanceFromOrigin = sqrt(x * x + y * y);
}

void main() {
  var p = Point(2, 3);
  print(p.distanceFromOrigin);
}

```

#### 重定向构造函数 Redirecting constructors

有时，构造函数的唯一目的是重定向到同一类中的另一个构造函数。重定向构造函数的主体为空，构造函数调用（使用 this 而不是类名）出现在冒号（:）之后。

```dart
class Point {
  double x, y;

  // The main constructor for this class.
  Point(this.x, this.y);

  // Delegates to the main constructor.
  Point.alongXAxis(double x) : this(x, 0);
}
```

#### 常量构造函数 Constant constructors

如果您的类生成的对象永不更改，则可以创建这些对象 对象编译时常量。为此，请定义一个 const 构造函数 并确保所有实例变量都是 final。

```dart
class ImmutablePoint {
  static const ImmutablePoint origin = ImmutablePoint(0, 0);

  final double x, y;

  const ImmutablePoint(this.x, this.y);
}
```

常量构造函数并不总是创建常量。 有关详细信息，请参阅以下部分 使用构造函数。

#### 工厂构造函数 Factory constructors

在实现不这样做的构造函数时使用关键 factory 字 始终创建其类的新实例。例如，工厂 构造函数可能会从缓存中返回实例，也可能 返回子类型的实例。 工厂构造函数的另一个用例是 初始化最终变量 无法在初始值设定项列表中处理的逻辑。

> 处理最终变量延迟初始化的另一种方法 是要使用late final（小心！

在以下示例中， Logger 工厂构造函数从缓存中返回对象， Logger.fromJson 和工厂构造函数 初始化 JSON 对象的最后一个变量。

```dart
class Logger {
  final String name;
  bool mute = false;

  // _cache is library-private, thanks to
  // the _ in front of its name.
  static final Map<String, Logger> _cache = <String, Logger>{};

  factory Logger(String name) {
    return _cache.putIfAbsent(name, () => Logger._internal(name));
  }

  factory Logger.fromJson(Map<String, Object> json) {
    return Logger(json['name'].toString());
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) print(msg);
  }
}
```

调用工厂构造函数，就像调用任何其他构造函数一样：

```dart
var logger = Logger('UI');
logger.log('Button clicked');

var logMap = {'name': 'UI'};
var loggerJson = Logger.fromJson(logMap);
```

#### 成员方法

方法是为对象提供行为的函数。

#### 实例方法

对象上的实例方法可以访问实例变量和 this. distanceTo() 以下示例中的方法是 实例方法：

```dart
import 'dart:math';

class Point {
  final double x;
  final double y;

  // Sets the x and y instance variables
  // before the constructor body runs.
  Point(this.x, this.y);

  double distanceTo(Point other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return sqrt(dx * dx + dy * dy);
  }
}
```

#### 运算符

运算符是具有特殊名称的实例方法。 Dart 允许您定义具有以下名称的运算符：

| <  | +  | |  | >>>/ | ^ | [] |
| -- | -- | -- | ---- | - | -- |
| <= | ~/ | &  | []=  |
| =  | *  | << | ~%   | >> | == |

> 您可能已经注意到，某些 运算符（如 !=）不在 名称列表。那是因为它们只是句法糖。例如 该表达 e1 != e2 式是 !(e1 == e2)的句法糖。

运算符声明是使用内置标识符 operator标识的。 下面的示例定义 vector 加法 （+）、减法 （-） 和相等式 （==）：

```dart
class Vector {
  final int x, y;

  Vector(this.x, this.y);

  Vector operator +(Vector v) => Vector(x + v.x, y + v.y);
  Vector operator -(Vector v) => Vector(x - v.x, y - v.y);

  @override
  bool operator ==(Object other) =>
      other is Vector && x == other.x && y == other.y;

  @override
  int get hashCode => Object.hash(x, y);
}

void main() {
  final v = Vector(2, 3);
  final w = Vector(2, 2);

  assert(v + w == Vector(4, 5));
  assert(v - w == Vector(0, 1));
}

```

#### 获取器和设定器

getter 和 setter 是提供读取和写入的特殊方法 访问对象的属性。回想一下，每个实例变量都有 一个隐式 getter，如果合适，还可以加上一个 setter。您可以创建 通过实现 getter 和 setter 来附加属性，使用 get 和 set 关键词：

```dart
class Rectangle {
  double left, top, width, height;

  Rectangle(this.left, this.top, this.width, this.height);

  // Define two calculated properties: right and bottom.
  double get right => left + width;
  set right(double value) => left = value - width;
  double get bottom => top + height;
  set bottom(double value) => top = value - height;
}

void main() {
  var rect = Rectangle(3, 4, 20, 15);
  assert(rect.left == 3);
  rect.right = 12;
  assert(rect.left == -8);
}

```

使用 getter 和 setter，您可以稍后再从实例变量开始 用方法包装它们，所有这些都无需更改客户端代码。

> increment （++） 等运算符以预期的方式工作，无论 没有明确定义 Getter。避免任何意想不到的一面 effects，运算符正好调用一次 getter，保存其值 在临时变量中。

#### 抽象方法

实例、getter 和 setter 方法可以是抽象的，定义一个 接口，但将其实现留给其他类。 抽象方法只能存在于 抽象类 或 混合类中。

要使方法抽象化，请使用分号 （;） 而不是方法正文：

```dart
abstract class Doer {
  // Define instance variables and methods...

  void doSomething(); // Define an abstract method.
}

class EffectiveDoer extends Doer {
  void doSomething() {
    // Provide an implementation, so the method is not abstract here...
  }
}
```

#### 继承

用于 extends 创建子类，并 super 引用 超类：

```dart
class Television {
  void turnOn() {
    _illuminateDisplay();
    _activateIrSensor();
  }
  // ···
}

class SmartTelevision extends Television {
  void turnOn() {
    super.turnOn();
    _bootNetworkInterface();
    _initializeMemory();
    _upgradeApps();
  }
  // ···
}
```

关于 extends 的另一种用法，请参阅 Generics 页面上关于参数化类型的讨论。

#### 重写成员

子类可以重写实例方法（包括运算符）、获取器和设定器。你可以使用 @override 注解来指示你故意要重写某个成员：

```dart
class Television {
  // ···
  set contrast(int value) {...}
}

class SmartTelevision extends Television {
  @override
  set contrast(num value) {...}
  // ···
}
```

一个重写的方法声明必须在以下几个方面与它所重写的方法（或多个方法）相匹配：

* 返回类型必须与重写方法的返回类型相同（或其子类型）。
* 参数类型必须与重写方法的参数类型相同（或其超类型）。在前面的例子中，SmartTelevision 的 contrast 设定器将参数类型从 int 更* 改为超类型 num。
* 如果重写的方法接受 n 个位置参数，那么重写的方法也必须接受 n 个位置参数。
* 泛型方法不能重写非泛型方法，非泛型方法也不能重写泛型方法。
  有时，您可能希望缩小方法参数或实例变量的类型。这违反了正常规则，类似于向下转型，可能会在运行时导致类型错误。然而，如果代码可以保证不会发生类型错误，那么缩小类型是可能的。在这种情况下，您可以在参数声明中使用协变（covariant）关键字。详细信息请参阅 Dart 语言规范。

> 如果你重写了 == 运算符，你也应该重写 Object 的 hashCode 获取器。关于如何重写 == 和 hashCode 的示例，请查看“实现映射键”部分。

#### noSuchMethod()

为了检测或响应代码尝试使用不存在的方法或实例变量的情况，你可以重写 noSuchMethod() 方法：

```dart
class A {
  // Unless you override noSuchMethod, using a
  // non-existent member results in a NoSuchMethodError.
  @override
  void noSuchMethod(Invocation invocation) {
    print('You tried to use a non-existent member: '
        '${invocation.memberName}');
  }
}
```

你不能调用一个未实现的方法，除非满足以下任一条件：

* 接收者的静态类型是 dynamic。
* 接收者的静态类型定义了未实现的方法（抽象方法是可以的），并且接收者的动态类型有一个与 Object 类中的 noSuchMethod() 方法不同的实现。
  更多信息，请参阅非正式的 noSuchMethod 转发规范。

#### 混入(Mixin)

Mixins 是一种定义代码的方法，可以在多个类层次结构中重用。 它们旨在为成员提供集体实现。

要使用 mixin，请使用 with 关键字后跟一个或多个 mixin 名字。下面的示例显示了两个使用 mixin 的类：

```dart
class Musician extends Performer with Musical {
  // ···
}

class Maestro extends Person with Musical, Aggressive, Demented {
  Maestro(String maestroName) {
    name = maestroName;
    canConduct = true;
  }
}
```

要使用 mixin 声明来定义一个 mixin。在少数需要同时定义 mixin 和类的情况下，你可以使用 mixin 类声明。

Mixin 和 mixin 类不能有 extends 子句，并且不得声明任何生成式构造函数。

例如：

```dart
mixin Musical {
  bool canPlayPiano = false;
  bool canCompose = false;
  bool canConduct = false;

  void entertainMe() {
    if (canPlayPiano) {
      print('Playing piano');
    } else if (canConduct) {
      print('Waving hands');
    } else {
      print('Humming to self');
    }
  }
}
```

有时，您可能希望限制可以使用 mixin 的类型。 例如，mixin 可能取决于是否能够调用方法 mixin 没有定义。 如以下示例所示，您可以限制 mixin 的使用 通过使用 on 关键字指定所需的超类：

```dart
class Musician {
  // ...
}
mixin MusicalPerformer on Musician {
  // ...
}
class SingerDancer extends Musician with MusicalPerformer {
  // ...
}
```

在前面的代码中， 仅扩展或实现类的 Musician 类 可以使用 mixin MusicalPerformer. 因为 SingerDancer 扩展 Musician， SingerDancer 可以混入 MusicalPerformer.

##### class, mixin, or mixin class?

mixin 声明用于定义一个 mixin，类声明用于定义一个类，而 mixin 类声明则用于定义一个既可以作为常规类使用，也可以作为 mixin 使用的类，具有相同的名称和类型。

任何适用于类或 mixin 的限制也同样适用于 mixin 类：

* mixin 不能有 extends 或 with 子句，因此 mixin 类也不能有。
* 类不能有 on 子句，因此 mixin 类也不能有。

##### abstract mixin class

对于 mixin 类，你可以实现与 on 指令相似的行为。将 mixin 类声明为抽象类，并定义其行为所依赖的抽象方法：

```dart
abstract mixin class Musician {
  // No 'on' clause, but an abstract method that other types must define if
  // they want to use (mix in or extend) Musician:
  void playInstrument(String instrumentName);

  void playPiano() {
    playInstrument('Piano');
  }
  void playFlute() {
    playInstrument('Flute');
  }
}

class Virtuoso with Musician { // Use Musician as a mixin
  void playInstrument(String instrumentName) {
    print('Plays the $instrumentName beautifully');
  }
}

class Novice extends Musician { // Use Musician as a class
  void playInstrument(String instrumentName) {
    print('Plays the $instrumentName poorly');
  }
}
```

通过将 Musician mixin 声明为抽象类，你强制任何使用它的类型定义其行为所依赖的抽象方法。

这与 on 指令确保 mixin 通过指定接口的超类来访问其依赖的任何接口的方式类似。

#### 枚举

枚举类型，通常被称为enumerations or enums，是一种特殊的类，用于表示固定数量的常量值。

> 所有枚举都会自动扩展 Enum 类。 它们也被密封， 这意味着它们不能被子类化、实现、混合， 或以其他方式显式实例化。

> 抽象类和 mixin 可以显式实现或扩展 Enum， 但除非它们随后由枚举声明实现或混合到枚举声明中， 任何对象都无法实际实现该类或 mixin 的类型。

#### 声明简单枚举

若要声明一个简单的枚举类型，使用 enum 关键字并列出要枚举的值：

```dart
enum Color { red, green, blue }
```

> 声明枚举类型时，还可以使用 尾随逗号 以帮助防止复制粘贴错误。

#### 声明增强枚举

Dart 还允许枚举声明声明具有字段、方法和常量构造函数的类，这些类仅限于已知固定数量的常量实例。

要声明一个增强的枚举，请遵循与常规类类似的语法，但有一些额外的要求：

* 实例变量必须是最终的，包括由 mixin 添加的那些。
* 所有生成式构造函数都必须是常量。
* 工厂构造函数只能返回其中一个固定、已知的枚举实例。
* 没有其他类可以扩展为 Enum，因为它会自动扩展。
* 不能覆盖 index、hashCode、相等运算符 ==。
* 在枚举中不能声明名为 values 的成员，因为这会与自动生成的静态 values getter 冲突。
* 枚举的所有实例必须在声明的开头声明，并且必须至少声明一个实例。
* 在增强的枚举中的实例方法可以使用 this 来引用当前的枚举值。

以下是一个示例，它声明了一个具有多个实例、实例变量、getter 和实现接口的增强枚举：

```dart
enum Vehicle implements Comparable `<Vehicle>` {
  car(tires: 4, passengers: 5, carbonPerKilometer: 400),
  bus(tires: 6, passengers: 50, carbonPerKilometer: 800),
  bicycle(tires: 2, passengers: 1, carbonPerKilometer: 0);

  const Vehicle({
    required this.tires,
    required this.passengers,
    required this.carbonPerKilometer,
  });

  final int tires;
  final int passengers;
  final int carbonPerKilometer;

  int get carbonFootprint => (carbonPerKilometer / passengers).round();

  bool get isTwoWheeled => this == Vehicle.bicycle;

  @override
  int compareTo(Vehicle other) => carbonFootprint - other.carbonFootprint;
}
```

> 增强型枚举需要至少 2.17 的语言版本 。

#### 使用枚举

访问枚举值，例如 任何其他 静态变量：

```dart
final favoriteColor = Color.blue;
if (favoriteColor == Color.blue) {
  print('Your favorite color is blue!');
}
```

枚举中的每个值都有一个 index getter， 它返回枚举声明中值的从零开始的位置。 例如，第一个值的索引为 0， 第二个值的索引为 1。

```dart
assert(Color.red.index == 0);
assert(Color.green.index == 1);
assert(Color.blue.index == 2);
```

若要获取所有枚举值的列表， 使用枚举的 values 常量。

```dart
List `<Color>` colors = Color.values;
assert(colors[2] == Color.blue);
```

您可以在 switch 语句中使用枚举，并且 如果您不处理枚举的所有值，则会收到警告：

```dart
var aColor = Color.blue;

switch (aColor) {
  case Color.red:
    print('Red as roses!');
  case Color.green:
    print('Green as grass!');
  default: // Without this, you see a WARNING.
    print(aColor); // 'Color.blue'
}
```

如果需要访问枚举值的名称， ‘blue’ 如 from Color.blue， .name 使用属性：

```dart
print(Color.blue.name); // 'blue'
```

你可以像访问普通对象一样访问枚举值的成员：

```dart
print(Vehicle.car.carbonFootprint);
```

### 扩展方法

扩展方法向现有库添加功能。 您可能会在不知不觉中使用扩展方法。 例如，在 IDE 中使用代码补全时， 它建议将扩展方法与常规方法并存。

如果观看视频有助于你学习， 查看扩展方法概述。

#### 概述 Overview

当您使用他人的 API 或 当你实现一个被广泛使用的库时， 更改 API 通常是不切实际或不可能的。 但您可能仍希望添加一些功能。

例如，请考虑以下将字符串分析为整数的代码：

```dart
int.parse('42')
```

它可能很好 - 更短，更容易使用工具 - 改为打开 String 该功能：

```dart
'42'.parseInt()
```

要启用该代码， 您可以导入包含类扩展的 String 库：

```dart
import 'string_apis.dart';
// ···
print('42'.parseInt()); // Use an extension method.
```

扩展不仅可以定义方法，还可以定义其他成员，如 getter、setter 和操作符。此外，扩展可以有名称，这在 API 发生冲突时会有所帮助。下面是如何使用扩展（名为 NumberParsing）在字符串上实现扩展方法 parseInt() 的示例：

```dart
lib/string_apis.dart

extension NumberParsing on String {
  int parseInt() {
    return int.parse(this);
  }
  // ···
}
```

下一节介绍 如何使用扩展方法 。 之后是关于 实现 扩展方法的部分。

#### 使用扩展方法 Using extension methods

与所有 Dart 代码一样，扩展方法位于库中。 您已经了解了如何使用扩展方法 - 只是 导入它所在的库，并像普通方法一样使用它：

```dart
// Import a library that contains an extension on String.
import 'string_apis.dart';
// ···
print('42'.padLeft(5)); // Use a String method.
print('42'.parseInt()); // Use an extension method.
```

这就是使用扩展方法通常需要了解的全部内容。 在编写代码时，您可能还需要知道 扩展方法如何依赖于静态类型（而不是 dynamic）和 如何解决 API 冲突。

#### 静态类型和动态类型 Static types and dynamic

不能对 dynamic 类型的变量调用扩展方法。 例如，以下代码会导致运行时异常：

```dart
dynamic d = '2';
print(d.parseInt()); // Runtime exception: NoSuchMethodError
```

扩展方法 确实 适用于 Dart 的类型推断。 下面的代码很好，因为 该变量 v 被推断为具有类型 String：

```dart
var v = '2';
print(v.parseInt()); // Output: 2
```

不起作用的原因是 dynamic 扩展方法针对接收方的静态类型进行解析。 因为扩展方法是静态解析的， 它们与调用静态函数一样快。

有关静态类型和 dynamic的更多信息，请参阅 飞镖类型系统。

#### API 冲突 API conflicts

如果扩展成员与 接口或与其他扩展成员， 那么你有几个选择。

一种选择是更改导入冲突扩展的方式， 使用 show OR hide 限制公开的 API：

```dart
// Defines the String extension method parseInt().
import 'string_apis.dart';

// Also defines parseInt(), but hiding NumberParsing2
// hides that extension method.
import 'string_apis_2.dart' hide NumberParsing2;

// ···
// Uses the parseInt() defined in 'string_apis.dart'.
print('42'.parseInt());
```

另一种选择是显式应用扩展， 这会导致代码看起来好像扩展是一个包装类：

```dart
// Both libraries define extensions on String that contain parseInt(),
// and the extensions have different names.
import 'string_apis.dart'; // Contains NumberParsing extension.
import 'string_apis_2.dart'; // Contains NumberParsing2 extension.

// ···
// print('42'.parseInt()); // Doesn't work.
print(NumberParsing('42').parseInt());
print(NumberParsing2('42').parseInt());
```

如果两个扩展名同名， 然后，您可能需要使用前缀导入：

```dart
// Both libraries define extensions named NumberParsing
// that contain the extension method parseInt(). One NumberParsing
// extension (in 'string_apis_3.dart') also defines parseNum().
import 'string_apis.dart';
import 'string_apis_3.dart' as rad;

// ···
// print('42'.parseInt()); // Doesn't work.

// Use the ParseNumbers extension from string_apis.dart.
print(NumberParsing('42').parseInt());

// Use the ParseNumbers extension from string_apis_3.dart.
print(rad.NumberParsing('42').parseInt());

// Only string_apis_3.dart has parseNum().
print('42'.parseNum());

```

如示例所示， 即使使用前缀导入，也可以隐式调用扩展方法。 唯一需要使用前缀的时间是 以避免在显式调用扩展时发生名称冲突。

实现扩展方法 Implementing extension methods
使用以下语法创建扩展：

```dart
extension `<extension name>`? on `<type>` {
  (`<member definition>`)*
}
```

例如，下面介绍了如何在类上 String 实现扩展：

```dart
lib/string_apis.dart

extension NumberParsing on String {
  int parseInt() {
    return int.parse(this);
  }

  double parseDouble() {
    return double.parse(this);
  }
}
```

扩展的成员可以是方法、getter、setter 或操作符。扩展还可以有静态字段和静态辅助方法。要在扩展声明之外访问静态成员，可以通过像类变量和方法那样使用声明名称来调用它们。

#### 未命名扩展 Unnamed extensions

声明扩展时，可以省略名称。 未命名的扩展仅可见 在声明它们的库中。 由于他们没有名字， 它们不能显式应用 以解决 API 冲突。

```dart
extension on String {
  bool get isBlank => trim().isEmpty;
}
```

您可以调用未命名扩展的静态成员 仅在扩展声明中。

#### 实现泛型扩展 Implementing generic extensions

扩展可以具有泛型类型参数。 例如，下面是一些扩展内置 List 类型的代码 使用 getter、运算符和方法：

```dart
extension MyFancyList `<T>` on List `<T>` {
  int get doubleLength => length * 2;
  List `<T>` operator -() => reversed.toList();
  List<List `<T>`> split(int at) => [sublist(0, at), sublist(at)];
}
```

该类型 T 基于列表的静态类型进行绑定，该列表 调用方法。

#### 资源 Resources

有关扩展方法的详细信息，请参阅以下内容：

* Article: Dart Extension Methods Fundamentals
* Feature specification
* Extension methods sample

#### 扩展类型

扩展类型是“包装”的编译时抽象 具有不同的纯静态接口的现有类型。 它们是 静态 JS 互操作 的主要组件，因为 他们可以轻松修改现有类型的界面 （对任何类型的互操作都至关重要） 而不会产生实际包装器的成本。

扩展类型对操作集（或接口）强制实施规则 可用于基础类型的对象， 称为 表示类型。 定义扩展类型的接口时， 您可以选择重用表示类型的某些成员， 省略其他功能，替换其他功能，并添加新功能。

下面的示例包装 int 类型以创建扩展类型 仅允许对 ID 号有意义的操作：

```dart
extension type IdNumber(int id) {
  // Wraps the 'int' type's '<' operator:
  operator <(IdNumber other) => id < other.id;
  // Doesn't declare the '+' operator, for example,
  // because addition does not make sense for ID numbers.
}

void main() {
  // Without the discipline of an extension type,
  // 'int' exposes ID numbers to unsafe operations:
  int myUnsafeId = 42424242;
  myUnsafeId = myUnsafeId + 10; // This works, but shouldn't be allowed for IDs.

  var safeId = IdNumber(42424242);
  safeId + 10; // Compile-time error: No '+' operator.
  myUnsafeId = safeId; // Compile-time error: Wrong type.
  myUnsafeId = safeId as int; // OK: Run-time cast to representation type.
  safeId < IdNumber(42424241); // OK: Uses wrapped '<' operator.
}

```

扩展类型与 包装类的用途相同， 但不需要创建额外的运行时对象， 当您需要包装大量对象时，这可能会变得昂贵。 由于扩展类型是静态的，并且在运行时进行了编译， 它们本质上是零成本的。

> 扩展方法 （也称为“扩展”） 是类似于扩展类型的静态抽象。 但是，扩展方法 直接添加功能 到其基础类型的每个实例。 扩展类型不同; 扩展类型的接口 仅 适用于表达式 其静态类型是该扩展类型。 默认情况下，它们不同于其基础类型的接口。

#### 语法 Syntax

#### 声明 Declaration

使用 extension type 声明和名称定义新的扩展类型， 后跟括号中的 表示类型声明 ：

```dart
extension type E(int i) {
  // Define set of operations.
}
```

表示类型声明（int i）指定扩展类型E的基础类型是int，并且表示对象的引用被命名为i。该声明还引入了以下内容：

* 一个具有表示类型作为返回类型的表示对象的隐式getter：int get i。
* 一个隐式构造函数：E(int i) : i = i。
  表示对象允许扩展类型访问基础类型的对象。该对象在扩展类型体内处于作用域中，您可以使用其名称作为getter来访问它：
* 在扩展类型体内使用i（或在构造函数中使用this.i）。
* 在外部使用属性提取e.i（其中e的静态类型为扩展类型）。
  扩展类型声明还可以像类或扩展一样包含类型参数：

```dart
extension type E `<T>`(List `<T>` elements) {
  // ...
}
```

#### 构造函数 Constructors

可以选择在扩展类型的主体中声明 构造函数 。 表示声明本身是一个隐式构造函数， 因此，默认情况下，扩展类型的未命名构造函数将代替。 任何其他非重定向生成式构造函数必须 初始化表示对象的实例变量 在其初始值设定项列表或形式参数中使用 this.i 。

```dart
extension type E(int i) {
  E.n(this.i);
  E.m(int j, String foo) : i = j + foo.length;
}

void main() {
  E(4); // Implicit unnamed constructor.
  E.n(3); // Named constructor.
  E.m(5, "Hello!"); // Named constructor with additional parameters.
}
```

或者，可以将表示声明构造函数命名为 在这种情况下，正文中有一个未命名的构造函数的空间：

```dart
extension type const E._(int it) {
  E(): this._(42);
  E.otherName(this.it);
}

void main2() {
  E();
  const E._(2);
  E.otherName(3);
}
```

您还可以完全隐藏构造函数，而不仅仅是定义一个新构造函数， 对类使用相同的私有构造函数语法。 _例如 如果您只想让客户端 E 使用 String，即使 基础类型为 int：

```dart
extension type E._(int i) {
  E.fromString(String foo) : i = int.parse(foo);
}
```

您还可以声明转发生成构造函数， 或 工厂建设者 （也可以转发到子扩展类型的构造函数）。

#### 成员 Members

在扩展类型的主体中声明成员，以定义其接口，这与为类成员定义接口的方式相同。扩展类型的成员可以是方法、getter、setter 或操作符（不允许使用非外部实例变量和抽象成员）：

```dart
extension type NumberE(int value) {
  // Operator:
  NumberE operator +(NumberE other) =>
      NumberE(value + other.value);
  // Getter:
  NumberE get myNum => this;
  // Method:
  bool isValid() => !value.isNegative;
}
```

表示类型的接口成员默认情况下不是扩展类型的接口成员。要使表示类型的单个成员在扩展类型上可用，您必须在扩展类型定义中为其编写声明，就像NumberE中的操作符+一样。您还可以定义与表示类型无关的新成员，如i getter和isValid方法。

#### 实现 Implements

您可以选择使用implements子句来：

* 在扩展类型上引入子类型关系，AND
* 将表示对象的成员添加到扩展类型接口中。
  implements子句引入了一个适用性关系，类似于扩展方法与其on类型之间的关系。适用于超类型的成员也适用于子类型，除非子类型具有具有相同成员名称的声明。

扩展类型只能实现：

* 其表示类型。这使得表示类型的所有成员都隐式地可用于扩展类型。

```dart
extension type NumberI(int i)
  implements int{
  // 'NumberI' can invoke all members of 'int',
  // plus anything else it declares here.
}
```

*表示类型的超类型。这使得超类型的成员可用，而不一定是表示类型的所有成员。

```dart
extension type Sequence `<T>`(List `<T>` _) implements Iterable `<T>` {
  // Better operations than List.
}

extension type Id(int _id) implements Object {
  // Makes the extension type non-nullable.
  static Id? tryParse(String source) => int.tryParse(source) as Id?;
}
```

* 另一种有效的扩展类型，该类型适用于相同的表示类型。这允许您在多个扩展类型之间重用操作（类似于多重继承）。

```dart
extension type const Opt `<T>`._(({T value})? _) {
  const factory Opt(T value) = Val `<T>`;
  const factory Opt.none() = Non `<T>`;
}
extension type const Val `<T>`._(({T value}) _) implements Opt `<T>` {
  const Val(T value) : this._((value: value));
  T get value => _.value;
}
extension type const Non `<T>`._(Null _) implements Opt `<Never>` {
  const Non() : this._(null);
}
```

阅读 “用法 ”部分，详细了解 implements 在不同的场景中。

@redeclare
声明与超类型成员同名的扩展类型成员并不像在类之间那样是覆盖关系，而是重新声明。扩展类型成员声明将完全替换具有相同名称的任何超类型成员。无法为同一函数提供替代实现。

您可以使用@redeclare注解来告诉编译器您有意选择与超类型成员相同的名称。如果实际上并非如此，例如某个名称拼写错误，则分析器将警告您。

```dart
extension type MyString(String _) implements String {
  // Replaces 'String.operator[]'
  @redeclare
  int operator [](int index) => codeUnitAt(index);
}
```

您还可以启用lint annotate_redeclares，如果在声明扩展类型方法时隐藏了超接口成员且未使用@redeclare注解，则会收到警告。

#### 用法 Usage

要使用扩展类型，请创建一个实例，就像使用类一样： 通过调用构造函数：

```dart
extension type NumberE(int value) {
  NumberE operator +(NumberE other) =>
      NumberE(value + other.value);

  NumberE get next => NumberE(value + 1);
  bool isValid() => !value.isNegative;
}

void testE() {
  var num = NumberE(1);
}
```

然后，你可以像操作类对象一样调用该对象上的成员。

扩展类型有两个同样有效但本质上截然不同的核心用例：

* 为现有类型提供扩展接口。
* 为现有类型提供不同的接口。

> 在任何情况下，扩展类型的表示类型从来都不是它的子类型， 因此，在需要扩展类型的情况下，不能互换使用表示类型。 -->

##### 为现有类型提供一个扩展接口 1. Provide an extended interface to an existing type

当扩展类型实现了其表示类型时，可以将其视为“透明的”，因为它允许扩展类型“看到”底层类型。

一个透明的扩展类型可以调用表示类型的所有成员（那些没有被重新声明的），以及它定义的任何辅助成员。这为现有类型创建了一个全新的、扩展的接口。新的接口可用于其静态类型为扩展类型的表达式。

这意味着，你可以调用表示类型的成员（这与非透明的扩展类型不同），如下所示：

```dart
extension type NumberT(int value)
  implements int {
  // Doesn't explicitly declare any members of 'int'.
  NumberT get i => this;
}

void main () {
  // All OK: Transparency allows invoking `int` members on the extension type:
  var v1 = NumberT(1); // v1 type: NumberT
  int v2 = NumberT(2); // v2 type: int
  var v3 = v1.i - v1;  // v3 type: int
  var v4 = v2 + v1; // v4 type: int
  var v5 = 2 + v1; // v5 type: int
  // Error: Extension type interface is not available to representation type
  v2.i;
}
```

你还可以创建一个“大部分透明的”扩展类型，它通过从超类型重新声明给定的成员名称来添加新成员并调整其他成员。这允许你，例如，在方法的一些参数上使用更严格的类型，或者使用不同的默认值。

另一种大部分透明的扩展类型方法是实现一个表示类型的超类型。例如，如果表示类型是私有的，但其超类型定义了客户端关心的接口部分。

##### 为现有类型提供一个不同的接口 2. Provide a different interface to an existing type

一个不透明的扩展类型（即没有实现其表示类型的扩展类型）在静态上被视为一个完全新的类型，与其表示类型不同。你不能将其赋值给其表示类型，它也不会暴露其表示类型的成员。

例如，我们在“用法”部分声明的 NumberE 扩展类型就是这样：

```dart
void testE() {
  var num1 = NumberE(1);
  int num2 = NumberE(2); // Error: Can't assign 'NumberE' to 'int'.

  num1.isValid(); // OK: Extension member invocation.
  num1.isNegative(); // Error: 'NumberE' does not define 'int' member 'isNegative'.

  var sum1 = num1 + num1; // OK: 'NumberE' defines '+'.
  var diff1 = num1 - num1; // Error: 'NumberE' does not define 'int' member '-'.
  var diff2 = num1.value - 2; // OK: Can access representation object with reference.
  var sum2 = num1 + 2; // Error: Can't assign 'int' to parameter type 'NumberE'.

  List `<NumberE>` numbers = [
    NumberE(1),
    num1.next, // OK: 'next' getter returns type 'NumberE'.
    1, // Error: Can't assign 'int' element to list type 'NumberE'.
  ];
}
```

你可以通过这种方式使用扩展类型来替换现有类型的接口。这允许你根据新类型的约束条件来建模一个有意义的接口（如引言中的 IdNumber 示例），同时还受益于像 int 这样的简单预定义类型的性能和便利性。

这种用例几乎可以实现对包装类的完全封装（但实际上只是一种受保护的抽象）。

#### 类型考虑 Type considerations

扩展类型是一个编译时包装构造。在运行时，完全没有扩展类型的痕迹。任何类型查询或类似的运行时操作都作用于表示类型。

这使得扩展类型成为一种不安全的抽象，因为你可以在运行时始终找出表示类型并访问底层对象。

动态类型测试（e is T）、类型转换（e as T）以及其他运行时类型查询（如 switch (e) … 或 if (e case …)）都会评估为底层表示对象，并针对该对象的运行时类型进行类型检查。当 e 的静态类型是扩展类型时，以及测试扩展类型时（如 case MyExtensionType(): …），这一点都是成立的。

```dart
void main() {
  var n = NumberE(1);

  // Run-time type of 'n' is representation type 'int'.
  if (n is int) print(n.value); // Prints 1.

  // Can use 'int' methods on 'n' at run time.
  if (n case int x) print(x.toRadixString(10)); // Prints 1.
  switch (n) {
    case int(:var isEven): print("$n (${isEven ? "even" : "odd"})"); // Prints 1 (odd).
  }
}
```

同样地，在这个例子中，匹配值的静态类型是扩展类型的静态类型：

```dart
void main() {
  int i = 2;
  if (i is NumberE) print("It is"); // Prints 'It is'.
  if (i case NumberE v) print("value: ${v.value}"); // Prints 'value: 2'.
  switch (i) {
    case NumberE(:var value): print("value: $value"); // Prints 'value: 2'.
  }
}
```

在使用扩展类型时，了解这一特性很重要。要始终记住，扩展类型在编译时存在且很重要，但在编译过程中会被擦除。

例如，考虑一个静态类型为扩展类型 E 的表达式 e，而 E 的表示类型是 R。那么，e 的值的运行时类型是 R 的子类型。甚至类型本身也被擦除了；在运行时，List 和 List 是完全相同的。

换句话说，真正的包装类可以封装被包装的对象，而扩展类型只是对被包装对象的一个编译时视图。虽然真正的包装类更安全，但扩展类型的权衡是它们提供了避免使用包装对象的选项，这在某些情况下可以大大提高性能。

#### 可调用的对象

要在 Dart 类中允许实例像函数一样被调用，你需要实现 call() 方法。

call() 方法允许任何定义了它的类的实例模拟函数。这个方法支持与普通函数相同的功能，比如参数和返回类型。

在以下示例中，WannabeFunction 类定义了一个 call() 函数，它接受三个字符串参数，将它们用空格分隔拼接起来，并在末尾添加一个感叹号。点击运行来执行代码。

```dart
class WannabeFunction {
  String call(String a, String b, String c) => '$a $b $c!';
}

var wf = WannabeFunction();
var out = wf('Hi', 'there,', 'gang');

void main() => print(out);
```

#### 类型修饰符

#### 概览 & 用法

> 类修饰符，除了 abstract，需要 至少 3.0 的语言版本 。

类修饰符控制着类或混入（mixin）在其所在库内部和外部的使用方式。

修饰符关键字位于类或混入声明之前。例如，写作 abstract class 定义了一个抽象类。可以出现在类声明之前的完整修饰符集合包括：

* abstract
* base
* final
* interface
* sealed
* mixin
  只有 base 修饰符可以出现在混入声明之前。这些修饰符不适用于其他声明，如枚举（enum）、类型定义（typedef）、扩展（extension）或扩展类型（extension type）。

在决定是否使用类修饰符时，要考虑类的预期用途，以及类需要依赖哪些行为。

##### 无修饰符 No modifier

为了允许从任何库无限制地构造或创建子类型，可以使用不带修饰符的类或混入声明。默认情况下，您可以：

* 创建类的新实例。
* 扩展一个类以创建新的子类型。
* 实现类或混入的接口。
* 混入混入（mixin）或混入类。

##### 抽象的 abstract

要定义一个不需要完全、具体实现其整个接口的类，请使用 abstract 修饰符。

抽象类不能从任何库（无论是其自己的库还是外部库）进行构造。抽象类通常包含抽象方法。

```dart
a.dart

abstract class Vehicle {
  void moveForward(int meters);
}

b.dart

import 'a.dart';

// Error: Can't be constructed.
Vehicle myVehicle = Vehicle();

// Can be extended.
class Car extends Vehicle {
  int passengers = 4;
  // ···
}

// Can be implemented.
class MockVehicle implements Vehicle {
  @override
  void moveForward(int meters) {
    // ...
  }
}
```

如果您希望您的抽象类看起来是可实例化的，请定义一个工厂构造函数。

#### 基础的 base

要使用类或混入的实现进行强制继承，请使用 base 修饰符。基类禁止在其自身库外部实现。这保证：

* 当创建类的子类型的实例时，会调用基类的构造函数。
* 所有实现的私有成员都存在于子类型中。
* 基类中的新实现成员不会破坏子类型，因为所有子类型都继承新成员。
* 除非子类型已经声明了具有相同名称和不兼容签名的成员，否则上述内容成立。
  您必须将实现或扩展基类的任何类标记为 base、final 或 sealed。这可以防止外部库破坏基类保证。

```dart
a.dart

base class Vehicle {
  void moveForward(int meters) {
    // ...
  }
}

b.dart

import 'a.dart';

// Can be constructed.
Vehicle myVehicle = Vehicle();

// Can be extended.
base class Car extends Vehicle {
  int passengers = 4;
  // ...
}

// ERROR: Can't be implemented.
base class MockVehicle implements Vehicle {
  @override
  void moveForward() {
    // ...
  }
}
```

#### 接口 interface

要定义接口，请使用 interface 修饰符。接口所在定义库之外的库可以实现该接口，但不能扩展它。这保证了：

* 当类的一个实例方法调用此上的另一个实例方法时，它总是会调用来自同一库的已知方法实现。
* 其他库无法以意外的方式覆盖接口类自身方法可能会调用的方法。这减少了脆弱的基类问题。

```dart
a.dart

interface class Vehicle {
  void moveForward(int meters) {
    // ...
  }
}

b.dart

import 'a.dart';

// Can be constructed.
Vehicle myVehicle = Vehicle();

// ERROR: Can't be inherited.
class Car extends Vehicle {
  int passengers = 4;
  // ...
}

// Can be implemented.
class MockVehicle implements Vehicle {
  @override
  void moveForward(int meters) {
    // ...
  }
}

```

#### 抽象接口 abstract interface

interface 修饰符最常见的用途是定义纯接口。将 interface 和 abstract 修饰符组合使用，可以创建抽象接口类。

就像接口类一样，其他库可以实现纯接口，但不能继承它。就像抽象类一样，纯接口可以有抽象成员。

#### 最终的 final

要使用 final 修饰符来关闭类型层次结构。这可以防止从当前库之外的类进行子类型化。禁止继承和实现可以完全防止子类型化。这保证了：

* 您可以安全地向 API 添加渐进式更改。
* 您可以调用实例方法，同时知道它们没有被第三方子类覆盖。
  最终类可以在同一库中进行扩展或实现。final 修饰符涵盖了 base 的效果，因此任何子类也必须标记为 base、final 或 sealed。

```dart
a.dart

final class Vehicle {
  void moveForward(int meters) {
    // ...
  }
}

b.dart

import 'a.dart';

// Can be constructed.
Vehicle myVehicle = Vehicle();

// ERROR: Can't be inherited.
class Car extends Vehicle {
  int passengers = 4;
  // ...
}

class MockVehicle implements Vehicle {
  // ERROR: Can't be implemented.
  @override
  void moveForward(int meters) {
    // ...
  }
}

```

#### 密封的 sealed

要使用 sealed 修饰符创建一个已知、可枚举的子类型集合。这允许您创建对这些子类型的 switch 语句，并确保其静态地包含所有可能的子类型。

sealed 修饰符防止类在其自身库之外被扩展或实现。sealed 类是隐式抽象的。

* 它们自身不能被构造。
* 它们可以有工厂构造函数。
* 它们可以为子类定义构造函数以供使用。
  但是，sealed 类的子类并不是隐式抽象的。

编译器了解任何可能的直接子类型，因为它们只能存在于同一个库中。这允许编译器在 switch 语句的 case 中未穷尽处理所有可能的子类型时发出警告：

```dart
sealed class Vehicle {}

class Car extends Vehicle {}

class Truck implements Vehicle {}

class Bicycle extends Vehicle {}

// ERROR: Can't be instantiated.
Vehicle myVehicle = Vehicle();

// Subclasses can be instantiated.
Vehicle myCar = Car();

String getVehicleSound(Vehicle vehicle) {
  // ERROR: The switch is missing the Bicycle subtype or a default case.
  return switch (vehicle) {
    Car() => 'vroom',
    Truck() => 'VROOOOMM',
  };
}
```

如果不想进行穷尽式切换，或者希望能够在不破坏 API 的情况下添加子类型，请使用 final 修饰符。有关更深入的比较，请阅读“sealed 与 final 的对比”。

#### 组合修饰符 Combining modifiers

您可以将一些修饰符组合起来以进行分层限制。类声明可以是按以下顺序组合的：

* （可选）abstract，描述类是否可以包含抽象成员，并防止实例化。
* （可选）base、interface、final 或 sealed 中的一个，描述对其他库子类化类的限制。
* （可选）mixin，描述声明是否可以被混入。

##### 类关键字本身。

有些修饰符不能组合在一起，因为它们相互矛盾、冗余或以其他方式相互排斥：

* abstract 与 sealed。sealed 类是隐式抽象的。
* interface、final 或 sealed 与 mixin。这些访问修饰符会阻止混入。
  有关如何组合类修饰符的进一步指导，请参阅“类修饰符参考”。

##### API 维护者应该用的类型修饰符

Dart 3.0 为类和混入声明添加了一些新的修饰符。如果您是库包的作者，这些修饰符将为您提供更多控制权，以决定用户可以对您的包导出的类型执行哪些操作。这可以让您更容易地更新您的包，并更容易地了解代码更改是否可能破坏用户的使用。

Dart 3.0 还包含一项关于将类用作混入的重大更改。此更改可能不会破坏您的类，但可能会破坏您的类的用户。

本指南将带您了解这些更改，以便您知道如何使用新的修饰符，以及它们如何影响您的库的用户。

##### 类上的 mixin 修饰符 The mixin modifier on classes

需要了解的最重要的修饰符是 mixin。在 Dart 3.0 之前的语言版本中，允许将任何类用作另一个类的 with 子句中的混入，除非该类：

* 声明了任何非工厂构造函数。
* 扩展了除 Object 以外的任何类。
  这使得通过向类添加构造函数或 extends 子句来意外破坏他人的代码变得容易，而没有意识到其他人正在 with 子句中使用它。

Dart 3.0 不再默认允许将类用作混入。相反，您必须通过声明一个混入类来明确选择该行为：

```dart
mixin class Both {}

class UseAsMixin with Both {}
class UseAsSuperclass extends Both {}
```

如果您将包更新到 Dart 3.0 但没有更改任何代码，您可能不会看到任何错误。但是，如果您的用户将您的类用作混入，那么您可能会无意中破坏他们的使用。

##### 将类作为混入迁移 Migrating classes as mixins

如果类具有非工厂构造函数、extends 子句或 with 子句，那么它就不能用作混入。在 Dart 3.0 中，行为不会改变；您无需担心，也无需采取任何行动。

实际上，这描述了大约 90% 的现有类。对于其余可以用作混入的类，您必须决定要支持哪些功能。

以下是一些问题，有助于您做出决定。第一个问题是务实的：

* 您是否愿意冒险破坏任何用户？如果答案是坚决的“不”，那么请在所有可以用作混入的类之前放置 mixin。这将完全保留您 API 的现有行为。
* 另一方面，如果您想借此机会重新思考您的 API 提供的便利功能，那么您可能不想将其转换为混入类。请考虑以下两个设计问题：
* 您是否希望用户能够直接构造它的实例？换句话说，该类是否故意不是抽象的？
* 您是否希望人们能够将声明用作混入？换句话说，您是否希望他们能够在 with 子句中使用它？
  如果两个问题的答案都是“是”，那么将其设置为混入类。如果第二个问题的答案是“否”，那么只需将其保留为类。如果第一个问题的答案是“否”，而第二个问题的答案是“是”，那么将其从类更改为混入声明。

最后两个选项，将其保留为类或将其转换为纯混入，都是破坏 API 的更改。如果您这样做，则需要提高您包的主版本号。

##### 其他可选修饰符 Other opt-in modifiers

将类作为混入处理是 Dart 3.0 中唯一影响您包 API 的关键更改。一旦您完成此操作，如果您不想对您的包允许用户执行的其他操作进行其他更改，则可以停止操作。

请注意，如果您继续并使用以下描述的任何修饰符，这可能会对您包的 API 造成破坏性更改，因此需要增加主版本号。

##### interface 修饰符 The interface modifier

Dart 没有为声明纯接口提供单独的语法。相反，您声明一个抽象类，该类恰好只包含抽象方法。当用户看到该类在您包的 API 中时，他们可能不知道它是否包含可以通过扩展该类重用的代码，或者它是否应该用作接口。

您可以通过在类上放置 interface 修饰符来澄清这一点。这允许类在 implements 子句中使用，但阻止了在 extends 中使用。

即使该类具有非抽象方法，您也可能希望阻止用户扩展它。继承是软件中一种最强大的耦合类型，因为它支持代码重用。但这种耦合也是危险且脆弱的。当继承跨越包边界时，很难在不破坏子类的情况下对超类进行演化。

将类标记为 interface 可让用户构造它（除非它也被标记为抽象），并实现类的接口，但阻止他们重用其任何代码。

当类被标记为 interface 时，可以在声明该类的库内忽略此限制。在库内部，您可以自由扩展它，因为这都是您的代码，并且您大概知道自己在做什么。此限制适用于其他包，甚至您自己包内的其他库。

##### base 修饰符 The base modifier

base 修饰符在某种程度上与 interface 相反。它允许您在 extends 子句中使用该类，或者在 with 子句中使用混入或混入类。但是，它不允许类库之外的代码在 implements 子句中使用该类或混入。

这确保了每个作为您的类或混入接口实例的对象都继承了您的实际实现。特别是，这意味着每个实例都将包含您的类或混入声明的所有私有成员。这有助于防止可能发生的运行时错误。

考虑以下库：

```dart
a.dart

class A {
  void _privateMethod() {
    print('I inherited from A');
  }
}

void callPrivateMethod(A a) {
  a._privateMethod();
}
```

这段代码本身似乎很好， 但是没有什么可以阻止用户创建另一个这样的库：

```dart
b.dart

import 'a.dart';

class B implements A {
  // No implementation of _privateMethod()!
}

main() {
  callPrivateMethod(B()); // Runtime exception!
}
```

对于类添加 base 修饰符有助于防止这些运行时错误。与 interface 一样，您可以在声明基类或混入的同一库内忽略此限制。然后，同一库中的子类将被提醒实现私有方法。但请注意，下一节也适用：

##### 基础传递性 Base transitivity

标记一个类为 base 的目标是确保该类型的每个实例都具体地从其继承。为了维护这一点，base 限制是“传染性的”。标记为 base 的类型的每个子类型（无论是直接还是间接的）也必须防止被实现。这意味着它必须被标记为 base（或 final 或 sealed，我们将在后面讨论）。

因此，对类型应用 base 需要一些谨慎。它不仅影响用户可以对您的类或混入执行的操作，还影响它们的子类可以提供的支持。一旦您在一个类型上添加了 base，其下的整个层次结构都将禁止被实现。

这听起来很严格，但大多数其他编程语言一直以来都是这样工作的。大多数编程语言根本没有隐式接口，因此，当您在 Java、C# 或其他语言中声明一个类时，您实际上已经受到了相同的约束。

##### final 修饰符 The final modifier

如果您希望同时具有 interface 和 base 的所有限制，可以将类或混入类标记为 final。这将防止库外的任何人创建其任何类型的子类型：不允许在 implements、extends、with 或 on 子句中使用它。

这对于类的使用者来说是最受限制的。他们所能做的就是构造它（除非它被标记为抽象）。作为类维护者，您受到的限制最少。您可以添加新方法、将构造函数转换为工厂构造函数等，而无需担心破坏任何下游用户。

##### sealed 修饰符 The sealed modifier

最后一个修饰符 sealed 是特殊的。它存在的主要目的是在模式匹配中启用穷尽性检查。如果一个 switch 语句为标记为 sealed 的类型的每个直接子类型都提供了 case，那么编译器就知道该 switch 语句是穷尽的。

```dart
amigos.dart

sealed class Amigo {}

class Lucky extends Amigo {}

class Dusty extends Amigo {}

class Ned extends Amigo {}

String lastName(Amigo amigo) => switch (amigo) {
      Lucky _ => 'Day',
      Dusty _ => 'Bottoms',
      Ned _ => 'Nederlander',
    };
```

这个 switch 语句为 Amigo 的每个子类型都提供了 case。编译器知道 Amigo 的每个实例都必须是这些子类型之一的实例，因此它知道该 switch 语句是安全穷尽的，不需要任何默认的最终 case。

为了保证这一点是合理的，编译器强制执行了两个限制：

* sealed 类本身不能直接构造。否则，您可能会得到一个 Amigo 的实例，但它不是任何子类型的实例。因此，每个 sealed 类都是隐式抽象的。
* sealed 类型的每个直接子类型都必须在声明 sealed 类型的同一库中。这样，编译器可以找到它们所有。它知道没有其他隐藏的子类型会不匹配任何 case。
  第二个限制与 final 类似。就像 final 一样，它意味着标记为 sealed 的类不能在声明它的库之外被直接扩展、实现或混入。但是，与 base 和 final 不同，这里没有传递性限制：

```dart
amigo.dart

sealed class Amigo {}
class Lucky extends Amigo {}
class Dusty extends Amigo {}
class Ned extends Amigo {}

other.dart

// This is an error:
class Bad extends Amigo {}

// But these are both fine:
class OtherLucky extends Lucky {}
class OtherDusty implements Dusty {}
```

当然，如果您希望您的 sealed 类型的子类型也受到限制，您可以通过使用 interface、base、final 或 sealed 来标记它们来实现这一点。

##### sealed 与 final 的比较 sealed versus final

如果你有一个类，不希望用户能够直接继承这个类，那么你应该在什么时候使用 sealed 而不是 final 呢？这里有几个简单的规则：

* 如果你希望用户能够直接构造这个类的实例，那么就不能使用 sealed，因为 sealed 类型是隐式抽象的。
* 如果该类在你的库中没有任何子类型，那么使用 sealed 就没有意义，因为你不会获得任何穷尽性检查的好处。
  否则，如果该类确实有一些你定义的子类型，那么 sealed 可能是你想要的。如果用户看到该类有几个子类型，那么能够分别将它们作为 switch case 来单独处理，并让编译器知道整个类型都被覆盖了，这将是非常方便的。

使用 sealed 意味着如果你后来向库中添加另一个子类型，这将是一个破坏性的 API 变更。当出现新的子类型时，所有现有的 switch 语句都将变得非穷尽，因为它们没有处理新的类型。这完全就像向枚举中添加一个新的值一样。

这些非穷尽的 switch 编译错误对用户来说是有用的，因为它们会吸引用户的注意，提醒他们在代码中需要处理新类型的地方。

但是，这也意味着每当你添加一个新的子类型时，它都会是一个破坏性的变更。如果你希望以非破坏性的方式添加新的子类型，那么最好使用 final 而不是 sealed 来标记超类型。这意味着当用户根据该超类型的值进行 switch 操作时，即使他们为所有子类型都提供了 case，编译器也会强制他们添加另一个默认 case。然后，如果你以后添加了更多的子类型，将执行这个默认 case。

##### 总结 Summary

作为 API 设计者，这些新的修饰符为你提供了控制用户如何与你的代码交互的方式，同时也控制了你如何在不破坏用户代码的情况下改进你的代码。

但这些选项也带来了复杂性：现在作为 API 设计者，你有更多的选择要做。此外，由于这些特性是新的，我们仍然不知道最佳实践会是什么。每种语言的生态系统都是不同的，并且有不同的需求。

幸运的是，你不需要一次性弄清楚所有事情。我们故意选择了默认值，这样即使你什么都不做，你的类在大多数情况下也会拥有与 3.0 版本之前相同的可访问性。如果你只想保持 API 不变，那么只需在已经支持 mixin 的类上使用它，你就完成了。

随着时间的推移，当你逐渐明白需要在哪里进行更精细的控制时，可以考虑应用一些其他的修饰符：

* 使用 interface 来防止用户重用你的类的代码，同时允许他们重新实现其接口。
* 使用 base 来要求用户重用你的类的代码，并确保你的类的类型的每个实例都是该实际类或其子类的实例。
* 使用 final 来完全防止一个类被扩展。
* 使用 sealed 来选择对一系列子类型进行穷尽性检查。
  当你这么做时，在发布你的包时，请增加主版本号，因为这些修饰符都意味着会引入破坏性的变更。

#### 速查表

本页包含类修饰符的参考信息。

有效组合 Valid combinations
类修饰符及其生成功能的有效组合包括：

| Declaration               | Construct? | Extend? | Implement? | Mix in? | Exhaustive? |
| ------------------------- | ---------- | ------- | ---------- | ------- | ----------- |
| class                     | Yes        | Yes     | Yes        | No      | No          |
| base class                | Yes        | Yes     | No         | No      | No          |
| interface class           | Yes        | No      | Yes        | No      | No          |
| final class               | Yes        | No      | No         | No      | No          |
| sealed class              | No         | No      | No         | No      | Yes         |
| abstract class            | No         | Yes     | Yes        | No      | No          |
| abstract base class       | No         | Yes     | No         | No      | No          |
| abstract interface class  | No         | No      | Yes        | No      | No          |
| abstract final class      | No         | No      | No         | No      | No          |
| mixin class               | Yes        | Yes     | Yes        | Yes     | No          |
| base mixin class          | Yes        | Yes     | No         | Yes     | No          |
| abstract mixin class      | No         | Yes     | Yes        | Yes     | No          |
| abstract base mixin class | No         | Yes     | No         | Yes     | No          |
| mixin                     | No         | No      | Yes        | Yes     | No          |
| base mixin                | No         | No      | No         | Yes     | No          |

#### 无效组合 Invalid combinations

某些 组合 不允许使用修饰符：

| Combination                           | Reasoning                                                                               |
| ------------------------------------- | --------------------------------------------------------------------------------------- |
| base, interface, and final            | 它们都控制相同的两个功能（extend 和 implement），因此是互斥的。                         |
| sealed and abstract                   | 两者都不能构建，因此在一起是多余的。                                                    |
| sealed with base, interface, or final | sealed 类型已经不能混合到另一个库中，扩展或实现，因此与列出的修饰符组合是多余的。       |
| mixin and abstract                    | 两者都不能构建，因此在一起是多余的。                                                    |
| mixin and interface, final, or sealed | mixin 或 mixin class 声明旨在混合使用，列出的修饰符会阻止这种声明。                     |
| enum and any modifiers                | enum 声明不能扩展、实现、混合，并且始终可以实例化，因此任何修饰符都不适用于 enum 声明。 |
| extension type and any modifiers      | extension type 声明不能扩展或混合使用，只能由其他 extension type 声明实现。             |


##### 并发
https://dart.cn/language/concurrency

##### 概览
本页包含 Dart 中并发编程如何工作的概念性概述。它从高层次解释了事件循环、异步语言特性和隔离。要了解 Dart 中使用并发性的更多实际代码示例，请阅读 Asynchrony support 页面和 Isolates 页面。

Dart 中的并发编程既指异步 API（如 Future 和 Stream），也指隔离（isolates），后者允许您将进程移动到单独的核心上。

所有 Dart 代码都在隔离中运行，首先从默认的 main 隔离开始，然后可选地扩展到您明确创建的任何后续隔离。当您启动新的隔离时，它会有自己的独立内存和自己的事件循环。事件循环是 Dart 中实现异步和并发编程的关键。

##### 事件循环 Event Loop
Dart 的运行时模型基于事件循环。事件循环负责执行您程序中的代码、收集和处理事件等任务。

当您的应用程序运行时，所有事件都会被添加到一个队列中，这个队列被称为事件队列。事件可以是任何内容，从请求重绘用户界面，到用户点击和键盘输入，再到来自磁盘的输入/输出操作。由于您的应用程序无法预测事件发生的顺序，因此事件循环会按照它们在队列中的顺序，一次处理一个事件。
![] (https://img-blog.csdnimg.cn/direct/271a0ccfa0444eff98211c30dae7838a.png)
事件循环函数的方式类似于以下代码：
```dart
while (eventQueue.waitForEvent()) {
  eventQueue.processNextEvent();
}
```
这个示例中的事件循环是同步的，并且运行在一个单线程上。然而，大多数 Dart 应用程序需要同时执行多个任务。例如，一个客户端应用程序可能需要在执行 HTTP 请求的同时监听用户点击按钮的操作。为了处理这种情况，Dart 提供了许多异步 API，如 Futures、Streams 和 async-await。这些 API 都是基于这个事件循环构建的。

以发起网络请求为例：
https://img-blog.csdnimg.cn/direct/271a0ccfa0444eff98211c30dae7838a.png
http.get('https://example.com').then((response) {
  if (response.statusCode == 200) {
    print('Success!')'
  }
}
```
当这段代码到达事件循环时，它会立即调用第一个子句 http.get，并返回一个 Future。同时，它还告诉事件循环保留 then() 子句中的回调函数，直到 HTTP 请求完成。当请求完成时，它会执行该回调函数，并将请求的结果作为参数传递给它。
![] (https://img-blog.csdnimg.cn/direct/ceead862b62a4f1694db8919beb1c6fe.png)
这个相同的模型通常是 Dart 中事件循环处理所有其他异步事件的方式，例如 Stream 对象。

#### 异步编程 Asynchronous programming
本节概述了 Dart 中异步编程的不同类型和语法。如果您已经熟悉 Future、Stream 和 async-await，那么您可以直接跳转到隔离（isolates）部分。

#### Futures
一个 Future 代表一个异步操作的结果，这个操作最终会以一个值或错误完成。
在这个示例代码中，Future 的返回类型代表了一个承诺，即最终会提供一个 String 值（或错误）。
```dart
Future `<String>` _readFileAsync(String filename) {
  final file = File(filename);

  // .readAsString() returns a Future.
  // .then() registers a callback to be executed when `readAsString` resolves.
  return file.readAsString().then((contents) {
    return contents.trim();
  });
}
```
#### 异步等待语法 The async-await syntax
async 和 await 关键字提供了一种声明式的方式来定义异步函数和使用它们的结果。

以下是一个同步代码示例，它在等待文件 I/O 时会阻塞：
```dart
const String filename = 'with_keys.json';

void main() {
  // Read some data.
  final fileData = _readFileSync();
  final jsonData = jsonDecode(fileData);

  // Use that data.
  print('Number of JSON keys: ${jsonData.length}');
}

String _readFileSync() {
  final file = File(filename);
  final contents = file.readAsStringSync();
  return contents.trim();
}
```
下面是类似的代码，但进行了更改（突出显示）以使其异步：
```dart
const String filename = 'with_keys.json';

void main() async {
  // Read some data.
  final fileData = await _readFileAsync();
  final jsonData = jsonDecode(fileData);

  // Use that data.
  print('Number of JSON keys: ${jsonData.length}');
}

Future `<String>` _readFileAsync() async {
  final file = File(filename);
  final contents = await file.readAsString();
  return contents.trim();
}

```
main() 函数在 _readFileAsync() 前面使用了 await 关键字，以便在原生代码（文件 I/O）执行时，其他 Dart 代码（如事件处理程序）可以使用 CPU。使用 await 还有一个效果，即将 _readFileAsync() 返回的 Future 转换为 String。因此，contents 变量的隐式类型为 String。

> 该 await 关键字仅适用于 async 在 函数体。

如下图所示，Dart 代码在 readAsString() 执行非 Dart 代码（无论是在 Dart 运行时还是操作系统中）时会暂停。一旦 readAsString() 返回一个值，Dart 代码的执行就会恢复。
![] (https://img-blog.csdnimg.cn/direct/917b70c963344f1d934dcf1e6986fe46.png)

#### 流 Streams
Dart 也支持以流（Streams）的形式编写异步代码。流在未来会提供值，并随时间反复提供。随着时间的推移，承诺提供一系列 int 值的类型就是 Stream。

在以下示例中，使用 Stream.periodic 创建的流每秒都会发出一个新的 int 值。
```dart
Stream `<int>` stream = Stream.periodic(const Duration(seconds: 1), (i) => i * i);
```
await-for 和 yield

await-for 是一种 for 循环，它会在提供新值时执行循环的后续迭代。换句话说，它用于“遍历”流。在这个例子中，当从作为参数提供的流中发出新值时，sumStream 函数将发出一个新值。在返回值的流函数中，使用 yield 关键字而不是 return。
```dart
Stream `<int>` sumStream(Stream `<int>` stream) async* {
  var sum = 0;
  await for (final value in stream) {
    yield sum += value;
  }
}
```
如果您想学习更多关于使用 async、await、Streams 和 Futures 的知识，请访问异步编程代码实验室。

#### 隔离 Isolates
除了异步 API 之外，Dart 还通过隔离（isolates）来支持并发。大多数现代设备都具有多核 CPU。为了利用多个核心，开发人员有时会使用并发运行的共享内存线程。然而，共享状态的并发容易出错，并可能导致代码复杂化。

Dart 代码并不使用线程，而是运行在隔离中。使用隔离，您的 Dart 代码可以同时执行多个独立的任务。隔离类似于线程或进程，但每个隔离都有自己的内存和单个线程运行的事件循环。

每个隔离都有自己的全局字段，确保隔离中的任何状态都不可从任何其他隔离中访问。隔离之间只能通过消息传递进行通信。隔离之间没有共享状态意味着 Dart 中不会出现像互斥锁或锁和数据竞争这样的并发复杂性。也就是说，隔离并不能完全防止竞态条件。有关此并发模型的更多信息，请阅读关于 Actor 模型的内容。

使用隔离，您的 Dart 代码可以同时执行多个独立的任务，如果可用，还会使用额外的处理器核心。隔离类似于线程或进程，但每个隔离都有自己的内存和单个线程运行的事件循环。

>只有 Dart Native 平台 实现隔离。 要了解有关 Dart Web 平台的更多信息， 请参阅 Web 上的并发 部分。

#### 主隔离 The main isolate
在大多数情况下，您根本不需要考虑隔离。Dart 程序默认在主隔离中运行。它是程序开始运行和执行的线程，如下图所示：
![] (https://img-blog.csdnimg.cn/direct/83ad212b6cea43d3a2bdcb8ec971bab3.png)
即使是单隔离程序也可以流畅地执行。这些应用使用 async-await 在继续执行下一行代码之前等待异步操作完成。一个运行良好的应用会快速启动，尽快进入事件循环。然后，应用会迅速响应每个排队的事件，并在必要时使用异步操作。

##### 隔离生命周期 The isolate life cycle
如下图所示，每个隔离开始时都会运行一些 Dart 代码，例如 main() 函数。这段 Dart 代码可能会注册一些事件监听器——例如，为了响应用户输入或文件 I/O。当隔离的初始函数返回时，如果隔离需要处理事件，它将继续存在。处理完事件后，隔离将退出。
![] (https://img-blog.csdnimg.cn/direct/5a3ab2a42187411aafd570d5d45f7b6e.png)
#### 事件处理 Event handling
在客户端应用中，主隔离的事件队列可能包含重绘请求以及点击和其他 UI 事件的通知。例如，以下图所示，先是一个重绘事件，接着是一个点击事件，然后是两个重绘事件。事件循环按照先入先出（FIFO）的顺序从队列中取出事件。
![] (https://img-blog.csdnimg.cn/direct/045e8989d02a424fa6d74ecff51b8203.png)
在 main() 函数退出后，事件处理会在主隔离中发生。在以下图中，main() 函数退出后，主隔离首先处理第一个重绘事件。之后，主隔离处理点击事件，接着处理另一个重绘事件。

如果同步操作花费了过多的处理时间，应用程序可能会变得无响应。在以下图中，处理点击事件的代码耗时过长，因此后续事件的处理也被推迟。应用程序可能会看起来像是冻结了，它执行的任何动画也可能会变得不流畅。
![] (https://img-blog.csdnimg.cn/direct/55749392cc18422cae3478aa49ab0380.png)
在客户端应用中，耗时过长的同步操作通常会导致用户界面动画变得不流畅（janky）。更糟糕的是，用户界面可能会变得完全无响应。

#### 后台工作者 Background workers
如果您的应用程序的用户界面因耗时计算而变得无响应——例如解析大型 JSON 文件——请考虑将该计算卸载到工作隔离中，通常称为后台工作线程。一个常见的情况是，如下图所示，生成一个简单的工作隔离来执行计算，然后退出。工作隔离在退出时通过消息返回其计算结果。
![] (https://img-blog.csdnimg.cn/direct/c48bf1579a3f47ec942574338d39c48e.png)
工作隔离可以执行 I/O（例如读取和写入文件），设置计时器等操作。它拥有自己的内存，不与主隔离共享任何状态。工作隔离可以阻塞，而不会影响其他隔离。

### 使用隔离 Using isolates
在 Dart 中，根据用例的不同，与隔离一起工作有两种方式：

* 使用 Isolate.run() 在单独的线程上执行单个计算。
* 使用 Isolate.spawn() 创建一个隔离，该隔离将随着时间的推移处理多个消息，或作为后台工作线程。要了解有关处理长时间存在的隔离的更多信息，请阅读 Isolates 页面。
在大多数情况下，推荐使用 Isolate.run API 在后台运行进程。
```dart
Isolate.run()
```
静态方法 Isolate.run() 需要一个参数：一个将在新生成的隔离上运行的回调函数。
```dart
int slowFib(int n) => n <= 1 ? 1 : slowFib(n - 1) + slowFib(n - 2);

// Compute without blocking current isolate.
void fib40() async {
  var result = await Isolate.run(() => slowFib(40));
  print('Fib(40) = $result');
}
```
#### 性能和隔离组 Performance and isolate groups
当一个隔离调用 Isolate.spawn() 时，这两个隔离将拥有相同的可执行代码，并处于同一个隔离组中。隔离组能够实现性能优化，如代码共享；新隔离会立即运行隔离组拥有的代码。此外，Isolate.exit() 仅在隔离处于同一隔离组时有效。

在某些特殊情况下，您可能需要使用 Isolate.spawnUri()，它会使用指定 URI 上的代码副本来设置新隔离。但是，spawnUri() 比 spawn() 慢得多，而且新隔离不在其创建者的隔离组中。另一个性能后果是，当隔离处于不同组时，消息传递会变慢。

#### 隔离的限制 Limitations of isolates
隔离不是线程

如果您从具有多线程的语言转到 Dart，可能会期望隔离的行为类似于线程，但事实并非如此。每个隔离都有自己的状态，确保隔离中的任何状态都无法从任何其他隔离中访问。因此，隔离受到其访问自身内存的限制。

例如，如果您有一个带有全局可变变量的应用程序，则该变量在您的生成隔离中将是单独的变量。如果您在生成隔离中修改该变量，则主隔离中的该变量将保持不变。这是隔离应有的工作方式，在考虑使用隔离时，这一点很重要。

消息类型

通过 SendPort 发送的消息可以是几乎任何类型的 Dart 对象，但有一些例外：

* 带有本地资源的对象，如 Socket。
* ReceivePort
* DynamicLibrary
* Finalizable
* Finalizer
* NativeFinalizer
* Pointer
* UserTag
* 标记有 @pragma(‘vm:isolate-unsendable’) 的类的实例
除了上述例外，几乎任何类型的 Dart 对象都可以发送。有关更多信息，请查阅 SendPort.send 文档。

请注意，Isolate.spawn() 和 Isolate.exit() 是对 SendPort 对象的抽象，因此它们受到相同的限制。

#### Web上的并发 Concurrency on the web
所有 Dart 应用都可以使用 async-await、Future 和 Stream 进行非阻塞、交错计算。然而，Dart Web 平台并不支持隔离。Dart Web 应用可以使用 Web Workers 在类似于隔离的后台线程中运行脚本。不过，Web Workers 的功能和能力与隔离有所不同。

例如，当 Web Workers 在线程之间发送数据时，它们会来回复制数据。数据复制可能会非常慢，尤其是对于大型消息。隔离也做同样的事情，但它们还提供了一些 API，可以更高效地传输存储消息的内存。

创建 Web Workers 和隔离也有所不同。您只能通过声明单独的程序入口点并单独编译它来创建 Web Workers。启动 Web Worker 与使用 Isolate.spawnUri 启动隔离类似。您还可以使用 Isolate.spawn 启动隔离，这需要较少的资源，因为它重用了与创建隔离相同的部分代码和数据。Web Workers 没有等效的 API。

#### 其他资源 Additional resources
如果您正在使用许多隔离，可以考虑在 Flutter 中使用 IsolateNameServer，或者在非 Flutter Dart 应用中使用提供类似功能的 package:isolate_name_server。

更多了解 Dart 的隔离所基于的 Actor 模型。

Isolate API 的其他文档：

* Isolate.exit()
* Isolate.spawn()
* ReceivePort
* SendPort
##### 异步支持
Dart 库中充满了返回 Future 或 Stream 对象的函数。这些函数是异步的：它们在设置一个可能耗时的操作（如 I/O）后返回，而不等待该操作完成。

async 和 await 关键字支持异步编程，让你能够编写看起来类似于同步代码的异步代码。

Handling Futures
当你需要已完成 Future 的结果时，你有两种选择：

* 使用 async 和 await，如本文和异步编程代码实验室所述。
* 使用 Future API，如 dart:async 文档所述。
* 使用 async 和 await 的代码是异步的，但它看起来非常像同步代码。例如，以下代码使用 await 等待异步函数的结果：
```dart
await lookUpVersion();
```
要使用 await，代码必须位于一个异步函数中——一个被标记为 async 的函数：
```dart
Future `<void>` checkVersion() async {
  var version = await lookUpVersion();
  // Do something with version
}
```
尽管函数 async 可能会执行耗时的操作， 它不会等待这些操作。 相反，该 async 函数仅执行 直到它遇到它的第一个 await 表达式。 然后它返回一个 Future 对象， 仅在表达式完成后 await 恢复执行。

使用 try、 catch和 finally 处理错误和清理 在代码中使用 await：
```dart
try {
  version = await lookUpVersion();
} catch (e) {
  // React to inability to look up the version
}
```
您可以在一个async函数中多次使用await。 例如，以下代码等待 3 次 对于函数的结果：

var entrypoint = await findEntryPoint();
var exitCode = await runExecutable(entrypoint, args);
await flushThenExit(exitCode);
1
2
3
在 await 表达式中，表达式的值通常是一个 Future；如果不是，则该值将自动包装在一个 Future 中。这个 Future 对象表示了一个返回对象的承诺。await 表达式的值就是返回的那个对象。await 表达式会使执行暂停，直到该对象可用。

如果您在使用 await 时遇到编译时错误，请确保 await 位于一个异步函数中。例如，要在您的应用中的 main() 函数中使用 await，main() 函数的主体必须被标记为 async：

void main() async {
  checkVersion();
  print('In main: version is ${await lookUpVersion()}');
}
1
2
3
4
前面的例子使用了一个异步函数（checkVersion()），但没有等待其结果——如果代码假设该函数已经执行完毕，这种做法可能会导致问题。为了避免这个问题，请使用 unawaited_futures linter 规则。

要了解如何交互地使用 futures、async 和 await，请参见异步编程代码实验室。

声明异步函数 Declaring async functions
异步函数是一个其主体被标记为 async 修饰符的函数。

在函数前添加 async 关键字会使其返回一个 Future。例如，考虑这个同步函数，它返回一个 String：

String lookUpVersion() => ‘1.0.0’;

如果你将其改为异步函数——例如，因为未来的实现将耗费时间——那么返回的值将是一个 Future：

Future `<String>` lookUpVersion() async => '1.0.0';
1
请注意，函数的主体并不需要使用 Future API。如果需要，Dart 会创建 Future 对象。如果你的函数不返回有用的值，请将其返回类型设为 Future。

要了解如何交互地使用 futures、async 和 await，请参见异步编程代码实验室。

Handling Streams
当你需要从 Stream 中获取值时，你有两种选择：

使用 async 和异步 for 循环（await for）。
使用 Stream API，如 dart:async 文档所述。
在使用 await for 之前，请确保它能使代码更清晰，并且你真的需要等待流的所有结果。例如，你通常不应该在 UI 事件监听器中使用 await for，因为 UI 框架会发送无限的事件流。

异步 for 循环的形式如下：

await for (varOrType identifier in expression) {
  // Executes each time the stream emits a value.
}
1
2
3
表达式的值必须为 Stream 类型。执行过程如下：

等待流发出一个值。
使用该发出的值设置变量，并执行 for 循环的主体。
重复步骤 1 和 2，直到流关闭。
要停止监听流，你可以使用 break 或 return 语句，这会中断 for循环并取消订阅流。

如果你在实现异步for循环时遇到编译时错误，请确保 await for 位于一个异步函数中。例如，要在你的应用的 main() 函数中使用异步for循环，main() 函数的主体必须被标记为 async：

void main() async {
  // ...
  await for (final request in requestServer) {
    handleRequest(request);
  }
  // ...
}
1
2
3
4
5
6
7
有关 Dart 异步编程支持的更多信息， 查看 dart:async 库文档。

Lsolates
本页面讨论了一些使用 Isolate API 实现隔离区的示例。

当你的应用程序正在处理大到足以暂时阻止其他计算的计算任务时，你应该使用隔离区。最常见的例子是在 Flutter 应用程序中，当你需要执行大型计算任务，而这些任务可能会使 UI 变得无响应时。

虽然并没有规定何时必须使用隔离区，但以下是一些隔离区可能派上用场的情况：

解析和解码特别大的 JSON 数据块。
处理和压缩照片、音频和视频。
转换音频和视频文件。
对大型列表或文件系统中的数据进行复杂搜索和过滤。
执行 I/O 操作，例如与数据库通信。
处理大量的网络请求。
实现一个简单的工作隔离区 Implementing a simple worker isolate
这些示例实现了一个主隔离区，该隔离区生成了一个简单的工作隔离区。Isolate.run() 简化了设置和管理工作隔离区的步骤：

生成（启动并创建）一个隔离区。
在生成的隔离区上运行一个函数。
捕获结果。
将结果返回给主隔离区。
完成工作后终止隔离区。
检查、捕获异常和错误，并将其返回给主隔离区。
如果你正在使用 Flutter，可以使用 Flutter 的 compute 函数，而不是 Isolate.run()。

在新的隔离区中运行已存在的方法 Running an existing method in a new isolate
1.调用 run() 来在主隔离区中直接生成一个新的隔离区（后台工作线程），而 main() 则等待结果：

const String filename = 'with_keys.json';

void main() async {
  // Read some data.
  final jsonData = await Isolate.run(_readAndParseJson);

  // Use that data.
  print('Number of JSON keys: ${jsonData.length}');
}
1
2
3
4
5
6
7
8
9
2.将你想要工作隔离区执行的函数作为它的第一个参数传递给它。在这个例子中，这个现有的函数是 _readAndParseJson()：

Future<Map<String, dynamic>> _readAndParseJson() async {
  final fileData = await File(filename).readAsString();
  final jsonData = jsonDecode(fileData) as Map<String, dynamic>;
  return jsonData;
}
1
2
3
4
5
3.Isolate.run() 接收 _readAndParseJson() 返回的结果，并将值发送回主隔离区，然后关闭工作隔离区。

4.工作隔离区将保存结果的内存转移到主隔离区。它不会复制数据。工作隔离区执行一个验证过程，以确保对象允许被转移。

_readAndParseJson() 是一个现有的异步函数，它可以很容易地在主隔离区中直接运行。使用 Isolate.run() 来运行它可以启用并发性。工作隔离区完全抽象了 _readAndParseJson() 的计算。它可以在不阻塞主隔离区的情况下完成。

Isolate.run() 的结果总是一个 Future，因为主隔离区中的代码会继续运行。工作隔离区执行的计算是同步还是异步不会影响主隔离区，因为无论如何它们都是并发运行的。

要查看完整的程序，请查看 send_and_receive.dart 示例。

使用隔离区发送闭包 Sending closures with isolates
你也可以直接在主隔离区中使用函数字面量或闭包，通过 run() 创建一个简单的工作隔离区。

const String filename = 'with_keys.json';

void main() async {
  // Read some data.
  final jsonData = await Isolate.run(() async {
    final fileData = await File(filename).readAsString();
    final jsonData = jsonDecode(fileData) as Map<String, dynamic>;
    return jsonData;
  });

  // Use that data.
  print('Number of JSON keys: ${jsonData.length}');
}
1
2
3
4
5
6
7
8
9
10
11
12
13
这个例子与之前的例子实现了相同的功能。新的隔离区被生成，执行一些计算，并发送回结果。

然而，现在隔离区发送的是一个闭包。闭包在功能和编写方式上都比典型的命名函数限制更少。在这个例子中，Isolate.run() 并发地执行了看起来像是本地代码的内容。从这个意义上讲，你可以将 run() 想象成一个控制流操作符，用于“并行运行”。

使用端口在隔离区之间发送多条消息 Sending multiple messages between isolates with ports
短生命周期的隔离区使用起来很方便，但生成新的隔离区和从一个隔离区到另一个隔离区复制对象需要性能开销。如果你的代码依赖于使用 Isolate.run 反复运行相同的计算，那么通过创建不会立即退出的长生命周期隔离区，可能会提高性能。

为此，你可以使用 Isolate.run 抽象出来的一些低级隔离区 API：

Isolate.spawn() 和 Isolate.exit()
ReceivePort 和 SendPort
SendPort.send() 方法
本节将介绍在新生成的隔离区和主隔离区之间建立双向通信所需的步骤。第一个示例“基本端口”从高级别介绍了这个过程。第二个示例“健壮端口”则逐渐为第一个示例添加更多实用、现实世界的功能。

ReceivePort and SendPort
在隔离区之间设置长期通信需要两个类（除了 Isolate）：ReceivePort 和 SendPort。这些端口是隔离区之间通信的唯一方式。

ReceivePort 是一个对象，用于处理从其他隔离区发送的消息。这些消息通过 SendPort 发送。

一个 SendPort 对象与恰好一个 ReceivePort 相关联，但一个单独的 ReceivePort 可以有多个 SendPort。当你创建一个 ReceivePort 时，它会为自己创建一个 SendPort。你可以创建额外的 SendPort，这些 SendPort 可以向现有的 ReceivePort 发送消息。

端口的行为类似于 Stream 对象（事实上，接收端口实现了 Stream！）你可以将 SendPort 和 ReceivePort 分别视为 Stream 的 StreamController 和监听器。SendPort 类似于 StreamController，因为你可以使用 SendPort.send() 方法将消息“添加”到其中，这些消息由监听器处理，在这种情况下是 ReceivePort。然后，ReceivePort 将它接收到的消息作为你提供的回调函数的参数进行处理。

设置端口

新生成的隔离区只包含通过 Isolate.spawn 调用接收到的信息。如果你需要在隔离区初始创建之后继续让主隔离区与生成的隔离区进行通信，你必须设置一个通信通道，以便生成的隔离区可以向主隔离区发送消息。隔离区只能通过消息传递进行通信。它们无法“查看”彼此的内存内容，这就是“隔离区”这个名称的由来。

为了设置这种双向通信，首先在主隔离区中创建一个 ReceivePort，然后在使用 Isolate.spawn 生成新隔离区时，将其 SendPort 作为参数传递。然后，新隔离区创建自己的 ReceivePort，并通过主隔离区传递给它的 SendPort 将其 SendPort 发送回去。主隔离区接收到这个 SendPort 后，现在双方都有一个开放的通道来发送和接收消息。

本节中的图表是高级别的，旨在传达使用端口进行隔离区通信的概念。实际实现需要更多的代码，稍后在页面上你会找到相关内容。

在主隔离区中创建一个 ReceivePort。SendPort 作为 ReceivePort 的一个属性会自动创建。
使用 Isolate.spawn() 生成工作隔离区
将 ReceivePort.sendPort 的引用作为第一条消息传递给工作隔离区。
在工作隔离区中创建另一个新的 ReceivePort。
将工作隔离区的 ReceivePort.sendPort 的引用作为第一条消息发送回主隔离区。
除了创建端口和设置通信之外，你还需要告诉端口在接收到消息时应该做什么。这可以通过在每个相应的 ReceivePort 上使用 listen 方法来完成。

通过主隔离区对工作隔离区 SendPort 的引用发送消息。
通过工作隔离区 ReceivePort 上的监听器接收并处理消息。这是你想要从主隔离区移出的计算被执行的地方。
通过工作隔离区对主隔离区 SendPort 的引用发送返回消息。
通过主隔离区 ReceivePort 上的监听器接收消息。
基本端口示例 Basic ports example
这个示例展示了如何设置一个长时间运行的工作隔离区，并实现它与主隔离区之间的双向通信。代码使用了一个发送 JSON 文本到新隔离区的例子，这个 JSON 文本将被解析和解码，然后发送回主隔离区。

这个示例旨在教授创建新隔离区所需的最少知识，该隔离区能够随时间发送和接收多条消息。
它没有涵盖生产软件中预期的重要功能部分，如错误处理、关闭端口和消息排序。
下一节的“稳健端口”示例涵盖了这些功能，并讨论了在缺少这些功能时可能出现的一些问题。

第一步：定义工作类

首先，为你的后台工作隔离区创建一个类。这个类包含了你需要实现的所有功能，包括：

生成一个隔离区。
向该隔离区发送消息。
让隔离区解码一些 JSON。
将解码后的 JSON 发送回主隔离区。
这个类公开了两个方法：一个用于生成工作隔离区，另一个用于处理向该工作隔离区发送消息。

本示例的后续部分将向你展示如何逐一填充类的方法。

class Worker {
  Future `<void>` spawn() async {
    // TODO: Add functionality to spawn a worker isolate.
  }

  void _handleResponsesFromIsolate(dynamic message) {
    // TODO: Handle messages sent back from the worker isolate.
  }

  static void _startRemoteIsolate(SendPort port) {
    // TODO: Define code that should be executed on the worker isolate.
  }

  Future `<void>` parseJson(String message) async {
    // TODO: Define a public method that can
    // be used to send messages to the worker isolate.
  }
}

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
第二步：生成工作隔离区

Worker.spawn 方法用于将创建工作隔离区并确保其能够接收和发送消息的代码组合在一起。

首先，创建一个 ReceivePort。这允许主隔离区接收从新生成的工作隔离区发送的消息。
接下来，向接收端口添加一个监听器，以处理工作隔离区将发送回的消息。传递给监听器的回调函数 _handleResponsesFromIsolate 将在第四步中介绍。
最后，使用 Isolate.spawn 生成工作隔离区。它期望两个参数：一个在工作隔离区上执行的函数（在第三步中介绍），以及接收端口的 sendPort 属性。
Future `<void>` spawn() async {
  final receivePort = ReceivePort();
  receivePort.listen(_handleResponsesFromIsolate);
  await Isolate.spawn(_startRemoteIsolate, receivePort.sendPort);
}
1
2
3
4
5
当在工作隔离区上调用回调函数（_startRemoteIsolate）时，receivePort.sendPort 参数将被传递给它作为参数。这是确保工作隔离区有方法将消息发送回主隔离区的第一步。

第三步：在工作隔离区上执行代码

在这一步中，你定义了 _startRemoteIsolate 方法，该方法被发送到工作隔离区并在其生成时执行。这个方法类似于工作隔离区的“主”方法。

首先，创建另一个新的 ReceivePort。这个端口用于接收来自主隔离区的未来消息。
接下来，将该端口的 SendPort 发送回主隔离区。
最后，向新的 ReceivePort 添加一个监听器。这个监听器处理主隔离区发送给工作隔离区的消息。
static void _startRemoteIsolate(SendPort port) {
  final receivePort = ReceivePort();
  port.send(receivePort.sendPort);

  receivePort.listen((dynamic message) async {
    if (message is String) {
      final transformed = jsonDecode(message);
      port.send(transformed);
    }
  });
}
1
2
3
4
5
6
7
8
9
10
11
工作隔离区的 ReceivePort 上的监听器解码从主隔离区传递的 JSON，然后将解码后的 JSON 发送回主隔离区。

这个监听器是主隔离区向工作隔离区发送消息的入口点。这是你唯一的机会告诉工作隔离区将来要执行什么代码。

第四步：在主隔离区上处理消息

最后，你需要告诉主隔离区如何处理从工作隔离区发送回主隔离区的消息。为此，你需要填充 _handleResponsesFromIsolate 方法。回想一下，在第二步中，我们曾提到将这个方法传递给 receivePort.listen 方法。

Future `<void>` spawn() async {
  final receivePort = ReceivePort();
  receivePort.listen(_handleResponsesFromIsolate);
  await Isolate.spawn(_startRemoteIsolate, receivePort.sendPort);
}
1
2
3
4
5
同时，请回想在第三步中，你曾向主隔离区发送了一个 SendPort。这个方法负责接收那个 SendPort，以及处理未来的消息（这些消息将是解码后的 JSON）。

首先，检查消息是否是 SendPort。如果是，将该端口分配给类的 _sendPort 属性，以便稍后可以用于发送消息。

接下来，检查消息是否是 Map<String, dynamic> 类型，这是解码后 JSON 的预期类型。如果是，使用你的应用程序特定的逻辑来处理该消息。在这个例子中，消息将被打印出来。

void _handleResponsesFromIsolate(dynamic message) {
  if (message is SendPort) {
    _sendPort = message;
    _isolateReady.complete();
  } else if (message is Map<String, dynamic>) {
    print(message);
  }
}
1
2
3
4
5
6
7
8
第五步：添加一个 completer 以确保隔离区已设置完毕

为了完成这个类，定义一个名为 parseJson 的公共方法，该方法负责向工作隔离区发送消息。它还需要确保在隔离区完全设置之前可以发送消息。为此，使用 Completer。

首先，添加一个名为 _isolateReady 的类级别属性，并将其类型设置为 Completer。
接下来，在 _handleResponsesFromIsolate 方法（在第四步中创建）中，如果消息是 SendPort，则在该 completer 上调用 complete() 方法。
最后，在 parseJson 方法中，在调用 _sendPort.send 之前添加 await _isolateReady.future。这确保了直到工作隔离区生成并将其 SendPort 发送回主隔离区之前，都无法向工作隔离区发送任何消息。
Future `<void>` parseJson(String message) async {
  await _isolateReady.future;
  _sendPort.send(message);
}
1
2
3
4
完整示例

import 'dart:async';
import 'dart:convert';
import 'dart:isolate';

void main() async {
  final worker = Worker();
  await worker.spawn();
  await worker.parseJson('{"key":"value"}');
}

class Worker {
  late SendPort _sendPort;
  final Completer `<void>` _isolateReady = Completer.sync();

  Future `<void>` spawn() async {
    final receivePort = ReceivePort();
    receivePort.listen(_handleResponsesFromIsolate);
    await Isolate.spawn(_startRemoteIsolate, receivePort.sendPort);
  }

  void _handleResponsesFromIsolate(dynamic message) {
    if (message is SendPort) {
      _sendPort = message;
      _isolateReady.complete();
    } else if (message is Map<String, dynamic>) {
      print(message);
    }
  }

  static void _startRemoteIsolate(SendPort port) {
    final receivePort = ReceivePort();
    port.send(receivePort.sendPort);

    receivePort.listen((dynamic message) async {
      if (message is String) {
        final transformed = jsonDecode(message);
        port.send(transformed);
      }
    });
  }

  Future `<void>` parseJson(String message) async {
    await _isolateReady.future;
    _sendPort.send(message);
  }
}

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
健壮端口示例 Robust ports example
前面的例子解释了设置具有双向通信的长寿命隔离区所需的基本构建块。正如所提到的，那个例子缺少一些重要特性，比如错误处理、在不再使用端口时关闭端口的能力，以及在某些情况下消息排序的不一致性。

这个例子在第一个例子的基础上进行了扩展，创建了一个具有这些额外特性以及更多特性的长寿命工作隔离区，并遵循了更好的设计模式。虽然这段代码与第一个例子有相似之处，但它并不是那个例子的扩展。

这个例子假设你已经熟悉使用 Isolate.spawn 和端口在隔离区之间建立通信，这在前面的例子中已经介绍过。

第一步：定义工作类

首先，为你的后台工作隔离区创建一个类。这个类包含了你所需的所有功能，包括：

生成一个隔离区。
向该隔离区发送消息。
让隔离区解码一些 JSON。
将解码后的 JSON 发送回主隔离区。
这个类公开了三个公共方法：一个用于创建工作隔离区，一个用于处理向该工作隔离区发送消息，还有一个用于在不再使用端口时关闭它们。

class Worker {
  final SendPort _commands;
  final ReceivePort _responses;

  Future<Object?> parseJson(String message) async {
    // TODO: Ensure the port is still open.
    _commands.send(message);
  }

  static Future `<Worker>` spawn() async {
    // TODO: Add functionality to create a new Worker object with a
    //  connection to a spawned isolate.
    throw UnimplementedError();
  }

  Worker._(this._commands, this._responses) {
    // TODO: Initialize main isolate receive port listener.
  }

  void _handleResponsesFromIsolate(dynamic message) {
    // TODO: Handle messages sent back from the worker isolate.
  }

  static void _handleCommandsToIsolate(ReceivePort rp, SendPort sp) async {
    // TODO: Handle messages sent back from the worker isolate.
  }

  static void _startRemoteIsolate(SendPort sp) {
    // TODO: Initialize worker isolate's ports.
  }
}

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
在这个例子中，SendPort 和 ReceivePort 实例遵循最佳命名约定，即它们根据主隔离区进行命名。从主隔离区通过 SendPort 发送给工作隔离区的消息称为命令，而发送回主隔离区的消息称为响应。

第二步：在 Worker.spawn 方法中创建 RawReceivePort

在生成隔离区之前，你需要创建一个 RawReceivePort，这是一个更低级别的 ReceivePort。使用 RawReceivePort 是一个推荐的模式，因为它允许你将隔离区的启动逻辑与隔离区上处理消息传递的逻辑分开。

在 Worker.spawn 方法中：

首先，创建 RawReceivePort。这个 ReceivePort 只负责接收来自工作隔离区的初始消息，这个初始消息将是一个 SendPort。
接下来，创建一个 Completer，它将指示隔离区何时准备好接收消息。当它完成时，它将返回一个包含 ReceivePort 和 SendPort 的记录。
然后，定义 RawReceivePort.handler 属性。这个属性是一个 Function?，其行为类似于 ReceivePort.listener。当此端口接收到消息时，将调用该函数。
在 handler 函数中，调用 connection.complete()。该方法期望一个包含 ReceivePort 和 SendPort 的记录作为参数。SendPort 是从工作隔离区发送的初始消息，它将在下一步中分配给类级别的 SendPort，名为 _commands。
然后，使用 ReceivePort.fromRawReceivePort 构造函数创建一个新的 ReceivePort，并将 initPort 传入。
class Worker {
  final SendPort _commands;
  final ReceivePort _responses;

  static Future `<Worker>` spawn() async {
    // Create a receive port and add its initial message handler.
    final initPort = RawReceivePort();
    final connection = Completer<(ReceivePort, SendPort)>.sync();
    initPort.handler = (initialMessage) {
      final commandPort = initialMessage as SendPort;
      connection.complete((
        ReceivePort.fromRawReceivePort(initPort),
        commandPort,
      ));
    };
// ···
  }

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
首先创建一个 RawReceivePort，然后再创建一个 ReceivePort，之后您可以在 ReceivePort.listen 上添加一个新的回调。相反，如果您直接创建一个 ReceivePort，那么您只能添加一个监听器，因为 ReceivePort 实现的是 Stream，而不是 BroadcastStream。

实际上，这允许您将隔离区的启动逻辑与设置通信完成后处理接收消息的逻辑分开。随着其他方法中逻辑的增长，这个好处将变得更加明显。

第三步：使用 Isolate.spawn 生成工作隔离区

这一步继续填充 Worker.spawn 方法。您将添加生成隔离区所需的代码，并从该类返回一个 Worker 实例。在这个例子中，Isolate.spawn 的调用被包裹在一个 try/catch 块中，这确保了如果隔离区启动失败，initPort 将被关闭，并且不会创建 Worker 对象。

首先，尝试在 try/catch 块中生成一个工作隔离区。如果生成工作隔离区失败，则关闭在上一步中创建的接收端口。传递给 Isolate.spawn 的方法将在后面的步骤中介绍。
接下来，等待 connection.future，并从它返回的记录中解构出发送端口和接收端口。
最后，通过调用 Worker 的私有构造函数并传入来自 completer 的端口来返回 Worker 实例。
class Worker {
  final SendPort _commands;
  final ReceivePort _responses;

  static Future `<Worker>` spawn() async {
    // Create a receive port and add its initial message handler
    final initPort = RawReceivePort();
    final connection = Completer<(ReceivePort, SendPort)>.sync();
    initPort.handler = (initialMessage) {
      final commandPort = initialMessage as SendPort;
      connection.complete((
        ReceivePort.fromRawReceivePort(initPort),
        commandPort,
      ));
    };
    // Spawn the isolate.
    try {
      await Isolate.spawn(_startRemoteIsolate, (initPort.sendPort));
    } on Object {
      initPort.close();
      rethrow;
    }

    final (ReceivePort receivePort, SendPort sendPort) =
        await connection.future;

    return Worker._(sendPort, receivePort);
  }

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
请注意，在这个例子中（与之前的例子相比），Worker.spawn 作为这个类的异步静态构造函数，是创建 Worker 实例的唯一方式。这简化了 API，使创建 Worker 实例的代码更加整洁。

第四步：完成隔离区设置过程

在这一步中，您将完成基本的隔离区设置过程。这几乎完全与之前的例子相对应，并没有新的概念。只是代码被拆分成更多的方法，这是一种设计实践，为后续在这个例子中添加更多功能做好了准备。要深入了解设置隔离区的基本过程，请参阅基本端口示例。

首先，创建从 Worker.spawn 方法返回的私有构造函数。在构造函数体中，为主隔离区使用的接收端口添加一个监听器，并向该监听器传递一个尚未定义的方法，该方法名为 _handleResponsesFromIsolate。

class Worker {
  final SendPort _commands;
  final ReceivePort _responses;
// ···
  Worker._(this._responses, this._commands) {
    _responses.listen(_handleResponsesFromIsolate);
  }
1
2
3
4
5
6
7
接下来，在 _startRemoteIsolate 方法中添加负责初始化工作隔离区端口的代码。回想一下，这个方法在 Worker.spawn 方法中被传递给 Isolate.spawn，并且它将以主隔离区的 SendPort 作为参数传递。

创建一个新的 ReceivePort。
将该端口的 SendPort 发送回主隔离区。
调用一个名为 _handleCommandsToIsolate 的新方法，并将新创建的 ReceivePort 和主隔离区的 SendPort 作为参数传递。
static void _startRemoteIsolate(SendPort sendPort) {
  final receivePort = ReceivePort();
  sendPort.send(receivePort.sendPort);
  _handleCommandsToIsolate(receivePort, sendPort);
}
1
2
3
4
5
接下来，添加 _handleCommandsToIsolate 方法，该方法负责从主隔离区接收消息，在工作隔离区上解码 JSON，并将解码后的 JSON 作为响应发送回去。

首先，在工作隔离区的 ReceivePort 上声明一个监听器。
在添加到监听器的回调中，尝试在 try/catch 块中解码从主隔离区传递的 JSON。如果解码成功，则将解码后的 JSON 发送回主隔离区。
如果出现错误，则发送一个 RemoteError 回去。
static void _handleCommandsToIsolate(
    ReceivePort receivePort, SendPort sendPort) {
  receivePort.listen((message) {
    try {
      final jsonData = jsonDecode(message as String);
      sendPort.send(jsonData);
    } catch (e) {
      sendPort.send(RemoteError(e.toString(), ''));
    }
  });
}
1
2
3
4
5
6
7
8
9
10
11
接下来，添加 _handleResponsesFromIsolate 方法的代码。

首先，检查消息是否为 RemoteError，如果是，则应抛出该错误。
否则，打印消息。在后续步骤中，您将更新此代码以返回消息而不是打印它们。
void _handleResponsesFromIsolate(dynamic message) {
  if (message is RemoteError) {
    throw message;
  } else {
    print(message);
  }
}
1
2
3
4
5
6
7
最后，添加 parseJson 方法，这是一个公共方法，允许外部代码将 JSON 发送到工作隔离区进行解码。

Future<Object?> parseJson(String message) async {
  _commands.send(message);
}
1
2
3
下一步，您将更新这个方法。

第五步：同时处理多条消息

目前，如果您快速地向工作隔离区发送消息，隔离区将按照完成顺序而不是发送顺序发送解码后的 JSON 响应。您无法确定哪个响应对应于哪条消息。

在这一步中，您将解决这个问题，通过为每个消息分配一个 id，并使用 Completer 对象来确保当外部代码调用 parseJson 时，返回给调用者的响应是正确的响应。

首先，向 Worker 添加两个类级别的属性：

Map<int, Completer<Object?>> _activeRequests
int _idCounter
class Worker {
  final SendPort _commands;
  final ReceivePort _responses;
  final Map<int, Completer<Object?>> _activeRequests = {};
  int _idCounter = 0;
1
2
3
4
5
_activeRequests 映射将发送给工作隔离区的消息与 Completer 关联起来。_activeRequests 中使用的键来自 _idCounter，当发送更多消息时，该计数器会增加。

接下来，更新 parseJson 方法，在向工作隔离区发送消息之前创建 completer。

首先，创建一个 Completer。
然后，增加 _idCounter 的值，以便每个 Completer 都与一个唯一的数字关联。
在 _activeRequests 映射中添加一个条目，其中键为 _idCounter 的当前数字，completer 为值。
将消息和 id 一起发送给工作隔离区。由于您只能通过 SendPort 发送一个值，因此将 id 和消息包装在一个记录中。
最后，返回 completer 的 future，该 future 最终将包含来自工作隔离区的响应。
Future<Object?> parseJson(String message) async {
  final completer = Completer<Object?>.sync();
  final id = _idCounter++;
  _activeRequests[id] = completer;
  _commands.send((id, message));
  return await completer.future;
}
1
2
3
4
5
6
7
您还需要更新 _handleResponsesFromIsolate 和 _handleCommandsToIsolate 以处理这个系统。

在 _handleCommandsToIsolate 中，您需要考虑到消息是一个包含两个值的记录，而不仅仅是 json 文本。通过从消息中解构这些值来实现这一点。

然后，在解码 json 之后，更新对 sendPort.send 的调用，以使用记录将 id 和解码后的 json 一起发送回主隔离区。

static void _handleCommandsToIsolate(
    ReceivePort receivePort, SendPort sendPort) {
  receivePort.listen((message) {
    final (int id, String jsonText) = message as (int, String); // New
    try {
      final jsonData = jsonDecode(jsonText);
      sendPort.send((id, jsonData)); // Updated
    } catch (e) {
      sendPort.send((id, RemoteError(e.toString(), '')));
    }
  });
}
1
2
3
4
5
6
7
8
9
10
11
12
最后，更新 _handleResponsesFromIsolate。

首先，再次从消息参数中解构出 id 和响应。
然后，从 _activeRequests 映射中删除与此请求对应的 completer。
最后，不要抛出错误或打印解码后的 json，而是完成 completer，并传入响应。当这个 completer 完成时，响应将被返回给在主隔离区上调用 parseJson 的代码。
void _handleResponsesFromIsolate(dynamic message) {
  final (int id, Object? response) = message as (int, Object?); // New
  final completer = _activeRequests.remove(id)!; // New

  if (response is RemoteError) {
    completer.completeError(response); // Updated
  } else {
    completer.complete(response); // Updated
  }
}
1
2
3
4
5
6
7
8
9
10
第六步：添加关闭端口的功能

当您的代码不再使用隔离区时，您应该关闭主隔离区和工作隔离区上的端口。

首先，添加一个类级别的布尔值来跟踪端口是否已关闭。
然后，添加 Worker.close 方法。在该方法中：
将 _closed 更新为 true。
向工作隔离区发送一条最终消息。这条消息是一个字符串，内容为“shutdown”，但您可以根据需要选择任何对象。您将在下一个代码段中使用它。
最后，检查 _activeRequests 是否为空。如果为空，则关闭主隔离区上名为 _responses 的 ReceivePort。
class Worker {
  bool _closed = false;
// ···
  void close() {
    if (!_closed) {
      _closed = true;
      _commands.send('shutdown');
      if (_activeRequests.isEmpty) _responses.close();
      print('--- port closed --- ');
    }
  }
1
2
3
4
5
6
7
8
9
10
11
接下来，您需要在工作隔离区中处理“shutdown”消息。在 _handleCommandsToIsolate 方法中添加以下代码。此代码将检查消息是否是一个内容为“shutdown”的字符串。如果是，它将关闭工作隔离区的 ReceivePort，并返回。

static void _handleCommandsToIsolate(
  ReceivePort receivePort,
  SendPort sendPort,
) {
  receivePort.listen((message) {
    // New if-block.
    if (message == 'shutdown') {
      receivePort.close();
      return;
    }
    final (int id, String jsonText) = message as (int, String);
    try {
      final jsonData = jsonDecode(jsonText);
      sendPort.send((id, jsonData));
    } catch (e) {
      sendPort.send((id, RemoteError(e.toString(), '')));
    }
  });
}

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
最后，您应该添加代码来检查在尝试发送消息之前端口是否已关闭。在 Worker.parseJson 方法中添加一行代码。

Future<Object?> parseJson(String message) async {
  if (_closed) throw StateError('Closed'); // New
  final completer = Completer<Object?>.sync();
  final id = _idCounter++;
  _activeRequests[id] = completer;
  _commands.send((id, message));
  return await completer.future;
}
1
2
3
4
5
6
7
8
完整代码

import 'dart:async';
import 'dart:convert';
import 'dart:isolate';

void main() async {
  final worker = await Worker.spawn();
  print(await worker.parseJson('{"key":"value"}'));
  print(await worker.parseJson('"banana"'));
  print(await worker.parseJson('[true, false, null, 1, "string"]'));
  print(
      await Future.wait([worker.parseJson('"yes"'), worker.parseJson('"no"')]));
  worker.close();
}

class Worker {
  final SendPort _commands;
  final ReceivePort _responses;
  final Map<int, Completer<Object?>> _activeRequests = {};
  int _idCounter = 0;
  bool _closed = false;

  Future<Object?> parseJson(String message) async {
    if (_closed) throw StateError('Closed');
    final completer = Completer<Object?>.sync();
    final id = _idCounter++;
    _activeRequests[id] = completer;
    _commands.send((id, message));
    return await completer.future;
  }

  static Future `<Worker>` spawn() async {
    // Create a receive port and add its initial message handler
    final initPort = RawReceivePort();
    final connection = Completer<(ReceivePort, SendPort)>.sync();
    initPort.handler = (initialMessage) {
      final commandPort = initialMessage as SendPort;
      connection.complete((
        ReceivePort.fromRawReceivePort(initPort),
        commandPort,
      ));
    };

    // Spawn the isolate.
    try {
      await Isolate.spawn(_startRemoteIsolate, (initPort.sendPort));
    } on Object {
      initPort.close();
      rethrow;
    }

    final (ReceivePort receivePort, SendPort sendPort) =
        await connection.future;

    return Worker._(receivePort, sendPort);
  }

  Worker._(this._responses, this._commands) {
    _responses.listen(_handleResponsesFromIsolate);
  }

  void _handleResponsesFromIsolate(dynamic message) {
    final (int id, Object? response) = message as (int, Object?);
    final completer = _activeRequests.remove(id)!;

    if (response is RemoteError) {
      completer.completeError(response);
    } else {
      completer.complete(response);
    }

    if (_closed && _activeRequests.isEmpty) _responses.close();
  }

  static void _handleCommandsToIsolate(
    ReceivePort receivePort,
    SendPort sendPort,
  ) {
    receivePort.listen((message) {
      if (message == 'shutdown') {
        receivePort.close();
        return;
      }
      final (int id, String jsonText) = message as (int, String);
      try {
        final jsonData = jsonDecode(jsonText);
        sendPort.send((id, jsonData));
      } catch (e) {
        sendPort.send((id, RemoteError(e.toString(), '')));
      }
    });
  }

  static void _startRemoteIsolate(SendPort sendPort) {
    final receivePort = ReceivePort();
    sendPort.send(receivePort.sendPort);
    _handleCommandsToIsolate(receivePort, sendPort);
  }

  void close() {
    if (!_closed) {
      _closed = true;
      _commands.send('shutdown');
      if (_activeRequests.isEmpty) _responses.close();
      print('--- port closed --- ');
    }
  }
}

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
Null safety
https://dart.cn/null-safety

健全的空安全
迁移到空安全
深入理解空安全
非健全的空安全
空安全常见问题和解答
Dffective Dart 高效指南
https://dart.cn/effective-dart

概述
代码风格
文档
用法示例 API 设计
核心库
概览
Dart 拥有丰富的核心库集合，为许多日常编程任务提供了基本要素，例如处理对象集合（dart:collection）、进行计算（dart:math）以及编码/解码数据（dart:convert）。常用包中还提供了额外的 API。

库概览 Library tour
以下指南介绍了如何使用 Dart 核心库的主要功能。它们仅提供了概述，绝非详尽无遗。每当您需要有关库或其成员的更多详细信息时，请查阅 Dart API 参考。

dart:core
内置类型、集合和其他核心功能。此库会自动导入到每个 Dart 程序中。

dart:async
支持异步编程，包含如 Future 和 Stream 等类。

dart:math
数学常量和函数，以及随机数生成器。

dart:convert
用于在不同数据表示形式之间进行转换的编码器和解码器，包括 JSON 和 UTF-8。

dart:io
适用于可以使用 Dart VM 的程序（包括 Flutter 应用、服务器和命令行脚本）的 I/O。

dart:html
基于浏览器的应用的 DOM 和其他 API。

如前所述，这些页面只是概述；它们仅涵盖少数几个 dart:* 库，并不涉及第三方库。

要了解 Dart 在不同平台上支持的所有库的概述，请查看以下多平台库、原生平台库和 Web 平台库列表。

在其他地方查找库信息的地方是 pub.dev 网站和 Dart Web 开发人员库指南。您可以在 Dart API 参考或（如果您使用的是 Flutter）Flutter API 参考中找到所有 dart:* 库的 API 文档。

要了解有关 Dart 语言的更多信息，请查阅语言文档和示例。

跨平台库 Multi-platform libraries
以下表格列出了适用于所有 Dart 平台的 Dart 核心库。

Library	Notes
dart:core
每个 Dart 程序的内置类型、集合和其他核心功能。
dart:async, package:async
支持异步编程，包括 和 Stream等类Future。
package:async在 和 Stream 类型周围Future提供其他实用程序。
dart:collection, package:collection
补充了dart:core中集合支持的类和实用程序。
package:collection提供了更多集合实现以及用于操作集合的函数。
dart:convert, package:convert
编码器和解码器，用于在不同的数据表示形式（包括 JSON 和 UTF-8）之间进行转换。
package:convert 提供额外的编码器和解码器。
dart:developer
与开发人员工具（如调试器和检查器）进行交互。	仅限本机 JIT 和开发 JavaScript 编译器
dart:math
数学常数和函数，以及随机数生成器。
dart:typed_data, package:typed_data
有效处理固定大小的数据（例如，无符号 8 字节整数）和 SIMD 数值类型的列表。
package:typed_data 提供处理类型化数据的更多类和函数。
原生平台库 Native platform libraries
下表列出了适用于 Dart 原生平台 （AOT 和 JIT 编译的代码）。

Library	Notes
dart:ffi, package:ffi
允许 Dart 代码使用本机 C API 的外部函数接口。
package:ffi 包含实用程序，包括支持转换 Dart 字符串和 C 字符串。
dart:io, package:io
对非 Web 应用程序的文件、套接字、HTTP 和其他 I/O 支持。
package:io 提供的功能包括对 ANSI 颜色、文件复制和标准退出代码的支持。
dart:isolate
使用隔离的并发编程：类似于线程的独立工作线程。
dart:mirrors
支持内省和动态调用的基本反射。	实验的仅限原生 JIT（不是 Flutter）
Web 平台库 Web platform libraries
下表列出了适用于 Dart Web 平台 （代码编译为 JavaScript）。

Library	Notes
dart:html
用于基于 Web 的应用程序的 HTML 元素和其他资源。
dart:indexed_db
支持索引的客户端键值存储。
dart:js， dart:js_util， package:js
dart:js_util 为互操作性提供低级基元;通常，建议使用更高 package:js 级别的注释，因为它们有助于更简洁地表达互操作性。
有关详细信息，请参阅 JavaScript 互操作性。
不要直接使用 dart:js ;不推荐直接使用这些旧版 API。
dart:svg
可缩放的矢量图形。
dart:web_audio
浏览器中的高保真音频编程。
dart:web_gl
浏览器中的 3D 编程。
Packages
https://dart.cn/guides/packages

如何使用 package
常用 package 介绍
创建 package
发布 package
设置 package 介绍页
Package 参考资料
参考
1、《Flutter实战·第二版》
2、Dart 官网 中文
3、Dart 官网 英文
