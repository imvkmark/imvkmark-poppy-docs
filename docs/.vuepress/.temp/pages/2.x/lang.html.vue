<template><div><h1 id="多语言" tabindex="-1"><a class="header-anchor" href="#多语言" aria-hidden="true">#</a> 多语言</h1>
<h2 id="语言包用到的地方和命名" tabindex="-1"><a class="header-anchor" href="#语言包用到的地方和命名" aria-hidden="true">#</a> 语言包用到的地方和命名</h2>
<p>由于语言包用到的地方众多， 所以这里分几种情况来定义语言包的位置</p>
<h3 id="laravel-验证默认" tabindex="-1"><a class="header-anchor" href="#laravel-验证默认" aria-hidden="true">#</a> Laravel 验证默认</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>validation.php   # L5 系统默认的语言文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h3>
<p>对于控制器中的函数， 多个控制器采用同一个语言包， 语言包命名参考 【LF - 路由 / 控制器】</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>front.php       # 网站前端
desktop.php     # 网站后端
view.php        # 网站视图
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h3>
<p>Action 中使用 <code v-pre>action.php</code></p>
<h3 id="api-接口" tabindex="-1"><a class="header-anchor" href="#api-接口" aria-hidden="true">#</a> Api 接口</h3>
<p>接口使用 <code v-pre>api.php</code>, api 命名方式和</p>
<h2 id="命名-和调用" tabindex="-1"><a class="header-anchor" href="#命名-和调用" aria-hidden="true">#</a> 命名 和调用</h2>
<h3 id="默认命名" tabindex="-1"><a class="header-anchor" href="#默认命名" aria-hidden="true">#</a> 默认命名</h3>
<p>默认命名放置在 <code v-pre>_</code> 中进行存储 例如保存成功， 我们放置在</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># desktop.php
'_' => [
    'save_success' => '保存成功！',
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通用命名" tabindex="-1"><a class="header-anchor" href="#通用命名" aria-hidden="true">#</a> 通用命名</h3>
<p>对于多个文件放置在同一个文件的语言函数， 我们约定使用 类简约方法+_+类名称 方式进行调用 例如后台控制器用户控制里的方法我们用的时候可以如此写</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># desktop.php
'login' => [
    'account_exists' => '用户名不存在！',
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用" tabindex="-1"><a class="header-anchor" href="#调用" aria-hidden="true">#</a> 调用</h2>
<ul>
<li>函数中调用</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>trans('desktop.login.xxx')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>模板中调用</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>@lang('desktop.login.xxx')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


