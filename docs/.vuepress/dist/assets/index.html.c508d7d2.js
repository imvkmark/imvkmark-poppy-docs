import{_ as d,r as a,o as r,c as t,d as e,e as i,a as l,b as s}from"./app.d1bf96cf.js";const c={},v=s(`<h1 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h1><h3 id="\u5F00\u53D1\u6587\u4EF6\u4E0D\u9700\u8981\u81EA\u52A8\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u6587\u4EF6\u4E0D\u9700\u8981\u81EA\u52A8\u52A0\u8F7D" aria-hidden="true">#</a> \u5F00\u53D1\u6587\u4EF6\u4E0D\u9700\u8981\u81EA\u52A8\u52A0\u8F7D</h3><ul><li>\u9879\u76EE\u4E2D\u4F7F\u7528 IDE Helper \u751F\u6210\u6D4F\u89C8\u5668\u63D0\u793A\u6587\u4EF6, \u6B64\u6587\u4EF6\u5728\u6B63\u5F0F\u9879\u76EE\u4E0B\u4E0D\u9700\u8981\u8FDB\u884C\u52A0\u8F7D</li><li>Clockwork \u4E0D\u9700\u8981\u52A0\u8F7D</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;extra&quot; : {
    &quot;laravel&quot; : {
        &quot;dont-discover&quot; : [
            &quot;itsgoingd/clockwork&quot;,
            &quot;barryvdh/laravel-ide-helper&quot;,
        ]
    }
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9879\u76EE\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u8BF4\u660E" aria-hidden="true">#</a> \u9879\u76EE\u8BF4\u660E</h2><h3 id="\u9879\u76EE\u76EE\u5F55\u6811" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u76EE\u5F55\u6811" aria-hidden="true">#</a> \u9879\u76EE\u76EE\u5F55\u6811</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 config              # \u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 modules             # \u6A21\u5757\u540D\u79F0, \u8FD9\u91CC\u4EE5system \u6A21\u5757 \u4F5C\u4E3A\u8BF4\u660E, \u8BE6\u7EC6\u89C1 \u6A21\u5757\u76EE\u5F55\u6811
\u2502   \u251C\u2500\u2500 finance
\u2502   \u251C\u2500\u2500 order
\u2502   \u2514\u2500\u2500 ...
\u251C\u2500\u2500 public
\u2502   \u251C\u2500\u2500 docs            # \u6587\u6863
\u2502   \u251C\u2500\u2500 modules         # \u6A21\u5757\u8D44\u6E90
\u2502   \u2514\u2500\u2500 resources       # \u8D44\u6E90\u9879\u76EE / \u516C\u5171
\u2502       \u251C\u2500\u2500 css
\u2502       \u251C\u2500\u2500 js
\u2502       \u2514\u2500\u2500 scss
\u251C\u2500\u2500 resources           # \u8D44\u6E90\u6E90\u6587\u4EF6
\u2502   \u251C\u2500\u2500 assets
\u2502   \u251C\u2500\u2500 docs
\u2502   \u251C\u2500\u2500 lang
\u2502       \u251C\u2500\u2500 en
\u2502       \u2514\u2500\u2500 zh
\u251C\u2500\u2500 storage             # \u5B58\u50A8\u76EE\u5F55
\u2502   \u251C\u2500\u2500 app             # \u5E94\u7528\u8D44\u6E90
\u2502   \u251C\u2500\u2500 bootstrap       # \u542F\u52A8\u9879\u76EE
\u2502   \u251C\u2500\u2500 bower           # bower \u6587\u6863
\u2502   \u251C\u2500\u2500 clockwork       # \u8C03\u8BD5\u6587\u4EF6
\u2502   \u251C\u2500\u2500 console         # \u63A7\u5236\u5668
\u2502   \u251C\u2500\u2500 framework       # \u6846\u67B6\u7F13\u5B58
\u2502   \u2502   \u251C\u2500\u2500 cache
\u2502   \u2502   \u251C\u2500\u2500 sessions
\u2502   \u2502   \u2514\u2500\u2500 views
\u2502   \u251C\u2500\u2500 logs            # \u65E5\u5FD7
\u2502   \u251C\u2500\u2500 phplint
\u2502   \u251C\u2500\u2500 purifier
\u2502   \u251C\u2500\u2500 sami
\u251C\u2500\u2500 tests               # \u6D4B\u8BD5\u76EE\u5F55
\u2502   \u251C\u2500\u2500 MerchantApi
\u2502   \u2502   \u2514\u2500\u2500 User
\u2502   \u2514\u2500\u2500 WebApi
\u2502       \u2514\u2500\u2500 User
\u2514\u2500\u2500 vendor              # \u7B2C\u4E09\u65B9\u6587\u6863(\u53EA\u662F\u9884\u89C8, \u4E0D\u505A\u8BE6\u7EC6\u8BF4\u660E)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801\u98CE\u683C\u7EDF\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u98CE\u683C\u7EDF\u4E00" aria-hidden="true">#</a> \u4EE3\u7801\u98CE\u683C\u7EDF\u4E00</h2>`,8),o={href:"http://oss-test.iliexiang.com/develop/Code_Style-Mark.xml",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,[i("\u6253\u5F00 "),e("code",null,"Preferences | Editor | Code Style"),i(" , \u5728\u53F3\u4FA7 "),e("code",null,"\u8BBE\u7F6E"),i(" \u4E2D\u9009\u62E9 "),e("code",null,"Import Scheme"),i(", \u5BFC\u5165\u521A\u624D\u4E0B\u8F7D\u7684 xml \u6587\u4EF6")],-1),m=e("li",null,[i("\u5728 "),e("code",null,"Scheme"),i(" \u9009\u62E9\u6846\u4E2D\u9009\u62E9\u521A\u624D\u5BFC\u5165\u7684\u98CE\u683C\u8FDB\u884C\u4F7F\u7528")],-1),b=s(`<p>phpstorm \u5E38\u7528\u5FEB\u6377\u952E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ctrl/cmd + alt + L          # \u683C\u5F0F\u5316\u4EE3\u7801(\u63D0\u4EA4\u4EE3\u7801\u524D\u64CD\u4F5C)
ctrl/cmd + alt + O          # \u9879\u76EE\u4F18\u5316\u5BFC\u5165, \u4FDD\u8BC1\u4EE3\u7801\u65E0\u5197\u4F59
ctrl/cmd + shift + n        # \u67E5\u627E\u6587\u4EF6
ctrl/cmd + alt + shift + n  # \u67E5\u627E\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801\u534F\u540C" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u534F\u540C" aria-hidden="true">#</a> \u4EE3\u7801\u534F\u540C</h2><h3 id="\u534F\u540C\u5DE5\u5177-git" tabindex="-1"><a class="header-anchor" href="#\u534F\u540C\u5DE5\u5177-git" aria-hidden="true">#</a> \u534F\u540C\u5DE5\u5177 GIT</h3><p>\u4EE3\u7801\u4F7F\u7528 Git \u8FDB\u884C\u4EE3\u7801\u534F\u540C</p><h3 id="\u5F00\u53D1\u5DE5\u4F5C\u6D41\u7A0B-git-flow" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u5DE5\u4F5C\u6D41\u7A0B-git-flow" aria-hidden="true">#</a> \u5F00\u53D1\u5DE5\u4F5C\u6D41\u7A0B Git Flow</h3>`,6),h={href:"https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow",target:"_blank",rel:"noopener noreferrer"},p=e("strong",null,"\u5206\u652F\u8BF4\u660E",-1),g=e("em",null,"master",-1),f=e("em",null,"master",-1),x=e("em",null,"develop",-1),_=e("em",null,"\u5F00\u53D1",-1),w=e("em",null,"master",-1),k={href:"https://www.git-tower.com/learn/git/ebook/cn/command-line/branching-merging/branching-workflows",target:"_blank",rel:"noopener noreferrer"},q=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5206\u652F\u8BF4\u660E
master       : \u7EBF\u4E0A\u5206\u652F
develop      : \u5F00\u53D1\u5206\u652F
hotfix/2.0.3 : Bug \u5206\u652F
feature/2.3  : \u5F00\u53D1\u5206\u652F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5B89\u88C5</strong></p><p>\u5B89\u88C5 Git flow (\u53C2\u8003\u6587\u6863: https://github.com/nvie/gitflow/wiki/Installation)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u521D\u59CB\u5316
git flow init -d

# \u67E5\u770B\u5E2E\u52A9
git flow feature help

# \u5206\u652F\u8BF4\u660E
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]

