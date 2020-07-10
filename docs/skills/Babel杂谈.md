# Babel 杂谈

本文主要讲述的是 `babel6` 的内容, 主要方便于更加了解 babel 的历史, 其中会穿插这讲 `babel7` 时代的配置方法

## 核心模块

![avatar](/blog/skills/babel.jpg)

核心模块包含以下几个:

- `babel-core`: 仅仅用作语法转化成 ast 的一个包
- `babel-cli`: 包含两个命令行工具
- `babel-runtime`: 包含 babel 核心代码, helpes, polyfill 等

### babel-core

此处不记录, 主要是转换抽象语法树

### babel-cli

主要包含以下模块:

- babel-node
- babel-external-helps

#### babel-node

babel-cli 下面的一个 command，主要是实现了 node 执行脚本和命令行写代码的能力。

```sh
node_modules/.bin/babel-node --presets react test.js
```

--presets react 是参数，等同于

```js
{ "presets": ["react"] } //需要安装babel-preset-react
```

babel-node 又包含了 `babel-register` 实时编译模块

```sh
npm install babel-register --save-dev
```

babel-node 可以通过它编译代码，可以了解到，它其实就是一个编译器。我们同样可以在代码中引入它 require('babel-register')，并通过 node 执行我们的代码。

它的原理是通过改写 node 本身的 require，添加钩子，然后在 require 其他模块的时候，就会触发 babel 编译。也就是你引入 require('babel-register')的文件代码，是不会被编译的。只有通过 require 引入的其他代码才会。我们是不是可以理解，babel-node 就是在内存中写入一个临时文件，在顶部引入 babel-register，然后再引入我们的脚本或者代码？

举个栗子，还是 node 中执行 jsx，要通过 babel 编译。我们可以把 jsx 的代码 a.js 编译完输出到一个 b.js，然后 node b.js 也是可以执行的。但是太麻烦，不利于开发。让我们看一下通过 register 怎么用

```js
// register.js 引入 babel-register，并配置。然后引入要执行代码的入口文件

require('babel-register')({ presets: ['react'] });
require('./test');
// test.js 这个文件是 jsx...
const React = require('react');
const elements = [1, 2, 3].map(item => {
  return <div>{item}</div>;
});
console.log(elements);
```

```sh
node register.js  // 执行
```

#### babel-external-helps

主要用来生成一段代码，包含 babel 所有的 helper 辅助函数, 如果使用了 transform-runtime 模块,就不需要该 单独生成该 helps 了

**生成方法:**

- 执行 babel-external-helpers 生成 helpers.js 文件，

```sh
node_modules/.bin/babel-external-helpers > helpers.js
注意：示例代码的包都是装到项目中的，也就是本地。同样你可以全局安装直接执行。
```

- 安装 plugin

```sh
npm install --save-dev babel-plugin-external-helpers
```

- 然后在 babel 的配置文件加入

```json
{
"plugins": ["external-helpers"]
}
```

- 入口文件引入 helpers.js

```js
require('./helpers.js');
```

### babel-runtime

::: warning 注意
注意使用中需要引入到`运行依赖`dependencis 中:
:::

babel-runtime 中主要包括

- 核心库 core（主要的语法 转换实现）

- 辅助函数 helps（调用中间转换的辅助函数）

- regenerate（实现了 generator/yeild， async/await）

使用方式:

```js
{
    "plugins": [
        ["transform-runtime", {
        "helpers": true,
        "polyfill": true,
        "regenerator": true,
        "moduleName": "babel-runtime"
        }]
    ]
}
```

## 模块功能区分

问题: `transform-runtime`和`babel-polyfill`都能转换代码, 它们的区别是什么?

**babel-polyfill**

> 是一个完整的 es2015+环境, 包含所有的 polyfill, 在 babel6 时代, 如果需要优化包的体积, 必须手动引入 helps;而 babel7 时代的今天, 这个已经成为过去式;
>
> **主要使用场景是用于一个 大型完整的 web 应用中**

**transform-runtime**

