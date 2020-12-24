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
    "revision": "0e2051c1ab72294872224d2c463e6df6"
  },
  {
    "url": "algorithm/index.html",
    "revision": "b6a2dc0532d13945bf6c8c77f694ef5a"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "ac0e8322a12b8ccff2ecc6cec11fa562"
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
    "url": "assets/js/10.16a2544e.js",
    "revision": "324c7fcf4d1fd0860d87d1910ee203cf"
  },
  {
    "url": "assets/js/11.9b49b2f0.js",
    "revision": "9a18a21a55702a66185638aa7b10e404"
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
    "url": "assets/js/20.2784d75c.js",
    "revision": "1ba38f9cebbed12428fc8cd9bb41c5db"
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
    "url": "assets/js/app.f9d8ede6.js",
    "revision": "c3af5e4b761c2ba4fa8eb7d2ba1df652"
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
    "revision": "f0788e75d1380d2c56262fe5330bc872"
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
    "revision": "8bcafeb7ceb05352aa644f7aee31d1f6"
  },
  {
    "url": "life/index.html",
    "revision": "61b20d1fba9732dc31cacded9d5281cd"
  },
  {
    "url": "life/意志力.html",
    "revision": "fcc58aa71db996945bb15f463de27bc0"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "4089e618b3c1e2daa00a2fc6d11f1964"
  },
  {
    "url": "skills/Base64.html",
    "revision": "56886bd9b488eb196b07eae51aae67f9"
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
    "revision": "904bbdded3d6e0b75f34045ff625ffa5"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "3c445441d0ce526613fab329587b5060"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "899f2fe4c1e2f85cee5ee85020da46ae"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "4742ca2fe2429e23785acbe6704ff711"
  },
  {
    "url": "skills/Generator.html",
    "revision": "a6c7d59e7c3d06238dda81055f8126e9"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "0da1d8eaf197a4f5c169aa837ede77e2"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "a09aac56a4b0c83e048747cf7f95e8b6"
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
    "revision": "5e9ce34205bbe74f25e66d8ed82be90a"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "87d199af6ef5120a757ada4384531bc7"
  },
  {
    "url": "skills/Promise.html",
    "revision": "dc01b36e7685d73de15c111c0f646d0e"
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
    "revision": "ec3a67cf62e4b4a134056fd4cdc92d8b"
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
    "revision": "8624dd224b0a0ae303c145960efa341d"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "43702f86f3c3e13cabdda62b5dc3dcc0"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "6ab2a662a2cb3e93cd79534fd69af281"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "6f6886e0a217a359f4019d7991020f28"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "82cdf684eb07d3a8a95a0d5564c3639b"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "47c81df5aaf88911c9b0aa159863ee3c"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "60447c5280a6fba48485ad47e89b40b7"
  },
  {
    "url": "skills/发布订阅 & 观察者模式.html",
    "revision": "ddaae44b2392ab9f3fb25144cf9b1c0f"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "0bb05ea78b0fa17d8d718374702f1edd"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "700ff32450a6be386ddcda8eae70821d"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "fa8389ffcbd56a94ec26106d29663f03"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "881fa04d66d5d93c0e41242d4255ba6c"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "234673720bb7bee7b4ff65190dc0038b"
  },
  {
    "url": "skills/简易依赖注入实现.html",
    "revision": "e678d43af5c36efd9cd69ca48b1b7a4e"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "e5fae4a0e0c5eeecc8757a2f5eef288b"
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
