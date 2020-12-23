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

![avatr](/blog/skills/git-head.png)

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

## 未完待续
