<template><div><h1 id="phpstan" tabindex="-1"><a class="header-anchor" href="#phpstan" aria-hidden="true">#</a> Phpstan</h1>
<blockquote>
<p>since 4.1
为了在项目中增加 phpstan 的静态检测</p>
</blockquote>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>composer require poppy/ext-phpstan 4.1.x-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>~/phpstan.neon</code> 中增加</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>includes:
    - vendor/poppy/ext-phpstan/extension.neon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


