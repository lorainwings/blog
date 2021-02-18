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
    "revision": "85caa9eb14692bc3d8872de17b9d30e0"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bb184dd4913494e4db3a76825230d689"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "18bbcc23f7f19bf6c318239ca1088bab"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "95a036fb1c77710de29f2fda412c1ed0"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "b84b7ee2da9b5fee6a2877599afa325f"
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
    "url": "assets/js/18.f048e80a.js",
    "revision": "25b38c622863d519ca0558576bf838f1"
  },
  {
    "url": "assets/js/19.cb4e044a.js",
    "revision": "26783f99c73e0beb5591a248c22c8f71"
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
    "url": "assets/js/24.39640fa3.js",
    "revision": "6fdc82e24b1e479aac5ae22b7effaec5"
  },
  {
    "url": "assets/js/25.31cd7e03.js",
    "revision": "f408ca860e82f62efb258a2f870ecde8"
  },
  {
    "url": "assets/js/26.33e13135.js",
    "revision": "c5e4fe2c7a90c1a9caa09ce0ebd8a061"
  },
  {
    "url": "assets/js/27.23cfcf44.js",
    "revision": "45b6da6f346a28a2f1f567f490f3cd1d"
  },
  {
    "url": "assets/js/28.67f3e5f1.js",
    "revision": "5e1d5b820ff606144b409cf93d48d1b0"
  },
  {
    "url": "assets/js/29.25710728.js",
    "revision": "9c45b24a54b9240a3b8ef31d7ba0d439"
  },
  {
    "url": "assets/js/3.8c44ca0e.js",
    "revision": "38726491e6098a1e226a8e4cb1792cb9"
  },
  {
    "url": "assets/js/30.b6c183c8.js",
    "revision": "20e1b31486a43759721a11b2292f2631"
  },
  {
    "url": "assets/js/31.92ae948f.js",
    "revision": "dfb0ed96aa3b784585a04d8f0c358ec4"
  },
  {
    "url": "assets/js/32.0644f365.js",
    "revision": "fa7f0f24863dd1560a80abf93987c688"
  },
  {
    "url": "assets/js/33.6665e618.js",
    "revision": "96bd744605b1befc0045d08fb7dec8ce"
  },
  {
    "url": "assets/js/34.4dc117ac.js",
    "revision": "0a30abd70ffee937d126c0d62a8890c5"
  },
  {
    "url": "assets/js/35.e24a02ac.js",
    "revision": "769173b19443631a6d13a36e3d48a278"
  },
  {
    "url": "assets/js/36.74def00a.js",
    "revision": "9ba4ca4077e30b8efc50fa0be3531b1c"
  },
  {
    "url": "assets/js/37.3f39d15e.js",
    "revision": "e9029a1319a7c4537ff3414216702123"
  },
  {
    "url": "assets/js/38.78379f7b.js",
    "revision": "96846439e48698c1d4dca1404de6f718"
  },
  {
    "url": "assets/js/39.e12c28f2.js",
    "revision": "5b7368e8ecd179f74b43f4d05d6da4b9"
  },
  {
    "url": "assets/js/4.57980df9.js",
    "revision": "ad383f77dcd05f8efe21975e9ef1cd39"
  },
  {
    "url": "assets/js/40.eced14bc.js",
    "revision": "88a7f38aedb66ff20abcf223da7116b8"
  },
  {
    "url": "assets/js/41.f104551f.js",
    "revision": "48d56d14967a8bc090f3d60ca73a01b6"
  },
  {
    "url": "assets/js/42.21ec0d93.js",
    "revision": "1661ad42a6a1504dd19a262110e78133"
  },
  {
    "url": "assets/js/43.984dadf1.js",
    "revision": "ca68145b9d5a4f879c4433ee48b6a919"
  },
  {
    "url": "assets/js/44.a870dc42.js",
    "revision": "54b9f6ba8650b380812e129b1b0b0864"
  },
  {
    "url": "assets/js/45.7b845df4.js",
    "revision": "d03c96156ee49b0eb95d566b638bf61d"
  },
  {
    "url": "assets/js/46.31a736c8.js",
    "revision": "a268ff0dd47f55771bbf66809241612c"
  },
  {
    "url": "assets/js/5.2b577ff2.js",
    "revision": "a9be0d8f6229228106b322cfce1b3294"
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
    "url": "assets/js/app.b9d1aa2a.js",
    "revision": "6072ebcf819e6b2bc08bd55790aa0df2"
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
    "revision": "5572e278d6f2dbbf51f1c31a4e7f349c"
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
    "revision": "0eb436840f1131e9e54ecc488fa66fa0"
  },
  {
    "url": "life/index.html",
    "revision": "e983be513051662e1876dd16ac598304"
  },
  {
    "url": "life/意志力.html",
    "revision": "76de7f017f82cd2a6e8bf4000524a65e"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "8d1aed14e1c41b77133868360fe0c9f0"
  },
  {
    "url": "skills/Base64.html",
    "revision": "7c26a7ee2ea01beea73e39da13132379"
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
    "revision": "5b584f36d166d56f55e3726959093239"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "28b58d8bfd39b988d9083df624a7afa1"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "69f02b74dce5dd73456100e1387f0709"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "adf42a88c3ba4cacc703bd5dc108db4d"
  },
  {
    "url": "skills/Generator.html",
    "revision": "9dfdfcb4bfd30b5cba5fe943859ac9d1"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "643609b90a4e54f5cbd6936c136d0cae"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "7e6f0458af592b231362ba8c125f5c02"
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
    "revision": "fbf1754dad8c18eb293e2ee88376dd9e"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "a125c81a627f50320f548bcd21a6ec45"
  },
  {
    "url": "skills/Promise.html",
    "revision": "fe40dd691e3e7128386f776ed8c41c46"
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
    "revision": "cd7a17f28e05572533a965f04b7ef1a9"
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
    "revision": "fac73fac63d122edefd5669dfc0be2d9"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "fe573b42de16e722dabf22c5704b2357"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "68b3fda5d5b1fb2101f02ae6dbabce78"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "fa52135296e161a9af60632c475008e0"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "9df881869d2790980d3c41efc8d641b2"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "cb51f7fd75f944f282517d24a0dbca67"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "c1328825bf6a616f0661b3fcf754b3c3"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "96ac610ecf4099b8016e8bedfcc60963"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "a1ce94fa39399f5e272feac3efe0d88c"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "1a5cc8ee9b233f8954bf34aadbb9879c"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "5921b464f4d00281c9ab4864912a5d77"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "593333bddc2da796dad134ef751bfa66"
  },
  {
    "url": "skills/浏览器界面更新流程.html",
    "revision": "e684c1839754d82cf3d29916f8c50a7d"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "b7dc901e1d10b3045580ecf85a066356"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "4a8083acaf9b58431653d199c4eb90c4"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "d3a090b507cd43ee8f3617a34e6d4648"
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
