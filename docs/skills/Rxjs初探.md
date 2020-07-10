# Rxjs 初探

## 认识 RxJS

### 异步编程常见问题

- Race Condition(竞态条件)
- Memery Leak(内存泄露)
- Complex State(复杂状态)
- Exception Handling(异常处理)
- 多种 API 来处理对应的事件(多端统一)

例子: 监听点击事件(click event)，但点击一次之后不再监听

原生 JS 实现:

```js
var handler = (e) => {
  console.log(e);
  document.body.removeEventListener("click", handler); // 结束监听
};

// 注册监听
document.body.addEventListener("click", handler);
```

RxJS 实现:

```js
Rx.Observable.fromEvent(document.body, "click")
  .take(1) // 只取一次
  .subscribe(console.log);
```

### RxJs 介绍

RxJS 是指 Functional Programming(FP) 及 Reactive Programming(RP) 两个编程思想的结合, 也被称为 Functional Reactive Programming(FRP)。

FP、RP、FRP 都是编程的一种方式,类似于 OOP

- Functional Programming(函数式编程)

核心思想就是做运算处理,
用 function 来思考我们的问题，以及撰写程式

- Reactive Programming(响应式编程)

当变数或资源发生变动时，由变数或资源自动告诉我发生变动了,
开发者不需要写这其中如何通知发生变化的每一步代码，只需要
专注在发生变化时要做什么事

### Functional Programming 支持度

支持 FP 的语言至少需要符合函数为一等公民的特性

一等公民的特征:

- 函数能够被赋值给变量
- 函数能被当作参数传入
- 函数能被当作返回值

### Functional Programming 重要特性

- Expression, no Statement

Functional Programming 都是 表达式 (Expression) 不会是 陈述式(Statement)。

表达式: 是一个运算过程，一定会有返回值，例如执行一个 function

陈述式: 表现某个行为，例如一个 赋值给一个变量

- Pure Function

Pure function 是指 一个 function 给予相同的参数，永远会回传相同的返回值，并且没有任何显著的副作用(Side Effect)

- 利用参数保存状态

```js
function findIndex(arr, predicate, start = 0) {
  if (0 <= start && start < arr.length) {
    if (predicate(arr[start])) {
      return start;
    }
    return findIndex(arr, predicate, start + 1);
  }
}

// 找数组中 'b' 的 index
findIndex(["a", "b"], (x) => x === "b");

/*
这里我们写了一个 findIndex 用来找数组中的元素位置，我们在 findIndex 中故意多塞了一个参数用来保存当前找到第几个 index 的状态，这就是利用参数保存状态！
*/
```

## 建立 Observable

### 建立

建立 observable 的方法很多, 其中 create 是最基本的方法,reate 方法在 Rx.Observable 事件中，要传入一个 订阅 callback function ，这个 callback function 会接收一个 observer 参数

::: tips
这个 callback function 会定义 observable 将会如何发送值。(暂且理解为发值函数)
:::

```js
var observable = Rx.Observable.create(function subscribe(observer) {
  observer.next("Jerry"); // RxJS 4.x 以前的版本用 onNext
  observer.next("Anna");
});
```

虽然 Observable 可以被 create，但实际上我们通常都使用 creation operator 像是 from, of, fromEvent, fromPromise 等。这里只是为了从基本的开始讲解所以才用 create

::: tips
订阅 Observable 像是调用函数, 并提供接收数据的回调函数。
它是惰性运算,
我们可以订阅这个 observable，来接收他发送的值，代码如下
:::

```js
var observable = Rx.Observable.create(function (observer) {
  observer.next("Jerry"); // RxJS 4.x 以前的版本用 onNext
  observer.next("Anna");
});

// 订阅这个 observable
observable.subscribe(function (value) {
  console.log(value);
});
```

### 创建运算符

Observable 有许多创建实例的方法，称为 creation operator。下面我们列出 RxJS 常用的 creation operator

- create
- of

当我们想要同步的传递几个值时，就可以用 of 这个 operator 来简洁的表达!

```js
var source$ = Rx.Observable.of("Anna", "Jerry");
source$.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("complete");
  },
  error(error) {
    console.log(error);
  },
});
```

- from
- fromEvent
- fromPromise
- never
- empty
- throw
- interval
- timer

## 未完待续
