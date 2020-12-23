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
    "revision": "b44dbe1c220de0af75b539b61b03d3bd"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f10a2c47cc1a6924d8bb6b0a6facd170"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "0affc099dd42fb9045b4f7d87edc9bb9"
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
    "url": "assets/js/15.8298e73d.js",
    "revision": "b281c8937a297481eae6be6d8f426bdc"
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
    "url": "assets/js/19.9b32c156.js",
    "revision": "29f087e6228d59646f31aae80a332579"
  },
  {
    "url": "assets/js/20.a3dc7830.js",
    "revision": "bde4d06eb19d349a19dab49d2d9a19ef"
  },
  {
    "url": "assets/js/21.bd9385ec.js",
    "revision": "6c73c0e012b0a3986a3eb07b1fe467d3"
  },
  {
    "url": "assets/js/22.11c4fce0.js",
    "revision": "da405eac67207322296d6e307a7829e6"
  },
  {
    "url": "assets/js/23.62a971ce.js",
    "revision": "5357a119ebbc4305f60ab9e803eb3226"
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
    "url": "assets/js/32.3f718fa5.js",
    "revision": "97d7a3a682dead549a08e4f147c733c0"
  },
  {
    "url": "assets/js/33.7b1a24ff.js",
    "revision": "6e4315d027326100dbbcb200f215e992"
  },
  {
    "url": "assets/js/34.c6d4664b.js",
    "revision": "de887485087d8d12b4a130538b455b29"
  },
  {
    "url": "assets/js/35.cd630b33.js",
    "revision": "7f842e46897867a7648d8021996a7b0f"
  },
  {
    "url": "assets/js/36.2d723d8a.js",
    "revision": "46b1494f1e0f1f51b9a2540fc3a0a2e6"
  },
  {
    "url": "assets/js/37.873f5da9.js",
    "revision": "a08d7fca974717b070a526c1d0707425"
  },
  {
    "url": "assets/js/38.58c33a33.js",
    "revision": "cd939cb657205472395f3ab914f57b84"
  },
  {
    "url": "assets/js/39.a24e211e.js",
    "revision": "40bb5058dc8a15788524fd638468a0b2"
  },
  {
    "url": "assets/js/4.57980df9.js",
    "revision": "ad383f77dcd05f8efe21975e9ef1cd39"
  },
  {
    "url": "assets/js/40.a1660685.js",
    "revision": "1300a2fa244bb68b77e46909b07b2f4a"
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
    "url": "assets/js/app.15ffdbb2.js",
    "revision": "0e9d1906ecd8d79e0204bef1a8a2ff93"
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
    "revision": "8b5c575a0f202e8aecba9c931dc7bd01"
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
    "revision": "2e6c2e236602bf8af47ade7870a732b4"
  },
  {
    "url": "life/index.html",
    "revision": "4e338c99e3f8796c5a14cd7fc87530e8"
  },
  {
    "url": "life/意志力.html",
    "revision": "e09c39816071f971bfc14c027e44e53a"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "14dda57b491616d1c0a2d59cd84d7e1e"
  },
  {
    "url": "skills/Base64.html",
    "revision": "eb13d74d460091ba7d1eba7400d387c4"
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
    "revision": "f604fd1bef4cc4a52a922e6e28c784aa"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "a97093a7986330daa8a22396db690a3d"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "acd5c4ae4928c86e58a8a697b6170177"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "870b3aab1cefa3d7a554a4cd00300400"
  },
  {
    "url": "skills/Generator.html",
    "revision": "d395efc9b1de7e3000ccc4d80de191d8"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "902b5edd17d919b6c4f4fdfca8690fda"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "8e5bb83b2b698e6c8d7d627186dad548"
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
    "revision": "6c7a5d6cd582764fdd3dfdc869ae3e22"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "0f60d839659d4321297f671eec0bafac"
  },
  {
    "url": "skills/Promise.html",
    "revision": "520ee78f087c9efa9ff034f376bafd88"
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
    "revision": "07b4a9ebb03a550dac4c9dfe4650033e"
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
    "revision": "12327a911b10de71803ecb5dd21efcce"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "ba177fc21de28a2e07c7fbb9937b1a41"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "da7c5e2dace38900b1d26fd114fa61c3"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "993ca0e55ae2925ca6072471c7920b16"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "607156e77cf034f108883ac02642d868"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "5cadab38387548a9b8c9e507ca8c6afc"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "c81ba306ac5fb605f0cac84be79ef7dd"
  },
  {
    "url": "skills/发布订阅 & 观察者模式.html",
    "revision": "2017a0e8d9bb9781a528433bfca83ce2"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "3a67c398941fe5fa6dee64585d932ef6"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "a6be897cb3b826060d5cd2da3c938397"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "8770857eba54bf787da194a4280f6911"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "7ffd1da50cf1c9e81d00c92703bb232a"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "2bfbac18fc592d7dd9dd34d408a22c5a"
  },
  {
    "url": "skills/简易依赖注入实现.html",
    "revision": "f4b50c4445016bbe477f5b2e73dd8073"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "ee01d2d5a7367a3ce532da6ae817d671"
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
