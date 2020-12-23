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
    "revision": "6593f9ec7ebff6efa3a216ea116dd499"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bb6c7e956f1a12d05e53f40bbaacefd4"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "1dc364725ce70edbcefb2aba58062888"
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
    "url": "assets/js/24.269b5d98.js",
    "revision": "96f39c5f21d00eb462a20b1405f763ca"
  },
  {
    "url": "assets/js/25.8c84e522.js",
    "revision": "111664321ff2dc02872c4d4b060ee025"
  },
  {
    "url": "assets/js/26.2ff485a5.js",
    "revision": "7fab7766764c1995dfe31803316545ca"
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
    "url": "assets/js/3.8c44ca0e.js",
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
    "url": "assets/js/39.5eb25eb6.js",
    "revision": "df6b2eba524614c31739bc855249e53d"
  },
  {
    "url": "assets/js/4.57980df9.js",
    "revision": "ad383f77dcd05f8efe21975e9ef1cd39"
  },
  {
    "url": "assets/js/40.b2cf738e.js",
    "revision": "c545bb7821536324208ca953ee1a52db"
  },
  {
    "url": "assets/js/41.3d966b2d.js",
    "revision": "bf6ba4063a90da3794c77271eea5e1c2"
  },
  {
    "url": "assets/js/42.05a99712.js",
    "revision": "43320077a0840bc2ce6caf6a2341fc14"
  },
  {
    "url": "assets/js/43.9a1fdc6b.js",
    "revision": "d3524d107f868d90780096f0835aa541"
  },
  {
    "url": "assets/js/5.4a149a83.js",
    "revision": "b95a5ba943a13e2ff1bd9dc0de769ce1"
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
    "url": "assets/js/app.f7ccd28f.js",
    "revision": "8f0dcec05d8046e682bda34c54bf0188"
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
    "revision": "725b3ce54dd72e62a948a510b05e13c3"
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
    "revision": "8e8207ea28cba6ac1b722ba50138727a"
  },
  {
    "url": "life/index.html",
    "revision": "afb9cc14a176d611e42380f98529c34a"
  },
  {
    "url": "life/意志力.html",
    "revision": "64dd4a37ba352e66515fafc7c719d5c3"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "556a3fee2670533416b98d24a9583f34"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "3331820a4bea9307f29de6fd880cac16"
  },
  {
    "url": "skills/Base64.html",
    "revision": "610f9b7ad21cae4e9ada845c751a75b9"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Crontab.html",
    "revision": "51669d621c1f22641aa8091ae9b1c4f4"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "15b0ce4d69ddfe994bc802e658864d26"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "bc061f94b87e5b9f0f1aefbfc9d6322b"
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
    "revision": "1836d362ae39729770485e61c0298822"
  },
  {
    "url": "skills/event-loop.png",
    "revision": "aee75ef0e29b6a883aaf06270f57c5f6"
  },
  {
    "url": "skills/Generator.html",
    "revision": "dfadae039fb39f68cd6b9cea46ca964f"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "8652e220ad81855992b25adb6abd4567"
  },
  {
    "url": "skills/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "8ecf2b4c1541ff93f12ec9838d8e3876"
  },
  {
    "url": "skills/image-conclude.png",
    "revision": "73cd469e1246823aedc3eb928a8665b6"
  },
  {
    "url": "skills/index.html",
    "revision": "78105951c237b40136700a6181b7e1a5"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "cb323633cfe354f74f2d2603aa053915"
  },
  {
    "url": "skills/Promise.html",
    "revision": "1070bb0dbfa7c4601c3bc1941dc934ea"
  },
  {
    "url": "skills/regex-place.png",
    "revision": "c874fa1afbb3be891a2b338def4e1000"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "4cb4cc6b9a7d921eb5b6cd29d490862d"
  },
  {
    "url": "skills/Set & Map.html",
    "revision": "d20ae34ac2fb09e7bab0852edb065282"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "32ed0689eb722c51689d398517c7354e"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "a92cf2c79c58c8716fa6c4589af6c713"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "660a3c59e402828e8bb3281f0e3244ad"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "fa508e6281e208ca2f095686a2e7eec9"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "26ecaa75d2ddbefb748f7b61e7984c19"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "bd680590eab6bbaafd3eb889854231bf"
  },
  {
    "url": "skills/发布订阅 & 观察者模式.html",
    "revision": "22ec5d62152dab011726199c95d908ea"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "9ae4de7b7f836b341c4359745e436941"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "52fd7c1f7925cde587ca4ecf5f038038"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "ef16079f70201ddf34b0627cfd4dcaab"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "39fa2f720891bb216a5693612981704f"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "cdce1cdfd9eb9a9508adb82c58a59268"
  },
  {
    "url": "skills/简易依赖注入实现.html",
    "revision": "3ab14660c8fcdc374f9d91cb854cbf85"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "d4533be507c8f08bf6fa97dcd614136c"
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
