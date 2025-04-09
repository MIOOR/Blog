---
title: MySQL 安装
date: 2025-04-09
category: 教程
tags:
  - MySQL
---
## 下载 MySQL
点击[此处](https://dev.mysql.com/downloads/installer/)进入下载页面，下载最新版本的 MySQL（写时最新为8.0.41）。如果你需要下载历史版本，请点击 `Archives` 标签后选择对应版本。
![MySQL下载界面](MySQL%20安装/Pasted%20image%2020250409145929.png)
点击 `Download` 按钮进入下载页，点击如下区域即可下载。
![下载页](MySQL%20安装/Pasted%20image%2020250409150446.png)

## 安装 MySQL
### 安装类型选择
双击安装包，运行安装软件。在弹出的选项里选择一个合适的安装类型，如果不知道推荐选 `Full` 选项。然后点击 `Next` 执行。
![安装类型](MySQL%20安装/Pasted%20image%2020250409150911.png)
### 需求环境检查
MySQL 安装需要 VC++ 2019 的支持，如果点击 `Execute` 执行失败，即缺少运行环境。点击如下链接即可下载环境包：
适用于32位Windows：[VC++ 2015 - 2022 X86](https://aka.ms/vs/17/release/vc_redist.x86.exe)
适用于64位Windows：[VC++ 2015 - 2022 X64](https://aka.ms/vs/17/release/vc_redist.x64.exe)
下载后安装完毕即可。之后再次点击 `Excute` ，Status 为 Done 即可。最后点击 `Next` 。
![环境检查](MySQL%20安装/Pasted%20image%2020250409151844.png)
![缺失需要环境](MySQL%20安装/Pasted%20image%2020250409152140.png)
### 组件安装
点击 `Execute` ，安装成功后点击 `Next` 。

![安装组件](MySQL%20安装/Pasted%20image%2020250409153121.png)
![组件安装成功](MySQL%20安装/Pasted%20image%2020250409153457.png)
### 产品设置
#### MySQL Server 设置
产品参数设置的大部分选项都只需要使用默认设置即可。
![产品设置](MySQL%20安装/Pasted%20image%2020250409153608.png)
由于我的电脑是作为开发环境，Config Type 就使用的 `Development Computer` 模式。其余的使用默认值。
![网络配置](MySQL%20安装/Pasted%20image%2020250409153722.png)
![登录方式](MySQL%20安装/Pasted%20image%2020250409153937.png)
此密码是根用户（root）的密码，我是开发环境而非生产环境，就使用的简单密码 root 。为了数据安全，你也可以点击 `Add User` 来添加不同权限的用户。
![账户密码配置](MySQL%20安装/Pasted%20image%2020250409154039.png)
设置 MySQL Windows 服务的名称，我使用的它默认提供的名称。
![Windows服务名称设置](MySQL%20安装/Pasted%20image%2020250409154141.png)
文件权限，使用默认配置即可。
![服务器文件权限配置](MySQL%20安装/Pasted%20image%2020250409154242.png)
设置完毕后，点击 `Execute` 应用上述的配置项。
![应用上述配置项](MySQL%20安装/Pasted%20image%2020250409154329.png)
![配置项应用成功](MySQL%20安装/Pasted%20image%2020250409154441.png)
#### MySQL Router 设置
大部分同上，默认选项即可。
![产品设置](MySQL%20安装/Pasted%20image%2020250409154554.png)
个人使用的数据库一般没有 InnoDB 服务器集群，可以忽略掉。
![路由设置](MySQL%20安装/Pasted%20image%2020250409154740.png)
此处主要是测试刚才设置的 MySQL 服务器是否能正常联通。在 Password 里输入 root 账户的密码，之后点击 `Check` ，如果状态如下图所示，即正常。
![测试与MySQL服务的连通性](MySQL%20安装/Pasted%20image%2020250409154855.png)
点击 `Execute` 应用最后的更改。
![应用更改](MySQL%20安装/Pasted%20image%2020250409154957.png)
![应用更改成功](MySQL%20安装/Pasted%20image%2020250409155046.png)
当为此界面时， MySQL 就已经成功安装了。
![安装成功](MySQL%20安装/Pasted%20image%2020250409155143.png)
## 配置 MySQL WorkBench
打开 MySQL WorkBench 后，点击 MySQL Connections 右侧的加号，添加刚配置好的 MysQL 服务。

![MySQL Workbench主界面](MySQL%20安装/Pasted%20image%2020250409155248.png)
在（1）处输入之前配置好的 MySQL 服务名称，我这是使用的默认名称 MySQL80 。点击（2）处后输入对应 Username 的密码。最后点击（3）进行连通性测试。
![连接配置](MySQL%20安装/Pasted%20image%2020250409155650.png)
弹出如下框时，表示连通性正常。
![成功连接](MySQL%20安装/Pasted%20image%2020250409155753.png)
之后，会在主界面生成如下所示的服务图标，方便快捷进入。
![创建的服务器](MySQL%20安装/Pasted%20image%2020250409155855.png)