# WebWorker 实践小结

WebWork 的独立线程为浏览器的密集型计算减负, 具体的介绍可以参考阮大的文章[Web Worker 使用教程](http://www.ruanyifeng.com/blog/2018/07/web-worker.html), 本文主要探讨如何在实际的项目中如何使用。

文章结构主要分以下两部分:

- 业务代码和 WebWorker 代码
- WebWorker 使用外部依赖

## 业务代码和 worker 代码

- 主线程代码

**main.js**:

```js
// relative path to the worker from current file
import Worker from "../../utils/sleep.worker";

const wk = new Worker();
wk.postMessage(["data:application/json;base64,asfasdfs"]);
wk.onmessage = d => {
  console.log("主线程收到消息!", d);
};
```

- WebWorker 线程代码

**worker 线程代码**:

```js
// use import like you would in any other file
import moment from "moment";

const countNum = () => {
  let count = 0;
  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < 100000; j++) {
      count++;
    }
  }
  return {
    count,
    date: moment().format("YYYY-MM-DD: hh:mm:ss")
  };
};

self.onmessage = e => {
  console.log("worker线程收到消息", e);
  const res = countNum();
  self.postMessage(res);
};
```

## WebWorker 使用外部依赖

要让 WebWorker 使用外部依赖, 可以使用 Webpack 来加载第三方包, 也可以直接使用原生的`importScript`来引入第三方包;

### 配置打包工具

此处以`Webpack`为例子, 在该打包工具中, 可以将 WebWorker 的模块配置为两种方式:

- 配置 worker 为 entry
- 配置 worker 为 loader

```js
// webpack.config.js entry
modules.exports= {
  entry: {
  main: './src/app/main.js'
  worker: './src/utils/myWorker.js',
  },
  output: {
  path: `${ROOT_PATH}/public`,
  filename: '[name].bundle.js',
  }
}
```

如果需要使用 loader 方式, 必须先安装相应的`worker-loader`, 具体的 loader 相关介绍, 请移步至: [Webpack worker-loader documentation](https://webpack.js.org/loaders/worker-loader/)

```sh
npm install worker-loader --save-dev
```

```js
//With Webpack (worker-loader)
//webpack.config.js
modules.exports = {
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: { loader: "worker-loader" }
      }
    ]
  }
};
```

### 直接使用 importScript 来加载外部包

You can always import the library from a CDN

```js
myWorker.js;
importScripts(
  "//cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"
);

console.log(`From worker: worker started at ${moment().format("HH:mm:ss")}`);
```

## 在 StackOverflow 中的参考

Other bundlers
Web workers cannot importScripts from parent folders for security reasons
The node_modules folder is usually at the root of the project so you can't access it with importScripts
The bundler needs to be configured so that the content can be aliased or copied to a location the worker can access

### AngularCLI and Ionic 使用

For projects using webpack as a bundler the 2 webpack solutions can be adapted as long as you can access the webpack config and customize it.

The "Webpack (as entry)" example was actually borrowed from Angular CLI generated app with Web Workers

It explains how to modify the setup to bootstrap angular using web workers
It have been referenced as a webworker solution for Ionic projects too

Note on TypeScript
you may need a separate ts config in the worker folder
Structuring a TypeScript project with workers

```js
module.exports = {
  extends: "../generic-tsconfig.json",
  compilerOptions: {
    lib: ["esnext", "webworker"]
  }
};
```
