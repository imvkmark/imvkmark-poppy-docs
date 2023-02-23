<template><div><h1 id="ip-store" tabindex="-1"><a class="header-anchor" href="#ip-store" aria-hidden="true">#</a> Ip Store</h1>
<blockquote>
<p>基于纯真的本地化 ip 库转换工具</p>
</blockquote>
<h2 id="ip-库说明" tabindex="-1"><a class="header-anchor" href="#ip-库说明" aria-hidden="true">#</a> Ip 库说明</h2>
<p>支持的IP类型, mon17是最全面的, 默认是这种类型</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>qqwry   :  http://www.cz88.net/
mon17   :  https://www.ipip.net/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<p>本扩展拓展于 <code v-pre>poppy/framework</code> 框架. 添加/更改配置</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// extension.php
'ip_store' => [
    'type' => 'mon17'
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-laravel" tabindex="-1"><a class="header-anchor" href="#for-laravel" aria-hidden="true">#</a> For Laravel</h2>
<p>如果 Laravel 中使用, 需要添加 Service Provider 到 app providers 数组</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Poppy\Extension\IpStore\ExtensionServiceProvider.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以加入 facade 或者直接使用这个函数</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>app('ext.ip_store')->area('39.71.122.222')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h3>
<p>The  plugin is open-sourced software licensed under the <a href="http://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT license<ExternalLinkIcon/></a>.</p>
</div></template>


