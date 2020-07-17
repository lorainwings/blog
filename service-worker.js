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
    "revision": "ab703b42b4b311e2491cd219e0eddd19"
  },
  {
    "url": "algorithm/index.html",
    "revision": "a73a42c125fef83cea24037d20a77753"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "b257449e2ae8bfd3ec928a0fbe2338e6"
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
    "url": "assets/js/10.15efb885.js",
    "revision": "d3a2830216785d1b78d822f05729b007"
  },
  {
    "url": "assets/js/11.b69736a7.js",
    "revision": "aa342aa39bec1b3cb1c39ef1703d485d"
  },
  {
    "url": "assets/js/12.1e4a5a90.js",
    "revision": "5aa98944335b4c2ed5dbfe8c64514153"
  },
  {
    "url": "assets/js/13.5028ca05.js",
    "revision": "ce5ab525570d22d39942ae32041c3de7"
  },
  {
    "url": "assets/js/14.ed5d061a.js",
    "revision": "8c67ad4a784c48f67c0d830cb761dcb3"
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
    "url": "assets/js/23.db3c2d0c.js",
    "revision": "a31898ffb157ea85685a4de29dff6ee3"
  },
  {
    "url": "assets/js/24.5ba591b0.js",
    "revision": "dd8a03ad911f73247a042cf7d1e744ea"
  },
  {
    "url": "assets/js/25.a1aa5fe0.js",
    "revision": "2a930be9bb3b4ee5511dccd380eb52b6"
  },
  {
    "url": "assets/js/26.0ccf51ed.js",
    "revision": "688b2cfb495424a76f90fa506d332885"
  },
  {
    "url": "assets/js/27.1270bbeb.js",
    "revision": "878ac38877a5932c1010590431a2ff6f"
  },
  {
    "url": "assets/js/28.52f2ae4c.js",
    "revision": "badc67e675aeb49ae5cd1b081f858e02"
  },
  {
    "url": "assets/js/29.b85e431e.js",
    "revision": "853bdda7ae39f6a896fdee6c9411cca5"
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
    "url": "assets/js/app.b45d52a8.js",
    "revision": "b43397e229fc4e2b254340129759205a"
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
    "revision": "2a0aee7a129074164550b633916c4b5a"
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
    "revision": "4a40a13f460fa7f85bf7f52231b215ae"
  },
  {
    "url": "life/index.html",
    "revision": "bbee6bf4a4fb4b1315458efef1df5968"
  },
  {
    "url": "life/意志力.html",
    "revision": "ba351fa5af1ec26c7b0c9ef54be756e6"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "556a3fee2670533416b98d24a9583f34"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "861e545baf7475e65d136f132439c0b5"
  },
  {
    "url": "skills/Base64.html",
    "revision": "c44511ab1253a1ab6253950058402b65"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Crontab.html",
    "revision": "64c116ecd15ee1a330b6df05c32f62d0"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "c7cfe2b0aba560981ffec373a351a9b0"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "199c73c759561d3df47dd6ab0535adac"
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
    "revision": "23351e6c70a6c41c6cdaa17a1392fbef"
  },
  {
    "url": "skills/event-loop.png",
    "revision": "aee75ef0e29b6a883aaf06270f57c5f6"
  },
  {
    "url": "skills/Generator.html",
    "revision": "651ea2b48a2c70e5de186e87e4dbe505"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "a44564e3c57ac022b139d9973e343651"
  },
  {
    "url": "skills/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "b21a74a51668b8787ba0c7aee5c8c3c8"
  },
  {
    "url": "skills/image-conclude.png",
    "revision": "73cd469e1246823aedc3eb928a8665b6"
  },
  {
    "url": "skills/index.html",
    "revision": "ea25dbab5318e561a231e8447b930f16"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "2d9f660b36ea3aee429868039ce8d749"
  },
  {
    "url": "skills/Promise.html",
    "revision": "449b594f52a6b6ae7827a2f5fd2c7a73"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "fadab0d23080b2125f1c0f5bb474716a"
  },
  {
    "url": "skills/Set & Map.html",
    "revision": "8bc1755ff6e53120eb0f10c45f0dd49a"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "2972ccd71585eb8302501e72294a1c73"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "b91ca5c5a19ce9964c136766c881d127"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "62b2cf44cf64fe5922576627ca71af30"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "6d09de4bf2a0876de73db804f31fec25"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "c18beb6a2ce4537cc7f335dca2b7ad53"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "6eac429179038204dba2f94ee1d3dcc0"
  },
  {
    "url": "skills/发布订阅 & 观察者模式.html",
    "revision": "69b81ad9c65bf8e6f757acd634314969"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "2293e07d9420b2c5901913a527a7ce83"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "a002629101a8d7ca174840159d1b2c95"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "d742d2260fe11b9c3093c25a7327ddc9"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "dfb8a3828d3362e5ac7d8dc32b97f43a"
  },
  {
    "url": "skills/简易依赖注入实现.html",
    "revision": "75f44e1ca3e675bcafc876828615e176"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "c415483fdfb363e23f6ec20e9fe1d061"
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
