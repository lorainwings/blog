(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{409:function(a,t,v){"use strict";v.r(t);var _=v(27),r=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"react-中的设计理论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#react-中的设计理论"}},[a._v("#")]),a._v(" React 中的设计理论")]),a._v(" "),v("p",[a._v("React 的生态万紫千红, 可谓是繁花似锦; 从这些框架及工具中衍生了各种的设计模式及理论知识, 本文就来盘点记录下相关的知识点")]),a._v(" "),v("h2",{attrs:{id:"组件设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件设计"}},[a._v("#")]),a._v(" 组件设计")]),a._v(" "),v("p",[a._v("如今各种前端框架均统一了组件化的思维, 面试中也会被问到, 如何设计一个组件(库), 笔者认为应该分为以下几个部分:")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("贯彻单一职责的原则")])]),a._v(" "),v("li",[v("p",[a._v("组件的通信和封装")])]),a._v(" "),v("li",[v("p",[a._v("组件的可组合性")])]),a._v(" "),v("li",[v("p",[a._v("组件的可测试性")])]),a._v(" "),v("li",[v("p",[a._v("组件的归类分类")])]),a._v(" "),v("li",[v("p",[a._v("组件的命名规范")])])]),a._v(" "),v("h3",{attrs:{id:"单一职责原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单一职责原则"}},[a._v("#")]),a._v(" 单一职责原则")]),a._v(" "),v("p",[a._v("良好的设计中, 一个组件只干一件事情; 单一职责在组件中决定了组件如何拆分; 保持组件的单一职责将会非常重要，甚 至我们可以使用 HoC 强制组件的单一职责性。")]),a._v(" "),v("h3",{attrs:{id:"组件的通信和封装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件的通信和封装"}},[a._v("#")]),a._v(" 组件的通信和封装")]),a._v(" "),v("p",[a._v("这块涉及到组件的参数设计、输入校验检查等， 也就是组件的健壮性；封装性决定了组件如何组织结构;")]),a._v(" "),v("h3",{attrs:{id:"组件的可组合性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件的可组合性"}},[a._v("#")]),a._v(" 组件的可组合性")]),a._v(" "),v("p",[a._v("这块设计到整个组件如何拼接整个应用, 也就是组件的可复用性和扩展性;")]),a._v(" "),v("h3",{attrs:{id:"组件的可测试性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件的可测试性"}},[a._v("#")]),a._v(" 组件的可测试性")]),a._v(" "),v("p",[a._v("良好的组件设计会让自动化测试变得异常简单, 这也涉及到良好的组件拆分")]),a._v(" "),v("h3",{attrs:{id:"多组件的分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多组件的分类"}},[a._v("#")]),a._v(" 多组件的分类")]),a._v(" "),v("p",[a._v("如果需要设计一个组件库, 需要考虑的组件的拆分, 将组件分为纯组件和非纯(副作用)组件, 也就是对应"),v("code",[a._v("React")]),a._v("中的"),v("code",[a._v("Dumb")]),a._v("和"),v("code",[a._v("Smartß")]),a._v("组件")]),a._v(" "),v("h3",{attrs:{id:"组件的命名规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件的命名规范"}},[a._v("#")]),a._v(" 组件的命名规范")]),a._v(" "),v("p",[a._v("最后一步讲组件的命名, 主要是这块大多数人都觉得可有可无不重要, 其实良好的组件设计中, 组件名应该是能够见名知意的")]),a._v(" "),v("h2",{attrs:{id:"状态管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态管理"}},[a._v("#")]),a._v(" 状态管理")]),a._v(" "),v("p",[a._v("现在各种主流框架都会有各种的状态管理库, 而且框架中亦能自己管理状态; 所以问题就来了: "),v("strong",[a._v("到底什么样的状态用框架自带的状态来管理(局部状态),什么情况使用状态管理类库呢?")])]),a._v(" "),v("p",[a._v("其实在历经这么多年的发展, 早已有最佳实践, 现在笔者来总结下:")]),a._v(" "),v("p",[a._v("状态拆分原则:")]),a._v(" "),v("ol",[v("li",[v("p",[a._v("公共通用数据放状态类库 (redux/vuex), 否则私有数据放框架局部 (react/vue) 中管理")])]),a._v(" "),v("li",[v("p",[a._v("分散虚复用数据放状态类库, 频繁变动的原子级别数据放局部管理")])]),a._v(" "),v("li",[v("p",[a._v("刷新需要持久化的放在 localstorage 中")])])]),a._v(" "),v("h2",{attrs:{id:"react-hooks"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks"}},[a._v("#")]),a._v(" React-Hooks")]),a._v(" "),v("p",[a._v("React-Hooks 解决了类组件什么历史问题:")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("状态难以复用(HOC 导致嵌套层级过多)")])]),a._v(" "),v("li",[v("p",[a._v("复杂组件难以维护(逻辑分散且生命周期太多)")])]),a._v(" "),v("li",[v("p",[a._v("this 指向问题")])])]),a._v(" "),v("h2",{attrs:{id:"react-类组件的生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#react-类组件的生命周期"}},[a._v("#")]),a._v(" React 类组件的生命周期")]),a._v(" "),v("p",[a._v("此处贴一张自己画的图")]),a._v(" "),v("p",[v("img",{attrs:{src:"/blog/skills/images/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.jpg",alt:"React 的生命周期"}})]),a._v(" "),v("h2",{attrs:{id:"组件的逻辑复用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件的逻辑复用"}},[a._v("#")]),a._v(" 组件的逻辑复用")]),a._v(" "),v("p",[a._v("如今组件的逻辑复用, 主要有以下几种方式")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("Mixin")])]),a._v(" "),v("li",[v("p",[a._v("HOC")])]),a._v(" "),v("li",[v("p",[a._v("Render Props")])]),a._v(" "),v("li",[v("p",[a._v("Hooks")])])]),a._v(" "),v("h3",{attrs:{id:"mixin-的优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mixin-的优缺点"}},[a._v("#")]),a._v(" Mixin 的优缺点")]),a._v(" "),v("p",[a._v("Mixin 作为早期数据复用的方式, 本质是将对象复制到另一个对象; 主要缺点是:")]),a._v(" "),v("p",[a._v("相关依赖：mixin 有可能去依赖其他的 mixin，当我们修改其中一个的时候，可能会影响到其他的 mixin")]),a._v(" "),v("p",[a._v("命名冲突：不同的人在写的时候很有可能会有命名冲突，比如像 handleChange 等类似常见的名字")]),a._v(" "),v("p",[a._v("增加复杂性：当我们一个组件引入过多的 mixin 时，代码逻辑将会非常复杂，因为在不停的引入状态，和我们最初想的每个组件只做单一的功能背道而驰。")]),a._v(" "),v("h3",{attrs:{id:"hoc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hoc"}},[a._v("#")]),a._v(" HOC")]),a._v(" "),v("p",[a._v("HOC 优点是不会影响组件内部的状态,但是缺点也有:")]),a._v(" "),v("p",[a._v("需要在原组件上进行包裹和嵌套，如果大量使用 HOC，将会产生非常多的嵌套，这让调试变得非常困难")]),a._v(" "),v("p",[a._v("HOC 可以劫持 props，在不遵守约定的情况下也可能造成冲突")]),a._v(" "),v("h3",{attrs:{id:"render-props"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#render-props"}},[a._v("#")]),a._v(" Render Props")]),a._v(" "),v("p",[v("code",[a._v("Render Props")]),a._v("灵活性非常高, 扩展性也很强;但是本身的缺点就是太容易造成“嵌套地狱”")]),a._v(" "),v("h3",{attrs:{id:"hooks"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[a._v("#")]),a._v(" Hooks")]),a._v(" "),v("p",[a._v("Hooks 可以算是终级解决方案了, 解决了上面的一系列问题")]),a._v(" "),v("h2",{attrs:{id:"为什么要引入-redux"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要引入-redux"}},[a._v("#")]),a._v(" 为什么要引入 Redux")]),a._v(" "),v("p",[v("code",[a._v("Redux")]),a._v(" 设计理念: 使用简单数组和对象来表示状态, 使用对象来描述状态的改变, 状态的改变逻辑必须是纯函数, 规范了状态管理的思想:")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("Redux 三个特点: 单一数据源, 所有数据都是只读的(只能通过 dispath('name',action)来触发), 处理 action 只是新生成对象而不修改原状态")])]),a._v(" "),v("li",[v("p",[a._v("注定了 Redux 的数据可靠性, 可测试性, 无副作用, 数据的来源是清晰的, 数据的修改也能追溯")])]),a._v(" "),v("li",[v("p",[a._v("而 set/get 的状态管理混乱, 无数据可靠性(不清楚 set 是否会覆盖其他的对象), 无法追溯数据来源(直接 get 太混乱, 导致复用性差), 不便于测试")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);