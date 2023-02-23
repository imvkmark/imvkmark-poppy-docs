<template><div><h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1>
<h2 id="_1-在模块中对接-sentry" tabindex="-1"><a class="header-anchor" href="#_1-在模块中对接-sentry" aria-hidden="true">#</a> 1. 在模块中对接 sentry</h2>
<p><strong>安装 <code v-pre>sentry/sentry-laravel</code> 包</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>composer require sentry/sentry-laravel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>新建异常监听</strong></p>
<p>这里文件位置放置在 <code v-pre>modules/misc/src/http/foundation</code> 下</p>
<p><em>Handler.php</em></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">Misc<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Foundation</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Exception</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * poppy handler
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Handler</span> <span class="token keyword">extends</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Poppy<span class="token punctuation">\</span>System<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Exception<span class="token punctuation">\</span>Handler</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">report</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Exception</span> <span class="token variable">$exception</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">app</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">bound</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'sentry'</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">shouldReport</span><span class="token punctuation">(</span><span class="token variable">$exception</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">in_array</span><span class="token punctuation">(</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'app.env'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'local'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'test'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">app</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'sentry'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">captureException</span><span class="token punctuation">(</span><span class="token variable">$exception</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">report</span><span class="token punctuation">(</span><span class="token variable">$exception</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在 composer 中注册 psr-4 的类的位置</strong></p>
<p><em>composer.json</em></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
     <span class="token property">"autoload"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"psr-4"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            ...
            <span class="token property">"Misc\\Http\\Foundation\\"</span><span class="token operator">:</span> <span class="token string">"modules/misc/src/http/foundation"</span><span class="token punctuation">,</span>
            ...
        <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行命令完成类的注册</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">composer</span> dumpautoload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>使用 Handler</strong></p>
<p>将错误监听修改为自定义的错误监控类</p>
<p><em>storage/bootstrap/app.php</em></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$app</span><span class="token operator">-></span><span class="token function">singleton</span><span class="token punctuation">(</span>
	<span class="token class-name class-name-fully-qualified static-context">Illuminate<span class="token punctuation">\</span>Contracts<span class="token punctuation">\</span>Debug<span class="token punctuation">\</span>ExceptionHandler</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
	<span class="token class-name class-name-fully-qualified static-context">Misc<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Foundation<span class="token punctuation">\</span>Handler</span><span class="token operator">::</span><span class="token keyword">class</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样便可以注册并收到异常</p>
<p>因为框架在注册异常之前需要知晓异常类的位置, 否则出现异常的时候无法进行异常报错</p>
<blockquote>
<p>2021/09/27 15:38:44 [error] 46887#0: *12 FastCGI sent in stderr: &quot;PHP message: PHP Fatal error: Uncaught ReflectionException: Class Misc\Foundation\Handler does not exist in /Users/duoli/Documents/workbench/dl.wulicode/poppy/vendor/laravel/framework/src/Illuminate/Container/Container.php:803</p>
</blockquote>
</div></template>


