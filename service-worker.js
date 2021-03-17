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
    "revision": "41dcfc6934d2ad02e931919964e3dcab"
  },
  {
    "url": "algorithm/index.html",
    "revision": "069efac0070dee92478aff1c8411a632"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "05c48b6b2b2ace8d742f1e464aced286"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "d81b12b96811f8ed7557c05400765ff6"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "e6be391ca54d3ce275cd63be8c588432"
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
    "url": "assets/js/26.c22cdd3d.js",
    "revision": "4d8346c8df201d1d9822a7a97c21f1c1"
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
    "url": "assets/js/30.a72ac6ed.js",
    "revision": "7a4932525a0969f3e23d5182f6dbed13"
  },
  {
    "url": "assets/js/31.86ae47be.js",
    "revision": "f5e0a29390cc9b54be7bfd75dd067423"
  },
  {
    "url": "assets/js/32.bf6cece9.js",
    "revision": "0bb6b5af96c98d1c71b58ece78b0f185"
  },
  {
    "url": "assets/js/33.27b71c6e.js",
    "revision": "447306f1cff799fa031280fd35b9a8a5"
  },
  {
    "url": "assets/js/34.3abdd4ec.js",
    "revision": "259c55ec6081760463d19b75d660bb4b"
  },
  {
    "url": "assets/js/35.19496546.js",
    "revision": "58533e7b9c8ee54848157bb6f2110808"
  },
  {
    "url": "assets/js/36.ad3d84d8.js",
    "revision": "c420c31b81e18809758e55d23ff0db30"
  },
  {
    "url": "assets/js/37.ec2de957.js",
    "revision": "1a4fb2dc277000646a86a525d6f3f269"
  },
  {
    "url": "assets/js/38.9cd68f1f.js",
    "revision": "27c2df2f0bf456f6ad931aacfc05a21b"
  },
  {
    "url": "assets/js/39.d83a6a78.js",
    "revision": "25f6a842e43bf51664f37b9fee614846"
  },
  {
    "url": "assets/js/4.57980df9.js",
    "revision": "ad383f77dcd05f8efe21975e9ef1cd39"
  },
  {
    "url": "assets/js/40.671b64a8.js",
    "revision": "b266ed49c6c00a9087f19372dbc3b808"
  },
  {
    "url": "assets/js/41.804779b8.js",
    "revision": "13087c500c5dce660b925ef43d9b50c0"
  },
  {
    "url": "assets/js/42.ad513aa4.js",
    "revision": "9959e349322d48ecab8ee104bade2968"
  },
  {
    "url": "assets/js/43.8c8db1b7.js",
    "revision": "60507d1a1863a7c539649edf2f2b2569"
  },
  {
    "url": "assets/js/44.6686cfc8.js",
    "revision": "beb2538a75296adadd0baa187f9343c5"
  },
  {
    "url": "assets/js/45.7c1c04c6.js",
    "revision": "d189c04094f0314d27f7ae706ccaace1"
  },
  {
    "url": "assets/js/46.efe7d364.js",
    "revision": "d4b162077649aab583a46160b31789b1"
  },
  {
    "url": "assets/js/47.32ea0ee4.js",
    "revision": "e51ac7725fc8e7e843468971d30a64c4"
  },
  {
    "url": "assets/js/48.d3964929.js",
    "revision": "6d5e017225a59d642ea3740bc0bc8bd3"
  },
  {
    "url": "assets/js/5.4d1d4890.js",
    "revision": "b322ce653ae975658ac0fa937c94ad38"
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
    "url": "assets/js/app.f46bb55c.js",
    "revision": "e7b2732b651bb492b55f98fac22e3f18"
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
    "revision": "3cd488025a30cde5e69f250d4ed5666a"
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
    "revision": "8b46528a2421055b98886dc637d15827"
  },
  {
    "url": "life/index.html",
    "revision": "3e3869ea1890b6d75b831ab15af2ca2f"
  },
  {
    "url": "life/意志力.html",
    "revision": "45c9706b90257dc051ddce777bdd89af"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "2a2163d97977d0211f144bd8eff0d54e"
  },
  {
    "url": "skills/Base64.html",
    "revision": "9bce035b4077bb3e52f54eb879537b63"
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
    "revision": "013a75354d40c78df0cccc76abc5ade0"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "46b2065bd8973efc979b609f7d8d0c1f"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "5f899e08dd86465a702f47172cc7f061"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "f6def51ef1be9da1e24f56c83ea7cb24"
  },
  {
    "url": "skills/Generator.html",
    "revision": "9a252d4fe4f55e1dd9221ab005cb6184"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "8337a6e9fb23de49c3a2774ac3253ae0"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "61fa2663a9cbdf9eed0ade82857c6ea2"
  },
  {
    "url": "skills/HTTP协议备忘录.html",
    "revision": "bce61bd2ef30124e5c7516492bb857ab"
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
    "url": "skills/images/four-disconnect.png",
    "revision": "0a652c11f235e5da8c2fdeab61cb873c"
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
    "revision": "56d906d7bb3225f722c4c7fbbfab9b84"
  },
  {
    "url": "skills/JS编译过程分析.html",
    "revision": "21d876bed325d65275a133aac73a7db2"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "c4cee6d8b24fd34bbebd14720922ab36"
  },
  {
    "url": "skills/Promise.html",
    "revision": "63d6c19be70756e17e46af33d5f37df2"
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
    "revision": "657683106b9d620ec84d0452a1d29051"
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
    "revision": "95b594dd63a2114b51b9c2c0d07b6643"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "3c2b6a81c85335a947d6dc2ada8bdcc4"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "d83e6d545bdee37b9540223b5d074055"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "891374d78fc64c60779ca54d54703874"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "05d2186902e496472ea811dc43648947"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "59f758fc58200490d38ff2c740b380a0"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "b26ca9d468eef3bed40b84cbaed3ae16"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "b5c48f096c7f0b0c715a39295a0010b2"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "39333e0eabccc0e267eb8e51f80939fb"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "c3df5641c84887294fff17b56093c2bf"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "299d1dbf9fd82a7b7c12ff8aa9b95219"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "d5b3fd2aad634cb33f2fd9c6fd6b8aaf"
  },
  {
    "url": "skills/浏览器界面更新流程.html",
    "revision": "ee3bfa15050ce31077431f530a52c978"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "d08a4965029015009a90173d9e4e3cd8"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "eec3ee29a1bea3a22ab1fc58e0eb1276"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "00f865acb659e3f19ab4492dada4bc52"
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