# hotfix
# \u521B\u5EFA\u4FEE\u590D\u5206\u652F
git flow hotfix start {missing-link}
#\u521B\u5EFA\u4FEE\u590D\u5206\u652F\uFF1A
git flow hotfix finish {missing-link}

# feature
# \u7528\u4E8E\u65B0\u7248\u672C\u5F00\u53D1\u65F6\u4F7F\u7528
git flow feature start 2.0.99
# \u8FD9\u4E2A \u201Cfeature finish\u201D \u547D\u4EE4\u4F1A\u628A\u6211\u4EEC\u7684\u5DE5\u4F5C\u6574\u5408\u5230\u4E3B \u201Cdevelop\u201D \u5206\u652F\u4E2D\u53BB\uFF0C\u540E\u9700\u8981\u624B\u52A8\u63A8\u9001\u5230\u7EBF\u4E0A\u5206\u652F
git flow feature finish 2.0.99

# release
git flow release start 2.0.99
git flow release finish 2.0.99
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F\u4E8B\u9879</strong></p><ul><li>\u5F00\u53D1\u65B0\u529F\u80FD\u6216\u8005\u4FEE\u590D\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5148\u4FDD\u8BC1\u672C\u5730\u6CA1\u6709\u672A\u4E0A\u4F20\u7684\u4EE3\u7801\u624D\u53EF\u4EE5\u521B\u5EFA</li><li>\u63D0\u4EA4\u5206\u652F\u65F6\uFF0C\u9700\u5148\u63D0\u4EA4\u5230\u672C\u5730\u4E4B\u540E\uFF0C\u8FD0\u884C git flow... \u540E\uFF0C\u63A8\u9001\u5230\u7EBF\u4E0A master \u548C develop\uFF08\u4E24\u6B21\u63A8\u9001\uFF09</li><li>\u8FDB\u884C hotfix \u8FDB\u884C\u4FEE\u590D\u4EE5\u53CA release \u53D1\u5E03\u7248\u672C\u65F6\u5019\u5FC5\u987B\u5B8C\u6574\u586B\u5199 <code>~/modules/build.md</code> \u53D1\u7248\u6587\u4EF6</li></ul><h3 id="\u4EE3\u7801\u63D0\u4EA4\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u63D0\u4EA4\u89C4\u8303" aria-hidden="true">#</a> \u4EE3\u7801\u63D0\u4EA4\u89C4\u8303</h3><p>\u4EE3\u7801\u63D0\u4EA4\u6839\u636E\u524D\u7F00\u6765\u533A\u5206\u4E0D\u540C\u7684\u63D0\u4EA4\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4EFB\u52A1\u524D\u7F00
task # 859 \u5B50 \u8BA2\u5355\u5217\u8868\u754C\u9762\u8C03\u6574/\u8BA2\u5355\u5217\u8868
# bug \u524D\u7F00
bug # 308 \u7528\u6237\u7BA1\u7406\u64CD\u4F5C
# \u7248\u672C\u53D1\u5E03\u524D\u7F00
release # 2.3.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801\u5BA1\u6838" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5BA1\u6838" aria-hidden="true">#</a> \u4EE3\u7801\u5BA1\u6838</h2><h3 id="\u4EE3\u7801\u8981\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u8981\u6C42" aria-hidden="true">#</a> \u4EE3\u7801\u8981\u6C42</h3><ul><li>\u53C2\u6570\u547D\u540D\u7B26\u5408\u89C4\u8303</li><li>\u64B0\u5199\u8D1F\u8D23\u6A21\u5757\u7684\u6CE8\u91CA(\u6CE8\u91CA\u5305\u542B\u7C7B, \u63A5\u53E3\u6587\u6863, \u53C2\u6570, \u65B9\u6CD5, \u51FD\u6570)</li><li>\u64B0\u5199\u5355\u5143\u6D4B\u8BD5, \u4FDD\u969C\u529F\u80FD/\u63A5\u53E3 \u6B63\u5E38\u4F7F\u7528</li></ul><h3 id="\u5BA1\u6838\u6807\u51C6" tabindex="-1"><a class="header-anchor" href="#\u5BA1\u6838\u6807\u51C6" aria-hidden="true">#</a> \u5BA1\u6838\u6807\u51C6</h3>`,13),G=e("li",null,[i("\u8FD0\u884C\u4F18\u5316\u5BFC\u5165, \u4FDD\u8BC1\u4EE3\u7801\u65E0\u5197\u4F59 "),e("code",null,"ctrl + alt + o")],-1),I=e("li",null,[i("\u4FDD\u8BC1\u4EE3\u7801\u683C\u5F0F\u6B63\u786E, \u5BF9\u6587\u4EF6\u5939\u8FDB\u884C\u4EE3\u7801\u683C\u5F0F\u5316 "),e("code",null,"ctrl + alt + l"),i(", \u5728 "),e("code",null,"src"),i(" \u76EE\u5F55\u4E0B\u8FD0\u884C")],-1),S={href:"https://snippets.cacher.io/snippet/8e1fe81c08d6f6591295",target:"_blank",rel:"noopener noreferrer"},C=e("li",null,"\u5BF9\u5F00\u53D1\u529F\u80FD\u8FDB\u884C\u62BD\u68C0, \u8FDB\u884C\u8003\u8BC4, \u4E0D\u7B26\u5408\u6807\u51C6\u7684\u8FDB\u884C 5 \u5143\u7EA2\u5305\u8FDB\u884C\u6539\u6B63",-1),E=s(`<h2 id="ide" tabindex="-1"><a class="header-anchor" href="#ide" aria-hidden="true">#</a> IDE</h2><p><strong>\u5FFD\u7565\u6389\u4E0D\u9700\u8981\u7684\u52A0\u8F7D\u76EE\u5F55</strong></p><p>\u751F\u6210\u7684\u6587\u4EF6, \u4E0D\u9700\u8981\u8FDB\u884C\u7D22\u5F15</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u524D\u7AEF\u6587\u4EF6
public/assets

