(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{398:function(t,s,n){"use strict";n.r(s);var a=n(27),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"event-loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[t._v("#")]),t._v(" Event Loop")]),t._v(" "),n("p",[t._v("在前两章节中我们了解了 JS 异步相关的知识。在实践的过程中，你是否遇到过以下场景，为什么 "),n("code",[t._v("setTimeout")]),t._v(" 会比 "),n("code",[t._v("Promise")]),t._v(" 后执行，明明代码写在 "),n("code",[t._v("Promise")]),t._v(" 之前。这其实涉及到了 Event Loop 相关的知识，这一章节我们会来详细地了解 Event Loop 相关知识，知道 JS 异步运行代码的原理，并且这一章节也是面试常考知识点。")]),t._v(" "),n("h2",{attrs:{id:"进程与线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[t._v("#")]),t._v(" 进程与线程")]),t._v(" "),n("blockquote",[n("p",[t._v("涉及面试题：进程与线程区别？JS 单线程带来的好处？")])]),t._v(" "),n("p",[t._v("相信大家经常会听到 JS 是"),n("strong",[t._v("单线程")]),t._v("执行的，但是你是否疑惑过什么是线程？")]),t._v(" "),n("p",[t._v("讲到线程，那么肯定也得说一下进程。本质上来说，两个名词都是 CPU "),n("strong",[t._v("工作时间片")]),t._v("的一个描述。")]),t._v(" "),n("p",[t._v("进程描述了 CPU 在"),n("strong",[t._v("运行指令及加载和保存上下文所需的时间")]),t._v("，放在应用上来说就代表了一个程序。线程是进程中的更小单位，描述了执行一段指令所需的时间。")]),t._v(" "),n("p",[t._v("把这些概念拿到浏览器中来说，当你打开一个 Tab 页时，其实就是创建了一个进程，一个进程中可以有多个线程，比如渲染线程、JS 引擎线程、HTTP 请求线程等等。当你发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁。")]),t._v(" "),n("p",[t._v("上文说到了 JS 引擎线程和渲染线程，大家应该都知道，在 JS 运行的时候可能会阻止 UI 渲染，这说明了两个线程是"),n("strong",[t._v("互斥")]),t._v("的。这其中的原因是因为 JS 可以修改 DOM，如果在 JS 执行的时候 UI 线程还在工作，就可能导致不能安全的渲染 UI。这其实也是一个单线程的好处，得益于 JS 是单线程运行的，可以达到节省内存，节约上下文切换时间，没有锁的问题的好处。当然前面两点在服务端中更容易体现，对于锁的问题，形象的来说就是当我读取一个数字 15 的时候，同时有两个操作对数字进行了加减，这时候结果就出现了错误。解决这个问题也不难，只需要在读取的时候加锁，直到读取完毕之前都不能进行写入操作。")]),t._v(" "),n("h2",{attrs:{id:"执行栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行栈"}},[t._v("#")]),t._v(" 执行栈")]),t._v(" "),n("blockquote",[n("p",[t._v("涉及面试题：什么是执行栈？")])]),t._v(" "),n("p",[t._v("可以把执行栈认为是一个存储函数调用的"),n("strong",[t._v("栈结构")]),t._v("，遵循先进后出的原则。\n"),n("img",{attrs:{src:"/blog/skills/images/event-loop-1.gif",alt:"执行栈可视化"}}),t._v("执行栈可视化\n当开始执行 JS 代码时，首先会执行一个 "),n("code",[t._v("main")]),t._v(" 函数，然后执行我们的代码。根据先进后出的原则，后执行的函数会先弹出栈，在图中我们也可以发现，"),n("code",[t._v("foo")]),t._v(" 函数后执行，当执行完毕后就从栈中弹出了。")]),t._v(" "),n("p",[t._v("平时在开发中，大家也可以在报错中找到执行栈的痕迹")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("thrownewError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("functionbar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:"/blog/skills/images/event-loop-2.jpg",alt:"函数执行顺序"}}),t._v("函数执行顺序\n大家可以在上图清晰的看到报错在 "),n("code",[t._v("foo")]),t._v(" 函数，"),n("code",[t._v("foo")]),t._v(" 函数又是在 "),n("code",[t._v("bar")]),t._v(" 函数中调用的。")]),t._v(" "),n("p",[t._v("当我们使用递归的时候，因为栈可存放的函数是有"),n("strong",[t._v("限制")]),t._v("的，一旦存放了过多的函数且没有得到释放的话，就会出现爆栈的问题")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:"/blog/skills/images/event-loop-3.jpg",alt:"爆栈"}}),t._v("爆栈")]),t._v(" "),n("h2",{attrs:{id:"浏览器中的-event-loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中的-event-loop"}},[t._v("#")]),t._v(" 浏览器中的 Event Loop")]),t._v(" "),n("blockquote",[n("p",[t._v("涉及面试题：异步代码执行顺序？解释一下什么是 Event Loop ？")])]),t._v(" "),n("p",[t._v("上一小节我们讲到了什么是执行栈，大家也知道了当我们执行 JS 代码的时候其实就是往执行栈中放入函数，那么遇到异步代码的时候该怎么办？其实当遇到异步的代码时，会被"),n("strong",[t._v("挂起")]),t._v("并在需要执行的时候加入到 Task（有多种 Task） 队列中。一旦执行栈为空，Event Loop 就会从 Task 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 JS 中的异步还是同步行为。\n"),n("img",{attrs:{src:"/blog/skills/images/event-loop-4.jpg",alt:"事件循环"}}),t._v("事件循环")]),t._v(" "),n("p",[t._v("不同的任务源会被分配到不同的 Task 队列中，任务源可以分为 "),n("strong",[t._v("微任务")]),t._v("（microtask） 和 "),n("strong",[t._v("宏任务")]),t._v("（macrotask）。在 ES6 规范中，microtask 称为 "),n("code",[t._v("jobs")]),t._v("，macrotask 称为 "),n("code",[t._v("task")]),t._v("。下面来看以下代码的执行顺序：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script start'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async1 end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async2 end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Promise'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修正后的执行顺序:")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// script start => async2 end => Promise => script end => async1 end => promise1 => promise2 => setTimeout")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("注意：新的浏览器中不是如上打印的，因为 await 变快了，具体内容可以往下看")])]),t._v(" "),n("p",[t._v("首先先来解释下上述代码的 "),n("code",[t._v("async")]),t._v(" 和 "),n("code",[t._v("await")]),t._v(" 的执行顺序。当我们调用 "),n("code",[t._v("async1")]),t._v(" 函数时，会马上输出 "),n("code",[t._v("async2 end")]),t._v("，并且函数返回一个 "),n("code",[t._v("Promise")]),t._v("，接下来在遇到 "),n("code",[t._v("await")]),t._v("的时候会就让出线程开始执行 "),n("code",[t._v("async1")]),t._v(" 外的代码，所以我们完全可以把 "),n("code",[t._v("await")]),t._v(" 看成是"),n("strong",[t._v("让出线程")]),t._v("的标志。")]),t._v(" "),n("p",[t._v("然后当同步代码全部执行完毕以后，就会去执行所有的异步代码，那么又会回到 "),n("code",[t._v("await")]),t._v(" 的位置执行返回的 "),n("code",[t._v("Promise")]),t._v(" 的 "),n("code",[t._v("resolve")]),t._v(" 函数，这又会把 "),n("code",[t._v("resolve")]),t._v(" 丢到微任务队列中，接下来去执行 "),n("code",[t._v("then")]),t._v(" 中的回调，当两个 "),n("code",[t._v("then")]),t._v(" 中的回调全部执行完毕以后，又会回到 "),n("code",[t._v("await")]),t._v(" 的位置处理返回值，这时候你可以看成是 "),n("code",[t._v("Promise.resolve(返回值).then()")]),t._v("，然后 "),n("code",[t._v("await")]),t._v(" 后的代码全部被包裹进了 "),n("code",[t._v("then")]),t._v(" 的回调中，所以 "),n("code",[t._v("console.log('async1 end')")]),t._v(" 会优先执行于 "),n("code",[t._v("setTimeout")]),t._v("。")]),t._v(" "),n("p",[t._v("如果你觉得上面这段解释还是有点绕，那么我把 "),n("code",[t._v("async")]),t._v(" 的这两个函数改造成你一定能理解的代码")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async2 end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Promise.resolve() 将代码插入微任务队列尾部// resolve 再次插入微任务队列尾部")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async1 end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("也就是说，如果 "),n("code",[t._v("await")]),t._v(" 后面跟着 "),n("code",[t._v("Promise")]),t._v(" 的话，"),n("code",[t._v("async1 end")]),t._v(" 需要等待三个 tick 才能执行到。那么其实这个性能相对来说还是略慢的，所以 V8 团队借鉴了 Node 8 中的一个 Bug，在引擎底层将三次 tick 减少到了二次 tick。但是这种做法其实是违法了规范的，当然规范也是可以更改的，这是 V8 团队的一个 "),n("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Ftc39%2Fecma262%2Fpull%2F1250",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR"),n("OutboundLink")],1),t._v("，目前已被同意这种做法。")]),t._v(" "),n("p",[t._v("所以 Event Loop 执行顺序如下所示：")]),t._v(" "),n("ul",[n("li",[t._v("首先执行同步代码，这属于宏任务")]),t._v(" "),n("li",[t._v("当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行")]),t._v(" "),n("li",[t._v("执行所有微任务")]),t._v(" "),n("li",[t._v("当执行完所有微任务后，如有必要会渲染页面")]),t._v(" "),n("li",[t._v("然后开始下一轮 Event Loop，执行宏任务中的异步代码，也就是 "),n("code",[t._v("setTimeout")]),t._v(" 中的回调函数")])]),t._v(" "),n("p",[t._v("所以以上代码虽然 "),n("code",[t._v("setTimeout")]),t._v(" 写在 "),n("code",[t._v("Promise")]),t._v(" 之前，但是因为 "),n("code",[t._v("Promise")]),t._v(" 属于微任务而 "),n("code",[t._v("setTimeout")]),t._v(" 属于宏任务，所以会有以上的打印。")]),t._v(" "),n("p",[t._v("微任务包括 "),n("code",[t._v("process.nextTick")]),t._v(" ，"),n("code",[t._v("promise")]),t._v(" ，"),n("code",[t._v("MutationObserver")]),t._v("。")]),t._v(" "),n("p",[t._v("宏任务包括 "),n("code",[t._v("script")]),t._v(" ， "),n("code",[t._v("setTimeout")]),t._v(" ，"),n("code",[t._v("setInterval")]),t._v(" ，"),n("code",[t._v("setImmediate")]),t._v(" ，"),n("code",[t._v("I/O")]),t._v(" ，"),n("code",[t._v("UI rendering")]),t._v("。")]),t._v(" "),n("p",[t._v("这里很多人会有个误区，认为微任务快于宏任务，其实是错误的。因为宏任务中包括了 "),n("code",[t._v("script")]),t._v(" ，浏览器会"),n("strong",[t._v("先执行一个宏任务")]),t._v("，接下来有异步代码的话才会先执行微任务。")]),t._v(" "),n("h2",{attrs:{id:"node-中的-event-loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-中的-event-loop"}},[t._v("#")]),t._v(" Node 中的 Event Loop")]),t._v(" "),n("blockquote",[n("p",[t._v("涉及面试题：Node 中的 Event Loop 和浏览器中的有什么区别？process.nexttick 执行顺序？")])]),t._v(" "),n("p",[t._v("Node 中的 Event Loop 和浏览器中的是完全不相同的东西。")]),t._v(" "),n("p",[t._v("Node 的 Event Loop 分为 6 个阶段，它们会按照"),n("strong",[t._v("顺序")]),t._v("反复运行。每当进入某一个阶段的时候，都会从对应的回调队列中取出函数去执行。当队列为空或者执行的回调函数数量到达系统设定的阈值，就会进入下一阶段。\n"),n("img",{attrs:{src:"/blog/skills/images/event-loop.png",alt:"event-loop"}})]),t._v(" "),n("h3",{attrs:{id:"timer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#timer"}},[t._v("#")]),t._v(" timer")]),t._v(" "),n("p",[t._v("timers 阶段会执行 "),n("code",[t._v("setTimeout")]),t._v(" 和 "),n("code",[t._v("setInterval")]),t._v(" 回调，并且是由 poll 阶段控制的。")]),t._v(" "),n("p",[t._v("同样，在 Node 中定时器指定的时间也不是准确时间，只能是"),n("strong",[t._v("尽快")]),t._v("执行。")]),t._v(" "),n("h3",{attrs:{id:"i-o"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#i-o"}},[t._v("#")]),t._v(" I/O")]),t._v(" "),n("p",[t._v("I/O 阶段会处理一些上一轮循环中的"),n("strong",[t._v("少数未执行")]),t._v("的 I/O 回调")]),t._v(" "),n("h3",{attrs:{id:"idle-prepare"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#idle-prepare"}},[t._v("#")]),t._v(" idle, prepare")]),t._v(" "),n("p",[t._v("idle, prepare 阶段内部实现，这里就忽略不讲了。")]),t._v(" "),n("h3",{attrs:{id:"poll"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#poll"}},[t._v("#")]),t._v(" poll")]),t._v(" "),n("p",[t._v("poll 是一个至关重要的阶段，这一阶段中，系统会做两件事情")]),t._v(" "),n("ol",[n("li",[t._v("回到 timer 阶段执行回调")]),t._v(" "),n("li",[t._v("执行 I/O 回调")])]),t._v(" "),n("p",[t._v("并且在进入该阶段时如果没有设定了 timer 的话，会发生以下两件事情")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("如果 poll 队列不为空，会遍历回调队列并同步执行，直到队列为空或者达到系统限制")])]),t._v(" "),n("li",[n("p",[t._v("如果 poll 队列为空时，会有两件事发生")])]),t._v(" "),n("li",[n("p",[t._v("如果有 "),n("code",[t._v("setImmediate")]),t._v(" 回调需要执行，poll 阶段会停止并且进入到 check 阶段执行回调")])]),t._v(" "),n("li",[n("p",[t._v("如果没有 "),n("code",[t._v("setImmediate")]),t._v(" 回调需要执行，会等待回调被加入到队列中并立即执行回调，这里同样会有个超时时间设置防止一直等待下去")])])]),t._v(" "),n("p",[t._v("当然设定了 timer 的话且 poll 队列为空，则会判断是否有 timer 超时，如果有的话会回到 timer 阶段执行回调。")]),t._v(" "),n("h3",{attrs:{id:"check"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check"}},[t._v("#")]),t._v(" check")]),t._v(" "),n("p",[t._v("check 阶段执行 "),n("code",[t._v("setImmediate")])]),t._v(" "),n("h3",{attrs:{id:"close-callbacks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#close-callbacks"}},[t._v("#")]),t._v(" close callbacks")]),t._v(" "),n("p",[t._v("close callbacks 阶段执行 close 事件")]),t._v(" "),n("p",[t._v("在以上的内容中，我们了解了 Node 中的 Event Loop 的执行顺序，接下来我们将会通过代码的方式来深入理解这块内容。")]),t._v(" "),n("p",[t._v("首先在有些情况下，定时器的执行顺序其实是"),n("strong",[t._v("随机")]),t._v("的")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("setTimeout(() => {\n    console.log('setTimeout')\n}, 0)\nsetImmediate(() => {\n    console.log('setImmediate')\n})\n")])])]),n("p",[t._v("对于以上代码来说，"),n("code",[t._v("setTimeout")]),t._v(" 可能执行在前，也可能执行在后")]),t._v(" "),n("ul",[n("li",[t._v("首先 "),n("code",[t._v("setTimeout(fn, 0) === setTimeout(fn, 1)")]),t._v("，这是由源码决定的")]),t._v(" "),n("li",[t._v("进入事件循环也是需要成本的，如果在准备时候花费了大于 1ms 的时间，那么在 timer 阶段就会直接执行 "),n("code",[t._v("setTimeout")]),t._v(" 回调")]),t._v(" "),n("li",[t._v("那么如果准备时间花费小于 1ms，那么就是 "),n("code",[t._v("setImmediate")]),t._v(" 回调先执行了")])]),t._v(" "),n("p",[t._v("当然在某些情况下，他们的执行顺序一定是固定的，比如以下代码：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("const fs = require('fs')\n\nfs.readFile(__filename, () => {\n    setTimeout(() => {\n        console.log('timeout');\n    }, 0)\n    setImmediate(() => {\n        console.log('immediate')\n    })\n})\n")])])]),n("p",[t._v("在上述代码中，"),n("code",[t._v("setImmediate")]),t._v(" 永远"),n("strong",[t._v("先执行")]),t._v("。因为两个代码写在 IO 回调中，IO 回调是在 poll 阶段执行，当回调执行完毕后队列为空，发现存在 "),n("code",[t._v("setImmediate")]),t._v(" 回调，所以就直接跳转到 check 阶段去执行回调了。")]),t._v(" "),n("p",[t._v("上面介绍的都是 macrotask 的执行情况，对于 microtask 来说，它会在以上每个阶段完成前"),n("strong",[t._v("清空")]),t._v(" microtask 队列，下图中的 Tick 就代表了 microtask\n"),n("img",{attrs:{src:"http://ww1.sinaimg.cn/large/715b1061ly1g8n5q4v91sj20hw0y30sv.jpg",alt:"microtask"}})]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer21'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nPromise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("对于以上代码来说，其实和浏览器中的输出是一样的，microtask 永远执行在 macrotask 前面。")]),t._v(" "),n("p",[t._v("最后我们来讲讲 Node 中的 "),n("code",[t._v("process.nextTick")]),t._v("，这个函数其实是独立于 Event Loop 之外的，它有一个自己的队列，当每个阶段完成后，如果存在 nextTick 队列，就会"),n("strong",[t._v("清空队列中的所有回调函数")]),t._v("，并且优先于其他 microtask 执行。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  Promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nprocess"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nextTick'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nextTick'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nextTick'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nextTick'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("对于以上代码，大家可以发现无论如何，永远都是先把 nextTick 全部打印出来。")]),t._v(" "),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),n("p",[t._v("这一章节我们学习了 JS 实现异步的原理，并且了解了在浏览器和 Node 中 Event Loop 其实是不相同的。Event Loop 这个知识点对于我们理解 JS 是如何执行的至关重要，同时也是常考题。如果大家对于这个章节的内容存在疑问，欢迎在评论区与我互动。")])])}),[],!1,null,null,null);s.default=e.exports}}]);