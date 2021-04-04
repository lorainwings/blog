(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{416:function(a,e,s){"use strict";s.r(e);var t=s(27),v=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"webpack-源码流程分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-源码流程分析"}},[a._v("#")]),a._v(" Webpack 源码流程分析")]),a._v(" "),s("p",[a._v("本文来分析一下前端最流行的构建工具"),s("code",[a._v("webpack")]),a._v("的源码流程, 以便加深自己对"),s("code",[a._v("webpack")]),a._v("的理解")]),a._v(" "),s("h2",{attrs:{id:"从命令行开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从命令行开始"}},[a._v("#")]),a._v(" 从命令行开始")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("webpack entry.js bundle.js\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build/dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("我们直接执行该命令, 那么"),s("code",[a._v("webpack")]),a._v("在这个过程中做了什么操作呢?")]),a._v(" "),s("h2",{attrs:{id:"首先找到命令的执行入口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首先找到命令的执行入口"}},[a._v("#")]),a._v(" 首先找到命令的执行入口")]),a._v(" "),s("p",[a._v("npm 会让命令行工具进入 "),s("code",[a._v("node_modules/bin")]),a._v("目录查找是否存在"),s("code",[a._v("webpack.sh")]),a._v("或者"),s("code",[a._v("webpack.cmd")]),a._v(", 存在就执行, 否则抛出错误")]),a._v(" "),s("p",[s("code",[a._v("node_modules/bin/webpack")]),a._v(" 是 "),s("code",[a._v("node_modules/webpack/bin/webpack.js")]),a._v("的一个映射 link")]),a._v(" "),s("p",[a._v("那么, webpack 实际的执行入口是"),s("code",[a._v("node_modules/webpack/bin/webpack.js")])]),a._v(" "),s("h2",{attrs:{id:"分析-webpack-的入口文件-webpack-js-源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析-webpack-的入口文件-webpack-js-源码"}},[a._v("#")]),a._v(" 分析 webpack 的入口文件: webpack.js 源码")]),a._v(" "),s("p",[a._v("通过结构分析, 可以将该源码拆分为下面几个模块")]),a._v(" "),s("p",[s("img",{attrs:{src:"/blog/skills/images/webpack-source-frame.png",alt:"webpack入口文件结构"}})]),a._v(" "),s("p",[a._v("主要逻辑是, 当命令开始执行时, 判断是否安装"),s("code",[a._v("webpack-cli")]),a._v("或者"),s("code",[a._v("webpack-command")]),a._v(" ?")]),a._v(" "),s("p",[a._v("如果没有安装将提示用户安装, 与用户交互后, 用户同意安装则自动帮用户安装好")]),a._v(" "),s("p",[a._v("如果已经安装且只安装了一个"),s("code",[a._v("cli")]),a._v(", 使用"),s("code",[a._v("require.resolve")]),a._v("来读取"),s("code",[a._v("cli")]),a._v("的位置, 并加载")]),a._v(" "),s("p",[a._v("如果安装了 2 个"),s("code",[a._v("cli")]),a._v(", 抛出错误"),s("code",[a._v('To work with the "webpack" command you need only one CLI package, please remove one of them or use them directly via their binary.')])]),a._v(" "),s("p",[a._v("最终的结果: "),s("code",[a._v("webpack")]),a._v("找到"),s("code",[a._v("webpack-cli")]),a._v("或者"),s("code",[a._v("webpack-command")]),a._v("这个 npm 包, 并且执行 cli")]),a._v(" "),s("h2",{attrs:{id:"执行-webpack-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行-webpack-cli"}},[a._v("#")]),a._v(" 执行 webpack-cli")]),a._v(" "),s("p",[s("img",{attrs:{src:"/blog/images/webpack-non-compiler.png",alt:"webpack-cli"}})]),a._v(" "),s("ul",[s("li",[a._v("引入"),s("code",[a._v("yargs")]),a._v(", 对命令行进行定制")]),a._v(" "),s("li",[a._v("分析命令行参数, 对各个参数进行转换, 组成编译配置项")]),a._v(" "),s("li",[a._v("引用"),s("code",[a._v("webpack")]),a._v(", 根据配置项进行编译和构建")])]),a._v(" "),s("p",[s("code",[a._v("webpack-cli")]),a._v("使用 args 分析")]),a._v(" "),s("p",[s("img",{attrs:{src:"/blog/skills/images/webpack-cli-args.png",alt:"webpack-cli-args"}})]),a._v(" "),s("p",[s("code",[a._v("webpack-cli")]),a._v("对配置文件和命令行参数进行转换最终生成配置选项参数 options")]),a._v(" "),s("p",[a._v("最终会根据配置参数实例化 webpack 对象,然后执行构建流程")]),a._v(" "),s("h2",{attrs:{id:"tapable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tapable"}},[a._v("#")]),a._v(" Tapable")]),a._v(" "),s("p",[s("code",[a._v("Webpack")]),a._v(" 可以将其理解是一种基于事件流的编程范例, 一系列的插件运行")]),a._v(" "),s("h3",{attrs:{id:"什么是-tapable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-tapable"}},[a._v("#")]),a._v(" 什么是 Tapable")]),a._v(" "),s("p",[s("code",[a._v("Tapable")]),a._v("是一种类似于 Node.js 的"),s("code",[a._v("EventEmitter")]),a._v("的库, 主要是控制钩子函数的发布与订阅,控制着 webpack 的插件系统")]),a._v(" "),s("h3",{attrs:{id:"tapable-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tapable-hooks"}},[a._v("#")]),a._v(" Tapable Hooks")]),a._v(" "),s("p",[s("img",{attrs:{src:"/blog/skills/images/tapable-hooks.png",alt:"tapable-hooks"}})]),a._v(" "),s("p",[s("code",[a._v("Tapable Hooks")]),a._v("的类型:")]),a._v(" "),s("p",[s("img",{attrs:{src:"/blog/skills/images/tapable-hooks-type.png",alt:"tapable-hooks-type"}})]),a._v(" "),s("h3",{attrs:{id:"tapable-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tapable-的使用"}},[a._v("#")]),a._v(" Tapable 的使用")]),a._v(" "),s("p",[s("code",[a._v("Tapable")]),a._v("暴露出来的都是类方法, new 一个类方法获取我们需要的钩子")]),a._v(" "),s("p",[a._v("class 接受数组参数 options, 非必传。类方法会根据传参， 接受同样数量的参数。")])])}),[],!1,null,null,null);e.default=v.exports}}]);