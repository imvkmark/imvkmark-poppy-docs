import{_ as l,r as t,o as d,c,d as n,e as s,a as i,b as e}from"./app.d1bf96cf.js";const p={},r=e(`<h1 id="\u6838\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3" aria-hidden="true">#</a> \u6838\u5FC3</h1><h2 id="\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a> \u64CD\u4F5C</h2><blockquote><p>Poppy \u6838\u5FC3\u6A21\u5757, system \u57FA\u4E8E\u672C\u6A21\u5757</p></blockquote><h3 id="\u6743\u9650\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u64CD\u4F5C" aria-hidden="true">#</a> \u6743\u9650\u64CD\u4F5C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan py-core:permission {slug}
{slug}:
    - list   : \u83B7\u53D6\u6743\u9650\u5217\u8868
    - init   : \u6743\u9650\u521D\u59CB\u5316
    - menus  : \u68C0\u67E5\u83DC\u5355[todo Undefined index: children]
    - assign : \u5C06\u6743\u9650\u8D4B\u503C\u7ED9\u6307\u5B9A\u7684\u7528\u6237\u7EC4
    - check  : \u6743\u9650\u68C0\u6D4B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6587\u6863\u4EE5\u53CA\u68C0\u67E5\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u4EE5\u53CA\u68C0\u67E5\u5DE5\u5177" aria-hidden="true">#</a> \u6587\u6863\u4EE5\u53CA\u68C0\u67E5\u5DE5\u5177</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan py-core:doc {slug}
{slug}:
    - api   : \u751F\u6210api\u6587\u6863[apidoc \u751F\u6210\u76EE\u5F55]
    - cs    : code style - fix , \u4EE3\u7801\u683C\u5F0F\u4FEE\u590D(todo \u4EE5\u540EIDE \u6765\u505A)
    - cs-pf :
    - lint  : \u5B89\u88C5\u68C0\u6D4BPHP\u8BED\u6CD5\u9519\u8BEF\u7684\u5DE5\u5177
    - php   : \u751F\u6210 php api \u6587\u6863
    - log   : \u67E5\u770B\u5F53\u5929\u7684 storage \u65E5\u5FD7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5173\u4E8E phplint</strong></p>`,8),o={href:"https://github.com/overtrue/phplint",target:"_blank",rel:"noopener noreferrer"},u=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ composer global require overtrue/phplint -vvv
$ php artisan py-core:doc lint
$ phplint /path/of/code -c /framework/path/.phplint.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u68C0\u67E5\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u4EE3\u7801" aria-hidden="true">#</a> \u68C0\u67E5\u4EE3\u7801</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan py-core:inspect {slug}
{slug} :
    - apidoc     : \u68C0\u67E5api\u6587\u6863(\u9700\u8981\u6307\u5B9A\u76EE\u5F55)
    - class      : \u65B9\u6CD5\u68C0\u6D4B
    - pages      : \u68C0\u6D4B\u9875\u9762Key[todo \u4EE5\u540E\u4F1A\u5220\u6389]
    - file       : \u68C0\u6D4B\u6587\u4EF6\u547D\u540D[\u6587\u4EF6\u7C7B\u548C\u6587\u4EF6\u4F4D\u7F6E\u4E0D\u5339\u914D]
    - database   : \u68C0\u6D4B\u6570\u636E\u5E93\u914D\u7F6E
    - controller : \u5217\u51FA\u6240\u6709\u529F\u80FD\u70B9
    - action     : \u5217\u51FA\u6240\u6709\u4E1A\u52A1\u903B\u8F91
    - seo        : \u751F\u6210 seo \u9879\u76EE
    - db_seo     : \u751F\u6210\u6570\u636E\u5E93SEO \u6570\u636E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FD0\u7EF4\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7EF4\u5DE5\u5177" aria-hidden="true">#</a> \u8FD0\u7EF4\u5DE5\u5177</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan py-core:op {slug}
{slug} :
    - mail   : \u53D1\u9001\u8FD0\u7EF4\u90AE\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u751F\u6210-php-api-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210-php-api-\u6587\u6863" aria-hidden="true">#</a> \u751F\u6210 php api \u6587\u6863</h3>`,6),v={href:"http://v3.poppy-framework.com/docs/php/",target:"_blank",rel:"noopener noreferrer"},m=e(`<p><strong>\u751F\u6210\u914D\u7F6E\u6587\u4EF6</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ php artisan vendor:publish --tag=poppy
