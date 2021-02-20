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
    "revision": "c58a4121c8fd311295d1878a1c363ef4"
  },
  {
    "url": "algorithm/index.html",
    "revision": "cb6883db66dc56f807389d693747a2d1"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "b48b4db364ad6273097a2521bc6ce334"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "fe02e1b2f334138c93b269dd9ac9ba0a"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "edc03522b3803265057cb67e92feeb09"
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
    "url": "assets/js/27.550e84f2.js",
    "revision": "5e81ad3199b59ce226ec2c80972bca6c"
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
    "url": "assets/js/app.48ba6e5d.js",
    "revision": "c19e75da12dba37ec4b5e50739fd7989"
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
    "revision": "bcd9e8247e0e8d1ff455d85c39797ada"
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
    "revision": "7e887a6d8820bc017ada039378cc1506"
  },
  {
    "url": "life/index.html",
    "revision": "8658d6ec084961973f7192f2dbfaa6f1"
  },
  {
    "url": "life/意志力.html",
    "revision": "b9a38d8cd7bda4eb3f7e2bd75d6674a1"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "3ec18d2220181b7324a5acc0b0f04fef"
  },
  {
    "url": "skills/Base64.html",
    "revision": "65551fd6f4463f3ca0426f65f7e006ae"
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
    "revision": "5379e897abb357955896c02cc92e32ca"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "ae12e157e4bc0632e2af02ff759ceed0"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "0220a44f7072489d6cb3c616cc994436"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "514b711e02838a75e7a5ad9c2fe79f79"
  },
  {
    "url": "skills/Generator.html",
    "revision": "7cfe0aff40ea6d5244a55fcefdc6be39"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "b6566d95d2ce200a822ca88b4a772007"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "d839e09948454bbc9f1fcd66ed886c24"
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
    "revision": "f3caf48c493c24b5b64d3442026deac5"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "49c54ba40ca083633983aefb8b3300b4"
  },
  {
    "url": "skills/Promise.html",
    "revision": "bac37d1c2b7aeb61130329615fcd9a36"
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
    "revision": "2cad28185e098ed52594049e9f991c96"
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
    "revision": "9da8d7f69eaa976a9ff27c37152f9e98"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "b559b56c155d5c732df3872d2b4ea875"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "cce660732ee24f1898a47ff8b122c31d"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "2e9907000fb72b688a50dfca1fdf3887"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "74c9a2c38673358b9f1838af17e7539f"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "28f2b1c3fd277521a710995b108df8ae"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "51bbb993ab50e440fd80de19fcddb5c1"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "6bbf010a92be62de99030de810d063c3"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "70f16a264e2fac90ea195fa95ca6886b"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "7b23c59f22e974db52e27328e7c8b8b1"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "6379ed610cda7ab55793f6c82d506a7c"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "c6dc58a05f98a5e1de6c690d4d8c174a"
  },
  {
    "url": "skills/浏览器界面更新流程.html",
    "revision": "a2b6b7d52d6bbc6d6025b3ed2c1a854e"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "6fb6f4c1048bf060f9424d8739f519e3"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "d769d89bc92995e3fb40a88d6f1fdd85"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "b2d89ca3b1527ffd67f8766b719e0879"
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
