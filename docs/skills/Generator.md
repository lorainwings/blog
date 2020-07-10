# Generator

本篇主要记录 ES6 中函数相关知识, 以及 Generator 的自执行

## 函数

函数分类众多,高阶函数(HOF)的应用广泛, 本小节记录主要是以下三种函数高阶函数

- 偏函数
- 惰性函数
- 柯里化函数
- Thunk 函数

### 偏函数(partial)

::: tip 概念
`偏函数`是固定一个函数的一个或者多个参数，也就是将一个 n 元函数转换成一个 n - x 元函数
:::

```js
function add(a, b) {
  return a + b;
}

// 执行 add 函数，一次传入两个参数即可
add(1, 2); // 3

// 假设有一个 partial 函数可以做到局部应用
var addOne = partial(add, 1);

addOne(2); // 3
```

### 惰性函数

::: tip 概念
当我们每次都需要进行条件判断，其实只需要判断一次，接下来的使用方式都不会发生改变的时候,将不变的地方固定化(局部化)
:::

```js
var foo = (function() {
  var t;
  return function() {
    if (t) return t;
    t = new Date();
    return t;
  };
})();
```

### 柯里化函数

::: tip 概念
将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数
:::

```js
function add(a, b) {
  return a + b;
}

// 执行 add 函数，一次传入两个参数即可
add(1, 2); // 3

// 假设有一个 curry 函数可以做到柯里化
var addCurry = curry(add);
addCurry(1)(2); // 3
```

### Thunk 函数

上个世纪 60 年代引出了一个编程

> 函数的参数到底应该何时求值, 即`求值策略`

最后形成了两种方案`传值调用`(C 语言、JS)和`传名调用`(Haskell 语言)

::: tip 传名调用的实现
编译器的“传名调用”实现，往往是将参数放到一个临时函数之中，再将这个临时函数传入函数体。这个临时函数就叫做 `Thunk 函数`
:::

::: tip Javascript 的实现
Thunk 函数替换的不是表达式，而是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数, 这个单参数的函数就叫 `Thunk 函数`
:::

```js
// 正常版本的readFile（多参数版本）
fs.readFile(fileName, callback);

// Thunk版本的readFile（单参数版本）
var Thunk = function(fileName) {
  return function(callback) {
    return fs.readFile(fileName, callback);
  };
};

var readFileThunk = Thunk(fileName);
readFileThunk(callback);
```

## 遍历

ES6 一共有 5 种方法可以遍历对象的属性

- `for...in`

  for...in 循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

- `Object.keys(obj)`

  Object.keys 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

- `Object.getOwnPropertyNames(obj)`

  Object.getOwnPropertyNames 返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

- `Object.getOwnPropertySymbols(obj)`

  Object.getOwnPropertySymbols 返回一个数组，包含对象自身的所有 Symbol 属性的键名。

- `Reflect.ownKeys(obj)`

  Reflect.ownKeys 返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

## Generator作用 & 实现

本节主要分析`Generator`的作用及实现自动执行的 `Generator`, 主要分为以下几个部分:

### 特点

- 可以暂停执行和恢复执行
  > 这是它能封装异步任务的根本原因
- 函数体内外的数据交换
- 错误处理机制

鉴于上面几条特点, 使得`Generator`可以成为异步编程的**完整解决方案**

### 执行流程

Generator 调用返回的是一个 `Iterator 迭代器对象`,只有调用该对象的 next 方法才 开始执行, 同时遇到 yield 将停下, 返回一个值对象;
每次 next 调用返回的是 yield 后面的值, 而 yield 整个表达式的值默认为 undefined;
next 方法传入参数, 该参数可以将 **上一次** 的 yield 表达式的值设置为该值

