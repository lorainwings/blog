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
    "revision": "02a5c7aa5dc5c154c6f9b085059e509e"
  },
  {
    "url": "algorithm/index.html",
    "revision": "4fe6b9ba760482028a95963ce24fb71c"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "601f33c9c9d3836bed717d4d03d07e90"
  },
  {
    "url": "assets/css/0.styles.579a9854.css",
    "revision": "923c23b45abd17507dff3a76dc9bdd3c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.15efb885.js",
    "revision": "d3a2830216785d1b78d822f05729b007"
  },
  {
    "url": "assets/js/11.b69736a7.js",
    "revision": "aa342aa39bec1b3cb1c39ef1703d485d"
  },
  {
    "url": "assets/js/12.1e4a5a90.js",
    "revision": "5aa98944335b4c2ed5dbfe8c64514153"
  },
  {
    "url": "assets/js/13.a0e2552d.js",
    "revision": "e62063b75f109281ec16b3d7188b614b"
  },
  {
    "url": "assets/js/14.db5c8151.js",
    "revision": "3244348f1a3bdefb4dcb0bb8cadbbff7"
  },
  {
    "url": "assets/js/15.a2f176cb.js",
    "revision": "36cdf6b42f8127dd348d16838f4267a0"
  },
  {
    "url": "assets/js/16.5298f88a.js",
    "revision": "13118261816f30877916570abf0caa08"
  },
  {
    "url": "assets/js/17.5f2beb7f.js",
    "revision": "f640d802405549059d5adcd05e1ec8b8"
  },
  {
    "url": "assets/js/18.e510d28d.js",
    "revision": "180a2d9ec83e096358675565b9df1332"
  },
  {
    "url": "assets/js/19.53886023.js",
    "revision": "526940d49d8596d6f709fa49bbcdadc7"
  },
  {
    "url": "assets/js/20.63c552fe.js",
    "revision": "758f63122e8ac9737c82544b23b32e0e"
  },
  {
    "url": "assets/js/21.67e51d39.js",
    "revision": "73a124d708a695b28e6eb8348bcdc852"
  },
  {
    "url": "assets/js/22.64fcf1a3.js",
    "revision": "d7e003757f6e0841990bc5db8de35e9f"
  },
  {
    "url": "assets/js/23.c7251380.js",
    "revision": "372cdc10f7ff8ef55b8b058962137aea"
  },
  {
    "url": "assets/js/24.5ba591b0.js",
    "revision": "dd8a03ad911f73247a042cf7d1e744ea"
  },
  {
    "url": "assets/js/25.096364ce.js",
    "revision": "953f298abe19bae2aea707b8e21c2181"
  },
  {
    "url": "assets/js/26.0ccf51ed.js",
    "revision": "688b2cfb495424a76f90fa506d332885"
  },
  {
    "url": "assets/js/27.8edf20d3.js",
    "revision": "381ef6f77dc9db9e2d8719e39f74bfdd"
  },
  {
    "url": "assets/js/28.f04b9341.js",
    "revision": "b3253d95d457a3892236976a70797994"
  },
  {
    "url": "assets/js/29.c8add927.js",
    "revision": "268ba36f9f4cd5f5992e869b8f42f6c5"
  },
  {
    "url": "assets/js/3.ab657a59.js",
    "revision": "6c5f02b5e0c86b875d8ad524872ceb2f"
  },
  {
    "url": "assets/js/30.1aef2e5e.js",
    "revision": "2da82d08fbe517d80487df6491f6be5a"
  },
  {
    "url": "assets/js/31.1abd6355.js",
    "revision": "e1c581da5618b73a6bfb313121af9f72"
  },
  {
    "url": "assets/js/32.03df97b0.js",
    "revision": "f5919320f07b5e48c4a55205967686de"
  },
  {
    "url": "assets/js/33.c00a706c.js",
    "revision": "8eb9f4ca0bc78a1c0c88e057950c740c"
  },
  {
    "url": "assets/js/34.2f847376.js",
    "revision": "48a5b0ee4bd595205f04b1b3168d481a"
  },
  {
    "url": "assets/js/35.63347724.js",
    "revision": "cee1651dda3843594382168b7c0040b7"
  },
  {
    "url": "assets/js/36.9fdc020c.js",
    "revision": "f21c2c42fbe24f869911a7abe5cc0a20"
  },
  {
    "url": "assets/js/37.3392c04b.js",
    "revision": "e62676bafea763c3b96c3a9feb76a1bc"
  },
  {
    "url": "assets/js/38.ade4c9de.js",
    "revision": "fea018370176bdc692af66aea3ae434f"
  },
  {
    "url": "assets/js/39.6aec4626.js",
    "revision": "8fe52c5a35483f489d0c51565a9f593b"
  },
  {
    "url": "assets/js/4.022282fe.js",
    "revision": "4ae160db17fff8fb68cc7fa3c9685335"
  },
  {
    "url": "assets/js/40.9c723d93.js",
    "revision": "ab016af1079377dd08aab332161a59d2"
  },
  {
    "url": "assets/js/5.904e5833.js",
    "revision": "5198da5cb262756a523367ed88e13724"
  },
  {
    "url": "assets/js/6.2426cfb9.js",
    "revision": "0502f4637e84f6963a41058c95b71d47"
  },
  {
    "url": "assets/js/7.7194594b.js",
    "revision": "d62235ded230f050214a14679f0e861d"
  },
  {
    "url": "assets/js/8.e15df7e7.js",
    "revision": "c8e5a29ae8bd88e5fa2a4b2925e5d04c"
  },
  {
    "url": "assets/js/9.3ff9262b.js",
    "revision": "1ecc67d944cc7416f80e9c1f7e355dcc"
  },
  {
    "url": "assets/js/app.25414947.js",
    "revision": "1cc1213995680b30ef796f9a4ede750a"
  },
  {
    "url": "assets/js/vendors~docsearch.21b1897d.js",
    "revision": "b6e6ae7f82bd12784dcd8db25d3faf27"
  },
  {
    "url": "base/hd-img.jpg",
    "revision": "8d622111bd7a2e2ff6307ad87b9d9219"
  },
  {
    "url": "guide.html",
    "revision": "70b921946e83efbeb92452c85aecd40e"
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
    "revision": "67dcb112aa128ad260f98dde550a0b25"
  },
  {
    "url": "life/index.html",
    "revision": "44f058140dbdcea25883fd32922e395b"
  },
  {
    "url": "life/意志力.html",
    "revision": "85f9f45afaa8576cfda97f7679280f43"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "556a3fee2670533416b98d24a9583f34"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "010b715c9380e07b452b40dc6a911fb8"
  },
  {
    "url": "skills/Base64.html",
    "revision": "9119a1e2e0b69b661daf9b1bd4c2a55c"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Crontab.html",
    "revision": "474a31383a4a4814ff1765563447c2bf"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "6d13622375c4780571a9fe59522cbeb0"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "b0005bfe623f75f694c1cc54bf44873d"
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
    "revision": "dc0e9d9e7149633edd5d8f466d569168"
  },
  {
    "url": "skills/event-loop.png",
    "revision": "aee75ef0e29b6a883aaf06270f57c5f6"
  },
  {
    "url": "skills/Generator.html",
    "revision": "508ee7990fdf956cea495b9511f1e4db"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "045cb3b2737b2ac1021dd3bcbe3342d8"
  },
  {
    "url": "skills/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "265fa9616e91606afcfc5b23f22da9d1"
  },
  {
    "url": "skills/image-conclude.png",
    "revision": "73cd469e1246823aedc3eb928a8665b6"
  },
  {
    "url": "skills/index.html",
    "revision": "99b38710e9d74845b40873b524894115"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "39a7651715647c4092861f17a167fceb"
  },
  {
    "url": "skills/Promise.html",
    "revision": "a0188ea63b0bfadf90c210e37d6de026"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "c5739ee2f9d7f60418c672e04f4167b0"
  },
  {
    "url": "skills/Set & Map.html",
    "revision": "4ff29b1bfccf024c33f0a9db50248d10"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "e1dc0802efc1993c88ad278309e1a14e"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "aaccaa5e5d2d3aab8631c298d5c9e442"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "3b3385e95d06b3fa760ffd2854976729"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "0d10150fa312097e165da5d6bf7148df"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "2f5f6746d876dc5552f334b39015426e"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "a1920ddf0855cce9cb7d0b8c5135f2fa"
  },
  {
    "url": "skills/发布订阅 & 观察者模式.html",
    "revision": "d02f21f495c0d28663b38aa0557b97fc"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "c110cb7a4aa30aea0004b3de5318ebb5"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "5c234fd7a4d52c92ab4c642a2896b55f"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "c8bfec274c9d69dd98a19c63ce5129fe"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "3a21009e9b09bc6e87a8b7ba8fb97826"
  },
  {
    "url": "skills/简易依赖注入实现.html",
    "revision": "7733d90c419b107d71adf3894dd07bcb"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "5b54cad0db9136763245e1642f01b8d1"
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
