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
    "revision": "786bd3cc4368b0a4af191e7272db4996"
  },
  {
    "url": "algorithm/index.html",
    "revision": "76fbc5e6d2ea868d9bc21cbc2d5dff28"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "5830b9374767037fd7ca82a17818fbb1"
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
    "url": "assets/js/15.9e2ffcde.js",
    "revision": "df71ccd14f8757311ee7b993b539d6cd"
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
    "url": "assets/js/19.af487f8f.js",
    "revision": "4829425b72db9a7406a6afbc8cb4f66d"
  },
  {
    "url": "assets/js/20.6f5dd4bd.js",
    "revision": "1857c5c0a645dee05804da2590cd9b61"
  },
  {
    "url": "assets/js/21.07e1e94c.js",
    "revision": "0f15b9be461aa2843820d91b063ea7ae"
  },
  {
    "url": "assets/js/22.79c4ec60.js",
    "revision": "e5e4731bf02efc4e1aea08aa999fcab3"
  },
  {
    "url": "assets/js/23.3111b921.js",
    "revision": "b4964823c9f0a73f7a5e9761712880b3"
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
    "url": "assets/js/37.7865c0f8.js",
    "revision": "a19b7b150ee7c1f5eccd6417dd3e3893"
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
    "url": "assets/js/40.d725c6cf.js",
    "revision": "be17a49ceeaeb5cffc09e3db29949bc8"
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
    "url": "assets/js/app.e542c656.js",
    "revision": "c97fea3110f2f3812070abb155dd5ba1"
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
    "revision": "227d1956f27377beff8531c7197b4914"
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
    "revision": "c932d3c4bc9cda47425dda8439f9a656"
  },
  {
    "url": "life/index.html",
    "revision": "fb874ac09aefb77791239887ede396cb"
  },
  {
    "url": "life/意志力.html",
    "revision": "8543c89bf42d11911f17a2c0c96dec14"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "556a3fee2670533416b98d24a9583f34"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "11a51bf0bdbc0c98a4b7919a0d087b4f"
  },
  {
    "url": "skills/Base64.html",
    "revision": "8762e1bfd433a1f6bfd6a1f6b7a15b37"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Crontab.html",
    "revision": "436535ad8cb41e49c338f554fbf1de52"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "8e6b7a137899f26aa908f78061698839"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "e025be39532999d4d3b50a29b4cbf72d"
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
    "revision": "6ec82ac33166d02e3af2a91bfd36e80f"
  },
  {
    "url": "skills/event-loop.png",
    "revision": "aee75ef0e29b6a883aaf06270f57c5f6"
  },
  {
    "url": "skills/Generator.html",
    "revision": "845144ee44f4c2c2857fd57af08a055a"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "7d20ae252d8587154bd387b296964cca"
  },
  {
    "url": "skills/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "ea8837d98d061399cbfe0214b598347e"
  },
  {
    "url": "skills/image-conclude.png",
    "revision": "73cd469e1246823aedc3eb928a8665b6"
  },
  {
    "url": "skills/index.html",
    "revision": "d6107a17e1a18a952231f4738495c11e"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "66ccaf25ff539d6d27770dcdd6b95ecc"
  },
  {
    "url": "skills/Promise.html",
    "revision": "ad7889df09352d82613b1c566cb09fc9"
  },
  {
    "url": "skills/regex-place.png",
    "revision": "c874fa1afbb3be891a2b338def4e1000"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "672dc07e5e237e382a23f35ae71bbb6e"
  },
  {
    "url": "skills/Set & Map.html",
    "revision": "020cbcde600967f9167bc6f4f1ef8b87"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "b45e079c46599f042a2c8530a8f1cab0"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "a9e76d3371d9840f208843372f2aba77"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "cd66645501b2bdd69889a732b76e16da"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "a46441d6c9ecf5f4f321aba54348f8d9"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "7a6609b3e8a6f13ea9efd1119c962cce"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "5ea9be60687e32bb388b015daf2d7bba"
  },
  {
    "url": "skills/发布订阅 & 观察者模式.html",
    "revision": "c316cc4dce50e3ae94ec567ff922fb7e"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "01cad3a75bb4c8b3b496807a2d788ba3"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "687186dddf18883848ba6af5169ef064"
  },
  {
    "url": "skills/服务器推送/715b1061gy1g9anrh70jkj20hs0f70tp.jpg",
    "revision": "b80a750ab37431112d51a68fa212556b"
  },
  {
    "url": "skills/服务器推送/715b1061gy1g9ans77i5aj20hs0b1wf3.jpg",
    "revision": "e9e676b6a1889e8508d6622616fa7215"
  },
  {
    "url": "skills/服务器推送/715b1061gy1g9anslt25oj20hs0f8wfd.jpg",
    "revision": "52cc8bb2c4c824e1e3f49b8546c959b9"
  },
  {
    "url": "skills/服务器推送/715b1061gy1g9ansvj1rsj20hs0ec74z.jpg",
    "revision": "eb819fa7b885aa108ae9d21e8d6322e2"
  },
  {
    "url": "skills/服务器推送/715b1061gy1g9anto5tnvj20hs0d50te.jpg",
    "revision": "16b3ef39375423a6c3d3d2a084b237f5"
  },
  {
    "url": "skills/服务器推送/715b1061ly1g9anxdsfimj20hs0f2756.jpg",
    "revision": "e8e8d8d2917909f8603ddeee33753f5b"
  },
  {
    "url": "skills/服务器推送/715b1061ly1g9any0t5e9j20hs0cyab1.jpg",
    "revision": "891b4c96ed921108498f6d655f352a2f"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "ea0e5d17c2ab46440cd6565b9b2c206f"
  },
  {
    "url": "skills/正则表达式小知识.html",
    "revision": "9394cfddabca7778aefc9ff238e6ea55"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "2a54db6b2201eaaeea22f172567dae20"
  },
  {
    "url": "skills/浏览器缓存/715b1061ly1g8w6fmvtcyj20yq18egsv.jpg",
    "revision": "c714a87c86203e22a0447f284a53f938"
  },
  {
    "url": "skills/浏览器缓存/715b1061ly1g8w6wd9qqcj20m2045dfx.jpg",
    "revision": "84852acc15727330d898cfa99d989660"
  },
  {
    "url": "skills/浏览器缓存/715b1061ly1g8w6xewnt9j20gj0go3ys.jpg",
    "revision": "df5a44da587b515fa7d3a2ffd161992f"
  },
  {
    "url": "skills/浏览器缓存/715b1061ly1g8w6ymehxhj20le0didg6.jpg",
    "revision": "6427717a30be539198c864f9dc89ea99"
  },
  {
    "url": "skills/浏览器缓存/715b1061ly1g8w6yvtoooj20d605z74a.jpg",
    "revision": "48704ca67a4883ca853174703cf1c1a9"
  },
  {
    "url": "skills/简易依赖注入实现.html",
    "revision": "18fe4f981f42179ff62d5c3be4948cc7"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "28504f92c9dc021628b4fa4d248e6d47"
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
