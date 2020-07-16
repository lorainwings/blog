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
    "revision": "b5e25abf6f5d1e0f5bb9be625a39b084"
  },
  {
    "url": "algorithm/index.html",
    "revision": "2a0f9275fe89fc2f7b3f568b5f4591ce"
  },
  {
    "url": "algorithm/递归算法.html",
    "revision": "fc47054544dda99e3bef27803713c1e3"
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
    "url": "assets/js/22.42eb15fc.js",
    "revision": "bf0b2fce857cef70c253066ae841b37f"
  },
  {
    "url": "assets/js/23.3a3358e3.js",
    "revision": "087ac2c3c175dacba3a44b225c77c506"
  },
  {
    "url": "assets/js/24.3042e16a.js",
    "revision": "441874f2a95132c1dabe41127a5cf3f0"
  },
  {
    "url": "assets/js/25.a1aa5fe0.js",
    "revision": "2a930be9bb3b4ee5511dccd380eb52b6"
  },
  {
    "url": "assets/js/26.8c08020c.js",
    "revision": "f3dffe40838c341078282c348b9e0ca7"
  },
  {
    "url": "assets/js/27.2f83da87.js",
    "revision": "3c8c07608c3cee9ae182c3c013b539f4"
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
    "url": "assets/js/38.0c6cf342.js",
    "revision": "775d86ac1059b23fed295e9207b352ca"
  },
  {
    "url": "assets/js/39.c13469e6.js",
    "revision": "387c6e43aba685944423b6c9f6d16dd3"
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
    "url": "assets/js/app.ab5856c5.js",
    "revision": "96646a4b1f68a73f516f557dcea5ebeb"
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
    "revision": "f91a343e33c1d5ac34d3d2c4dc4e7896"
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
    "revision": "3edc19f201dbb2cb99d22d8df8c40fca"
  },
  {
    "url": "life/index.html",
    "revision": "8418634fa209906939dd98e992669cde"
  },
  {
    "url": "life/意志力.html",
    "revision": "c531f6ed048f9dd3c02b66a2821f84af"
  },
  {
    "url": "skills/babel.jpg",
    "revision": "556a3fee2670533416b98d24a9583f34"
  },
  {
    "url": "skills/Babel杂谈.html",
    "revision": "13dbef0489e98c85890490833cbf2c59"
  },
  {
    "url": "skills/Base64.html",
    "revision": "483a1f3a650f77ae25c63cfc407c20c6"
  },
  {
    "url": "skills/cdn.png",
    "revision": "fffee9a8791dd7be239adca3e19522ed"
  },
  {
    "url": "skills/Crontab.html",
    "revision": "c2132168e4b1083a19334d852038ab21"
  },
  {
    "url": "skills/DockerForV2ray.html",
    "revision": "680f64095cd881c3cd9c3bba94798cac"
  },
  {
    "url": "skills/Docker指南.html",
    "revision": "6a0059fdc0dd4d74594454e7089f31d4"
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
    "revision": "bf94ca9e37ba5ccf8b95abe1c5ecce6e"
  },
  {
    "url": "skills/event-loop.png",
    "revision": "aee75ef0e29b6a883aaf06270f57c5f6"
  },
  {
    "url": "skills/Generator.html",
    "revision": "abaeab1fd67dde4df696d2663ce582b8"
  },
  {
    "url": "skills/Git 常用技巧.html",
    "revision": "6ab0cc73133d1eba222c75f32d60701a"
  },
  {
    "url": "skills/git-head.png",
    "revision": "f9a8b199f888a1c6030604abdfa8580d"
  },
  {
    "url": "skills/H5定位API.html",
    "revision": "0c6a1531529c51ad9c0cdd356b7bfa30"
  },
  {
    "url": "skills/image-conclude.png",
    "revision": "73cd469e1246823aedc3eb928a8665b6"
  },
  {
    "url": "skills/index.html",
    "revision": "9fa1ebd4b8143668760aa4653669bf15"
  },
  {
    "url": "skills/Nginx配置浅析.html",
    "revision": "e2d78dee4f13476e7f24d919f1b932db"
  },
  {
    "url": "skills/Promise.html",
    "revision": "5023bc177e1f4aa7efe335e89f8cff3b"
  },
  {
    "url": "skills/Rxjs初探.html",
    "revision": "bf4991376822adff50de5d9c1146a1e8"
  },
  {
    "url": "skills/Set & Map.html",
    "revision": "a4f4deaded2f866faff22c90e93d6ed5"
  },
  {
    "url": "skills/Webpack基础知识.html",
    "revision": "adbd042c1f087af29abce15942bc11ac"
  },
  {
    "url": "skills/Webpack异步加载.html",
    "revision": "ba03fc24a1849203a9f848064b769eaf"
  },
  {
    "url": "skills/Webpack模块实现.html",
    "revision": "d1012bbd92092ad095d55b945386f137"
  },
  {
    "url": "skills/Web性能优化.html",
    "revision": "849b1be1fbdba36ba72901c4ad9f98ca"
  },
  {
    "url": "skills/初识Typescript.html",
    "revision": "6b7c9c1163797d8d793d2edcf3a380df"
  },
  {
    "url": "skills/前端安全防范.html",
    "revision": "ab9cbb2560c80da7e454afd299e07336"
  },
  {
    "url": "skills/发布订阅 & 观察者模式.html",
    "revision": "cd46989d2a09e540e104788a0abd397e"
  },
  {
    "url": "skills/图片分类.html",
    "revision": "b180a32260c8e89e5be345325139a5d1"
  },
  {
    "url": "skills/服务器推送.html",
    "revision": "074cabc137adf090e249289d6038542b"
  },
  {
    "url": "skills/查看日志.html",
    "revision": "fc59a67159091bb6fd794138a1b4efdd"
  },
  {
    "url": "skills/浏览器缓存.html",
    "revision": "500e4bab398c7a6d2e2e7353d2b9bbf9"
  },
  {
    "url": "skills/简易依赖注入实现.html",
    "revision": "1f6a3a9d70d8dfd67a85d28b065d5416"
  },
  {
    "url": "skills/简易打包工具实现.html",
    "revision": "33cba39d2acc7e0be0273cdcb0d876bd"
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
