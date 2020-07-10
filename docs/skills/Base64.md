# Base64

## 介绍

`base64`其实是一种编码转换方式, 将`ASCII`字符转换成普通文本, 是网络上最常见的用于传输 8Bit 字节代码的编码方式之一。

`base64`由字母`a-z`、`A-Z`、`0-9`以及`+`和`/`, 再加上作为垫字的`=`, 一共 65 字符组成一个基本字符集, 其他所有字符都可以根据一定规则, 转换成该字符集中的字符。

> `abcde` =\> `YWJjZGU=` `ABCDE` =\> `QUJDREU=`

在日常开发中, 最常见的便是将`blob`和`base64`之间相互转换.

```javascript
// blob to base64
function blobTobase64(blob) {
  const fileReader = new FileReader();
  let base64 = '';
  fileReader.onload = () => {
    base64 = fileReader.result; // 读取base64
  };
  fileReader.readAsDataURL(blob); // 读取blob
}
// base64 to blob
function dataURItoBlob(dataURI) {
  var mimeString = dataURI
    .split(',')[0]
    .split(':')[1]
    .split(';')[0]; // mime类型
  var byteString = atob(dataURI.split(',')[1]); //base64 解码
  var arrayBuffer = new ArrayBuffer(byteString.length); //创建ArrayBuffer
  var intArray = new Uint8Array(arrayBuffer); //创建视图
  for (var i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }
  return new Blob([intArray], { type: mimeString }); // 转成 blob
}
复制代码;
```

## 编码和解码

### 浏览器

最新的浏览器自带了两个方法用于`base64`的编码和解码

分别是`atob`和`btoa`

- atob：将`base64`转成`8bit`字节码
- btoa：将`8bit`字节码转成`base64`

对于旧版浏览器, 可以使用[js-base64](https://github.com/dankogai/js-base64)

### Node

目前`node`中还不支持使用`atob`和`btoa`，但是可以通过`Buffer`来实现, [参考文档](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_array)

```javascript
if (typeof btoa === 'undefined') {
  global.btoa = function(str) {
    return Buffer.from(str).toString('base64');
  };
}

if (typeof atob === 'undefined') {
  global.atob = function(b64Encoded) {
    return Buffer.frome(b64Encoded, 'base64').toString();
  };
}
复制代码;
```

### 转换方式

> base64 编码方式对于中文是不适用的, 因为中文对应多个字节, 因此可以先使用`encodeURIComponent`编码后再进行`base64`编码.

[源码](https://github.com/zWingz/base64)

### 编码

-  每三个字节作为一组，每个字节 8bit, 一共是 24 个二进制位。

    ```javascript
    'ABCD'[('ABC', 'D')][('01000001010000100100001', '01000100')]; // 每三字节做一组 // 转成8bit
    复制代码;
    ```

-  将每组的 24 个二进制位再细分为四组，每组有 6 个二进制位, 此时为二维数组。

    ```javascript
    [['010000', '010100', '001001', '000011'], ['010001', '00']];
    复制代码;
    ```

    - 二个字节的情况：将这二个字节的一共 16 个二进制位, 按照上面的规则, 转成三组, 那么最后一项只有 4 位，则在后面加两个 0, 补够 6 位, 并在第三步对应位置加上垫字符`=`。
    - 一个字节的情况：将这一个字节的 8 个二进制位，按照上面的规则转成二组, 那么最后一项只有 2 位, 则在后面加上四个 0, 并在第三步对应位置加上两个垫字符`=`。
    - 简单说就是, 缺多少位就在后面补多少个 0, 直到满 6 位。

      ```javascript
      [['010000', '010100', '001001', '000011'], ['010001', '000000']];
      复制代码;
      ```

- 在每组前面加两个 00，扩展成 32 个二进制位，即四个字节。

```tips
规则是这么说, 但这一步我觉得可以忽略, 因为`00101010`和`101010` 是一样的
```

- 将每组对应的二进制转成十进制, 在`base64char`字符集中找到对应的字符。

    ```javascript
    [['Q', 'U', 'J', 'D'], ['R', 'A']];
    复制代码;
    ```

    - 每一组都最终都应该转成四个字符

    - 如果不足四个字符, 说明明文中并不足 3 字节, 因此需要补上垫字符`=`, 补够四个字符

    ```javascript
    [['Q', 'U', 'J', 'D'], ['R', 'A', '=', '=']];
    复制代码;
    ```

-  将最后的结果连接成字符串, 则为最终编码结果。

    > 'ABCD' > 'QUJDRA=='

根据编码方式来看, 每 3 个字节将会被编码成四个字符, 如果不足 3 个字节, 则补上垫字符`=`, 缺几个就补几个。

```javascript
btoa('A'); // "QQ=="
btoa('AB'); // "QUI="
btoa('ABC'); // "QUJD"
btoa('ABCD'); // "QUJDRA=="
复制代码;
```

### 解码

解码步骤就是跟编码步骤反过来

1.  每四个字节分为一组。
2.  将每组的中除了垫字符`=`外的字符, 在`base64char`字符集中找到所在下标。
3.  将十进制下标转成二进制, 如果不够 6 位（一定不会超过 6 位）, 则在前面补`0`。
    1.  如果遇到垫字符`=`, 说明其明文不足 3 字节, 则根据垫字符`=`的数量, 在该组最后一项中去掉对应个数的`0`
    2.  一个垫字符, 则去掉两个`0`
    3.  两个垫字符, 则去掉四个`0`
4.  将每组中的二进制字符串连接，此时字符串长度一定是 8 的倍数，然后每 8 位分割成一个字节。
5.  通过`String.fromCharCode`将二进制转成字符, 然后拼接
6.  将各个字符连接, 为最终解码结果。

## 题外-进制转换

- parseInt(str, radix): 根据 radix 可以将字符串转成十进制
- initValue.toString(radix): 将 initValue 转成其他进制

```javascript
// n进制转十进制
parseInt('1000', 2); // 8
parseInt('1000', 16)(
  // 4096

  // 进制间转换
  10
)
  .toString(2)(
    // "1010", 10进制转2进制
    0xff
  )
  .toString(2); // "11111111", 16进制转2进制
复制代码;
```

## 参考

[原来浏览器原生支持 JS Base64 编码解码](https://www.zhangxinxu.com/wordpress/2018/08/js-base64-atob-btoa-encode-decode/)

[Base64 笔记](http://www.ruanyifeng.com/blog/2008/06/base64.html)
