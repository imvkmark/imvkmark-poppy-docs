import{_ as e,o as n,c as a,b as i}from"./app.d1bf96cf.js";const s={},d=i(`<h1 id="\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B" aria-hidden="true">#</a> \u6A21\u578B</h1><h2 id="\u547D\u540D\u53CA\u653E\u7F6E\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u53CA\u653E\u7F6E\u4F4D\u7F6E" aria-hidden="true">#</a> \u547D\u540D\u53CA\u653E\u7F6E\u4F4D\u7F6E</h2><h3 id="\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a> \u521B\u5EFA</h3><p>\u4F7F\u7528 <code>php artisan poppy:model {module} {DbModel}</code> \u6765\u751F\u6210\u6A21\u578B</p><p>\u6A21\u578B\u6587\u4EF6\u7EDF\u4E00\u653E\u7F6E\u5728 <code>~/modules/{module}/src/models/</code> \u6587\u4EF6\u5939\u4E0B, \u8FD9\u4E2A\u6587\u4EF6\u5939\u4E2D\u5305\u542B 4 \u4E2D\u7C7B\u578B\u7684\u6570\u636E</p><ul><li>\u6A21\u578B</li><li>\u7B5B\u9009\u8FC7\u6EE4\u5668</li><li>\u7B56\u7565</li><li>\u63A5\u53E3\u8D44\u6E90\u6587\u4EF6</li></ul><p>\u914D\u7F6E\u9879\u76EE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6307\u5B9A\u8868\u540D
protected $table = &#39;&#39;;

# \u6307\u5B9A\u4E3B\u952E, \u5982\u679C \u4E3B\u952E\u4E3A &#39;id&#39; \u53EF\u4EE5\u4E0D\u7528\u6307\u5B9A\u9ED8\u8BA4\u503C
protected $primaryKey = &#39;&#39;;

# \u6307\u5B9A\u63D2\u5165\u6570\u636E\u5E93\u5B57\u6BB5
protected $fillable = [];

# \u65F6\u95F4\u662F\u5426\u81EA\u52A8\u7EF4\u62A4, (false \u4E0D\u81EA\u52A8\u7EF4\u62A4,true \u81EA\u52A8\u7EF4\u62A4) \u9ED8\u8BA4true
protected $timestamp = false;

# \u65F6\u95F4\u7C7B\u578B \u4F8B:  logined_at, disabled_at  \u8981\u653E\u5728
protected $dates = [
    &#39;logined_at&#39;,
    &#39;disabled_at&#39;,
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6A21\u578B</strong>:</p><p>\u6A21\u578B\u6587\u4EF6\u653E\u7F6E\u5728\u4E0A\u8FF0\u6587\u4EF6\u5939\u4E2D\u7684\u6839\u76EE\u5F55( <code>~</code> \xA0)\u4E0B,\u547D\u540D\u4E0E\u6570\u636E\u8868\u540D\u79F0\u76F8\u5BF9\u5E94</p><p><strong>\u7B5B\u9009\u8FC7\u6EE4\u5668</strong></p><p>\u653E\u7F6E\u4F4D\u7F6E : <code>~/filters</code> \u6587\u4EF6\u547D\u540D : \u6A21\u578B\u540D\u79F0+Filter \u4F8B\u5982 : (<code>PamAccountFilter</code>)</p><p><strong>\u7B56\u7565</strong></p><p>\u653E\u7F6E\u4F4D\u7F6E : <code>~/policies</code> \u6587\u4EF6\u547D\u540D : \u6A21\u578B\u540D\u79F0+Policy \u4F8B\u5982 : (<code>PamAccountPolicy</code>)</p><p><strong>\u8D44\u6E90\u6587\u4EF6(\u63A5\u53E3\u8D44\u6E90)</strong>:</p><p>\u653E\u7F6E\u4F4D\u7F6E : <code>~/resources</code> \u6587\u4EF6\u547D\u540D : \u6A21\u578B\u540D\u79F0+Resource \u4F8B\u5982 \u{1F626}<code>PamAccountResource</code>)</p><h3 id="\u6A21\u578B\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u6CE8\u91CA" aria-hidden="true">#</a> \u6A21\u578B\u6CE8\u91CA</h3><p>\u6A21\u578B\u9700\u8981\u6709\u5B8C\u5907\u7684\u6587\u6863\u6CE8\u91CA, \u65E5\u671F\u683C\u5F0F\u548C\u6587\u5B57\u8BF4\u660E, \u5E76\u4E14\u9700\u8981\u53C2\u6570\u548C\u6CE8\u91CA\u5BF9\u9F50</p><p>\u4F7F\u7528 <code>ide-helper</code> \u751F\u6210\u6A21\u578B\u6587\u6863\u8BED\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ php artisan ide-helper:model &quot;System\\Models\\PamAccount&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6A21\u578B\u6CE8\u91CA\u9700\u8981\u5BFC\u5165\u63D0\u793A, \u5728 PHPstorm \u4E2D\u9700\u8981 <code>alt+enter</code> \u8FDB\u884C <code>Import Class</code> \u6216\u8005 <code>Simplify FQN</code></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment"># bad</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">\\</span>Carbon<span class="token punctuation">\\</span>Carbon</span>    <span class="token parameter">$created_at</span>
 */</span>

 <span class="token doc-comment comment">/**
 * <span class="token keyword">@property</span> <span class="token class-name">Carbon</span>    <span class="token parameter">$created_at</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B8C\u6574\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u6CE8\u91CA" aria-hidden="true">#</a> \u5B8C\u6574\u6CE8\u91CA</h3><p>\u8FD9\u91CC\u7684\u6CE8\u91CA\u5FC5\u987B\u653E\u7F6E\u5728\u7C7B\u6587\u4EF6\u4E2D\u8FDB\u884C\u5B9A\u4E49, \u91CC\u8FB9\u7684\u5B57\u6BB5\u503C\u51FA\u73B0\u7684\u4EC5\u4EC5\u662F\u65B0\u6A21\u5757\u4F7F\u7528\u7684, \u5305\u542B\u517C\u5BB9, \u4F46\u662F\u4E0D\u5305\u542B\u8C03\u7528\u7684\u5B57\u6BB5\u547D\u540D.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * System\\BaseBanword
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token keyword">integer</span></span>        <span class="token parameter">$item_id</span>      id
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token keyword">string</span></span>         <span class="token parameter">$replace_from</span> \u9700\u8981\u66FF\u6362\u7684\u8BCD
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token keyword">string</span></span>         <span class="token parameter">$replace_to</span>   \u66FF\u6362\u4E3A
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token keyword">boolean</span></span>        <span class="token parameter">$deny</span>         \u662F\u5426\u8FDB\u884C\u62E6\u622A(0,1)
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">\\</span>Carbon<span class="token punctuation">\\</span>Carbon</span> <span class="token parameter">$created_at</span>   \u521B\u5EFA\u65F6\u95F4
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">\\</span>Carbon<span class="token punctuation">\\</span>Carbon</span> <span class="token parameter">$deleted_at</span>   \u5220\u9664\u65F6\u95F4
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">\\</span>Carbon<span class="token punctuation">\\</span>Carbon</span> <span class="token parameter">$updated_at</span>   \u66F4\u65B0\u65F6\u95F4
 */</span>
 <span class="token keyword">class</span> <span class="token class-name-definition class-name">BaseBanword</span> <span class="token keyword">extends</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Eloquent</span> <span class="token punctuation">{</span>
     <span class="token operator">...</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B58\u50A8\u4E3A datetime \u7C7B\u578B\u7684\u6570\u5B57\u653E\u5230 $dates \u6570\u7EC4\u4E2D</p><h3 id="\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D" aria-hidden="true">#</a> \u547D\u540D</h3><p><strong>\u6A21\u578B\u6587\u4EF6\u4F7F\u7528 \u9996\u5B57\u6BCD\u5927\u5199\u7684\u9A7C\u5CF0\u65B9\u5F0F</strong></p><p>\u4F8B\u5982 \u7EA6\u5B9A\u7684\u6570\u636E\u8868\u7684\u540D\u79F0\u662F <code>base_config</code>, \u547D\u540D\u7684\u6570\u636E\u5E93\u6A21\u578B\u662F <code>BaseConfig</code></p><p><strong>\u6A21\u578B\u91C7\u7528\u5206\u7EC4</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>base    # \u540E\u53F0
pam     # \u7528\u6237\u8EAB\u4EFD\u8BA4\u8BC1
order   # \u8BA2\u5355
message # \u6D88\u606F
user    # \u7528\u6237
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u547D\u540D\u7A7A\u95F4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php namespace {Module}\\Models;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8868-\u4E3B\u952E" tabindex="-1"><a class="header-anchor" href="#\u8868-\u4E3B\u952E" aria-hidden="true">#</a> \u8868/\u4E3B\u952E</h3><ul><li><code>$table</code> \u5B9A\u4E49\u7684\u662F\u539F\u59CB\u8868\u7684\u540D\u79F0</li><li><code>$primaryKey</code> \u5B9A\u4E49\u7684\u662F\u4E3B\u952E</li></ul><h4 id="\u8BBE\u8BA1\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u539F\u5219" aria-hidden="true">#</a> \u8BBE\u8BA1\u539F\u5219</h4><ul><li>\u5B57\u4E32\u9ED8\u8BA4\u503C\u5FC5\u987B\u662F &#39;&#39;</li><li>\u6570\u503C\u5FC5\u987B\u5B58\u5728\u9ED8\u8BA4\u503C, \u9ED8\u8BA4\u503C\u4E3A 0 (\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u6765\u5B9A\u4E49)</li><li>\u552F\u4E00 \u5B57\u6BB5\u6620\u5C04\u7684\u552F\u4E00\u6027 \u4F8B\u5982 group_id \u4EC5\u4EC5\u662F\u4F1A\u5458\u7EC4 ID</li><li>\u6A21\u5757\u5206\u7EC4 pam \u4F5C\u4E3A\u6743\u9650\u9A8C\u8BC1\u7EC4</li><li>\u4F7F\u7528\u6700\u7B80\u7565\u547D\u540D username</li><li>\u6570\u636E\u5E93\u76F8\u5173\u5C5E\u6027\u7684\u5B57\u6BB5\u653E\u7F6E\u5728\u4E00\u8D77</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>disable_reason
disabled_from_at
disabled_to_at
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6A21\u578B\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u5B9A\u4E49" aria-hidden="true">#</a> \u6A21\u578B\u5B9A\u4E49</h4><h4 id="kv-\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#kv-\u5B9A\u4E49" aria-hidden="true">#</a> kv \u5B9A\u4E49</h4><p>\u5F00\u53D1\u4E2D\u4E0D\u5141\u8BB8\u51FA\u73B0\u72B6\u6001\u662F 1, 2, 3, \u6240\u6709\u7684\u5BF9\u5E94\u9879\u76EE\u5FC5\u987B\u5728\u6A21\u578B\u4E2D\u7ED9\u4E88\u5B9A\u4E49, \u91C7\u7528\u5E38\u91CF\u7684\u65B9\u5F0F\u8FDB\u884C\u5B9A\u4E49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const LOCK_LOCK    = 1;
const LOCK_UNLOCK  = 0;

/**
 * \u9501\u5B9A/\u89E3\u9501
 * @param null $key
 * @return array|mixed
 */
public static function kvLock($key = null) {
    $desc = [
        self::LOCK_LOCK   =&gt; &#39;\u9501\u5B9A&#39;,
        self::LOCK_UNLOCK =&gt; &#39;\u89E3\u9501&#39;,
    ];
    return kv($key);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enum-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#enum-\u7684\u4F7F\u7528" aria-hidden="true">#</a> Enum \u7684\u4F7F\u7528</h3><p>\u5F00\u53D1\u4E2D\u4F7F\u7528<code>\u5E38\u91CF</code>\u6765\u66FF\u4EE3 <code>enum</code>, \u4E0D\u5F97\u4F7F\u7528 <code>enum</code> \u6765\u5BF9\u6570\u636E\u5E93\u8FDB\u884C\u679A\u4E3E, \u516C\u5171\u7684\u5B9A\u4E49\u653E\u7F6E\u5728<code>BaseConfig</code> \u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class BaseConfig{
    const YES = 1;
    const NO  = 0;

    public static function kvYn($key = null) {
            $desc = [
              self::YES   =&gt; &#39;\u662F&#39;,
              self::NO    =&gt; &#39;\u5426&#39;,
         ];
         return kv($key);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u8054\u5173\u7CFB\u7684\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u5173\u7CFB\u7684\u547D\u540D" aria-hidden="true">#</a> \u5173\u8054\u5173\u7CFB\u7684\u547D\u540D</h3><p>\u5BF9\u4E8E\u5173\u8054\u5173\u7CFB\u7684\u547D\u540D, \u91C7\u7528\u7B80\u5199\u683C\u5F0F. \u4F8B\u5982\u6211\u4EEC\u9700\u8981\u5173\u8054\u7528\u6237\u8868, \u6A21\u578B\u4E2D\u9700\u8981\u5982\u4E0B\u5B9A\u4E49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class FinanceCash{
    // ...
    public function pam() {
        return $this-&gt;belongsTo(App\\Models\\PamAccount::class, &#39;account_id&#39;, &#39;account_id&#39;);
    }
    // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5728\u4EE3\u7801\u4E2D\u8C03\u7528\u6A21\u578B\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u5728\u4EE3\u7801\u4E2D\u8C03\u7528\u6A21\u578B\u6CE8\u91CA" aria-hidden="true">#</a> \u5728\u4EE3\u7801\u4E2D\u8C03\u7528\u6A21\u578B\u6CE8\u91CA</h3><h4 id="\u6CE8\u91CA\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA\u8C03\u7528" aria-hidden="true">#</a> \u6CE8\u91CA\u8C03\u7528</h4><p>\u4F8B\u5982\u4EE5\u4E0B\u8FD9\u4E2A\u6A21\u578B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>...
* @property int    $login_times  \u767B\u5F55\u6B21\u6570[\u6210\u529F\u8BF7\u6C42\u63A5\u53E3\u4FBF\u8BA4\u5B9A\u4E3A1\u6B21]
...
class PamAccount extends \\Eloquent
{
   ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u4F7F\u7528 <code>sys_db(&#39;pam_account.login_times&#39;)</code> \u4FBF\u53EF\u4EE5\u83B7\u53D6</p><ul><li><code>pam_account</code> \u662F\u6A21\u578B\u7684\u86C7\u5F62\u5199\u6CD5</li><li><code>login_times</code> \u662F\u5B57\u6BB5\u540D\u79F0</li></ul><p>\u8FD9\u91CC\u6CE8\u610F\u7684\u662F, \u6CE8\u91CA\u4E2D <code>[]</code> \u5185\u7684\u5185\u5BB9\u8BA4\u5B9A\u4E3A\u6A21\u578B\u6CE8\u91CA, \u4E0D\u5FC5\u8FDB\u884C\u8FD4\u56DE</p><h4 id="\u6CE8\u91CA\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA\u66F4\u65B0" aria-hidden="true">#</a> \u6CE8\u91CA\u66F4\u65B0</h4><p>\u5982\u679C\u6CE8\u91CA\u66F4\u65B0\u4E4B\u540E\u6A21\u578B\u4E2D\u8C03\u7528\u6CA1\u6709\u83B7\u53D6\u5230\u6700\u65B0\u7684, \u6E05\u7A7A\u4E0B\u7F13\u5B58\u5373\u53EF.</p><h2 id="\u6570\u636E\u8868\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8868\u5B57\u6BB5" aria-hidden="true">#</a> \u6570\u636E\u8868\u5B57\u6BB5</h2><h3 id="\u6570\u636E\u8868\u5E38\u7528\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8868\u5E38\u7528\u5B57\u6BB5" aria-hidden="true">#</a> \u6570\u636E\u8868\u5E38\u7528\u5B57\u6BB5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>id               : \u6761\u76EEID
name             : \u6807\u793A\u7B26, \u53EA\u80FD\u662F \u82F1\u6587
title            : \u6807\u9898
account_id       : \u7528\u6237ID
username         : \u7528\u6237\u540D
created_at       : datetime \u7C7B\u578B , L5 \u9ED8\u8BA4\u521B\u5EFA\u65F6\u95F4
deleted_at       : l5 \u8F6F\u5220\u9664(\u9879\u76EE\u4E2D\u4E0D\u63A8\u8350\u4F7F\u7528, \u6548\u7387\u4F4E\u4E0B)
updated_at       : l5 \u66F4\u65B0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u5E93\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u7D22\u5F15" aria-hidden="true">#</a> \u6570\u636E\u5E93\u7D22\u5F15</h2><h3 id="\u7D22\u5F15\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u547D\u540D" aria-hidden="true">#</a> \u7D22\u5F15\u547D\u540D</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u7D22\u5F15(index)
item            k_base_config_item

# \u552F\u4E00\u9A8C\u8BC1(unique)
account_name    u_account_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h2 id="\u8868\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u8868\u521B\u5EFA" aria-hidden="true">#</a> \u8868\u521B\u5EFA</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tb_pam   = (new PamAccount())-&gt;getTable();
$tb_ft    = (new AccountFront())-&gt;getTable();
$Db = \\DB::table($tb_pam)-&gt;where(&#39;account_type&#39;, &#39;front&#39;);
$Db-&gt;where($tb_pam . &#39;.account_id&#39;, &#39;!=&#39;, \\FrontAuth::id());
$Db-&gt;join($tb_ft, $tb_pam . &#39;.account_id&#39;, &#39;=&#39;, $tb_ft . &#39;.account_id&#39;);
$accounts = $Db-&gt;paginate(16);
$accounts-&gt;appends($request-&gt;input());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="like-\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#like-\u641C\u7D22" aria-hidden="true">#</a> like \u641C\u7D22</h3><p><strong>\u591A\u5B57\u6BB5 like</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$kw = $request-&gt;input(&#39;kw&#39;);
if ($kw) {
    $Db-&gt;where(function($query) use ($kw, $tb_weixin){
        $query-&gt;orWhere($tb_weixin.&#39;.wx_account&#39;, &#39;like&#39;, &#39;%&#39;.$kw.&#39;%&#39;);
        $query-&gt;orWhere($tb_weixin.&#39;.wx_account&#39;, &#39;like&#39;, &#39;%&#39;.$kw.&#39;%&#39;);
    });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5355\u5B57\u6BB5 like</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$account_name = $request-&gt;input(&#39;account_name&#39;);
if ($account_name) {
    $Db-&gt;where($tb_pam . &#39;.account_name&#39;, &#39;like&#39;, &#39;%&#39; . $account_name . &#39;%&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u666E\u901A\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u641C\u7D22" aria-hidden="true">#</a> \u666E\u901A\u641C\u7D22</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$wx_status = $request-&gt;input(&#39;wx_status&#39;);
if ($wx_status) {
    $Db-&gt;where(&#39;wx_status&#39;, $wx_status);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F" aria-hidden="true">#</a> \u6392\u5E8F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$orderKey = in_array(SysSearch::key(), [
    &#39;wx_fans&#39;,
]) ? SysSearch::key() : &#39;created_at&#39;;
$Db-&gt;orderBy($tb_weixin . &#39;.&#39; . $orderKey, SysSearch::order());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5EFA\u8868\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u8868\u89C4\u8303" aria-hidden="true">#</a> \u5EFA\u8868\u89C4\u8303</h2><ul><li>\u6570\u636E\u7C7B\u578B\u5C3D\u91CF\u7528\u6570\u5B57\u7C7B\u578B\uFF0C\u6570\u5B57\u7C7B\u578B\u7684\u6BD4\u5B57\u7B26\u7C7B\u578B\u7684\u8981\u5FEB\u5F88\u591A\uFF0C\u6BD4\u5982\u4F7F\u7528 INT UNSIGNED \u5B58\u50A8 IP</li><li>\u5927\u6570\u636E\u5B57\u6BB5\u6700\u597D\u5265\u79BB\u51FA\u5355\u72EC\u7684\u8868\uFF0C\u4EE5\u4FBF\u5F71\u54CD\u6027\u80FD</li><li>\u4F7F\u7528 varchar\uFF0C\u4EE3\u66FF char\uFF0C\u8FD9\u662F\u56E0\u4E3A varchar \u4F1A\u52A8\u6001\u5206\u914D\u957F\u5EA6</li><li>\u6570\u636E\u7C7B\u578B\u5C3D\u91CF\u5C0F\uFF0C\u8FD9\u91CC\u7684\u5C3D\u91CF\u5C0F\u662F\u6307\u5728\u6EE1\u8DB3\u53EF\u4EE5\u9884\u89C1\u7684\u672A\u6765\u9700\u6C42\u7684\u524D\u63D0\u4E0B\u7684,\u4F46\u662F\u6709\u4E0D\u80FD\u592A\u5C0F\uFF0C\u6240\u4EE5\u5728\u5EFA\u8868\u7684\u65F6\u5019\u4E00\u5B9A\u8981\u9884\u4F30\u8FD9\u4E2A\u5B57\u6BB5\u6700\u5927\u7684\u957F\u5EA6\u5230\u5E95\u662F\u591A\u5C11</li><li>\u4E0D\u5141\u8BB8 NULL\uFF0C\u7528 NOT NULL+DEFAULT \u7684\u503C\u6765\u4EE3\u66FF</li><li>\u5C11\u7528 TEXT \u548C IMAGE\uFF0C\u4E8C\u8FDB\u5236\u5B57\u6BB5\u7684\u8BFB\u5199\u662F\u6BD4\u8F83\u6162\u7684\uFF0C\u800C\u4E14\uFF0C\u8BFB\u53D6\u7684\u65B9\u6CD5\u4E5F\u4E0D\u591A\uFF0C\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u6700\u597D\u4E0D\u7528</li><li>\u8868\u540D \u5B57\u6BB5\u540D\u5B57\u7EDF\u4E00\u7528\u5C0F\u5199</li><li>\u5B57\u6BB5\u540D\u5B57\u4E0D\u8981\u7528\u9A7C\u5CF0\u547D\u540D\u6CD5 \u6BD4\u5982 add_time \u4E0D\u8981\u5199\u6210 AddTime</li><li>\u5B57\u6BB5\u547D\u540D\u5173\u952E\u5B57\u7EDF\u4E00\u7528\u4E0B\u5212\u7EBF&quot;_&quot;\u5206\u5272\uFF0C\u4E00\u822C\u91C7\u7528\u7B80\u5199\uFF0C\u5173\u952E\u5B57\u8981\u51C6\u786E\uFF0C\u4E0D\u80FD\u6709\u6B67\u4E49</li><li>\u6240\u6709\u7684\u8868\u5FC5\u987B\u5305\u542B id\uFF08\u81EA\u589E\u4E3B\u952E\uFF09\uFF0Cadd_time\uFF08\u65B0\u589E\u65F6\u95F4\uFF09\uFF0Cupdate_time\uFF08\u66F4\u65B0\u65F6\u95F4\uFF09\uFF0Cmark\uFF08\u5220\u9664\u6807\u8BB0 \uFF09\u8FD9 3 \u4E2A\u5B57\u6BB5</li><li>\u6BCF\u4E2A\u5B57\u6BB5\u7684 COMMENT \u5FC5\u987B\u5199\u6E05\u695A\uFF0C\u679A\u4E3E\u7C7B\u578B\u5FC5\u987B\u5199\u6E05\u695A\u6BCF\u4E2A\u503C\u5230\u5E95\u662F\u4EC0\u4E48\u610F\u601D\uFF0C\u679A\u4E3E\u7684\u5199\u6CD5\u7EDF\u4E00\u6210&quot;\u5220\u9664\u6807\u8BB0\uFF080\uFF1A\u672A\u5220\u9664\uFF0C1\uFF1A\u5DF2\u7ECF\u5220\u9664\uFF09&quot;\uFF0C\u7B26\u53F7\u4E3A\u4E2D\u6587\u7B26\u53F7</li><li>update_time\uFF08\u66F4\u65B0\u65F6\u95F4\uFF09\u5B57\u6BB5\u81EA\u52A8\u4FEE\u6539\u3002<code>update_time</code> timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT &#39;\u66F4\u65B0\u65F6\u95F4 &#39;</li><li>\u65F6\u95F4\u7C7B\u578B\u5C3D\u91CF\u7528 timestamp 4 \u4E2A\u5B57\u8282,\u800C\u4E0D\u7528 datetime 8 \u4E2A\u5B57\u8282\u3002\u53EA\u7528\u8868\u793A\u65E5\u671F\u7684\u5B57\u6BB5\u7528 date \u7C7B\u578B</li><li>\u5EFA\u8868\u8BED\u53E5\u4E0D\u5141\u8BB8\u5305\u542B\u5916\u952E</li><li>\u5E93\u3001\u8868\u3001\u5B57\u6BB5\u5B57\u7B26\u96C6\u7EDF\u4E00\u4F7F\u7528 UTF8\u3002</li></ul>`,77),l=[d];function r(c,t){return n(),a("div",null,l)}const u=e(s,[["render",r],["__file","models.html.vue"]]);export{u as default};
