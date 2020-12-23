# H5 定位 API

## 前言

在最近一次开发中, 远端代码使用了 H5 定位的 API(`Geolocation`), 始终无法在 webview 中获取位置, 后来各种尝试终于解决问题, 因此做一个总结

接下来的内容中我们将通过以下几个部分来阐述：

- 开启 https
- 使用 Geolocation
- 第三方定位服务

## 开启 https

由于`Geolocation`需要安全协议下使用,因此需要开启`https`,
我们本地开发中使用的是`webpack-dev-server`代理服务, 因此需要配置 https 服务, 此处直接贴出开启的代码

```js
module.exports = {
  devServer: {
    https: true
  }
};
```

配置好开启服务后发现无法打开页面, 提示证书不受信任

![证书不信任](/blog/skills/images/715b1061ly1gcc70vluwxj20f80m8gos.jpg)

在`webpack-dev-serve`开启`https`后, `会自动生成一个证书在node_modules/webpack-dev-server/ssl/server.pem`, 需要将该证书导入到系统中,并开启始终信任

## 使用 Geolocation

**Geolocation.getCurrentPosition()** 方法用来获取设备当前位置

```js
navigator.geolocation.getCurrentPosition(success, error, options);
```

详见[MDN-Geolocation](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/getCurrentPosition)

此处我要说的是一定要注意第三个参数, 这个 PositionOptions 参数控制超时等, 关键性的决定了定位的成功与否, 在本次出现的问题中, 大概率出现了定位失败; 最终通过如下的配置得以完美解决

```js
const options = {
  enableHighAccuracy: false,
  maximumAge: Infinity,
  timeout: 60000
};
```

## 第三方定位服务

其实 JS 提供的定位 API 的局限性非常大, 一是兼容性并不好, 二来定位精确性也不高;所以涌现了大量的第三方的定位服务, 其中做的非常好的有高德、百度、腾讯等；

此处记录几个他们官方的文档连接， 待以后需要用的时候再来翻阅

- [高德定位](https://lbs.amap.com/api/javascript-api/reference/location)
- [百度定位](http://lbsyun.baidu.com/index.php?title=jspopular)
- [腾讯前端定位](https://lbs.qq.com/tool/component-geolocation.html)
