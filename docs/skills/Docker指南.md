# Docker 指南

最近重新学习了一遍 docker 相关的概念和知识, 在此记录相关知识点以作为备忘

## 概念 & 作用 & 组成

### Docker 概念

```概念
docker是LXC(Linux容器虚拟化)的产物, 为了提升集成环境的部署便利性而生, 将软件打包成标准化单元，以用于开发、交付和部署;
```

### Docker 的作用

- 开发者能够使用 Docker 在本地编写代码并通过容器与其他同事共享他们的工作。
- 他们能够使用 Docker 将编写好的程序推送至测试环境进行自动化测试或是人工测试。
- 当出现 Bugs 时，开发者可以在开发环境中修复它们，并很快的重新部署到测试环境中。
- 在测试完成后，部署装有应用程序的镜像就能完成生产环境的发布。

### Docker 的组成

- 镜像(images)
- 容器(container)
- 网络(network)
- 数据卷(volume)

## 运行环境

搭建 docker 的运行环境主要包括以下几个部分:

- 安装 docker
- 配 docker 加速镜像源

### 安装 docker

在 Windows 和 Mac 中安装 Docker, 通过下面链接直接安装桌面应用, 非常简单

- [Docker for Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows)
- [Docker for Mac](https://store.docker.com/editions/community/docker-ce-desktop-mac)

在 Linux 系统中安装 Docker, 通过下面命令即可

```sh
# CentOS
  sudo yum install yum-utils device-mapper-persistent-data lvm2

  sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
  sudo yum install docker-ce

  sudo systemctl enable docker
  sudo systemctl start docker
```

```sh
# Debian
  sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common

  curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
  sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian  (lsb_release -cs) stable"
  sudo apt-get update
  sudo apt-get install docker-ce

  sudo systemctl enable docker
  sudo systemctl start docker
```

### 配置 docker 加速镜像源

在 Linux 环境下，通过修改 /etc/docker/daemon.json ( 如果文件不存在，需要自己创建 ), 国内加速镜像源众多, 笔者此处使用了 ustc 和 163 的镜像源

```json
{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://hub-mirror.c.163.com"
  ]
}
```

在 Macos 和 Windows 的 desktop 桌面端, 需要打开编辑配置, 如下图加入配置即可

![docker镜像源配置](/blog/skills/images/715b1061ly1gg9b3nuhkyj21ls10oq7r.jpg)

## 操作镜像

一般获取镜像的途径都是从官方的镜像仓库中获得, 镜像仓库类似于(github), 此处记录操作镜像常用的命令

**获取镜像**: `docker pull [name/tag/id]`

```sh
docker pull ubuntu
```

**查看本地镜像**: `docker images`

```sh
docker images
```

**搜索镜像**: `docker search [name/tag/id]`

```sh
docker search ubuntu
```

**查看镜像详细信息**: `docker inspect [name/tag/id]`

```sh
docker inspect redis:4.0
```

**删除本地镜像**: `docker rmi [name/tag/id]`

```sh
docker rmi ubuntu:latest
```

## 使用容器

容器是基于容器技术所建立和运行的轻量级应用运行环境,在 Docker 中，容器算是最核心的部分, 此处分为以下三部分来记录:

- 操作命令
- 数据管理
- 使用网络

### 操作命令

**创建容器**: `docker create [name/tag/id]`

```sh
docker create nginx:1.12
```

**启动容器**: `docker start nginx`

```sh
docker start nginx
```

**创建并启动**: `docker run --name [name] -d [name/tag/id]`

```sh
docker run --name nginx -d nginx:1.12
```

**查看容器**: `docker ps`

```sh
docker ps

#查看全部容器
docker ps -a
```

**停止容器**: `docker stop [name/tag/id]`

```sh
docker stop nginx
```

**删除容器**: `docker rm [name/tag/id]`

```sh
# 删除未运行的容器
docker rm nginx

# 删除任何状态的容器
docker rm nginx -f
```

**进入容器**: `docker exec [name/tag/id] [命令]`

```sh
docker exec nginx more /etc/hostname
```

**容器开启命令行交互**:

```sh
docker exec -it nginx bash
```

上面 -i ( --interactive ) 表示保持我们的输入流，只有使用它才能保证控制台程序能够正确识别我们的命令。而 -t ( --tty ) 表示启用一个伪终端，形成我们与 bash 的交互，如果没有它，我们无法看到 bash 内部的执行结果

**衔接容器**: `docker attach [name/tag/id]`

```sh
docker attach nginx
```

### 数据管理

数据管理又分为以下几个部分:

- 挂载方式
- 数据卷操作
- 数据卷容器
- 备份迁移

#### 挂载方式

在 docker 中, 为了方便与外面数据传递, docker 基于底层存储实现，提供了三种适用于不同场景的文件系统挂载方式：Bind Mount、Volume 和 Tmpfs Mount。

- Bind Mount

能够直接将宿主操作系统中的目录和文件挂载到容器内的文件系统中，通过指定容器外的路径和容器内的路径，就可以形成挂载映射关系，在容器内外对文件的读写，都是相互可见的。

`使用方式: -v <host-path>:<container-path>`

```sh
docker run -d --name nginx -v /webapp/html:/usr/share/nginx/html nginx:1.12
```

- Volume

也是从宿主操作系统中挂载目录到容器内，只不过这个挂载的目录由 Docker 进行管理，我们只需要指定容器内的目录，不需要关心具体挂载到了宿主操作系统中的哪里。

`使用方式: -v <container-path>`

```sh
sudo docker run -d --name webapp -v /webapp/storage webapp:latest

# 如需查看具体挂载信息
docker inspect webapp
```

- Tmpfs Mount

支持挂载系统内存中的一部分到容器的文件系统里，不过由于内存和容器的特征，它的存储并不是持久的，其中的内容会随着容器的停止而消失。

`使用方式: --tmpfs <container-path>`

```sh
sudo docker run -d --name webapp -v /webapp/storage webapp:latest

# 如需查看临时文件目录
docker inspect webapp
```

- Mount

在 --mount 中，我们可以通过逗号分隔这种 CSV 格式来定义多个参数。其中，通过 type 我们可以定义挂载类型，其值可以是：bind，volume 或 tmpfs。另外，--mount 选项能够帮助我们实现集群挂载的定义;

`使用方式: --mount <type>`

```sh
docker run -d --name webapp webapp:latest --mount 'type=volume,src=appdata,dst=/webapp/storage,volume-driver=local,volume-opt=type=nfs,volume-opt=device=<nfs-server>:<nfs-path>' webapp:latest
```

#### 数据卷操作

数据卷命名: `-v <name>:<container-path>`

```sh
docker run -d --name webapp -v appdata:/webapp/storage webapp:latest
```

共用数据卷: `使用同名的数据卷[name]即可`

```sh
docker run -d --name webapp -v html:/webapp/html webapp:latest
docker run -d --name nginx -v html:/usr/share/nginx/html:ro nginx:1.12
```

创建独立数据卷: `docker volume create`

```sh
docker volume create appdata
```

查看已创建的数据卷: `docker volume ls`

```sh
docker volume ls
```

删除数据卷: `docker volume rm`

```sh
docker volume rm appdata

# 加上-v参数可以一并删除容器关联的数据卷
docker rm -v webapp
```

删除未引用的数据卷: `docker volume prune`

```sh
docker volume prune -f
```

#### 数据卷容器

创建数据卷容器的方式很简单，由于不需要容器本身运行，因而我们找个简单的系统镜像都可以完成创建。

```sh
docker create --name appdata -v /webapp/storage ubuntu
```

引用数据卷容器: `--volumes-from <name>`

```sh
docker run -d --name webapp --volumes-from appdata webapp:latest
```

#### 备份迁移

要备份数据，我们先建立一个临时的容器，将用于备份的目录和要备份的数据卷都挂载到这个容器上

```sh
docker run --rm --volumes-from appdata -v /backup:/backup ubuntu tar cvf /backup/backup.tar /webapp/storage
```

如果要恢复数据卷中的数据，我们也可以借助临时容器完成

```sh
docker run --rm --volumes-from appdata -v /backup:/backup ubuntu tar xvf /backup/backup.tar -C /webapp/storage --strip
```

### 使用网络

容器使用网络这部分, 笔者将这部分分为以下几个部分来描述:

- 核心组成
- 容器互联
- 暴露端口
- 别名连接
- 创建网络
- 端口映射

#### 核心组成

容器网络实质上也是由 Docker 为应用程序所创造的虚拟环境的一部分，它能让应用从宿主机操作系统的网络环境中独立出来，形成容器自有的网络设备、IP 协议栈、端口套接字、IP 路由表、防火墙等等与网络相关的模块, 容器的网络主要由`沙盒`和`网络`以及`端点`组成

- **沙盒**: 提供了容器的虚拟网络栈
- **网络**: 组成 Docker 内部的虚拟子网
- **端点**: 主要目的是形成一个可以控制的突破封闭的网络环境的出入口

#### 容器互联

要让一个容器连接到另外一个容器，我们可以在容器通过`docker create`或`docker run`创建时通过`--link`选项进行配置

例如，这里我们创建一个 MySQL 容器，将运行我们 Web 应用的容器连接到这个 MySQL 容器上，打通两个容器间的网络，实现它们之间的网络互通。

```sh
  docker run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql
  docker run -d --name webapp --link mysql webapp:latest
```

#### 暴露端口

口的暴露可以通过 Docker 镜像进行定义，也可以在容器创建时进行定义。在容器创建时进行定义的方法是借助 --expose 这个选项。

```sh
docker run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=yes --expose 13306 --expose 23306 mysql:5.7
```

这里我们为 MySQL 暴露了 13306 和 23306 这两个端口，暴露后我们可以在 docker ps 中看到这两个端口已经成功的打开。

```sh
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                       NAMES
3c4e645f21d7        mysql:5.7           "docker-entrypoint.s…"   4 seconds ago       Up 3 seconds        3
```

#### 别名连接

纯粹的通过容器名来打开容器间的网络通道缺乏一定的灵活性，在 Docker 里还支持连接时使用别名来使我们摆脱容器名的限制。

```sh
sudo docker run -d --name webapp --link mysql:database webapp:latest
```

在这里，我们使用 `--link <name>:<alias>` 的形式，连接到 MySQL 容器，并设置它的别名为 database。当我们要在 Web 应用中使用 MySQL 连接时，我们就可以使用 database 来代替连接地址了。

```sh
String url = "jdbc:mysql://database:3306/webapp";
```

#### 创建网络

在 Docker 里，我们也能够创建网络，形成自己定义虚拟子网的目的。

docker CLI 里与网络相关的命令都以 docker network 开头，其中创建网络的命令是 `docker network create`。

```sh
sudo docker network create -d bridge individual
```

通过 `docker network ls` 或是 `docker network list` 可以查看 Docker 中已经存在的网络。

```sh
$ sudo docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
bc14eb1da66b        bridge              bridge              local
35c3ef1cc27d        individual          bridge              local
```

之后在我们创建容器时，可以通过`--network` 来指定容器所加入的网络，一旦这个参数被指定，容器便不会默认加入到 bridge 这个网络中了 ( 但是仍然可以通过 `--network bridge` 让其加入 )。

```sh
sudo docker run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=yes --network individual mysql:5.7
```

查看容器网络: `docker inspect`

```sh
$ sudo docker inspect mysql
[
    {
## ......
        "NetworkSettings": {
## ......
            "Networks": {
                "individual": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": [
                        "2ad678e6d110"
                    ],
                    "NetworkID": "35c3ef1cc27d24e15a2b22bdd606dc28e58f0593ead6a57da34a8ed989b1b15d",
                    "EndpointID": "41a2345b913a45c3c5aae258776fcd1be03b812403e249f96b161e50d66595ab",
                    "Gateway": "172.18.0.1",
                    "IPAddress": "172.18.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:12:00:02",
                    "DriverOpts": null
                }
            }
## ......
        }
## ......
    }
]
```

#### 端口映射

要映射端口，我们可以在创建容器时使用`-p`或者是 `--publish`选项。

端口映射格式: `-p <ip>:<host-port>:<container-port>`

```sh
sudo docker run -d --name nginx -p 80:80 -p 443:443 nginx:1.12
```

## Dockerfile

Dockerfile 是 Docker 中用于定义镜像自动化构建流程的配置文件, 通过 Dockerfile 我们可以更加清晰、明确的给定 Docker 镜像的制作过程, 文件体积小巧能更加方便实现容器迁移和集群部署

- Dockerfile 结构
- 常见 Dockerfile 指令
- Dockerfile 构建

### Dockerfile 结构

如果进行细分，我们可以将 Dockerfile 的指令简单分为五大类。

- 基础指令：用于定义新镜像的基础和性质。
- 控制指令：是指导镜像构建的核心部分，用于描述镜像在构建过程中需要执行的命令。
- 引入指令：用于将外部文件直接引入到构建镜像内部。
- 执行指令：能够为基于镜像所创建的容器，指定在启动时需要执行的脚本或命令。
- 配置指令：对镜像以及基于镜像所创建的容器，可以通过配置指令对其网络、用户等内容进行配置。

### 常见 Dockerfile 指令

**FROM**: `FROM` 指令指定一个基础镜像, 可以使用以下三种形式使用

```Dockerfile
FROM <image> [AS <name>]
FROM <image>[:<tag>] [AS <name>]
FROM <image>[@<digest>] [AS <name>]
```

**RUN**: `RUN` 指令之后，我们直接拼接上需要执行的命令，在构建时，Docker 就会执行这些命令，并将它们对文件系统的修改记录下来，形成镜像的变化;

主要用来用来指定构建镜像(build image) 过程中执行的命令

```sh
RUN <command>
RUN ["executable", "param1", "param2"]`
```

**CMD**: 指定容器运行时(`docker run`) 默认命令和参数，可以被 `docker run *** command` 的命令所覆盖

::: tip RUN & CMD & ENTRYPOINT 区别:
`RUN`不接任何命令, 同时没有`ENTRYPOINT`指定, 将默认执行 CMD

`RUN`不接任何命令, 同时存在`ENTRYPOINT`和`CMD`, `CMD`将作为`ENTRYPOINT`的参数

`RUN`后接 command, 同时存在`ENTRYPOINT`和`CMD`, `RUN`后的参数作为`ENTRYPOINT`的参数, `CMD`被忽略
:::

```sh
CMD ["executable","param1","param2"]
CMD ["param1","param2"]
CMD command param1 param2
```

**ENTRYPOINT**: 容器运行时执行的命令，但是可以接受`docker run *** args`或者 CMD 提供的参数，一般用于容器配置初始化

```sh
ENTRYPOINT ["executable", "param1", "param2"]
ENTRYPOINT command param1 param2
```

**EXPOSE**: 通过 EXPOSE 指令就可以为镜像指定要暴露的端口。

```sh
EXPOSE <port> [<port>/<protocol>...]
```

**VOLUME**: 定义基于此镜像的容器所自动建立的数据卷, 以便于持久化一些数据，比如数据库中存储数据的文件夹就需要单独处理

```sh
VOLUME ["/data"]
```

在 VOLUME 指令中定义的目录，在基于新镜像创建容器时，会自动建立为数据卷，不需要我们再单独使用 -v 选项来配置了。

**COPY & ADD**

在制作新的镜像的时候，我们可能需要将一些软件配置、程序代码、执行脚本等直接导入到镜像内的文件系统里，使用 `COPY` 或 ADD 指令能够帮助我们直接从宿主机的文件系统里拷贝内容到镜像里的文件系统中。

```sh
COPY [--chown=<user>:<group>] <src>... <dest>
ADD [--chown=<user>:<group>] <src>... <dest>

COPY [--chown=<user>:<group>] ["<src>",... "<dest>"]
ADD [--chown=<user>:<group>] ["<src>",... "<dest>"]
```

COPY 与 ADD 指令的定义方式完全一样，需要注意的仅是当我们的目录中存在空格时，可以使用后两种格式避免空格产生歧义。

对比 `COPY` 与 `ADD`，两者的区别主要在于 `ADD` 能够支持使用网络端的 `URL` 地址作为 src 源，并且在源文件被识别为压缩包时，自动进行解压，而 `COPY` 没有这两个能力。

虽然看上去 `COPY` 能力稍弱，但对于那些不希望源文件被解压或没有网络请求的场景，COPY 指令是个不错的选择。

### Dockerfile 构建

构建镜像的命令为 `docker build`。

```sh
sudo docker build ./webapp
```

如果我们的 Dockerfile 文件路径不在这个目录下，或者有另外的文件名，我们可以通过`-f`选项单独给出 Dockerfile 文件的路径。

```sh
$ sudo docker build -t webapp:latest -f ./webapp/a.Dockerfile ./webapp

# 在构建时我们最好总是携带上 -t 选项，用它来指定新生成镜像的名称。
$ sudo docker build -t webapp:latest ./webapp
```

## 组合应用

一个完整的应用, 需要用多个 docker, 这个章节来记录如何组建组合应用, 为何阐述清楚, 讲`docker compose`分为以下几个部分来写:

- Docker Compose 配置文件
