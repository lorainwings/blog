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
    "revision": "1561bab1caa4bb98400b06aedf75abeb"
  },
  {
    "url": "algorithm/index.html",
    "revision": "07b7ca7cca1eeb048fb5befaf29ace88"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "890e1c51067c4f063c586cdbbd778a4d"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "44317fe8c16d6f314ff9d21dca314564"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "2c51c25ccf3df67c98ca3fe295961c49"
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
    "url": "assets/js/26.4f670d1d.js",
    "revision": "4634a7ccb693a7233c487279fbe8efa0"
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
    "url": "assets/js/29.fa2317e9.js",
    "revision": "eff44441a091fab611a3d93024594092"
  },
  {
    "url": "assets/js/3.8c44ca0e.js",
    "revision": "38726491e6098a1e226a8e4cb1792cb9"
  },
  {
    "url": "assets/js/30.70b8c346.js",
    "revision": "6b93f9118495f5c6b4132bd9e639696f"
  },
  {
    "url": "assets/js/31.8e79d2ee.js",
    "revision": "cd7f2300481b743c84ead0f4d0ebf4f2"
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
    "url": "assets/js/36.fa212eff.js",
    "revision": "045472ceb5d9e9ad9ba414f99af939bd"
  },
  {
    "url": "assets/js/37.3d9a9f24.js",
    "revision": "0c25d79fccfef68576e70fdd3ce71e12"
  },
  {
    "url": "assets/js/38.753a120d.js",
    "revision": "a05521193dc86db5dfb3930c6d478a91"
  },
  {
    "url": "assets/js/39.4528b3f4.js",
    "revision": "8d3e0cf85ad8b730c719c8eb22e8e916"
  },
  {
    "url": "assets/js/4.57980df9.js",
    "revision": "ad383f77dcd05f8efe21975e9ef1cd39"
  },
  {
    "url": "assets/js/40.833a73ca.js",
    "revision": "719bdffda6896d4feba86f4608a7c2f0"
  },
  {
    "url": "assets/js/41.bb597969.js",
    "revision": "509bd921c2aea21692da6288a19f24a7"
  },
  {
    "url": "assets/js/42.ae230c7f.js",
    "revision": "7818df15e3ec65995503f696f26f05f2"
  },
  {
    "url": "assets/js/43.b70386dd.js",
    "revision": "fbdfcbac3dcbfd51d0ab473318110741"
  },
  {
    "url": "assets/js/44.0c7fabe2.js",
    "revision": "a92d1b1ac8afe728fa3afda10cb4e4cb"
  },
  {
    "url": "assets/js/45.8df74a46.js",
    "revision": "3b31e1d78c0ec90b59d55730af26c545"
  },
  {
    "url": "assets/js/46.f440020e.js",
    "revision": "588e4e7d6ecb54d812139c24694000d6"
  },
  {
    "url": "assets/js/47.71fc19c4.js",
    "revision": "ca757d63c5c66c174101b34e0fa33718"
  },
  {
    "url": "assets/js/48.b8084d5d.js",
    "revision": "8a4cbad2be0344384ff4bfda8e974201"
  },
  {
    "url": "assets/js/49.2088d160.js",
    "revision": "10b360d1c9d5ac4e419047da70640f98"
  },
  {
    "url": "assets/js/5.5ef3bbd1.js",
    "revision": "17ecdf9c6df1530130210a4738d54d55"
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
    "url": "assets/js/app.6e164363.js",
    "revision": "c673a7d3e60b0d9c026454310b43231e"
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
    "revision": "b27faad4f870d9d62367a8f6b61d63c7"
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
    "revision": "53e16667098b0454b14d1d58f9523153"
  },
  {
    "url": "life/index.html",
    "revision": "6ce9391d35cafc07db0a078d516521a3"
  },
  {
    "url": "life/意志力.html",
    "revision": "473705fe1a1ea9b26b858b7cddcaa240"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "f39810e075f760b2c36c93e161cf2f4d"
  },
  {
    "url": "skills/Base64.html",
    "revision": "2bd1340fd88246e9b97c881168926a40"
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
    "revision": "99c7ba5770ccbd1cd390c0b7749fc999"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "42640f119b6b62d4b08943da33d92b40"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "b845071aa80f9ea43edd8e7e9bc77ced"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "13463b089c37188b782dbecb86451316"
  },
  {
    "url": "skills/Generator.html",
    "revision": "47bab81470bde17c1257cc11ff662a8c"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "71d00fc6d4e2711e50885406b8439610"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "a7a0ca80164db8c658b90261d84a275b"
  },
  {
    "url": "skills/HTTP协议备忘录.html",
    "revision": "3b64688820a8c17035deccbf51a00b8b"
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
    "url": "skills/images/four-handshake.jpg",
    "revision": "7499fe662dc15c4a52c9373953bcce5c"
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
    "url": "skills/images/react生命周期.jpg",
    "revision": "12d183f045977a984852092598aae75c"
  },
  {
    "url": "skills/images/regex-place.png",
    "revision": "c874fa1afbb3be891a2b338def4e1000"
  },
  {
    "url": "skills/index.html",
    "revision": "e31716b348f9f2af147e5acc9b9f0cc1"
  },
  {
    "url": "skills/JS编译过程分析.html",
    "revision": "5ea944ca340477f5333b457cbd0b4705"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "c3661eb296879d0ee16b0a464ab8053b"
  },
  {
    "url": "skills/Promise.html",
    "revision": "76e535ed20fa411a1326b80505b0e185"
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
    "revision": "063feed18d4ef86cd45b1d20c7cf2410"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "16cc0c0e21f1eb8fe70a314812d6d89e"
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
    "revision": "665cd575e908ce0c52dee07d10c33419"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "eb02fdd30839f884a8c209c19bdb2ad2"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "850edda8f3484bbcf25f095a96e5d8ff"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "11cf2e221d1d903e21e20e2668b2d2c1"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "9ba2b69b3b62c531653834b6dd08f7b9"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "d290bbe575b648f1b3217991f292078f"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "4828f57834c823ff0ecd33bcd2b11d30"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "d1685c481e790c9f811b5696533dfd3b"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "bfc164488c7ec11f5a2f9614c538138f"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "030168e2d07b34902fd72a0f36a79f75"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "7b2ac5b253f41c2b043c0f844f581038"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "553a3649860bc1cabd2833447a8bd594"
  },
  {
    "url": "skills/浏览器界面更新流程.html",
    "revision": "2d2a5f4778e41228d3bb87739f309b5a"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "338cbee855a3b8aebfa5ebddab430157"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "c399131b1d41c6213f08f62add8ae007"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "18feff93883034cc3384e51dc90fee83"
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
