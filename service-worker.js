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
    "revision": "f4d2a331f4a5fc9f6fc01b7a4b1f26a7"
  },
  {
    "url": "algorithm/index.html",
    "revision": "10d6ee8ec163577e2ff765ad27b235d9"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "355eeee901395f862ad1551797a1ae17"
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
    "url": "assets/js/11.6d68c6b9.js",
    "revision": "ef29f140715998f67696139157442713"
  },
  {
    "url": "assets/js/12.e5c4df72.js",
    "revision": "4a44e6c48e006001ebd67ea391945a16"
  },
  {
    "url": "assets/js/13.f33101e6.js",
    "revision": "267c4f405e13ab0a8c619965eb5cfb4f"
  },
  {
    "url": "assets/js/14.813b287f.js",
    "revision": "5b96dfbf0322cce3b0b924cd01b6a29a"
  },
  {
    "url": "assets/js/15.04d4fb03.js",
    "revision": "82469b6e78651efc2bdca5385b1bdc99"
  },
  {
    "url": "assets/js/16.29cb552d.js",
    "revision": "385c32d65aa6a3ec645446d5ca2b233d"
  },
  {
    "url": "assets/js/17.5565201d.js",
    "revision": "924ec43a5eac0e1b691b13a32706b353"
  },
  {
    "url": "assets/js/18.6704b648.js",
    "revision": "f18c99bbc31538f41de56ed72a113065"
  },
  {
    "url": "assets/js/19.ec985dea.js",
    "revision": "4135bd08e722ea4008c6321806a578fc"
  },
  {
    "url": "assets/js/20.84540552.js",
    "revision": "89251ea148d806b6e735311791a47b33"
  },
  {
    "url": "assets/js/21.e45368f1.js",
    "revision": "0d01202079aa3ca0ae1472a90e1b2487"
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
    "url": "assets/js/app.d45dd650.js",
    "revision": "97d293404794334d589f5c2c81926e65"
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
    "revision": "597ecb196a96eb810d1bb14e1ef492c8"
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
    "revision": "f2c470f7c06de28247a4897423fceba4"
  },
  {
    "url": "life/index.html",
    "revision": "2a52536da6dcb2969421eb55efbc029b"
  },
  {
    "url": "life/意志力.html",
    "revision": "93dbad21d850300bf1a2ff29ea38b0c2"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "556a3fee2670533416b98d24a9583f34"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "db8848c55dd05477e59fd18c59018f94"
  },
  {
    "url": "skills/Base64.html",
    "revision": "366e7794e0964d6eaf361391a0dd5572"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Crontab.html",
    "revision": "f09a32c1c0c21f4f7c2373fdff8e968f"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "1229a9cda06e418af17ef803d054c785"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "5f15bd41a84e99a97ba3fc8911f8b915"
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
    "revision": "ee0d5feb2095691b3f45a7ee8625a7a7"
  },
  {
    "url": "skills/event-loop.png",
    "revision": "aee75ef0e29b6a883aaf06270f57c5f6"
  },
  {
    "url": "skills/Generator.html",
    "revision": "409f73378433344f7963418a7179d007"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "dce57ec009049e9ddc4ede9042afc7b6"
  },
  {
    "url": "skills/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "810d0667f60e2e3c4441a01fa600ebb4"
  },
  {
    "url": "skills/image-conclude.png",
    "revision": "73cd469e1246823aedc3eb928a8665b6"
  },
  {
    "url": "skills/index.html",
    "revision": "70b5f88ac4e7a4dea51a415c50254442"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "c8ec6737397adbe6f2f36b464862eecd"
  },
  {
    "url": "skills/Promise.html",
    "revision": "101905422793e97014d762e09292fb7d"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "9e0544c03200d6814b0b81e89b1642f7"
  },
  {
    "url": "skills/Set & Map.html",
    "revision": "91f78962f375ffc38c18e02ce4f4ecb0"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "07e1fbb2927e06208c49143662a042ce"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "bb1ae4628152471b37de61160f3bd152"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "cde5e0bfdc4559ac765e70366fbe8de6"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "b4a61434bb6ec92303501d70bf5c0213"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "09b35cfc8a990bf7d6ee0ab4b1a14792"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "9f406aa903cf106431a904d9357ec725"
  },
  {
    "url": "skills/发布订阅 & 观察者模式.html",
    "revision": "31630191057900cc950862f9d0eb810c"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "c6bdacb89f692c1a5eccac7995c9fa12"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "57366f9aaee808eb01d3b6b0dd28a92a"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "ba3a14f697a336a91f680df061cdb7ee"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "c22d110e93c4722ef7faf7449fbf3373"
  },
  {
    "url": "skills/简易依赖注入实现.html",
    "revision": "8a2671380620fefb594cb1d2d71f9869"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "3c9d6cdb7012f547213c156700939fad"
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
