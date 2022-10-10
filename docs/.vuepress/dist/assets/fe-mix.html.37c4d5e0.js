import{_ as n,r as l,o as d,c as r,d as s,e,a,b as u}from"./app.d1bf96cf.js";const c={},m=s("h1",{id:"wip-laravel-mix",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#wip-laravel-mix","aria-hidden":"true"},"#"),e(" [WIP] Laravel-Mix")],-1),v=s("p",null,"\u7CFB\u7EDF\u540E\u53F0\u96C6\u6210 layui \u4F5C\u4E3A\u540E\u53F0 UI \u754C\u9762, \u5143\u7D20\u7684\u4F7F\u7528\u8BE6\u89C1 www.layui.com",-1),o=s("h2",{id:"\u524D\u53F0\u9875\u9762\u5F00\u53D1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u524D\u53F0\u9875\u9762\u5F00\u53D1","aria-hidden":"true"},"#"),e(" \u524D\u53F0\u9875\u9762\u5F00\u53D1")],-1),t={href:"https://laravel-china.org/docs/laravel/5.5/mix/1307",target:"_blank",rel:"noopener noreferrer"},b=u(`<h3 id="\u6587\u4EF6\u7684\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u7684\u4F4D\u7F6E" aria-hidden="true">#</a> \u6587\u4EF6\u7684\u4F4D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sass \u6E90\u6587\u4EF6\u7684\u4F4D\u7F6E, \u4F7F\u7528\u7684\u6837\u5F0F\u6587\u4EF6\u662F web.scss
~/resources/assets/scss/

# \u9875\u9762\u8D44\u6E90\u653E\u7F6E\u4F4D\u7F6E
~/module/resources/images

# \u76D1\u542C\u6587\u4EF6\u4F4D\u7F6E, \u8FD9\u91CC\u4F7F\u7528\u7684\u7EC4\u4EF6\u662F laravel-mix , \u8BE6\u7EC6\u6587\u6863\u67E5\u770B : https://github.com/JeffreyWay/laravel-mix
~/webpack.mix.js

# \u751F\u6210 css \u7684\u4F4D\u7F6E
~/public/assets/css/

# \u56FE\u7247\u7684\u4F4D\u7F6E
~/public/modules/{user|system|web}/images/

# \u8BBF\u95EE\u5730\u5740, \u8FD9\u91CC {page} \u4EE3\u8868\u9700\u8981\u5E03\u5C40\u7684\u9875\u9762\u7684\u540D\u79F0
# \u4F8B\u5982 : http://dev.play.com/develop/l/layout.m.homepage
http://{domain}/develop/l/{page}

# \u9875\u9762\u547D\u540D, \u9875\u9762\u547D\u540D\u4E3A \`{page}.blade.php\`, \u8FD9\u91CC\u652F\u6301\u591A\u5C42\u6587\u4EF6\u5939
~/resources/views
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5982\u4F55\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u8FD0\u884C" aria-hidden="true">#</a> \u5982\u4F55\u8FD0\u884C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B89\u88C5
$ npm install

# \u5F00\u59CB\u76D1\u542C scss, \u5199\u7684 css
$ npm run watch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack-mix-js-\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#webpack-mix-js-\u7684\u914D\u7F6E" aria-hidden="true">#</a> webpack.mix.js \u7684\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
mix
   .browserSync({
       // \u8FD9\u91CC\u66FF\u6362\u5730\u5740
       proxy : &#39;http://dev.{domain}.com/&#39;,
       files : [
           &quot;public/resources/js/**/*.js&quot;,
           &quot;public/resources/css/*.css&quot;,
           &quot;modules/**/resources/views/**/*.blade.php&quot;,
           &quot;modules/**/resources/mixes/**/*.js&quot;,
           &quot;modules/**/resources/js/**/*.js&quot;
       ]
   })
   .disableNotifications()
   .version()
   /*
   |--------------------------------------------------------------------------
   | develop &amp; backend
   |--------------------------------------------------------------------------
   */
   /* system js
    * ---------------------------------------- */
   .combine([
           &#39;modules/system/resources/libs/jquery/2.2.4/jquery.min.js&#39;,
           &#39;modules/system/resources/libs/jquery/form/jquery.form.js&#39;,
           &#39;modules/system/resources/libs/jquery/toastr/jquery.toastr.js&#39;,
           &#39;modules/system/resources/libs/jquery/pjax/jquery.pjax.js&#39;,
           &#39;modules/system/resources/libs/jquery/poshytip/jquery.poshytip.js&#39;,
           &#39;modules/system/resources/libs/jquery/validation/jquery.validation.js&#39;,
           &#39;modules/system/resources/libs/jquery/data-tables/jquery.data-tables.js&#39;,
           &#39;modules/system/resources/libs/jquery/tokenize2/jquery.tokenize2.js&#39;,
           &#39;modules/system/resources/libs/jquery/spinner/jquery.spinner.js&#39;,
           &#39;modules/system/resources/libs/waves/waves.min.js&#39;,
           &#39;modules/system/resources/libs/vue/vue.min.js&#39;,
           &#39;modules/system/resources/libs/underscore/underscore.js&#39;,
           // hash, \u52A0\u5BC6\u4F7F\u7528 @ develop
           &#39;modules/system/resources/libs/jshash/md5.min.js&#39;,
           &#39;modules/system/resources/libs/jshash/sha1.min.js&#39;,
           // \u7C98\u8D34\u677F
           &#39;modules/system/resources/libs/clipboard/clipboard.min.js&#39;,
           // \u7F16\u8F91\u5668
           &#39;modules/system/resources/libs/simditor/module.js&#39;,
           &#39;modules/system/resources/libs/simditor/hotkeys.js&#39;,
           &#39;modules/system/resources/libs/simditor/uploader.js&#39;,
           &#39;modules/system/resources/libs/simditor/simditor.js&#39;,
           // \u9F20\u6807\u6ED1\u8FC7\u63D0\u793A
         &#39;modules/system/resources/libs/popper.js/popper.min.js&#39;,
         &#39;modules/system/resources/libs/bootstrap/js/util.js&#39;,
         &#39;modules/system/resources/libs/bootstrap/js/tooltip.js&#39;,
           // \u56FE\u7247\u8F6E\u8BE2\u663E\u793A
           &#39;modules/system/resources/libs/jquery/fancybox/jquery.fancybox.min.js&#39;,
     ],
     &#39;public/assets/js/system_vendor.js&#39;
   )
   .combine([
           // editor
           &#39;modules/system/resources/libs/ace/ace.js&#39;,
           &#39;modules/system/resources/libs/jquery/backstretch/jquery.backstretch.min.js&#39;,
           &#39;modules/system/resources/libs/poppy/util.js&#39;,
           &#39;modules/system/resources/libs/poppy/cp.js&#39;,
           &#39;modules/system/resources/libs/poppy/system/cp.js&#39;
     ],
     &#39;public/assets/js/system_cp.js&#39;
   )
   /* system css
    * ---------------------------------------- */
   .sass(
     &#39;modules/system/resources/scss/system.scss&#39;,
     &#39;public/assets/css/system.css&#39;
   )
   .copyDirectory(&#39;modules/system/resources/libs/layui&#39;, &#39;public/assets/layui&#39;)
   .copyDirectory(&#39;modules/system/resources/libs/easy-web&#39;, &#39;public/assets/easy-web&#39;)
   .copyDirectory(&#39;modules/system/resources/images/libs&#39;, &#39;public/assets/images/libs&#39;)
   .copyDirectory(&#39;modules/system/resources/images/system&#39;, &#39;public/assets/images/default&#39;)
   .copyDirectory(&#39;modules/system/resources/fonts/fontawesome&#39;, &#39;public/assets/font/fontawesome&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function y(p,j){const i=l("ExternalLinkIcon");return d(),r("div",null,[m,v,o,s("p",null,[e("\u524D\u53F0\u9875\u9762\u4F9D\u8D56\u4E8E laravel-mix \u6765\u8FDB\u884C\u9875\u9762\u7684\u5F00\u53D1. \u4E0B\u9762\u4F1A\u5BF9\u4EE5\u4E0B\u7684\u51E0\u4E2A\u90E8\u5206\u8FDB\u884C\u6DF1\u5165\u89E3\u6790, \u9996\u5148,\u6211\u4EEC\u5148\u770B\u4E0B\u5982\u4F55\u8FDB\u884C\u9875\u9762\u7684\u5E03\u5C40\u548C\u663E\u793A \u5E38\u7528\u6587\u6863 : "),s("a",t,[e("\u8D44\u6E90\u4EFB\u52A1\u7F16\u8BD1\u5668 Laravel Mix"),a(i)])]),b])}const x=n(c,[["render",y],["__file","fe-mix.html.vue"]]);export{x as default};
