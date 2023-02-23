<template><div><h1 id="管理后台" tabindex="-1"><a class="header-anchor" href="#管理后台" aria-hidden="true">#</a> 管理后台</h1>
<h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2>
<p>在资源开发过程中, 我们使用如下命令进行资源监听, <code v-pre>webpack.mix.js</code> 本不存在, 需要在 <code v-pre>poppy/mgr-page/resources/libs/</code> 目录下复制 <code v-pre>webpack.mix.sample.js</code> 文件并更改名称, 将文件放置到你所喜欢的的位置均可, 其中的代理域名以本地开发为主</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ mix watch --mix-config=poppy/mgr-page/resources/libs/webpack.mix.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在资源变动之后我们需要将打包后的文件反向复制到 <code v-pre>mgr-page</code> 这个包中, 用到以下命令</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan py-mgr-page:mix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样进行包提交即可</p>
<h2 id="资源发布" tabindex="-1"><a class="header-anchor" href="#资源发布" aria-hidden="true">#</a> 资源发布</h2>
<p>MgrPage 管理后台使用的是 js 加载方式, 如果使用 MgrPage, 则需要在更新 composer 组件之后运行以下命令进行强制更新</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>$ php artisan vendor:publish --force --tag=poppy-mix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者将此命令加入 composer.json 文件中, 每次更新完成 composer 的时候都会自动进行一次发布</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    ...
    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"post-update-cmd"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            ...
            <span class="token string">"php artisan vendor:publish --force --tag=poppy-mix"</span>
            ...
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


