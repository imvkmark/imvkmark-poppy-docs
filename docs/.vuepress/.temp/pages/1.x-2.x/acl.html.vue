<template><div><h1 id="开发者模式-acl" tabindex="-1"><a class="header-anchor" href="#开发者模式-acl" aria-hidden="true">#</a> 开发者模式/ACL</h1>
<h2 id="开启访问者模式" tabindex="-1"><a class="header-anchor" href="#开启访问者模式" aria-hidden="true">#</a> 开启访问者模式</h2>
<p>在 <code v-pre>.env</code> 文件中添加或者启用开发者访问模式, 否则无法对账号进行管理</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># lemon enable develop
LM_EN_DEVELOP=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>访问地址:</p>
<ul>
<li>访问地址 http://www.lartest.com/dev</li>
<li>添加访问账号 : http://www.lartest.com/dsk_cp</li>
<li>默认的访问账号密码是 : develop/develop</li>
</ul>
<p><img src="https://file.wulicode.com/mweb/2021/12/15810952404028.jpg" alt="https://file.wulicode.com/mweb/2021/12/15810952404028.jpg"></p>
<h2 id="开发者工具" tabindex="-1"><a class="header-anchor" href="#开发者工具" aria-hidden="true">#</a> 开发者工具</h2>
<p>访问 : http://www.lartest.com/dev_home/cp ### 访问入口的定义 访问总入口放置在: <code v-pre>app/Lemon/Suit/Acl/develop.php</code> 结构说明:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># name key 用作菜单时候的ID 值
'api'     => [
    'title' => '接口测试',    # 标题
    'param' => '',           # 附加参数, 使用 a=b形式进行添加 会组成 dev_api?a=b 访问地址
    'group' => [             # 分组, 用于接口的分组管理
        'dev_api',
    ],
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问单文件的入口在: <code v-pre>app/Lemon/Suit/Acl/Develop</code> 下, 我们看下 <code v-pre>dev_api.php</code></p>
<p>文件示例:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'title'     => '接口测试',    # 本组的标题
'route'     => 'dev_api',    # 路由名称
'operation' => [
    'auto' => [              # 操作, 会组成 dev_api/auto 的访问URL
        'title' => '自动',    # 本路由的命名,
        'menu'  => true,     # 是否是菜单项目(预留)
    ],
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://file.wulicode.com/mweb/2021/12/15810952501288.jpg" alt="https://file.wulicode.com/mweb/2021/12/15810952501288.jpg"></p>
<h2 id="开发者插件" tabindex="-1"><a class="header-anchor" href="#开发者插件" aria-hidden="true">#</a> 开发者插件</h2>
<h3 id="命名方式" tabindex="-1"><a class="header-anchor" href="#命名方式" aria-hidden="true">#</a> 命名方式</h3>
<p><code v-pre>lm_</code> 代表 Lemon Framework <code v-pre>dev</code> 代表开发</p>
</div></template>


