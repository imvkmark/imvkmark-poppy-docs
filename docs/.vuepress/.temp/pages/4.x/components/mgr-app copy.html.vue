<template><div><h1 id="mgrapp" tabindex="-1"><a class="header-anchor" href="#mgrapp" aria-hidden="true">#</a> MgrApp</h1>
<p>前后端分离的项目包</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<h3 id="前端访问" tabindex="-1"><a class="header-anchor" href="#前端访问" aria-hidden="true">#</a> 前端访问</h3>
<p>mgr-app 文件内置在 mgr-page 包的 resources 目录下, nginx 进行如下配置</p>
<p><em>mgr-app.conf</em></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server {
    listen 9101;
    server_name localhost;
    index index.html;
    root /path/of/mgr-app;

    location / {
        add_header Cache-Control "public, max-age=0, must-revalidate";
        try_files $uri $uri/ /index.html?$query_string;
    }

    access_log off;
    error_log off;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>domain.conf</em></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server {
    # ...
    location /mgr-app {
        rewrite "mgr-app/(.*)" /$1 break;
        proxy_pass http://127.0.0.1:9101;
    }
    # ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要自定义目录, 从源码编译并自行配置包目录即可</p>
<h3 id="后端支持" tabindex="-1"><a class="header-anchor" href="#后端支持" aria-hidden="true">#</a> 后端支持</h3>
<p>后端需要添加包 <code v-pre>poppy/mgr-app</code> 当前版本是开发版, 版本是 <code v-pre>4.0.x-dev</code>, 因为授权返回的地址是有此包支持, 所以需要添加此扩展包</p>
<h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2>
<p>数据准备</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># demo 集成
$ php artisan poppy:migrate module.demo

# 创建数据
$ php artisan poppy:seed module.demo --class='\Demo\Database\Seeds\DemoWebappDatabaseSeeder'
$ php artisan poppy:seed module.demo --class='\Demo\Database\Seeds\DemoUserDatabaseSeeder'

# 还原数据
$ php artisan poppy:migrate:rollback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路径配置" tabindex="-1"><a class="header-anchor" href="#路径配置" aria-hidden="true">#</a> 路径配置</h2>
<p>路径是生成前端所用导航的入口文件, 告诉前端如何加载数据, 渲染页面, 文件位于 <code v-pre>modules/{module}/configurations/path.yaml</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># [1]</span>
<span class="token key atrule">backend</span><span class="token punctuation">:</span>
    <span class="token comment"># [2]</span>
    <span class="token key atrule">default</span><span class="token punctuation">:</span>
        <span class="token key atrule">title</span><span class="token punctuation">:</span> 菜单
        <span class="token comment"># [3]</span>
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> picture<span class="token punctuation">-</span>rounded
        <span class="token comment"># [4]</span>
        <span class="token key atrule">children</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 分组
              <span class="token key atrule">children</span><span class="token punctuation">:</span>
                  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 链接
                    <span class="token comment"># {type}/{route}/{route_params|explode by ,}/{query|gen_key}</span>
                    <span class="token key atrule">path</span><span class="token punctuation">:</span> form/demo<span class="token punctuation">:</span>api.mgr_app.form/field<span class="token punctuation">-</span>textarea
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[1]类型</strong>
backend 代表和用户类型想匹配的定义, 分为 user/develop/backend 三种</p>
<p><strong>[2]注入</strong>
这里的 KEY 作为注入项目 module.demo/backend||default, 可以将配置注入到这个地方, 例如在 mgr-page 模块下存在 key <code v-pre>backend.setting</code> 这个 key, 我们使用 injection 可以将模块配置注入到另外一个模块中达到不同的导航菜单的功能, 对于模块之间的顺序, 我们可以通过模块 <code v-pre>manifest.json</code> 文件中的 <code v-pre>order</code> 字段来进行定义, 按照从小到大的顺序进行排列</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">area</span><span class="token punctuation">:</span>
        <span class="token key atrule">title</span><span class="token punctuation">:</span> 地区管理
        <span class="token comment"># 将当前模块下所有 children 追加到指定key 的 children 中</span>
        <span class="token key atrule">injection</span><span class="token punctuation">:</span> <span class="token string">"poppy.mgr-app/backend||setting"</span>
        <span class="token key atrule">children</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 地区管理
              <span class="token key atrule">children</span><span class="token punctuation">:</span>
                  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 地区管理
                    <span class="token key atrule">path</span><span class="token punctuation">:</span> grid/py<span class="token punctuation">-</span>area<span class="token punctuation">:</span>api<span class="token punctuation">-</span>backend.content.index
                    <span class="token key atrule">permission</span><span class="token punctuation">:</span> <span class="token string">"backend:py-area.main.manage"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[3]图标</strong></p>
<p>图标我们使用 <a href="https://element-plus.org/zh-CN/component/icon.html" target="_blank" rel="noopener noreferrer">element-plus 图标库<ExternalLinkIcon/></a>, 图标名称格式支持 <code v-pre>kebab-case</code> 和 <code v-pre>CamelCase</code> 命名, 例如 <code v-pre>CircleCheck</code> 图标, 我们也可以写为 <code v-pre>circle-check</code></p>
<p><strong>[4]菜单</strong>
对于以上层级我们进行如下定义</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>导航 : 在顶部作为主导航
分组 : 对链接进行分组
链接 : 可以更改路由地址的链接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[5]链接</strong></p>
<p>链接的组成规范</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>form   / demo:api.mgr_app.form / field-textarea / name|my
{type} / {route}               / {route_params} / {query}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>type : 链接支持的格式, form : 表单, setting : 设置, grid : 列表</li>
<li>route : 路由, 通过 Laravel 定义的路由</li>
<li>route_params : 路由参数, 使用 , 分隔</li>
<li>query : 使用 <code v-pre>\Poppy\Framework\Helper\ArrayHelper::genKey()</code> 方式把字串解析成数组</li>
</ul>
<h2 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h2>
<p>项目中的操作项, 操作可分为 <code v-pre>request(请求)</code>, <code v-pre>page(页面)</code>, <code v-pre>copy(复制)</code>, <code v-pre>progress(进度)</code></p>
<h3 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h3>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$action</span>
    <span class="token comment">// 弹出确认弹窗</span>
    <span class="token operator">-></span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 设置图标</span>
    <span class="token comment">// 完整图标地址 : https://element-plus.org/zh-CN/component/icon.html#图标集合</span>
    <span class="token operator">-></span><span class="token function">icon</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Close'</span><span class="token punctuation">)</span> <span class="token comment">// 设置图标名称</span>
    <span class="token operator">-></span><span class="token function">only</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// 设置是否仅仅显示图标</span>
    <span class="token comment">// 设置风格</span>
    <span class="token operator">-></span><span class="token function">primary</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// 主题样式</span>
    <span class="token operator">-></span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// 默认</span>
    <span class="token operator">-></span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// 成功</span>
    <span class="token operator">-></span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">// 信息</span>
    <span class="token operator">-></span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// 警告</span>
    <span class="token operator">-></span><span class="token function">danger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">// 危险</span>
    <span class="token operator">-></span><span class="token function">disabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 禁用</span>
    <span class="token comment">// 朴素样式</span>
    <span class="token operator">-></span><span class="token function">plain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 文本样式</span>
    <span class="token operator">-></span><span class="token function">link</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 圆形图标</span>
    <span class="token operator">-></span><span class="token function">circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> ICON</h3>
<p>对于操作的图标,我们支持两种类型</p>
<ol>
<li><a href="https://element-plus.org/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88" target="_blank" rel="noopener noreferrer">ElementIcon<ExternalLinkIcon/></a></li>
</ol>
<p>使用 ElementUI 的图标需要填入指定的名称即可</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$action</span><span class="token operator">-></span><span class="token function">icon</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Bell'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li><a href="https://fonts.google.com/icons?selected=Material+Icons&amp;icon.style=Outlined&amp;icon.set=Material+Symbols" target="_blank" rel="noopener noreferrer">Material Symbols<ExternalLinkIcon/></a></li>
</ol>
<p>使用 Material 图标, 需要选择 MaterialSymbols 图标, 为了样式实现简约, 只能使用 Outline 样式图标, 为了区分不同的图标库, 需要在图标前加上前缀 <code v-pre>mu:</code></p>
<p>这里的图标名称需要填写图标的蛇形写法, 在图标详情中可以查询到</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$action</span><span class="token operator">-></span><span class="token function">icon</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'mu:notifications'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3>
<p><strong>表格</strong></p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">GridTableActions</span> <span class="token keyword">extends</span> <span class="token class-name">GridBase</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">table</span><span class="token punctuation">(</span><span class="token class-name type-declaration">TablePlugin</span> <span class="token variable">$table</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 添加 Action</span>
        <span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'handle'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'操作'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">asAction</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">ActionsRender</span> <span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 获取单行数据</span>
            <span class="token variable">$row</span> <span class="token operator">=</span> <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">getRow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">request</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'错误'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_request'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'error'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">page</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'页面'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_form'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'detail'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'form'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'复制'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'复制自定义的内容'</span> <span class="token operator">.</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>快捷操作/批量操作</strong></p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">GridLayout</span> <span class="token keyword">extends</span> <span class="token class-name">GridBase</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'布局'</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">quick</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Actions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">page</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'快捷操作'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_form'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'detail'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'form'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">icon</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Plus'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">batch</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Actions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">request</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'批量操作'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_request'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'success'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="种类" tabindex="-1"><a class="header-anchor" href="#种类" aria-hidden="true">#</a> 种类</h3>
<p><strong>request - Ajax 请求</strong></p>
<p>对服务器发起一个 ajax 请求, 并根据服务端返回内容进行前端页面的操作, 这里根据服务端的返回触发全局 Motion, 操作返回的 data 的数据作为 Motion 数据</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">request</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'成功'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_request'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'success'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>page - 以内部页面方式打开指定类型数据</strong></p>
<p>使用侧边栏方式打开一个页面, 当前支持 <code v-pre>form</code>, <code v-pre>grid</code> 两种数据内容</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">page</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'页面'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_form'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'detail'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'form'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>copy - 复制自定义数据</strong></p>
<p>复制按钮, 点击此按钮可已复制自定义的数据</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'复制'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'复制自定义的内容'</span> <span class="token operator">.</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>target - 在新窗口打开链接</strong></p>
<p>新窗口打开, 打开自定义的链接地址</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">target</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Target(百度)'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'https://www.baidu.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dashboard" tabindex="-1"><a class="header-anchor" href="#dashboard" aria-hidden="true">#</a> Dashboard</h2>
<p>Dashboard 意思是仪表盘, 目的是集中多个部分放到一个页面中进行展示, 可用于不同 <code v-pre>scope</code> 之间的配置和主页仪表盘</p>
<p><img src="https://file.wulicode.com/note/2022/06-23/17-41-48420.png" alt=""></p>
<p>类之间的关系如下</p>
<p><img src="https://file.wulicode.com/note/2022/06-23/17-52-34572.png" alt=""></p>
<p><code v-pre>Dashboard</code> 是仪表板, <code v-pre>Panel</code> 定义为仪表盘的部件</p>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<p><strong>定义路径</strong></p>
<p>这里的 url 类型是 <code v-pre>dashboard</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 表单仪表盘
  <span class="token key atrule">path</span><span class="token punctuation">:</span> dashboard/demo<span class="token punctuation">:</span>api.mgr_app.dashboard/form
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义控制器</strong></p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">DashboardController</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$dashboard</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DashboardForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$dashboard</span><span class="token operator">-></span><span class="token function">resp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义仪表盘</strong></p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token doc-comment comment">/**
 * 表单仪表盘
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">DashboardForm</span> <span class="token keyword">extends</span> <span class="token class-name">DashboardWidget</span>
<span class="token punctuation">{</span>

    <span class="token comment">// 标题</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'仪表盘'</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 定义 Scope</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">scope</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'test'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'TEST'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">scope</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'mark'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Mark'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 定义仪表盘面板</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">panels</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取当前的Scope</span>
        <span class="token variable">$scope</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">getCurrentScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 定义面板</span>
        <span class="token variable">$form1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PanelForm</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'site'</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">form</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">FormPlugin</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token variable">$scope</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$form</span><span class="token operator">-></span><span class="token function">text</span><span class="token punctuation">(</span><span class="token variable">$scope</span><span class="token operator">-></span><span class="token property">value</span> <span class="token operator">.</span> <span class="token string single-quoted-string">':Title'</span><span class="token punctuation">,</span> <span class="token variable">$scope</span><span class="token operator">-></span><span class="token property">label</span> <span class="token operator">.</span> <span class="token string single-quoted-string">'标题'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                <span class="token class-name static-context">Rule</span><span class="token operator">::</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name static-context">Resp</span><span class="token operator">::</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'返回成功'</span> <span class="token operator">.</span> <span class="token function">var_export</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$form1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> Scope</h3>
<p>Scope 定义为 Dashboard 分类, 根据不同的类型区分不同的仪表盘的数据展示, 这里引用的是 trait <code v-pre>\Poppy\MgrApp\Classes\Traits\UseScopes</code> , 提供的方法有</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">trait</span> <span class="token class-name-definition class-name">UseScopes</span>
<span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 添加全局范围, 在添加全局范围之后, 如果不传入 Scope, 则默认为第一个 Scope
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">scope</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$key</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$label</span><span class="token punctuation">)</span>

    <span class="token doc-comment comment">/**
     * 范围结构
     * <span class="token keyword">@return</span> <span class="token class-name">Collection</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getScopesStruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Collection</span>

    <span class="token doc-comment comment">/**
     * 获取当前的Scope,
     * 支持未传入
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCurrentScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token class-name return-type">Scope</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="panelform" tabindex="-1"><a class="header-anchor" href="#panelform" aria-hidden="true">#</a> PanelForm</h3>
<p>表单面板, 定义为表单提交类型</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token comment">// 定义标题以及宽度</span>
<span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PanelForm</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'site'</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 定义表单项目, 这里的类型和 Form 一致</span>
    <span class="token operator">-></span><span class="token function">form</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">FormPlugin</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$form</span><span class="token operator">-></span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Title'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'标题'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token class-name static-context">Rule</span><span class="token operator">::</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 定义表单数据接收的处理方式</span>
    <span class="token operator">-></span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Resp</span><span class="token operator">::</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'返回成功'</span> <span class="token operator">.</span> <span class="token function">var_export</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> Grid</h2>
<p>Grid 是项目的数据展示工具, 各个部件如下所示</p>
<p><img src="https://file.wulicode.com/note/2022/06-11/10-51-50606.png" alt=""></p>
<h2 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> Table</h2>
<p>列渲染, 列采用如下方式进行列的添加</p>
<h3 id="添加列" tabindex="-1"><a class="header-anchor" href="#添加列" aria-hidden="true">#</a> 添加列</h3>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">table</span><span class="token punctuation">(</span><span class="token class-name type-declaration">TablePlugin</span> <span class="token variable">$table</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'ID'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">quickId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置基础属性" tabindex="-1"><a class="header-anchor" href="#设置基础属性" aria-hidden="true">#</a> 设置基础属性</h3>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">table</span><span class="token punctuation">(</span><span class="token class-name type-declaration">TablePlugin</span> <span class="token variable">$table</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'ID'</span><span class="token punctuation">)</span>
        <span class="token comment">// 定义最小宽度</span>
        <span class="token operator">-></span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
        <span class="token comment">// 固定最小宽度</span>
        <span class="token operator">-></span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
        <span class="token comment">// 设置展示位置, 默认 left, 可选 [left,center,right]</span>
        <span class="token operator">-></span><span class="token function">align</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'left'</span><span class="token punctuation">)</span>
        <span class="token comment">// 标识列为可排序</span>
        <span class="token operator">-></span><span class="token function">sortable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 标识列为可fix 显示, 默认是右侧, 可以设置为 [left, right], 例如操作按钮可固定在右侧展示</span>
        <span class="token operator">-></span><span class="token function">fixed</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'right'</span><span class="token punctuation">)</span>
        <span class="token comment">// 文字显示为一行, 并且多余使用省略号</span>
        <span class="token operator">-></span><span class="token function">ellipsis</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 纯文本可复制</span>
        <span class="token operator">-></span><span class="token function">copyable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="快捷样式" tabindex="-1"><a class="header-anchor" href="#快捷样式" aria-hidden="true">#</a> 快捷样式</h3>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">table</span><span class="token punctuation">(</span><span class="token class-name type-declaration">TablePlugin</span> <span class="token variable">$table</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'ID'</span><span class="token punctuation">)</span>
        <span class="token comment">// 渲染为ID, 固定宽度, 并将ID 居中, 普通模式 5位数值, large模式 7 位数字</span>
        <span class="token operator">-></span><span class="token function">quickId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">quickId</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span>

        <span class="token comment">// 渲染为标题, 默认显示 15个汉字, large 模式显示 20个汉字左右</span>
        <span class="token operator">-></span><span class="token function">quickTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">quickTitle</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span>

        <span class="token comment">// 渲染为 Y-m-d h:i:s 宽度并居中</span>
        <span class="token operator">-></span><span class="token function">quickDatetime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">// 定义 Icon 的快捷数量, 宽度根据数量来进行计算</span>
        <span class="token operator">-></span><span class="token function">quickIcon</span><span class="token punctuation">(</span><span class="token variable">$num</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义展示" tabindex="-1"><a class="header-anchor" href="#自定义展示" aria-hidden="true">#</a> 自定义展示</h3>
<p>列渲染展示, 添加列若是模型存在的数据, 则原样展示, 如果没有, 或者需要对数据进行组合, 格式化, 可以采用自定义的渲染方式</p>
<p>如果存在 ID, 则展示为 ID</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'ID'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想把用户的手机号进行隐藏展示, 并且手机号是存在的字段</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'mobile'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'用户手机号'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">display</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">substr</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">.</span><span class="token string single-quoted-string">'****'</span><span class="token operator">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想组合两个字段的展示, 例如用户的姓名和部门是两个字段</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token comment">// 这里 $this 返回的是模型的一行数据</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'info'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'姓名(部门)'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">display</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">truename</span><span class="token operator">.</span><span class="token string double-quoted-string">"(<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">department</span><span class="token punctuation">}</span></span>)"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="快捷渲染" tabindex="-1"><a class="header-anchor" href="#快捷渲染" aria-hidden="true">#</a> 快捷渲染</h3>
<p>这里也定义快捷的渲染方法, 渲染方法使用 <code v-pre>asXx</code> 格式</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token comment">// 渲染为可点击的链接地址</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'url'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'用户主页'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token operator">-></span><span class="token function">asLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 渲染为Html</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'color'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Html'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">asHtml</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string double-quoted-string">"&lt;div style='<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">style</span><span class="token punctuation">}</span></span>'><span class="token interpolation"><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">title</span></span>&lt;/div>"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 图片, 将存储的图片地址以图片的形式展示到数据行中</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'image'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'图片'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">asImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 可下载, 渲染为下载按钮</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'pdf'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Pdf'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">asDownload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显示为快捷开关</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'loading'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Loading'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">asOnOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用定义的状态字段来返回</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'usingKv'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">asKv</span><span class="token punctuation">(</span><span class="token class-name static-context">DemoWebapp</span><span class="token operator">::</span><span class="token function">kvStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显示为可以格式化的时间</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'date'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'创建时间'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">asDate</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'m-d h:i'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 根据语言显示为 距今 xxx 形式</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'date'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'创建时间'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">asDiffForHumans</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 根据语言显示为 距今 xxx 形式</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'filesize'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'文件体积'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">asFilesize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显示为隐藏数据, 并可以自定义接口来返回数据并显示在列表中</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'filesize'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'文件体积'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">asHidden</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列编辑" tabindex="-1"><a class="header-anchor" href="#列编辑" aria-hidden="true">#</a> 列编辑</h3>
<p>支持行内编辑, 文本模式, 开关模式, 选择模式, 如果不指定地址, 则采用模型的数据进行修改, 此功能对于不敏感的数据进行编辑, 如果涉及到业务逻辑的数据, 建议使用自定义地址进行修改</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token comment">// 支持编辑, 并支持字段更换名称</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'loading-alt'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'行内编辑(字段更名)'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">editAsOnOff</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">loading</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'loading'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 禁用指定行的数据进行编辑</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'loading-disable'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'行内编辑(禁用部分)'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">editAsOnOff</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">loading</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">id</span> <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'loading'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 自定义Url进行编辑</span>
<span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'loading-url'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'行内编辑(自定义Url)'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">editAsOnOff</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">loading</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'loading'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_modify_loading'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前支持的几个类型为</p>
<p><strong>Select, 选择数据进行提交</strong></p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'status-alt'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'行内编辑(字段更名)'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">editAsSelect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">status</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">options</span><span class="token punctuation">(</span><span class="token class-name static-context">DemoWebapp</span><span class="token operator">::</span><span class="token function">kvStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>OnOff, 开关</strong></p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'loading'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'行内编辑(字段更名)'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">editAsOnOff</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">loading</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Text, 文字变更</strong></p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'sort-alt'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'行内编辑(字段更名)'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">copyable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">editAsText</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">sort</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'sort'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> Filter</h3>
<blockquote>
<p>表的搜索工具</p>
</blockquote>
<h3 id="batch" tabindex="-1"><a class="header-anchor" href="#batch" aria-hidden="true">#</a> Batch</h3>
<blockquote>
<p>对数据的批处理</p>
</blockquote>
<h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> Render</h3>
<p>列显示的渲染</p>
<h3 id="action-1" tabindex="-1"><a class="header-anchor" href="#action-1" aria-hidden="true">#</a> Action</h3>
<p>操作 <a href="#action">Action</a> 是触发全局动作, 参考 Action 部分</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'handle'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'操作'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">asAction</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">ActionsRender</span> <span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">request</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'成功'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_request'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'success'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">page</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'页面'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_form'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'detail'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'form'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">target</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Target(百度)'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'https://www.baidu.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>隐藏</strong></p>
<h2 id="form" tabindex="-1"><a class="header-anchor" href="#form" aria-hidden="true">#</a> Form</h2>
<p>表单支持对数据的创建以及编辑</p>
<h3 id="创建表单" tabindex="-1"><a class="header-anchor" href="#创建表单" aria-hidden="true">#</a> 创建表单</h3>
<p><strong>继承方式</strong>
表单继承了 <code v-pre>FormWidget</code></p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">FormBanEstablish</span> <span class="token keyword">extends</span> <span class="token class-name">FormWidget</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 设置标题</span>
    <span class="token keyword">protected</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'新增'</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取路由参数或者 Query 参数用于初始化</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">id</span> <span class="token operator">=</span> <span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 对数据的处理, 这里的执行在表单验证过之后触发</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$scope</span>                 <span class="token operator">=</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token class-name static-context">Scope</span><span class="token operator">::</span><span class="token constant">QUERY_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$input</span>                 <span class="token operator">=</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$input</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'account_type'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$scope</span><span class="token punctuation">;</span>

        <span class="token variable">$Ban</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ban</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$Ban</span><span class="token operator">-></span><span class="token function">establish</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name static-context">Resp</span><span class="token operator">::</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token variable">$Ban</span><span class="token operator">-></span><span class="token function">getError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token class-name static-context">Resp</span><span class="token operator">::</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'操作成功'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'motion|grid:reload'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 返回模型数据</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$pam</span> <span class="token operator">=</span> <span class="token class-name static-context">PamBan</span><span class="token operator">::</span><span class="token function">findOrFail</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name static-context">Arr</span><span class="token operator">::</span><span class="token function">pluck</span><span class="token punctuation">(</span><span class="token variable">$pam</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'type'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'value'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'note'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 定义表单</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'type'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'类型'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">options</span><span class="token punctuation">(</span><span class="token class-name static-context">PamBan</span><span class="token operator">::</span><span class="token function">kvType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token class-name static-context">Rule</span><span class="token operator">::</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'value'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'限制值'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token class-name static-context">Rule</span><span class="token operator">::</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">help</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"如果是Ip支持如下几种格式 :  固定IP(192.168.1.1) ; IP段 : (192.168.1.1-192.168.1.21);  IP 掩码(192.168.1.1/24); IP 通配符(192.168.1.*)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'note'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'备注'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>简易方式</strong></p>
<blockquote>
<p>开发中...</p>
</blockquote>
<p>下面对组件进行相应的介绍, 所有使用方式以以上两种方式为主</p>
<h3 id="table-1" tabindex="-1"><a class="header-anchor" href="#table-1" aria-hidden="true">#</a> Table</h3>
<p>表单的表格组件</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">FormTableEstablish</span> <span class="token keyword">extends</span> <span class="token class-name">FormWidget</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 设置标题</span>
    <span class="token keyword">protected</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'表格'</span><span class="token punctuation">;</span>

    <span class="token comment">// 返回模型数据</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'table'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">'id'</span>   <span class="token operator">=></span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'name'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'多厘'</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">'id'</span>   <span class="token operator">=></span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'name'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'晴天'</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 定义表单</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'table'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'表格'</span><span class="token punctuation">)</span>
            <span class="token comment">// 定义列</span>
            <span class="token operator">-></span><span class="token function">cols</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">TablePlugin</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'ID'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'name'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'用户名'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setting" tabindex="-1"><a class="header-anchor" href="#setting" aria-hidden="true">#</a> Setting</h2>
<p>设置用于支持分组的配置</p>
<h2 id="其他概念" tabindex="-1"><a class="header-anchor" href="#其他概念" aria-hidden="true">#</a> 其他概念</h2>
<h3 id="motion" tabindex="-1"><a class="header-anchor" href="#motion" aria-hidden="true">#</a> Motion</h3>
<blockquote>
<p>Motion 用于触发全局的动作, 使用后端返回内容来用于前端的不同操作</p>
</blockquote>
<p>编写: Motion 使用 <RouterLink to="/4.x/framework/resp.html">Resp</RouterLink> 返回
Motion 格式如下, 如果使用 Resp 返回, 则也可使用 kv 方式来编写 <code v-pre>motion|grid:reload;time|200</code></p>
<p>解析之后的对象如下所示</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">motion</span><span class="token operator">:</span> <span class="token string">"grid:reload"</span><span class="token punctuation">;</span>
	<span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置用于在表单中加入操作, 在 Grid 渲染中加入操作, 批处理, 表单的快速操作</p>
</div></template>
