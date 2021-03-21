# Git 常用技巧

Git 中有很多冷知识, 本文将记录一部分很实用的小技巧

## `~` 和 `^` 的区别

该部分的内容, 笔者将分为以下几个部分:

- Git Commit Log
- HEAD^[num]
- HEAD~[num]
- HEAD^^
- HEAD~~

### Git Commit Log

![avatr](/blog/skills/images/git-head.png)

每条线上的雪花点右侧对应的 commitid,都属于该条线,开始和结尾的公共点共同拥有, 可以使用`--decorate`和`--graph`等参数简化 git 提交历史图

    git log --graph --decorate

上图第一条线拥有 `165f5a1->3cb9272->de87e10->b6de943`这几条提交记录:

### HEAD^[num]

用于选择第几条为主线,例如使用:

    git reset --hard HEAD^2

这个将从左往右选取第二条为主线,且回退一个版本,commit-id 将为:

    ae3d768->02c1b1b->b6de943

### HEAD~[num]

用于在当前主线『默认 master』,回退版本,例如使用:

    git reset --hard HEAD~1

这个将选取当前 master 主线,且回退一个版本,commit-id 将为:

    3cb9272->de87e10->b6de943

---

### HEAD^^

这种使用方式 HEAD 后面可以跟多个^,每个表示回退一个版本,效果同 HEAD~[num]

    git reset --hard HEAD^^

这个将选取第一条主线,且回退两个版本,commit-id 将为:

    de87e10->b6de943

---

### HEAD~~

这种使用方式 HEAD 后面可以跟多个~,每个表示回退一个版本,效果同 HEAD~[num]

    git reset --hard HEAD~~

这个将选取第一条主线,且回退两个版本,commit-id 将为:

    de87e10->b6de943

## 代码统计

如果想了解多人团队中同事或者自己的代码统计情况, `git`提供了相关的命令, 方便且直观

```sh
# 查看团队每个人的代码提交量
git shortlog -s -n
```

## Rebase

笔者总结了`rebase`的最常用三种用法(注意区间前开后闭):

- 合并多个 commit 为一个 commit

```sh
# 区间前开后闭
git rebase -i  <start-commit>  <end-commit>
```

- 复制某个分支的一段 commit 进入当前分支

```sh
# 被复制的分支上执行
git checkout -b  <new-branch>  <end-commit>

git rebase --onto  <target-branch>  <start-commit>^
```

- 合并远端分支

拉取远端代码的具体分支时,让当前合并历史更加好看,可以使用:

```sh
git pull --rebase origin <target-branch>
```

## 删除本地无效的分支

远端有很多分支已经被删除, 而本地仍然存在, 删除本地的无效的分支可以使用`prune`命令

```sh
# 列出已经失效的引用分支
git remote prune show  origin

# 删除失效的分支
git remote prune origin
```

## 恢复被删除的 stash 代码

有时候不小心清空了`stash list`中的备用代码, 想找回来怎么办? 可以使用以下命令:

```sh
# 撤销git stash clear的操作
git fsck --unreachable | grep commit | cut -d ' ' -f3 | xargs git log --merges --no-walk --grep=WIP
```

## Git Reset 的三个选项

- mixed(默认值)

回退一个版本,且会将暂存区的内容和本地已提交的内容全部恢复到未暂存的状态,不影响原来本地文件及未提交的本地修改

```sh
git reset (-–mixed) HEAD~1
```

- soft

回退一个版本,不清空暂存区,将已提交的内容恢复到暂存区,不影响原来本地的文件(未提交的也不受影响)

```sh
git reset -–soft HEAD~1
```

- hard

回退一个版本,清空暂存区,将已提交的内容的版本恢复到本地,本地的文件也将被恢复的版本替换

```sh
git reset -–hard HEAD~1
```

## Git 恢复误删的分支

- 使用 git log -g 找回之前提交的 commit_id

- 使用 git branch recover_branch[新分支] commit_id 命令用这个 commit 创建一个分支

- 切换到 recover_branch_abc 分支，检查文件是否存在

## 回滚本地分支

### git reset (--mixed) [commit id]

回退到指定版本,且会将暂存区的内容和本地已提交的内容全部恢复到未暂存的状态,不影响原来本地文件(未提交的也不受影响)
该参数`--mixed`是`git reset`的默认参数
例如需要回退一个版本, 执行下面命令:

```sh
// 回退一个版本
git reset HEAD~1
```

需要回退到某个 commitid(`提交id通过git log查看`), 如需要回滚到`4a50c9f`,则执行

```sh
git reset 4a50c9f
```

### git reset --soft [commit id]

回退到指定版本,不清空暂存区,将已提交的内容恢复到暂存区,不影响原来本地的文件(未提交的也不受影响)

### git reset --hard [commit id]

回退到指定版本,清空暂存区,将已提交的内容的版本恢复到本地,本地的文件也将被恢复的版本替换

### git revert [commit id]

生成一个新的 commit，将指定的 commit 内容从当前分支上撤除

### git revert -m [parent Id][commit id]

当需要 revert 回滚两个分支合并后的一个公共提交, 此时需要加上`-m`选项来确认是第几个父 id(`也就是确认回滚哪一条分支`); 可以通过`git show [提交id]` 来查看有几个父 id

例子: 回滚到 cad132423 这个公共提交的第一个父节点
`git revert -m 1 cad132423`

## 回滚远端分支

案例: 需要回滚 master 上面的代码到 4a50c9f

### 第一种方法

以下是步骤:

- 先回滚到需要移除的 comitid 的前一次正确 commitid

```sh
git checkout -b remote-v1 4a50c9f
```

- 合并策略为强行保留现在的分支(假合并)
  合并中完全采用 remote-v1 的代码

```sh
git merge -s ours master
```

- 推送到远程分支

```sh
// 也可以使用 git push origin HEAD:master
git push origin remote-v1:master
```

### 第二种方法

以下是步骤:

- 先移除有代码错误的 comitid, 撤销一连串的 id 用`commidId..commitId`, 参数`--no-commit`是用于后面手动提交

```sh
git revert --no-commit f7742cd..551c408
```

- 正常提交代码

```sh
git commit -a -m 'This reverts commit 7e345c9 and 551c408'
git push origin HEAD:master
```

### 第三种方法[极不推荐]

该方法会强行覆盖远端分支的代码, 稍微不慎, 会导致其他人的代码丢失

以下是步骤:

- 使用文章开头的方式回滚本地分支
- 强行提交到远端分支

```sh
git push origin master -f

## 未完待续
```
