<template><div><h1 id="开发规范" tabindex="-1"><a class="header-anchor" href="#开发规范" aria-hidden="true">#</a> 开发规范</h1>
<h2 id="框架" tabindex="-1"><a class="header-anchor" href="#框架" aria-hidden="true">#</a> 框架</h2>
<h3 id="配置命名" tabindex="-1"><a class="header-anchor" href="#配置命名" aria-hidden="true">#</a> 配置命名</h3>
<p>配置定义为框架中对 config 文件的注入, 命名建议如下:</p>
<ol>
<li>poppy.php</li>
<li>module.php</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># Poppy
poppy.framework.page_max

# 模块配置
module.order.xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统" tabindex="-1"><a class="header-anchor" href="#系统" aria-hidden="true">#</a> 系统</h2>
<h3 id="设置命名" tabindex="-1"><a class="header-anchor" href="#设置命名" aria-hidden="true">#</a> 设置命名</h3>
<p>命名会注入到 Laravel config 中</p>
<p>命名分为扩展, 组件, 建议命名如下</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 扩展的命名
ext-aliyun::push.access_key

# 组件设置
py-system::permission.prefix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h2>
<p>单元测试采用 <code v-pre>phpunit.phar</code> 和项目独立的方式进行安装, 这样需要在项目中进行配置</p>
<p><strong>快捷生成</strong></p>
<p>使用如下命令便捷创建单元测试文件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan poppy:test  {slug} {name}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>测试文件加载</strong></p>
<p>对于开发中的包, 单元测试是无法识别其路径的, 所以需要将包加入到 <code v-pre>composer.json</code> 的 <code v-pre>autoload</code> 中, 这里遵循 <code v-pre>psr-4</code> 加载规范</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"autoload"</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"classmap"</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"psr-4"</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        ...
        <span class="token property">"User\\Tests\\"</span> <span class="token operator">:</span> <span class="token string">"modules/user/tests/"</span><span class="token punctuation">,</span>
        <span class="token property">"User\\"</span> <span class="token operator">:</span> <span class="token string">"modules/user/src/"</span><span class="token punctuation">,</span>
        <span class="token property">"Site\\Tests\\"</span> <span class="token operator">:</span> <span class="token string">"modules/site/tests/"</span><span class="token punctuation">,</span>
        <span class="token property">"Site\\"</span> <span class="token operator">:</span> <span class="token string">"modules/site/src/"</span>
        ...
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>单元测试 : <a href="https://wulicode.com/php/vendor/phpunit-at-project/index.html" target="_blank" rel="noopener noreferrer">在 PhpStorm 中运行 Laravel 的 phpunit 单元测试<ExternalLinkIcon/></a></li>
</ul>
<p><strong>要求</strong></p>
<ul>
<li>编写配置文件, 保证配置正确</li>
<li>编写模型文件, 保证模型函数正确</li>
<li>编写功能文件, 保证 Notification, Im 等功能正常</li>
<li>编写方便的 Action 测试, 便于功能点测试</li>
</ul>
<h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2>
<p><strong>接口文档</strong></p>
<p>接口文档写法遵循 <a href="https://apidocjs.com/" target="_blank" rel="noopener noreferrer">apidoc<ExternalLinkIcon/></a></p>
<ul>
<li>接口文档说明: <a href="https://wulicode.com/develop/cooperation/apidoc/" target="_blank" rel="noopener noreferrer">使用 ApiDoc 编写接口文档<ExternalLinkIcon/></a></li>
<li>接口文档示例: <a href="http://v4.poppy-framework.com/docs/web/" target="_blank" rel="noopener noreferrer">ApiDocument@Start<ExternalLinkIcon/></a></li>
</ul>
<p><strong>接口要求</strong></p>
<ul>
<li>保证接口请求不返回 null 值</li>
</ul>
</div></template>


