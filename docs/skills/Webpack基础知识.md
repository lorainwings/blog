# Webpack 基础知识

此处记录 webpack 中的一些入门知识点, 有点杂乱, 主要用于回顾

## Module & Chunk & Bundle

> module: 模块就是模块可以是 es 模块也可以是 commonJS 或者 AMD 模块

> chunk: 打包过程中被操作的模块文件叫做 chunk,例如异步加载一个模块就是一个 chunk

> bundle: bundle 是最后打包后的文件,最终文件可以和 chunk 长的一模一样,但是大部分情况下他是多个 chunk 的集合

另外的理解(摘至网络):

- module：

  就是 js 的模块化 webpack 支持 commonJS、ES6 等模块化规范，简单来说就是你通过 import 语句引入的代码。

- chunk:

  chunk 是 webpack 根据功能拆分出来的，包含三种情况：

  1、你的项目入口（entry）

  2、通过 import()动态引入的代码

  3、通过 splitChunks 拆分出来的代码

  chunk 包含着 module，可能是一对多也可能是一对一。

- bundle：

  bundle 是 webpack 打包之后的各个文件，一般就是和 chunk 是一对一的关系，bundle 就是对 chunk 进行编译压缩打包等处理之后的产出。

---

## 库(Library)

如果想将自己的工程作为一个第三方库提供给其他人使用,可以参考[配置方法](https://github.com/webpack/webpack/tree/master/examples/multi-part-library)

```js
var path = require('path');
module.exports = {
  // mode: "development || "production",
  entry: {
    alpha: './alpha',
    beta: './beta'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'MyLibrary.[name].js',
    // 征对多页面,可以配置为数组,MyLibrary作为整体的命名空间,[name]作为该空间的属性调用
    // 示例地址:
    //https://github.com/webpack/webpack/tree/master/examples/multi-part-library
    library: ['MyLibrary', '[name]'],
    libraryTarget: 'umd'
  }
};
```

---

## 入口(Entry)

```js
// 对象式
{
  entry:{
    app:'./file.js',
    vendor: './file1.js', //多页面
    normal: ['jquery','lodash'], //两个chunk打包到一个bundle
    'js/home': './files2.js' // 会生成到js/home文件夹下
  }
}
// 字符串式
{
  entry:'app' // 等同于 entry:{ main:'app.js' }
}
```

---

## Npm3 的 peerDependency

假如 项目 project-main 依赖的 package-a(dependency) 的 package.json 中声明了 peerDependency 是 package-apeer@^1.0.0，而 project-main 中没有任何 package-apeer 的配置，此时在 project-main 下使用 npm3 执行 npm install，控制台就会告警 UNMET PEER DEPENDENCY package-apeer@^1.0.0，意思就是说使用到 package-a 的项目必须安装同时安装 package-apeer@^1.0.0 ，否则程序就可能会有异常，而在 npm@1 和 npm@2 下，就不会报错而是自动把 package-apeer@^1.0.0 安装上，因为很多用户反应这样很困惑，我没声明这个包，你为什么要给我安装呢？所以在 npm@3 中这个 peerDependencies 如果没装就变成了控制台告警。

npm3 的官方文档 中 记录到:

> 通常是在插件开发的场景下，你的插件需要某些依赖的支持，但是你又没必要去安装，因为插件的宿主会去安装这些依赖，你就可以用 peerDependencies 去声明一下需要依赖的插件和版本，如果出问题 npm 就会有警告来提醒使用者去解决版本冲突问题。

## Html-webpack-plugin 疑惑选项

- `chunks`

  > chunks 选项的作用主要是针对多入口(entry)文件。当你有多个入口文件的时候，对应就会生成多个编译后的 js 文件。那么 chunks 选项就可以决定是否都使用这些生成的 js 文件。

  > chunks 默认会在生成的 html 文件中引用所有的 js 文件，当然你也可以指定引入哪些特定的文件。

  > 看一个小例子。

  ```js
    // webpack.config.js
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
        index1: path.resolve(__dirname, './src/index1.js'),
        index2: path.resolve(__dirname, './src/index2.js')
    }
    ...
    plugins: [
        new HtmlWebpackPlugin({
            ...
            chunks: ['index','index2']
        })
    ]
  ```

  执行 webpack 命令之后，你会看到生成的 index.html 文件中，只引用了 index.js 和 index2.js, 而如果没有指定 chunks 选项，默认会全部引用。

  ```html
    ...
    <script type=text/javascript src=index.js></script>
    <script type=text/javascript src=index2.js></script>
  ```

- `excludeChunks`

  弄懂了 chunks 之后，excludeChunks 选项也就好理解了，跟 chunks 是相反的，排除掉某些 js 文件。 比如上面的例子，其实等价于下面这一行

  ```js
    ...
    excludeChunks: ['index1.js']
  ```

## 加载器(Loaders)

loaders 配置项 use 和 loader 的区别[参考链接-webpack1 升级 webpack2](https://webpack.docschina.org/migrate/3/)

webpack1 是使用 loader 选项,而 webpack2 以上的版本都建议直接使用 use 选项,具体的更新如下:

- 外层 loaders 改为 rules
- 内层 loader 改为 use,也可以用 loader
- 所有插件必须加上 -loader，不再允许缩写
- 不再支持使用!连接插件，改为数组形式
- json-loader 模块移除，不再需要手动添加，webpack2 会自动处理

Webpack1 中如下配置

```js
module: {
  loaders: [
    {
      test: /\.(less|css)$/,
      loader: 'style!css!less!postcss'
    },
    {
      test: /\.json$/,
      loader: 'json'
    }
  ];
}
```

Webpack2 却使用如下配置

```js
module: {
  rules: [
    {
      test: /\.(less|css)$/,
      use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
    }
  ];
}
```

使用示例

```js
module: {
  rules: [
    {
      test: /\.jsx$/,
      loader: "babel-loader", // Do not use "use" here
      options: {
        // ...
      }
    },
    {
      test: /\.less$/,
      // 可以配置成字符串
      loader: "style-loader!css-loader!less-loader"
      // 也可以配置成数组,并通过queryString来设定选项(传参给loader)
      use: ["style-loader", "css-loader?minimize", "less-loader"],
      // 使用options来设定选项
      use: [
        {
          loader: "css-loader",
          options: {
              minimize:true
          }
        }
      ]
    }
  ];
}
```

补充说明一下, 正如 Webpack 2 迁移教程所述，两者之间的区别在于，如果我们想要一个加载器数组，我们必须使用 use，如果它只是一个加载器，那么我们必须使用 loader：

````js
module: {
  rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader", // Do not use "use" here
        options: {
          // ...
        }
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  }
  ```
````

loader 也可以使用 import 或者 require 直接指定:

```js
require('style-loader!css-loader?minimize!./main.css');
import Styles from 'style-loader!css-loader?modules!./styles.css';
// 选项可以传递查询参数，例如 ?key=value&foo=bar，或者一个 JSON 对象，例如 ?{"key":"value","foo":"bar"}
```

**Loader 的几种用法归纳**

```js
第一种: use: ['xxx-loader', 'xxx-loader'];

第二种: loader: ['style-loader', 'css-loader'];

第三种: use: [{ loader: 'style-loader' }, { loader: 'css-loader' }];
```

---

## 常用 loaders

- `css-loader`

css-laoder 是解释 @import 'a.css' 和 @import url(a.css)等引入的.css 文件, 将其加载到 js 文件中,便于 webpack 的其他 loader 处理

- `style-loader`

style-loaders 用于处理将所有的样式文件插入到`<style></style>`中

- `url-loader`

url-loader 是用于处理文件(css/js)中的中引用的资源. 例如图片引入, 小图片转换成 base64...

- `postcss-loader`

postcss-loader 的 autoprefixer 实现将 css3 属性添加上厂商前缀

---

## 常用 plugins

- DllPlugin & DllReferencePlugin (动态链接库插件)

  dll 插件一般只应用于开发环境,正式环境中不建议这么做

  ```js
  {
    plugins: [
      // 接入 DllPlugin
      new webpack.DllPlugin({
        // 动态链接库的全局变量名称，需要和 output.library 中保持一致
        // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
        name: '[name]_dll_[hash]',
        // 描述动态链接库的 manifest.json 文件输出时的文件名称
        path: path.join(__dirname, 'dist/dll', '[name].manifest.json')
      })
    ];
  }
  ```

  ```js
  plugins: [
    // 接入 DllPlugin
    new DllReferencePlugin({
      context: __dirname,
      // 描述 react 动态链接库的文件内容
      manifest: require('./dist/react.manifest.json')
    })
  ];
  ```

- webpack-bundle-analyzer (性能分析插件)

- WebpackMd5Hash

  注意: webpack-md5-hash 有相关问题请[查看](https://sebastianblade.com/using-webpack-to-achieve-long-term-cache/)

  > 使用该插件后,模块与公共代码的映射关系文件(manifest),将不会 随着模块的改动来重新 计算公共代码的 chunkhash

  因此 webpack-md5-hash 并没有解决之前的问题：

      如何生成稳定的模块 ID？

      如何避免频繁的 chunk 内容变动？

  使用 NamedModulesPlugin 来解决

- NamedChunksPlugin

  webpack4.25 以上有两个选项来控制这个插件: namedChunks 和 chunkIds

  这两个插件在更高的版本已经合并为了 chunkIds,详见[链接](https://github.com/webpack/webpack/issues/8354)

  > 固化 runtime 代码 内以及在使用动态加载时分离出的 chunk 的 chunk id

- NamedModulesPlugin(webpack4 开发模式默认值,不需要单独配置了)

  > 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。

  > 开发环境下使用来固化 module id

  > webpack.NamedChunksPlugin 只能对普通的 Webpack 模块起作用，异步模块，external 模块是不会起作用的。

  > **征对上述的问题解决办法:**

  1. 异步模块可以在 import 的时候加上 chunkName 的注释，比如这样：`import(/* webpackChunkName: "lodash" */ 'lodash').then()` 这样就有 Name 了

  2. 所以我们需要再使用一个插件：`name-all-modules-plugin`
     这个插件中用到一些老的 API，Webpack 4 会发出警告，这个 [pr](https://github.com/timse/name-all-modules-plugin/pull/2/commits/18b460556e625908ca419c1e4798451ab0c5d788) 有新的版本，不过作者不一定会 merge。我们使用的时候可以直接 copy 这个插件的代码到我们的 Webpack 配置里面。


     ```js
      //pr的核心代码
      class NameAllModulesPlugin {
        apply(compiler) {
          compiler.hooks.compilation.tap("NameAllModulesPlugin", compilation => {
            compilation.hooks.beforeModuleIds.tap("NameAllModulesPlugin", modules => {
              for (const module of modules) {
                if (module.id === null) {
                  module.id = module.identifier();
                }
              }
            }
          })
        }
      }
     ```

- HashedModuleIdsPlugin

  > 在生产环境下使用来固化 module id,就是在 namedModulesPlugin 的基础上做了路径的 hash,简化路径值, 减小 chunk 的

- CommonsChunkPlugin(webpack3 中的公共代码提取插件)

  > HashedModuleIdsPlugin: 它是根据模块相对路径生成模块标识，如果模块没有改变，那模块标识也不会改变, 改变 webpack->entry 的顺序也将不改变模块的 ID, 也就不会影响 hash 和 chunkhash 的改变

  ```js
  {
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['react', 'common'], // 用于提取manifest
        minChunks: Infinity // Infinity不会打包任何多余的代码
      }),
      new webpack.HashedModuleIdsPlugin(),
      new WebpackMd5Hash()
    ];
  }
  ```

- splitChunks (webpack4)

  > 默认的分包策略:(条件需要全满足)

      -  新的 chunk 是否被共享2次以上或者是来自 node_modules 的模块
      -  新的 chunk 体积在压缩之前是否大于 30kb
      -  按需加载 chunk 的并发请求数量小于等于 5 个
      -  页面初始加载时的并发请求数量小于等于 3 个

> 默认配置:

```js
module.exports = {
  optimization: {
    // 提取webpack运行时的代码块单独引入到入口文件
    // 而不是直接混入每个chunk,可以减小入口的代码体积
    // 存储着 webpack 对 module 和 chunk 的解析信息
    // 主要作用: 把entry中不相关的 module id 或者说内容摒除在外
    //
    runtimeChunk: true,
    splitChunks: {
      //范围:异步加载的模块中的引入import才进行拆分
      chunks: 'async', // inital(入口) all(所有) async(异步)
      minSize: 30000, // 大于30kb的
      minChunks: 1, // 引用一次就拆分
      maxAsyncRequests: 5, // 异步加载模块最多可以拆分的块数量
      maxInitialRequests: 3, // 一个入口模块最多可以拆分的块数量
      automaticNameDelimiter: '~', // 模块拆分名称的连接符
      // 值为true:webpack会基于代码块和缓存组的key自动选择一个名称
      // 当一个名称匹配到相应的入口名称，这个入口会被移除。
      name: true,
      //命中以下规则将被代码拆分
      cacheGroups: {
        vendors: {
          // node_modules中的模块
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          // default值改为false则关闭这个匹配条件
          minChunks: 2, // 页面引用2次以上的模块
          priority: -20, // 同优先级的规则,以从上到下来匹配
          // 复用已经存在的代码块
          // 需要在精确匹配到对应模块时候才会生效
          reuseExistingChunk: true
        }
      }
    }
  }
};
```

> maxInitialRequests: 一个入口模块最多可以拆分的代码块 chunk 数量

        * 规则:

        -  入口文件本身算一个请求
        -  如果入口里面有动态加载得模块这个不算在内
        -  通过 runtimeChunk 拆分出的 runtime 不算在内
        -  只算 js 文件的请求，css 不算在内
        -  如果同时又两个模块满足 cacheGroup 的规则要进行拆分，
          但是  maxInitialRequests 的值只能允许再拆分一个模块，
          那尺寸更大的模块会被拆分出来

> maxAsyncRequests: 异步按需加载模块最多可拆分的代码块 chunk 数量

        * 规则:

        - import()文件本身算一个请求
        - 并不算 js 以外的公共资源请求比如 css
        - 如果同时又两个模块满足 cacheGroup 的规则要进行拆分，
          但是 maxInitialRequests 的值只能允许再拆分一个模块，
          那尺寸更大的模块会被拆分出来

- ParallelUglifyPlugin(并行插件)

  注意: 该插件已经无人 维护,可以用 terser-webpack-plugin

  这个插件可以帮助有很多入口点的项目加快构建速度。把对 JS 文件的串行压缩变为开启多个子进程并行进行 uglify。

  ```js
  // webpck.config.js

  const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

  plugins: [
    new ParallelUglifyPlugin({
        workerCount: 4,
        uglifyJS: {
            output: {
                beautify: false, // 不需要格式化
                comments: false // 保留注释
            },
            compress: { // 压缩
                warnings: false, // 删除无用代码时不输出警告
                drop_console: true, // 删除console语句
                // 内嵌定义了但是只有用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true
            }
        }
    });
  ]

  ```

- speed-measure-webpack-plugin

  用来检测 webpack 打包过程中各个部分所花费的时间

- webpack 动态引入资源, 使用 prefetch 和 preload

  ```js
  // webpackChunkName: 打包后的文件名,防止出现1.js,2.js这种
  // webpackPrefetch: 开启prefetch (页面空闲时请求, 优先级中等)
  // webpackPreload: 开启preload (更高的优先级,不阻塞onload事件)

  import(
    /* webpackPrefetch: true */
    /*webpackChunkName: 'topic'*/

    '../topic'
  );
  ```

- ParallelUglifyPlugin(并行多进程压缩 js 文件)

  ```js
  module.exports = {
    plugins: [
      new ParallelUglifyPlugin({
        // 传递给 UglifyJS 的参数
        uglifyJS: {
          output: {
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false
          },
          compress: {
            // 在UglifyJs删除没有用到的代码时不输出警告
            warnings: false,
            // 删除所有的 `console` 语句，可以兼容ie浏览器
            drop_console: true,
            // 内嵌定义了但是只用到一次的变量
            collapse_vars: true,
            // 提取出出现多次但是没有定义成变量去引用的静态值
            reduce_vars: true
          }
        }
      })
    ]
  };
  ```

- ModuleConcatenationPlugin(开启 scope hosting 支持, 生产模式默认值)

  对于使用 ES6 的代码,分析出模块之间的依赖关系，尽可能的把打散的模块合并到一个函数中去，但前提是不能造成代码冗余。 因此只有那些被引用了一次的模块才能被合并

  ```js
  const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');

  module.exports = {
    resolve: {
      // 针对 Npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
      mainFields: ['jsnext:main', 'browser', 'main']
    },
    plugins: [
      // 开启 Scope Hoisting
      new ModuleConcatenationPlugin()
    ]
  };
  ```

- webpack.DefinePlugin(定义环境变量)

  该插件用于替换代码中的部分字段,例如定义了下面代码中的方式,那么在客户端中遇到 process.env.NODE_ENV 就会被替换成后面的值(webpack.DefinePlugin 将替换 process.env.NODE_ENV 为您定义的 development)

  ```js
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  });

  new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(true),
    VERSION: JSON.stringify('5fa3b9'),
    BROWSER_SUPPORTS_HTML5: true,
    TWO: '1+1',
    'typeof window': JSON.stringify('object')
  });
  ```

  `DefinePlugin`可能会被误认为其作用是在 webpack 配置文件中为编译后的代码上下文环境设置全局变量，但其实不然。

  它真正的机制是：`DefinePlugin` 的参数是一个 object，那么其中会有一些 key-value 对。在 webpack 编译的时候，会把业务代码中没有定义（使用 `var/const/let` 来预定义的）而变量名又与 key 相同的变量（直接读代码的话的确像是全局变量）替换成 value。

  例如上面的官方例子，PRODUCTION 就会被替换为 true；VERSION 就会被替换为'5fa3b9'（注意单引号）；BROWSER_SUPPORTS_HTML5 也是会被替换为 true；TWO 会被替换为 1+1（相当于是一个数学表达式）；typeof window 就被替换为'object'了。

  再举个例子，比如你在代码里是这么写的：

  ```js
  if (!PRODUCTION) console.log('Debug info');
  if (PRODUCTION) console.log('Production log');
  ```

  那么在编译生成的代码里就会是这样了：

  ```js
  if (!true) console.log('Debug info');
  if (true) console.log('Production log');
  ```

  而如果你用了 UglifyJsPlugin，则会变成这样：

  ```js
  console.log('Production log');
  ```

- terser-webpack-plugin

  [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin) 是一个使用 terser 压缩 js 的 webpack 插件

  压缩是发布前处理最耗时间的一个步骤，如果是你是在 webpack 4 中，只要几行代码，即可加速你的构建发布速度

  ```js
  const TerserPlugin = require('terser-webpack-plugin');
  module.exports = {
    optimization: {
      minimizer: [
        new TerserPlugin(
          (parallel: true) // 多线程
        )
      ]
    }
  };
  ```

---

## 常用优化手段

webpack 的优化手段主要从两个方向来进行:

1. 减少 Webpack 的打包时间
2. 减小 Webpack 打包体积

### 减少打包时间策略

- 缩小搜索范围

webpack 的各种路径搜索递归查找很耗时间,因此对部分选项进行明确的路径配置,减少搜索时间

```js
module.exports = {
  module: {
    // 由于 Loader 对文件的转换操作很耗时，需要让尽可能少的文件被 Loader 处理,可以通过 include 去命中只有哪些文件需要被处理。
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src')
      }
    ],
    //一些库，例如 jQuery 、ChartJS， 它们庞大又没有采用模块化标准，让 Webpack 去解析这些文件耗时又没有意义
    noParse: [/react\.min\.js$/]
  },
  /* 
    resolve.modules 的默认值是 ['node_modules']，含义是先去当前目录下的 ./node_modules 目录下去找想找的模块，如果没找到就去上一级目录 ../node_modules 中找，再没有就去 ../../node_modules 中找，以此类推，这和 Node.js 的模块寻找机制很相似。
  
    当安装的第三方模块都放在项目根目录下的 ./node_modules 目录下时，没有必要按照默认的方式去一层层的寻找，可以指明存放第三方模块的绝对路径，以减少寻找，配置如下
    */
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    // 入口文件配置
    mainFields: ['main'],
    alias: {
      /* 默认情况下 Webpack 会从入口文件 ./node_modules/react/react.js 开始递归的解析和处理依赖的几十个文件，这会时一个耗时的操作。 通过配置 resolve.alias 可以让 Webpack 在处理 React 库时，直接使用单独完整的 react.min.js 文件，从而跳过耗时的递归解析操作 */
      react: path.resolve(__dirname, './node_modules/dist/react.min.js')
    },
    /*  如果这个列表越长，或者正确的后缀在越后面，就会造成尝试的次数越多，所以 resolve.extensions 的配置也会影响到构建的性能。 在配置 resolve.extensions 时你需要遵守以下几点，以做到尽可能的优化构建性能：
  
      后缀尝试列表要尽可能的小，不要把项目中不可能存在的情况写到后缀尝试列表中。
      频率出现最高的文件后缀要优先放在最前面，以做到尽快的退出寻找过程。
      在源码中写导入语句时，要尽可能的带上后缀，从而可以避免寻找过程。例如在你确定的情况下把 require('./data') 写成 require('./data.json')。 */
    extension: ['js']
  }
};
```

- 使用多进程加速 loader

在 webpack 构建的过程中,最耗时的操作就是 loader 处理文件这一步,
受限于 Node 是单线程运行的，所以 Webpack 在打包的过程中也是单线程的，特别是在执行 Loader 的时候，长时间编译的任务很多，这样就会导致等待的情况。

HappyPack 可以将 Loader 的同步执行转换为并行的，这样就能充分利用系统资源来加快打包效率了

```js
module: {
  loaders: [
    {
      test: /\.js$/,
      include: [resolve('src')],
      exclude: /node_modules/,
      // id 后面的内容对应下面
      loader: 'happypack/loader?id=happybabel'
    }
  ]
},
plugins: [
  new HappyPack({
    id: 'happybabel',
    loaders: ['babel-loader?cacheDirectory'],
    // 开启 4 个线程
    threads: 4
  })
]
```

- 使用动态链接库 DllPlugin

::: warning 注意:
主要用于开发环境
:::

DllPlugin 可以将特定的类库提前打包然后引入。这种方式可以极大的减少打包类库的次数，只有当类库更新版本才有需要重新打包，并且也实现了将公共代码抽离成单独文件的优化方案。

接下来我们就来学习如何使用 DllPlugin

```js
// 单独配置在一个文件中
// webpack.dll.conf.js
const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    // 想统一打包的类库
    vendor: ['react']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: '[name]-[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      // name 必须和 output.library 一致
      name: '[name]-[hash]',
      // 该属性需要与 DllReferencePlugin 中一致
      context: __dirname,
      path: path.join(__dirname, 'dist', '[name]-manifest.json')
    })
  ]
};
```

然后我们需要执行这个配置文件生成依赖文件，接下来我们需要使用 DllReferencePlugin 将依赖文件引入项目中

```js
// webpack.conf.js
module.exports = {
  // ...省略其他配置
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      // manifest 就是之前打包出来的 json 文件
      manifest: require('./dist/vendor-manifest.json')
    })
  ]
};
```

- babel-loader 设置缓存

> 设置 babel 的 cacheDirectory 为 true

babel 编译代码的过程太慢了,不仅要使用 exclude、include，尽可能准确的指定要转化内容的范畴，而且要充分利用缓存，进一步提升性能。babel-loader 提供了 cacheDirectory 特定选项（默认 false）：设置时，给定的目录将用于缓存加载器的结果

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory=true',
        exclude: /node_modules/,
        include: [resolve('src'), resolve('test')]
      }
    ]
  }
};
```