...
Copied File [/modules/system/resources/config/sami.php] To [/storage/sami/config.php]
Publishing complete.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4E0B\u8F7D sami</strong></p><p>\u9996\u5148\u4E0B\u8F7D sami , \u653E\u5230 <code>storage/sami/sami.phar</code> \u8FD9\u4E2A\u4F4D\u7F6E \u6216\u8005\u4F7F\u7528\u547D\u4EE4\u6765\u4E0B\u8F7D, \u5982\u679C\u4E0D\u77E5\u9053\u547D\u4EE4\u53EF\u4EE5\u8FD0\u884C <code>php artisan py-core:doc php</code> \u6765\u67E5\u770B\u4E0B\u8F7D\u6587\u4EF6\u7684\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ php artisan py-core:doc php

Please Run Command To Install Sami.phar:
curl http://get.sensiolabs.org/sami.phar --output /data/workbench/www/wulicode/storage/sami/sami.phar

# \u4E0B\u8F7D\u4E4B\u540E\u518D\u8FD0\u884C

$ php artisan py-core:doc php
Please Run Command:
php /data/workbench/www/wulicode/storage/sami/sami.phar update /data/workbench/www/wulicode/storage/sami/config.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u8FD0\u884C\u547D\u4EE4\u6765\u751F\u6210 php \u6587\u6863</p><p>\u7531\u4E8E sami \u6700\u65B0\u7248\u662F\u57FA\u4E8E php7.1 \u7248\u672C\u7684, \u6240\u4EE5\u6211\u4EEC\u5FC5\u987B\u4EE5\u6B63\u786E\u7248\u672C\u6765\u8FD0\u884C. \u5982\u679C\u7248\u672C\u4E0D\u6B63\u786E\u5219\u65E0\u6CD5\u8FD0\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ php71 /data/workbench/www/wulicode/storage/sami/sami.phar update /data/workbench/www/wulicode/storage/sami/config.php
 Updating project

