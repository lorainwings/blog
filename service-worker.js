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
    "revision": "76bed19431a3abedd58fb405b105133c"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bc31c2fb5eac0dde4237118470d84905"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "efe103e7060a3da0b07d13386ec68971"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "368cec5236d14fead15faa88c5d46e62"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "114a3a1544a49d535e1677cde37947a7"
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
    "url": "assets/js/36.cd999bec.js",
    "revision": "16225474a7c97b4a5fb2cbc257781904"
  },
  {
    "url": "assets/js/37.3d9a9f24.js",
    "revision": "0c25d79fccfef68576e70fdd3ce71e12"
  },
  {
    "url": "assets/js/38.94127efc.js",
    "revision": "98fbd430791fdca0378abea205099802"
  },
  {
    "url": "assets/js/39.8e1d7dd0.js",
    "revision": "edcac92e89053ba86cab0ec09d97e420"
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
    "url": "assets/js/41.5a357d56.js",
    "revision": "73255b4dd3d9c7ca9b4859004a9af87f"
  },
  {
    "url": "assets/js/42.8f0562ae.js",
    "revision": "b5b68eaf66b54cb1d7d5be9692618a16"
  },
  {
    "url": "assets/js/43.66a5e4b2.js",
    "revision": "a648971b1b16ed8dd2b70d85a7fd460d"
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
    "url": "assets/js/48.5ae831d1.js",
    "revision": "66b70c87a115ede57a48fec748a76bd2"
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
    "url": "assets/js/app.a1eb79ea.js",
    "revision": "4a9089ccf84ff9795522ab3406d48863"
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
    "revision": "be42aed0b5a49ac89ac12122ed802081"
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
    "revision": "9283289c02d866c80cf9000681c5ec2a"
  },
  {
    "url": "life/index.html",
    "revision": "28126ec70002dcfd0b2b0ee79e518c7f"
  },
  {
    "url": "life/意志力.html",
    "revision": "b13adb71b7cafce4ca332a6958b2c5f5"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "04d9abdc7f3d330050ae3d1d7af1c324"
  },
  {
    "url": "skills/Base64.html",
    "revision": "54fbd2a1126a279c103c2e42b01f58b5"
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
    "revision": "a35fa6387a2ac728db2b0797e7ee4a75"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "6364c2288f0e3f4ed9ba7a2fc3d42e00"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "d64e77e7b1390b421a5106f2c21d9684"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "8de434dc6562ad005cd53284f1ae2f1c"
  },
  {
    "url": "skills/Generator.html",
    "revision": "500d2ad4a9e647c865fe9add8b420e85"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "50ba5ce692033cf80106722aefcf99aa"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "70e9d633c39d18170c6485b6f5c87d4c"
  },
  {
    "url": "skills/HTTP协议备忘录.html",
    "revision": "3f92695a7ede6723eae049dacf3e6387"
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
    "revision": "cb9ce26cb0306136f922c4172f148955"
  },
  {
    "url": "skills/JS编译过程分析.html",
    "revision": "665b39ac41dea0e2ca76568fce4b7216"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "3806b627f946788c95e713d92b013e69"
  },
  {
    "url": "skills/Promise.html",
    "revision": "378836fca04c68711f51483244c9f8a4"
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
    "revision": "2e503969a1745692495d1a93e7395614"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "46efb3e9ee9a75cc8b94868fb2f97c10"
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
    "revision": "c41da29e4e203e93c02e94067158326d"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "41194d6066bc49546f324d594a363663"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "db852daea358a9c127567c1f8bcb4426"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "447f43ed387e4745d6d98758a0f054dd"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "98177f79d0ea41f386e254e995f6e518"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "78215c84e9c3d2b1c83a12451621c927"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "cffac814d8fbe750f6ea986f8ab6bd52"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "a00dce2a8d445e5a8f07243aa487dcaa"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "70328818bc0e60cc19718a47a409ed5d"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "5f915da9c5ae2544ad8ee3448f02fac5"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "6ac9208cbdc043b5c3efdf44ad9712ea"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "0650a2dc31a74def0a9e495a62e3eb89"
  },
  {
    "url": "skills/浏览器界面更新流程.html",
    "revision": "3db6187b3c63e53922cb53cbc604031e"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "aaa6a3a9cb21a16e693fa6b085969dfb"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "01980d57fe030e5c631b2923485b2aba"
  },
  {
    "url": "skills/自我介绍.html",
    "revision": "7e212049442cc375c880b0024c996878"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "4db9e2b39f6b4fb9c67df1ff5659a061"
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