> transform-runtime 包是利用 plugin 自动识别并替换代码中的新特性，你不需要再引入，只需要装好 babel-runtime 和 配好 plugin 就可以了。好处是按需替换，检测到你需要哪个，就引入哪个 polyfill，如果只用了一部分，打包完的文件体积对比 babel-polyfill 会小很多。而且 transform-runtime 不会污染原生的对象,但是缺失了 es6+ 一些实例方法,比如 数组的 includes, filter, fill; _可以理解为是不污染的 polyfill_
>
> **主要使用场景是第三方开发工具或者库的开发**

因为 babel 编译 es6 到 es5 的过程中，babel-plugin-transform-runtime 这个插件会自动 polyfill es5 不支持的特性，这些 polyfill 包就是在 babel-runtime 这个包里，所以 babel-runtime 需要安装在 dependency 而不是 devDependency。

dependency 和 devDependency 应该能明白吧。假如一个用户 npm install 了你发布在 npm 上的一个包，他只会安装这个包的 dependency 依赖，devDependency 是不会安装的，那么此时假如 babel-runtime 是安装在 devDependency 的话，有些 polyfill 就会找不到了。

**plugin-transform-runtimee**

> 一个插件。 babel 编译后的代码是包含了多个重复的帮助函数(helps 代码)而该插件就是将这些重复的代码通过引入公共的 helps 来解决的(从 babel/runtime 中引入)

## babel 配置

我将这块分为几部分:

- presets 和 plugin 区别
- presets 和 plugin 的排序
- babel6 的配置
- babel7 corejs2 的配置

### presets 和 plugin 区别

presets 就是 plugins 的组合，你也可以理解为是套餐,现在主流的几个 presets 为 `babel-presets-env`,而 babel-presets-env 主要是基本语法的转化,并不包含任何 polyfill, 可以看做是 babel-core

```js
{ "presets": ["latest"] } === { "presets": ["env"] }
```

### presets 和 plugin 的排序

具体而言，plugins 优先于 presets 进行编译。
plugins 按照数组的 index 增序(从数组第一个到最后一个)进行编译。
presets 按照数组的 index 倒序(从数组最后一个到第一个)进行编译。

### Babel6 的 配置

主要分为 `env+polyfill+useBuiltIns+helps` 和 `env+transform-runtime` 两套方案

- `env+polyfill+useBuiltIns+helps`的配置如下:

```js
{
  "presets": [
    [
      "env",
      {
        "targets": { // 配支持的环境
          "browsers": [ // 浏览器
            "last 2 versions",
            "safari >= 7"
          ],
          "node": "current"
        },
        "modules": true,  //设置ES6 模块转译的模块格式 默认是 commonjs
        "debug": true, // debug，编译的时候 console
        "useBuiltIns": 'useage|entry', // 是否开启自动支持 polyfill
        "include": [], // 总是启用哪些 plugins
        "exclude": []  // 强制不启用哪些 plugins，用来防止某些插件被启用
      }
    ]
  ],
  plugin:['external-helps']
}

// 需要安装开发时的依赖 babel-extenal-helps 然后生成helps
// 还需在入口文件引入 require('babel-polyfill')
// 还需在入口文件引入生成的helps  require('./helps')
```

- `env+transform-runtime`的配置如下:

```js
// 需要安装开发依赖babel-plugin-transform-runtime   (babel7使用@babel/plugin-transform-runtime)。
// 同时还需要安装生产环境的依赖 babel-runtime  (babel7使用@babel/runtime)
{
  "presets": [
    "env"
  ],
  "plugins": [
    ["transform-runtime", {
      "helpers": true,
      "polyfill": true,
      "regenerator": true,
      "moduleName": "babel-runtime"
    }]
  ]
}
```

### Babel7 corejs2 的 配置

- **全面方案**

