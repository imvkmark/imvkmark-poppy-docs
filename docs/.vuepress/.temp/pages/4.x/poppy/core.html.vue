<template><div><h1 id="核心" tabindex="-1"><a class="header-anchor" href="#核心" aria-hidden="true">#</a> 核心</h1>
<h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2>
<blockquote>
<p>Poppy 核心模块, system 基于本模块</p>
</blockquote>
<h3 id="权限操作" tabindex="-1"><a class="header-anchor" href="#权限操作" aria-hidden="true">#</a> 权限操作</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php artisan py-core:permission {slug}
{slug}:
    - list   : 获取权限列表
    - init   : 权限初始化
    - menus  : 检查菜单[todo Undefined index: children]
    - assign : 将权限赋值给指定的用户组
    - check  : 权限检测
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档以及检查工具" tabindex="-1"><a class="header-anchor" href="#文档以及检查工具" aria-hidden="true">#</a> 文档以及检查工具</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php artisan py-core:doc {slug}
{slug}:
    - api   : 生成api文档[apidoc 生成目录]
    - cs    : code style - fix , 代码格式修复(todo 以后IDE 来做)
    - cs-pf :
    - lint  : 安装检测PHP语法错误的工具
    - php   : 生成 php api 文档
    - log   : 查看当天的 storage 日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查代码" tabindex="-1"><a class="header-anchor" href="#检查代码" aria-hidden="true">#</a> 检查代码</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php artisan py-core:inspect {slug}
{slug} :
    - apidoc     : 检查api文档(需要指定目录)
    - class      : 方法检测
    - pages      : 检测页面Key[todo 以后会删掉]
    - file       : 检测文件命名[文件类和文件位置不匹配]
    - database   : 检测数据库配置
    - controller : 列出所有功能点
    - action     : 列出所有业务逻辑
    - seo        : 生成 seo 项目
    - db_seo     : 生成数据库SEO 数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运维工具" tabindex="-1"><a class="header-anchor" href="#运维工具" aria-hidden="true">#</a> 运维工具</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php artisan py-core:op {slug}
{slug} :
    - mail   : 发送运维邮件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成-php-api-文档" tabindex="-1"><a class="header-anchor" href="#生成-php-api-文档" aria-hidden="true">#</a> 生成 php api 文档</h3>
<blockquote>
<p>先睹为快, 使用 doctum 生成的 php api 地址 <a href="http://v4.poppy-framework.com/docs/php/" target="_blank" rel="noopener noreferrer">PoppyV4 Api<ExternalLinkIcon/></a></p>
</blockquote>
<p><strong>生成配置文件</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan vendor:publish --tag=poppy
...
Copied File [/modules/system/resources/config/doctum-config.php] To [/storage/doctum/config.php]
Publishing complete.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>下载 doctum</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan py-core:doc php

Please Run Command To Install doctum.phar:
curl https://doctum.long-term.support/releases/latest/doctum.phar --output /path/of/doctum/doctum.phar

# 下载之后再运行

$ php artisan py-core:doc php
Please Run Command:
php /path/of/doctum/doctum.phar update /path/of/doctum/config.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们运行命令来生成 php 文档</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php /path/of/doctum/doctum.phar update /path/of/doctum/config.php
 Updating project

Version master
  Parsing   done
  Rendering done

 Version    Updated C    Removed C
   master         1224            0

 Version    Updated C    Updated N    Removed C    Removed N
   master            2            0            0            0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行完成后会在 <code v-pre>public/docs/php</code> 文件夹下生成标准的 html 文档, 这样我们就可以进行访问了.</p>
