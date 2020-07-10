# Crontab

## 作用

**crontab** 命令，可以在固定的间隔时间执行指定的系统指令或 `shell script` 脚本。时间间隔的单位可以是分钟、小时、日、月、周及以上的任意组合。这个命令非常适合周期性的日志分析或数据备份等工作

接下来的内容中将通过以下几个部分来讲解如何使用**crontab**：

- 命令格式
- 命令参数
- 任务文件格式
- macos 环境使用
- 使用实例

## 命令格式

```sh
crontab [-u user] file crontab [-u user][ -e | -l | -r ]
```

## 命令参数

- `-u` user：用来设定某个用户的 crontab 服务；
  file：file 是命令文件的名字,表示将 file 做为 crontab 的任务列表文件并载入 crontab。如果在命令行中没有指定这个文件，crontab 命令将接受标准输入（键盘）上键入的命令，并将它们载入 crontab。
- `-e`：编辑某个用户的 crontab 文件内容。如果不指定用户，则表示编辑当前用户的 crontab 文件。
- `-l`：显示某个用户的 crontab 文件内容，如果不指定用户，则表示显示当前用户的 crontab 文件内容。
- `-r`：从/var/spool/cron 目录中删除某个用户的 crontab 文件，如果不指定用户，则默认删除当前用户的 crontab 文件。
- `-i`：在删除用户的 crontab 文件时给确认提示。

## 任务文件格式

分 时 日 月 星期 要运行的命令

- 第 1 列分钟 0 ～ 59
- 第 2 列小时 0 ～ 23（0 表示子夜）
- 第 3 列日 1 ～ 31
- 第 4 列月 1 ～ 12
- 第 5 列星期 0 ～ 7（0 和 7 表示星期天）
- 第 6 列要运行的命令

```sh
# 示例
0 8-12 * * * /root/backup.sh
```

## macos 开启

在`macos`环境中首先要检查是否已经安装了`crontab`, 使用如下命令查看:

```sh
# 查看
sudo launchctl list | grep cron
# 如第一步不存在这新建crontab
sudo touch /etc/crontab
# 编辑crontab任务
crontab -e
```

同时, 在`macos`环境中常用的开启重启的命令:

```sh
sudo /usr/sbin/cron start
sudo /usr/sbin/cron restart
sudo /usr/sbin/cron stop
```

## 使用实例

### 实例 1：每 1 分钟执行一次 myCommand

`* * * * * myCommand`

### 实例 2：每小时的第 3 和第 15 分钟执行

`3,15 \* \* \* _ myCommand`

### 实例 3：在上午 8 点到 11 点的第 3 和第 15 分钟执行

`3,15 8-11 _ \* _ myCommand`

### 实例 4：每隔两天的上午 8 点到 11 点的第 3 和第 15 分钟执行

`3,15 8-11 _/2 \* _ myCommand`

#### 实例 5：每周一上午 8 点到 11 点的第 3 和第 15 分钟执行

`3,15 8-11 _ _ 1 myCommand`

#### 实例 6：每晚的 21:30 重启 smb

`30 21 _ \* \* /etc/init.d/smb restart`