```sh
yarn add babel-loader@8 @babel/core @babel/preset-env -D
yarn add @babel/polyfil
```

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false, // 推荐
        useBuiltIns: 'entry', // 推荐
        corejs: 2 // 新版本的@babel/polyfill包含了core-js@2和core-js@3版本，所以需要声明版本，否则webpack运行时会报warning，此处暂时使用core-js@2版本（末尾会附上@core-js@3怎么用）
      }
    ]
  ],
  plugins: []
};
```

- **按需方案**

```sh
yarn add babel-loader@8 @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
yarn add @babel/runtime-corejs2
```

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'false' // 默认 false, 可选 entry , usage
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 2 // 推荐
      }
    ]
  ]
};
```

## babel7.4 及以上 最新更新

2019 年 3 月 babel 官方更新了@babel/runtime-corejs3,已经支持了实例方法的转换,而不污染全局对象,现在完美的配置如下(可用于库以及 web 应用开发):

@babel/preset-env 就是**预设**,也就是插件的集合(比如包括@babel/plugin-transform-classes,@babel/plugin-transform-arrows 等等),以方便用户不用一个一个的写入

@babel/preset-env 包括了整个 es6 的插件集合, 不开启 useBuiltIns 将会通过 core-js 来引入转换函数, 也将不污染全局对象等

如果开启 useBuiltIns, 那么值为 entry 需要手动引入@babel/polyfill(根据 .browselist 来加入全局垫片),如果值为 usage,那么不需要引入@babel/polyfill,需要开启 corejs 为 2 或者 3(根据 .browselist 以及按需引入垫片)

@babel/plugin-transform-runtime 的作用仅仅是配合@babel/runtime-corejs3 来解决引入多次 helps 函数的问题

@babel/presets-env 开启 corejs:3 选项, 能够自动转换代码但是不能解决引入多个 helps 的问题

### 关于 corejs3 配置升级

@babel/preset-env 提供转译 ES 新语法，剩下的事情（即 ES 的新 API）才是 @babel/polifill 或 @babel/runtime 需要去解决的事情

**1.polyfill 垫片方案**

在 web 应用中,满足全部垫片

```sh
// 依赖安装
yarn add babel-loader@8 @babel/core @babel/preset-env -D
yarn add core-js regenerator-runtime
```

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
        useBuiltIns: 'entry', // browserslist环境不支持的所有垫片都导入
        // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
        // https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
        corejs: {
          version: 3, // 使用core-js@3
          proposals: true
        }
      }
    ]
  ],
  plugins: []
};
```

```sh
// 入口的变化
import "core-js/stable"
import "regenerator-runtime/runtime"
```

**2. 按需加载方案**

在第三方库或者工具的开发中

```sh
yarn add babel-loader@8 @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
yarn add @babel/runtime-corejs3
```

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false, //默认 可省略
        useBuiltIns: 'false', //默认 可省略  ==== 此处可以考虑设置为'usage'使打包体积更小
        targets: 'ie >= 8', // 可省略 不写该字段将以.browselist为准
        corejs: false
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          version: 3,
          proposals: true
        },
        useESModules: true
      }
    ]
  ]
};
```

## @babel/runtime & @babel/runtime-corejs2 & @babel/runtime-corejs3 区别

这三个包都是一个系列的包,后两者可以视为是前者的升级版

@babel/runtime 只包含了基本的语法转换 polyfill;

@babel/runtime-corejs2 更新了一些功能增加了 api 的支持,但是没支持实例方法的转换

@babel/runtime-corejs3 完善了之前的实例方法的支持,是包含了完整的 polyfill 不污染全局,一般必须加上@babel/preset-env 才能自动引入该包中的 polyfill 到代码中,否则不能自动转换

## [Npm-scope](https://docs.npmjs.com/misc/scope)

作用:

1. 相关包分组在一起,体现在 node_modules 出现在一个文件夹里
2. 使用@开头的 scope(范围包),后续都只能由  该账号发布  这个系列的范围包
3. 一般用于区分社区的包还是官方的包

## 参考文件

- [附录 1][babel-plugin-transform-runtime#polyfill](https://www.babeljs.cn/docs/babel-plugin-transform-runtime#polyfill)
- [附录 2][关于 corejs3](https://github.com/babel/babel/pull/7646)
- [附录 3][corejs3更新](https://segmentfault.com/a/1190000020237817)

---
