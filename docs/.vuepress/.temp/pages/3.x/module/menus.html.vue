<template><div><h1 id="菜单" tabindex="-1"><a class="header-anchor" href="#菜单" aria-hidden="true">#</a> 菜单</h1>
<h2 id="支持的类型" tabindex="-1"><a class="header-anchor" href="#支持的类型" aria-hidden="true">#</a> 支持的类型</h2>
<p>key 包含 backend(后端), develop(开发), web(前台)这几个部分.</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">title</span><span class="token punctuation">:</span> 广告管理
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">"fa fa-audio-description"</span>
    <span class="token key atrule">groups</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 广告管理
          <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">"fa fa-audio-description"</span>
          <span class="token key atrule">injection</span><span class="token punctuation">:</span> <span class="token string">"poppy.mgr-page/backend||setting"</span>
          <span class="token key atrule">children</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 广告位管理
                <span class="token key atrule">route</span><span class="token punctuation">:</span> py<span class="token punctuation">-</span>ad<span class="token punctuation">:</span>backend.place.index
                <span class="token key atrule">permission</span><span class="token punctuation">:</span> backend<span class="token punctuation">:</span>poppy<span class="token punctuation">-</span>ad.place.manage
<span class="token key atrule">develop</span><span class="token punctuation">:</span> <span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="key-说明" tabindex="-1"><a class="header-anchor" href="#key-说明" aria-hidden="true">#</a> key 说明</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>title     : 标题
icon      : 支持的图标
groups    : 分组(数组)
injection : 分组的插入目标地 'poppy.mgr-page/backend||setting' 代表放置到 mgr-page/backend setting 那个 key 下模块的后台分组
match     : 用于路由的第三级别, 页面中内容区域和右侧菜单项目的匹配,不设置可能会导致页面菜单为空
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


