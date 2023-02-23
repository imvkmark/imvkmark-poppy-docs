<template><div><h1 id="sample-创建后台访问模块" tabindex="-1"><a class="header-anchor" href="#sample-创建后台访问模块" aria-hidden="true">#</a> sample - 创建后台访问模块</h1>
<h2 id="创建模型" tabindex="-1"><a class="header-anchor" href="#创建模型" aria-hidden="true">#</a> 创建模型</h2>
<p>在 <code v-pre>~/app/Models/</code> 下创建模型类 - 继承Eloquent类，类名和表明相同并且遵循驼峰命名法，按照表名的格式命名 - 需要写表名<code v-pre>$table</code>,主键<code v-pre>$primaryKey</code>和填充字段数组<code v-pre>$fillable</code>(三者都是<code v-pre>protected</code>类型)</p>
<h2 id="完成字段映射" tabindex="-1"><a class="header-anchor" href="#完成字段映射" aria-hidden="true">#</a> 完成字段映射</h2>
<p>参见字段映射文件</p>
<h2 id="生成缓存" tabindex="-1"><a class="header-anchor" href="#生成缓存" aria-hidden="true">#</a> 生成缓存</h2>
<h2 id="创建控制器" tabindex="-1"><a class="header-anchor" href="#创建控制器" aria-hidden="true">#</a> 创建控制器</h2>
<p>在 <code v-pre>~/app/Http/Controllers/</code> 相应app模块分组(<code v-pre>Desktop</code>,<code v-pre>Front</code>等) 下创建控制器类</p>
<ul>
<li>遵循命名空间规则</li>
<li>类名遵循驼峰命名法,根据表名+Controller命名 如：表名为base_banword ,控制器名BaseBanwordController</li>
<li>方法名遵循驼峰命名法，根据提交方式前面加get或post</li>
<li>分配到模板用 <code v-pre>view()</code> 函数，返回值用<code v-pre>return $this-&gt;end()</code>来返回信息</li>
</ul>
<h2 id="路由定义" tabindex="-1"><a class="header-anchor" href="#路由定义" aria-hidden="true">#</a> 路由定义</h2>
<p>在 <code v-pre>~/app/Http/Routes/</code> 分组对应文件 增加路由定义</p>
<p>文件 <code v-pre>desktop.php</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Route::controller('dsk_app_version', 'AppVersionController', [    'getIndex'    => 'dsk_app_version.index',    'getCreate'   => 'dsk_app_version.create',    ...    'postDestroy' => 'dsk_app_version.destroy',]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="加入菜单组" tabindex="-1"><a class="header-anchor" href="#加入菜单组" aria-hidden="true">#</a> 加入菜单组</h2>
<p>在 <code v-pre>~/app/Lemon/Suit/Acl</code> 相应app模块分组下创建菜单组文件</p>
<ul>
<li>文件名根据路由命名 <code v-pre>dsk_app_version.php</code> 例如:</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>return [    'title'     => 'App版本管理',    'route'     => 'dsk_app_version',    'operation' => [        'index' => [            'title' => '版本管理',            'menu'  => true,        ],    ]];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code v-pre>~/app/Lemon/Suit/Acl</code> 下的相应分组文件里加入菜单代码 例如:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'app' => [    'title'  => 'App 管理',    'param'  => '',    'group' => [        'dsk_app_version',    ],],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建模板-显示数据" tabindex="-1"><a class="header-anchor" href="#创建模板-显示数据" aria-hidden="true">#</a> 创建模板, 显示数据</h2>
<p>在 <code v-pre>~/resources/views/app</code>相应分组 / 下创建模型文件夹， - 模型文件夹和表名相同 - 模板文件命名 功能名.blade.php - 模板使用 Laravel 的 <code v-pre>blade</code> 语法</p>
</div></template>


