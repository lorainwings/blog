(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{410:function(t,a,s){"use strict";s.r(a);var e=s(27),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"web-性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-性能优化"}},[t._v("#")]),t._v(" Web 性能优化")]),t._v(" "),s("blockquote",[s("p",[t._v("内容部分转自网络")])]),t._v(" "),s("h2",{attrs:{id:"概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),s("p",[t._v("该篇主要介绍"),s("strong",[t._v("在发送请求的过程中前端的性能优化")]),t._v(", 其中会穿插这网络相关知识, 主要包含以下几个部分。")]),t._v(" "),s("ul",[s("li",[t._v("避免多余重定向")]),t._v(" "),s("li",[t._v("DNS 预解析")]),t._v(" "),s("li",[t._v("预先建立连接")]),t._v(" "),s("li",[t._v("CDN 内容分发网络")])]),t._v(" "),s("h2",{attrs:{id:"避免多余重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免多余重定向"}},[t._v("#")]),t._v(" 避免多余重定向")]),t._v(" "),s("p",[t._v("HTTP 状态码中重定向分为:")]),t._v(" "),s("p",[s("code",[t._v("301")]),t._v(": 永久重定向")]),t._v(" "),s("p",[s("code",[t._v("302")]),t._v(": 临时重定向")]),t._v(" "),s("p",[t._v("建议贴合语义，例如服务迁移的情况下，使用 301 重定向。对 SEO 也会更友好;\n且不要滥用重定向,每次重定向都是有请求耗时的，建议避免过多的重定向")]),t._v(" "),s("h2",{attrs:{id:"dns-预解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-预解析"}},[t._v("#")]),t._v(" DNS 预解析")]),t._v(" "),s("p",[t._v("访问远程服务的时候，不会直接使用服务的出口 IP，而是使用域名。DNS 是应用层协议，事实上他是为其他应用层协议工作的，包括不限于 HTTP 和 SMTP 以及 FTP，用于将用户提供的主机名解析为 ip 地址")]),t._v(" "),s("p",[t._v("DNS 获取的流程主要分为以下几个步骤:")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("浏览器缓存")]),t._v("：当用户通过浏览器访问某域名时，浏览器首先会在自己的缓存中查找是否有该域名对应的 IP 地址（若曾经访问过该域名且没有清空缓存便存在）")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("系统缓存")]),t._v("：当浏览器缓存中无域名对应 IP 则会自动检查用户计算机系统 Hosts 文件 DNS 缓存是否有该域名对应 IP；")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("路由器缓存")]),t._v("：当浏览器及系统缓存中均无域名对应 IP 则进入路由器缓存中检查，以上三步均为客服端的 DNS 缓存；")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("ISP（互联网服务提供商）DNS 缓存")]),t._v("：当在用户客服端查找不到域名对应 IP 地址，则将进入 ISP DNS 缓存中进行查询。比如你用的是电信的网络，则会进入电信的 DNS 缓存服务器中进行查找；")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("根域名服务器")]),t._v("：当以上均未完成，则进入根服务器进行查询。全球仅有 13 台根域名服务器，1 个主根域名服务器，其余 12 为辅根域名服务器。根域名收到请求后会查看区域文件记录，若无则将其管辖范围内顶级域名（如.com）服务器 IP 告诉本地 DNS 服务器；")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("顶级域名服务器")]),t._v("：顶级域名服务器收到请求后查看区域文件记录，若无则将其管辖范围内主域名服务器的 IP 地址告诉本地 DNS 服务器；")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("主域名服务器")]),t._v("：主域名服务器接受到请求后查询自己的缓存，如果没有则进入下一级域名服务器进行查找，并重复该步骤直至找到正确纪录；")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("保存结果至缓存")]),t._v("：本地域名服务器把返回的结果保存到缓存，以备下一次使用，同时将该结果反馈给客户端，客户端通过这个 IP 地址与 web 服务器建立链接。")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("这里我们需要了解的是")]),t._v(" "),s("ul",[s("li",[t._v("首先，DNS 解析流程可能会很长，耗时很高，所以整个 DNS 服务，包括客户端都会有缓存机制，这个作为前端不好涉入；")]),t._v(" "),s("li",[t._v("其次，在 DNS 解析上，前端还是可以通过浏览器提供的其他手段来“加速”的。")])])]),t._v(" "),s("p",[t._v("DNS Prefetch 就是浏览器提供给我们的一个 API。它是 Resource Hint 的一部分。它可以告诉浏览器：过会我就可能要去 yourwebsite.com 上下载一个资源啦，帮我先解析一下域名吧。这样之后用户点击某个按钮，触发了 yourwebsite.com 域名下的远程请求时，就略去了 DNS 解析的步骤。使用方式很简单")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//yourwebsite.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"预先建立连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预先建立连接"}},[t._v("#")]),t._v(" 预先建立连接")]),t._v(" "),s("p",[t._v("我们知道，建立连接不仅需要 DNS 查询，还需要进行 TCP 协议握手，有些还会有 TLS/SSL 协议，这些都会导致连接的耗时。使用 Preconnect[3] 可以帮助你告诉浏览器：“我有一些资源会用到某个源（origin），你可以帮我预先建立连接”")]),t._v(" "),s("p",[t._v("根据规范，当你使用 "),s("a",{attrs:{href:"https://www.w3.org/TR/resource-hints/#preconnect",target:"_blank",rel:"noopener noreferrer"}},[t._v("Preconnect"),s("OutboundLink")],1),t._v(" 时，浏览器大致做了如下处理：")]),t._v(" "),s("ul",[s("li",[t._v("首先，解析 Preconnect 的 url；")]),t._v(" "),s("li",[t._v("其次，根据当前 link 元素中的属性进行 cors 的设置；")]),t._v(" "),s("li",[t._v("然后，默认先将 credential 设为 true，如果 cors 为 Anonymous 并且存在跨域，则将 credential 置为 false；")]),t._v(" "),s("li",[t._v("最后，进行连接。")])]),t._v(" "),s("p",[t._v("使用 Preconnect 只需要将 rel 属性设为 preconnect 即可：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preconnect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//sample.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("当然，你也可以设置 CORS：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preconnect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//sample.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("需要注意的是，标准并没有硬性规定浏览器一定要（而是 SHOULD）完成整个连接过程，与 DNS Prefetch 类似，浏览器可以视情况完成部分工作。")]),t._v(" "),s("h2",{attrs:{id:"使用-cdn-内容分发网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-cdn-内容分发网络"}},[t._v("#")]),t._v(" 使用 CDN(内容分发网络)")]),t._v(" "),s("p",[t._v("对于静态资源，我们可以考虑通过 CDN 来降低时延")]),t._v(" "),s("p",[t._v("对于使用 CDN 的资源，DNS 解析会将 CDN 资源的域名解析到 CDN 服务的负载均衡器上，负载均衡器可以通过请求的信息获取用户对应的地理区域，从而通过负载均衡算法，在背后的诸多服务器中，综合选择一台地理位置近、负载低的机器来提供服务。例如为北京联通用户解析北京的服务器 IP。这样，用户在之后访问 CDN 资源时都是访问北京服务器，距离近，速度快")]),t._v(" "),s("p",[t._v("下图是请求声明周期中各个阶段的示意图，可以帮助我们理解发送请求（以及接收响应）的流程。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/skills/cdn.png",alt:"images"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);