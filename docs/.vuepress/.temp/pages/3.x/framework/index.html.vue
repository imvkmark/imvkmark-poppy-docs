<template><div><h1 id="readme" tabindex="-1"><a class="header-anchor" href="#readme" aria-hidden="true">#</a> README</h1>
<p>项目分为两个部分, 一部分为模块, 另一部分是 Poppy 模块, 为了区分, 所以 slug 的命名分为
<code v-pre>module.{module}</code> <code v-pre>poppy.{poppy}</code></p>
<h2 id="bin" tabindex="-1"><a class="header-anchor" href="#bin" aria-hidden="true">#</a> Bin</h2>
<p>[v3.1] Poppy Framework 附带一个 bin 命令 poppy, 可以执行 poppy 框架的清理函数, 运行方法</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 清理 packages.json , 删除 poppy.json
$ ./vendor/bin/poppy clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令行-console" tabindex="-1"><a class="header-anchor" href="#命令行-console" aria-hidden="true">#</a> 命令行/Console</h2>
<h3 id="创建模块" tabindex="-1"><a class="header-anchor" href="#创建模块" aria-hidden="true">#</a> 创建模块</h3>
<p>创建一个 Poppy 模块并启动它.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan poppy:make {slug} [-Q|--quick]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>模块文件树:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>├── configurations        # 配置文件
├── docs                  # 文档
├── resources
│   ├── lang              # 语言文件
│   │   └── zh            # 语言文件夹
│   └── views             # blade 模板
└── src
    ├── action
    ├── classes
    ├── database
    │   ├── factories
    │   ├── migrations
    │   └── seeds
    ├── events
    ├── http
    │   ├── request
    │   │   ├── api
    │   │   ├── api_mgr_app    # 4.0 MgrApp 接口文件放置位置
    │   │   ├── backend
    │   │   └── web
    │   └── routes
    ├── jobs
    ├── listeners
    ├── models
    └── testing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列出-modules" tabindex="-1"><a class="header-anchor" href="#列出-modules" aria-hidden="true">#</a> 列出 Modules</h3>
<p>列出所有的应用模块</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan poppy:list

+------+------------+-------------------+----------------------------------------------------+---------+
| #    | Name       | Slug              | Description                                        | Status  |
+------+------------+-------------------+----------------------------------------------------+---------+
| 1000 | 核心       | poppy.core        | Poppy Core.                                        | Enabled |
| 9001 | site       | module.site       | This is the description for the poppy site module. | Enabled |
+------+------------+-------------------+----------------------------------------------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启用-禁用模块" tabindex="-1"><a class="header-anchor" href="#启用-禁用模块" aria-hidden="true">#</a> 启用/禁用模块</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 启用模块
$ php artisan poppy:enable {slug}


# 禁用模块
$ php artisan poppy:disable {slug}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优化模块" tabindex="-1"><a class="header-anchor" href="#优化模块" aria-hidden="true">#</a> 优化模块</h3>
<p>模块优化, 清空生成的缓存等操作</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan poppy:optimize
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="poppy-数据库管理" tabindex="-1"><a class="header-anchor" href="#poppy-数据库管理" aria-hidden="true">#</a> Poppy 数据库管理</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>poppy:migrate {slug}          执行模块的数据库迁移文件
poppy:migrate:refresh {slug}  重新执行模块数据库迁移文件
poppy:migrate:reset {slug}    回滚所有执行的数据库迁移
poppy:migrate:rollback {slug} 回滚执行完的上一个数据库迁移
poppy:migration {slug}        创建一个指定模块的数据库迁移文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="poppy-生成器" tabindex="-1"><a class="header-anchor" href="#poppy-生成器" aria-hidden="true">#</a> Poppy 生成器</h2>
<p>生成器工具</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>php artisan poppy<span class="token punctuation">:</span>command <span class="token punctuation">{</span>slug<span class="token punctuation">}</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>           <span class="token comment"># 生成命令文件</span>
php artisan poppy<span class="token punctuation">:</span>controller <span class="token punctuation">{</span>slug<span class="token punctuation">}</span> <span class="token punctuation">{</span>api<span class="token operator">/</span>web<span class="token operator">/</span>backend<span class="token punctuation">}</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>
                                                  <span class="token comment"># 生成控制器文件</span>
