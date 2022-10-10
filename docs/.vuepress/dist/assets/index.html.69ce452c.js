import{_ as i,o as e,c as n,b as s}from"./app.d1bf96cf.js";const d={},l=s(`<h1 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h1><h2 id="\u529F\u80FD\u5F00\u53D1\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u5F00\u53D1\u6D41\u7A0B" aria-hidden="true">#</a> \u529F\u80FD\u5F00\u53D1\u6D41\u7A0B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u660E\u767D\u9700\u6C42 --&gt; \u62C6\u5206\u529F\u80FD\u70B9 (\u6574\u7406\u903B\u8F91) --&gt; \u5199\u4EE3\u7801 --&gt; \u5B8C\u6210\u529F\u80FD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6A21\u5757\u6587\u4EF6\u6811" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u6587\u4EF6\u6811" aria-hidden="true">#</a> \u6A21\u5757\u6587\u4EF6\u6811</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 configurations       # \u914D\u7F6E\u6587\u4EF6
\u2502   \u251C\u2500\u2500 permissions.yaml
\u251C\u2500\u2500 docs                 # \u6280\u672F\u6587\u6863
\u251C\u2500\u2500 resources            # \u8D44\u6E90\u6587\u4EF6
\u2502   \u251C\u2500\u2500 config           # \u53D1\u5E03\u7684\u914D\u7F6E\u6587\u4EF6
\u2502   \u251C\u2500\u2500 lang             # \u591A\u8BED\u8A00\u652F\u6301\u5305\u7684\u4F4D\u7F6E
\u2502   \u2502   \u2514\u2500\u2500 zh
\u2502   \u251C\u2500\u2500 mixes            # mixs : \u6DF7\u6742\u7684\u6587\u4EF6
\u2502   \u2502   \u2514\u2500\u2500 poppy        # poppy \u6838\u5FC3\u5305 (\u666E\u901A\u9875\u9762\u5E03\u5C40)
\u2502   \u2502       \u2514\u2500\u2500 backend
\u2502   \u251C\u2500\u2500 scss             # sass \u9884\u5904\u7406\u6587\u4EF6 (\u666E\u901A\u9875\u9762\u5E03\u5C40\u9700\u8981)
\u2502   \u2502   \u251C\u2500\u2500 backend
\u2502   \u2502   \u251C\u2500\u2500 basic
\u2502   \u2502   \u2514\u2500\u2500 develop
\u2502   \u2514\u2500\u2500 views            # \u89C6\u56FE\u6587\u4EF6
\u2502       \u251C\u2500\u2500 backend      # \u89C6\u56FE - \u540E\u53F0
\u2502       \u251C\u2500\u2500 develop      # \u89C6\u56FE - \u5F00\u53D1\u8005\u5E73\u53F0
\u2502       \u251C\u2500\u2500 email        # \u89C6\u56FE - email
\u2502       \u2514\u2500\u2500 tpl          # \u89C6\u56FE - \u6838\u5FC3\u6A21\u677F
\u251C\u2500\u2500 src
\u2502   \u251C\u2500\u2500 action           # action
\u2502   \u251C\u2500\u2500 backend          # \u540E\u7AEF\u6A21\u5757\u7BA1\u7406
\u2502   \u251C\u2500\u2500 classes          # \u57FA\u7840\u7C7B
\u2502   \u2502   \u251C\u2500\u2500 auth         # \u6743\u9650
\u2502   \u2502   \u2502   \u251C\u2500\u2500 guard    # \u6743\u9650 - guard
\u2502   \u2502   \u2502   \u2514\u2500\u2500 provider # \u6743\u9650 - provider
\u2502   \u2502   \u251C\u2500\u2500 payment      # \u652F\u4ED8
\u2502   \u2502   \u2514\u2500\u2500 traits       # traits
\u2502   \u251C\u2500\u2500 commands         # \u547D\u4EE4
\u2502   \u251C\u2500\u2500 database         # \u6570\u636E\u5E93
\u2502   \u2502   \u251C\u2500\u2500 factories    # \u6570\u636E\u5E93 - \u5DE5\u5382
\u2502   \u2502   \u251C\u2500\u2500 migrations   # \u6570\u636E\u5E93 - migrations
\u2502   \u2502   \u2514\u2500\u2500 seeds        # \u6570\u636E\u5E93 - \u79CD\u5B50
\u2502   \u251C\u2500\u2500 events           # \u4E8B\u4EF6, \u4E8B\u4EF6\u4F7F\u7528 Event \u540E\u7F00
\u2502   \u251C\u2500\u2500 extension        # \u6269\u5C55\u5305\u7BA1\u7406(\u5F00\u53D1\u7528, \u4EE5\u540E\u53EF\u80FD\u4F1A\u5E9F\u5F03\u6389)
\u2502   \u251C\u2500\u2500 http             # \u8DEF\u7531\u548C\u4E2D\u95F4\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 middleware
\u2502   \u2502   \u2514\u2500\u2500 routes
\u2502   \u251C\u2500\u2500 listeners        # \u4E8B\u4EF6 - \u76D1\u542C\u5668
\u2502   \u251C\u2500\u2500 mail             # \u90AE\u4EF6
\u2502   \u251C\u2500\u2500 models           # \u6A21\u578B
\u2502   \u2502   \u251C\u2500\u2500 filters      # \u6A21\u578B - \u8FC7\u6EE4\u5668
\u2502   \u2502   \u251C\u2500\u2500 policies     # \u6A21\u578B - \u7B56\u7565
\u2502   \u2502   \u2514\u2500\u2500 resources    # \u6A21\u578B - \u8D44\u6E90
\u2502   \u251C\u2500\u2500 module           # \u6A21\u5757
\u2502   \u2502   \u251C\u2500\u2500 listeners
\u2502   \u2502   \u2514\u2500\u2500 repositories
\u2502   \u251C\u2500\u2500 notifications    # \u901A\u77E5
\u2502   \u251C\u2500\u2500 permission       # \u6743\u9650
\u2502   \u2502   \u251C\u2500\u2500 commands
\u2502   \u2502   \u251C\u2500\u2500 exceptions
\u2502   \u2502   \u251C\u2500\u2500 middlewares
\u2502   \u2502   \u2514\u2500\u2500 repositories
\u2502   \u251C\u2500\u2500 rbac             # rbac \u89D2\u8272\u5305
\u2502   \u2502   \u251C\u2500\u2500 contracts
\u2502   \u2502   \u251C\u2500\u2500 facades
\u2502   \u2502   \u251C\u2500\u2500 helper
\u2502   \u2502   \u251C\u2500\u2500 middleware
\u2502   \u2502   \u2514\u2500\u2500 traits
\u2502   \u251C\u2500\u2500 request          # \u63A7\u5236\u5668
\u2502   \u2502   \u251C\u2500\u2500 api_v1       # \u63A7\u5236\u5668 - Api
\u2502   \u2502   \u2502   \u251C\u2500\u2500 backend
\u2502   \u2502   \u2502   \u251C\u2500\u2500 pam
\u2502   \u2502   \u2502   \u2514\u2500\u2500 util
\u2502   \u2502   \u251C\u2500\u2500 backend      # \u540E\u7AEF\u9875\u9762
\u2502   \u2502   \u251C\u2500\u2500 develop      # \u5F00\u53D1\u5E73\u53F0
\u2502   \u2502   \u2514\u2500\u2500 system       # \u540E\u53F0\u7CFB\u7EDF\u5165\u53E3
\u2502   \u2514\u2500\u2500 setting          # \u7CFB\u7EDF\u8BBE\u7F6E
\u2514\u2500\u2500 tests                # \u5355\u5143\u6D4B\u8BD5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CE8\u518C\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u670D\u52A1" aria-hidden="true">#</a> \u6CE8\u518C\u670D\u52A1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php namespace Poppy\\System;

/**
 * \u5B9A\u4E49\u6A21\u5757\u540D\u79F0
 * \u6A21\u5757\u53EF\u4EE5\u4F7F\u7528 module.{module} , \u4E5F\u53EF\u4EE5\u76F4\u63A5\u662F {module}
 */
protected $name = &#39;poppy.system&#39;;

// \u6CE8\u518C\u4E8B\u4EF6\u76D1\u542C\u5668
protected $listens = [
    \\Illuminate\\Auth\\Events\\Failed::class               =&gt; [
        Listeners\\AuthFailed\\LogListener::class,
    ],
];

// \u6CE8\u518C\u7B56\u7565
protected $policies = [
    PamRole::class    =&gt; PamRolePolicy::class,
    PamAccount::class =&gt; PamAccountPolicy::class,
];

/**
 * \u542F\u52A8
 */
public function boot()
{
    parent::boot($this-&gt;name);

    // \u6CE8\u518C api \u6587\u6863\u914D\u7F6E
    $this-&gt;publishes([
        __DIR__ . &#39;/../resources/config/sami.php&#39;   =&gt; storage_path(&#39;sami/config.php&#39;),
        __DIR__ . &#39;/../resources/config/module.php&#39; =&gt; base_path(&#39;config/module.php&#39;),
    ], &#39;poppy-module&#39;);

    $path = poppy_path($this-&gt;name);

    // \u914D\u7F6E\u6587\u4EF6
    $this-&gt;mergeConfigFrom($path . &#39;/resources/config/module.php&#39;, &#39;module&#39;);

    $this-&gt;bootConfigMail();
}

// \u6CE8\u518C\u670D\u52A1
public function register()
{
    $this-&gt;app-&gt;register(Http\\MiddlewareServiceProvider::class);
    // ...
    $this-&gt;app-&gt;register(Permission\\PermissionServiceProvider::class);

    $this-&gt;registerConsole();

    $this-&gt;registerSchedule();
}

// \u8BA1\u5212\u4EFB\u52A1
private function registerSchedule()
{
    app(&#39;events&#39;)-&gt;listen(&#39;console.schedule&#39;, function (Schedule $schedule) {
        $schedule-&gt;command(&#39;py-system:user&#39;, [&#39;auto_enable&#39;])
            -&gt;everyFiveMinutes()-&gt;appendOutputTo($this-&gt;consoleLog());
    });
}

// \u6CE8\u518C\u547D\u4EE4
private function registerConsole()
{
    $this-&gt;commands([
        Commands\\UserCommand::class,
        ...
        Permission\\Commands\\PermissionCommand::class,
    ]);
}

// config \u8986\u76D6
private function bootConfigMail()
{
    config([
        &#39;mail.driver&#39;       =&gt; sys_setting(&#39;system::mail.driver&#39;) ?: config(&#39;mail.driver&#39;),
    ]);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1" aria-hidden="true">#</a> \u9A8C\u8BC1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u8BED\u8A00\u5305
 - resource/lang/zh/validator.php
2.\u76F8\u5E94\u7684\u9A8C\u8BC1\u89C4\u5219
 - Rule \u7C7B
3.FrameworkServiceProvider.php \u9A8C\u8BC1\u6B63\u5219\u89C4\u5219
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E" aria-hidden="true">#</a> \u8BBE\u7F6E</h2><p>\u8BBE\u7F6E\u4F7F\u7528 Form Setting \u6765\u8FDB\u884C\u8BBE\u7F6E, \u8BE6\u7EC6\u89C1 Form \u90E8\u5206</p><h2 id="\u6A21\u5757\u7EA6\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u7EA6\u5B9A" aria-hidden="true">#</a> \u6A21\u5757\u7EA6\u5B9A</h2><h2 id="\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58" aria-hidden="true">#</a> \u7F13\u5B58</h2><p><strong>\u7F13\u5B58 Key \u547D\u540D</strong></p><p>\u7F13\u5B58 Key \u653E\u7F6E\u5728\u6A21\u578B/Action \u7684\u5E38\u91CF\u4E2D, \u547D\u540D\u89C4\u8303\u662F</p><p><code>CK_{Key}</code></p><p>Key : \u547D\u540D\u7684\u6807\u8BC6</p><p><strong>\u7F13\u5B58\u547D\u4E2D\u547D\u540D</strong></p><p>\u7F13\u5B58\u547D\u4E2D\u5305\u542B Atomic / Funnel \u8FD9\u79CD, \u7F13\u5B58\u547D\u4E2D\u653E\u7F6E\u5728 <code>Redis(0)</code> \u4ED3\u5E93\u4E2D, \u547D\u540D\u89C4\u8303\u4E3A</p><p><code>prefix:redis:{function tag}:{key}</code></p><p>function tag : \u529F\u80FD\u6807\u7B7E, \u7528\u6765\u8FDB\u884C\u6587\u4EF6\u5939\u533A\u5206 key : \u552F\u4E00\u6807\u8BC6\u7B26</p>`,21),a=[l];function v(r,c){return e(),n("div",null,a)}const u=i(d,[["render",v],["__file","index.html.vue"]]);export{u as default};
