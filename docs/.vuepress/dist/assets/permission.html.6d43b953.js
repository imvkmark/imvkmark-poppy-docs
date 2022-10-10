import{_ as n,o as s,c as a,b as e}from"./app.d1bf96cf.js";const t={},i=e(`<h1 id="\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650" aria-hidden="true">#</a> \u6743\u9650</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u6743\u9650\u89E3\u91CA : backend:system.global.manage</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>backend : \u540E\u53F0
system  : \u6A21\u5757
global.manage : \u6743\u9650\u64CD\u4F5C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6743\u9650\u5206\u4E3A\u5168\u5C40\u6743\u9650\u548C\u64CD\u4F5C\u6743\u9650, \u5168\u5C40\u6743\u9650\u7528\u5728 \u63A7\u5236\u5668\u4E2D, \u8D4B\u503C <code>static::$permission</code> \u6743\u9650\u6765\u8FDB\u884C\u9650\u5B9A,\u64CD\u4F5C\u6743\u9650\u7528\u4E8E\u5728\u64CD\u4F5C\u6B65\u9AA4\u4E2D\u8FDB\u884C\u9650\u5B9A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u7CFB\u7EDF
  <span class="token key atrule">description</span><span class="token punctuation">:</span> \u7CFB\u7EDF\u6743\u9650
  <span class="token key atrule">slug</span><span class="token punctuation">:</span> backend<span class="token punctuation">:</span>system
  <span class="token key atrule">groups</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">slug</span><span class="token punctuation">:</span> global
        <span class="token key atrule">title</span><span class="token punctuation">:</span> \u5168\u5C40
        <span class="token key atrule">description</span><span class="token punctuation">:</span> \u7BA1\u7406\u914D\u7F6E\u5185\u5BB9
        <span class="token key atrule">permissions</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">slug</span><span class="token punctuation">:</span> manage
              <span class="token key atrule">description</span><span class="token punctuation">:</span> \u5168\u5C40\u8BBE\u7F6E\u83DC\u5355
              <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
            <span class="token punctuation">-</span> <span class="token key atrule">slug</span><span class="token punctuation">:</span> page
              <span class="token key atrule">description</span><span class="token punctuation">:</span> \u7CFB\u7EDF\u8BBE\u7F6E
              <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h2><p>\u6DFB\u52A0\u6743\u9650\u4E4B\u540E\u9996\u5148\u8981\u5BF9\u6743\u9650\u521D\u59CB\u5316\u624D\u80FD\u591F\u6B63\u786E\u4F7F\u7528\u6743\u9650</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ php artisan py-core:permission init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8BBE\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u5B9A" aria-hidden="true">#</a> \u8BBE\u5B9A</h2><p>\u540E\u53F0\u5728\u7528\u6237\u89D2\u8272\u4E2D\u5BF9\u6743\u9650\u8FDB\u884C\u8D4B\u4E88</p><h2 id="\u6743\u9650\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u63A7\u5236" aria-hidden="true">#</a> \u6743\u9650\u63A7\u5236</h2><h3 id="\u63A7\u5236\u5668" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5668" aria-hidden="true">#</a> \u63A7\u5236\u5668</h3><p>\u5728\u63A7\u5236\u5668\u4E2D\u5B9A\u4E49\u53D8\u91CF <code>self::$permission</code>, \u5E76\u8D4B\u503C\u5168\u5C40\u6743\u9650, \u5219\u53EF\u4EE5\u5BF9\u63A7\u5236\u5668\u8FDB\u884C\u6743\u9650\u63A7\u5236</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * \u5E7F\u544A\u4F4D\u7BA1\u7406
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">PlaceController</span> <span class="token keyword">extends</span> <span class="token class-name">InitController</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8FD9\u91CC\u7684\u6743\u9650\u5B9A\u4E49\u53EF\u4EE5\u548C\u7B56\u7565\u5B9A\u4E49\u5728\u4E00\u5904</span>
        <span class="token comment">// \u53EF\u4EE5\u5199\u6210</span>
        <span class="token comment">// self::$permission = AdPlacePolicy::getPermissionMap();</span>
        <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token variable">$permission</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;global&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;backend:ad.place.manage&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a> \u64CD\u4F5C</h3><p><strong>\u7B56\u7565\u4E2D\u6743\u9650\u7684\u5B9A\u4E49</strong></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * \u7528\u6237\u89D2\u8272\u7B56\u7565
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">AdPlacePolicy</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">PolicyTrait</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">array</span></span> \u6743\u9650\u6620\u5C04
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token variable">$permissionMap</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token comment">// for controller</span>
        <span class="token string single-quoted-string">&#39;establish&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;backend:ad.place.establish&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;global&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;backend:ad.place.manage&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// create \u64CD\u4F5C \u5FC5\u987B\u8981\u6709\u5BF9\u5E94\u7684  &#39;backend:ad.place.establish&#39; \u6743\u9650</span>
        <span class="token string single-quoted-string">&#39;create&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;backend:ad.place.establish&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;edit&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;backend:ad.place.establish&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;delete&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;backend:ad.place.delete&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;permission&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;backend:ad.place.permission&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u9875\u9762\u4E2D\u5BF9\u5143\u7D20\u6743\u9650\u7684\u5224\u5B9A</strong></p><p><em>\u521B\u5EFA</em></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@can(&#39;create&#39;, \\Ad\\Models\\AdPlace::class)
    &lt;a href=&quot;{{route_url(&#39;ad:backend.place.establish&#39;)}}&quot;
       class=&quot;layui-btn layui-btn-sm J_iframe&quot;&gt;
        \u6DFB\u52A0\u5E7F\u544A\u4F4D
    &lt;/a&gt;
@endcan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>\u7F16\u8F91</em></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@can(&#39;edit&#39;, $item)
    &lt;a data-toggle=&quot;tooltip&quot; title=&quot;\u7F16\u8F91&quot;
       href=&quot;{{route_url(&#39;ad:backend.place.establish&#39;, [$item-&gt;id])}}&quot;&gt;
        &lt;i class=&quot;fa fa-edit text-info&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
@endcan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),l=[i];function c(p,o){return s(),a("div",null,l)}const r=n(t,[["render",c],["__file","permission.html.vue"]]);export{r as default};
