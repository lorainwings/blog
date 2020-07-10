# Nginx 配置浅析

## 概念 & 作用

Nginx 是一个轻量级、高性能、稳定性高、并发性好的 HTTP 和反向代理服务器; 它具有有很多非常优越的特性, 应用非常广泛

- 反向代理

- 负载均衡

- HTTP 服务器（包含动静分离）

- 正向代理

## 文章结构

本文将主要分析一下在 Web 应用中的常用配置, 为了方便阅读, 笔者将文章主要分为以下几个部分:

- 常用配置指令
- 单页应用配置
- 多页应用配置

## 常用配置指令

- location

:::tip 概念
location 实现了对请求的细分处理，有些 URI 返回静态内容，有些分发到后端服务器等, 支持的语法 `location [=|~|~*|^~|@] pattern { ... }`;
:::

```nginx
# 修饰符 = : 要求路径完全匹配<精确匹配>
location = /abc {}

# 修饰符 ~ : 区分大小写的正则匹配<正则匹配>
location ~ ^/abcd$ {}

# 修饰符 ~* : 不区分大小写的正则匹配<正则匹配>
location ~* ^/abcd$  {}

# 修饰符 ^~ : 匹配成功立刻停止<前缀匹配>
location ^~ /abcd  {}

# 无修饰符  : 最长匹配<前缀匹配>
location /document {}
```

以上多个匹配符都有的情况下, 匹配符的优先级是**先精确匹配，没有则查找带有 ^~的前缀匹配，没有则进行正则匹配，最后才返回最长匹配下的前缀匹配结果, 多个最长匹配规则相同以书写顺序先后**

可以使用以下伪代码来理解这个匹配顺序

```nginx
function match(uri):
  rv = NULL

  if uri in exact_match:
    return exact_match[uri]

  if uri in prefix_match:
    if prefix_match[uri] is '^~':
      return prefix_match[uri]
    else:
      rv = prefix_match[uri] // 注意这里没有 return，且这里是最长匹配

  if uri in regex_match:
    return regex_match[uri] // 按文件中顺序，找到即返回
  return rv
```

- rewrite

:::tip 概念 & 语法
rewrite 实现了用正则表达式（PCRE）改变请求的 URI，返回重定向，并有条件地选择配置

**语法:** <span style="color:green;">rewrite regex replacement [flag]</span>
:::

1- 作用域

`rewrite`的作用域可以出现在 `server`, `location`, `if`块

2- 匹配顺序

`rewrite` 规则优先级:

```优先级
执行server块的rewrite指令 -> 执行location匹配 -> 执行指定的locaiton中的rewrite
```

3- flag 选项
`flag` 有以下几个选项
| 字段 | 作用 |
| --------- | ------------------------------------------------------------------------------- |
| last | 停止 rewrite 检测,开始搜索与更改后的 URI 相匹配的 location |
| break | 停止 rewrite 检测,跳出不再检测 |
| redirect | 返回 302 临时重定向，地址栏会显示跳转后的地址 |
| permanent | 返回 301 永久重定向，地址栏会显示跳转后的地址（浏览器下次直接访问重定向后的地址 |

4- 注意点
`rewrite`在配置中, 重写字符串, 带上协议 http 与不带协议处理方式是不一样的:

```sh
# 第一种情况
location / {
    # 当匹配 正则表达式 /test1/(.*)时 请求将被临时重定向到 http://www.$1.com
    # 相当于 flag 写为 redirect
    rewrite /test1/(.*) http://www.$1.com;
    return 200 "ok";
}
# 在浏览器中输入 127.0.0.1:8080/test1/baidu
# 则临时重定向到 www.baidu.com
# 后面的 return 指令将没有机会执行了

# 第二种情况
location / {
    rewrite /test1/(.*) www.$1.com;
    return 200 "ok";
}
# 发送请求如下
# curl 127.0.0.1:8080/test1/baidu
# ok

# 此处没有带http:// 所以只是简单的重写。请求的 uri 由 /test1/baidu 重写为 www.baidu.com
# 因为会顺序执行 rewrite 指令 所以 下一步执行 return 指令 响应了 ok
```

