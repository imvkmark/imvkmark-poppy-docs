<template><div><h1 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h1>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<p>对于文件目录 &amp; 网址, 我们不建议在右侧添加 <code v-pre>/</code> 作为后缀, 例如</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>URL_SITE=https://wulicode.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="phplint" tabindex="-1"><a class="header-anchor" href="#phplint" aria-hidden="true">#</a> phplint</h2>
<p><a href="https://github.com/overtrue/phplint" target="_blank" rel="noopener noreferrer">phplint<ExternalLinkIcon/></a>是一个快速检测 php 语法错误的工具,
此工具无需安装在项目中, 全局安装即可.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ composer global require overtrue/phplint -vvv
$ php artisan system:doc lint
$ phplint /path/of/code -c /framework/path/.phplint.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目优化-optimize" tabindex="-1"><a class="header-anchor" href="#项目优化-optimize" aria-hidden="true">#</a> 项目优化 optimize</h2>
<p>运行 <code v-pre>php artisan poppy:optimize</code> 保障依赖组件均已经安装</p>
<h2 id="composer-配置" tabindex="-1"><a class="header-anchor" href="#composer-配置" aria-hidden="true">#</a> composer 配置</h2>
<h3 id="开发文件不需要自动加载" tabindex="-1"><a class="header-anchor" href="#开发文件不需要自动加载" aria-hidden="true">#</a> 开发文件不需要自动加载</h3>
<ul>
<li>项目中使用 IDE Helper 生成浏览器提示文件,
此文件在正式项目下不需要进行加载</li>
<li>Clockwork 不需要加载</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>"extra" : {
    "laravel" : {
        "dont-discover" : [
            "itsgoingd/clockwork",
            "barryvdh/laravel-ide-helper",
        ]
    }
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="映射-form-需要在-composer-中加入数据" tabindex="-1"><a class="header-anchor" href="#映射-form-需要在-composer-中加入数据" aria-hidden="true">#</a> 映射 Form , 需要在 composer 中加入数据</h3>
<p>由于这里是继承的 &quot;laravelcollective/html&quot; 组件,
所以必须先禁用掉原生的自动发现</p>
<p>在 composer.json 文件中禁用自动发现</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>"extra" : {
    "laravel" : {
        "dont-discover" : [
            "laravelcollective/html"
        ]
    }
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>providers</code> 部分加入</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'providers' => [
    // ...
    Collective\Html\HtmlServiceProvider::class,
    // ...
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成自动加载类</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>composer dumpautoload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>清空缓存的数据</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php artisan poppy:optimize
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在 <code v-pre>app.php</code> 的 <code v-pre>aliases</code> 部分加入</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'aliases' => [
    // ...
    'Html' => Collective\Html\HtmlFacade::class,
    'Form' => System\Classes\Facade\FormFacade::class,
    // ...
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块配置-config-module-php" tabindex="-1"><a class="header-anchor" href="#模块配置-config-module-php" aria-hidden="true">#</a> 模块配置 (config/module.php)</h2>
<h2 id="ide-项目配置" tabindex="-1"><a class="header-anchor" href="#ide-项目配置" aria-hidden="true">#</a> IDE 项目配置</h2>
<h3 id="可以隐藏的目录" tabindex="-1"><a class="header-anchor" href="#可以隐藏的目录" aria-hidden="true">#</a> 可以隐藏的目录</h3>
<p>右键忽略掉即可, 这个是生成的文件, 不需要进行 php 索引</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>前端文件
========
public/assets/css
public/assets/font/fontawesome
public/assets/js/system_cp.js
public/assets/js/system_vendor.js
public/assets/easy-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ide-插件配置" tabindex="-1"><a class="header-anchor" href="#ide-插件配置" aria-hidden="true">#</a> IDE 插件配置</h3>
<h4 id="插件-ignore" tabindex="-1"><a class="header-anchor" href="#插件-ignore" aria-hidden="true">#</a> 插件 <a href="https://plugins.jetbrains.com/plugin/7495--ignore" target="_blank" rel="noopener noreferrer">.ignore<ExternalLinkIcon/></a></h4>
<p>可以在编辑器忽略文件显示的组件</p>
<p><a href="https://gist.github.com/imvkmark/15198641b214b35916cf54414516caf0" target="_blank" rel="noopener noreferrer">.ignore 示例文件<ExternalLinkIcon/></a></p>
<h4 id="插件-laravel-plugin" tabindex="-1"><a class="header-anchor" href="#插件-laravel-plugin" aria-hidden="true">#</a> 插件 <a href="https://plugins.jetbrains.com/plugin/7532-laravel-plugin" target="_blank" rel="noopener noreferrer">Laravel Plugin<ExternalLinkIcon/></a></h4>
<p><strong>启用 插件</strong></p>
<p>找到 <code v-pre>Preferences | Languages &amp; Frameworks | PHP | Laravel</code>, 然后开启 <code v-pre>Enable Plugin for this project</code></p>
<p><strong>配置 view 的映射</strong>
例如 <code v-pre>system</code> 模块的映射地址应该是 <code v-pre>modules/system/resources/views</code></p>
<p>这样在点击的时候才能够跳转到这个页面</p>
<p><strong>启用控制器的命名空间检测</strong></p>
<p>在 <code v-pre>Router Namespace</code> 中添加相关的命名空间, 多个使用 <code v-pre>,</code> 分隔.</p>
<h4 id="插件-php-inspection" tabindex="-1"><a class="header-anchor" href="#插件-php-inspection" aria-hidden="true">#</a> 插件 <a href="https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-" target="_blank" rel="noopener noreferrer">php inspection<ExternalLinkIcon/></a></h4>
<p>开启之后需要需要在写 PHP 的时候注意项目, <a href="https://github.com/kalessil/phpinspectionsea/tree/master/docs" target="_blank" rel="noopener noreferrer">相关的文档点击<ExternalLinkIcon/></a></p>
<h4 id="插件-string-manipulation" tabindex="-1"><a class="header-anchor" href="#插件-string-manipulation" aria-hidden="true">#</a> 插件 <a href="https://plugins.jetbrains.com/plugin/2162-string-manipulation" target="_blank" rel="noopener noreferrer">String Manipulation<ExternalLinkIcon/></a></h4>
<blockquote>
<p>提供字符的便捷操作</p>
</blockquote>
<h4 id="插件-camelcase" tabindex="-1"><a class="header-anchor" href="#插件-camelcase" aria-hidden="true">#</a> 插件 <a href="https://plugins.jetbrains.com/plugin/7160-camelcase" target="_blank" rel="noopener noreferrer">CamelCase<ExternalLinkIcon/></a></h4>
<blockquote>
<p>提供大小写转换</p>
</blockquote>
<h2 id="前端组件文档" tabindex="-1"><a class="header-anchor" href="#前端组件文档" aria-hidden="true">#</a> 前端组件文档</h2>
<h3 id="多图片-视频上传" tabindex="-1"><a class="header-anchor" href="#多图片-视频上传" aria-hidden="true">#</a> 多图片/视频上传</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{!! Form::multiThumb('images', [], $options) !!}

options    类型      默认值    备注
---------- -------- -------- --------------------------------
pam        object   null     当前用户对象, 用于上传文件的授权
type       string   image    允许传入的文件类型支持 (image:图片;video:视频;picture:音视频)
sequence   bool     false    是否支持排序
number     int      3        本表单允许上传的最大数量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php-cs-fixer" tabindex="-1"><a class="header-anchor" href="#php-cs-fixer" aria-hidden="true">#</a> PHP-CS-Fixer</h3>
<p><a href="https://github.com/FriendsOfPHP/PHP-CS-Fixer" target="_blank" rel="noopener noreferrer">PHP-CS-Fixer<ExternalLinkIcon/></a> is a tool to automatically fix PHP Coding Standards issues, We use it for Code Specification.</p>
<h3 id="测试用例完善并且通过" tabindex="-1"><a class="header-anchor" href="#测试用例完善并且通过" aria-hidden="true">#</a> 测试用例完善并且通过</h3>
<h3 id="注释完善并且通过" tabindex="-1"><a class="header-anchor" href="#注释完善并且通过" aria-hidden="true">#</a> 注释完善并且通过</h3>
<p>注释使用 <code v-pre>modules/system</code> 模块来检测</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan system:inspect class > fp.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="代码清理过" tabindex="-1"><a class="header-anchor" href="#代码清理过" aria-hidden="true">#</a> 代码清理过</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ide:clean code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="不要出现-package-标签" tabindex="-1"><a class="header-anchor" href="#不要出现-package-标签" aria-hidden="true">#</a> 不要出现 package 标签</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>@package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


