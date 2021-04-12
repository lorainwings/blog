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
    "revision": "faf6632e2abad335a8c014d8cfe27ab7"
  },
  {
    "url": "algorithm/index.html",
    "revision": "8972e6e6537e4c3e7504173cef68888e"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "115e861ed129ef8fbf1e32e9fface5c0"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "6041deaa8e94174796ce08354b2e7e25"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "2e01d8af8e86c5d8c497e8ff1fcb22c7"
  },
  {
    "url": "assets/css/0.styles.4a9580f2.css",
    "revision": "a190060788ad8394226b95ca2f9d39a8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.930d1339.js",
    "revision": "0ad207de2538817881d5539cf085d38c"
  },
  {
    "url": "assets/js/11.cdeb8098.js",
    "revision": "d84ae6ffe84102cdd5716c4229c80d38"
  },
  {
    "url": "assets/js/12.c8cde42b.js",
    "revision": "907613e187d1d7786fde9d9a143b17e7"
  },
  {
    "url": "assets/js/13.a227fbb7.js",
    "revision": "b9dfcc2a04cfc45451a5a07a7d99789b"
  },
  {
    "url": "assets/js/14.6af4650a.js",
    "revision": "8a909e288041b0f144362a26ea5b99c6"
  },
  {
    "url": "assets/js/15.6eaa9661.js",
    "revision": "64913e051230927cb3f04fa5ffa43a13"
  },
  {
    "url": "assets/js/16.061f9c22.js",
    "revision": "80c7a5897efd84b8a4c35d146c61ae66"
  },
  {
    "url": "assets/js/17.1c1d03e9.js",
    "revision": "ddcc62346a31ee43fd2ff6f2833910d2"
  },
  {
    "url": "assets/js/18.ee28a6a2.js",
    "revision": "6f6115784537549edfb70ad5f2440cb6"
  },
  {
    "url": "assets/js/19.55e8ab18.js",
    "revision": "2557f74e2dc16aa431b606451cc4a27a"
  },
  {
    "url": "assets/js/20.202f7788.js",
    "revision": "5ae0811f2e4e1e4703f14db942012433"
  },
  {
    "url": "assets/js/21.9a9c4fb4.js",
    "revision": "8b2bb0e27606de0d08fae06d7f32c280"
  },
  {
    "url": "assets/js/22.0bb8b023.js",
    "revision": "3defe2b920e7fa3ef4f80953f9590286"
  },
  {
    "url": "assets/js/23.222abfd4.js",
    "revision": "e16ae62589614c9a72021054f469d3c4"
  },
  {
    "url": "assets/js/24.bc016ff4.js",
    "revision": "a3b5d488ff349f2d1cc9adaf94d4cc44"
  },
  {
    "url": "assets/js/25.62eeb035.js",
    "revision": "a0aa7b7d7562f5e5e31384c995164b2c"
  },
  {
    "url": "assets/js/26.c8b8f603.js",
    "revision": "34e03d88afd2363d600aab160eb6e915"
  },
  {
    "url": "assets/js/27.724c85a0.js",
    "revision": "1e8ba7a63274f96a3b3660b1ededbd20"
  },
  {
    "url": "assets/js/28.aad4e29c.js",
    "revision": "89b135baf69de797928b6672891e5fc4"
  },
  {
    "url": "assets/js/29.b610bafa.js",
    "revision": "3d63a4923f9a7de1992b19a3d4d67894"
  },
  {
    "url": "assets/js/3.8c44ca0e.js",
    "revision": "38726491e6098a1e226a8e4cb1792cb9"
  },
  {
    "url": "assets/js/30.778d5adb.js",
    "revision": "1e7bd567a04585d01941c4b44aff1dcf"
  },
  {
    "url": "assets/js/31.f38d5bed.js",
    "revision": "d0ac5b711b0fc46fd2b62af9e2792d21"
  },
  {
    "url": "assets/js/32.1dbf712c.js",
    "revision": "37e3987830a6b05e63047fbd28b79bc4"
  },
  {
    "url": "assets/js/33.b1552134.js",
    "revision": "0aec547d9aacd7aaa72249e8cfcaccea"
  },
  {
    "url": "assets/js/34.464376e8.js",
    "revision": "336327e9235d667fad62ae5439519a1a"
  },
  {
    "url": "assets/js/35.fa7d5e88.js",
    "revision": "702e4dd7e96c728d0bc7fa697d5c363d"
  },
  {
    "url": "assets/js/36.eae3ccfb.js",
    "revision": "64cb7eb073e98ec133b245641656f593"
  },
  {
    "url": "assets/js/37.ed2e810e.js",
    "revision": "940b495d7cdcf8a72fbc78d1cc92eb02"
  },
  {
    "url": "assets/js/38.362fb7b0.js",
    "revision": "52855873ed829c0427c1d90611989ea7"
  },
  {
    "url": "assets/js/39.30ae6f71.js",
    "revision": "a29b4f36c663947db7a524a050ce7369"
  },
  {
    "url": "assets/js/4.57980df9.js",
    "revision": "ad383f77dcd05f8efe21975e9ef1cd39"
  },
  {
    "url": "assets/js/40.b732235d.js",
    "revision": "847a460b5ae4f5c504b6e42440f9adde"
  },
  {
    "url": "assets/js/41.50b4e0bf.js",
    "revision": "56720034db7a409755d2daca87f02f98"
  },
  {
    "url": "assets/js/42.f41b9ead.js",
    "revision": "f748c8afdb5db9260e4c4fb2afdc5a65"
  },
  {
    "url": "assets/js/43.47282291.js",
    "revision": "838bf061ffaaf1476aef5e12808e4c6d"
  },
  {
    "url": "assets/js/44.b8b39f86.js",
    "revision": "1a8cd7b2796573ecaab7eb179a063f3b"
  },
  {
    "url": "assets/js/45.59b0eb90.js",
    "revision": "388f31f80d7dbd86fb91bd156dd00412"
  },
  {
    "url": "assets/js/46.111d3b8b.js",
    "revision": "5a2a2dab67a19bc5c3cfffbb4a68c14b"
  },
  {
    "url": "assets/js/47.65c8dd83.js",
    "revision": "be62210d81fd10eec0316abae999051d"
  },
  {
    "url": "assets/js/48.36dae097.js",
    "revision": "e2cfeddea2ef4ecc7167ab5e0435802d"
  },
  {
    "url": "assets/js/49.282f1384.js",
    "revision": "c8a816370434aa3fa999dbc0a147327c"
  },
  {
    "url": "assets/js/5.5d055cab.js",
    "revision": "d61af23248d88b42d5c3a0a1c1d1ddda"
  },
  {
    "url": "assets/js/50.0f3f472a.js",
    "revision": "b33c9e0bc37768bff5d9ebac058427a3"
  },
  {
    "url": "assets/js/51.48413499.js",
    "revision": "cf7e95705cf36bcc8532a72b5eb0955e"
  },
  {
    "url": "assets/js/52.73a630cf.js",
    "revision": "6bbcd1f67b2b63e62aeebc4ba8cb2289"
  },
  {
    "url": "assets/js/53.989d0b51.js",
    "revision": "ff0e15c658149667a3a9f5c14121fb79"
  },
  {
    "url": "assets/js/6.5cf5829a.js",
    "revision": "f686a2ded38a6e42abe4c81f818671d9"
  },
  {
    "url": "assets/js/7.46c43574.js",
    "revision": "e990dcb7e060efedc9b0c6a5322bfd96"
  },
  {
    "url": "assets/js/8.97b71141.js",
    "revision": "125b0b792e0d9aa034664e18cd957069"
  },
  {
    "url": "assets/js/9.5a3cc726.js",
    "revision": "760f8a95d4567612905a9d0244c9ab42"
  },
  {
    "url": "assets/js/app.675941b5.js",
    "revision": "9151627a630b7321eff8841465c5eea2"
  },
  {
    "url": "assets/js/vendors~docsearch.8f04fa7f.js",
    "revision": "a287e6abe5b7b8de194f1408389406c7"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "114cf3e43d3a7c1d708be6ca7a6935a8"
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
    "revision": "24f4c088bf30deb4ffb068a5bbc82227"
  },
  {
    "url": "life/index.html",
    "revision": "cad5eef88414ef05132163bcf7732208"
  },
  {
    "url": "life/意志力.html",
    "revision": "2f86178e3d72265165cf9624583452a6"
  },
  {
    "url": "skills/100.html",
    "revision": "fb78df467f140c5f45c6327dbd8148bf"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "19b8c536f541137457fa63a41060a76e"
  },
  {
    "url": "skills/Base64.html",
    "revision": "e41ce484bbbbdd160c50b50321487dfd"
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
    "revision": "fa365ef0983560feeae90a98a71b0389"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "3be50aff7ed93beafad10adaaa6aae69"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "d6f90a667ce81239a9a849690e64c43e"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "6f9c35745f68b6dc9aa215c2052d039a"
  },
  {
    "url": "skills/Generator.html",
    "revision": "b02cd9ac9712702a6ffd358407bf4185"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "9bcc7db0b7a051a83f75cb8ed53d2ac5"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "2a35831a907b3f4397853b790e932fa6"
  },
  {
    "url": "skills/HTTP协议备忘录.html",
    "revision": "895c4bbf001ed866407f7d257c8d3a88"
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
    "url": "skills/images/bottom-layer-compare.png",
    "revision": "eb9f36d5e444772f4e7ee2646db74987"
  },
  {
    "url": "skills/images/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/images/cookie-take.png",
    "revision": "a6f85e4317c36d2b9bd32205d3ecca2e"
  },
  {
    "url": "skills/images/ES5预编译.jpg",
    "revision": "2adf6b6f985c4330d4869f9f0f103568"
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
    "url": "skills/images/flutter-bottom-layer.png",
    "revision": "a162fd1e68ba56a5d347be26296f7132"
  },
  {
    "url": "skills/images/four-handshake.jpg",
    "revision": "7499fe662dc15c4a52c9373953bcce5c"
  },
  {
    "url": "skills/images/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "skills/images/hybrid-app.png",
    "revision": "c01c8b71124f8c96ba841325ce8ede86"
  },
  {
    "url": "skills/images/image-conclude.png",
    "revision": "73cd469e1246823aedc3eb928a8665b6"
  },
  {
    "url": "skills/images/native-frame.png",
    "revision": "9c3b76b8205895e7789f61ad4bddfc96"
  },
  {
    "url": "skills/images/offline-frame.png",
    "revision": "77ae8113335fa66491c0b3d2ab357490"
  },
  {
    "url": "skills/images/react生命周期.jpg",
    "revision": "12d183f045977a984852092598aae75c"
  },
  {
    "url": "skills/images/regex-place.png",
    "revision": "c874fa1afbb3be891a2b338def4e1000"
  },
  {
    "url": "skills/images/tapable-hooks-type.png",
    "revision": "2732a6aea94f39d7b181b5adfbce08b7"
  },
  {
    "url": "skills/images/tapable-hooks.png",
    "revision": "04080c2029575faa19eaa091ca263721"
  },
  {
    "url": "skills/images/webpack-cli-args.png",
    "revision": "86a8574674dd05b097890032476a27a1"
  },
  {
    "url": "skills/images/webpack-cli-pipe.png",
    "revision": "c6e1770eb38a642d9b4011dfc0c754e8"
  },
  {
    "url": "skills/images/webpack-non-compiler.png",
    "revision": "e898a7867627e3be2cf707e373526620"
  },
  {
    "url": "skills/images/webpack-source-frame.png",
    "revision": "95add7e6f41eec8c4f8817791d89de7c"
  },
  {
    "url": "skills/index.html",
    "revision": "6481422754fd0de83b542a9e92c33ad3"
  },
  {
    "url": "skills/JS编译过程分析.html",
    "revision": "b855d4fa8a3ed1fe0bd34b4c52be8c4c"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "b3e37559c58d8cb2706faeeb1067962e"
  },
  {
    "url": "skills/Promise.html",
    "revision": "f77ef9f151012cd1c0c32f00886154ce"
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
    "url": "skills/React生态中的设计理论.html",
    "revision": "30d5887dd5b8ebfdb1b607947464312f"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "2ac160f31843a515f6d9cab6629f30d7"
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
    "revision": "84751b0f89c8a918ea874343ac649c3f"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "a3dbc3093ea726ba3e84a66c527aaaf4"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "1f2858248e9002d9ba3463e5c28b0eb8"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "63e0db41e3f9783e092f140aa0fc2cb6"
  },
  {
    "url": "skills/Webpack源码流程分析.html",
    "revision": "f9f191ea8de80cfb3221e744c422b7ac"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "335baa155a68903b8e237d84f9dc1774"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "e8e5ebf7a9ab9127017ea4b170c98c12"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "899a4dbb8c99c722b196618859a6568d"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "ebb721c108611a9824f21dc216a5588a"
  },
  {
    "url": "skills/前端监控及上报.html",
    "revision": "78c2e760381e98eb8d40addc00727a90"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "5d630d19edddefac7e3d56d54dcef088"
  },
  {
    "url": "skills/性能优化总结.html",
    "revision": "5d994acb3134eed5a514032ca9c01801"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "198f221647df8dbab442ea940b07549b"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "1204dc9259a18d09fdba5b38d0f992d9"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "2d733703e2f27d62409b1dfb2d57a4b5"
  },
  {
    "url": "skills/浏览器界面更新流程.html",
    "revision": "49d48fe6f2aaee06341816fecebd6c5f"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "20569afd9c007d0e7d62c1802bd9ffbe"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "cddc57506d7a5105dc2a9b1d55ad7a58"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "c39e4eea2efefe2d4543ab91dfd42293"
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