```js
function* hw() {
  yield 123 + 456;
  var r = yield 888;
  console.log(r);
  yield 'end';
}

//执行1   先返回一个Iterator迭代器对象
var p = hw();
/* 执行2
 *        使用next启动Generator的执行,遇见yield就停止,同时返回
 *        yield后面的计算值 { value: '579', done: false }
 */
p.next();
/* 执行3
 *        开始下一次执行,从上次yield表达式停下的地方，一直执行到下
 *        一个yield表达式,遇见yield就停止,又返回yield后的计算值
 *        { value: '888', done: false }
 */
p.next();
/* 执行4
 *        将 yield 888整个表达式的值设置为next传入的参数,并赋值给r
 *        打印r的值为  "自定义传参"
 *        { value: 'end', done: false }
 */
p.next('自定义传参');
// 执行5   结束Generator的执行  { value: 'undefined', done: true }
p.next();
```

### 自动执行

::: warning 注意
`await` 后面的函数可以是`promise` 对象也可以是普通 `function`，而 yield 关键字后面必须得是 `thunk` 函数或 `promise` 对象
:::

目前自动执行的方案主要有以下两种:

- `Thunk 函数` 将异步操作包装成 Thunk 函数，在回调函数里面交回执行权
- `Promise 对象` 异步操作包装成 Promise 对象，用 then 方法交回执行权
- `完善版` 同时支持异步与同步处理

### Thunk 函数实现

```js
function run(fn) {
  var gen = fn();

  function next(err, data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }

  next();
}

function* g() {
  // ...
}

run(g);
```

### Promise 对象实现

```js
function run(gen) {
  var g = gen();

  function next(data) {
    var result = g.next(data);
    if (result.done) return result.value;
    result.value.then(function(data) {
      next(data);
    });
  }

  next();
}

run(gen);

// promise简单实现
function run(gen) {
  var gen = gen();

  return new Promise(function(resolve, reject) {
    function next(data) {
      try {
        var result = gen.next(data);
      } catch (e) {
        return reject(e);
      }

      if (result.done) {
        return resolve(result.value);
      }

      var value = toPromise(result.value);

      value.then(
        function(data) {
          next(data);
        },
        function(e) {
          reject(e);
        }
      );
    }

    next();
  });
}

function isPromise(obj) {
  return 'function' == typeof obj.then;
}

// obj可以是promise也可以是回调函数,所以统一转化成promise
function toPromise(obj) {
  if (isPromise(obj)) return obj;
  if ('function' == typeof obj) return thunkToPromise(obj);
  return obj;
}

function thunkToPromise(fn) {
  return new Promise(function(resolve, reject) {
    fn(function(err, res) {
      if (err) return reject(err);
      resolve(res);
    });
  });
}

module.exports = run;
```

综合来看, 需要处理两种情况, 即 yield 后面是回调函数或者 promise 等两种情况

```js
// 回调函数的情况
function fetchData(url) {
  return function(cb) {
    setTimeout(function() {
      cb({ status: 200, data: url });
    }, 1000);
  };
}

function* gen() {
  var r1 = yield fetchData('https://api.github.com/users/github');
  var r2 = yield fetchData('https://api.github.com/users/github/followers');

  console.log([r1.data, r2.data].join('\n'));
}
```

### 完善版

```js
function run(gen) {
  return new Promise(function(resolve, reject) {
    if (typeof gen == 'function') gen = gen();

    // 如果 gen 不是一个迭代器
    if (!gen || typeof gen.next !== 'function') return resolve(gen);

    onFulfilled();

    function onFulfilled(res) {
      var ret;
      try {
        ret = gen.next(res);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    function onRejected(err) {
      var ret;
      try {
        ret = gen.throw(err);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    function next(ret) {
      if (ret.done) return resolve(ret.value);
      var value = toPromise(ret.value);
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
      return onRejected(
        new TypeError(
          'You may only yield a function, promise ' +
            'but the following object was passed: "' +
            String(ret.value) +
            '"'
        )
      );
    }
  });
}

function isPromise(obj) {
  return 'function' == typeof obj.then;
}

function toPromise(obj) {
  if (isPromise(obj)) return obj;
  if ('function' == typeof obj) return thunkToPromise(obj);
  return obj;
}

function thunkToPromise(fn) {
  return new Promise(function(resolve, reject) {
    fn(function(err, res) {
      if (err) return reject(err);
      resolve(res);
    });
  });
}
```

更多可以了解 TJ 大神的[`CO模块`](https://github.com/tj/co)
