<template><div><h1 id="mgrpage" tabindex="-1"><a class="header-anchor" href="#mgrpage" aria-hidden="true">#</a> MgrPage</h1>
<h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2>
<h3 id="打包-js-资源" tabindex="-1"><a class="header-anchor" href="#打包-js-资源" aria-hidden="true">#</a> 打包 Js 资源</h3>
<p>在资源开发过程中, 我们使用如下命令进行资源监听, <code v-pre>webpack.mix.js</code> 本不存在, 需要在 <code v-pre>poppy/mgr-page/resources/libs/</code> 目录下复制 <code v-pre>webpack.mix.sample.js</code> 文件并更改名称, 将文件放置到你所喜欢的的位置均可, 其中的代理域名以本地开发为主</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ mix watch --mix-config=poppy/mgr-page/resources/libs/webpack.mix.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在资源变动之后我们需要将打包后的文件反向复制到 <code v-pre>mgr-page</code> 这个包中, 用到以下命令</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ php artisan py-mgr-page:mix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样进行包提交即可</p>
<h3 id="发布到项目" tabindex="-1"><a class="header-anchor" href="#发布到项目" aria-hidden="true">#</a> 发布到项目</h3>
<p>MgrPage 管理后台使用的是 js 加载方式, 如果使用 MgrPage, 则需要在更新 composer 组件之后运行以下命令进行强制更新</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>$ php artisan vendor:publish --force --tag=poppy-mix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者将此命令加入 composer.json 文件中, 每次更新完成 composer 的时候都会自动进行一次发布</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pjax" tabindex="-1"><a class="header-anchor" href="#pjax" aria-hidden="true">#</a> Pjax</h2>
<h3 id="pjax-错误" tabindex="-1"><a class="header-anchor" href="#pjax-错误" aria-hidden="true">#</a> Pjax 错误</h3>
<p>在输出 pjax 错误的前提是需要存在 <code v-pre>_search</code> 模版, 并且在控制器中输出错误变量 <code v-pre>$_pjax_error</code></p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token function">view</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">share</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'_pjax_error'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'错误'</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


