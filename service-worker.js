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
    "revision": "80fe8eea86616af4f4e2058382262c27"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bf99cf74e56303fd982939bec1c87626"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "df87a878e482e1b13e5dd45ac85ff2a0"
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
    "url": "assets/js/22.8dc790cc.js",
    "revision": "31180be5d98b3eacf9089117a7402d96"
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
    "url": "assets/js/27.6e91dc20.js",
    "revision": "1b3fe76a8aa9a6ebe180fcb201cd585b"
  },
  {
    "url": "assets/js/28.cd18ae92.js",
    "revision": "9787837419814e598b088923b96d7476"
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
    "url": "assets/js/30.672abaa6.js",
    "revision": "a9e33feba08d423edc55ddedcd61d7d2"
  },
  {
    "url": "assets/js/31.ca647d45.js",
    "revision": "f1ae02b1171d082a13756c30fa6ef24f"
  },
  {
    "url": "assets/js/32.8b8b9ea5.js",
    "revision": "c2a2e7cc99bdd0cbef200e1834b3eb14"
  },
  {
    "url": "assets/js/33.d54a5ff0.js",
    "revision": "045283b9e35edb8403357298239cab61"
  },
  {
    "url": "assets/js/34.db49411c.js",
    "revision": "eedc3a9bc7724fdb22e0ce32cc754fd9"
  },
  {
    "url": "assets/js/35.120879b0.js",
    "revision": "b4b405b597004464cfe035c15bbd2c12"
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
    "url": "assets/js/app.d0ecdc5d.js",
    "revision": "5e0c932445ffcb06a8495008c5cc0cf2"
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
    "revision": "bad2e101a3c6e6d59ea9802574a2fec8"
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
    "revision": "523cfece8ebf23802b0dba2ca184bdab"
  },
  {
    "url": "life/index.html",
    "revision": "3e4628e1e571afeb358e5488de037aae"
  },
  {
    "url": "life/意志力.html",
    "revision": "866ff96fb01502cf766b47088878737f"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "556a3fee2670533416b98d24a9583f34"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "dea9a19b8246ab5656e3af9f043cfd5b"
  },
  {
    "url": "skills/Base64.html",
    "revision": "0220f1b54a5aba1aadf13f97148d494d"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Crontab.html",
    "revision": "a80dcb94ad0e217d7f2d33b24bca622b"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "225f69e0a8fed8f1cc5a8e6e151cf43d"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "889e5d5eebf81231e057e95a805704fb"
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
    "revision": "fa3756610757923e673159599b87d66c"
  },
  {
    "url": "skills/event-loop.png",
    "revision": "aee75ef0e29b6a883aaf06270f57c5f6"
  },
  {
    "url": "skills/Generator.html",
    "revision": "d6cb64f21867e47cd3f239fa5821ea04"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "90b2a361627aeeeaa82ef1e356cc324b"
  },
  {
    "url": "skills/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "5f7d7745cb6b29bc8ce8665a0b84bf1a"
  },
  {
    "url": "skills/image-conclude.png",
    "revision": "73cd469e1246823aedc3eb928a8665b6"
  },
  {
    "url": "skills/index.html",
    "revision": "01fced94c6506cc5e6e666cb639153b9"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "6fd58cfd5e858a93f3c969f07a9e6bae"
  },
  {
    "url": "skills/Promise.html",
    "revision": "6bfb7e795351135f9ba95759d4342ecc"
  },
  {
    "url": "skills/regex-place.png",
    "revision": "c874fa1afbb3be891a2b338def4e1000"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "d7c0a095258d8ebdbd5f149fe53af2ab"
  },
  {
    "url": "skills/Set & Map.html",
    "revision": "d8cf360dde3f7b5d06c8312b8c2dc195"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "9a02fa173728743ad5c7b34df888e1a3"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "6a550dd30132ad363941c034b8b41c5b"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "77c1c497c97e4281ac5c25eb368b3ae9"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "568722121f521162bf9efbcbb628461b"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "ce7c66f6a4bf64c940fb6fbba60f2a1b"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "eaf5a8b19e3bbff04801e1397be59801"
  },
  {
    "url": "skills/发布订阅 & 观察者模式.html",
    "revision": "20ba62749e9b5e43ae1a026eed2851f4"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "9b1e04a2fe7d6879ec9db9f2887c2cc0"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "4dda14239d53a5872dc661bcf9284b86"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "831f78f647a0ed2fa2d53657990e1baf"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "091b1c7682df85e0ff6d2e89ffaf7236"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "9f1a91f8854f17f9a9046d9a2f53ae7f"
  },
  {
    "url": "skills/简易依赖注入实现.html",
    "revision": "dd8f53b15c3c8926896b2f2d6644f600"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "d764323deaf54d1a4d4797b6c2c19048"
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
