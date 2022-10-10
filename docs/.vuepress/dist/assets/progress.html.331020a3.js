import{_ as i,o as e,c as n,b as s}from"./app.d1bf96cf.js";const d={},l=s(`<h1 id="\u6279\u6B21\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u6279\u6B21\u66F4\u65B0" aria-hidden="true">#</a> \u6279\u6B21\u66F4\u65B0</h1><h2 id="\u8BBF\u95EE\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u5730\u5740" aria-hidden="true">#</a> \u8BBF\u95EE\u5730\u5740</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://xxx.com/mgr-page/develop
\u70B9\u51FB \u6570\u636E\u8868\u66F4\u65B0
\u53C2\u6570
[
  &#39;method&#39; =&gt; &#39;\u6A21\u578B\u540D.\u7C7B\u540D&#39;,// \u7C7B\u540D\u591A\u4E2A\u5355\u8BCD\u901A\u8FC7 &#39;_&#39; \u62FC\u63A5
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u7684\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u7F16\u5199" aria-hidden="true">#</a> \u7C7B\u7684\u7F16\u5199</h2><p>\u5728\u6BCF\u4E2A\u6A21\u5757\u4E0B progress \u6587\u4EF6\u5939\u4E0B(\u6CA1\u6709\u65B0\u5EFA)\u7F16\u5199</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u7C7B\u547D\u540D\u89C4\u8303 \u6570\u636E\u8868\u540D+\u6539\u52A8(\u81EA\u5B9A\u4E49)+progress
class OrderHunterResultProgress implements Progress
{
  use FixTrait;


  /**
   * @return array fix
   */
  public function handle(): array
  {
    // \u521D\u59CB\u5316 fix
    $this-&gt;fixInit();
    // \u6307\u5B9A\u6BCF\u6B21\u66F4\u65B0\u7684\u6761\u6570
    $this-&gt;fix[&#39;section&#39;] = 100;
    // \u91CD\u65B0\u6E05\u7406\u6389\u7F13\u5B58
    if (!$this-&gt;fix[&#39;cached&#39;]) {
      $this-&gt;fix[&#39;cached&#39;] = 1;
    }

    $Db = OrderHunter::where(&#39;first_result&#39;, &#39;!=&#39;, &#39;&#39;);

    if (!$this-&gt;fix[&#39;total&#39;]) {
      $this-&gt;fix[&#39;total&#39;] = $Db-&gt;count();
    }
    if (!$this-&gt;fix[&#39;max&#39;]) {
      $this-&gt;fix[&#39;max&#39;] = $Db-&gt;max(&#39;id&#39;);
    }
    if (!$this-&gt;fix[&#39;min&#39;]) {
      $this-&gt;fix[&#39;min&#39;] = $Db-&gt;min(&#39;id&#39;);
    }

    // \u2191\u2191\u2191\u2191\u2191\u2191\u2191\u2191\u2191\u2191\u2191   \u83B7\u53D6\u53C2\u6570

    // \u5269\u4F59\u6570
    $this-&gt;fix[&#39;left&#39;] = $Db-&gt;whereRaw(&#39;id &gt; ?&#39;, [$this-&gt;fix[&#39;start&#39;]])
      -&gt;count(&#39;id&#39;);

    $this-&gt;fix[&#39;lastId&#39;] = $this-&gt;fix[&#39;start&#39;];

    if ($this-&gt;fix[&#39;left&#39;]) {
      // \u4E1A\u52A1\u903B\u8F91
      $left_items = OrderHunter::whereRaw(&#39;id &gt;= ?&#39;, [$this-&gt;fix[&#39;start&#39;]])
        -&gt;where(&#39;first_result&#39;, &#39;!=&#39;, &#39;&#39;)
        -&gt;take($this-&gt;fix[&#39;section&#39;])
        -&gt;orderBy(&#39;id&#39;, &#39;asc&#39;)
        -&gt;get([&#39;id&#39;]);
      foreach ($left_items as $item) {
        self::normal($item-&gt;id);
        $this-&gt;fix[&#39;lastId&#39;] = $item-&gt;id + 1;
      }
    }

    return $this-&gt;fix;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[l];function a(t,v){return e(),n("div",null,r)}const u=i(d,[["render",a],["__file","progress.html.vue"]]);export{u as default};
