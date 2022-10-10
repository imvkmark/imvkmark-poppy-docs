import{_ as e,o as i,c as n,b as s}from"./app.d1bf96cf.js";const a={},d=s(`<h1 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h1><h2 id="\u914D\u7F6E\u9879\u76EE\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879\u76EE\u73AF\u5883" aria-hidden="true">#</a> \u914D\u7F6E\u9879\u76EE\u73AF\u5883</h2><p>\u9ED8\u8BA4\u9879\u76EE\u4E2D\u6CA1\u6709 <code>.env</code> \u6587\u4EF6</p><h3 id="\u9879\u76EE\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u9879\u76EE\u914D\u7F6E\u6587\u4EF6</h3><p>\u590D\u5236 <code>.env.example</code> \u4E3A <code>.env</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cp .env.example .env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u914D\u7F6E\u6570\u636E\u5E93\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DB_HOST=127.0.0.1
DB_DATABASE=poppy_v1
DB_USERNAME=root
DB_PASSWORD=Poppy123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u57DF\u540D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>URL_SITE=https://poppy-demo.wulicode.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u751F\u6210 app key, jwt key</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ php artisan key:generate
$ php artisan jwt:secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9879\u76EE\u521D\u59CB\u5316\u4EE5\u53CA\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u521D\u59CB\u5316\u4EE5\u53CA\u5B89\u88C5" aria-hidden="true">#</a> \u9879\u76EE\u521D\u59CB\u5316\u4EE5\u53CA\u5B89\u88C5</h3><p>\u6267\u884C\u6570\u636E\u5E93 migrate</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ php artisan poppy:migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7CFB\u7EDF\u5B89\u88C5\u5E76\u521B\u5EFA\u7528\u6237</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ php artisan py-system:install
Start Install Lemon Framework!
Init UserRole Ing...
Init Role success
Install User Roles Success
Init Rbac Permission...
[poppy.core.PermissionCommand] Import permission Success!
Init Rbac Permission Success

$ php artisan py-system:user create_user

 Please input username!:
 &gt; root_user

 Please input password!:
 &gt; 123456

 Please input role name!:
 &gt; root

User root_user created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5B8C\u6210\u8BBF\u95EE <code>https://poppy-demo.wulicode.com/mgr-page/login</code></p><p><img src="https://file.wulicode.com/note/2021/11-09/09-47-19512.png" alt=""></p><p>\u767B\u5F55\u4E4B\u540E\u7684\u754C\u9762</p><p><img src="https://file.wulicode.com/note/2021/11-09/09-47-58380.png" alt=""></p>`,21),l=[d];function r(t,c){return i(),n("div",null,l)}const o=e(a,[["render",r],["__file","install.html.vue"]]);export{o as default};
