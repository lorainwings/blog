# 读你不知道的 JS

## 前言

本文是笔者在阅读《你不知道的 JS》的过程中的一些记录

## 作用域

JS 语言采用的是词法作用域(静态作用域), 而对应的作用域类型还有动态作用域

### 词法作用域

词法作用域意味着作用域是由书写代码时函数声明的位置来决定的。编译的词法分析阶段 基本能够知道全部标识符在哪里以及是如何声明的，从而能够预测在执行过程中如何对它 们进行查找。

### 作用域查找

JS 引擎在作用域中查找变量的过程中, 有两种查找方式:

> LHS(Left Hand Side)左侧查找: 变量出现在赋值操作的左侧时进行 LHS 查询

> RHS(Right Hand Side)右侧查找: 变量出现在赋值操作的右侧时进行 RHS 查询

在 ES5 中实现块级作用域可以使用`try{undefined()}catch(){}`, catch 后面的作用域是一个独立的作用域

`with`中通过`var`关键词声明的变量会被添加到 `with` 所处的函数作 用域中(不在 with 内)。

### 欺骗词法

词法作用域完全由写代码期间函数所声明的位置来定义，如果需要运行时来“修
改”(也可以说欺骗)词法作用域使用下面几种方式:

- eval

eval 的代码是以动态形式插入进来，并对词法作用域的环境进行修改的。引擎只会如往常地进行词法作用域查找。

- with

with 声明实际上是根据你传递给它的对象凭空创建了一个全新的词法作用域

### 闭包

无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用 域的引用，无论在何处执行这个函数都会使用闭包。

在定时器、事件监听器、 Ajax 请求、跨窗口通信、Web Workers 或者任何其他的异步(或者同步)任务中，只要使 用了回调函数，实际上就是在使用闭包!

严格来讲, 闭包必须在原始词法作用域以外被调用

```js
// 不是闭包
var a = 2;
(function IIFE() {
  console.log(a);
})();
```

## this 绑定规则

在理解 this 的绑定过程之前，首先要理解`调用位置`, 调用位置就是函数在代码中被调用的 位置(而不是声明的位置)。只有仔细分析调用位置才能回答这个问题:这个 this 到底引 用的是什么?

在调用位置看函数如何被调用的, 即采用的下面哪种绑定规则, 才能得出 this 引用的是什么;

### 默认绑定

独立函数调用。可以把这条规则看作是无法应用其他规则时的默认规则。如果**函数体**处于非严格模式下默认规则的 `this` 指向`全局对象`, 否则默认规则的 `this` 指向`undefined`

例如: 在下面的代码中，foo() 是直接使用不带任何修饰的函数引用进行调用的，因此只能使用 默认绑定，无法应用其他规则。

```js
function foo() {
  console.log(this.a);
}
var a = 2;
foo(); // 2
```

```js
function foo() {
  "use strict";
  console.log(this.a);
}
var a = 2;
foo(); // TypeError: this is undefined
```

### 隐式绑定

当函 数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。

::: warning 注意
对象属性引用链中只有上一层或者说最后一层在调用位置中起作用
:::

- 隐式绑定

下面的例子中, 调用位置会使用 obj 上下文来引用函数, 调用 foo() 时 this 被绑定到 obj

```js
function foo() {
  console.log(this.a);
}
var obj = { a: 2, foo: foo };
obj.foo(); // 2
```

- 隐式丢失

:::warning
回调函数丢失 this 绑定是非常常见的。除此之外，还有一种情 况 this 的行为会出乎我们意料:调用回调函数的函数可能会修改 this
:::

下面的例子, 虽然 bar 是 obj.foo 的一个引用，但是实际上，它引用的是 foo 函数本身，因此此时的 bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定

```js
function foo() {
  console.log(this.a);
}
var obj = { a: 2, foo: foo };
var bar = obj.foo; // 函数别名!
var a = "oops, global"; // a 是全局对象的属性 bar(); // "oops, global"
```

### 显式绑定

显式绑定即使用`call`或者`apply`方法强行将 this 绑定到传入的对象上, 显式绑定还包括`硬绑定`和`API调用的上下文`

```js
function foo() {
  console.log(this.a);
}
var obj = { a: 2 };
foo.call(obj); // 2
```

- 硬绑定

