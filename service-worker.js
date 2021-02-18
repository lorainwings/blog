/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "081e5a5ef8b8127bec1fe0255d0c9887"
  },
  {
    "url": "algorithm/index.html",
    "revision": "d4e097d35fcce89064acfc8df54b3e33"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "fc68edf905af0f038eea335e1705fcf6"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "a544c18048bd3b54636ef5cd60200cac"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "53eb187e3b538f999f11123a2ac98a33"
  },
  {
    "url": "assets/css/0.styles.97f4b029.css",
    "revision": "28142703a03222d53366b0579cea725e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.26e76468.js",
    "revision": "080c8ab3ed376301bb36d57475d40137"
  },
  {
    "url": "assets/js/11.92ffd1db.js",
    "revision": "75428d3ee6dd287194bd79c0954d711b"
  },
  {
    "url": "assets/js/12.147f385d.js",
    "revision": "d7ea2bb871904ed68df21852acf2d789"
  },
  {
    "url": "assets/js/13.fca89e33.js",
    "revision": "f7c4307c24fd85bdd2f675a1d51e69ab"
  },
  {
    "url": "assets/js/14.6f067261.js",
    "revision": "254ad1f3a0c139ffad6c0d69052d2661"
  },
  {
    "url": "assets/js/15.348e9cc1.js",
    "revision": "0fd6f7a295dba038690bef3f3b6c4a08"
  },
  {
    "url": "assets/js/16.06fd7e39.js",
    "revision": "c79b6e51b55b881a6813a02abf3a8bf0"
  },
  {
    "url": "assets/js/17.4b00292c.js",
    "revision": "bc6a300f12da27705b19d585ce947bc7"
  },
  {
    "url": "assets/js/18.d47d06f9.js",
    "revision": "2e594dfda8799545a1d5f6f1e035db43"
  },
  {
    "url": "assets/js/19.36d7faa5.js",
    "revision": "87e1c87dc387a519e2897f93b50af65b"
  },
  {
    "url": "assets/js/20.4374383d.js",
    "revision": "9049abfaadc4127c291b52fdb4182cf4"
  },
  {
    "url": "assets/js/21.5d7e7c42.js",
    "revision": "46acf5b6768fbe1056f627c546371f60"
  },
  {
    "url": "assets/js/22.275a1808.js",
    "revision": "855789e0387114007f6735b9e1c05968"
  },
  {
    "url": "assets/js/23.e4de181d.js",
    "revision": "a8ee33130a16dd1055559a0fe4d6d6dd"
  },
  {
    "url": "assets/js/24.e35f08ef.js",
    "revision": "44127c59fa08717fd10e246d3754d3d7"
  },
  {
    "url": "assets/js/25.f9c8c46c.js",
    "revision": "10b6bf52725ad85cf8ac9163c5d85601"
  },
  {
    "url": "assets/js/26.36ff7fd9.js",
    "revision": "26e23b58102b30eb6b4ec699ce027ef6"
  },
  {
    "url": "assets/js/27.b2f3392e.js",
    "revision": "7a24f29a5ca0ae884626a85d147c302e"
  },
  {
    "url": "assets/js/28.95b20592.js",
    "revision": "6e163af176fa765648b9fd9870ee783d"
  },
  {
    "url": "assets/js/29.1f650716.js",
    "revision": "423b1f8e2516ae6c60413b85576b6b1c"
  },
  {
    "url": "assets/js/3.e71efc55.js",
    "revision": "a7f8e1553b5db91b6953df83590ad2fa"
  },
  {
    "url": "assets/js/30.e6836f1c.js",
    "revision": "288850c9ffc8ec16fec650d5446d3230"
  },
  {
    "url": "assets/js/31.d6e2cf5a.js",
    "revision": "ccab479484bc81d605181ceab3f90ee6"
  },
  {
    "url": "assets/js/32.c376e13a.js",
    "revision": "7fa9a786a12856c5e8887d11f0f96309"
  },
  {
    "url": "assets/js/33.4bd7de71.js",
    "revision": "10dc77b85118791de2fd9c3e25cd500a"
  },
  {
    "url": "assets/js/34.65ff7d7f.js",
    "revision": "d6e2ed11f7d2225ff4cc0381789d13e9"
  },
  {
    "url": "assets/js/35.f8c222ac.js",
    "revision": "0a301af5e7efa710735faa78bbfdfdd8"
  },
  {
    "url": "assets/js/36.b4a2ec8b.js",
    "revision": "e4ef5fa2858096ca916efe5d278f3da5"
  },
  {
    "url": "assets/js/37.c61a129f.js",
    "revision": "acfcda725e638da39cf94ccbef281f6a"
  },
  {
    "url": "assets/js/38.6a5f9d22.js",
    "revision": "65bae09ec4d8f56b8a2eeb0b4cf42054"
  },
  {
    "url": "assets/js/39.7618d505.js",
    "revision": "675704b5dc3d6dad3ed7a1fa52d357cc"
  },
  {
    "url": "assets/js/4.476fff41.js",
    "revision": "3496ecb46895ff5f4540399881720aff"
  },
  {
    "url": "assets/js/40.b91d8113.js",
    "revision": "9f6b5a6762f2ad4509082729889d91ba"
  },
  {
    "url": "assets/js/41.410e7fc9.js",
    "revision": "d29e2d0a8fd3db0f6f3cd03bda311430"
  },
  {
    "url": "assets/js/42.92b5c108.js",
    "revision": "2db1720c79c97eb7f910a579b6100c9f"
  },
  {
    "url": "assets/js/43.f300b1b8.js",
    "revision": "c58e6cb8f0753ffa105a176378893538"
  },
  {
    "url": "assets/js/5.1c92ba94.js",
    "revision": "e43791e9854bbbe96d04cec6b79821cd"
  },
  {
    "url": "assets/js/6.668317bf.js",
    "revision": "013d5f2d1d6e43582ac675946b605c7a"
  },
  {
    "url": "assets/js/7.f3dc269a.js",
    "revision": "6fa59a1c5467ebfd720bc81947a99134"
  },
  {
    "url": "assets/js/8.ad361546.js",
    "revision": "96b19075997823012f2121fc1b537646"
  },
  {
    "url": "assets/js/9.30ae796b.js",
    "revision": "0db6ce9f97c6e0410dc95a5dcf1bc910"
  },
  {
    "url": "assets/js/app.e8476168.js",
    "revision": "3c65e1c53062b40e787198774a1417eb"
  },
  {
    "url": "assets/js/vendors~docsearch.3024ab27.js",
    "revision": "c8a9b5c4263f1ce055bcb8f4ba4c6509"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "717beb4e9382a2f6d49aa1499797ba28"
  },
  {
    "url": "icons/icon-144.png",
    "revision": "587afd39b22d44db6c9ba5b7637a9464"
  },
  {
    "url": "icons/icon-192.png",
    "revision": "54d6b1c0313fa186794107c13a2b7a17"
  },
  {
    "url": "icons/icon-48.png",
    "revision": "f2116c01da4295c41d15f44b2812a32d"
  },
  {
    "url": "icons/icon-72.png",
    "revision": "de89749179e07bb87c722b0e13dc063f"
  },
  {
    "url": "icons/icon-96.png",
    "revision": "97dd8b61c823a92084926ad8e081b956"
  },
  {
    "url": "index.html",
    "revision": "137bf5b1f95370da302af78361194317"
  },
  {
    "url": "life/index.html",
    "revision": "5913ee6cafad542e5f9b3e16f13bf05c"
  },
  {
    "url": "life/意志力.html",
    "revision": "e669b2f53197bb0e2770a7af3966f0c1"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "84ad9d9d65d83e52ce846074044e5d06"
  },
  {
    "url": "skills/Base64.html",
    "revision": "38a1ac0fac23249088ca7ae5e441d51d"
  },
  {
    "url": "skills/browser-cache/715b1061ly1g8w6fmvtcyj20yq18egsv.jpg",
    "revision": "c714a87c86203e22a0447f284a53f938"
  },
  {
    "url": "skills/browser-cache/715b1061ly1g8w6wd9qqcj20m2045dfx.jpg",
    "revision": "84852acc15727330d898cfa99d989660"
  },
  {
    "url": "skills/browser-cache/715b1061ly1g8w6xewnt9j20gj0go3ys.jpg",
    "revision": "df5a44da587b515fa7d3a2ffd161992f"
  },
  {
    "url": "skills/browser-cache/715b1061ly1g8w6ymehxhj20le0didg6.jpg",
    "revision": "6427717a30be539198c864f9dc89ea99"
  },
  {
    "url": "skills/browser-cache/715b1061ly1g8w6yvtoooj20d605z74a.jpg",
    "revision": "48704ca67a4883ca853174703cf1c1a9"
  },
  {
    "url": "skills/Crontab.html",
    "revision": "79fc53ec6bfc22833cde0f699add27ce"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "7d2040b3a692ce7112aedb3d9f716166"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "2b28a9d689f1a4171ea83957067a5ecb"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "32a39d7658e09f092c7d9ddcfd1db58a"
  },
  {
    "url": "skills/Generator.html",
    "revision": "582e5e724d3b1dcc980f6beb6a771d7a"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "d5744c1bbbfa802a339262ce7809f00d"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "167a2bfacc3b495735cf00d8d790c6f4"
  },
  {
    "url": "skills/images/715b1061gy1gglybnvsu6j20cc07y75b.jpg",
    "revision": "0e67a7353ed9db54f7e0f7d6c8991198"
  },
  {
    "url": "skills/images/715b1061ly1g8n5q4v91sj20hw0y30sv.jpg",
    "revision": "e875ecaedde18876344c5dc6f49a7daa"
  },
  {
    "url": "skills/images/715b1061ly1gcc70vluwxj20f80m8gos.jpg",
    "revision": "58630e2a38b77c9ffc767bf12c3cb60e"
  },
  {
    "url": "skills/images/715b1061ly1gg9b3nuhkyj21ls10oq7r.jpg",
    "revision": "4f3ef09a195e65d53909c37d63a259e5"
  },
  {
    "url": "skills/images/babel.jpg",
    "revision": "556a3fee2670533416b98d24a9583f34"
  },
  {
    "url": "skills/images/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/images/event-loop-1.gif",
    "revision": "2d2f74f2d43ac5283f0328ba9288721b"
  },
  {
    "url": "skills/images/event-loop-2.jpg",
    "revision": "8213a271b7328eaa07252ded309d9e4c"
  },
  {
    "url": "skills/images/event-loop-3.jpg",
    "revision": "3872fc560971831a2fd24597d6b59313"
  },
  {
    "url": "skills/images/event-loop-4.jpg",
    "revision": "5a1bdc0ce131e37ab3d5ae7f14bb1ad4"
  },
  {
    "url": "skills/images/event-loop.png",
    "revision": "aee75ef0e29b6a883aaf06270f57c5f6"
  },
  {
    "url": "skills/images/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "skills/images/image-conclude.png",
    "revision": "73cd469e1246823aedc3eb928a8665b6"
  },
  {
    "url": "skills/images/regex-place.png",
    "revision": "c874fa1afbb3be891a2b338def4e1000"
  },
  {
    "url": "skills/index.html",
    "revision": "a5f3940c2620bb46c9c373ced2e52355"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "21cc42a7e77f691e58e216e77c626cfd"
  },
  {
    "url": "skills/Promise.html",
    "revision": "c0c1581f36d3f47623465dc09f112b37"
  },
  {
    "url": "skills/publisher-subscriber/715b1061gy1g9ifot9j54j20zk0d70t3.jpg",
    "revision": "4efbfdd3472927d6e45f8509efe2de8d"
  },
  {
    "url": "skills/publisher-subscriber/715b1061gy1g9ifp48ou2g20ci07et8v.gif",
    "revision": "7ba899c13faa4ab5cc2da53d4e2bec49"
  },
  {
    "url": "skills/publisher-subscriber/715b1061gy1g9ifpl78k2j20e80bamx7.jpg",
    "revision": "6f40def2c8fa6f1568628e893b6cb1e1"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "2e29f3192903a6a8f5faf5982569ef18"
  },
  {
    "url": "skills/servers-push/715b1061gy1g9anrh70jkj20hs0f70tp.jpg",
    "revision": "b80a750ab37431112d51a68fa212556b"
  },
  {
    "url": "skills/servers-push/715b1061gy1g9ans77i5aj20hs0b1wf3.jpg",
    "revision": "e9e676b6a1889e8508d6622616fa7215"
  },
  {
    "url": "skills/servers-push/715b1061gy1g9anslt25oj20hs0f8wfd.jpg",
    "revision": "52cc8bb2c4c824e1e3f49b8546c959b9"
  },
  {
    "url": "skills/servers-push/715b1061gy1g9ansvj1rsj20hs0ec74z.jpg",
    "revision": "eb819fa7b885aa108ae9d21e8d6322e2"
  },
  {
    "url": "skills/servers-push/715b1061gy1g9anto5tnvj20hs0d50te.jpg",
    "revision": "16b3ef39375423a6c3d3d2a084b237f5"
  },
  {
    "url": "skills/servers-push/715b1061ly1g9anxdsfimj20hs0f2756.jpg",
    "revision": "e8e8d8d2917909f8603ddeee33753f5b"
  },
  {
    "url": "skills/servers-push/715b1061ly1g9any0t5e9j20hs0cyab1.jpg",
    "revision": "891b4c96ed921108498f6d655f352a2f"
  },
  {
    "url": "skills/Set & Map.html",
    "revision": "d7624d027897040b00e60ea1dabf00e6"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "9c3fa01472e0fc5b669f43e529961438"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "66133b529f0f152eb5a3a3be3c8a487f"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "8509dece692eec999af5eb3bbf1bbd36"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "d24105834563f35bdf3ad4d051887373"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "fb7899cb3420a75647b400c411ddc116"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "e7d57c17fd34dd3a56709542086515de"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "61133ebad45d13492814f84c0f7ff585"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "d71b72b90744b219d86b4a3e52397d8a"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "0a7c2a1f24250ea548ff8818e2562428"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "2321dcd0f7dafa89db9b077a6aa98f92"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "fa497ba8c3c402244378323acb2022de"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "5ee9e236e1e96fcc735ba5d78c9d9799"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "b5b67831b4e6c95b59338e3dd1cb2590"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "b811f374af6ef61e53df1c192ba1886a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