- try_files

:::tip 概念
try_files 指令是按顺序检测文件的存在性,并且返回第一个找到文件的内容,如果第一个找不到就会自动找第二个,依次查找.其实现的是内部跳转.以下举例说明:
:::

```nginx
location /abc {
  # 检测文件4.html和5.html,如果存在正常显示,不存在就去查找@qwe值
  try_files /4.html /5.html @qwe;
}

location @qwe  {
  # 跳转到百度页面
  rewrite ^/(.*)$   http://www.baidu.com;
}
```

- add_header

:::tip 概念
add_header 作用是给请求的响应加上一个头信息,在 Web 的常见用法是设置控制缓存,配置跨域等相关 request header
:::

```nginx
location ~* \.(js|css|png|jpg|gif)$ {
    add_header Cache-Control no-store;
}

```

- proxy_set_header

:::tip 概念
proxy_set_header 允许重新定义或添加字段传递给代理服务器的请求头。该值可以包含文本、变量和它们的组合
:::

在没有定义 proxy_set_header 时会继承之前定义的值。默认情况下，只有两个字段被重定义：

```nginx
proxy_set_header Host $proxy_host;
proxy_set_header Connection close;
```

## 单页应用配置

当前前端界早已被单页应用一统天下了, `Nginx`在单页应用中的配置, 主要是配置缓存, 负载均衡, 反向代理接口等等; 笔者就将在实际应用的配置放在这里吧

```nginx

server {
    listen 80;
    server_name host.com;

    # item名字可以自定义
    # 有三种配置方式
    upstream host.com {
        # weight的值越高被派发请求的概率也就越高，可以根据服务器配置的不同来设置。
        server 127.0.0.1:8882 weight=1;
        server 127.0.0.1:8881 weight=2;
        # down表示不参与负载均衡
        server 127.0.0.1:8880 down;
    }
    upstream host.com {
        # 根据客户端IP来分配服务器，比如我第一次访问请求被派发给了192.168.101.60这台服务器,那么我之后的请求就都会发送这台服务器上，
        # 这样的话session共享的问题也就解决了
        ip_hash;
        server 127.0.0.1:8881;
        server 127.0.0.1:8880;
    }
    upstream host.com {
        # 根据添加的服务器判断哪台服务器分的连接最少就把请求给谁
        least_conn;
        server 127.0.0.1:8881
        server 127.0.0.1:8880
    }

    location / {
        index index.html;
        alias /home/www/bop/;
        try_files $uri $uri/ /index.html;
        add_header Cache-Control no-store;
        # item是在上面命名的
        proxy_pass http://host.com;
    }

    # 配置接口代理
    location ~* /api/ {
        rewrite /api/(.+) /$1  break;
        proxy_set_header X-Forwarded-For $remote_addr;
        # proxy_set_header Host  $http_host;
        proxy_pass http://host.com;
    }
    access_log /home/logs/nginx/bop.access.log monitor buffer=32k flush=5s;
    error_log /home/logs/nginx/bop.error.log;
}

```

## 多页应用配置

之前团队专门搭建了一个做活动的多页应用框架, 服务于各个活动应用开发, 其中多页应用的 Nginx 映射了各个活动的`BaseUrl`, 这里放个最关键的部分吧

```nginx
location ~ /(.*)/detail {
    set $first_path $1;
    root /home/www/growth-upgrade/html;
    try_files $uri $uri/ $first_path/index.html;

    if (!-e $request_filename) {
        rewrite ^/(.*) /$first_path/index.html last;
        break;
    }
}


location ~ /(.*)/(.*) {
    set $first_path $1;
    set $following_path $2;

    root /home/www/growth-upgrade/html;
    try_files $uri $uri/ $first_path/index.html;

    if (!-e $request_filename) {
        rewrite ^/(.*) /$first_path/index.html last;
        break;
    }
}

```
