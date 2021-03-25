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
    "revision": "e62c635d93b43faf6a765a1ed1142fb6"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bbd64ecc60e9fe85c577a641ed9b673d"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "2f9f27daeed295d45b79967e2615b888"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "6d534aefb4214175149df43125ce2c8e"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "b1066fca7558ba8b04ca237defa06dff"
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
    "url": "assets/js/10.c0470ed5.js",
    "revision": "f4956e946bf4e0e26f6acb71f89298b0"
  },
  {
    "url": "assets/js/11.76b39718.js",
    "revision": "f8871703772711bd19387033e824d15c"
  },
  {
    "url": "assets/js/12.98fd4e27.js",
    "revision": "b6150e6957bfa4f504aa60e0985364fc"
  },
  {
    "url": "assets/js/13.551afd97.js",
    "revision": "f74951810603c9a7a9aa1f044f19e47a"
  },
  {
    "url": "assets/js/14.2834c03a.js",
    "revision": "c432b7ded7a0831951d7cad1c610cf42"
  },
  {
    "url": "assets/js/15.b3d0dcf1.js",
    "revision": "d2c37ce3fb439dfe268615b981eaa37c"
  },
  {
    "url": "assets/js/16.3e4aa566.js",
    "revision": "3bf9d258069d9e556414b8cb5f5e9860"
  },
  {
    "url": "assets/js/17.16df4a18.js",
    "revision": "6483b4c042460b1f3318eed220cc65b9"
  },
  {
    "url": "assets/js/18.af322b1d.js",
    "revision": "60684812c21d80174be14ba1baf44de3"
  },
  {
    "url": "assets/js/19.03e80c90.js",
    "revision": "e6a866cadc59459b9a468764df4c44d5"
  },
  {
    "url": "assets/js/20.85e05e57.js",
    "revision": "aed621543213eb331a3a3996684aa0f0"
  },
  {
    "url": "assets/js/21.d5265d80.js",
    "revision": "67ff1bf6ba58e0bd6b58aef4c335defc"
  },
  {
    "url": "assets/js/22.976f99d7.js",
    "revision": "dffc890914bad0833c9ae4e4c961d4b2"
  },
  {
    "url": "assets/js/23.b9e27bb1.js",
    "revision": "0f81608d29b5c4fdfce62614bba40880"
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
    "url": "assets/js/29.4c8e906e.js",
    "revision": "5ac1d2ec8d9eff850ddb8d59ea532720"
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
    "url": "assets/js/48.766842ae.js",
    "revision": "acafed8358338e47ca3336cc2496551b"
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
    "url": "assets/js/app.9803b9c1.js",
    "revision": "009242b5f756ee869f3d616f9a1399ca"
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
    "revision": "0c490b65a2bf16884900dfe7ad3ee184"
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
    "revision": "a0ffb8d7e68cec0dbe1f7b1f025e3802"
  },
  {
    "url": "life/index.html",
    "revision": "5ca408b52f8ad9a483454937940c7ef8"
  },
  {
    "url": "life/意志力.html",
    "revision": "d342cec8642b3acb4c1b07eb62d7d725"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "68903e3b2c0286e3bc76e1901fabce72"
  },
  {
    "url": "skills/Base64.html",
    "revision": "7853483f2e39254d3bf2940c64428198"
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
    "revision": "460607151a687350b5e0e36d5e980acb"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "60fde51eb4b1afcd624fb333b2739d1d"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "1e17d05f9aee8e12305d6b3bf0ba19e5"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "06d7ff7d7b32a1ffda7849acce467391"
  },
  {
    "url": "skills/Generator.html",
    "revision": "e87ed0e6eef7ac501bc2dc95f8de93fd"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "15010ad7991eeb3137a1f68e5432b7e5"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "89b490a0c1b67a9ee5c1728a5e755242"
  },
  {
    "url": "skills/HTTP协议备忘录.html",
    "revision": "36eb93c8c322cdaf2f26316449fefbbb"
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
    "revision": "c82f9ed4b41097d4561962bb2bacea84"
  },
  {
    "url": "skills/JS编译过程分析.html",
    "revision": "4db224c6ab12b7ea319626f8b0172032"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "3c26b2254fe89354f8afc35f368d120a"
  },
  {
    "url": "skills/Promise.html",
    "revision": "715f8146bae669f9d3a6aa3869ca0b56"
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
    "revision": "da66cd6a064c014f8675b0b651195430"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "eb4973e07f3cfe02babcb50087c35017"
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
    "revision": "c6b67ed89369fa578478df77d53a538b"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "9b4462ffe80dbedbd03b4c606ae65086"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "b57f3a1bf21f3304fe1c05969415b5cf"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "bcf1fab7f4e379bd0564b2da2ce73f91"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "97be7236fa0b147338b2731805503c81"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "0a3be78b30381424f361ee99095be307"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "8b86de1890b09aabd5d1c03d3e200a7f"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "dec9ef31c45ad4c2ffa5eae38669fe7f"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "c44f5e8cc56f6397df7cb827bc2c87d8"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "c2d5dc7a592d22932f2690f05fb544ca"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "bfd4425a7af849b3a8830573d5bab2b1"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "80dfd1126cf3b00eecdb4b72ff1e4595"
  },
  {
    "url": "skills/浏览器界面更新流程.html",
    "revision": "6e33d22d775761370d8089e8607eb888"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "edbb13c77ff291518d6fab1319e3e102"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "759807dd97298adbf3aaa221c7bd906d"
  },
  {
    "url": "skills/自我介绍.html",
    "revision": "dd96ba8cf6e62b8730b9ab37fb4c0c38"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "6681e3c913ad1f94f06262246e8cdd07"
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