- 使用 terser-webpack-plugin 加速代码压缩

::: warning 注意:
webpack4 使用 [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin)

webpack3 使用 [webpack-parallel-uglify-plugin](https://github.com/gdborton/webpack-parallel-uglify-plugin#readme)

该插件主要用于线上环境
:::

压缩是发布前处理最耗时间的一个步骤，因此也需要采用并行多进程的方式来开启加速,如果是你是在 webpack 4 中，只要几行代码，即可加速你的构建发布速度

```js
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]

    //或者使用ugifyjs开启parallel
    /* minimizer: [
      new UglifyJsPlugin({
        include: /\/includes/,
        parallel: true // 或者写核心数
      })
    ] */
  }
};
```

- 开发环境开启热更新

为了加速本地开发环境的构建速度, 开启热模块替换能节省更多的时间,在 webpack 中只需要开启 devServer 的 hot 选项; 此时 webpack.HotModuleReplacementPlugin 自动会添加到 webpack 中

```js
module.exports = {
  //...
  devServer: {
    hot: true
  }
};
```

### 减小打包体积策略

- 使用按需加载

一般按需加载都是 PWA 页面路由的懒加载,使用 esmodule 的 import()来进行加载, 此处使用 vue 的路由配置作为示例

```js
// 如果是首页可以开启preload选项来加速显示
{
  path: '/',
  name: '',
  meta: { title: '温馨提示' },
  component: () => import(
    /* webpackChunkName: "index" */
    /* webpackPreload: true */
    './views/index.vue')
}
```

- 使用作用域提升 Scope Hoisting

Scope Hoisting 尽可能的把打散的模块合并到一个函数中去，但前提是不能造成代码冗余。 因此只有那些被引用了一次的模块才能被合并,从而减小了代码体积

在 webpack4 只需要开启选项 `concatenateModules` 即可

```js
module.exports = {
  //...
  optimization: {
    concatenateModules: true
  }
};
```

- 使用 Tree Shaking

::: warning 注意

webpack 4 正式版本扩展了副作用检测能力，通过 `package.json` 的 `"sideEffects"` 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "pure(纯的 ES2015 模块)"，由此可以安全地删除文件中未使用的部分。使用 `Tree Shaking`, 应该明确标识出代码的 `sideEffects`

:::

sideEffects 配置如下

```json
{
  "name": "your-project",
  "sideEffects": ["./src/some-side-effectful-file.js", "*.css", "..."],
  // 无副作用直接设置为false
  "sideEffects": false
}
```

TreeShaing 的开启如下

```js
module.exports = {
  //...
  optimization: {
    usedExports: true,
    sideEffects: true // 有副作用时此处也要配置为true
  }
};
```

- 压缩代码

webpack4 配置方式需要只需要开启 minimizer 选项即可

```js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: /\/includes/,
        parallel: true,
        sourceMap: true, //使用源映射将错误消息位置映射到模块
        cache: true //启用文件缓存
      })
    ]
  }
};
```

- 提取公共代码

多个页面公共的代码抽离成单独的文件, 可以减少网络传输流量，降低服务器成本,也解决了重复代码导致的包体积变大, 再加上缓存策略;能够加速页面加载速度

```js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
```

- 使用 prepack

:::warning 警告
该功能仍然是实验性的, 在生产环境不建议使用
:::

直接上代码吧

```js
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

module.exports = {
  plugins: [new PrepackWebpackPlugin()]
};
```

- 拷贝静态文件

在前文 Webpack 打包优化之体积篇中提到，引入 DllPlugin 和 DllReferencePlugin 来提前构建一些第三方库，来优化 Webpack 打包。而在生产环境时，就需要将提前构建好的包，同步到 dist 中；这里拷贝静态文件，你可以使用 copy-webpack-plugin 插件：把指定文件夹下的文件复制到指定的目录；其配置如下：

```js
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  plugins: [
    // ......
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
};
```

## 核心选项 optimization

optimization 包含了 webpack 关键的优化配置选项, 以下几个选项跟浏览器缓存息息相关, 此处做一个记录

- `namedModules`:

  在开发环境的打包结果中,使用路径作为模块的名称, 固化 moduleId

- `namedChunks`:

  在开发环境的打包结果中,固化 runtime 代码以及动态加载时分离出的 chunk 的 chunkId

- `moduleIds`:

  生产环境固化 moduleId

  | 选项       | 描述                                  |
  | ---------- | ------------------------------------- |
  | natural    | 按使用顺序的数字 ID                   |
  | named      | 可读的 ID，以进行更好的调试。         |
  | hashed     | 短哈希作为 id，可以更好地进行长期缓存 |
  | size       | 数字 ID 专注于最小的初始下载大小      |
  | total-size | 数字 ID 专注于最小的总下载大小        |

- `chunkIds`:

  生产环境固化 runtime 和异步代码 chunkId

  选项参照`moduleIds`的配置项

- `nodeEnv`:

  webpack 将 process.env.NODE_ENV 设置为一个给定的字符串。如果 optimization.nodeEnv 不是 false，可以使用 DefinePlugin，配置为 optimization.nodeEnv 的值，如果为 falsy 值，可以返回退到"production"

## 部分疑惑选项记录

- include/exclude/test 的区别

> **test**：必须满足的条件（正则表达式，不要加引号，匹配要处理的文件）
> **exclude**：不能满足的条件（排除不处理的目录）
> **include**：导入的文件将由加载程序转换的路径或文件数组（把要处理的目录包括进来）
> **loader**：一串“！”分隔的装载机（2.0 版本以上，”-loader”不可以省略）
> **loaders**：作为字符串的装载器阵列

```js
    module.exports = {
    module: {
      rules: [
        {
          // "test" is commonly used to match the file extension
          test: /\.jsx$/,

          // "include" is commonly used to match the directories
          include: [
            path.resolve(__dirname, "app/src"),
            path.resolve(__dirname, "app/test")
          ],
          // "exclude" should be used to exclude exceptions
          // try to prefer "include" when possible

          // the "loader"
          loader: "babel-loader" // or "babel" because webpack adds the '-loader' automatically
        }
      ];
    }
    }
```

- output 选项的 chunkFilename

> 作用: 配置无入口的 Chunk 在输出时的文件名称

常见的会在运行时生成 Chunk 场景有在使用 CommonChunkPlugin、使用 import('path/to/module') 动态加载等时。 chunkFilename 支持和 filename 一致的内置变量

- splitChunks 与 dllplugin 的区别:

> 都是提取公共代码插件

总而言之，它们看起来很相似，但它们可以让你击中不同的目标。这么多，你可以考虑在开发环境中使用 DllPlugin（优点：编译时间短），同时使用 splitChunks 进行生产（优点：app 更改时的加载时间短）。同样，您也可以在生产中使用 DllPlugin，只需要连续运行两个版本的小麻烦：一个用于 DLL，另一个用于应用程序。

附上 stackoverflow 中的[分析连接](https://stackoverflow.com/questions/41890855/webpack-common-chunks-plugin-vs-webpack-dll-plugin)

- output 选项中的[hash]以及[chunkhash]

> chunkhash 只能用于生产环境, 而 hash 一般用于开发环境,因为 chunkhash 与 HMR 冲突

- runtime && manifest

> **runtime**: 就是帮助 webpack 编译构建后的打包文件在浏览器运行的一些辅助代码段，换句话说，打包后的文件，除了你自己的源码和 npm 库外，还有 webpack 提供的一点辅助代码段

> **manifest**: 则是 webpack 用以查找 chunk 真实路径所使用的一份关系表，简单来说，就是 chunk 名对应 chunk 路径的关系表

## 注入全局变量

注入全局变量可以使用三种途径来完成

- ProvidePlugin

- exposed-loader

那他们有什么区别呢?

### ProvidePlugin

ProvidePlugin 用来自动加载模块，而不必到处 import 或 require

它的机制是当 webpack 加载到某个 js 模块里，出现了未定义且名称符合（字符串完全匹配）配置中 key 的变量时，会自动 require 配置中 value 所指定的 js 模块

```js
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
});
```

### exposed-loader

看名称可以知道这个一个暴露全局变量的 loader,当某个 js 模块显式地调用 `import $ from 'jquery'`的时候，就会将\$注入到 window 中

```js
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: '$'
          }
        ]
      }
    ]
  }
};

// 在应用代码中使用

import $ from 'jquery';

// 就能直接读取到window.$
```

::: tip 提示
html 已经通过 script 引入了一些外部 CDN 模块(例如 `vue.min.js`), 在代码中就不要再次引入

`import Vue from 'vue'`

在 webpack 配置中, 使用 external 选项,将 Vue 给排除在外,以免引起模块多次打包,体积增大
:::

## Git 提交钩子(husky 和 yorkie)

husky 和 yorkie 都是提交钩子, 两者区别参考[原文地址](https://segmentfault.com/a/1190000016750078)

[git 钩子介绍](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)

> 客户端钩子包括：pre-commit、prepare-commit-msg、commit-msg、post-commit 等，主要用于控制客户端 git 的提交工作流。服务端钩子：pre-receive、post-receive、update，主要在服务端接收提交对象时、推送到服务器之前调用

[关于 husky](https://github.com/typicode/husky)

> husky 可以让 git hooks 的使用变得更简单方便。运行 npm install husky@next --save-dev 安装最新版本，它会在我们项目根目录下面的.git/hooks 文件夹下面创建 pre-commit、pre-push 等 hooks。这些 hooks 可以让我们直接在 package.json 的 script 里运行我们想要在某个 hook 阶段执行的命令

::: warning husky 使用注意
husky 对应属性名已经改为 HUSKY_GIT_PARAMS , 而不是原始的 GIT_PARAMS 环境变量
:::

```js
{
   "husky": {
     "hooks": {
       "pre-commit": "lint-staged"
     }
   },
   "lint-staged": {
     "*.js": ["eslint --fix", "git add"]
   }
}
```

[关于 youkie](https://github.com/yyx990803/yorkie)

> 在 vue 最新的版本中，已经使用尤大改写的 youkie， youkie 实际是 fork husky,然后做了一些定制化的改动， 使得钩子能从 package.json 的 "gitHooks"属性中读取

```js
{
 "gitHooks": {
   "pre-commit": "lint-staged",
   "commit-msg": "node scripts/verify-commit-msg.js" //t比提交信息检查 [连接](https://github.com/vuejs/vue/blob/dev/scripts/verify-commit-msg.js)
 }
 "lint-staged": {
   "*.js": [
     "eslint --fix",
     "git add"
   ]
 }
}
```

[关于 lint-staged](https://github.com/okonet/lint-staged)

> 只 lint 当前改动的文件，lint-staged 就非常准确的解决了这一问题，从这个包名，就可以看出，Run linters on git staged files，只针对改动的文件进行处理

---
