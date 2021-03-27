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
    "revision": "5be3f6c35e2d4ba5cb0e8615e2495f8e"
  },
  {
    "url": "algorithm/index.html",
    "revision": "aa42a8c9935ee885b4725bb4c276c91a"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "3a3db7d45da7dad7c825e28e3b71ad20"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "ed5b8693479b9d3c446b53bcc836158e"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "7f74ba748dee2ab0a9767e093c4d7c1e"
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
    "url": "assets/js/10.6ad0d2df.js",
    "revision": "60bdf29fdc723f1b513fa2e660db1e11"
  },
  {
    "url": "assets/js/11.6ad2e637.js",
    "revision": "a84122b9507eaf193a7a33eb6f7bc06e"
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
    "url": "assets/js/27.a0b33cf6.js",
    "revision": "8fb4bb5cbd5e9cca05db943bea18ac79"
  },
  {
    "url": "assets/js/28.d160daf5.js",
    "revision": "8a3306b150b09b130944b1af6d087ca4"
  },
  {
    "url": "assets/js/29.dde486a4.js",
    "revision": "92e1e0e9a5bf0504e0093041bdcc9493"
  },
  {
    "url": "assets/js/3.8c44ca0e.js",
    "revision": "38726491e6098a1e226a8e4cb1792cb9"
  },
  {
    "url": "assets/js/30.f35c3287.js",
    "revision": "f6ae86425a143808b3f81e83930ebf3a"
  },
  {
    "url": "assets/js/31.ec1b289b.js",
    "revision": "0f705c0b7d51a7fa1fa84009ba7c6ef1"
  },
  {
    "url": "assets/js/32.28fd9f76.js",
    "revision": "bec83cf4c6dabd2857df28cbc1ffc58d"
  },
  {
    "url": "assets/js/33.4b97b376.js",
    "revision": "17c3ce14c911f1e63fa716a642f6e9e2"
  },
  {
    "url": "assets/js/34.258c9afb.js",
    "revision": "1b56e6f5cb726d5d07fadf641a25cf31"
  },
  {
    "url": "assets/js/35.9efd9216.js",
    "revision": "0f9bb9bce8aa1d1beffd2f1d0af1c0cd"
  },
  {
    "url": "assets/js/36.c2df158c.js",
    "revision": "ff5336929c14b2cc211d9986215a78cc"
  },
  {
    "url": "assets/js/37.f89b6c31.js",
    "revision": "b8dce2bf70887f70a6bd47f57e9071eb"
  },
  {
    "url": "assets/js/38.753a120d.js",
    "revision": "a05521193dc86db5dfb3930c6d478a91"
  },
  {
    "url": "assets/js/39.cf1351d5.js",
    "revision": "6015410b2a69b2e7098d71adb714768f"
  },
  {
    "url": "assets/js/4.57980df9.js",
    "revision": "ad383f77dcd05f8efe21975e9ef1cd39"
  },
  {
    "url": "assets/js/40.20277b91.js",
    "revision": "db5033347286da43f64412b828c92d3f"
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
    "url": "assets/js/46.e3e9cded.js",
    "revision": "f7d4982ab2193576741044ba2123e226"
  },
  {
    "url": "assets/js/47.3bc7f892.js",
    "revision": "a25d3e5e2e91042f7ddef10830396320"
  },
  {
    "url": "assets/js/48.cb1b3ecc.js",
    "revision": "9b03df1e8b4d1573c69717bcd4d7da47"
  },
  {
    "url": "assets/js/49.8333fbd8.js",
    "revision": "3d925c299c374b452635f426cdd9330a"
  },
  {
    "url": "assets/js/5.9b99d60e.js",
    "revision": "36fdacad6ec01ef3b2c2b81b96cd3722"
  },
  {
    "url": "assets/js/50.a39dcdd9.js",
    "revision": "4431d7a994ed58b361800591c6382fa4"
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
    "url": "assets/js/app.10885aa2.js",
    "revision": "46a715adbe6a5c65a6b2e807a858313c"
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
    "revision": "e191ef2515ae9c3cd4a897c2af301bc9"
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
    "revision": "fabf363b1fe5d1b03e54e860bf246054"
  },
  {
    "url": "life/index.html",
    "revision": "d76ae4f66cdc11117c984e21d889f1e8"
  },
  {
    "url": "life/意志力.html",
    "revision": "1cbbe6ef73061536aaffc032a7040bd6"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "c61fe371a6d53bb1373fbe0524077dd8"
  },
  {
    "url": "skills/Base64.html",
    "revision": "3f3c574549e67a07a60f1d1f4500fd13"
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
    "revision": "249e38c7258bf9198ff8c283e5a4d16e"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "18738c4cc4b1b5ea84acc11064e999d4"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "897a109779f38d5a26ef0178bc5eac0e"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "95a6a99fe27853c54d421a143eea80db"
  },
  {
    "url": "skills/Generator.html",
    "revision": "92cb97736c6b63f0713631dde1482373"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "13788fbec396caff858b33309f336b90"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "dec25ce2eb758a6011c38e1d3cb29cc6"
  },
  {
    "url": "skills/HTTP协议备忘录.html",
    "revision": "372272dbea949076d13932906b134fca"
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
    "revision": "9d468ba731a5ed9370c4bf1067ace826"
  },
  {
    "url": "skills/JS编译过程分析.html",
    "revision": "8ebc95ad0fe8d1d5125311167b65facc"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "0e2280c107102f42651a4b9bca78d402"
  },
  {
    "url": "skills/Promise.html",
    "revision": "c0ee4e1ee47edb984feba9d3fb456519"
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
    "revision": "8c0bc09f4c8725394eb4e433072f9770"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "57e96613ff2a499f66748c0b1d3fd591"
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
    "revision": "69c1511ce6ecc5855be828ce18697a6b"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "3f9b9c3ec3dde83be22e63738f7494b1"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "3066f47b3e619c658eedb789f101cf1b"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "5d7fdbf9293f40f856ed664e2ba1fd3b"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "e95503fb402cc1724053a7dea49ec331"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "898ae6b7854cbfc35c6986257e40de98"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "714cbd02d9c6cc70b0008644bde07d16"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "2077ecdd394f4fd7db4009d55e955fde"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "751c720a0edefe476fbd4e9c28b95edb"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "f4c8ab3e2593d44da2680c63ed5ac698"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "009203950a19001eb7f135962999ef16"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "fc8005a01de488c674d0264892dc36f3"
  },
  {
    "url": "skills/浏览器界面更新流程.html",
    "revision": "2a8dccb832e691e4b644995c703a6276"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "ef3e20054d4e4ce153605aceab3b24f9"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "9300e3da6acdd5462a424f009aa180a6"
  },
  {
    "url": "skills/自我介绍.html",
    "revision": "9c9664dd536f15d675b413a945871305"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "e41ecc387143b42a66971a55e6547f15"
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
