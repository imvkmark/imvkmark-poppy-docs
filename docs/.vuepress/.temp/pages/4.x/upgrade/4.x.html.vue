<template><div><h1 id="_4-x-版本升级说明" tabindex="-1"><a class="header-anchor" href="#_4-x-版本升级说明" aria-hidden="true">#</a> 4.x 版本升级说明</h1>
<h2 id="_4-1-4-2-升级说明" tabindex="-1"><a class="header-anchor" href="#_4-1-4-2-升级说明" aria-hidden="true">#</a> 4.1 - 4.2 升级说明</h2>
<p>4.1 - 4.2 主要对严格模式进行升级, 所有升级到 4.2 包的用户建议将项目内容升级到严格模式</p>
<h2 id="_4-0-4-1-升级说明" tabindex="-1"><a class="header-anchor" href="#_4-0-4-1-升级说明" aria-hidden="true">#</a> 4.0 - 4.1 升级说明</h2>
<p>本次升级目的是把 modules 加载更改为支持 PSR-4 的加载规范以便于可以运行单元测试和代码覆盖率测试</p>
<ul>
<li>[x]目录命名 / 加载的路由命名</li>
<li>[x]生成模块</li>
<li>[x]数据库生成以及各种的 Make 生成</li>
</ul>
<h3 id="包批量改动" tabindex="-1"><a class="header-anchor" href="#包批量改动" aria-hidden="true">#</a> 包批量改动</h3>
<p>安装 composer 包 <code v-pre>poppy/code-generator 4.1</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ composer require poppy/code-generator 4.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重命名目录</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan py-code-generator:src-rename demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>移除所有的 modules 文件夹, 并进行 git 提交, 以防止大小写问题导致的命名失败情况</p>
<p>重命名 module -&gt; modules 文件夹</p>
<p>添加 composer 自动加载, 并启用新命名空间 <code v-pre>composer dumpautoload</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    "autoload": {
        "psr-4": {
            "Demo\\": "modules/demo/src/"
        },
        "files": [
            "modules/demo/src/Classes/functions.php",
        ]
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>移除 <code v-pre>modules/demo/manifest.json</code> 中的 <code v-pre>autoload</code> 自动加载字段, 自动加载的文件使用 composer 进行加载</p>
<h3 id="模块调整" tabindex="-1"><a class="header-anchor" href="#模块调整" aria-hidden="true">#</a> 模块调整</h3>
<ul>
<li>模块的数据库 <code v-pre>src/database/migrations</code> 加载移动到 <code v-pre>modules/demo/resources/migrations</code> 目录下</li>
<li>模块的 Seeder <code v-pre>src/database/seeds</code> 加载移动到 <code v-pre>src/Seeds</code> 目录下</li>
</ul>
<p><strong>Framework</strong></p>
<ul>
<li>移除 <code v-pre>Poppy\Framework\Foundation\Bootstrap\RegisterClassLoader</code> 注册 ClassLoader</li>
<li>移除 <code v-pre>\Poppy\Framework\Classes\ClassLoader</code></li>
<li>移除 <code v-pre>\Poppy\Framework\Classes\Mocker</code>, 测试使用自动化 + faker 去进行接口测试, 所以无需使用 Moker 进行接口返回</li>
<li>新生成的模块需要手动加载 PSR-4 规范并且目录已经按照新目录进行调整</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    ...
    <span class="token property">"autoload"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"psr-4"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"Demo\\"</span><span class="token operator">:</span> <span class="token string">"modules/demo/src/"</span><span class="token punctuation">,</span>
            <span class="token property">"Demo\\Tests\\"</span><span class="token operator">:</span> <span class="token string">"modules/demo/tests/"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Core</strong></p>
<ul>
<li>移除 <code v-pre>phplint</code>, 使用 phpstan 作为默认静态代码工具</li>
</ul>
<p><strong>System</strong></p>
<ul>
<li>废弃 <code v-pre>\Poppy\System\Http\Exception\Handler</code> 类, 异常处理改为 <code v-pre>\Poppy\Framework\Foundation\Exception\Handler</code></li>
</ul>
<p>对异常处理进行优化性改写, 移除重复 <code v-pre>dontReport</code> 异常, 对异常的提示进行多语言改写, 对模型提示提供 <code v-pre>poppy_friendly</code> 方法进行语言转义</p>
</div></template>


