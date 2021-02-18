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
    "revision": "e4702e8d9f4aed7c0af5dc2050700949"
  },
  {
    "url": "algorithm/index.html",
    "revision": "1c22cfba6a31788ab2a3cbfbc63490a8"
  },
  {
    "url": "algorithm/发布订阅 & 观察者模式.html",
    "revision": "ec783f816434d8207a6f673bbaba0972"
  },
  {
    "url": "algorithm/简易依赖注入实现.html",
    "revision": "2f327648183873979fd8de33c9137ec5"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "3048e343d1d2528f2c87f1565f8b3d13"
  },
  {
    "url": "assets/css/0.styles.68529e48.css",
    "revision": "da5fd822cda7f205e07036f5ef081c2e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.40f921fc.js",
    "revision": "5c949a8e396f7deed16776d7df4e7407"
  },
  {
    "url": "assets/js/11.b1a5db24.js",
    "revision": "f0c7ae5ff507e72fbd9f2ce3d6249d0a"
  },
  {
    "url": "assets/js/12.32eadbcb.js",
    "revision": "d4e8573bbf12c0dc26a449e938591522"
  },
  {
    "url": "assets/js/13.605aab50.js",
    "revision": "e1a592e1551323db08f8dc463f2428e8"
  },
  {
    "url": "assets/js/14.e621e259.js",
    "revision": "e70f9ee0b84544b5db236420b5d1200f"
  },
  {
    "url": "assets/js/15.a17f293c.js",
    "revision": "d63161fc76a4896fd343a01781ab7333"
  },
  {
    "url": "assets/js/16.4cf8e286.js",
    "revision": "ff5233d61fc2da3176ded2866fd41bc4"
  },
  {
    "url": "assets/js/17.0187e264.js",
    "revision": "f5777dab359141a7648c0ecf9f725142"
  },
  {
    "url": "assets/js/18.a9a7f87d.js",
    "revision": "697f7874cb430ad0c7aa719752d11e11"
  },
  {
    "url": "assets/js/19.39221c93.js",
    "revision": "1acc66e2a29e88e4e7c979b63d66d2cd"
  },
  {
    "url": "assets/js/20.763a09e2.js",
    "revision": "bb7cc6a9f761b4cdb305b32a0045d0b8"
  },
  {
    "url": "assets/js/21.abd84741.js",
    "revision": "4360c63ac11fe5ab7838789f411fc9a3"
  },
  {
    "url": "assets/js/22.621fc027.js",
    "revision": "e861f8f7e72606d7f0075a050500c2ef"
  },
  {
    "url": "assets/js/23.f5fdb6b0.js",
    "revision": "c39b2bb2e742d0a65e9fae93b60af451"
  },
  {
    "url": "assets/js/24.d179bd37.js",
    "revision": "8e597ac6953cf5f3b1fc6bfc77dd17ba"
  },
  {
    "url": "assets/js/25.79c3d42c.js",
    "revision": "6e10dcebcf74af8a518bbf26f9fa2832"
  },
  {
    "url": "assets/js/26.7e5fb699.js",
    "revision": "55cd532480c781b128f6715cc5c6a8de"
  },
  {
    "url": "assets/js/27.6d2e2ca2.js",
    "revision": "3db1ded33523636a314ed07392c77d9e"
  },
  {
    "url": "assets/js/28.711f2fab.js",
    "revision": "ac12e0a812cb04855c321b8c096f6ab4"
  },
  {
    "url": "assets/js/29.b7f987c3.js",
    "revision": "91010ec0c543df6fd345ee8250776945"
  },
  {
    "url": "assets/js/3.8a6bfa10.js",
    "revision": "968057c2f180d36481e1c10ec2c6542b"
  },
  {
    "url": "assets/js/30.0a3630f2.js",
    "revision": "15cbd3cf6fdb9fab0918f56ec6ab6e86"
  },
  {
    "url": "assets/js/31.9490002b.js",
    "revision": "56b752880f5656a53833e53f1bd180db"
  },
  {
    "url": "assets/js/32.0b088754.js",
    "revision": "13a83b08e38e355b99cd0acad82836c5"
  },
  {
    "url": "assets/js/33.46448628.js",
    "revision": "57608ff7898d3859d16e1f43572dba1e"
  },
  {
    "url": "assets/js/34.9212905b.js",
    "revision": "5de4ad5d02a652145ec5b45ed5159e1d"
  },
  {
    "url": "assets/js/35.5013d6d2.js",
    "revision": "b1e6157136008d39166b35129e2b2f08"
  },
  {
    "url": "assets/js/36.531ff59f.js",
    "revision": "18dcd1e37c2f96965e08ef06695cf8a1"
  },
  {
    "url": "assets/js/37.52f1002a.js",
    "revision": "fbbaa75309416952df8a7656d283ecb9"
  },
  {
    "url": "assets/js/38.3a2afa1a.js",
    "revision": "8d475c3bc0ef06bf0b88809b9d8d8809"
  },
  {
    "url": "assets/js/39.1e10e2b5.js",
    "revision": "4e20e250cdaf985800b749196f1ba07f"
  },
  {
    "url": "assets/js/4.3c831ab3.js",
    "revision": "956d851cdd310508f46a904744234b7b"
  },
  {
    "url": "assets/js/40.4f8f0eeb.js",
    "revision": "1622dcd9792b98e93e049a67f2fd4fcc"
  },
  {
    "url": "assets/js/41.01c2e535.js",
    "revision": "0a6754ccaa275715f79a6968fa93d269"
  },
  {
    "url": "assets/js/42.fca6ea9d.js",
    "revision": "b64588918dc26ad7835ac3c680682795"
  },
  {
    "url": "assets/js/43.6e4dac46.js",
    "revision": "6b69655396a08b55e03c19915a54994d"
  },
  {
    "url": "assets/js/44.cd97ff06.js",
    "revision": "648071e4bb579438874db95cde1cfb65"
  },
  {
    "url": "assets/js/45.60a1d461.js",
    "revision": "6dcdb8ec31be3d747b602f358ceae569"
  },
  {
    "url": "assets/js/5.8a039903.js",
    "revision": "f81ad7827b8efdfdb866d7154d96ff97"
  },
  {
    "url": "assets/js/6.29bb3ac6.js",
    "revision": "3f9e8357cbbb27da5a63c36a9a0f31b9"
  },
  {
    "url": "assets/js/7.ae762a13.js",
    "revision": "d6e62b3f570690e4169abd9be6322404"
  },
  {
    "url": "assets/js/8.2597e5ec.js",
    "revision": "4182b03a5c4da8b525ac998253555021"
  },
  {
    "url": "assets/js/9.f2677d57.js",
    "revision": "876568ecfe070e0c7ca6631983bc2b40"
  },
  {
    "url": "assets/js/app.4835f0b2.js",
    "revision": "1d169b0201d67aabd31ba2582601d0ad"
  },
  {
    "url": "assets/js/vendors~docsearch.62a8c583.js",
    "revision": "ba4498b758d67ba5e36cfd88712e93cf"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "0fbec3f2dde4a6242e3535fa3cdc62c7"
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
    "revision": "768cd3625feb6432ea14aa12a395e5fa"
  },
  {
    "url": "life/index.html",
    "revision": "65248e7a241a85597c15c32ca022acdc"
  },
  {
    "url": "life/意志力.html",
    "revision": "2cf9efa63f22243501f09873bc2070c0"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "148701e398a4c06d3ad3d7ec8bf8ba24"
  },
  {
    "url": "skills/Base64.html",
    "revision": "68da567e70a83af53f4ad1b943508959"
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
    "revision": "955a80bc9194a6415eeb648007e0c64e"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "467b7b23d511f18344fa6ebdbf6f2d3b"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "2e7ddd6ca8b64af6d3da03eeffe8b5de"
  },
  {
    "url": "skills/Event-loop.html",
    "revision": "40c9912118de8b688a3ae4a1f783af11"
  },
  {
    "url": "skills/Generator.html",
    "revision": "b21120c8be5179d692379b885cb56bcf"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "70b7ee5036fc2fa281c864284aaa524e"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "b7510b8e2ad11cec3662befa3251dddf"
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
    "revision": "ab7049b199af3ecf444f5b6781d7434e"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "3eb1829a0a2962c551da76a67ce6c8a9"
  },
  {
    "url": "skills/Promise.html",
    "revision": "a15c9734872d91ea5654090d345e283d"
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
    "revision": "70ede611776f7beda8e22a8123245206"
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
    "revision": "3d7f050ccde939880979062c0014faf7"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "02e929b893c27e4c047f4a99d28c27a1"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "d21a5d303bb4d48f09fb5a0540754f0d"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "77c9d12b9d0dfd0b85177e20b7ccbb70"
  },
  {
    "url": "skills/WebWorker实践小结.html",
    "revision": "0935710c56077a7a51c27708dc18672c"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "8412832e00aea2797114b87908c9bfb7"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "2fb53f121d08352576072599b3ccf854"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "55d4fe1f7848d81fb35392fc479797df"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "320623f120bf3687865054efdc807460"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "13326a6d48e12f78902cffa30fdecc9f"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "529dbdc19e9a2daa79f3284cebccc48f"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "df71ff2275449f3c79a3d884aec7b37d"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "470569aaf205e220bbb25427746cdd19"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "0659e1668a2d0ace97c54d5b54810341"
  },
  {
    "url": "skills/读你不知道的JS.html",
    "revision": "f61837243490655651a8182d5345f206"
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
