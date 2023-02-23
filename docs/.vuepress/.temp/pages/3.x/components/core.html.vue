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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关于 phplint</strong></p>
<p><a href="https://github.com/overtrue/phplint" target="_blank" rel="noopener noreferrer">phplint<ExternalLinkIcon/></a>是一个快速检测 php 语法错误的工具, 此工具无需安装在项目中, 全局安装即可.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ composer global require overtrue/phplint -vvv
$ php artisan py-core:doc lint
$ phplint /path/of/code -c /framework/path/.phplint.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查代码" tabindex="-1"><a class="header-anchor" href="#检查代码" aria-hidden="true">#</a> 检查代码</h3>
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
<p>先睹为快, 使用 sami 生成的 php api 地址 <a href="http://v3.poppy-framework.com/docs/php/" target="_blank" rel="noopener noreferrer">PhpApi For Poppy<ExternalLinkIcon/></a></p>
</blockquote>
<p><strong>生成配置文件</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan vendor:publish --tag=poppy
...
Copied File [/modules/system/resources/config/sami.php] To [/storage/sami/config.php]
Publishing complete.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>下载 sami</strong></p>
<p>首先下载 sami , 放到 <code v-pre>storage/sami/sami.phar</code> 这个位置 或者使用命令来下载, 如果不知道命令可以运行 <code v-pre>php artisan py-core:doc php</code>
来查看下载文件的命令</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan py-core:doc php

Please Run Command To Install Sami.phar:
curl http://get.sensiolabs.org/sami.phar --output /data/workbench/www/wulicode/storage/sami/sami.phar

# 下载之后再运行

$ php artisan py-core:doc php
Please Run Command:
php /data/workbench/www/wulicode/storage/sami/sami.phar update /data/workbench/www/wulicode/storage/sami/config.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们运行命令来生成 php 文档</p>
<p>由于 sami 最新版是基于 php7.1 版本的, 所以我们必须以正确版本来运行. 如果版本不正确则无法运行</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php71 /data/workbench/www/wulicode/storage/sami/sami.phar update /data/workbench/www/wulicode/storage/sami/config.php
 Updating project

Version master
  Parsing   done
  Rendering done

 Version    Updated C    Removed C
   master         1224            0

 Version    Updated C    Updated N    Removed C    Removed N
   master            2            0            0            0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行完成后会在 <code v-pre>public/docs/php</code> 文件夹下生成标准的 html 文档, 这样我们就可以进行访问了.</p>
<p>如果默认的配置无法满足你的要求可以编辑 <code v-pre>resources/sami/sami.php</code>
文件来修改需要生成文档的文件夹和目标路径.</p>
<p>生成文档如下</p>
<p><img src="https://file.wulicode.com/note/2021/10-23/11-33-00249.png" alt=""></p>
<p>Sami 配置文件查看 : <a href="https://github.com/imvkmark/poppy-core/blob/3.0/resources/config/sami-config.php" target="_blank" rel="noopener noreferrer">sami-config.php<ExternalLinkIcon/></a></p>
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
        // 其他参数  签名验证
		'sign_certificate' => [
			'name'         => 'timestamp',
			'title'        => 'TimeStamp',
			'type'         => 'String',
			'is_required'  => 'Y',
		],
        // 签名生成
		'sign_generate'    => DefaultApiSignProvider::js(),
        // 源文件夹
        'origin'           => 'modules',
        // 接口测试构建器[未实现]
        'factory'          => WebApiFactory::class,
        // 生成目录
        'doc'              => 'public/docs/web',
	],
	...
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="op-mail" tabindex="-1"><a class="header-anchor" href="#op-mail" aria-hidden="true">#</a> op_mail</h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


