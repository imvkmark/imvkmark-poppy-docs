<template><div><h1 id="扩展开发" tabindex="-1"><a class="header-anchor" href="#扩展开发" aria-hidden="true">#</a> 扩展开发</h1>
<h2 id="composer-文件生成" tabindex="-1"><a class="header-anchor" href="#composer-文件生成" aria-hidden="true">#</a> Composer 文件生成</h2>
<p>composer.json 文件解释</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
    # 包名称, 可以自定义 package 名称, 蛇形写法
    "name": "poppy/ext-{package}",
    # 描述, 必须是英文
    "description": "Poppy frontEnd support",
    "type": "poppy-extension",
    # 作者
    "authors": [
        {
            "name": "Mark Zhao",
            "email": "zhaody901@126.com"
        }
    ],
    # 依赖包 不依赖则留空
    "require": {
        "php": ">=7.0.0",
        # 加载第三方包
        "sabberworm/php-css-parser": "^8.1"
    },
    # 自动加载命名空间
    # 命名空间 {Package} 应当和 name 相匹配
    "autoload": {
        "psr-4": {
            "Poppy\\Extension\\{Package}\\": "src/"
        }
    },
    "config": {
        "preferred-install": "dist"
    },
    "minimum-stability": "dev"
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根目录文件生成方式 - 初始化 第一步: 创建 创建: 如果没有
ext-{package}/composer.json 中的时候</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ composer init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>composer 文件加载</p>
<p>生成 autoload 文件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ composer update -vvv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>清空进行 poppy 优化,重置缓存, 加载当前包(From notadd)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan poppy:optimize
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至此命名空间可以自动加载成功</p>
<h2 id="技巧" tabindex="-1"><a class="header-anchor" href="#技巧" aria-hidden="true">#</a> 技巧</h2>
<ol>
<li>如何验证 trans 文档是否正确</li>
</ol>
<ul>
<li>使用 phpstorm 搜索出所有所有 <code v-pre>trans('</code> 匹配的文档</li>
<li>使用 <code v-pre>open in window</code>打开</li>
<li>邮件根菜单选择 <code v-pre>Export to text file</code> 选择位置进行保存</li>
<li>运行命令 <code v-pre>php artisan py-core:inspect trans --export=/Users/duoli/Desktop/report.txt</code></li>
</ul>
</div></template>


