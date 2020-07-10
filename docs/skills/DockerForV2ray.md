# Docker For V2ray

> 本文记录在 docker 中安装 v2ray

## 作用

它可以**更加方便的迁移**。

由于之前的 VPS 的 IP 总是被封, 每次重新创建实例安装之前的服务费时费力, 所以准备通过 docker 来简化这一流程

## 关键步骤

接下来我将通过以下几个部分来记录详细的关键步骤：

- 配置文件生成
- 服务器安装 docker
- 发送配置文件到服务器
- 运行 docker 服务

### 配置文件生成

服务器的配置文件可以在[v2ray-config-gen](https://intmainreturn0.com/v2ray-config-gen/)生成;
建议将配置文件存在本地的电脑中, 通过 scp 到远端服务器方便快速恢复服务, 值得提到的是`port`和`id`参数

- `port`: 这个参数是服务端暴露出的代理端口
- `id`: 这个 uuid 可以通过[1024uuid](https://1024tools.com/uuid)生成

```js
{
  "log": {
      "access": "/var/log/v2ray/access.log",
      "error": "/var/log/v2ray/error.log",
      "loglevel": "warning"
  },
  "inbound": {
      "port": 8888, // 服务端暴露的端口
      "protocol": "vmess",
      "settings": {
          "clients": [
              {
                  "id": "7541dc20-3840-4679-a933-984c36ad2ae8", // 生成的uuid, 需要与客户端保持一致
                  "level": 1,
                  "alterId": 233
              }
          ]
      }
  },
  "outbound": {
      "protocol": "freedom",
      "settings": {}
  },
  "inboundDetour": [],
  "outboundDetour": [
      {
          "protocol": "blackhole",
          "settings": {},
          "tag": "blocked"
      }
  ],
  "routing": {
      "strategy": "rules",
      "settings": {
          "rules": [
              {
                  "type": "field",
                  "ip": [
                      "0.0.0.0/8",
                      "10.0.0.0/8",
                      "100.64.0.0/10",
                      "127.0.0.0/8",
                      "169.254.0.0/16",
                      "172.16.0.0/12",
                      "192.0.0.0/24",
                      "192.0.2.0/24",
                      "192.168.0.0/16",
                      "198.18.0.0/15",
                      "198.51.100.0/24",
                      "203.0.113.0/24",
                      "::1/128",
                      "fc00::/7",
                      "fe80::/10"
                  ],
                  "outboundTag": "blocked"
              }
          ]
      }
  }
}
```

### 服务器安装 docker

笔者的 vps 系统是 centos8, 在该系统中安装 docker 的几条命令如下:

```sh
# 使用DNF添加Docker存储库
sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo

```

```sh
# 列出所有可用的docker-ce软件包
dnf list docker-ce --showduplicates | sort -r

```

```sh
# --nobest命令安装最符合条件的版本
sudo dnf install docker-ce --nobest

```

```sh
# 查看docker是否安装成功
docker -v
```

### 发送配置文件到服务器

在发送本地配置文件到远程服务器之前, 需要在远端服务器创建好放配置文件的目录, 此处我使用了`/etc/v2ray`目录

`服务端操作以下命令:`

```sh
# 创建目录
sudo mkdir -p /etc/v2ray
# 修改权限
chmod -R 777 /etc/v2ray
```

`在本地运行以下发送配置文件的命令:`

```sh
# scp [本地文件地址] [用户名]@[服务器地址]:/etc/v2ray
scp ~/config.json root@xxx.xxx.xxx.xxx:/etc/v2ray
```

### 运行 docker 服务

首先启动 docker 服务

```sh
sudo systemctl start docker
```

再拉取 v2ray 的 images

```sh
docker pull v2ray/official
```

第三步启动 docker 容器即可

```sh
# 端口第一个8888是指服务器vps暴露的端口, 最好与配置文件的port保持一致
# 端口第二个8888是指配置文件的port
docker run -d --restart=always --name v2ray -v /etc/v2ray:/etc/v2ray -p 8888:8888 v2ray/official v2ray -config=/etc/v2ray/config.json
```

至此为止, enjoy !
