<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<h2 id="配置项目环境" tabindex="-1"><a class="header-anchor" href="#配置项目环境" aria-hidden="true">#</a> 配置项目环境</h2>
<p>默认项目中没有 <code v-pre>.env</code> 文件</p>
<h3 id="项目配置文件" tabindex="-1"><a class="header-anchor" href="#项目配置文件" aria-hidden="true">#</a> 项目配置文件</h3>
<p>复制 <code v-pre>.env.example</code> 为 <code v-pre>.env</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ cp .env.example .env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置数据库信息</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DB_HOST=127.0.0.1
DB_DATABASE=poppy_v1
DB_USERNAME=root
DB_PASSWORD=Poppy123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置域名</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>URL_SITE=https://poppy-demo.wulicode.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成 app key, jwt key</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan key:generate
$ php artisan jwt:secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目初始化以及安装" tabindex="-1"><a class="header-anchor" href="#项目初始化以及安装" aria-hidden="true">#</a> 项目初始化以及安装</h3>
<p>执行数据库 migrate</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan poppy:migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>系统安装并创建用户</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan py-system:install
Start Install Lemon Framework!
Init UserRole Ing...
Init Role success
Install User Roles Success
Init Rbac Permission...
[poppy.core.PermissionCommand] Import permission Success!
Init Rbac Permission Success

$ php artisan py-system:user create_user

 Please input username!:
 > root_user

 Please input password!:
 > 123456

 Please input role name!:
 > root

User root_user created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成访问 <code v-pre>https://poppy-demo.wulicode.com/mgr-page/login</code></p>
<p><img src="https://file.wulicode.com/note/2021/11-09/09-47-19512.png" alt=""></p>
<p>登录之后的界面</p>
<p><img src="https://file.wulicode.com/note/2021/11-09/09-47-58380.png" alt=""></p>
</div></template>


