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
    "revision": "c081f846c7151e8c544278eae249f144"
  },
  {
    "url": "algorithm/index.html",
    "revision": "138b9a842156e97ebd2d0a8c972b4c37"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "51d189233e83b3b5672a91b87ef4809f"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "a36ac6c2643e92c09e852a6622f480a4"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "0e52d62360c406e885d7ad62879c87f4"
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
    "url": "assets/js/13.a1373108.js",
    "revision": "d97863760b7ac35f2aa0689131db2200"
  },
  {
    "url": "assets/js/14.1f75dcec.js",
    "revision": "74faaafabf780dc2e6cdb9499371e4e9"
  },
  {
    "url": "assets/js/15.6e02fab8.js",
    "revision": "9394ca546cc27d9e9de9f1ecf0b16691"
  },
  {
    "url": "assets/js/16.87b6dc9c.js",
    "revision": "6bfd0432a47b0b03aed7b219a02f93e8"
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
    "url": "assets/js/29.8ea743b9.js",
    "revision": "33ae246a95c5bb1c63c9676826beed12"
  },
  {
    "url": "assets/js/3.8c44ca0e.js",
    "revision": "38726491e6098a1e226a8e4cb1792cb9"
  },
  {
    "url": "assets/js/30.b41724ca.js",
    "revision": "22a92a4a0695c3e6bfe6574f8cd61a3e"
  },
  {
    "url": "assets/js/31.ec1b289b.js",
    "revision": "0f705c0b7d51a7fa1fa84009ba7c6ef1"
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
    "url": "assets/js/42.5668885f.js",
    "revision": "b8f6ba16b12a45319135babc10bb43a2"
  },
  {
    "url": "assets/js/43.94613343.js",
    "revision": "03807284d6eb3a2749b388aeeb3ab71a"
  },
  {
    "url": "assets/js/44.00357a70.js",
    "revision": "9fe9e5bd798f6fcc4b090d62b07e639b"
  },
  {
    "url": "assets/js/45.555be71a.js",
    "revision": "729286999d18c48bf7b31890911e5a2e"
  },
  {
    "url": "assets/js/46.03a26959.js",
    "revision": "8c01669ab1404378e0ac7a5bc950766e"
  },
  {
    "url": "assets/js/47.b29d5306.js",
    "revision": "549f581c9f47bcaf0b65fc13ebc7440e"
  },
  {
    "url": "assets/js/48.cd893ec3.js",
    "revision": "b5eef4051a91ddf86e39fe6c8a8555a3"
  },
  {
    "url": "assets/js/49.12210cfc.js",
    "revision": "cbbbd0aa424b52f19987121c57817345"
  },
  {
    "url": "assets/js/5.5d055cab.js",
    "revision": "d61af23248d88b42d5c3a0a1c1d1ddda"
  },
  {
    "url": "assets/js/50.ddcb3929.js",
    "revision": "40a26805ae04fa66bcc2fc310153010b"
  },
  {
    "url": "assets/js/51.ec0a7d07.js",
    "revision": "7ff0aa81068ab50835371264d56fce83"
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
    "url": "assets/js/app.339d3b6d.js",
    "revision": "f1f7d7c180835e7191b164167fef832a"
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
    "revision": "84acdfce5bec817c7dfcf9418644d726"
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
    "revision": "2bb33eb5949937cb58c7dedd4e66e9aa"
  },
  {
    "url": "life/index.html",
    "revision": "860c0c7591de92ae2a1f3f33687ce66a"
  },
  {
    "url": "life/意志力.html",
    "revision": "40f7379df8cdf8cc8122bd799f681dfb"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "365e2b6ce008c192e8fcd0b9fa64bf54"
  },
  {
    "url": "skills/Base64.html",
    "revision": "1f503c5903970f40a8326aa865f1452a"
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
    "revision": "4e82d45dfad519c2388b4d8cd085cc39"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "b8192cffd321ddc6478e9f70ac3b6f5a"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "5f98714863d2b575b94f5afe493cabe9"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "90f49bb2028edbc2012b6834f8389d06"
  },
  {
    "url": "skills/Generator.html",
    "revision": "8da1a4e2b97c2e1bc9858cbbd30e19f3"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "9c10500585b15feeede912f806968a77"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "c8294a1acf2548faa83b0136c7ab4b42"
  },
  {
    "url": "skills/HTTP协议备忘录.html",
    "revision": "a943237de25185325491f71ca1f6f9c6"
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
    "revision": "910d0a3b6609a1f5e29a10edb9c1ce14"
  },
  {
    "url": "skills/JS编译过程分析.html",
    "revision": "f8434b9e0d03967e813d0a922b0533f3"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "148e720a12f6472b4206a2f01ac9b0bb"
  },
  {
    "url": "skills/Promise.html",
    "revision": "a6348a7f0892bbae4e4a8a985c9d574d"
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
    "revision": "4ac5b544e206d4dd7a720743a53c9d44"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "795b924b095f04e20f2778d7f5603539"
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
    "revision": "44b6736cde75231f5547c50cd411b575"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "bc0be5f252eab13999e4e0f31d097dd6"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "b8ba58255257a80af2e51be92b2f7c0a"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "22a20fe2225a3f4a4ab7c36aae75f9fd"
  },
  {
    "url": "skills/Webpack源码流程分析.html",
    "revision": "a6e66f42ddf7557f139264889bc641af"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "e64bdc6172b2f05ac876e4970dc3845b"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "c204b6a2f4a316e1d05b1ec27495b609"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "0ade4f364718cae3742b498ff32659ae"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "96678a136ec52593775eae28e96d30f5"
  },
  {
    "url": "skills/前端监控及上报.html",
    "revision": "ba4cd20388773594a67d2417c61eca37"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "1bd447c5d9830bffa28ca70490ff162a"
  },
  {
    "url": "skills/性能优化总结.html",
    "revision": "e6f9cbc0b28271413547729a42cf8d3c"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "09e411c2515a3445fe2ab7f3178a76b0"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "75f09f88089b4f4b223b32d15943d33b"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "c3b58640bf8c0be74b8ea8011c9d22f5"
  },
  {
    "url": "skills/浏览器界面更新流程.html",
    "revision": "b96680b415171d4818d087f8709f3215"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "eb30aac827449234d2355e8bdfa0747b"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "42a9f12f1af134056214aaf67925d3d3"
  },
  {
    "url": "skills/自我介绍.html",
    "revision": "70be3e91eb53997b0ab0123cb1a58619"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "47a5318d1a3658dfe987f22bdd95cd55"
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
