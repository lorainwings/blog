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
    "revision": "97e692dc09659f06003bb0bdf82c384c"
  },
  {
    "url": "algorithm/index.html",
    "revision": "0f563e8ec4e2bdec5abacba7c482e7e0"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "c69326aaa8afd92bf1aec66a45ed1577"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "8eb3fb3a340229a909be25bec673a7b4"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "4c2bb10a770791d678ab2412f083ce49"
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
    "url": "assets/js/26.e62e71c3.js",
    "revision": "5d3dee4541042cff8e72589523e8b679"
  },
  {
    "url": "assets/js/27.01d59dbb.js",
    "revision": "9bba799d92e9394408361ebb49560e22"
  },
  {
    "url": "assets/js/28.ec8e8440.js",
    "revision": "e0f82d10fce8f74ea2452f858b259d97"
  },
  {
    "url": "assets/js/29.f18b1182.js",
    "revision": "934923170c376e5adb9bfcb491274989"
  },
  {
    "url": "assets/js/3.8c44ca0e.js",
    "revision": "38726491e6098a1e226a8e4cb1792cb9"
  },
  {
    "url": "assets/js/30.8ad668dd.js",
    "revision": "8de41aa9a9d0d5821df39d4c1be7c840"
  },
  {
    "url": "assets/js/31.d9484e4d.js",
    "revision": "397a79cabfa33fe06d941989986a828b"
  },
  {
    "url": "assets/js/32.8fa30a07.js",
    "revision": "b35bbe172ec8e50bb2c6bd0e039df0fb"
  },
  {
    "url": "assets/js/33.f9b92469.js",
    "revision": "7ab190588e38dcebbcdcfa2b005bf690"
  },
  {
    "url": "assets/js/34.a21ce8a5.js",
    "revision": "a382dff0744700c9e928ad5c33893009"
  },
  {
    "url": "assets/js/35.2ae5e40b.js",
    "revision": "ac63a66c300ab056922f741855975f82"
  },
  {
    "url": "assets/js/36.5f884e2e.js",
    "revision": "72121ff5c66d901ab51738b98aa41747"
  },
  {
    "url": "assets/js/37.97fb39b0.js",
    "revision": "40568b95f3f543514f12f35964111778"
  },
  {
    "url": "assets/js/38.be1997b0.js",
    "revision": "0388d9df6ce22524dd175804e7b89cb3"
  },
  {
    "url": "assets/js/39.0008ac81.js",
    "revision": "48e5de69d47a89a90ee749862ebf5419"
  },
  {
    "url": "assets/js/4.57980df9.js",
    "revision": "ad383f77dcd05f8efe21975e9ef1cd39"
  },
  {
    "url": "assets/js/40.ed48572c.js",
    "revision": "0c70104de6150134577a23883be0cb72"
  },
  {
    "url": "assets/js/41.98d2d28f.js",
    "revision": "1fe5bb93287836360d44ec4e595f82e9"
  },
  {
    "url": "assets/js/42.f8c0e6ac.js",
    "revision": "7e6749937cd928c28638d7a576d2e0ff"
  },
  {
    "url": "assets/js/43.99128c5a.js",
    "revision": "4ffa4974f95297119c9d7f131293cc2d"
  },
  {
    "url": "assets/js/44.8db610e4.js",
    "revision": "8223291cc6cc448cf453747865331db4"
  },
  {
    "url": "assets/js/45.6f30a5a5.js",
    "revision": "2e8b0dcc11511f104580665946d87dfa"
  },
  {
    "url": "assets/js/46.a79208b3.js",
    "revision": "b75ca1e0bed9b37bb575081f0136230a"
  },
  {
    "url": "assets/js/47.293a4410.js",
    "revision": "dd6f9687f3593d703b306cdd063f0e11"
  },
  {
    "url": "assets/js/5.25f475ed.js",
    "revision": "dd169cd614479d6b11b27aaa74998285"
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
    "url": "assets/js/app.5f1e3043.js",
    "revision": "103071e033ce53f629b1067981c1bc31"
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
    "revision": "83f56227694fd8ca76af5d663814f4e4"
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
    "revision": "7d960548851ca378944bf064b0558c8c"
  },
  {
    "url": "life/index.html",
    "revision": "b8d8e1bf3a481cb5b03c78e14354f6c5"
  },
  {
    "url": "life/意志力.html",
    "revision": "de5616b5248bf34a4a0fee8d2d6db341"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "07a13b6e7d1204fbea758b2bb0ffc951"
  },
  {
    "url": "skills/Base64.html",
    "revision": "d7f3988e28173ffc4f79371a14d878c3"
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
    "revision": "71f4b22c73eb28d0f282433905a16dfc"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "7ba211275026a6e7ed87af51ad03d67c"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "aeb24d16c96c52c7543b49e86c0ce1f6"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "3bad8ffb23a8138cd5e3c1356024808e"
  },
  {
    "url": "skills/Generator.html",
    "revision": "a32fc3de372322032d1dbd6060b9b7c3"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "884b7b1ff40ddd1c70071a64d04c35c4"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "9b9934a6874dd08ba8072872a95d3980"
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
    "revision": "bdd95e5074c1e5266d4c219313e8b724"
  },
  {
    "url": "skills/JS编译过程分析.html",
    "revision": "b7ccb370aa9c6c133d14685eab79f832"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "0236d6ffbea39bee1edb7cc7cc52f52d"
  },
  {
    "url": "skills/Promise.html",
    "revision": "cce9992cee32ec5934a7a3799fff671c"
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
    "revision": "0c436ca04b2b0a8a34ae426a45db5252"
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
    "revision": "82576abd3eb555dcbfc09f615ae876b5"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "ab0f01e538fc3ffe9c71bcb558ebf33b"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "099bbdc19643511de21e273b09ecb67d"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "e5a24e0f3b2ca122af93fc2c65986499"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "93df2c67f191503833ad8bf5ee172f2c"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "a984c1e297b7a78a169cdac2c8fb645d"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "26fb495ac21afbfd784cb9c25a37412f"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "ea12f34104fe2593cbd586e2f050ad61"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "ab073321abe4aa63c0ade173849ef471"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "31cadd283deba9dcc17aac800a610e83"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "750e14b2121c3ba0528e8ee327f1b1af"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "2f22efb8d91c28086b473709efee7146"
  },
  {
    "url": "skills/浏览器界面更新流程.html",
    "revision": "e85189645cdc1226c7c866a99ebdbdbe"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "f0dd5d64fccf64a38730218427204ad7"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "8697368affd6a97ecce7ca76cce16bf0"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "f52171a93ea722dbd3de4d30a73071be"
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
