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
    "revision": "64f06eb000d11e016534e0c0f6c408d4"
  },
  {
    "url": "algorithm/index.html",
    "revision": "3f612f88122955f784e5fcb521852992"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "db53b2164c29be780cd2962cc86488d5"
  },
  {
    "url": "assets/css/0.styles.579a9854.css",
    "revision": "923c23b45abd17507dff3a76dc9bdd3c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.57550636.js",
    "revision": "40d3d28a7c6d8fba53fd8ac0fe7ebdb2"
  },
  {
    "url": "assets/js/11.bb55d292.js",
    "revision": "a3a04cd94955a144eed8301f89a63f6b"
  },
  {
    "url": "assets/js/12.1e4a5a90.js",
    "revision": "5aa98944335b4c2ed5dbfe8c64514153"
  },
  {
    "url": "assets/js/13.a0e2552d.js",
    "revision": "e62063b75f109281ec16b3d7188b614b"
  },
  {
    "url": "assets/js/14.db5c8151.js",
    "revision": "3244348f1a3bdefb4dcb0bb8cadbbff7"
  },
  {
    "url": "assets/js/15.a2f176cb.js",
    "revision": "36cdf6b42f8127dd348d16838f4267a0"
  },
  {
    "url": "assets/js/16.5298f88a.js",
    "revision": "13118261816f30877916570abf0caa08"
  },
  {
    "url": "assets/js/17.5f2beb7f.js",
    "revision": "f640d802405549059d5adcd05e1ec8b8"
  },
  {
    "url": "assets/js/18.e510d28d.js",
    "revision": "180a2d9ec83e096358675565b9df1332"
  },
  {
    "url": "assets/js/19.53886023.js",
    "revision": "526940d49d8596d6f709fa49bbcdadc7"
  },
  {
    "url": "assets/js/20.63c552fe.js",
    "revision": "758f63122e8ac9737c82544b23b32e0e"
  },
  {
    "url": "assets/js/21.67e51d39.js",
    "revision": "73a124d708a695b28e6eb8348bcdc852"
  },
  {
    "url": "assets/js/22.42eb15fc.js",
    "revision": "bf0b2fce857cef70c253066ae841b37f"
  },
  {
    "url": "assets/js/23.3a3358e3.js",
    "revision": "087ac2c3c175dacba3a44b225c77c506"
  },
  {
    "url": "assets/js/24.e9e2a625.js",
    "revision": "b2c239b5f4a27e28ab2d24990b187895"
  },
  {
    "url": "assets/js/25.096364ce.js",
    "revision": "953f298abe19bae2aea707b8e21c2181"
  },
  {
    "url": "assets/js/26.0ccf51ed.js",
    "revision": "688b2cfb495424a76f90fa506d332885"
  },
  {
    "url": "assets/js/27.054a8201.js",
    "revision": "ca869fc1b914b5a5dc45a0f40c5f491e"
  },
  {
    "url": "assets/js/28.f04b9341.js",
    "revision": "b3253d95d457a3892236976a70797994"
  },
  {
    "url": "assets/js/29.c8add927.js",
    "revision": "268ba36f9f4cd5f5992e869b8f42f6c5"
  },
  {
    "url": "assets/js/3.ab657a59.js",
    "revision": "6c5f02b5e0c86b875d8ad524872ceb2f"
  },
  {
    "url": "assets/js/30.1aef2e5e.js",
    "revision": "2da82d08fbe517d80487df6491f6be5a"
  },
  {
    "url": "assets/js/31.1abd6355.js",
    "revision": "e1c581da5618b73a6bfb313121af9f72"
  },
  {
    "url": "assets/js/32.03df97b0.js",
    "revision": "f5919320f07b5e48c4a55205967686de"
  },
  {
    "url": "assets/js/33.c00a706c.js",
    "revision": "8eb9f4ca0bc78a1c0c88e057950c740c"
  },
  {
    "url": "assets/js/34.2f847376.js",
    "revision": "48a5b0ee4bd595205f04b1b3168d481a"
  },
  {
    "url": "assets/js/35.63347724.js",
    "revision": "cee1651dda3843594382168b7c0040b7"
  },
  {
    "url": "assets/js/36.9fdc020c.js",
    "revision": "f21c2c42fbe24f869911a7abe5cc0a20"
  },
  {
    "url": "assets/js/37.3392c04b.js",
    "revision": "e62676bafea763c3b96c3a9feb76a1bc"
  },
  {
    "url": "assets/js/38.ade4c9de.js",
    "revision": "fea018370176bdc692af66aea3ae434f"
  },
  {
    "url": "assets/js/39.6aec4626.js",
    "revision": "8fe52c5a35483f489d0c51565a9f593b"
  },
  {
    "url": "assets/js/4.022282fe.js",
    "revision": "4ae160db17fff8fb68cc7fa3c9685335"
  },
  {
    "url": "assets/js/40.9c723d93.js",
    "revision": "ab016af1079377dd08aab332161a59d2"
  },
  {
    "url": "assets/js/5.904e5833.js",
    "revision": "5198da5cb262756a523367ed88e13724"
  },
  {
    "url": "assets/js/6.2426cfb9.js",
    "revision": "0502f4637e84f6963a41058c95b71d47"
  },
  {
    "url": "assets/js/7.7194594b.js",
    "revision": "d62235ded230f050214a14679f0e861d"
  },
  {
    "url": "assets/js/8.e15df7e7.js",
    "revision": "c8e5a29ae8bd88e5fa2a4b2925e5d04c"
  },
  {
    "url": "assets/js/9.3ff9262b.js",
    "revision": "1ecc67d944cc7416f80e9c1f7e355dcc"
  },
  {
    "url": "assets/js/app.fb786ebe.js",
    "revision": "d6cd39bd9965fb104efe87923af4bfb0"
  },
  {
    "url": "assets/js/vendors~docsearch.21b1897d.js",
    "revision": "b6e6ae7f82bd12784dcd8db25d3faf27"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "0eb1dbcecf2f10236d45991fcb4bad84"
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
    "revision": "38e229aa691f60e93ecdc82b99c4117f"
  },
  {
    "url": "life/index.html",
    "revision": "620834c77e1e4cdb49d87c3bf1d7da5a"
  },
  {
    "url": "life/意志力.html",
    "revision": "62641418f088ce8eb69e945fa43dfa56"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "556a3fee2670533416b98d24a9583f34"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "f157dc75df6e7cf269ba2235e021f581"
  },
  {
    "url": "skills/Base64.html",
    "revision": "b2bec604441335619a6b7e3c51f0598f"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Crontab.html",
    "revision": "4978b0cfe23f40394d53bf94be3f91ad"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "e3066935c247b1b4eca997d7047d6a6f"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "aec7b364df54319c000eb0c181d7d2a6"
  },
  {
    "url": "skills/event-loop-1.gif",
    "revision": "2d2f74f2d43ac5283f0328ba9288721b"
  },
  {
    "url": "skills/event-loop-2.jpg",
    "revision": "8213a271b7328eaa07252ded309d9e4c"
  },
  {
    "url": "skills/event-loop-3.jpg",
    "revision": "3872fc560971831a2fd24597d6b59313"
  },
  {
    "url": "skills/event-loop-4.jpg",
    "revision": "5a1bdc0ce131e37ab3d5ae7f14bb1ad4"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "b7506dc8690114d30f685c50029a4b46"
  },
  {
    "url": "skills/event-loop.png",
    "revision": "aee75ef0e29b6a883aaf06270f57c5f6"
  },
  {
    "url": "skills/Generator.html",
    "revision": "d41525af1957937e08cd909bdb9f7abd"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "b1d284f4550abda0b1de7c21843dcfce"
  },
  {
    "url": "skills/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "336e98fe4bc2c2d113a19c32cbdc18c0"
  },
  {
    "url": "skills/image-conclude.png",
    "revision": "73cd469e1246823aedc3eb928a8665b6"
  },
  {
    "url": "skills/index.html",
    "revision": "0900f27280438a3aa12cfd161429f223"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "f3c9fcd40487201527e566b4704552ca"
  },
  {
    "url": "skills/Promise.html",
    "revision": "9e4c99a246c656661e5e75968f177478"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "551b152f1bc4b359f716b9863f5795e9"
  },
  {
    "url": "skills/Set & Map.html",
    "revision": "862f69be228934f46c2145deb8efdcb1"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "d6f4819f0f90f554bbc16374d5993832"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "d8196aa529f6eb1e24b1238d701020f4"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "c8e66e2ec36965fecfc02b4aa9f26e7c"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "a7fad879fd2b97f8b41310795816a77e"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "cbc4d64515714fbe74aa567d6f1ffc76"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "fd740aec89a4934356b66aacd560b321"
  },
  {
    "url": "skills/发布订阅 & 观察者模式.html",
    "revision": "17d33743113b4485f1d9442aa8c90a0e"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "d14bbe4b113b80461fcfcb2859196d0c"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "c46ade2208299b9cd5332d057f922a1d"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "9d53969d7e52c0cf088b3348052f561d"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "0a39fda6849fdf652e75845e12dd7794"
  },
  {
    "url": "skills/简易依赖注入实现.html",
    "revision": "60ecb6a8caa9c726e10eb22eab512683"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "9d532c9bf866b37ffa31a3616dd2d458"
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
