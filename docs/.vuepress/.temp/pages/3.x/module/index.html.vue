<template><div><h1 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h1>
<h2 id="功能开发流程" tabindex="-1"><a class="header-anchor" href="#功能开发流程" aria-hidden="true">#</a> 功能开发流程</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>明白需求 --> 拆分功能点 (整理逻辑) --> 写代码 --> 完成功能
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="模块文件树" tabindex="-1"><a class="header-anchor" href="#模块文件树" aria-hidden="true">#</a> 模块文件树</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>├── configurations       # 配置文件
│   ├── permissions.yaml
├── docs                 # 技术文档
├── resources            # 资源文件
│   ├── config           # 发布的配置文件
│   ├── lang             # 多语言支持包的位置
│   │   └── zh
│   ├── mixes            # mixs : 混杂的文件
│   │   └── poppy        # poppy 核心包 (普通页面布局)
│   │       └── backend
│   ├── scss             # sass 预处理文件 (普通页面布局需要)
│   │   ├── backend
│   │   ├── basic
│   │   └── develop
│   └── views            # 视图文件
│       ├── backend      # 视图 - 后台
│       ├── develop      # 视图 - 开发者平台
│       ├── email        # 视图 - email
│       └── tpl          # 视图 - 核心模板
├── src
│   ├── action           # action
│   ├── backend          # 后端模块管理
│   ├── classes          # 基础类
│   │   ├── auth         # 权限
│   │   │   ├── guard    # 权限 - guard
│   │   │   └── provider # 权限 - provider
│   │   ├── payment      # 支付
│   │   └── traits       # traits
│   ├── commands         # 命令
│   ├── database         # 数据库
│   │   ├── factories    # 数据库 - 工厂
│   │   ├── migrations   # 数据库 - migrations
│   │   └── seeds        # 数据库 - 种子
│   ├── events           # 事件, 事件使用 Event 后缀
│   ├── extension        # 扩展包管理(开发用, 以后可能会废弃掉)
│   ├── http             # 路由和中间件
│   │   ├── middleware
│   │   └── routes
│   ├── listeners        # 事件 - 监听器
│   ├── mail             # 邮件
│   ├── models           # 模型
│   │   ├── filters      # 模型 - 过滤器
│   │   ├── policies     # 模型 - 策略
│   │   └── resources    # 模型 - 资源
│   ├── module           # 模块
│   │   ├── listeners
│   │   └── repositories
│   ├── notifications    # 通知
│   ├── permission       # 权限
│   │   ├── commands
│   │   ├── exceptions
│   │   ├── middlewares
│   │   └── repositories
│   ├── rbac             # rbac 角色包
│   │   ├── contracts
│   │   ├── facades
│   │   ├── helper
│   │   ├── middleware
│   │   └── traits
│   ├── request          # 控制器
│   │   ├── api_v1       # 控制器 - Api
│   │   │   ├── backend
│   │   │   ├── pam
│   │   │   └── util
│   │   ├── backend      # 后端页面
│   │   ├── develop      # 开发平台
│   │   └── system       # 后台系统入口
│   └── setting          # 系统设置
└── tests                # 单元测试
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注册服务" tabindex="-1"><a class="header-anchor" href="#注册服务" aria-hidden="true">#</a> 注册服务</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php namespace Poppy\System;

/**
 * 定义模块名称
 * 模块可以使用 module.{module} , 也可以直接是 {module}
 */
protected $name = 'poppy.system';

// 注册事件监听器
protected $listens = [
    \Illuminate\Auth\Events\Failed::class               => [
        Listeners\AuthFailed\LogListener::class,
    ],
];

// 注册策略
protected $policies = [
    PamRole::class    => PamRolePolicy::class,
    PamAccount::class => PamAccountPolicy::class,
];

/**
 * 启动
 */
public function boot()
{
    parent::boot($this->name);

    // 注册 api 文档配置
    $this->publishes([
        __DIR__ . '/../resources/config/sami.php'   => storage_path('sami/config.php'),
        __DIR__ . '/../resources/config/module.php' => base_path('config/module.php'),
    ], 'poppy-module');

    $path = poppy_path($this->name);

    // 配置文件
    $this->mergeConfigFrom($path . '/resources/config/module.php', 'module');

    $this->bootConfigMail();
}

// 注册服务
public function register()
{
    $this->app->register(Http\MiddlewareServiceProvider::class);
    // ...
    $this->app->register(Permission\PermissionServiceProvider::class);

    $this->registerConsole();

    $this->registerSchedule();
}

// 计划任务
private function registerSchedule()
{
    app('events')->listen('console.schedule', function (Schedule $schedule) {
        $schedule->command('py-system:user', ['auto_enable'])
            ->everyFiveMinutes()->appendOutputTo($this->consoleLog());
    });
}

// 注册命令
private function registerConsole()
{
    $this->commands([
        Commands\UserCommand::class,
        ...
        Permission\Commands\PermissionCommand::class,
    ]);
}

// config 覆盖
private function bootConfigMail()
{
    config([
        'mail.driver'       => sys_setting('system::mail.driver') ?: config('mail.driver'),
    ]);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1.语言包
 - resource/lang/zh/validator.php
2.相应的验证规则
 - Rule 类
3.FrameworkServiceProvider.php 验证正则规则
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h2>
<p>设置使用 Form Setting 来进行设置, 详细见 Form 部分</p>
<h2 id="模块约定" tabindex="-1"><a class="header-anchor" href="#模块约定" aria-hidden="true">#</a> 模块约定</h2>
<h2 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h2>
<p><strong>缓存 Key 命名</strong></p>
<p>缓存 Key 放置在模型/Action 的常量中, 命名规范是</p>
<p><code v-pre>CK_{Key}</code></p>
<p>Key : 命名的标识</p>
<p><strong>缓存命中命名</strong></p>
<p>缓存命中包含 Atomic / Funnel 这种, 缓存命中放置在 <code v-pre>Redis(0)</code> 仓库中,
命名规范为</p>
<p><code v-pre>prefix:redis:{function tag}:{key}</code></p>
<p>function tag : 功能标签, 用来进行文件夹区分 key : 唯一标识符</p>
</div></template>