<p>如果默认的配置无法满足你的要求可以编辑 <code v-pre>resources/doctum/doctum.php</code> 文件来修改需要生成文档的文件夹和目标路径.</p>
<p>生成文档如下</p>
<p><img src="https://file.wulicode.com/note/2021/10-23/11-33-00249.png" alt=""></p>
<p>配置文件 : <a href="https://github.com/dadi-cn/poppy-core/blob/4.1/resources/config/doctum-config.php" target="_blank" rel="noopener noreferrer">doctum-config.php<ExternalLinkIcon/></a></p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<p>文件位置 : <code v-pre>config/poppy.php</code></p>
<h3 id="apidoc" tabindex="-1"><a class="header-anchor" href="#apidoc" aria-hidden="true">#</a> apidoc</h3>
<ul>
<li>Type : <code v-pre>array</code></li>
</ul>
<p>api 接口文档配置, 改文档可以使用 <code v-pre>php artisan py-core:doc api</code> 来生成文档, 定义如下</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'apidoc' => [
    ...
	'web' => [
        // 标题
        'title'            => '前台接口',
        // 方法
        'method'           => 'post',
        // 默认访问地址
        'default_url'      => 'api_v1/system/auth/login',
        // 匹配 src/Http/Request 的文件目录来生成文件, 使用 glob 规则匹配 
        'match'      => 'api.*/web|ApiWeb|api/web|ApiV1',
	],
	...
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="op-mail" tabindex="-1"><a class="header-anchor" href="#op-mail" aria-hidden="true">#</a> op_mail</h3>
<ul>
<li>Type : <code v-pre>string</code></li>
<li>Default : <code v-pre>env('CORE_OP_MAIL', '')</code></li>
</ul>
<p>后台可支持发送测试邮件, 这里配置发送人的邮箱</p>
<h3 id="rbac" tabindex="-1"><a class="header-anchor" href="#rbac" aria-hidden="true">#</a> rbac</h3>
<ul>
<li>Type : <code v-pre>array</code></li>
</ul>
<p>设置 RBAC 模型以及外键 KEY, 这里默认设定的是 <code v-pre>poppy/system</code> 模块的模型, 不使用此模块可以自行实现模型定义以及关联关系</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'rbac'       => [
    // 角色模型
    'role'            => \Poppy\System\Models\PamRole::class,
    // 账号模型
    'account'         => \Poppy\System\Models\PamAccount::class,
    // 角色账号模型
    'role_account'    => \Poppy\System\Models\PamRoleAccount::class,
    // 权限模型
    'permission'      => \Poppy\System\Models\PamPermission::class,
    // 角色权限模型
    'role_permission' => \Poppy\System\Models\PamPermissionRole::class,
    // 角色外键
    'role_fk'         => 'role_id',
    // 账号外键
    'account_fk'      => 'account_id',
    // 权限外键
    'permission_fk'   => 'permission_id',
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h2>
<h3 id="缓存定义" tabindex="-1"><a class="header-anchor" href="#缓存定义" aria-hidden="true">#</a> 缓存定义</h3>
<p>缓存使用扁平化管理, 缓存函数是在 laravel 的基础上加了一层标签, 用法遵循 laravel 缓存使用</p>
<p>缓存一般采用如下命名</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sys_cache('{slug}')->get('{name}')
slug    : 根据模块目录来进行判定
    例如 poppy system 模块命名为 py-system
    例如 poppy core 模块命名为 py-core
    例如 poppy core rbac 模块命名为 py-core-rbac(因为需要用到 flush 方法, 这里采用标签来区分, 而不是使用 type)
name    : 代表的是缓存的名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了保证缓存名称的唯一性我们约定
slug : poppy 模块 : <code v-pre>py-{module}</code></p>
<p>name : name 使用静态方法定义, 支持传参</p>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<p>例如 Area 模块的我们定义缓存函数</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">namespace</span> <span class="token package">Poppy<span class="token punctuation">\</span>Area<span class="token punctuation">\</span>Classes</span><span class="token punctuation">;</span>


<span class="token keyword">class</span> <span class="token class-name-definition class-name">PyAreaDef</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * ID -> PID 映射
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">ckMatchIdPid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">'match_id_pid'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">bool</span></span> <span class="token parameter">$clear</span> 是否清除
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function-definition function">matchKv</span><span class="token punctuation">(</span><span class="token variable">$clear</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$clear</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">sys_cache</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'py-area'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">forget</span><span class="token punctuation">(</span><span class="token class-name static-context">PyAreaDef</span><span class="token operator">::</span><span class="token function">ckMatchIdPid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">sys_cache</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'py-area'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">remember</span><span class="token punctuation">(</span><span class="token class-name static-context">PyAreaDef</span><span class="token operator">::</span><span class="token function">ckMatchIdPid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">AreaContent</span><span class="token operator">::</span><span class="token function">pluck</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'parent_id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'id'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化" aria-hidden="true">#</a> 持久化</h2>
<p>持久化的流程是将数据放入到缓存, 然后所有的操作都会缓存起来, 然后通过计划任务将数据同步到数据库</p>
<h3 id="缓存-1" tabindex="-1"><a class="header-anchor" href="#缓存-1" aria-hidden="true">#</a> 缓存</h3>
<p>持久化使用的缓存是 <code v-pre>tag:py-core:persist</code> KEY</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>tag:py-core:persist:
    {table}_insert : redis 列表
        [{
            key,    # id 
            insert  # 插入的条件语句
        }]
    {table}_update : redis hash
        [{
            where,  # 查询条件
            update  # 更新内容
        }]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="insert-持久化" tabindex="-1"><a class="header-anchor" href="#insert-持久化" aria-hidden="true">#</a> insert 持久化</h3>
<p>这里适用的场景是单条插入可以延迟的情况采用统一插入</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>RdsPersist::insert('pam_log', $items);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="update-持久化" tabindex="-1"><a class="header-anchor" href="#update-持久化" aria-hidden="true">#</a> update 持久化</h3>
<p>这里支持从数据库初始化数据, 如果数据不存在, 则创建一条数据并初始化到缓存中</p>
<p>| 2.24.1 版本之后持久化数据可以不进行初始化, 默认必须初始化</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>RdsPersist::update('gift_collection', $where, [
    'gift_num[+]' => 8,
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>持久化使用的基本用法, 因为 persist 加入 facade, 所以可以使用 <code v-pre>Persist</code> 全局 Facade 来进行使用</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$init = [
    'add' => 0,
];

$update = [
    'append' => 5,
];
$result = RdsPersist::calcUpdate($init, $update);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外这里 update 支持额外的语法</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php
$init = [
    'add'      => 0,
    'subtract' => 0,
    'preserve' => 0,
    'force'    => 0,
];¶

$update = [
    'add[+]'      => 5,   # 加语法, 保留两位小数, 使用 Number 来计算
    'subtract[-]' => 5,   # 减语法, 保留两位小数, 使用 Number 来计算
    'force'       => 8,   # 覆盖语法, 覆盖之前数据
                            # 不传值代表保留
];

$result = RdsPersist::calcUpdate($init, $update);
$result = [
    "add" => "5.00"
    "subtract" => "-5.00"
    "preserve" => 0
    "force" => 8
]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="持久化到数据库" tabindex="-1"><a class="header-anchor" href="#持久化到数据库" aria-hidden="true">#</a> 持久化到数据库</h3>
<p>如果需要持久化到数据库则需要执行相关命令</p>
<p>Usage:
py-core:persist <code v-pre>&lt;table&gt;</code></p>
<p>Arguments:
table Table to exec. [pam_log...|all]</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$this->app['events']->listen('console.schedule', function (Schedule $schedule) {
    ...
    $schedule->command('py-core:persist', ['chat_room'])
        ->daily()->appendOutputTo($this->consoleLog());
    ...
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


