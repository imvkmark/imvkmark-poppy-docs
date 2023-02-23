<template><div><h1 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h1>
<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2>
<p>权限解释 : backend:system.global.manage</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>backend : 后台
system  : 模块
global.manage : 权限操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>权限分为全局权限和操作权限, 全局权限用在 控制器中, 赋值 <code v-pre>static::$permission</code> 权限来进行限定,操作权限用于在操作步骤中进行限定</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 系统
  <span class="token key atrule">description</span><span class="token punctuation">:</span> 系统权限
  <span class="token key atrule">slug</span><span class="token punctuation">:</span> backend<span class="token punctuation">:</span>system
  <span class="token key atrule">groups</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">slug</span><span class="token punctuation">:</span> global
        <span class="token key atrule">title</span><span class="token punctuation">:</span> 全局
        <span class="token key atrule">description</span><span class="token punctuation">:</span> 管理配置内容
        <span class="token key atrule">permissions</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">slug</span><span class="token punctuation">:</span> manage
              <span class="token key atrule">description</span><span class="token punctuation">:</span> 全局设置菜单
              <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
            <span class="token punctuation">-</span> <span class="token key atrule">slug</span><span class="token punctuation">:</span> page
              <span class="token key atrule">description</span><span class="token punctuation">:</span> 系统设置
              <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2>
<p>添加权限之后首先要对权限初始化才能够正确使用权限</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan py-core:permission init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设定" tabindex="-1"><a class="header-anchor" href="#设定" aria-hidden="true">#</a> 设定</h2>
<p>后台在用户角色中对权限进行赋予</p>
<h2 id="权限控制" tabindex="-1"><a class="header-anchor" href="#权限控制" aria-hidden="true">#</a> 权限控制</h2>
<h3 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h3>
<p>在控制器中定义变量 <code v-pre>self::$permission</code>, 并赋值全局权限, 则可以对控制器进行权限控制</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token doc-comment comment">/**
 * 广告位管理
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">PlaceController</span> <span class="token keyword">extends</span> <span class="token class-name">InitController</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这里的权限定义可以和策略定义在一处</span>
        <span class="token comment">// 可以写成</span>
        <span class="token comment">// self::$permission = AdPlacePolicy::getPermissionMap();</span>
        <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token variable">$permission</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'global'</span>     <span class="token operator">=></span> <span class="token string single-quoted-string">'backend:ad.place.manage'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3>
<p><strong>策略中权限的定义</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token doc-comment comment">/**
 * 用户角色策略
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">AdPlacePolicy</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">PolicyTrait</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">array</span></span> 权限映射
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token variable">$permissionMap</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token comment">// for controller</span>
        <span class="token string single-quoted-string">'establish'</span>  <span class="token operator">=></span> <span class="token string single-quoted-string">'backend:ad.place.establish'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'global'</span>     <span class="token operator">=></span> <span class="token string single-quoted-string">'backend:ad.place.manage'</span><span class="token punctuation">,</span>
        <span class="token comment">// create 操作 必须要有对应的  'backend:ad.place.establish' 权限</span>
        <span class="token string single-quoted-string">'create'</span>     <span class="token operator">=></span> <span class="token string single-quoted-string">'backend:ad.place.establish'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'edit'</span>       <span class="token operator">=></span> <span class="token string single-quoted-string">'backend:ad.place.establish'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'delete'</span>     <span class="token operator">=></span> <span class="token string single-quoted-string">'backend:ad.place.delete'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'permission'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'backend:ad.place.permission'</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>页面中对元素权限的判定</strong></p>
<p><em>创建</em></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>@can('create', \Ad\Models\AdPlace::class)
    &lt;a href="{{route_url('ad:backend.place.establish')}}"
       class="layui-btn layui-btn-sm J_iframe">
        添加广告位
    &lt;/a>
@endcan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>编辑</em></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>@can('edit', $item)
    &lt;a data-toggle="tooltip" title="编辑"
       href="{{route_url('ad:backend.place.establish', [$item->id])}}">
        &lt;i class="fa fa-edit text-info">&lt;/i>
    &lt;/a>
@endcan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


