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
    "revision": "a96952331e4a93262b76a6d0e64d35c7"
  },
  {
    "url": "algorithm/index.html",
    "revision": "2dde230847938d82cfca371502b614e2"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "6a19928a775dca6b35e2edebbc229cfa"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "9f7a21c7b4a492822258d9683394e5af"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "0db1217569e500db1f86e7709f1f0717"
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
    "url": "assets/js/27.5e916509.js",
    "revision": "7d2c7171d072a2b77963adbde1d27c0a"
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
    "url": "assets/js/app.dd7f33e7.js",
    "revision": "e68b34ea3870fea9db48450d902ebae2"
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
    "revision": "0d1c6c390c8a8bcd8688d9787266f643"
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
    "revision": "d59e0f6f1f8953479c321fa99793bab9"
  },
  {
    "url": "life/index.html",
    "revision": "abeba4ab35335d01ae7f7db129356e62"
  },
  {
    "url": "life/意志力.html",
    "revision": "8a84ce2e3fa84ca41ff81956ea68cbec"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "00ed1dcc6f54fdaba7a7e4454668d4e9"
  },
  {
    "url": "skills/Base64.html",
    "revision": "b7212b449ad06de148e0eee34861bf75"
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
    "revision": "cf35bf70658ce3def52277cc9bb6d96f"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "88a62ae3d9ae6c877a0d89b4ee97ac03"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "4450f90a33103dc906e287f069f56689"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "0f2a5f3aab5f4dd41becc43c6f09a15a"
  },
  {
    "url": "skills/Generator.html",
    "revision": "e82931757edeed65d2f0a5d0bb09d335"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "d37eeef7288f2f1d4d5e7ae91d939a8f"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "211e9b60074c2108daf5f7e2599b218d"
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
    "revision": "c66c5bb20fb0baf4626b9e4a1f5259f8"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "dc091e3cba99a43a0b01e998726b2e4a"
  },
  {
    "url": "skills/Promise.html",
    "revision": "258ac7e74bdb61e9815c4fb3174edbb5"
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
    "revision": "601cd5a1fd47f1f17ae2f677b8bac42b"
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
    "revision": "5a4553ad01526197be310fc10afadd9e"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "74a299e2ee1d807d672df0f844d8b4ce"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "927cb9a5b4ee2da50f0665a68598c3ad"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "a227d5fb470af4dfc4e9aaf37f1f4821"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "80d8855510c126b9128de7f9e0725cc5"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "8c3e46631a4009bc9d92b6e9d8b10907"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "0b0f21ea88bfc8f2f0f9f141fdfdc4bb"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "553be6f1a357011930caef7f49a888d1"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "3138d6408cbd9bec7bf41d5ece2e3313"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "9a03bf20beef2b245238fea1d074a632"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "bf6494e2c68a43de6317f6fe6917e34d"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "a4a9c65549301ba581865b21f189fd22"
  },
  {
    "url": "skills/浏览器界面更新流程.html",
    "revision": "e03611e55bdd8eac3e2d5e7c0f162e34"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "95a880d49976c9c49063766b06326b92"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "a29dacc04c89fb1d96c7d833c84b629b"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "446a6e790535d28546f5b88403afc1ec"
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
