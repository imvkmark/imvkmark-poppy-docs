<template><div><h1 id="国际化" tabindex="-1"><a class="header-anchor" href="#国际化" aria-hidden="true">#</a> 国际化</h1>
<h2 id="位置" tabindex="-1"><a class="header-anchor" href="#位置" aria-hidden="true">#</a> 位置</h2>
<p>公共语言位置: <code v-pre>resource/lang/zh/</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>validator.php    # 验证文件, 和框架匹配的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>模块语言位置: <code v-pre>modules/{module}/resources/lang</code> 文件夹中</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>action.php     # 存放业务逻辑
seo.php        # Seo 标题优化文件
util.php       # 其他相关的文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="action-php" tabindex="-1"><a class="header-anchor" href="#action-php" aria-hidden="true">#</a> action.php</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/* 验证码
 * ---------------------------------------- */
'captcha' => [   // Action
    'send_passport_format_error' => '无法发送验证码, 格式不正确',
    'account_miss'               => '指定账号不存在, 无法发送',
    'account_exists'             => '指定手机号已经存在, 不能绑定, 请更换',
    'account_no_password'        => '账户未设置密码',
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Action 的文件的使用</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>trans('py-system::action.captcha.account_no_password'),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="seo-php" tabindex="-1"><a class="header-anchor" href="#seo-php" aria-hidden="true">#</a> seo.php</h2>
<p>这里根据路由的名称来返回 Seo 的标题还有描述</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>return [
    'web_layout_index'             => '页面布局',
    'web_res_mix'                  => '资源调用',
    'web_res_translate'            => [
        '资源翻译',
        '通过资源的翻译来返回响应的 json 信息',
    ],
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