# \u8C03\u8BD5
storage/clockwork

# \u751F\u6210\u7684\u6587\u6863
storage/sami
public/docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5C06 public \u76EE\u5F55\u8BBE\u7F6E\u4E3A\u8D44\u6E90\u6839\u76EE\u5F55</strong></p><p>\u56E0\u4E3A public \u76EE\u5F55\u662F\u5BF9\u5916\u8F93\u51FA\u76EE\u5F55, \u6240\u6709\u7684\u8D44\u6E90\u5747\u4EE5\u8FD9\u4E2A\u4F5C\u4E3A\u8D44\u6E90\u7684\u8BC6\u522B</p>`,6);function y(B,N){const n=a("ExternalLinkIcon");return r(),t("div",null,[v,e("ul",null,[e("li",null,[i("\u4E0B\u8F7D\u4EE3\u7801\u98CE\u683C\u6587\u4EF6"),e("a",o,[i("Code_Style-Mark"),l(n)])]),u,m]),b,e("p",null,[i("git-flow \u5E76\u4E0D\u662F\u8981\u66FF\u4EE3 Git\uFF0C\u5B83\u4EC5\u4EC5\u662F\u975E\u5E38\u806A\u660E\u6709\u6548\u5730\u628A\u6807\u51C6\u7684 Git \u547D\u4EE4\u7528\u811A\u672C\u7EC4\u5408\u4E86\u8D77\u6765\u3002 Release \u7BA1\u7406\u662F\u7248\u672C\u63A7\u5236\u5904\u7406\u4E2D\u7684\u53E6\u5916\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u8BDD\u9898, \u8BE6\u7EC6\u89C1\u4E0B\u8FB9\u7684\u6587\u6863. Git Flow \u7684\u8BE6\u7EC6\u8BF4\u660E\u6587\u6863 "),e("a",h,[i("git-flow \u7684\u5DE5\u4F5C\u6D41\u7A0B"),l(n)])]),e("p",null,[p,g,i(" \u53EA\u80FD\u7528\u6765\u5305\u62EC\u4EA7\u54C1\u4EE3\u7801\u3002\u4F60\u4E0D\u80FD\u76F4\u63A5\u5DE5\u4F5C\u5728\u8FD9\u4E2A master \u5206\u652F\u4E0A\uFF0C\u800C\u662F\u5728\u5176\u4ED6\u6307\u5B9A\u7684\uFF0C\u72EC\u7ACB\u7684\u7279\u6027\u5206\u652F\u4E2D\uFF08\u8FD9\u65B9\u9762\u6211\u4EEC\u4F1A\u9A6C\u4E0A\u8C08\u5230\uFF09\u3002\u4E0D\u76F4\u63A5\u63D0\u4EA4\u6539\u52A8\u5230 "),f,i(" \u5206\u652F\u4E0A\u4E5F\u662F\u5F88\u591A\u5DE5\u4F5C\u6D41\u7A0B\u7684\u4E00\u4E2A\u5171\u540C\u7684\u89C4\u5219\u3002 "),x,i(" \u662F\u4F60\u8FDB\u884C\u4EFB\u4F55\u65B0\u7684\u5F00\u53D1\u7684\u57FA\u7840\u5206\u652F\u3002\u5F53\u4F60\u5F00\u59CB\u4E00\u4E2A\u65B0\u7684\u529F\u80FD\u5206\u652F\u65F6\uFF0C\u5B83\u5C06\u662F "),_,i(" \u7684\u57FA\u7840\u3002\u53E6\u5916\uFF0C\u8BE5\u5206\u652F\u4E5F\u6C47\u96C6\u6240\u6709\u5DF2\u7ECF\u5B8C\u6210\u7684\u529F\u80FD\uFF0C\u5E76\u7B49\u5F85\u88AB\u6574\u5408\u5230 "),w,i(" \u5206\u652F\u4E2D\u3002 \u8FD9\u4E24\u4E2A\u5206\u652F\u88AB\u79F0\u4F5C\u4E3A "),e("a",k,[i("\u957F\u671F\u5206\u652F"),l(n)]),i("\u3002\u5B83\u4EEC\u4F1A\u5B58\u6D3B\u5728\u9879\u76EE\u7684\u6574\u4E2A\u751F\u547D\u5468\u671F\u4E2D\u3002\u800C\u5176\u4ED6\u7684\u5206\u652F\uFF0C\u4F8B\u5982\u9488\u5BF9\u529F\u80FD\u7684\u5206\u652F\uFF0C\u9488\u5BF9\u53D1\u884C\u7684\u5206\u652F\uFF0C\u4EC5\u4EC5\u53EA\u662F\u4E34\u65F6\u5B58\u5728\u7684\u3002\u5B83\u4EEC\u662F\u6839\u636E\u9700\u8981\u6765\u521B\u5EFA\u7684\uFF0C\u5F53\u5B83\u4EEC\u5B8C\u6210\u4E86\u81EA\u5DF1\u7684\u4EFB\u52A1\u4E4B\u540E\u5C31\u4F1A\u88AB\u5220\u9664\u6389\u3002")]),q,e("ul",null,[G,I,e("li",null,[i("\u4EE3\u7801\u4E2D\u4E0D\u5F97\u5B58\u5728\u7F16\u8F91\u5668\u63D0\u793A\u7684\u9519\u8BEF, \u4F18\u5316\u63D0\u793A\u89C1"),e("a",S,[i("PHP Code Review"),l(n)])]),C]),E])}const F=d(c,[["render",y],["__file","index.html.vue"]]);export{F as default};
