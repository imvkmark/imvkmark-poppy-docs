import{_ as e,o as i,c as n,b as s}from"./app.d1bf96cf.js";const d={},t=s(`<h1 id="\u6269\u5C55\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u5F00\u53D1" aria-hidden="true">#</a> \u6269\u5C55\u5F00\u53D1</h1><h2 id="composer-\u6587\u4EF6\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#composer-\u6587\u4EF6\u751F\u6210" aria-hidden="true">#</a> Composer \u6587\u4EF6\u751F\u6210</h2><p>composer.json \u6587\u4EF6\u89E3\u91CA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    # \u5305\u540D\u79F0, \u53EF\u4EE5\u81EA\u5B9A\u4E49 package \u540D\u79F0, \u86C7\u5F62\u5199\u6CD5
    &quot;name&quot;: &quot;poppy/ext-{package}&quot;,
    # \u63CF\u8FF0, \u5FC5\u987B\u662F\u82F1\u6587
    &quot;description&quot;: &quot;Poppy frontEnd support&quot;,
    &quot;type&quot;: &quot;poppy-extension&quot;,
    # \u4F5C\u8005
    &quot;authors&quot;: [
        {
            &quot;name&quot;: &quot;Mark Zhao&quot;,
            &quot;email&quot;: &quot;zhaody901@126.com&quot;
        }
    ],
    # \u4F9D\u8D56\u5305 \u4E0D\u4F9D\u8D56\u5219\u7559\u7A7A
    &quot;require&quot;: {
        &quot;php&quot;: &quot;&gt;=7.0.0&quot;,
        # \u52A0\u8F7D\u7B2C\u4E09\u65B9\u5305
        &quot;sabberworm/php-css-parser&quot;: &quot;^8.1&quot;
    },
    # \u81EA\u52A8\u52A0\u8F7D\u547D\u540D\u7A7A\u95F4
    # \u547D\u540D\u7A7A\u95F4 {Package} \u5E94\u5F53\u548C name \u76F8\u5339\u914D
    &quot;autoload&quot;: {
        &quot;psr-4&quot;: {
            &quot;Poppy\\\\Extension\\\\{Package}\\\\&quot;: &quot;src/&quot;
        }
    },
    &quot;config&quot;: {
        &quot;preferred-install&quot;: &quot;dist&quot;
    },
    &quot;minimum-stability&quot;: &quot;dev&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6839\u76EE\u5F55\u6587\u4EF6\u751F\u6210\u65B9\u5F0F - \u521D\u59CB\u5316 \u7B2C\u4E00\u6B65: \u521B\u5EFA \u521B\u5EFA: \u5982\u679C\u6CA1\u6709 ext-{package}/composer.json \u4E2D\u7684\u65F6\u5019</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ composer init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>composer \u6587\u4EF6\u52A0\u8F7D</p><p>\u751F\u6210 autoload \u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ composer update -vvv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6E05\u7A7A\u8FDB\u884C poppy \u4F18\u5316,\u91CD\u7F6E\u7F13\u5B58, \u52A0\u8F7D\u5F53\u524D\u5305(From notadd)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ php artisan poppy:optimize
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u81F3\u6B64\u547D\u540D\u7A7A\u95F4\u53EF\u4EE5\u81EA\u52A8\u52A0\u8F7D\u6210\u529F</p><h2 id="\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#\u6280\u5DE7" aria-hidden="true">#</a> \u6280\u5DE7</h2><ol><li>\u5982\u4F55\u9A8C\u8BC1 trans \u6587\u6863\u662F\u5426\u6B63\u786E</li></ol><ul><li>\u4F7F\u7528 phpstorm \u641C\u7D22\u51FA\u6240\u6709\u6240\u6709 <code>trans(&#39;</code> \u5339\u914D\u7684\u6587\u6863</li><li>\u4F7F\u7528 <code>open in window</code>\u6253\u5F00</li><li>\u90AE\u4EF6\u6839\u83DC\u5355\u9009\u62E9 <code>Export to text file</code> \u9009\u62E9\u4F4D\u7F6E\u8FDB\u884C\u4FDD\u5B58</li><li>\u8FD0\u884C\u547D\u4EE4 <code>php artisan py-core:inspect trans --export=/Users/duoli/Desktop/report.txt</code></li></ul>`,15),o=[t];function a(l,r){return i(),n("div",null,o)}const c=e(d,[["render",a],["__file","extension.html.vue"]]);export{c as default};
