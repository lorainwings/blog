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
    "revision": "b71003a140b37f3e11465e5fc88e26c5"
  },
  {
    "url": "algorithm/index.html",
    "revision": "7aa321787e7b3d609406ccdf6d1f154e"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "73013f269ffd331a7f0e90f654cd8861"
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
    "url": "assets/js/11.e7d620bc.js",
    "revision": "32d662ca2ad8bc64718dd6480e1f154a"
  },
  {
    "url": "assets/js/12.47f226d2.js",
    "revision": "76325787f34ded7a8551f1fa5fb471fb"
  },
  {
    "url": "assets/js/13.80c2ac1e.js",
    "revision": "6c2399dbc3ac239207c6bcfd9a025332"
  },
  {
    "url": "assets/js/14.7dbc719c.js",
    "revision": "b9e38dfc239c2e8039ed881ea6db337d"
  },
  {
    "url": "assets/js/15.12e26788.js",
    "revision": "beefa48205b457604f06d3ca191a1bab"
  },
  {
    "url": "assets/js/16.cf33aabb.js",
    "revision": "f7447ed1402ef21ec69e0069ffd744f4"
  },
  {
    "url": "assets/js/17.60ae4e02.js",
    "revision": "aec38f490320340265908954eb836aa0"
  },
  {
    "url": "assets/js/18.67a564f0.js",
    "revision": "7b42cfd4e974c727851b7dba812d1e7c"
  },
  {
    "url": "assets/js/19.dc645691.js",
    "revision": "20a62b51a2b0401746c76503f41f1d02"
  },
  {
    "url": "assets/js/20.e6c2ee91.js",
    "revision": "600fbb9724b318afabcf823768800655"
  },
  {
    "url": "assets/js/21.07e1e94c.js",
    "revision": "0f15b9be461aa2843820d91b063ea7ae"
  },
  {
    "url": "assets/js/22.b70379de.js",
    "revision": "3ceb0016e736852dd83e8f33839892f9"
  },
  {
    "url": "assets/js/23.9d571d2d.js",
    "revision": "120f2949a7bab673f1ad7936c4148aaf"
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
    "url": "assets/js/26.37ed3853.js",
    "revision": "dd2641dcac7eac5a74c873ee8247d33a"
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
    "url": "assets/js/29.480ffd2e.js",
    "revision": "5d3e49ae6ea849bd82f1aa596281ba96"
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
    "url": "assets/js/app.43ce5f53.js",
    "revision": "290999d7ee5a47d78bb9b17f6701a0e7"
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
    "revision": "020495bc866bd3ac24d60ff7e6dbe27a"
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
    "revision": "c0ad6d13794b48e2a9f0bdeae20320d8"
  },
  {
    "url": "life/index.html",
    "revision": "69d67f5f7dc3ae506c9dc4bdf8be7c41"
  },
  {
    "url": "life/意志力.html",
    "revision": "66a3d17fdcb0407bed8edffeece11e41"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "718b805cce7c37b38508350129e4883b"
  },
  {
    "url": "skills/Base64.html",
    "revision": "56875b607d17ecd568fbae75a33db61c"
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
    "revision": "e0122806815906d99a740629b5675c67"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "fecf763b0c74f92c72afd10b108cdeef"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "61f120f6fde5691b057290f1a5ff6810"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "95329856dc667e93f95789fce03a90fe"
  },
  {
    "url": "skills/Generator.html",
    "revision": "c9c335e6ce8a1eeb97ce955a2fea810a"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "7a621da82e15cf0aa5767faffc818b16"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "4d0b235de8cef970043b45bec684a5c2"
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
    "revision": "2c473952c2cca07f44cd6d84a03f5ea7"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "3f737d1c843a29bd6c9c0b0570b7b793"
  },
  {
    "url": "skills/Promise.html",
    "revision": "648de068f455f51ea8062bf1129d9902"
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
    "revision": "265fb2f65e8584ac85a9c240eaf39840"
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
    "revision": "d38b07cb19cfd5244c02c7e3c724195d"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "e7f87a40dcc5355aed8455eeb5986bbc"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "ea3388b177fc2c14e4aa0063aceefcbc"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "70c023376ff4ceacf7d0d36367c2c257"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "db13a6254582fc0db5f5e39c6abf1459"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "93334ef33093efd262626ed0af3b5252"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "bf9f03fad1c7866c76731742428be872"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "fa6677140fec9bea7fed9276e5e4eba6"
  },
  {
    "url": "skills/发布订阅 & 观察者模式.html",
    "revision": "ba43ccee1edd053c02944696a5c5fdf2"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "1882a53aa11ef3359598d1019d49f105"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "96af86ccd50fe736c9721a2d5f7beb58"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "29b7ccb9d28ba0026d9323b6e414e888"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "ef79f4d9a5fe1281207c9ac3ad01657d"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "b82976f45f31bb0d51cd3cf7cf3a084e"
  },
  {
    "url": "skills/简易依赖注入实现.html",
    "revision": "20ce81021f2a01eebc385c8f2fdbe7f8"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "ef04542be991411b30933e8c384318df"
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
