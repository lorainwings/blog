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
    "revision": "9c17956b3e9661cd2cd9298dd4490107"
  },
  {
    "url": "algorithm/index.html",
    "revision": "2765a9c14f32786e0ca3d19fb0a38984"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "030b612e9a339cccdde0efa0e2ae6810"
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
    "url": "assets/js/10.96eb2894.js",
    "revision": "74d6a8678bdadec244575da3b0d2efa1"
  },
  {
    "url": "assets/js/11.c906c226.js",
    "revision": "fef9c11a0849ea39e785df1deabe7efe"
  },
  {
    "url": "assets/js/12.d708ee73.js",
    "revision": "546cc7bef1184159167c08b76f24aa8b"
  },
  {
    "url": "assets/js/13.54441bd2.js",
    "revision": "d7b45f5ac2c715a53ad19a000ec79b7b"
  },
  {
    "url": "assets/js/14.a8c11b9e.js",
    "revision": "2b6823a29462ff1c3282218f211aa872"
  },
  {
    "url": "assets/js/15.2898e42a.js",
    "revision": "3284aacef3a35b3bcf3e0e340ecc8cef"
  },
  {
    "url": "assets/js/16.42b38797.js",
    "revision": "55ff78ac590f6ef3b5236a5c91c697b0"
  },
  {
    "url": "assets/js/17.b3e61337.js",
    "revision": "77fdd9083c9a1ef9c6435485acbfc8bd"
  },
  {
    "url": "assets/js/18.370687c1.js",
    "revision": "b2c11292f0307ca8b9c61c9327bf4f90"
  },
  {
    "url": "assets/js/19.8d8c628d.js",
    "revision": "786860a066440232fdab20f4e58dc2dc"
  },
  {
    "url": "assets/js/20.42f17c2c.js",
    "revision": "58defbc765c3282c57d5fe3db0d27639"
  },
  {
    "url": "assets/js/21.bd9385ec.js",
    "revision": "6c73c0e012b0a3986a3eb07b1fe467d3"
  },
  {
    "url": "assets/js/22.65b849c9.js",
    "revision": "31837648b4cb7701f6e8b26d7002b074"
  },
  {
    "url": "assets/js/23.6cb81cbf.js",
    "revision": "90960fd0c39a04e945a951cc4203d6bf"
  },
  {
    "url": "assets/js/24.e1d9a4ea.js",
    "revision": "c6be3298d6386a91b2cf53bc2df72f6a"
  },
  {
    "url": "assets/js/25.8c84e522.js",
    "revision": "111664321ff2dc02872c4d4b060ee025"
  },
  {
    "url": "assets/js/26.f1adb7cf.js",
    "revision": "6f31e39383717da4af664f505533dc48"
  },
  {
    "url": "assets/js/27.53f085d6.js",
    "revision": "51b262b286085161245aeea388f60b6a"
  },
  {
    "url": "assets/js/28.96d28141.js",
    "revision": "6750d750b8eb449a157b522ff42f5d5e"
  },
  {
    "url": "assets/js/29.3bac3e84.js",
    "revision": "38697b688de75e914727d08c6d96a31e"
  },
  {
    "url": "assets/js/3.4e1e6e12.js",
    "revision": "38726491e6098a1e226a8e4cb1792cb9"
  },
  {
    "url": "assets/js/30.ef2b82fd.js",
    "revision": "6402476f35134ab65195e2247fc98721"
  },
  {
    "url": "assets/js/31.2592aff7.js",
    "revision": "531b1b25f747b484569d2428feb6f151"
  },
  {
    "url": "assets/js/32.42dad573.js",
    "revision": "cf0137a845b0c96f5ae1bbf7efe851c9"
  },
  {
    "url": "assets/js/33.7b1a24ff.js",
    "revision": "6e4315d027326100dbbcb200f215e992"
  },
  {
    "url": "assets/js/34.74abf37c.js",
    "revision": "240925f2d99af3fe2eb9bb24c989fd5a"
  },
  {
    "url": "assets/js/35.43c600f9.js",
    "revision": "e76bbdf6e1f154ec4e18cba763dcbcdc"
  },
  {
    "url": "assets/js/36.a8f38f48.js",
    "revision": "967d5bdc7096c5c78db42220c4eaf724"
  },
  {
    "url": "assets/js/37.392007fc.js",
    "revision": "b435c5457da5ed389451c717a5e6e065"
  },
  {
    "url": "assets/js/38.58c33a33.js",
    "revision": "cd939cb657205472395f3ab914f57b84"
  },
  {
    "url": "assets/js/39.52f720f0.js",
    "revision": "eac585cf8d96a339d446a66755e33946"
  },
  {
    "url": "assets/js/4.57980df9.js",
    "revision": "ad383f77dcd05f8efe21975e9ef1cd39"
  },
  {
    "url": "assets/js/40.91f5ee89.js",
    "revision": "4676b09a5371cea428b844263de1b466"
  },
  {
    "url": "assets/js/41.4c4333a1.js",
    "revision": "383870423400d0e3b96bdd9415b5986d"
  },
  {
    "url": "assets/js/42.8c2c538f.js",
    "revision": "3c74d1643c37cbe10a68cff8dc8d1630"
  },
  {
    "url": "assets/js/5.3890334e.js",
    "revision": "ffaba5d943a533b5868abde63c51b8ed"
  },
  {
    "url": "assets/js/6.5cf5829a.js",
    "revision": "f686a2ded38a6e42abe4c81f818671d9"
  },
  {
    "url": "assets/js/7.d5bd445c.js",
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
    "url": "assets/js/app.c6c99975.js",
    "revision": "ce5f4e6c570597c241c4cb089272fcb5"
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
    "revision": "f23bf25e4bcb7c398cf4c8b5a78e9173"
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
    "revision": "85e0dfe6bdc1fb54cb233594b446f36c"
  },
  {
    "url": "life/index.html",
    "revision": "8601dfa172c09c7100b45e1e61fc04cf"
  },
  {
    "url": "life/意志力.html",
    "revision": "50802740152994722f2616a76a74c83b"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "556a3fee2670533416b98d24a9583f34"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "907098f2f59182adcfca8ea9cdeb6a58"
  },
  {
    "url": "skills/Base64.html",
    "revision": "f45bbe2d81813c8db95d2028da9eb7ff"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Crontab.html",
    "revision": "7c9fa662da56fa8c3cfbb55c1361565a"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "6d6f7b2a62eb87e3bff313470220247c"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "8e2dc2a10a3509320dede8955e131265"
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
    "revision": "3ba66fe77945c794017ae43f1ebccbba"
  },
  {
    "url": "skills/event-loop.png",
    "revision": "aee75ef0e29b6a883aaf06270f57c5f6"
  },
  {
    "url": "skills/Generator.html",
    "revision": "d99bc07e90c3a7a9ee0ec5871d459100"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "9aa366da9cc6907e3de41136c69219ab"
  },
  {
    "url": "skills/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "747fcb0ba98506a078b46d954efcdc23"
  },
  {
    "url": "skills/image-conclude.png",
    "revision": "73cd469e1246823aedc3eb928a8665b6"
  },
  {
    "url": "skills/index.html",
    "revision": "120eb6ccb8e9f3d5c44f67369b336eaa"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "351485288a45c81e1748b822ae0929a2"
  },
  {
    "url": "skills/Promise.html",
    "revision": "1c0a031a904685ffca0bbee67182684e"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "edab60a55898c85c2e35a5af48dcac59"
  },
  {
    "url": "skills/Set & Map.html",
    "revision": "71292d469141a58e164139ea1e25e522"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "98d2909cc02db90ed62024efcd7057cd"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "f5c811ecd2461d7fe619e6973c5995d8"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "b7eccb5b0f60aad56b4e651041816ce8"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "c2a6fed768a64992ba54aea3814137e1"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "f7c546e6148a55b5a6e95616abded919"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "15e7315035881cdef9ac5f76e165004b"
  },
  {
    "url": "skills/发布订阅 & 观察者模式.html",
    "revision": "ed3191719a79ce9ec904da2637722e74"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "179d36958a51cbfeab159934da9491e3"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "b8f8df37c7857ad0ccdd0022d45e5965"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "1671b0ade2abbda73df229d6f4a7a7bf"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "a6e07ed154e6eb94ff14c85846116bc8"
  },
  {
    "url": "skills/简易依赖注入实现.html",
    "revision": "6c07623eaac3c4bb33fa68b5cb3e35a3"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "5d71842f258bf24d4f55bf7ec7b0266a"
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
