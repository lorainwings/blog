# Webpack 源码流程分析

本文来分析一下前端最流行的构建工具`webpack`的源码流程, 以便加深自己对`webpack`的理解

## 从命令行开始

```sh
webpack entry.js bundle.js

# 或

npm run (build/dev)
```

我们直接执行该命令, 那么`webpack`在这个过程中做了什么操作呢?

## 命令执行入口

npm 会让命令行工具进入 `node_modules/bin`目录查找是否存在`webpack.sh`或者`webpack.cmd`, 存在就执行, 否则抛出错误

`node_modules/bin/webpack` 是 `node_modules/webpack/bin/webpack.js`的一个映射 link

那么, webpack 实际的执行入口是`node_modules/webpack/bin/webpack.js`

## Webpack 源码入口分析

通过结构分析, 可以将该源码拆分为下面几个模块

![webpack入口文件结构](/blog/skills/images/webpack-source-frame.png)

主要逻辑是, 当命令开始执行时, 判断是否安装`webpack-cli`或者`webpack-command` ?

如果没有安装将提示用户安装, 与用户交互后, 用户同意安装则自动帮用户安装好

如果已经安装且只安装了一个`cli`, 使用`require.resolve`来读取`cli`的位置, 并加载

如果安装了 2 个`cli`, 抛出错误`To work with the "webpack" command you need only one CLI package, please remove one of them or use them directly via their binary.`

最终的结果: `webpack`找到`webpack-cli`或者`webpack-command`这个 npm 包, 并且执行 cli

## 执行 webpack-cli

<!-- 先打开`webpack-cli`源码目录, 代码结构如下:

![webpack-cli](/blog/images/webpack-cli-pipe.png) -->

![webpack-cli](/blog/skills/images/webpack-non-compiler.png)

- 引入`yargs`, 对命令行进行定制
- 分析命令行参数, 对各个参数进行转换, 组成编译配置项
- 引用`webpack`, 根据配置项进行编译和构建

`webpack-cli`使用 args 分析

![webpack-cli-args](/blog/skills/images/webpack-cli-args.png)

`webpack-cli`对配置文件和命令行参数进行转换最终生成配置选项参数 options

最终会根据配置参数实例化 webpack 对象,然后执行构建流程

## Tapable

`Webpack` 可以将其理解是一种基于事件流的编程范例, 一系列的插件运行

### 什么是 Tapable

`Tapable`是一种类似于 Node.js 的`EventEmitter`的库, 主要是控制钩子函数的发布与订阅,控制着 webpack 的插件系统

### Tapable Hooks

![tapable-hooks](/blog/skills/images/tapable-hooks.png)

`Tapable Hooks`的类型:

![tapable-hooks-type](/blog/skills/images/tapable-hooks-type.png)

- `Bail`是保险的意思(熔断)

- `Waterfall`是瀑布的意思(上一个结果传给下一个)

- `Loop`是循环的意思(返回 `true` 会继续循环当前)

### Tapable 的使用

`Tapable`暴露出来的都是类方法, new 一个类方法获取我们需要的钩子

class 接受数组参数 options, 非必传。类方法会根据传参， 接受同样数量的参数

#### 同步钩子

`hooks` 的同步注册方式使用`tap`, 调用同步钩子方法使用`call`

```js
const { SyncHook }  = require('tapable');
class TestSync{
  constructor(){
    this.hooks = {
      arch: new SyncHook(['name']); // 参数是一个数组, 表示参数个数
    }
  }
  // 订阅
  tap(){
    this.hooks.arch.tap('type',(value)=>{
      console.log(value);
    });
    this.hooks.arch.tap('class',(value)=>{
      console.log(value);
    });
    this.hooks.arch.tap('age',(value)=>{
      console.log(value);
    });
  }
  //发布
  start(){
    this.hooks.arch.call('...');
  }
}

```

#### 异步钩子

`hooks` 的异步注册方式使用`tapAsync`或者`tapPromise`, 调用异步钩子方式使用`callAsync`或者`promise`

```js
// 异步并发钩子
const { AsyncParallelHook }  = require('tapable');
class TestAsync{
  constructor(){
    this.hooks = {
      arch: new AsyncParallelHook(['name']); // 参数是一个数组, 表示参数个数
    }
  }
  // 订阅
  tapAsync(){
    this.hooks.arch.tapAsync('type',(value, cb)=>{
      setTimeout(()=>{
        console.log(value);
        cb(); // 该次异步执行完成
      });
    });
    this.hooks.arch.tapAsync('class',(value, cb)=>{
       setTimeout(()=>{
        console.log(value);
        cb(); // 该次异步执行完成
      });
    });
  }
  //发布
  startAsync(){
    this.hooks.arch.callAsync('args',()=>{
      console.log('钩子执行完成')
    });
  }
}

class TestAsyncPromise{
  constructor(){
    this.hooks = {
      arch: new AsyncParallelHook(['name']); // 参数是一个数组, 表示参数个数
    }
  }
  // 订阅
  tapPromise(){
    this.hooks.arch.tapPromise('type',(value)=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log(value);
          resolve(); // 该次异步执行完成
        });
      });
    });
    this.hooks.arch.tapPromise('class',(value)=>{
       return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log(value);
          resolve(); // 该次异步执行完成
        });
      });
    });
  }
  //发布
  startPromise(){
    this.hooks.arch.promise('args').then(()=>{
      console.log('钩子执行完成')
    });
  }
}



```
