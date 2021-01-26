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
    "revision": "e179d9e15dc7f9a1a7485c508eb84e0d"
  },
  {
    "url": "algorithm/index.html",
    "revision": "5d2fa3bffc0c988a739a0fc4a5483a25"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "dfb481686ad3e5ae7f39672a1a3f56e3"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "bb352d341d39e7dff33e023fb92e0433"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "89da6a7e61df52a67fb86ef7d47e008c"
  },
  {
    "url": "assets/css/0.styles.87f2da67.css",
    "revision": "c5cfc421cf353e9bb8af4930dd8f88db"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b445396e.js",
    "revision": "9f5c22d96f78e2f012685b75cff62537"
  },
  {
    "url": "assets/js/11.680efef2.js",
    "revision": "66ee8fdef76ab9ed12d945888558ab55"
  },
  {
    "url": "assets/js/12.227c065e.js",
    "revision": "dddb8d39a20235586862bebef5aed884"
  },
  {
    "url": "assets/js/13.04df423c.js",
    "revision": "460130d6f098be9a282aaa8c2fa3707d"
  },
  {
    "url": "assets/js/14.87e47d7f.js",
    "revision": "eb215c8d1cb0efe84f11e947321c1d5f"
  },
  {
    "url": "assets/js/15.bb55af44.js",
    "revision": "5bf1072722eabd566e0812e834877a68"
  },
  {
    "url": "assets/js/16.273df532.js",
    "revision": "fc2e1edd154688cbf98f382c32981090"
  },
  {
    "url": "assets/js/17.22641bd4.js",
    "revision": "97b2e7622d96fe48b505f75fe521dd5e"
  },
  {
    "url": "assets/js/18.d7f06b61.js",
    "revision": "a0841c639962181d45a374a9d7cab6cd"
  },
  {
    "url": "assets/js/19.d94c3211.js",
    "revision": "1cbb1e383b33bcfc2d5ba2d6f03bfbc8"
  },
  {
    "url": "assets/js/20.112db5a6.js",
    "revision": "44ed8aa736fdca0c3ae2d592f572dfd7"
  },
  {
    "url": "assets/js/21.48bd611f.js",
    "revision": "c2a1986b1f3bce4f59dedbf53e89aeee"
  },
  {
    "url": "assets/js/22.b4e4e341.js",
    "revision": "f7dea39549025e2ca52eb295be3779b6"
  },
  {
    "url": "assets/js/23.9b239688.js",
    "revision": "2921b88eddd7923ba33b16e9ca67fac8"
  },
  {
    "url": "assets/js/24.88eac5ea.js",
    "revision": "3384c6f7e144f7e17eb12e1676bb3173"
  },
  {
    "url": "assets/js/25.7a26e38f.js",
    "revision": "f50305ba453b21b5e17b5475156bc4ec"
  },
  {
    "url": "assets/js/26.5a4f0661.js",
    "revision": "eb68c9ac5ab83873e7bf3bfba4099905"
  },
  {
    "url": "assets/js/27.94126154.js",
    "revision": "7e3691bda800067f2d3da49da24e50a7"
  },
  {
    "url": "assets/js/28.3884961f.js",
    "revision": "fe8381f78f5d1e9474e303aa5969d69a"
  },
  {
    "url": "assets/js/29.6ead81af.js",
    "revision": "2787947add18796f9297d01d7a98e1e7"
  },
  {
    "url": "assets/js/3.c52ee6d8.js",
    "revision": "25fcbfb327c95c3e17024e088ca3e3b8"
  },
  {
    "url": "assets/js/30.d8042d25.js",
    "revision": "bf6059c8f1101bffa15d5bf73b975ce7"
  },
  {
    "url": "assets/js/31.2bf738e1.js",
    "revision": "76b89c95d80a63da400142aabc7ac609"
  },
  {
    "url": "assets/js/32.240b436a.js",
    "revision": "ac4a60f56d144ed0b1ab3a1ce27b57cb"
  },
  {
    "url": "assets/js/33.17e08fd4.js",
    "revision": "3297b06dfa9b08799d239ac1160fd8df"
  },
  {
    "url": "assets/js/34.971f7016.js",
    "revision": "a6a9a7c75dab26ff01a0090f037b875f"
  },
  {
    "url": "assets/js/35.8732a71d.js",
    "revision": "aa367e06fb2c89dd2be3fa7490bc4db4"
  },
  {
    "url": "assets/js/36.2c25d5a0.js",
    "revision": "fd00f48e7a7faeb42fa04241546f138f"
  },
  {
    "url": "assets/js/37.ef32e50f.js",
    "revision": "1f66d13cd2b473c6774288433af7b73c"
  },
  {
    "url": "assets/js/38.6f75348f.js",
    "revision": "0973df4f6805454883c8f23f67488e93"
  },
  {
    "url": "assets/js/39.7463820e.js",
    "revision": "9cb58bd542e56c86869d601c64988cff"
  },
  {
    "url": "assets/js/4.58e1c0fb.js",
    "revision": "3637e99ae20366d945a949a25fc03e2f"
  },
  {
    "url": "assets/js/40.d3fc2186.js",
    "revision": "7a10b4fa300937266a39b75a87aa831c"
  },
  {
    "url": "assets/js/41.b9f766d1.js",
    "revision": "5480159103429b114e1e83afd36cfa16"
  },
  {
    "url": "assets/js/42.16a843a0.js",
    "revision": "6180b0ee04ade65175690f697951457d"
  },
  {
    "url": "assets/js/43.9f495238.js",
    "revision": "3dc7a462b2d34870b2763eac2ca1914e"
  },
  {
    "url": "assets/js/44.c94144ce.js",
    "revision": "4578b81245bb2d7098dd871d86ebf3ae"
  },
  {
    "url": "assets/js/45.c677b10f.js",
    "revision": "216035cae4f76455b9547ebda1695995"
  },
  {
    "url": "assets/js/5.2f107941.js",
    "revision": "0294a9adec11b248d15eaeb9066ca569"
  },
  {
    "url": "assets/js/6.59be5133.js",
    "revision": "f21d0ee2e9215736eb971adc41978273"
  },
  {
    "url": "assets/js/7.e4ed03b6.js",
    "revision": "3bc01bdc940409f762e664ec7c7b3ace"
  },
  {
    "url": "assets/js/8.eb981c50.js",
    "revision": "3bec7bde80657ff5984b61fa3fd875b4"
  },
  {
    "url": "assets/js/9.c058e0e0.js",
    "revision": "b636d441f9d4d61e35a6b5fbe492acf1"
  },
  {
    "url": "assets/js/app.f1018558.js",
    "revision": "1640b016490458e58bc4ad0ea6d157fd"
  },
  {
    "url": "assets/js/vendors~docsearch.cebdd0dd.js",
    "revision": "2856ee5d6045f90ace65e139131c0573"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "527fc6635b02c33d23fa39270843dd66"
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
    "revision": "7f30d9339f8e656d0b380f12f20caec2"
  },
  {
    "url": "life/index.html",
    "revision": "770ffb845f0a6a30df34c3cf224ff4b9"
  },
  {
    "url": "life/意志力.html",
    "revision": "28c1c0d86d06359dd87180a40fd5ff96"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "a3de966efc1608d2a6cc1454413f1402"
  },
  {
    "url": "skills/Base64.html",
    "revision": "01dee2e26762fd5680372079256a369d"
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
    "revision": "228a50a8a2331ffee57801c0baaffc8c"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "fcd0741eff7f39a4e69a792a0bb1a62d"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "2a7ab8410621b0b0516c492d28cddc90"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "2418714a836dbb098590be6b6df41d36"
  },
  {
    "url": "skills/Generator.html",
    "revision": "55de86088fd5f0215768c124946aa80a"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "bfd4513f00c340e73ea1efb422995d26"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "24ce3958e59ab8f3781c7135282ba417"
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
    "revision": "ee7c5b0af86d5d502fd257a340ecae86"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "0a3419c97f62ff10a372b1783e1fc275"
  },
  {
    "url": "skills/Promise.html",
    "revision": "625882c3ae97bc0991a5b26b065cf2f9"
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
    "revision": "ffbdbcf15140da0b7425eff080fdf734"
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
    "revision": "f9aba116c952c4807313d4b0f68275ae"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "40fc5b1cc5c3b053a31fb4234cbe11d0"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "08012e637c2fa4befd2689b569af8fe3"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "73cdcdd4a64cf5c23213829c6faed42e"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "604249902b29db15d87a13bf3832cab4"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "ad184d4a3aad5f35c9fc5f2f97f0ea40"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "e0ddc9cc4fb37f14e48721fc56bc88f3"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "967c5c94e98a227530d3aa209cc25fb7"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "a001c8adbc9653ec800c8b3ba5a97a38"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "9528969cb00e9cb4398c13c6acf339d7"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "cc16b00f88a575cf1ec2e969f018427e"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "84f2a4f4e2bbcf591640171c560ad556"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "a9c98c44bca1aaab10ca0ebe1dc72f4b"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "f864a815250fff3739c7a9f1b505d910"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "bd505b1128192fd8823f83f2310a6afe"
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
