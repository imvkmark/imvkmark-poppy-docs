<template><div><h1 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h1>
<h3 id="开发文件不需要自动加载" tabindex="-1"><a class="header-anchor" href="#开发文件不需要自动加载" aria-hidden="true">#</a> 开发文件不需要自动加载</h3>
<ul>
<li>项目中使用 IDE Helper 生成浏览器提示文件, 此文件在正式项目下不需要进行加载</li>
<li>Clockwork 不需要加载</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>"extra" : {
    "laravel" : {
        "dont-discover" : [
            "itsgoingd/clockwork",
            "barryvdh/laravel-ide-helper",
        ]
    }
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目说明" tabindex="-1"><a class="header-anchor" href="#项目说明" aria-hidden="true">#</a> 项目说明</h2>
<h3 id="项目目录树" tabindex="-1"><a class="header-anchor" href="#项目目录树" aria-hidden="true">#</a> 项目目录树</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>├── config              # 配置文件
├── modules             # 模块名称, 这里以system 模块 作为说明, 详细见 模块目录树
│   ├── finance
│   ├── order
│   └── ...
├── public
│   ├── docs            # 文档
│   ├── modules         # 模块资源
│   └── resources       # 资源项目 / 公共
│       ├── css
│       ├── js
│       └── scss
├── resources           # 资源源文件
│   ├── assets
│   ├── docs
│   ├── lang
│       ├── en
│       └── zh
├── storage             # 存储目录
│   ├── app             # 应用资源
│   ├── bootstrap       # 启动项目
│   ├── bower           # bower 文档
│   ├── clockwork       # 调试文件
│   ├── console         # 控制器
│   ├── framework       # 框架缓存
│   │   ├── cache
│   │   ├── sessions
│   │   └── views
│   ├── logs            # 日志
│   ├── phplint
│   ├── purifier
│   ├── sami
├── tests               # 测试目录
│   ├── MerchantApi
│   │   └── User
│   └── WebApi
│       └── User
└── vendor              # 第三方文档(只是预览, 不做详细说明)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码风格统一" tabindex="-1"><a class="header-anchor" href="#代码风格统一" aria-hidden="true">#</a> 代码风格统一</h2>
<ul>
<li>下载代码风格文件<a href="http://oss-test.iliexiang.com/develop/Code_Style-Mark.xml" target="_blank" rel="noopener noreferrer">Code_Style-Mark<ExternalLinkIcon/></a></li>
<li>打开 <code v-pre>Preferences | Editor | Code Style</code> , 在右侧 <code v-pre>设置</code> 中选择 <code v-pre>Import Scheme</code>, 导入刚才下载的 xml 文件</li>
<li>在 <code v-pre>Scheme</code> 选择框中选择刚才导入的风格进行使用</li>
</ul>
<p>phpstorm 常用快捷键</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ctrl/cmd + alt + L          # 格式化代码(提交代码前操作)
ctrl/cmd + alt + O          # 项目优化导入, 保证代码无冗余
ctrl/cmd + shift + n        # 查找文件
ctrl/cmd + alt + shift + n  # 查找函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码协同" tabindex="-1"><a class="header-anchor" href="#代码协同" aria-hidden="true">#</a> 代码协同</h2>
<h3 id="协同工具-git" tabindex="-1"><a class="header-anchor" href="#协同工具-git" aria-hidden="true">#</a> 协同工具 GIT</h3>
<p>代码使用 Git 进行代码协同</p>
<h3 id="开发工作流程-git-flow" tabindex="-1"><a class="header-anchor" href="#开发工作流程-git-flow" aria-hidden="true">#</a> 开发工作流程 Git Flow</h3>
<p>git-flow 并不是要替代 Git，它仅仅是非常聪明有效地把标准的 Git 命令用脚本组合了起来。 Release 管理是版本控制处理中的另外一个非常重要的话题, 详细见下边的文档. Git Flow
的详细说明文档 <a href="https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow" target="_blank" rel="noopener noreferrer">git-flow 的工作流程<ExternalLinkIcon/></a></p>
<p><strong>分支说明</strong>
<em>master</em> 只能用来包括产品代码。你不能直接工作在这个 master 分支上，而是在其他指定的，独立的特性分支中（这方面我们会马上谈到）。不直接提交改动到 <em>master</em> 分支上也是很多工作流程的一个共同的规则。
<em>develop</em> 是你进行任何新的开发的基础分支。当你开始一个新的功能分支时，它将是 <em>开发</em> 的基础。另外，该分支也汇集所有已经完成的功能，并等待被整合到 <em>master</em> 分支中。
这两个分支被称作为 <a href="https://www.git-tower.com/learn/git/ebook/cn/command-line/branching-merging/branching-workflows" target="_blank" rel="noopener noreferrer">长期分支<ExternalLinkIcon/></a>。它们会存活在项目的整个生命周期中。而其他的分支，例如针对功能的分支，针对发行的分支，仅仅只是临时存在的。它们是根据需要来创建的，当它们完成了自己的任务之后就会被删除掉。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 分支说明
master       : 线上分支
develop      : 开发分支
hotfix/2.0.3 : Bug 分支
feature/2.3  : 开发分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装</strong></p>
<p>安装 Git flow (参考文档: https://github.com/nvie/gitflow/wiki/Installation)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 初始化
git flow init -d

# 查看帮助
git flow feature help

# 分支说明
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]

# hotfix
# 创建修复分支
git flow hotfix start {missing-link}
#创建修复分支：
git flow hotfix finish {missing-link}

# feature
# 用于新版本开发时使用
git flow feature start 2.0.99
# 这个 “feature finish” 命令会把我们的工作整合到主 “develop” 分支中去，后需要手动推送到线上分支
git flow feature finish 2.0.99

# release
git flow release start 2.0.99
git flow release finish 2.0.99
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项</strong></p>
<ul>
<li>开发新功能或者修复的时候，需要先保证本地没有未上传的代码才可以创建</li>
<li>提交分支时，需先提交到本地之后，运行 git flow... 后，推送到线上 master 和 develop（两次推送）</li>
<li>进行 hotfix 进行修复以及 release 发布版本时候必须完整填写 <code v-pre>~/modules/build.md</code> 发版文件</li>
</ul>
<h3 id="代码提交规范" tabindex="-1"><a class="header-anchor" href="#代码提交规范" aria-hidden="true">#</a> 代码提交规范</h3>
<p>代码提交根据前缀来区分不同的提交内容</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 任务前缀
task # 859 子 订单列表界面调整/订单列表
# bug 前缀
bug # 308 用户管理操作
# 版本发布前缀
release # 2.3.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码审核" tabindex="-1"><a class="header-anchor" href="#代码审核" aria-hidden="true">#</a> 代码审核</h2>
<h3 id="代码要求" tabindex="-1"><a class="header-anchor" href="#代码要求" aria-hidden="true">#</a> 代码要求</h3>
<ul>
<li>参数命名符合规范</li>
<li>撰写负责模块的注释(注释包含类, 接口文档, 参数, 方法, 函数)</li>
<li>撰写单元测试, 保障功能/接口 正常使用</li>
</ul>
<h3 id="审核标准" tabindex="-1"><a class="header-anchor" href="#审核标准" aria-hidden="true">#</a> 审核标准</h3>
<ul>
<li>运行优化导入, 保证代码无冗余 <code v-pre>ctrl + alt + o</code></li>
<li>保证代码格式正确, 对文件夹进行代码格式化 <code v-pre>ctrl + alt + l</code>, 在 <code v-pre>src</code> 目录下运行</li>
<li>代码中不得存在编辑器提示的错误, 优化提示见<a href="https://snippets.cacher.io/snippet/8e1fe81c08d6f6591295" target="_blank" rel="noopener noreferrer">PHP Code Review<ExternalLinkIcon/></a></li>
<li>对开发功能进行抽检, 进行考评, 不符合标准的进行 5 元红包进行改正</li>
</ul>
<h2 id="ide" tabindex="-1"><a class="header-anchor" href="#ide" aria-hidden="true">#</a> IDE</h2>
<p><strong>忽略掉不需要的加载目录</strong></p>
<p>生成的文件, 不需要进行索引</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 前端文件
public/assets

# 调试
storage/clockwork

# 生成的文档
storage/sami
public/docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>将 public 目录设置为资源根目录</strong></p>
<p>因为 public 目录是对外输出目录, 所有的资源均以这个作为资源的识别</p>
</div></template>