php artisan poppy<span class="token punctuation">:</span>middleware <span class="token punctuation">{</span>slug<span class="token punctuation">}</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>        <span class="token comment"># 生成中间件文件</span>
php artisan poppy<span class="token punctuation">:</span>model <span class="token punctuation">{</span>slug<span class="token punctuation">}</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>             <span class="token comment"># 生成数据库模型文件</span>
php artisan poppy<span class="token punctuation">:</span>policy <span class="token punctuation">{</span>slug<span class="token punctuation">}</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>            <span class="token comment"># 生成 policy 策略文件</span>
php artisan poppy<span class="token punctuation">:</span>provider <span class="token punctuation">{</span>slug<span class="token punctuation">}</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>          <span class="token comment"># 生成服务提供者</span>
php artisan poppy<span class="token punctuation">:</span>request <span class="token punctuation">{</span>slug<span class="token punctuation">}</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>           <span class="token comment"># 生成 request 文件</span>
php artisan poppy<span class="token punctuation">:</span>test <span class="token punctuation">{</span>slug<span class="token punctuation">}</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>              <span class="token comment"># 生成测试文件</span>
php artisan poppy<span class="token punctuation">:</span>make <span class="token punctuation">{</span>slug<span class="token punctuation">}</span>                     <span class="token comment"># 生成模块</span>
php artisan poppy<span class="token punctuation">:</span>listener <span class="token punctuation">{</span>slug<span class="token punctuation">}</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>          <span class="token comment"># 事件监听器(详细见下方)</span>
php artisan poppy<span class="token punctuation">:</span>event <span class="token punctuation">{</span>slug<span class="token punctuation">}</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>             <span class="token comment"># 生成事件文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成模块监听类文件" tabindex="-1"><a class="header-anchor" href="#生成模块监听类文件" aria-hidden="true">#</a> 生成模块监听类文件</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php artisan poppy:listener {slug} {name}
--event {event}: 事件名称, 使用 `\` 表明是全局的事件, 否则的话以为这是当前模块的事件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成模块事件类文件" tabindex="-1"><a class="header-anchor" href="#生成模块事件类文件" aria-hidden="true">#</a> 生成模块事件类文件</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php artisan poppy:event {slug} {name}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数据库-seeder-和-seed-命令" tabindex="-1"><a class="header-anchor" href="#数据库-seeder-和-seed-命令" aria-hidden="true">#</a> 数据库 Seeder 和 Seed 命令</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 生成种子文件</span>
$ php artisan poppy:seeder <span class="token punctuation">{</span>slug<span class="token punctuation">}</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>

<span class="token comment"># 执行模块下种子主文件或者传递参数执行指定种子文件</span>
$ php artisan poppy:seed <span class="token punctuation">{</span>slug<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建 seeder 文件</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token comment"># 生成模块的主 seeder 文件</span>
$ php artisan poppy<span class="token punctuation">:</span>seeder module<span class="token operator">.</span>demo DemoDatabaseSeeder

<span class="token comment"># 生成模块的子 seeder 文件</span>
$ php artisan poppy<span class="token punctuation">:</span>seeder module<span class="token operator">.</span>demo DemoDbDatabaseSeeder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册 Seeder 以及生成 数据</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token comment"># DemoDatabaseSeeder</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token class-name static-context">DemoDbDatabaseSeeder</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># DemoDbDatabaseSeeder</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$faker</span> <span class="token operator">=</span> <span class="token function">py_faker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$start</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$start</span> <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">;</span> <span class="token variable">$start</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$item</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'tiny_integer'</span> <span class="token operator">=></span> <span class="token variable">$faker</span><span class="token operator">-></span><span class="token function">numberBetween</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'u_integer'</span>    <span class="token operator">=></span> <span class="token variable">$faker</span><span class="token operator">-></span><span class="token function">numberBetween</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'var_char_20'</span>  <span class="token operator">=></span> <span class="token variable">$faker</span><span class="token operator">-></span><span class="token function">words</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'char_20'</span>      <span class="token operator">=></span> <span class="token variable">$faker</span><span class="token operator">-></span><span class="token function">words</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'text'</span>         <span class="token operator">=></span> <span class="token variable">$faker</span><span class="token operator">-></span><span class="token function">sentence</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'decimal'</span>      <span class="token operator">=></span> <span class="token variable">$faker</span><span class="token operator">-></span><span class="token function">numberBetween</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">DemoDb</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 seed</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ php artisan poppy:seed module.demo
Seeding: Demo<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Seeds<span class="token punctuation">\</span>DemoDbDatabaseSeeder
Database seeding completed successfully.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库-factory-生成" tabindex="-1"><a class="header-anchor" href="#数据库-factory-生成" aria-hidden="true">#</a> 数据库 Factory 生成</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ php artisan poppy:factory <span class="token punctuation">{</span>slug<span class="token punctuation">}</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 指定当前模块下的模型</span>
$ php artisan poppy:factory module.demo DemoDbFactory <span class="token parameter variable">--model</span><span class="token operator">=</span><span class="token string">"DemoDb"</span>

<span class="token comment"># 指定已存在的模型</span>
$ php artisan poppy:factory module.demo DemoDbFactory <span class="token parameter variable">--model</span><span class="token operator">=</span><span class="token string">"\Demo\Models\DemoDb"</span>

<span class="token comment"># 未指定模型</span>
$ php artisan poppy:factory module.demo DemoDbFactory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成的模型如下</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token doc-comment comment">/** <span class="token keyword">@var</span> <span class="token class-name"><span class="token punctuation">\</span>Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Eloquent<span class="token punctuation">\</span>Factory</span> <span class="token parameter">$factory</span> */</span>

<span class="token keyword">use</span> <span class="token package">Demo<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>DemoDb</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Faker<span class="token punctuation">\</span>Generator</span> <span class="token keyword">as</span> Faker<span class="token punctuation">;</span>

<span class="token variable">$factory</span><span class="token operator">-></span><span class="token function">define</span><span class="token punctuation">(</span><span class="token class-name static-context">DemoDb</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Faker</span> <span class="token variable">$faker</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token comment">//</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// Module Maked
Events\PoppyMake($slug)

// 模块启用
Events\PoppyEnabled

// 模块禁用
Events\PoppyDisabled

// 模块优化
Events\PoppyOptimized
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="helpers" tabindex="-1"><a class="header-anchor" href="#helpers" aria-hidden="true">#</a> Helpers</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ArrayHelper
EnvHelper
FileHelper
HtmlHelper
ImgHelper
CookieHelper
RouterHelper
SearchHelper
StrHelper
TimeHelper
TreeHelper
UtilHelper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解析器" tabindex="-1"><a class="header-anchor" href="#解析器" aria-hidden="true">#</a> 解析器</h2>
<p>支持 Xml,Ini,Yaml</p>
<h2 id="blade-语法" tabindex="-1"><a class="header-anchor" href="#blade-语法" aria-hidden="true">#</a> Blade 语法</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>@poppy
// You Can check if module is exist and enabled.
@endpoppy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1.语言包
 - resource/lang/zh/validator.php
2.相应的验证规则
 - Rule 类
3.FrameworkServiceProvider.php 验证正则规则
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码约定" tabindex="-1"><a class="header-anchor" href="#代码约定" aria-hidden="true">#</a> 代码约定</h2>
<p>开发进行提交前按照这个清单进行下检测</p>
<p><strong>PHP-CS-Fixer</strong>
<a href="https://github.com/FriendsOfPHP/PHP-CS-Fixer" target="_blank" rel="noopener noreferrer">PHP-CS-Fixer<ExternalLinkIcon/></a> is a tool to automatically fix PHP Coding Standards issues, We use it for Code
Specification.</p>
<p><strong>测试用例完善并且通过</strong></p>
<p><strong>注释完善并且通过</strong></p>
<p>注释使用 <code v-pre>poppy/core</code> 模块来检测[开发必备]</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan py-core:inspect class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>代码清理过</strong></p>
<p>这个指的是 IDE 进行优化导入, 选中文件夹, 然后批量进行格式化 + 优化导入</p>
<p><strong>不要出现 package 标签</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>@package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考-docs" tabindex="-1"><a class="header-anchor" href="#参考-docs" aria-hidden="true">#</a> 参考 &amp; Docs</h2>
<ul>
<li><a href="http://nodeca.github.io/js-yaml/" target="_blank" rel="noopener noreferrer">Yaml<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/Tucker-Eric/EloquentFilter" target="_blank" rel="noopener noreferrer">EloquentFilter<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/FriendsOfPHP/Sami" target="_blank" rel="noopener noreferrer">Sami<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/a/1190000014239090" target="_blank" rel="noopener noreferrer">Carbon - 时间组件<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/a/1190000011580448" target="_blank" rel="noopener noreferrer">Laravel Html &amp; Form - Html/Form 封装<ExternalLinkIcon/></a></li>
<li><a href="https://laravel-china.org/topics/2858/extended-recommendation-hieu-leactive-according-to-the-url-generated-corresponding-navigation-active-state" target="_blank" rel="noopener noreferrer">hieu-le/active-Url 状态组件<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/vinkla/laravel-hashids" target="_blank" rel="noopener noreferrer">hashids/hashids - 对 ID 进行 Hash 加密<ExternalLinkIcon/></a></li>
</ul>
</div></template>