:::tip 提示
ES 中已经内置了硬绑定函数`bind()`, 会返回一个硬编码的新函数，它会把你指定的参数设置为 this 的上下文并调用 原始函数。
:::

创建一个可以重复使用的辅助函数:

```js
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
// 简单的辅助绑定函数
function bind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments);
  };
}

var obj = { a: 2 };
var bar = bind(foo, obj);
var b = bar(3); // 2 3
console.log(b); // 5
```

- API 执行上下文

第三方库的许多函数，以及 JavaScript 语言和宿主环境中许多新的内置函数，都提供了一 个可选的参数，通常被称为“上下文”(context)，其作用和 bind(..) 一样，确保你的回调 函数使用指定的 this。

例如: `forEach(fn,[thisArg])` 第二个参数就是 this 的绑定值;

### New 绑定

在 JavaScript 中，构造函数只是一些 使用 new 操作符时被调用的函数。它们并不会属于某个类，也不会实例化一个类。实际上， 它们甚至都不能说是一种特殊的函数类型，它们只是被 new 操作符调用的普通函数而已。JS 中实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用”。

1. 创建一个全新的对象。
2. 这个新对象会被执行[[Prototype]]连接。
3. 这个新对象会绑定到函数调用的 this。
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。

```js
function foo(a) {
  this.a = a;
}
var bar = new foo(2);
console.log(bar.a); // 2
```

### 绑定优先级

::: tip 优先级
绑定的优先级: new 绑定 > 显式绑定 > 隐式绑定 > 默认绑定
:::

```js
function foo(v) {
  this.a = v;
}
var obj1 = { foo: foo };
var obj2 = {};
obj1.foo(2);
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3
// 此处已经得出 显式绑定 > 隐式绑定

var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a); // 4
// 此处已经得出 new绑定 > 隐式绑定
```

```js
function foo(v) {
  this.a = v;
}
var obj1 = { foo: foo };
var obj2 = { a: 222 };

const baz = new (obj1.foo.bind(obj2))(333);
console.log(baz.a); //333
// 此处可以得出 new绑定 > 显式绑定
```

### 判断规则

判断 this 现在我们可以根据优先级来判断函数在某个调用位置应用的是哪条规则。可以按照下面的
顺序来进行判断:

1. 函数是否在 new 中调用(new 绑定)?如果是的话 this 绑定的是新创建的对象。
   var bar = new foo()
2. 函数是否通过 call、apply(显式绑定)或者硬绑定调用?如果是的话，this 绑定的是 指定的对象。
   var bar = foo.call(obj2)
3. 函数是否在某个上下文对象中调用(隐式绑定)?如果是的话，this 绑定的是那个上 下文对象。
   var bar = obj1.foo()
4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined，否则绑定 到全局对象。
   var bar = foo()
   就是这样。对于正常的函数调用来说，理解了这些知识你就可以明白 this 的绑定原理了。

## 例外情况

- this 被忽略

当把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind, 值被忽略, 变成默认绑定;
其实更**安全**的做法是通过`Object.create(null)`作为忽略时候的参数

```js
function foo(a, b) {
  console.log("a:" + a + ", b:" + b);
}
// 我们的 DMZ 空对象
var ø = Object.create(null); // 把数组展开成参数
foo.apply(ø, [2, 3]); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind(ø, 2);
bar(3); // a:2, b:3
```

- 间接引用

创建一个函数的“间接引用”，在这 种情况下，调用这个函数会应用默认绑定规则。

```js
function foo() {
  console.log(this.a);
}
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
o.foo(); // 3
(p.foo = o.foo)(); // 2
```

- 箭头函数

箭头函数不使用 `this` 的四种标准规则, 而是根据外层(函数或者全局)作用域来决定 `this`; 具体来说, 箭头函数会继承外层函数调用的 `this` 绑定(无论 `this` 绑定到什么)。这 其实和 `ES6` 之前代码中的 `self = this` 机制一样。

```js
function foo() {
  // 返回一个箭头函数
  return a => {
    // 箭头函数中的this 继承自 foo()
    console.log(this.a);
  };
}
var obj1 = {
  a: 2
};
var obj2 = {
  a: 3
};
var bar = foo.call(obj1);
bar.call(obj2); // 2, 不是 3 !
```
