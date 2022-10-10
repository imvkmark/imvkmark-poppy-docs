import{_ as n,o as s,c as a,b as e}from"./app.d1bf96cf.js";const t={},i=e(`<h1 id="\u4E1A\u52A1\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u903B\u8F91" aria-hidden="true">#</a> \u4E1A\u52A1\u903B\u8F91</h1><h2 id="\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u7F6E" aria-hidden="true">#</a> \u4F4D\u7F6E</h2><p>\u4F4D\u7F6E <code>modules/{module}/src/action</code></p><h2 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h2><p>\u8FD9\u91CC\u7684\u6CE8\u91CA\u5728\u4F7F\u7528 PhpStorm/WebStorm \u7684\u65F6\u5019\u53EF\u4EE5\u81EA\u52A8\u751F\u6210 <code>/**</code> \u6240\u6709\u7684\u51FD\u6570\u90FD\u9700\u8981\u6309\u7167\u8FD9\u79CD\u683C\u5F0F\u6765\u5199</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u521B\u5EFA|\u7F16\u8F91\u8BA2\u5355
 * @param array  $input      \u8BA2\u5355\u6570\u636E    &lt;br /&gt;
 *      {String} title     \u8BA2\u5355\u6807\u9898      &lt;br /&gt;
 *      {Int}    server_id \u670D\u52A1\u5668ID      &lt;br /&gt;
 * @param string $pay_pwd    \u652F\u4ED8\u5BC6\u7801
 * @param string $order_type \u64CD\u63A7\u7C7B\u578B  [create|\u521B\u5EFA,edit|\u7F16\u8F91]
 * @param string $type       \u652F\u4ED8\u5BC6\u7801\u4F20\u9012\u65B9\u5F0F
 * @return bool
 */
public function establish($input, $pay_pwd, $order_type, $type = &#39;plain&#39;)
{
   ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F, \u5982\u679C\u662F\u6570\u7EC4, \u5219\u9700\u8981\u6309\u7167\u5982\u4E0B\u7684\u65B9\u5F0F\u8FDB\u884C\u6CE8\u91CA</p><p><strong>\u6570\u7EC4\u6CE8\u91CA</strong> \u8FD9\u91CC\u7684\u6CE8\u91CA\u65B9\u5F0F\u548C Api \u63A5\u53E3\u6CE8\u91CA\u65B9\u5F0F\u4E00\u81F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>*      {String} title     \u8BA2\u5355\u6807\u9898      &lt;br /&gt;
*      {Int}    server_id \u670D\u52A1\u5668ID      &lt;br /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9A\u4E49-code" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49-code" aria-hidden="true">#</a> \u5B9A\u4E49 code</h2><p>Code \u5B9A\u4E49, Code \u5B9A\u4E49\u5728 Action \u6587\u4EF6\u4E2D, Action \u4E3A 6 \u4F4D\u7684\u4EE3\u7801 \u4F8B\u5982\u9519\u8BEF\u4EE3\u7801\u4E3A 100101, \u4E00\u822C\u5BF9\u4E8E app \u6709\u72EC\u7279\u9519\u8BEF\u7684\u624D\u4F1A\u8FDB\u884C\u8FD4\u56DE, \u4F8B\u5982\u8FD9\u91CC\u652F\u4ED8\u5BC6\u7801\u4E0D\u6B63\u786E, \u9700\u8981\u91CD\u65B0\u8BBE\u7F6E/\u627E\u56DE\u652F\u4ED8\u5BC6\u7801, app \u62FF\u5230\u8FD9\u4E2A\u4EE3\u7801\u53EF\u4EE5\u8FDB\u884C\u76F8\u5E94\u7684\u63D0\u793A, \u800C\u4E0D\u80FD\u591F\u6839\u636E\u8FD4\u56DE\u7684\u9519\u8BEF\u63D0\u793A\u8FDB\u884C\u76F8\u5E94\u64CD\u4F5C. \u9519\u8BEF\u63D0\u793A\u53EF\u4EE5\u66F4\u6539, \u9519\u8BEF\u4EE3\u7801\u4E00\u65E6\u5B9A\u4E49\u5219\u4E0D\u80FD\u66F4\u6539, \u4E3A\u4E86\u9519\u8BEF\u7801\u96C6\u4E2D\u7EDF\u4E00\u4F7F\u7528\u5355\u4E00\u7684 AppError \u6765\u8FDB\u884C\u5B9A\u4E49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>10        # \u4EE3\u8868\u7684\u662F\u6A21\u5757\u7684\u540D\u79F0
  01      # \u4EE3\u8868\u7684\u662F\u672C\u6A21\u5757\u7684Action \u7F16\u53F7
    01    # \u4EE3\u8868\u672C\u7C7B\u7684\u9519\u8BEF\u7F16\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5FC5\u987B\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u5FC5\u987B\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u5FC5\u987B\u8FD4\u56DE\u503C</h2><p>\u8FD9\u91CC\u7684\u8FD4\u56DE\u503C\u5FC5\u987B\u662F <code>true/false</code> , \u5982\u679C\u662F\u9700\u8981\u83B7\u53D6\u8FD4\u56DE\u6570\u503C, \u9700\u8981\u5B9A\u4E49 <code>getXxx</code> \u65B9\u6CD5\u6765\u83B7\u53D6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F7F\u7528
$Image = new Upload();
$image = (\\Input::file(&#39;image&#39;));
if ($Image-&gt;saveInput($image)) {
    return Resp::success(&#39;\u4E0A\u4F20\u56FE\u6210\u529F!&#39;, [
        &#39;url&#39; =&gt; $Image-&gt;getUrl(),
    ]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>class \u7684\u5B9A\u4E49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u56FE\u7247\u4E0A\u4F20
 */
class Upload
{

    use AppTrait;

    protected $destination = &#39;&#39;;


    /**
     * doWhat
     * \u4FDD\u5B58\u5185\u5BB9\u6216\u8005\u6D41\u65B9\u5F0F\u4E0A\u4F20
     * @param $content
     * @return bool
     */
    public function saveInput($content)
    {
        // \u78C1\u76D8\u5BF9\u8C61
        $Disk = $this-&gt;storage();
      // ..

        $this-&gt;destination = $fileRelativePath;
        return true;
    }

    /**
     * \u56FE\u7247url\u7684\u5730\u5740
     * @return string
     */
    public function getUrl()
    {
        ...
        return config(&#39;app.url&#39;) . &#39;/uploads/&#39; . $this-&gt;destination;
        ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u903B\u8F91\u5904\u7406\u9A8C\u8BC1\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u5904\u7406\u9A8C\u8BC1\u65B9\u5F0F" aria-hidden="true">#</a> \u903B\u8F91\u5904\u7406\u9A8C\u8BC1\u65B9\u5F0F</h2><p>\u8FD9\u91CC\u6211\u4EEC\u4EE5\u8BA2\u5355\u53D1\u5E03\u4E3A\u4F8B\u505A\u4E0B\u7B80\u5355\u7684\u8BF4\u660E \u8BE6\u7EC6\u8BF4\u660E\u89C1\u6CE8\u91CA \u5176\u4E2D\u6839\u636E\u4E1A\u52A1\u60C5\u51B5\u6765\u8FDB\u884C\u5904\u7406, \u6709\u7684\u53EF\u80FD\u4E0D\u9700\u8981\u8FD9\u79CD\u5904\u7406</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \u8FD9\u91CC\u7684 input \u662F\u4ECE\u63A7\u5236\u5668\u83B7\u53D6\u8FC7\u6765\u7684, \u4E0D\u5141\u8BB8\u4ECE\u8BF7\u6C42\u4E2D\u83B7\u53D6</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">establish</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">,</span> <span class="token variable">$pay_pwd</span><span class="token punctuation">,</span> <span class="token variable">$order_type</span><span class="token punctuation">,</span> <span class="token variable">$type</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;plain&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | \u9A8C\u8BC1\u7528\u6237\u6743\u9650
    |--------------------------------------------------------------------------
    */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">checkPam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9700\u8981\u660E\u786E\u7684\u62A5\u9519\u4FE1\u606F\u53EF\u4EE5\u91CD\u5199\u62A5\u9519</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">setError</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;\u65E0\u7528\u6237\u4FE1\u606F, \u65E0\u6CD5\u8FDB\u884C\u53D1\u5355\u64CD\u4F5C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

   <span class="token comment">/*
    |--------------------------------------------------------------------------
    | \u83B7\u53D6\u6570\u636E, \u540E\u8FB9\u76F4\u63A5\u7528\u5230\u7684\u5728\u8FD9\u91CC\u76F4\u63A5\u5B9A\u4E49\u51FA\u6765
    |--------------------------------------------------------------------------
    */</span>
    <span class="token variable">$server_id</span>       <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span> <span class="token function">sys_get</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;server_id&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">...</span>
    <span class="token variable">$order_current</span>   <span class="token operator">=</span> <span class="token function">sys_get</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;order_title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">/*
    |--------------------------------------------------------------------------
    | \u548C\u6570\u636E\u5E93\u5B57\u6BB5\u76F8\u540C\u7684\u6765\u7EC4\u7EC7\u6570\u636E
    |--------------------------------------------------------------------------
    */</span>
    <span class="token variable">$dbInit</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;order_title&#39;</span>     <span class="token operator">=&gt;</span> <span class="token variable">$order_title</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
        <span class="token string single-quoted-string">&#39;get_in_price&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">sys_get</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;get_in_price&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;hour&#39;</span>         <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span> <span class="token function">sys_get</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;order_number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | \u6570\u636E\u5408\u6CD5\u6027\u6821\u9A8C
    |--------------------------------------------------------------------------
    */</span>
    <span class="token variable">$validator</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Validator</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$dbInit</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;order_title&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required|string&#39;</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
        <span class="token string single-quoted-string">&#39;source_id&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;numeric&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;order_title.required&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;\u8BA2\u5355\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;order_add_price.min&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;\u6EA2\u4EF7\u4EF7\u683C\u6700\u4F4E\u4E0D\u80FD\u4F4E\u4E8E 1 \u5143&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$validator</span><span class="token operator">-&gt;</span><span class="token function">fails</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">setError</span><span class="token punctuation">(</span><span class="token variable">$validator</span><span class="token operator">-&gt;</span><span class="token function">errors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | \u6570\u636E\u670D\u52A1\u7AEF\u9A8C\u8BC1\u5408\u6CD5\u6027
    |--------------------------------------------------------------------------
    */</span>

    <span class="token comment">/* \u6E38\u620F\u533A\u670D\u6821\u9A8C\u548C\u5B8C\u5584
     -------------------------------------------- */</span>
    <span class="token variable">$codeRef</span>      <span class="token operator">=</span> <span class="token class-name static-context">GameServer</span><span class="token operator">::</span><span class="token function">codeRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$collCodeRef</span>  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Collection</span><span class="token punctuation">(</span><span class="token variable">$codeRef</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$serverFilter</span> <span class="token operator">=</span> <span class="token variable">$collCodeRef</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;server_id&#39;</span><span class="token punctuation">,</span> <span class="token variable">$server_id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$serverFilter</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">setError</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;\u6307\u5B9A\u7684\u6E38\u620F\u533A\u670D\u4E0D\u5B58\u5728&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | \u64CD\u4F5C\u6743\u9650\u9A8C\u8BC1 / \u7B56\u7565\u9A8C\u8BC1
    |--------------------------------------------------------------------------
    */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">policy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;pubCreate&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">pam</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">front</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | \u5904\u7406\u6570\u636E
    |--------------------------------------------------------------------------
    */</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>DB</span><span class="token operator">::</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token variable">$createData</span><span class="token punctuation">,</span> <span class="token variable">$owner</span><span class="token punctuation">,</span> <span class="token variable">$ownerPam</span><span class="token punctuation">,</span> <span class="token variable">$totalNeedPrice</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token operator">...</span>
            <span class="token comment">/* \u4E8B\u52A1\u4E2D\u629B\u51FA\u5F02\u5E38
           -------------------------------------------- */</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">order</span> <span class="token operator">=</span> <span class="token class-name static-context">DailianOrder</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">$createData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">order</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TransactionException</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;\u521B\u5EFA\u8BA2\u5355\u5931\u8D25, \u8BF7\u91CD\u8BD5!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token operator">...</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Throwable</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">setError</span><span class="token punctuation">(</span><span class="token variable">$e</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CE8\u610F\u8981\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u8981\u70B9" aria-hidden="true">#</a> \u6CE8\u610F\u8981\u70B9</h2><p><strong>Action \u4E2D\u4E0D\u5F97\u5B58\u5728 log \u65E5\u5FD7</strong></p><p>Log \u65E5\u5FD7\u5982\u679C\u88AB crontab \u4F7F\u7528\u540C\u65F6\u4E5F\u88AB\u57FA\u672C\u7684\u4FE1\u606F\u9519\u8BEF\u8C03\u7528\u4FBF\u4F1A\u51FA\u73B0\u6743\u9650\u4E0D\u4E00\u81F4.</p><p><strong>\u5FC5\u987B\u4FEE\u590D\u6240\u6709\u7684\u7F16\u8F91\u5668\u4EE3\u7801\u9519\u8BEF\u63D0\u793A</strong></p><p>\u7F16\u8F91\u5668\u4EE3\u7801\u63D0\u793A\u5747\u53EF\u80FD\u5B58\u5728 bug \u6216\u8005\u4F18\u5316\u9879\u76EE</p><p><strong>Action \u547D\u540D</strong></p><p>Action \u547D\u540D\u4E0D\u8981\u548C\u6A21\u578B\u540D\u79F0\u91CD\u590D, \u4E00\u822C\u4E3A\u4E00\u4E2A\u5355\u8BCD, \u4F8B\u5982\u8D26\u53F7\u7BA1\u7406\u4F7F\u7528 <code>Pam</code> \u4F5C\u4E3A\u547D\u540D</p>`,27),p=[i];function l(c,o){return s(),a("div",null,p)}const u=n(t,[["render",l],["__file","action.html.vue"]]);export{u as default};
