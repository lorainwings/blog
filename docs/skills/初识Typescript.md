# 初识 Typescript

TypeScript 发展至今，已经成为大型项目的标配，其提供的静态类型系统，大大增强了代码的可读性以及可维护性；本文将拆解一下 Typescript 的入门知识点


## 基础类型

基础类型的分类按照以下几个部分:

- 对象的类型
- 数组的类型
- 函数的类型

### 对象的类型

对象的类型是使用接口表示的;

TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述

```typescript
interface Person {
  //普通属性
  name: string;
  //可选属性
  age?: number;
  /*  只读属性,注意只读的约束生效于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候,例如下面的时候就已经生效了,缺失了gender属性
   *   let tom: Person = {
   *       name: 'Tom',
   *       gender: 'male'
   *   };
   */
  readonly gender: string;
  //任意属性,需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性(即此处的any如果为string,那么Person所有的属性应该为string)
  [propName: string]: any;
}
```

### 数组的类型

Typescript 内置了很多对象的类型, 可以点击[内置对象参考](https://ts.xcatliu.com/basics/built-in-objects.html)查看

```ts
//类型+[]表示法
let numberArr: number[] = [1, 2, 3];
//泛型表示法
let stringArr: Array<string> = ["name", "age"];
//接口表示法
interface BooleanArr {
  [index: number]: boolean;
}
let boolArr: BooleanArr = [true, false];
//类数组对象的如何表示(内置对象还有IArguments,NodeList,HTMLCollection等等)
function fun(): void {
  let args: IArguments = argument;
}
```

---

### 函数的类型

在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）

```ts
/* 
 * 函数声明表示法(注意，输入多余的（或者少于要求的）参数，是不被允许的)
 * 使用 ?:类型来表示可选参数(可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了)
 * 参数默认值使用 变量:类型=值来表示(TypeScript 会将添加了默认值的参数识别为可选参数)
 */
function sum(x: number, y: number = 3, z?: number): number {
  return x + y + z;
}
//函数表达式
let mySum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
//接口表示法
interface Search {
  (source: string, subString: string): boolean;
}
let myFunc: Search = function (source: string, subString: string): boolean {
  return source.search(subString) !== -1;
};
```

在 ts 中的剩余参数也需要加上类型

```ts
let arr: any[] = [];
function sum(arr: any[], ...items: any[]): number {
  return arr.concat(items);
}
```

在 ts 中,支持函数的重载,我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。

注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面

```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}
```

## 类型断言

::: tip 语法:
<类型>值 或 值 as 类型
:::

类型断言主要和联合类型搭配使用

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法

而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型的属性或方法，比如：

```ts
function getLength(something: string | number): number {
  if (something.length) {
    return something.length;
  } else {
    return something.toString().length;
  }
}

// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'string | number'.
// Property 'length' does not exist on type 'number'.
// index.ts(3,26): error TS2339: Property 'length' does not exist on type 'string | number'.
// Property 'length' does not exist on type 'number'.
```

上例中，获取 something.length 的时候会报错。
此时可以使用类型断言，将 something 断言成 string：

```ts
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
```

类型断言的用法如上，在需要断言的变量前加上 `<Type>` 即可。
类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：

```ts
function toBoolean(something: string | number): boolean {
  return <boolean>something;
}

// index.ts(2,10): error TS2352: Type 'string | number' cannot be converted to type 'boolean'.
// Type 'number' is not comparable to type 'boolean'.
```

## 类型声明文件

### 自定义类型声明文件

使用 declare 关键字来定义自定义的类型 ,帮助 TypeScript 判断我们传入的参数类型对不对：

```ts
declare var jQuery: (selector: string) => any;

jQuery("#foo");
```

### 使用@types

Typescript官方提供了`@types`工具用来帮助引入常用的类型声明文件;可以通过
[@types](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/)来了解更多

`@types` 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：

npm install @types/jquery --save-dev

同时可以在[TypeSearch](http://microsoft.github.io/TypeSearch/)搜索你需要的声明文件。


## 内置对象

### 内置对象介绍

JavaScript 中有很多内置对象,它们可以直接在 TypeScript 中当做定义好了的类型,详细了解点击[内置对象介绍](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)。

内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。

### ECMAScript 的内置对象

ECMAScript 标准提供的内置对象有：
Boolean、Error、Date、RegExp 等。
我们可以在 TypeScript 中将变量定义为这些类型：

```ts
let b: Boolean = new Boolean(1);
let e: Error = new Error("Error occurred");
let d: Date = new Date();
let r: RegExp = /[a-z]/;
```

### DOM 和 BOM 的内置对象

提供的内置对象有：
Document、HTMLElement、Event、NodeList 等。
TypeScript 中会经常用到这些类型：

```ts
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll("div");
document.addEventListener("click", function (e: MouseEvent) {
  // Do something
});
```

更多的内置对象，可以查看 [MDN 的文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)。

而他们的定义文件，则在 [TypeScript 核心库的定义文件](https://github.com/Microsoft/TypeScript/tree/master/src/lib)中。

### 用 TypeScript 写 Node.js

Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：

```nodejs
npm install @types/node --save-dev
```

## 类型别名

使用 type 用来给一个类型起个新名字

```ts
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}
```

## 字符串字面量类型

字符串字面量类型用来约束取值只能是某几个字符串中的一个。

```ts
type EventNames = "click" | "scroll" | "mousemove";
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById("hello"), "scroll"); // 没问题
handleEvent(document.getElementById("world"), "dbclick"); // 报错，event 不能为 'dbclick'

// index.ts(7,47): error TS2345: Argument of type '"dbclick"' is not assignable to parameter of type 'EventNames'.
```


## 元组

### 元组概念

数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

```ts
// 定义一对值分别为 string 和 number 的元组：

let xcatliu: [string, number] = ["Xcat Liu", 25];
```

### 元组赋值

当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。

```ts
let xcatliu: [string, number];
xcatliu = ["Xcat Liu", 25];
let xcatliu: [string, number] = ["Xcat Liu"];

// index.ts(1,5): error TS2322: Type '[string]' is not assignable to type '[string, number]'.
//   Property '1' is missing in type '[string]'.
let xcatliu: [string, number];
xcatliu = ["Xcat Liu"];
xcatliu[1] = 25;

// index.ts(2,1): error TS2322: Type '[string]' is not assignable to type '[string, number]'.
//   Property '1' is missing in type '[string]'.
```

### 元组越界

当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：

```ts
let xcatliu: [string, number];
xcatliu = ["Xcat Liu", 25];
xcatliu.push("http://xcatliu.com/");
xcatliu.push(true);

// index.ts(4,14): error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// Type 'boolean' is not assignable to type 'number'.
```

---

## 枚举类型

枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。

### 枚举概念

枚举使用 enum 关键字来定义,注意枚举项的值可以手动赋值为小数,但步进失始终为 1

```ts
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

// 以上编译结果为
// (注意普通变量 var a = 1 返回undefined,
//  但是对象的赋值 {}['Sun'] = 0 返回 0)

var Days;
(function (Days) {
  Days[(Days["Sun"] = 0)] = "Sun";
  Days[(Days["Mon"] = 1)] = "Mon";
  Days[(Days["Tue"] = 2)] = "Tue";
  Days[(Days["Wed"] = 3)] = "Wed";
  Days[(Days["Thu"] = 4)] = "Thu";
  Days[(Days["Fri"] = 5)] = "Fri";
  Days[(Days["Sat"] = 6)] = "Sat";
})(Days || (Days = {}));
```

枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：

```ts
console.log(Days[0]); // Sun
console.log(Days["Sat"]); // 6
```

#### 手动赋值

我们也可以给枚举项手动赋值：(未手动赋值的枚举项会接着上一个枚举项递增)

```ts
enum Days {
  Sun = 7,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
```

如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的：

```ts
enum Days {
  Sun = 3,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log(Days["Sun"] === 3); // true
console.log(Days["Wed"] === 3); // true
console.log(Days[3] === "Sun"); // false
console.log(Days[3] === "Wed"); // true
```

上面的例子中，递增到 3 的时候与前面的 Sun 的取值重复了，但是 TypeScript 并没有报错，导致 Days[3] 的值先是 "Sun"，而后又被 "Wed" 覆盖了。

---

## Typescript 类

### 类有三种修饰符

public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的

private 修饰的属性或方法是私有的，不能在声明它的类的外部访问(实例及子类)

protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

### 抽象类(abstract)

抽象类是不允许被实例化的,抽象类中的抽象方法必须被子类实现

```ts
//正确示例
abstract class Animal {
  public name: string; //此处加上类的类型
  public constructor(name: string) {
    this.name = name;
  }
  public abstract sayHi(): string;
}

class Cat extends Animal {
  public sayHi(): string {
    console.log(`Meow, My name is ${this.name}`);
  }
}

let cat = new Cat("Tom");
```


## 类与接口

一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性

### 接口的用途

- 描述对象的形状
- 对多个类的相似的行为进行抽象

### 类抽象为接口

::: warning 注意
类可以实现多个接口
:::

```ts
//抽象出来的行为
interface Alarm {
  alert(): void;
}
interface Light {
    lightOn();
    lightOff();
}
class Door {

}
class SecurityDoor extends Door implements Alarm {
  alert(): void {
    console.log('SecurityDoor alert');
  }
}
// 实现多个接口使用,分开
class Car implements Alarm, Light {
  alert(): void {
    console.log('Car alert');
  }
  lightOn() {
        console.log('Car light on');
  }
  lightOff() {
          console.log('Car light off');
  }
}
```

### 接口可以继承接口

```ts
interface Alarm {
  alert();
}

interface LightableAlarm extends Alarm {
  lightOn();
  lightOff();
}
```

### 接口也可以继承类

```ts
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
```

### 混合类型

接口可以定义一个函数需要符合的形状：

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};
```

有时候，一个函数还可以有自己的属性和方法：

```ts
interface Counter {
  (start: number): string; // 需要返回的函数自己的实现
  interval: number; // 函数的属性
  reset(): void; // 函数的方法
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

---

## 泛型

泛型（Generics）是指在定义`函数`、`接口`或`类`的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

### 具有缺陷的示例

```ts
function createArray(length: number, value: any): Array<any> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray(3, "x"); // ['x', 'x', 'x']
```

该案例具有一定的缺陷,这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确的定义返回值的类型; `Array<any>` 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 value 的类型。这时候，泛型就派上用场了

### 函数泛型的使用方式

```ts
function createArray<T>(lenth: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
//  ['x', 'x', 'x']
let result: Array<string> = createArray<string>(3, "x");
```

### 多个类型参数

泛型可以一次定义多个类型参数;

```ts
function exchange<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
exchange<string, number>(['name', 18]); // [18, 'name']
```

### 泛型约束(泛型 extends 接口)

保证类型的参数必须包含某属性等

- 通过接口约束

```ts
interface Lengthwise {
  length: number;
}
// 规定T必须包含length属性
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // 需要使用必须包含length的属性
  return arg;
}
```

- 多个类型参数间互相约束

```ts
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, { b: 10, d: 20 });
```

### 泛型接口

- 第一种使用方式

```ts
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc;
createArray = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};

createArray(3, "x"); // ['x', 'x', 'x']
```

- 第二种使用方式

  此时在使用泛型接口的时候，需要定义泛型的类型

```ts
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc<any>;
createArray = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};

createArray(3, "x"); // ['x', 'x', 'x']
```

### 泛型类

```ts
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

### 泛型参数默认值

在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。

```ts
function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
```

### 泛型的定义、使用(摘至网络)

使用泛型可以创建泛型函数、泛型接口，泛型类

- 使用泛型变量

  ```ts
  //泛型变量的使用
  function identity<T>(arg: T): T {
    console.log(typeof arg);
    return arg;
  }
  let output1 = identity<string>("myString");
  let output2 = identity("myString");
  let output3: number = identity<number>(100);
  let output4: number = identity(200);

  //使用集合的泛型
  function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
  }
  loggingIdentity([1, 2, 3]);
  ```

- 定义泛型函数

  注意: 变量的类型需要用{}来表示

  ```ts
  //泛型函数
  function identity<T>(arg: T): T {
    return arg;
  }
  let myIdentity: { <T>(arg: T): T } = identity;
  ```

- 定义泛型接口

  ```ts
  //泛型接口
  interface GenericIdentityFn<T> {
    (arg: T): T;
  }
  function identity<T>(arg: T): T {
    return arg;
  }
  let myIdentity: GenericIdentityFn<number> = identity;
  ```

- 定义泛型类

  ```ts
  //泛型类
  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
  }
  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) {
    return x + y;
  };
  console.info(myGenericNumber.add(2, 5));
  let stringNumberic = new GenericNumber<string>();
  stringNumberic.zeroValue = "abc";
  stringNumberic.add = function (x, y) {
    return `${x}--${y}`;
  };
  console.info(stringNumberic.add("张三丰", "王小明"));
  ```

## 附录

为了保证后面的学习演示需要安装下 ts-node，这样后面的每个操作都能直接运行看到输出的结果。

```sh
npm install -D ts-node
```

后面自己在练习的时候可以这样使用

```sh
npx ts-node src/learn_basic_types.ts
npx ts-node 脚本路径
```
