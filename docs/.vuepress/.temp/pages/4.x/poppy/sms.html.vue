<template><div><h1 id="sms-扩展包" tabindex="-1"><a class="header-anchor" href="#sms-扩展包" aria-hidden="true">#</a> Sms 扩展包</h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>composer require poppy/sms 4.1.x-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装附加扩展" tabindex="-1"><a class="header-anchor" href="#安装附加扩展" aria-hidden="true">#</a> 安装附加扩展</h2>
<p>因为此扩展包仅仅为了封装 poppy framework 使用, 并没有附带的 composer 包, 所以需要功能正确执行, 需要自行安装</p>
<p><strong>Aliyun</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    ...
    "alibabacloud/client": "^1.5",
    "alibabacloud/dysmsapi": "1.8.*",
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新相关包或者重新安装" tabindex="-1"><a class="header-anchor" href="#更新相关包或者重新安装" aria-hidden="true">#</a> 更新相关包或者重新安装</h2>
<p>更新你的依赖包 <code v-pre>composer update</code> 或者全新安装 <code v-pre>composer install</code>。</p>
</div></template>


