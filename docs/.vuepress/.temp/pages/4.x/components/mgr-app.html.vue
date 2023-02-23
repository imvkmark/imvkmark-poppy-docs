<template><div><h1 id="mgrapp" tabindex="-1"><a class="header-anchor" href="#mgrapp" aria-hidden="true">#</a> MgrApp</h1>
<p>前后端分离的项目包</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>后端需要添加包 <code v-pre>poppy/mgr-app</code> 当前版本是开发版, 版本是 <code v-pre>4.0.x-dev</code>, 因为授权返回的地址是有此包支持, 所以需要添加此扩展包</p>
<h3 id="前端访问" tabindex="-1"><a class="header-anchor" href="#前端访问" aria-hidden="true">#</a> 前端访问</h3>
<p>mgr-app 文件内置在 mgr-page 包的 resources 目录下, 当前是属于开发过程中, 包放置在 <a href="https://github.com/imvkmark/poppy-dev-mgr-app/releases" target="_blank" rel="noopener noreferrer">GitHub Release<ExternalLinkIcon/></a></p>
<p>nginx 进行如下配置</p>
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
<h3 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h3>
<p>数据准备</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># demo 集成
$ php artisan poppy:migrate module.demo

# 创建数据
$ php artisan poppy:seed module.demo --class='\Demo\Database\Seeds\DemoWebappDatabaseSeeder'
$ php artisan poppy:seed module.demo --class='\Demo\Database\Seeds\DemoUserDatabaseSeeder'

# 还原数据
$ php artisan poppy:migrate:rollback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路径配置" tabindex="-1"><a class="header-anchor" href="#路径配置" aria-hidden="true">#</a> 路径配置</h3>
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
<p>项目中的操作项, 操作可分为 <code v-pre>request(请求)</code>, <code v-pre>page(页面)</code>, <code v-pre>copy(复制)</code>, <code v-pre>progress(进度)</code>, ``</p>
<h3 id="基本样式" tabindex="-1"><a class="header-anchor" href="#基本样式" aria-hidden="true">#</a> 基本样式</h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图标" tabindex="-1"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h3>
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
<p><strong>Grid 表格</strong></p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">GridTableActions</span> <span class="token keyword">extends</span> <span class="token class-name">GridBase</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">table</span><span class="token punctuation">(</span><span class="token class-name type-declaration">TablePlugin</span> <span class="token variable">$table</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 添加 Action</span>
        <span class="token variable">$table</span><span class="token operator">-></span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'handle'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'操作'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">asAction</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">GridActions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 获取单行数据</span>
            <span class="token variable">$row</span> <span class="token operator">=</span> <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">getRow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">request</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'错误'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_request'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'error'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">page</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'页面'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_form'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'detail'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'form'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'复制'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'复制自定义的内容'</span> <span class="token operator">.</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Grid 操作</strong></p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">GridLayout</span> <span class="token keyword">extends</span> <span class="token class-name">GridBase</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'布局'</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">quick</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Interactions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">page</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'快捷操作'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_form'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'detail'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'form'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">icon</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Plus'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">batch</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Interactions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">request</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'批量操作'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_request'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'success'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> request</h3>
<p>Ajax 请求</p>
<p>对服务器发起一个 ajax 请求, 并根据服务端返回内容进行前端页面的操作, 这里根据服务端的返回触发全局 Motion, 操作返回的 data 的数据作为 Motion 数据</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">request</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'成功'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_request'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'success'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> page</h3>
<p>以内部页面方式打开指定类型数据</p>
<p>使用侧边栏方式打开一个页面, 当前支持 <code v-pre>form</code>, <code v-pre>grid</code> 两种数据内容</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">page</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'页面'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_form'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'detail'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'form'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="dialog" tabindex="-1"><a class="header-anchor" href="#dialog" aria-hidden="true">#</a> dialog</h3>
<p>使用对话框的形式来打开一个页面, 当前支持 <code v-pre>form</code>, <code v-pre>grid</code> 两种数据内容</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">dialog</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'页面'</span><span class="token punctuation">,</span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'demo:api.mgr_app.grid_form'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'detail'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'form'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="copy" tabindex="-1"><a class="header-anchor" href="#copy" aria-hidden="true">#</a> copy</h3>
<p>复制自定义数据</p>
<p>复制按钮, 点击此按钮可已复制自定义的数据</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'复制'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'复制自定义的内容'</span> <span class="token operator">.</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> target</h3>
<p>在新窗口打开链接</p>
<p>新窗口打开, 打开自定义的链接地址</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">target</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Target(百度)'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'https://www.baidu.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> iframe</h3>
<p>在当前窗口打开对话框, 对话框中展示允许嵌入的 iframe</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token variable">$actions</span><span class="token operator">-></span><span class="token function">iframe</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Iframe'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'https://poppy-framework.com/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setting" tabindex="-1"><a class="header-anchor" href="#setting" aria-hidden="true">#</a> Setting</h2>
<p>设置用于支持分组的配置</p>
<h2 id="motion" tabindex="-1"><a class="header-anchor" href="#motion" aria-hidden="true">#</a> Motion</h2>
<blockquote>
<p>Motion 用于触发全局的动作, 使用后端返回内容来用于前端的不同操作</p>
</blockquote>
<p>编写: Motion 使用 <RouterLink to="/4.x/framework/resp.html">Resp</RouterLink> 返回
Motion 格式如下, 如果使用 Resp 返回, 则也可使用 kv 方式来编写 <code v-pre>motion|grid:reload;time|200</code></p>
<p>解析之后的对象如下所示</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">motion</span><span class="token operator">:</span> <span class="token string">"grid:reload"</span><span class="token punctuation">;</span>
	<span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">;</span>
	<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置用于在表单中加入操作, 在 Grid 渲染中加入操作, 批处理, 表单的快速操作</p>
<p>参数说明</p>
<p><strong>motion</strong> : 全局操作</p>
<ul>
<li><code v-pre>grid:reload</code> 加载当前请求条件下的数据</li>
<li><code v-pre>grid:reset</code> 请求搜索条件并重置到第一页</li>
<li><code v-pre>grid:filter</code> 更新请求条件</li>
<li><code v-pre>window:reload</code> 刷新当前页面</li>
</ul>
<p><strong>time</strong> : 等待时长来执行函数, 单位(ms)
<strong>path</strong> : 匹配路径
当页面中存在多个组件的时候, 组件的请求地址是不同的, 可以根据请求路径的 path 来判定是否允许更新, path 不存在时候不进行限制</p>
<p>为了项目中方便使用, 已经对 Motion 进行了封装</p>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token class-name static-context">Motion</span><span class="token operator">::</span><span class="token function">windowReload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name static-context">Motion</span><span class="token operator">::</span><span class="token function">gridFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name static-context">Motion</span><span class="token operator">::</span><span class="token function">gridReset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name static-context">Motion</span><span class="token operator">::</span><span class="token function">gridReload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>;/?;欧朋;'
欧了;[[;i;o'</p>
</div></template>


