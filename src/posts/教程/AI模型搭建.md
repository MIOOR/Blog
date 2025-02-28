---
title: 通过硅基流动来搭建自己的AI模型
date: 2025-02-27
category: 教程
tag:
  - Deepseek
---

## 使用云端大模型

### 硅基流动账户配置

#### 账号注册

可以通过[此链接](https://cloud.siliconflow.cn/i/QARWrBHv)进行账号注册。

![硅基流动注册页面](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227134405866.png)

可以直接输入手机号进行注册或登录。

#### API 密钥生成

![硅基流动主页面](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227140541024.png)

登录后在左侧侧边栏选择 `API 密钥` 选项

![硅基流动 API 密钥管理页面](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227140855615.png)

在 API 密钥页面在右上角选择 `新建API密钥` 。

![新建 API 密钥](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227141203386.png)

之后在弹出的对话框里输入待生成密钥的备注，之后点击 `新建密钥` 按钮即可。之后就会生成如上图所示的密钥了（刚注册的账户是没有密钥的）。

### 用户端软件配置

#### Windows 平台

##### Cherry Studio 安装

安装 [Cherry Studio](https://cherry-ai.com/) 客户端。如果点击 `立即下载` 后下载速度很慢或者无法下载，请点击 `其他版本或备用路线下载` ，之后任选一个链接来下载。

![备用下载页面](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227151201544.png)

##### 添加 AI 模型

安装完成后打开 Cherry Studio 客户端。之后点击侧边栏左下角的设置选项。

![Cherry Studio 客户端主页面](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227151506880.png)

进入设置页面后，请确认菜单栏 1、2 是按如下选择的。之后在 3 处粘贴之前生成的密钥（复制密钥流程见下图）。

![Cherry Studio 客户端设置页面](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227152205282.png)

![复制密钥](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227152632333.png)

![复制密钥成功](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227153828426.png)

之后点在 `模型广场` 页面选择并点击 `deepseek-ai/DeepSeek-R1-Distill-Qwen-7B` 模型。

![选择模型](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227154543863.png)

然后点击复制按钮复制模型名称。

![复制模型名称](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227155021990.png)

![复制模型名称成功](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227155157347.png)

之后在 Cherry Studio 里的设置页面的右边第三个内容框里往下滑动到底，点击 `添加` 按钮，把刚才复制的模型名称填写到第一个框中（剩余框会自动填充），最后点击 `添加模型` 按钮。

![添加模型](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227155929250.png)

![填写模型名称](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227160046532.png)

![填写完成](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227160155392.png)

![添加模型成功](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227160357142.png)

在设置页面点击 `默认模型` 选项，之后把 2、3、4 依次改成 `deepseek-ai/DeepSeek-R1-Distill-Qwen-7B` 。

![更改对话模型](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227160837247.png)

![选择对话模型](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227161118930.png)

![更改模型成功](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227161210692.png)

##### 使 AI 具备网络搜索功能（可选）

点击设置页面的 `网络搜索`（1）选项，然后点击 `点击这里获取密钥选项`（2）或者点击[这里](https://app.tavily.com/home)，使用邮箱（3）或 Google 账号（1）或 Github 账号（2）注册。

![网络搜索界面](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227170008866.png)

![tavily 注册](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227170701427.png)

注册完成之后点击复制按钮来复制 KEY，之后将 KEY 粘贴到 Cherry Studio 里面。

![复制 KEY](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227171023594.png)

![粘贴 KEY](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227171240976.png)

##### 选择 AI 模型

点击（1）处，选择 `deepseek-ai/DeepSeek-R1-Distill-Qwen-7B` 模型。如果设置了网络搜索功能，则可以点击（2）开启网络搜索功能。

![对话页面](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227171833206.png)

![模型选择弹窗](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250227172031377.png)

#### Android（安卓）平台

##### Chatbox 安装

点击[此处](https://chatboxai.app/zh/install?download=android_apk)下载 APK 安装包或访问[官网](https://chatboxai.app/zh)下载。之后点击下载好的 APK 来安装软件。

##### 参数配置

进入软件后会有一个弹窗，选择 `使用自己的 API Key 或本地模型`。

![Chatbox 主页面弹窗](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250228105650059.png)

在新弹窗选择 `SiliconFlow API` 。

![模型 API 选择](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250228110537019.png)

把[硅基流动的密钥](https://cloud.siliconflow.cn/account/ak)粘贴到如下的框中。

![填入密钥](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250228110639148.png)

之后点击下拉菜单栏（1），在选项里下划找到 `deepseek-ai/DeepSeek-R1-Distill-Qwen-7B`（2）模型，然后点击 `保存` 即可。

![模型选择](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250228110918357.png)

点击如下所示按钮即可开启模型联网功能。

![开启联网功能](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250228111246103.png)

![启用联网功能成功](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250228111403748.png)

## 使用本地大模型

### 安装 Ollama

访问[官网](https://ollama.com/)下载安装

![Ollama 官网](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250228131013692.png)

安装完成后在 CMD 中输入 `ollama -v` 验证安装是否成功

![Ollama 版本](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250228131221231.png)

### 拉取模型

根据个人电脑配置选择模型

| 模型版本             | 参数量 | 显存需求（FP16）                                     | 推荐 GPU（单卡）                     | 多卡支持 | 量化支持 | 适用场景                                                     |
| -------------------- | ------ | ---------------------------------------------------- | ------------------------------------ | -------- | -------- | ------------------------------------------------------------ |
| **DeepSeek-R1-1.5B** | 15亿   | 3GB                                                  | GTX 1650（4GB显存）                  | 无需     | 支持     | 低资源设备部署（树莓派、旧款笔记本）、实时文本生成、嵌入式系统 |
| **DeepSeek-R1-7B**   | 70亿   | 14GB                                                 | RTX 3070/4060（8GB显存）             | 可选     | 支持     | 中等复杂度任务（文本摘要、翻译）、轻量级多轮对话系统         |
| **DeepSeek-R1-8B**   | 80亿   | 16GB                                                 | RTX 4070（12GB显存）                 | 可选     | 支持     | 需更高精度的轻量级任务（代码生成、逻辑推理）                 |
| **DeepSeek-R1-14B**  | 140亿  | 32GB                                                 | RTX 4090/A5000（16GB显存）           | 推荐     | 支持     | 企业级复杂任务（合同分析、报告生成）、长文本理解与生成       |
| **DeepSeek-R1-32B**  | 320亿  | 64GB                                                 | A100 40GB（24GB显存）                | 推荐     | 支持     | 高精度专业领域任务（医疗/法律咨询）、多模态任务预处理        |
| **DeepSeek-R1-70B**  | 700亿  | 140GB                                                | 2x A100 80GB/4x RTX 4090（多卡并行） | 必需     | 支持     | 科研机构/大型企业（金融预测、大规模数据分析）、高复杂度生成任务 |
| **DeepSeek-671B**    | 6710亿 | 512GB+（单卡显存需求极高，通常需要多节点分布式训练） | 8x A100/H100（服务器集群）           | 必需     | 支持     | 国家级/超大规模 AI 研究（气候建模、基因组分析）、通用人工智能（AGI）探索 |

更多版本可以查看[这里](https://ollama.com/library/deepseek-r1) 。

我的电脑配置是

| System | Windows 11 专业版                 |
| ------ | --------------------------------- |
| CPU    | 12th Gen Intel^®^ Core™ i7-12700F |
| RAM    | 32G                               |
| GPU    | NVIDIA^®^ GeForce RTX™ 3060 12G   |
| Disk   | SAMSUNG MZVL4512HBLU-00BL7 512G   |

![电脑概况](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250228132343349.png)

所以我选择的是 **DeepSeek-R1-8B**。

![选取模型](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250228170951459.png)

命令行输入 `ollama run deepseek-r1:8b` 拉取 DeepSeek 模型。几分钟后安装完成就可以在控制台进行对话了。

### 配置交互页面（可选）

使用命令提示符与 DeepSeek 对话并不友好，为了更好的体验，我们可以安装 [WebUI](https://webui.me/) 。

命令行输入 `pip install open-webui` 即可安装。但需注意，Python 版本需要 3.11 及以上。

完成后，输入 `open-webui serve` 即可看到如下界面。

![open webui 控制台界面](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250228133447379.png)

再打开 `http://localhost:8080/` 选取模型后就可以使用了。

![open webui 网络界面](./AI%E6%A8%A1%E5%9E%8B%E6%90%AD%E5%BB%BA/image-20250228133644819.png)
