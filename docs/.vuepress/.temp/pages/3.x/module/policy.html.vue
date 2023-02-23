<template><div><h1 id="策略" tabindex="-1"><a class="header-anchor" href="#策略" aria-hidden="true">#</a> 策略</h1>
<h2 id="位置" tabindex="-1"><a class="header-anchor" href="#位置" aria-hidden="true">#</a> 位置</h2>
<p>策略放置在 <code v-pre>{module}/src/models/polices</code> 文件夹中</p>
<p>策略映射放在 <code v-pre>{module}/src/ServiceProvider.php</code> 文件中, 如下定义</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$policies</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token class-name static-context">PamRole</span><span class="token operator">::</span><span class="token keyword">class</span>    <span class="token operator">=></span> <span class="token class-name static-context">RolePolicy</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token class-name static-context">PamAccount</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=></span> <span class="token class-name static-context">AccountPolicy</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="策略权限" tabindex="-1"><a class="header-anchor" href="#策略权限" aria-hidden="true">#</a> 策略权限</h2>
<p>对特定用户，你可能希望通过指定的策略授权所有动作。
要达到这个目的，可以在策略中定义一个  <code v-pre>before</code>  方法。<code v-pre>before</code>  方法会在策略中其它所有方法之前执行，这样提供了一种方式来授权动作而不是指定的策略方法来执行判断。</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">PolicyTrait</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想拒绝用户所有的授权，你应该在  <code v-pre>before</code>  方法中返回  <code v-pre>false</code>。如果返回的是  <code v-pre>null</code>，则通过其它的策略方法来决定授权与否。</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token doc-comment comment">/**
 * 策略映射
 */</span>
<span class="token keyword">trait</span> <span class="token class-name-definition class-name">PolicyTrait</span>
<span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token class-name">PamAccount</span> <span class="token parameter">$pam</span>     账号
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span>     <span class="token parameter">$ability</span> 能力
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span><span class="token punctuation">|</span><span class="token keyword">null</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">before</span><span class="token punctuation">(</span><span class="token class-name type-declaration">PamAccount</span> <span class="token variable">$pam</span><span class="token punctuation">,</span> <span class="token variable">$ability</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$permission</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token variable">$permissionMap</span><span class="token punctuation">[</span><span class="token variable">$ability</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token string single-quoted-string">''</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$permission</span> <span class="token operator">?</span> <span class="token variable">$pam</span><span class="token operator">-></span><span class="token function">capable</span><span class="token punctuation">(</span><span class="token variable">$permission</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token class-name return-type">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 策略映射
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span></span>#
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getPermissionMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token variable">$permissionMap</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h2>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token doc-comment comment">/**
 * 广告位管理
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">PlaceController</span> <span class="token keyword">extends</span> <span class="token class-name">InitController</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token variable">$permission</span> <span class="token operator">=</span> <span class="token class-name static-context">AdPlacePolicy</span><span class="token operator">::</span><span class="token function">getPermissionMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里定义的 permission 权限会在 permission 中有拦截,
让用户无法通过控制器来进入这个操作, 看到相关的数据.</p>
</div></template>


