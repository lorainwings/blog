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
    "revision": "c3c2dbe931922cfec0bc7a2bb0e70a01"
  },
  {
    "url": "algorithm/index.html",
    "revision": "414a327f0d62905901705d16de1a1788"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "9902e759506d13a16627c820540abf1e"
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
    "url": "assets/js/29.ff9b2031.js",
    "revision": "c98d0fd99274d2d2bde7aa3c8eb298bd"
  },
  {
    "url": "assets/js/3.8c44ca0e.js",
    "revision": "38726491e6098a1e226a8e4cb1792cb9"
  },
  {
    "url": "assets/js/30.e650e950.js",
    "revision": "fae396e6fd88ba3f2f932c24d2241926"
  },
  {
    "url": "assets/js/31.975ec694.js",
    "revision": "b80f476a4955ba78657cda2e709446a6"
  },
  {
    "url": "assets/js/32.74d008d6.js",
    "revision": "8c53a30d9eb54e922fdeae77b6ecfe69"
  },
  {
    "url": "assets/js/33.a42395cc.js",
    "revision": "428f2b96c9326080a8e1171a8e867036"
  },
  {
    "url": "assets/js/34.ce461447.js",
    "revision": "a67e606b483fc3d744b284438f2a47f3"
  },
  {
    "url": "assets/js/35.e25a0ae4.js",
    "revision": "d74cc94cb378dd0f83251e221ae2c84f"
  },
  {
    "url": "assets/js/36.3ad34381.js",
    "revision": "bfefcdd7e93928d0a68fee39744f3ef1"
  },
  {
    "url": "assets/js/37.25b7717e.js",
    "revision": "38759e9821c99d8b76e02963b594a958"
  },
  {
    "url": "assets/js/38.4e9d37bf.js",
    "revision": "ad5f52102c79b54f771e26f11d793e1c"
  },
  {
    "url": "assets/js/39.be1e22c8.js",
    "revision": "b2af876eaa5b0f0360bc9ade5e13904c"
  },
  {
    "url": "assets/js/4.57980df9.js",
    "revision": "ad383f77dcd05f8efe21975e9ef1cd39"
  },
  {
    "url": "assets/js/40.ebb9c65f.js",
    "revision": "d7e119063442e9592c9918851494927e"
  },
  {
    "url": "assets/js/41.31ac9d23.js",
    "revision": "1561259dfdd1395bc81774b49db27f07"
  },
  {
    "url": "assets/js/42.09f726bf.js",
    "revision": "6bae79b817c94d9a0b6681d99bd1288c"
  },
  {
    "url": "assets/js/43.c704b38a.js",
    "revision": "1cd9aef6a59a6a763fc7454daacd9ca9"
  },
  {
    "url": "assets/js/44.2be6cca1.js",
    "revision": "7d300cd135fc0c9fee4648b1b6a500b5"
  },
  {
    "url": "assets/js/5.3060fd99.js",
    "revision": "1261104922ff93ce9ad5d4029c1b3a9f"
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
    "url": "assets/js/app.2812493c.js",
    "revision": "8aa39031bde3ea0e53a070424426f01f"
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
    "revision": "1e6301ca5a51686cfb81e7480ac3f0d5"
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
    "revision": "23442b3df5dec88deab5b5a846e6870f"
  },
  {
    "url": "life/index.html",
    "revision": "96d265f7a184dbd9fdb6e5a70c9c65c3"
  },
  {
    "url": "life/意志力.html",
    "revision": "b7d6a4e673a58265702852f5b82651a3"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "1549831d9596357a61ae234b3bca8d62"
  },
  {
    "url": "skills/Base64.html",
    "revision": "1c649f8ffef937189b9f57f5f242c005"
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
    "revision": "9b73f874d6bb3c3e6d352aa3c6e6e2cf"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "aed1df1db53c9afe5b24e8aab8bc343d"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "b60fb5c3d51c9afb3ff252c77c89d541"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "831f05096f8b876a77688dbdccf1eb13"
  },
  {
    "url": "skills/Generator.html",
    "revision": "5c0e3ced931d4a4b825a5dde110069f7"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "84ec55e2506527c6bcad17c2b1e9a295"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "6b0134e78e782833eab6a4c10b0a06f9"
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
    "revision": "acda2325c8e33f32278bddf090725cad"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "251bd38b7553c12a32f7a0da87b11653"
  },
  {
    "url": "skills/Promise.html",
    "revision": "7b2e3b7a36ef332ba8d93dde0c4c69ff"
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
    "revision": "b037c5646bd163d5a1700c11dc73f9fa"
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
    "revision": "5da593154dbba983d822976d148f84f4"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "b5bd01c28a725e37c9b7ac97883e8909"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "32329affcbc5248841811051144d9384"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "d8e3161d13ed6eb3c5a0fbc5aabaafec"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "aa24d547f42df57e3746c09a0c18191e"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "04f8476ff1b8bb8ac0d8f61fb93df4d0"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "f8209e17bd89b732ef09c8eed9a8eebc"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "acefbe6ba9f8055ef9650daeb0eab177"
  },
  {
    "url": "skills/发布订阅 & 观察者模式.html",
    "revision": "bda3a3aa74a5e6fe98bbaf4cbafad663"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "dee6914c5d5dca5d212ea738dc968577"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "eef31a22f7d95048548b3d5e522a522c"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "2ad0a56c454f77531419a0b66b81fe71"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "cf23222dd896842264c50790114435b3"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "7ce6e211b0cfb5737f8f307dbf4fa06c"
  },
  {
    "url": "skills/简易依赖注入实现.html",
    "revision": "9c4250fb9f8fa3f78c20dbec34921b53"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "63207394087e60a0c405965192ae1498"
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
