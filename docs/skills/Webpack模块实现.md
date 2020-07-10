# Webpack 模块实现

---

## 原模块包装

> ### 原模块

```js
//mA.js
var aa = 1;

function inc() {
  aa++;
}

module.exports = {
  aa: aa,
  inc: inc
};
```

```js
//app.js
var mA = require('./mA.js');

console.log('mA.aa =' + mA.aa);
mA.inc();
```

> #### webpack 模块包装(建立映射表)

经过 包装过后的模块, module 被替换成 webpack 内部的一个新变量(或者缓存),export 变成该模块中的一个变量{}

```js
var modules = {
  './mA.js': generated_mA,
  './app.js': generated_app
};

function generated_mA(module, exports, webpack_require) {
  var aa = 1;

  function inc() {
    aa++;
  }

  module.exports = {
    aa: aa,
    inc: inc
  };
}

function generated_app(module, exports, webpack_require) {
  var mA_imported_module = webpack_require('./mA.js');

  console.log('mA.aa =' + mA_imported_module['aa']);
  mA_imported_module['inc']();
}
```

---

## 模块加载

```js
(function(modules) {
  // 加载完毕的所有模块。
  var installedModules = {};

  function webpack_require(moduleId) {
    // webpack的模块引入require实现
    // 如果模块已经加载过了，直接从Cache中读取。
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    // 创建新模块并添加到installedModules。
    var module = (installedModules[moduleId] = {
      id: moduleId,
      exports: {}
    });

    // 加载模块，即运行模块的生成代码，
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      webpack_require
    );

    return module.exports;
  }
})(modules);
```

模块加载示例:

```js
  // 从入口entry处改写
  webpack_require('./app.js');
```
