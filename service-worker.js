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
    "revision": "41146be39c9f73474369346430db6516"
  },
  {
    "url": "algorithm/index.html",
    "revision": "1dafe28f504a1a16af5551d1d29c8416"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "b4348f1ce0aa9d116ab6690533b11bf1"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "731f52b1a37417a72ef3a60a0ea76ed5"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "f984d39eceda159f3637eaef35739093"
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
    "url": "assets/js/17.45db52d8.js",
    "revision": "8f755ac40362d0daa22e644239d44ebb"
  },
  {
    "url": "assets/js/18.5f9597d2.js",
    "revision": "e7cdb20e39cd47f87e677cec291c4946"
  },
  {
    "url": "assets/js/19.b4ea0dfc.js",
    "revision": "cb2e12d7702e64545021237905db07dd"
  },
  {
    "url": "assets/js/20.7f19d52d.js",
    "revision": "c35cf04329fc79a8e8e43e344c42f88e"
  },
  {
    "url": "assets/js/21.d8589558.js",
    "revision": "bab47711b74eddf9536825365f192a13"
  },
  {
    "url": "assets/js/22.f566dc38.js",
    "revision": "521c56cd6583349b91d71ae9819a0f52"
  },
  {
    "url": "assets/js/23.b69d67c8.js",
    "revision": "715b77c919ca4dc1e62e3541788ea56c"
  },
  {
    "url": "assets/js/24.643b50bd.js",
    "revision": "e22fc95e36c82ddb07b99b8555ac2814"
  },
  {
    "url": "assets/js/25.31cd7e03.js",
    "revision": "f408ca860e82f62efb258a2f870ecde8"
  },
  {
    "url": "assets/js/26.e8823c82.js",
    "revision": "5b8c3efe2e722faf85fcfc0ee237042a"
  },
  {
    "url": "assets/js/27.a7430202.js",
    "revision": "e2d72332510ac5fbfbf0908c55b2e16e"
  },
  {
    "url": "assets/js/28.d8ebaaa5.js",
    "revision": "63afd1fca7172a9c803534f4568ad899"
  },
  {
    "url": "assets/js/29.4c8e906e.js",
    "revision": "5ac1d2ec8d9eff850ddb8d59ea532720"
  },
  {
    "url": "assets/js/3.8c44ca0e.js",
    "revision": "38726491e6098a1e226a8e4cb1792cb9"
  },
  {
    "url": "assets/js/30.eb19fcb7.js",
    "revision": "fef653f39d6fbf42056edad73325cbed"
  },
  {
    "url": "assets/js/31.75349241.js",
    "revision": "40ae7ead466868884e926a7ed616a266"
  },
  {
    "url": "assets/js/32.9b6fe64e.js",
    "revision": "00bd3ae4389d9823dcd716004cae07b9"
  },
  {
    "url": "assets/js/33.4259a063.js",
    "revision": "8eb686bf9338e53239a5406de7f58471"
  },
  {
    "url": "assets/js/34.4e487b39.js",
    "revision": "d8c5d363e769b6b5f1a6bcf24191525a"
  },
  {
    "url": "assets/js/35.5844e768.js",
    "revision": "50f76a60a966eb35a82cab057c3e733e"
  },
  {
    "url": "assets/js/36.cd999bec.js",
    "revision": "16225474a7c97b4a5fb2cbc257781904"
  },
  {
    "url": "assets/js/37.3d9a9f24.js",
    "revision": "0c25d79fccfef68576e70fdd3ce71e12"
  },
  {
    "url": "assets/js/38.e4fa97e3.js",
    "revision": "6b9d76a88526c0c9667f25267a76b299"
  },
  {
    "url": "assets/js/39.8ba92439.js",
    "revision": "12c57ffc5244683e2ab7053de987a6c3"
  },
  {
    "url": "assets/js/4.57980df9.js",
    "revision": "ad383f77dcd05f8efe21975e9ef1cd39"
  },
  {
    "url": "assets/js/40.3e0a8f49.js",
    "revision": "2dad2342960125ac891fa7c633327bed"
  },
  {
    "url": "assets/js/41.55113ca5.js",
    "revision": "c90be03a0f3e98ddb6ea529bb755b2b2"
  },
  {
    "url": "assets/js/42.1a06d963.js",
    "revision": "dfbdb269657645cb0f41fbe801487952"
  },
  {
    "url": "assets/js/43.f6598850.js",
    "revision": "d76f3b43a8a0ec74841b684778a31e27"
  },
  {
    "url": "assets/js/44.6c165d24.js",
    "revision": "baf81e92d41165a063386898994584ef"
  },
  {
    "url": "assets/js/45.7e703a32.js",
    "revision": "e8880e7ae68ab9bdacad4f43dbb51ef1"
  },
  {
    "url": "assets/js/46.1265038f.js",
    "revision": "2c509a08c94e4a99d30ef6ea932df89c"
  },
  {
    "url": "assets/js/47.c6c01227.js",
    "revision": "4bdd209a5897897dbee14c458abd3af0"
  },
  {
    "url": "assets/js/48.50c01167.js",
    "revision": "06613901fbfff7ff465ee90335983e18"
  },
  {
    "url": "assets/js/49.933037a2.js",
    "revision": "b295cf7f3d7550909754b2d436da1b00"
  },
  {
    "url": "assets/js/5.7c27758e.js",
    "revision": "25c219916e70b94de1c518c52fa5ee46"
  },
  {
    "url": "assets/js/50.a8a0eb0b.js",
    "revision": "e4e4b784d3575f75b58fea6fbcec67d0"
  },
  {
    "url": "assets/js/51.8635f8a9.js",
    "revision": "b0a88173cc355a79b299f1f482fd6876"
  },
  {
    "url": "assets/js/52.f453b4dc.js",
    "revision": "8d8f8844e9d404653385840f6c3469ef"
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
    "url": "assets/js/app.bb79ebb8.js",
    "revision": "806be44b8fd41ff0482e95e1d7d13be3"
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
    "revision": "8595aa048f7130acfb8df92617f58a0b"
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
    "revision": "1fcc083c012f71ca54e6de4151515bee"
  },
  {
    "url": "life/index.html",
    "revision": "35b75e66234614747a4e444815275721"
  },
  {
    "url": "life/意志力.html",
    "revision": "033a1d7310c318e2128e62bb517695c8"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "7d0f08b1490e91127273f882ba36c423"
  },
  {
    "url": "skills/Base64.html",
    "revision": "2ba17868083c4656d91359de423c5e41"
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
    "revision": "b9693997a1ab30a9b7dcc8b9abf50776"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "a0c5494a96cb1c9bd4be80473a9518dd"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "22b341d5f193f7a113a77ecbf5d326d7"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "d522ea4b441029d462730c3f3f6da0ac"
  },
  {
    "url": "skills/Generator.html",
    "revision": "cefa5d0c006fd4e2f8b006184d420023"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "4ecac5d03066cb74dc39625aeec5d001"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "0c0c75e9f4fc40a3c9d08679568e3159"
  },
  {
    "url": "skills/HTTP协议备忘录.html",
    "revision": "6b9e763b6eba68883ba61877c5e0cdef"
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
    "revision": "651576392eaca262b31b5240ffafd8cf"
  },
  {
    "url": "skills/JS编译过程分析.html",
    "revision": "ec0f0e4a8059298e71c273e2c0e47895"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "9e14b81cfd33e6de23e59feab001fb1a"
  },
  {
    "url": "skills/Promise.html",
    "revision": "0aac4a491664385742516a1420307c5a"
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
    "revision": "ae338e7531cc0f071c271472ceaa5b5b"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "fbebc377ab0bf0bd6cc6d7f55bb5d192"
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
    "revision": "ed8a0fc836828f2885b4a0cb8e717ad9"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "39a7b900dae3ef7469f4325e071f45fa"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "6fab75e3385776da0e76a756c867a06c"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "cf54bc5b2a76e5e1dacd17efa69d7d0e"
  },
  {
    "url": "skills/Webpack源码流程分析.html",
    "revision": "68807a37ff83fdc3011121792c891367"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "6091be2b72993c3f55886b3b8778d81f"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "120d84535fd77980cb6705a058c7f976"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "5d317f1cb05b472dfd34de2f295da4a3"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "93d4f4837c491c49830bcb33f802bbaf"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "2149f3e7594f706c50a92c259c72c99e"
  },
  {
    "url": "skills/性能优化总结.html",
    "revision": "fbef07f32f717380317b1b1042bac648"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "958c55b2ebf145612712e4b3bb7d7c13"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "b8e9c5fce271b137c349f66e31291f15"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "8015eb048ce42a1eb47065e875411e8f"
  },
  {
    "url": "skills/浏览器界面更新流程.html",
    "revision": "e593b1005721f461a335c1cdfec2cadd"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "724c9e5f38b32fc0a6d89d0898c90060"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "cf3c7c2ea3bfb7dc0da9683a56aa1d0f"
  },
  {
    "url": "skills/自我介绍.html",
    "revision": "f98b7594ac7ac72e379b68d5b885cd06"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "a3978c7e15834357035a57ec803777b6"
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