Version master
  Parsing   done
  Rendering done

 Version    Updated C    Removed C
   master         1224            0

 Version    Updated C    Updated N    Removed C    Removed N
   master            2            0            0            0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u5B8C\u6210\u540E\u4F1A\u5728 <code>public/docs/php</code> \u6587\u4EF6\u5939\u4E0B\u751F\u6210\u6807\u51C6\u7684 html \u6587\u6863, \u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u8FDB\u884C\u8BBF\u95EE\u4E86.</p><p>\u5982\u679C\u9ED8\u8BA4\u7684\u914D\u7F6E\u65E0\u6CD5\u6EE1\u8DB3\u4F60\u7684\u8981\u6C42\u53EF\u4EE5\u7F16\u8F91 <code>resources/sami/sami.php</code> \u6587\u4EF6\u6765\u4FEE\u6539\u9700\u8981\u751F\u6210\u6587\u6863\u7684\u6587\u4EF6\u5939\u548C\u76EE\u6807\u8DEF\u5F84.</p><p>\u751F\u6210\u6587\u6863\u5982\u4E0B</p><p><img src="https://file.wulicode.com/note/2021/10-23/11-33-00249.png" alt=""></p>`,12),b={href:"https://github.com/imvkmark/poppy-core/blob/3.0/resources/config/sami-config.php",target:"_blank",rel:"noopener noreferrer"},h=e(`<h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u6587\u4EF6\u4F4D\u7F6E : <code>config/poppy.php</code></p><h3 id="apidoc" tabindex="-1"><a class="header-anchor" href="#apidoc" aria-hidden="true">#</a> apidoc</h3><ul><li>Type : <code>array</code></li></ul><p>api \u63A5\u53E3\u6587\u6863\u914D\u7F6E, \u6539\u6587\u6863\u53EF\u4EE5\u4F7F\u7528 <code>php artisan py-core:doc api</code> \u6765\u751F\u6210\u6587\u6863, \u5B9A\u4E49\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;apidoc&#39; =&gt; [
    ...
	&#39;web&#39; =&gt; [
        // \u6807\u9898
        &#39;title&#39;            =&gt; &#39;\u524D\u53F0\u63A5\u53E3&#39;,
        // \u65B9\u6CD5
        &#39;method&#39;           =&gt; &#39;post&#39;,
        // \u9ED8\u8BA4\u8BBF\u95EE\u5730\u5740
        &#39;default_url&#39;      =&gt; &#39;api_v1/system/auth/login&#39;,
        // \u5176\u4ED6\u53C2\u6570  \u7B7E\u540D\u9A8C\u8BC1
		&#39;sign_certificate&#39; =&gt; [
			&#39;name&#39;         =&gt; &#39;timestamp&#39;,
			&#39;title&#39;        =&gt; &#39;TimeStamp&#39;,
			&#39;type&#39;         =&gt; &#39;String&#39;,
			&#39;is_required&#39;  =&gt; &#39;Y&#39;,
		],
        // \u7B7E\u540D\u751F\u6210
		&#39;sign_generate&#39;    =&gt; DefaultApiSignProvider::js(),
        // \u6E90\u6587\u4EF6\u5939
        &#39;origin&#39;           =&gt; &#39;modules&#39;,
        // \u63A5\u53E3\u6D4B\u8BD5\u6784\u5EFA\u5668[\u672A\u5B9E\u73B0]
        &#39;factory&#39;          =&gt; WebApiFactory::class,
        // \u751F\u6210\u76EE\u5F55
        &#39;doc&#39;              =&gt; &#39;public/docs/web&#39;,
	],
	...
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="op-mail" tabindex="-1"><a class="header-anchor" href="#op-mail" aria-hidden="true">#</a> op_mail</h3><ul><li>Type : <code>string</code></li><li>Default : <code>env(&#39;CORE_OP_MAIL&#39;, &#39;&#39;)</code></li></ul><p>\u540E\u53F0\u53EF\u652F\u6301\u53D1\u9001\u6D4B\u8BD5\u90AE\u4EF6, \u8FD9\u91CC\u914D\u7F6E\u53D1\u9001\u4EBA\u7684\u90AE\u7BB1</p><h3 id="rbac" tabindex="-1"><a class="header-anchor" href="#rbac" aria-hidden="true">#</a> rbac</h3><ul><li>Type : <code>array</code></li></ul><p>\u8BBE\u7F6E RBAC \u6A21\u578B\u4EE5\u53CA\u5916\u952E KEY, \u8FD9\u91CC\u9ED8\u8BA4\u8BBE\u5B9A\u7684\u662F <code>poppy/system</code> \u6A21\u5757\u7684\u6A21\u578B, \u4E0D\u4F7F\u7528\u6B64\u6A21\u5757\u53EF\u4EE5\u81EA\u884C\u5B9E\u73B0\u6A21\u578B\u5B9A\u4E49\u4EE5\u53CA\u5173\u8054\u5173\u7CFB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;rbac&#39;       =&gt; [
    // \u89D2\u8272\u6A21\u578B
    &#39;role&#39;            =&gt; \\Poppy\\System\\Models\\PamRole::class,
    // \u8D26\u53F7\u6A21\u578B
    &#39;account&#39;         =&gt; \\Poppy\\System\\Models\\PamAccount::class,
    // \u89D2\u8272\u8D26\u53F7\u6A21\u578B
    &#39;role_account&#39;    =&gt; \\Poppy\\System\\Models\\PamRoleAccount::class,
    // \u6743\u9650\u6A21\u578B
    &#39;permission&#39;      =&gt; \\Poppy\\System\\Models\\PamPermission::class,
    // \u89D2\u8272\u6743\u9650\u6A21\u578B
    &#39;role_permission&#39; =&gt; \\Poppy\\System\\Models\\PamPermissionRole::class,
    // \u89D2\u8272\u5916\u952E
    &#39;role_fk&#39;         =&gt; &#39;role_id&#39;,
    // \u8D26\u53F7\u5916\u952E
    &#39;account_fk&#39;      =&gt; &#39;account_id&#39;,
    // \u6743\u9650\u5916\u952E
    &#39;permission_fk&#39;   =&gt; &#39;permission_id&#39;,
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58" aria-hidden="true">#</a> \u7F13\u5B58</h2><h3 id="\u7F13\u5B58\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u5B9A\u4E49" aria-hidden="true">#</a> \u7F13\u5B58\u5B9A\u4E49</h3><p>\u7F13\u5B58\u4F7F\u7528\u6241\u5E73\u5316\u7BA1\u7406, \u7F13\u5B58\u51FD\u6570\u662F\u5728 laravel \u7684\u57FA\u7840\u4E0A\u52A0\u4E86\u4E00\u5C42\u6807\u7B7E, \u7528\u6CD5\u9075\u5FAA laravel \u7F13\u5B58\u4F7F\u7528</p><p>\u7F13\u5B58\u4E00\u822C\u91C7\u7528\u5982\u4E0B\u547D\u540D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sys_cache(&#39;{slug}&#39;)-&gt;get(&#39;{name}&#39;)
slug    : \u6839\u636E\u6A21\u5757\u76EE\u5F55\u6765\u8FDB\u884C\u5224\u5B9A
    \u4F8B\u5982 poppy system \u6A21\u5757\u547D\u540D\u4E3A py-system
    \u4F8B\u5982 poppy core \u6A21\u5757\u547D\u540D\u4E3A py-core
    \u4F8B\u5982 poppy core rbac \u6A21\u5757\u547D\u540D\u4E3A py-core-rbac(\u56E0\u4E3A\u9700\u8981\u7528\u5230 flush \u65B9\u6CD5, \u8FD9\u91CC\u91C7\u7528\u6807\u7B7E\u6765\u533A\u5206, \u800C\u4E0D\u662F\u4F7F\u7528 type)
