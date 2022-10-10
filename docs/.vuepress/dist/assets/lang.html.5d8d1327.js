import{_ as e,o as n,c as i,b as a}from"./app.d1bf96cf.js";const s={},d=a(`<h1 id="\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u56FD\u9645\u5316" aria-hidden="true">#</a> \u56FD\u9645\u5316</h1><h2 id="\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u7F6E" aria-hidden="true">#</a> \u4F4D\u7F6E</h2><p>\u516C\u5171\u8BED\u8A00\u4F4D\u7F6E: <code>resource/lang/zh/</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>validator.php    # \u9A8C\u8BC1\u6587\u4EF6, \u548C\u6846\u67B6\u5339\u914D\u7684
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6A21\u5757\u8BED\u8A00\u4F4D\u7F6E: <code>modules/{module}/resources/lang</code> \u6587\u4EF6\u5939\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>action.php     # \u5B58\u653E\u4E1A\u52A1\u903B\u8F91
seo.php        # Seo \u6807\u9898\u4F18\u5316\u6587\u4EF6
util.php       # \u5176\u4ED6\u76F8\u5173\u7684\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="action-php" tabindex="-1"><a class="header-anchor" href="#action-php" aria-hidden="true">#</a> action.php</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* \u9A8C\u8BC1\u7801
 * ---------------------------------------- */
&#39;captcha&#39; =&gt; [   // Action
    &#39;send_passport_format_error&#39; =&gt; &#39;\u65E0\u6CD5\u53D1\u9001\u9A8C\u8BC1\u7801, \u683C\u5F0F\u4E0D\u6B63\u786E&#39;,
    &#39;account_miss&#39;               =&gt; &#39;\u6307\u5B9A\u8D26\u53F7\u4E0D\u5B58\u5728, \u65E0\u6CD5\u53D1\u9001&#39;,
    &#39;account_exists&#39;             =&gt; &#39;\u6307\u5B9A\u624B\u673A\u53F7\u5DF2\u7ECF\u5B58\u5728, \u4E0D\u80FD\u7ED1\u5B9A, \u8BF7\u66F4\u6362&#39;,
    &#39;account_no_password&#39;        =&gt; &#39;\u8D26\u6237\u672A\u8BBE\u7F6E\u5BC6\u7801&#39;,
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Action \u7684\u6587\u4EF6\u7684\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>trans(&#39;py-system::action.captcha.account_no_password&#39;),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="seo-php" tabindex="-1"><a class="header-anchor" href="#seo-php" aria-hidden="true">#</a> seo.php</h2><p>\u8FD9\u91CC\u6839\u636E\u8DEF\u7531\u7684\u540D\u79F0\u6765\u8FD4\u56DE Seo \u7684\u6807\u9898\u8FD8\u6709\u63CF\u8FF0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>return [
    &#39;web_layout_index&#39;             =&gt; &#39;\u9875\u9762\u5E03\u5C40&#39;,
    &#39;web_res_mix&#39;                  =&gt; &#39;\u8D44\u6E90\u8C03\u7528&#39;,
    &#39;web_res_translate&#39;            =&gt; [
        &#39;\u8D44\u6E90\u7FFB\u8BD1&#39;,
        &#39;\u901A\u8FC7\u8D44\u6E90\u7684\u7FFB\u8BD1\u6765\u8FD4\u56DE\u54CD\u5E94\u7684 json \u4FE1\u606F&#39;,
    ],
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),r=[d];function l(t,c){return n(),i("div",null,r)}const u=e(s,[["render",l],["__file","lang.html.vue"]]);export{u as default};
