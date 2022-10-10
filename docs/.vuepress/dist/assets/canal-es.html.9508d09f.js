import{_ as n,o as s,c as e,b as a}from"./app.d1bf96cf.js";const i={},l=a(`<h1 id="canales-\u540C\u6B65\u5BFC\u5165\u76D1\u542C\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#canales-\u540C\u6B65\u5BFC\u5165\u76D1\u542C\u7EC4\u4EF6" aria-hidden="true">#</a> CanalEs - \u540C\u6B65\u5BFC\u5165\u76D1\u542C\u7EC4\u4EF6</h1><blockquote><p>\u4E00\u4E2A\u628A <code>Mysql</code> \u8868\u6570\u636E\u5BFC\u5165\u5230 <code>Es</code> \u7684\u5DE5\u5177.</p></blockquote><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="env-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#env-\u914D\u7F6E" aria-hidden="true">#</a> Env \u914D\u7F6E</h3><ul><li><code>.env</code>\u6587\u4EF6\u4E2D\u914D\u7F6E\u5BF9\u5E94\u7684<code>Mysql</code>\u8FDE\u63A5\u4FE1\u606F\u53CA<code>Es</code>\u914D\u7F6E\u4FE1\u606F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#  db
#-------------------------------------------------------
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=
DB_USERNAME=root
DB_PASSWORD=
DB_CHARSET=utf8mb4
DB_COLLATION=utf8mb4_unicode_ci

#  es
#-------------------------------------------------------
ELASTICSEARCH_CONCURRENCY=100
ELASTICSEARCH_USER=
ELASTICSEARCH_PASS=
#------------- scheme://host:port;scheme2://host2:port2 -------------#
ELASTICSEARCH_HOSTS=http://127.0.0.1:9200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7D22\u5F15\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u914D\u7F6E" aria-hidden="true">#</a> \u7D22\u5F15\u914D\u7F6E</h3><p>\u6B64\u9879\u76EE\u8BFB\u53D6 <code>poppy.canal-es</code>\xA0 \u914D\u7F6E\u8BE6\u7EC6\u914D\u7F6E\u4EE5\u53CA\u8BF4\u660E\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// canal \u914D\u7F6E, \u76D1\u542C\u7684\u4E3B\u673A
&#39;canal&#39;  =&gt; [
    &#39;client_type&#39;     =&gt; CanalClient::TYPE_SWOOLE,
    &#39;host&#39;            =&gt; env(&#39;CANAL_HOST&#39;, &#39;127.0.0.1&#39;),
    &#39;port&#39;            =&gt; env(&#39;CANAL_PORT&#39;, 11111),
    &#39;client_id&#39;       =&gt; env(&#39;CANAL_CLIENT_ID&#39;, 1001),
    &#39;connect_timeout&#39; =&gt; env(&#39;CANAL_CONNECT_TIMEOUT&#39;, 10),
    &#39;message_size&#39;    =&gt; 100,
],

// filter .*\\\\..*,shop.user

&#39;mapper&#39; =&gt; [
    // key \u5B9A\u4E49\u7684\u662F\u7D22\u5F15\u7684\u540D\u79F0
    &#39;example_key&#39;  =&gt; [
        // \u6587\u4EF6\u683C\u5F0F\u5DE5\u5177, \u5F53\u6570\u636E\u4ECE\u5E93\u4E2D\u53D6\u51FA\u6765\u4E4B\u540E\u4F20\u9012\u7ED9es\u4E4B\u524D\u8FDB\u884C\u7684\u6570\u636E\u5904\u7406
        &#39;formatter&#39;   =&gt; &#39;&#39;,
        // \u6587\u4EF6\u7D22\u5F15\u5C5E\u6027\u5B9A\u4E49, \u521B\u5EFA\u7D22\u5F15\u6240\u9700\u7684\u6570\u636E
        &#39;property&#39;    =&gt; CsdnUser::class,
        // \u6570\u636E\u8868, \u7528\u4E8E\u5BFC\u5165\u7684\u8868\u540D\u79F0\u83B7\u53D6
        &#39;table&#39;       =&gt; &#39;canal_example.csdn_users&#39;,
        // canal \u7684 instance \u540D\u79F0
        &#39;destination&#39; =&gt; &#39;csdn_user&#39;,
        // \u76D1\u542C canal \u6570\u636E\u53D8\u52A8
        &#39;filter&#39;      =&gt; &#39;canal_example.csdn_users&#39;,
    ],
],

&#39;elasticsearch&#39; =&gt; [
    &#39;concurrency&#39; =&gt; env(&#39;ELASTICSEARCH_CONCURRENCY&#39;, 100),

    &#39;hosts&#39; =&gt; value(function () {
        $settings = env(&#39;ELASTICSEARCH_HOSTS&#39;);
        $hosts    = array_filter(explode(&#39;;&#39;, $settings));

        return $hosts ? array_map(function ($url) {
            return array_merge(parse_url($url), [
                &#39;user&#39; =&gt; env(&#39;ELASTICSEARCH_USER&#39;, null),
                &#39;pass&#39; =&gt; env(&#39;ELASTICSEARCH_PASS&#39;, null),
            ]);
        }, $hosts) : [
            [
                &#39;host&#39;   =&gt; &#39;127.0.0.1&#39;,
                &#39;port&#39;   =&gt; &#39;9200&#39;,
                &#39;scheme&#39; =&gt; &#39;http&#39;,
                &#39;user&#39;   =&gt; env(&#39;ELASTICSEARCH_USER&#39;, null),
                &#39;pass&#39;   =&gt; env(&#39;ELASTICSEARCH_PASS&#39;, null),
            ],
        ];
    }),
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7D22\u5F15" aria-hidden="true">#</a> \u521B\u5EFA\u7D22\u5F15</h2><p>\u6267\u884C<code>index:create</code>\u547D\u4EE4,\u5373\u53EF\u521B\u5EFA\u6307\u5B9A\u540D\u79F0\u7684\u7D22\u5F15</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan ce:create-index index-name <span class="token punctuation">[</span>-p property class<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u8BBE\u7F6E<code>Mappings</code>\u5E76\u521B\u5EFA\u7D22\u5F15</strong></p><ul><li>\u521B\u5EFA<code>Property</code>\u7C7B\u5E76\u4E14\u7EE7\u627F <code>\\Poppy\\CanalEs\\Classes\\Properties\\Property</code> \u7C7B,\u7F16\u5199\u9700\u8981\u6307\u5B9A\u7684\u5B57\u6BB5\u53CA\u7C7B\u578B</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Properties</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package"><span class="token punctuation">\\</span>Poppy<span class="token punctuation">\\</span>CanalEs<span class="token punctuation">\\</span>Classes<span class="token punctuation">\\</span>Properties<span class="token punctuation">\\</span>Property</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">Property</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;id&#39;</span>       <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;keyword&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span>     <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;text&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;login_at&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;type&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;date&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;format&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;yyyy-MM-dd HH:mm:ss&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6267\u884C\u547D\u4EE4</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan ce:create-index example -p <span class="token string">&quot;\\App\\Properties<span class="token entity" title="\\E">\\E</span>xample&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5BFC\u5165mysql\u6570\u636E\u5230-es" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165mysql\u6570\u636E\u5230-es" aria-hidden="true">#</a> \u5BFC\u5165<code>Mysql</code>\u6570\u636E\u5230 Es</h2><p>\u6267\u884C<code>import</code>\u547D\u4EE4\u5373\u53EF\u628A\u6307\u5B9A\u6570\u636E\u8868\u7684\u6570\u636E\u5BFC\u5165\u5230 Es \u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan ce:import tb_name <span class="token punctuation">[</span>--index tb_name<span class="token punctuation">]</span> <span class="token punctuation">[</span>--size <span class="token number">10000</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--start <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--end <span class="token number">100000</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-f <span class="token function">format</span> class<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p
property class<span class="token punctuation">]</span> <span class="token punctuation">[</span>-v<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u53C2\u6570\u8BF4\u660E</strong></p><ul><li><code>index</code> \xA0 \u76EE\u6807\u7D22\u5F15\u540D\u79F0,\u4E0D\u4F20\u9012\u9ED8\u8BA4\u4E0E\u6570\u636E\u8868\u540C\u540D</li><li><code>size</code> \xA0 \xA0 \u6BCF\u6279\u67E5\u8BE2\u7684\u6570\u636E\u8868\u6570\u91CF,\u9ED8\u8BA4<code>10000</code></li><li><code>start</code> \xA0 \u5BFC\u5165\u6570\u636E\u8D77\u59CB id</li><li><code>end</code> \xA0 \xA0 \u5BFC\u5165\u6570\u636E\u622A\u6B62 id</li><li><code>p</code> \xA0 \xA0 \xA0 \u67E5\u8BE2\u6570\u636E\u8868\u7684\u5B57\u6BB5, \u9ED8\u8BA4\u67E5\u8BE2\u5168\u90E8</li><li><code>v</code> \xA0 \xA0 \xA0 Debug Mode, \u652F\u6301\u8F93\u51FA\u6267\u884C\u65F6\u5019\u7684 Sql \u8F93\u51FA</li><li><code>f</code> \xA0 \xA0 \xA0 \u5BFC\u5165\u6570\u636E\u683C\u5F0F\u5316\u6587\u4EF6</li></ul>`,22),t=[l];function c(d,p){return s(),e("div",null,t)}const r=n(i,[["render",c],["__file","canal-es.html.vue"]]);export{r as default};
