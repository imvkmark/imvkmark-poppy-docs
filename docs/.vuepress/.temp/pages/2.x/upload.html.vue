<template><div><h1 id="图片上传" tabindex="-1"><a class="header-anchor" href="#图片上传" aria-hidden="true">#</a> 图片上传</h1>
<h2 id="图片上传请求" tabindex="-1"><a class="header-anchor" href="#图片上传请求" aria-hidden="true">#</a> 图片上传请求</h2>
<ul>
<li>上传地址：</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http://img2.larxd.com/upload_image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>需要传值的字段</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>图片的字段 ： image_file
返回的类型 ： type （暂不启用）
上传的key ： upload_token
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>返回的参数</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>status      : success/error
url         : 成功返回
destination : 成功返回
msg         : 返回正确或者错误的信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


