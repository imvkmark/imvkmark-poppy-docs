<template><div><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1>
<blockquote>
<p>文件位置 <code v-pre>config/poppy.php</code></p>
</blockquote>
<h2 id="framework-配置" tabindex="-1"><a class="header-anchor" href="#framework-配置" aria-hidden="true">#</a> Framework 配置</h2>
<p>配置 key 为 <code v-pre>framework</code></p>
<h3 id="page-size" tabindex="-1"><a class="header-anchor" href="#page-size" aria-hidden="true">#</a> page_size</h3>
<p>default : 15</p>
<p>列表默认的分页条数, 默认 15 条</p>
<p>影响继承了Poppy\Framework\Application\Controller的分页，如果需要修改分页条数可以在控制器给<code>$this-&gt;pagesize</code>赋值</p>
<h3 id="page-max" tabindex="-1"><a class="header-anchor" href="#page-max" aria-hidden="true">#</a> page_max</h3>
<p>default: 3000</p>
<p>列表默认的最大分页条数，默认3000条</p>
<p>影响继承了Poppy\Framework\Application\Controller的分页</p>
<h3 id="message-template" tabindex="-1"><a class="header-anchor" href="#message-template" aria-hidden="true">#</a> message_template</h3>
<p>default : []</p>
<p>根据执行内容显示不同的视图模板(例成功/失败)</p>
<p>接收视图地址 如 <code v-pre>module::xx.folder.message</code>   可支持多个视图地址</p>
<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3>
<p>default : '网站名称'</p>
<p>默认的网站名称, 作为默认信息会注入到 view 视图的 <code v-pre>$_title</code>  中</p>
<h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3>
<p>default : '网站描述'</p>
<p>默认的网站描述信息, 作为默认信息会注入到 view 视图的 <code v-pre>$_description</code>  中</p>
<h3 id="prefix" tabindex="-1"><a class="header-anchor" href="#prefix" aria-hidden="true">#</a> prefix</h3>
<p>default : 'mgr-page'</p>
<p>后台的入口地址，默认mgr-page</p>
<h2 id="核心-配置" tabindex="-1"><a class="header-anchor" href="#核心-配置" aria-hidden="true">#</a> 核心 配置</h2>
<p>配置 key 为 <code v-pre>core</code></p>
<h3 id="apidoc" tabindex="-1"><a class="header-anchor" href="#apidoc" aria-hidden="true">#</a> apidoc</h3>
<p>接口文档生成配置, 使用命令 <code v-pre>php artisan py-core:doc api</code> 生成, 访问 <code v-pre>/mgr-page/develop</code> 查看生成的接口文档</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/*
|--------------------------------------------------------------------------
| 接口文档的定义
|--------------------------------------------------------------------------
| 需要运行 `php artisan py-core:doc api` 来生成技术文档
*/
'apidoc' => [
    'web' => [
        'title'       => '前台接口',
        'method'      => 'post',
        'default_url' => 'api_v1/system/auth/login',

        'sign_certificate' => [
            [
                'name'        => 'timestamp',
                'title'       => 'TimeStamp',
                'type'        => 'String',
                'is_required' => 'N',   // 是否必须加密（Y/N）
                'default'     => DefaultApiSignProvider::timestamp(),
            ],
        ],
        'sign_generate'    => DefaultApiSignProvider::js(), // js加密算法
    ],
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制器方法需按 apidoc 格式添加代码注释</p>
<h2 id="项目" tabindex="-1"><a class="header-anchor" href="#项目" aria-hidden="true">#</a> 项目</h2>
<p>项目的 <code v-pre>.env</code> 文件配置, 文件遵循 laravel 配置, 这里只列出框架需要注意的配置项目</p>
<h3 id="jwt-secret" tabindex="-1"><a class="header-anchor" href="#jwt-secret" aria-hidden="true">#</a> jwt-secret</h3>
<p>项目中使用 jwt 进行项目授权, 必须要生成 <code v-pre>JWT_SECRET</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan jwt:secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h3>
<p>项目中缓存约定支持 redis, 不使用可能会导致部分功能不可用</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>CACHE_DRIVER=redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="演示模式" tabindex="-1"><a class="header-anchor" href="#演示模式" aria-hidden="true">#</a> 演示模式</h3>
<p>演示模式下不允许修改主账号账密</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>IS_DEMO=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> env</h3>
<p>框架对 env 环境的约定,</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># local|本地;test|测试;development|开发;production|生产
APP_ENV=local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