name    : \u4EE3\u8868\u7684\u662F\u7F13\u5B58\u7684\u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u4FDD\u8BC1\u7F13\u5B58\u540D\u79F0\u7684\u552F\u4E00\u6027\u6211\u4EEC\u7EA6\u5B9A slug : poppy \u6A21\u5757 : <code>py-{module}</code></p><p>name : name \u4F7F\u7528\u9759\u6001\u65B9\u6CD5\u5B9A\u4E49, \u652F\u6301\u4F20\u53C2</p><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><p>\u4F8B\u5982 Area \u6A21\u5757\u7684\u6211\u4EEC\u5B9A\u4E49\u7F13\u5B58\u51FD\u6570</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">namespace</span> <span class="token package">Poppy<span class="token punctuation">\\</span>Area<span class="token punctuation">\\</span>Classes</span><span class="token punctuation">;</span>


<span class="token keyword">class</span> <span class="token class-name-definition class-name">PyAreaDef</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * ID -&gt; PID \u6620\u5C04
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">ckMatchIdPid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;match_id_pid&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">bool</span></span> <span class="token parameter">$clear</span> \u662F\u5426\u6E05\u9664
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function-definition function">matchKv</span><span class="token punctuation">(</span><span class="token variable">$clear</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$clear</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">sys_cache</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;py-area&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">forget</span><span class="token punctuation">(</span><span class="token class-name static-context">PyAreaDef</span><span class="token operator">::</span><span class="token function">ckMatchIdPid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">sys_cache</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;py-area&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">remember</span><span class="token punctuation">(</span><span class="token class-name static-context">PyAreaDef</span><span class="token operator">::</span><span class="token function">ckMatchIdPid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">AreaContent</span><span class="token operator">::</span><span class="token function">pluck</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;parent_id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function g(k,y){const a=t("ExternalLinkIcon");return d(),c("div",null,[r,n("p",null,[n("a",o,[s("phplint"),i(a)]),s("\u662F\u4E00\u4E2A\u5FEB\u901F\u68C0\u6D4B php \u8BED\u6CD5\u9519\u8BEF\u7684\u5DE5\u5177, \u6B64\u5DE5\u5177\u65E0\u9700\u5B89\u88C5\u5728\u9879\u76EE\u4E2D, \u5168\u5C40\u5B89\u88C5\u5373\u53EF.")]),u,n("blockquote",null,[n("p",null,[s("\u5148\u7779\u4E3A\u5FEB, \u4F7F\u7528 sami \u751F\u6210\u7684 php api \u5730\u5740 "),n("a",v,[s("PhpApi For Poppy"),i(a)])])]),m,n("p",null,[s("Sami \u914D\u7F6E\u6587\u4EF6\u67E5\u770B : "),n("a",b,[s("sami-config.php"),i(a)])]),h])}const x=l(p,[["render",g],["__file","core.html.vue"]]);export{x as default};
