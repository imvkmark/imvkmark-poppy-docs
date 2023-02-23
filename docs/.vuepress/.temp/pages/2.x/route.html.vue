<template><div><h1 id="路由-控制器" tabindex="-1"><a class="header-anchor" href="#路由-控制器" aria-hidden="true">#</a> 路由 / 控制器</h1>
<h2 id="加载机制" tabindex="-1"><a class="header-anchor" href="#加载机制" aria-hidden="true">#</a> 加载机制</h2>
<h3 id="加载流程图" tabindex="-1"><a class="header-anchor" href="#加载流程图" aria-hidden="true">#</a> 加载流程图</h3>
<p><img src="https://file.wulicode.com/mweb/2021/12/15810951194457.jpg" alt="https://file.wulicode.com/mweb/2021/12/15810951194457.jpg"></p>
<h3 id="分组模式" tabindex="-1"><a class="header-anchor" href="#分组模式" aria-hidden="true">#</a> 分组模式</h3>
<table>
<thead>
<tr>
<th>文件名</th>
<th>前缀</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>front.php</td>
<td>front_</td>
<td>网站前台</td>
</tr>
<tr>
<td>desktop.php</td>
<td>dsk_</td>
<td>网站后台</td>
</tr>
<tr>
<td>api.php</td>
<td>api_</td>
<td>app /接口部分</td>
</tr>
<tr>
<td>develop.php</td>
<td>dev_</td>
<td>开发者平台</td>
</tr>
<tr>
<td>wap.php</td>
<td>wap_</td>
<td>wap 端</td>
</tr>
<tr>
<td>support.php</td>
<td>support_</td>
<td>公用的支持类函数</td>
</tr>
</tbody>
</table>
<h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2>
<h3 id="路由位置" tabindex="-1"><a class="header-anchor" href="#路由位置" aria-hidden="true">#</a> 路由位置</h3>
<p><code v-pre>~/app/Http/routes.php</code></p>
<h3 id="路由文件名称" tabindex="-1"><a class="header-anchor" href="#路由文件名称" aria-hidden="true">#</a> 路由文件名称</h3>
<p><code v-pre>routes.php</code> 是框架加载路由的入口文件</p>
<h3 id="子路由位置" tabindex="-1"><a class="header-anchor" href="#子路由位置" aria-hidden="true">#</a> 子路由位置</h3>
<p>目录 ~/app/Http/Routes/</p>
<h3 id="路由命名规则" tabindex="-1"><a class="header-anchor" href="#路由命名规则" aria-hidden="true">#</a> 路由命名规则</h3>
<p>路由命名的基本规则是 <code v-pre>前缀</code> + <code v-pre>控制器蛇形写法</code> + <code v-pre>.</code> + <code v-pre>方法名的蛇形写法</code> 例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Route::group([
    'namespace' => 'Front',
], function () {
    # 这里的路由命名是 front_test.show  front_ + test + . + show
    Route::controller('test', 'TestController', [
        # 方法名          # 路由的名称
        'getShow'         => 'front_test.show',
    ]);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h2>
<h3 id="控制器定义" tabindex="-1"><a class="header-anchor" href="#控制器定义" aria-hidden="true">#</a> 控制器定义</h3>
<ul>
<li>控制器位置位于 <code v-pre>～/app/Http/Controllers/</code> 目录下</li>
<li>控制器命名采用分组模式， 首字母大写</li>
<li>路由名称和控制器名称匹配</li>
</ul>
</div></template>


