<template><div><h1 id="wip-laravel-mix" tabindex="-1"><a class="header-anchor" href="#wip-laravel-mix" aria-hidden="true">#</a> [WIP] Laravel-Mix</h1>
<p>系统后台集成 layui 作为后台 UI 界面, 元素的使用详见 www.layui.com</p>
<h2 id="前台页面开发" tabindex="-1"><a class="header-anchor" href="#前台页面开发" aria-hidden="true">#</a> 前台页面开发</h2>
<p>前台页面依赖于 laravel-mix 来进行页面的开发.
下面会对以下的几个部分进行深入解析,
首先,我们先看下如何进行页面的布局和显示 常用文档 : <a href="https://laravel-china.org/docs/laravel/5.5/mix/1307" target="_blank" rel="noopener noreferrer">资源任务编译器 Laravel Mix<ExternalLinkIcon/></a></p>
<h3 id="文件的位置" tabindex="-1"><a class="header-anchor" href="#文件的位置" aria-hidden="true">#</a> 文件的位置</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># sass 源文件的位置, 使用的样式文件是 web.scss
~/resources/assets/scss/

# 页面资源放置位置
~/module/resources/images

# 监听文件位置, 这里使用的组件是 laravel-mix , 详细文档查看 : https://github.com/JeffreyWay/laravel-mix
~/webpack.mix.js

# 生成 css 的位置
~/public/assets/css/

# 图片的位置
~/public/modules/{user|system|web}/images/

# 访问地址, 这里 {page} 代表需要布局的页面的名称
# 例如 : http://dev.play.com/develop/l/layout.m.homepage
http://{domain}/develop/l/{page}

# 页面命名, 页面命名为 `{page}.blade.php`, 这里支持多层文件夹
~/resources/views
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何运行" tabindex="-1"><a class="header-anchor" href="#如何运行" aria-hidden="true">#</a> 如何运行</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 安装
$ npm install

# 开始监听 scss, 写的 css
$ npm run watch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack-mix-js-的配置" tabindex="-1"><a class="header-anchor" href="#webpack-mix-js-的配置" aria-hidden="true">#</a> webpack.mix.js 的配置</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
mix
   .browserSync({
       // 这里替换地址
       proxy : 'http://dev.{domain}.com/',
       files : [
           "public/resources/js/**/*.js",
           "public/resources/css/*.css",
           "modules/**/resources/views/**/*.blade.php",
           "modules/**/resources/mixes/**/*.js",
           "modules/**/resources/js/**/*.js"
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
           'modules/system/resources/libs/jquery/2.2.4/jquery.min.js',
           'modules/system/resources/libs/jquery/form/jquery.form.js',
           'modules/system/resources/libs/jquery/toastr/jquery.toastr.js',
           'modules/system/resources/libs/jquery/pjax/jquery.pjax.js',
           'modules/system/resources/libs/jquery/poshytip/jquery.poshytip.js',
           'modules/system/resources/libs/jquery/validation/jquery.validation.js',
           'modules/system/resources/libs/jquery/data-tables/jquery.data-tables.js',
           'modules/system/resources/libs/jquery/tokenize2/jquery.tokenize2.js',
           'modules/system/resources/libs/jquery/spinner/jquery.spinner.js',
           'modules/system/resources/libs/waves/waves.min.js',
           'modules/system/resources/libs/vue/vue.min.js',
           'modules/system/resources/libs/underscore/underscore.js',
           // hash, 加密使用 @ develop
           'modules/system/resources/libs/jshash/md5.min.js',
           'modules/system/resources/libs/jshash/sha1.min.js',
           // 粘贴板
           'modules/system/resources/libs/clipboard/clipboard.min.js',
           // 编辑器
           'modules/system/resources/libs/simditor/module.js',
           'modules/system/resources/libs/simditor/hotkeys.js',
           'modules/system/resources/libs/simditor/uploader.js',
           'modules/system/resources/libs/simditor/simditor.js',
           // 鼠标滑过提示
         'modules/system/resources/libs/popper.js/popper.min.js',
         'modules/system/resources/libs/bootstrap/js/util.js',
         'modules/system/resources/libs/bootstrap/js/tooltip.js',
           // 图片轮询显示
           'modules/system/resources/libs/jquery/fancybox/jquery.fancybox.min.js',
     ],
     'public/assets/js/system_vendor.js'
   )
   .combine([
           // editor
           'modules/system/resources/libs/ace/ace.js',
           'modules/system/resources/libs/jquery/backstretch/jquery.backstretch.min.js',
           'modules/system/resources/libs/poppy/util.js',
           'modules/system/resources/libs/poppy/cp.js',
           'modules/system/resources/libs/poppy/system/cp.js'
     ],
     'public/assets/js/system_cp.js'
   )
   /* system css
    * ---------------------------------------- */
   .sass(
     'modules/system/resources/scss/system.scss',
     'public/assets/css/system.css'
   )
   .copyDirectory('modules/system/resources/libs/layui', 'public/assets/layui')
   .copyDirectory('modules/system/resources/libs/easy-web', 'public/assets/easy-web')
   .copyDirectory('modules/system/resources/images/libs', 'public/assets/images/libs')
   .copyDirectory('modules/system/resources/images/system', 'public/assets/images/default')
   .copyDirectory('modules/system/resources/fonts/fontawesome', 'public/assets/font/fontawesome')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


