(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{420:function(a,t,s){"use strict";s.r(t);var e=s(27),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"查看日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看日志"}},[a._v("#")]),a._v(" 查看日志")]),a._v(" "),s("p",[a._v("此处总结下常用查看日志的命令")]),a._v(" "),s("h2",{attrs:{id:"tail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tail"}},[a._v("#")]),a._v(" tail")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("注意：如果表示字节或行数的 N 值之前有一个”+”号，则从文件开头的第 N 项开始显示，而不是显示文件的最后 N 项。N 值后面可以有后缀：b 表示 512，k 表示 1024，m 表示 1 048576(1M)")])]),a._v(" "),s("h3",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[a._v("#")]),a._v(" 例子")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" （显示文件file的最后10行）\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tail")]),a._v(" +20 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" （显示文件file的内容，从第20行至文件末尾）\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tail")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" （显示文件file的最后10个字符）\n")])])]),s("p",[a._v("Linux 如何显示一个文件的某几行(中间几行)")]),a._v(" "),s("p",[a._v("从第 3000 行开始，显示 1000 行。即显示 3000~3999 行")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cat")]),a._v(" filename "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -n +3000 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v("\n")])])]),s("p",[a._v("显示 1000 行到 3000 行")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cat")]),a._v(" filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3000")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -n +1000\n")])])]),s("h3",{attrs:{id:"部分参数区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部分参数区别"}},[a._v("#")]),a._v(" 部分参数区别")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tail")]),a._v(" -n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v("：显示最后 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" 行\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$tail")]),a._v(" -n +1000：从 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" 行开始显示，显示 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" 行以后的\n")])])]),s("h2",{attrs:{id:"cat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[a._v("#")]),a._v(" cat")]),a._v(" "),s("p",[s("code",[a._v("cat")]),a._v("的作用分为以下几类")]),a._v(" "),s("h3",{attrs:{id:"一次显示整个文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一次显示整个文件"}},[a._v("#")]),a._v(" 一次显示整个文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cat")]),a._v(" filename\n")])])]),s("h3",{attrs:{id:"从键盘创建一个文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从键盘创建一个文件"}},[a._v("#")]),a._v(" 从键盘创建一个文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" filename\n")])])]),s("p",[a._v("只能创建新文件,不能编辑已有文件.")]),a._v(" "),s("h3",{attrs:{id:"将几个文件合并为一个文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将几个文件合并为一个文件"}},[a._v("#")]),a._v(" 将几个文件合并为一个文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cat")]),a._v(" file1 file2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("\n")])])]),s("p",[a._v("参数：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("-n 或 --number")]),a._v(": 由 1 开始对所有输出的行数编号")]),a._v(" "),s("li",[s("code",[a._v("-b 或 --number-nonblank")]),a._v(": 和 -n 相似，只不过对于空白行不编号")]),a._v(" "),s("li",[s("code",[a._v("-s 或 --squeeze-blank")]),a._v(": 当遇到有连续两行以上的空白行，就代换为一行的空白行")]),a._v(" "),s("li",[s("code",[a._v("-v 或 --show-nonprinting")])])]),a._v(" "),s("p",[a._v("例：\n把 textfile1 的档案内容加上行号后输入 textfile2 这个档案里\ncat -n textfile1 > textfile2")]),a._v(" "),s("p",[a._v("把 textfile1 和 textfile2 的档案内容加上行号（空白行不加）之后将内容附加到 textfile3 里。\ncat -b textfile1 textfile2 >> textfile3")]),a._v(" "),s("p",[a._v("把 test.txt 文件扔进垃圾箱，赋空值 test.txt\ncat /dev/null > /etc/test.txt")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[s("code",[a._v(">")]),a._v("意思是创建，"),s("code",[a._v(">>")]),a._v("是追加。千万不要弄混了")])]),a._v(" "),s("h2",{attrs:{id:"tac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tac"}},[a._v("#")]),a._v(" tac")]),a._v(" "),s("p",[s("code",[a._v("tac")]),a._v(" 是将 "),s("code",[a._v("cat")]),a._v(" 反写过来，所以他的功能就跟 "),s("code",[a._v("cat")]),a._v(" 相反， "),s("code",[a._v("cat")]),a._v(" 是由第一行到最后一行连续显示在萤幕上，\n而 "),s("code",[a._v("tac")]),a._v(" 则是由最后一行到第一行反向在萤幕上显示出来！")]),a._v(" "),s("h2",{attrs:{id:"head"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[a._v("#")]),a._v(" head")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$head")]),a._v(" -n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v("：显示前面 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" 行\n")])])]),s("h2",{attrs:{id:"echo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#echo"}},[a._v("#")]),a._v(" echo")]),a._v(" "),s("p",[s("code",[a._v("echo")]),a._v(" 命令用来在标准输出上显示一段字符")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"the echo command test!"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("a.sh\n")])])]),s("p",[a._v("这个就会在 a.sh 文件中输出“the echo command test!”这一行文字！")]),a._v(" "),s("p",[a._v("该命令的一般格式为： echo [ -n ]")]),a._v(" "),s("p",[a._v("字符串其中选项 n 表示输出文字后不换行；字符串能加引号，也能不加引号。")]),a._v(" "),s("p",[a._v("用 echo 命令输出加引号的字符串时，将字符串原样输出；\n用 echo 命令输出不加引号的字符串时，将字符串中的各个单词作为字符串输出，各字符串之间用一个空格分割。")]),a._v(" "),s("h3",{attrs:{id:"sed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sed"}},[a._v("#")]),a._v(" sed")]),a._v(" "),s("p",[s("code",[a._v("sed")]),a._v(" 是一种在线编辑器,主要用来自动编辑一个或多个文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$sed")]),a._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'5,10p'")]),a._v(" filename\n")])])]),s("p",[a._v("这样你就可以只查看文件的第 5 行到第 10 行。")])])}),[],!1,null,null,null);t.default=r.exports}}]);