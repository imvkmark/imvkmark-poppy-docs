<template><div><h1 id="env-环境配置" tabindex="-1"><a class="header-anchor" href="#env-环境配置" aria-hidden="true">#</a> Env 环境配置</h1>
<h2 id="基础环境" tabindex="-1"><a class="header-anchor" href="#基础环境" aria-hidden="true">#</a> 基础环境</h2>
<h3 id="项目环境" tabindex="-1"><a class="header-anchor" href="#项目环境" aria-hidden="true">#</a> 项目环境</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>APP_ENV=local      # 上线后为 production
APP_DEBUG=true     # 线上关闭debug
APP_KEY=1hSm25JlcusKQGdShlbnZlgVaCb3DetR    # 设置加密密钥
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置数据库" tabindex="-1"><a class="header-anchor" href="#配置数据库" aria-hidden="true">#</a> 配置数据库</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DB_HOST=192.168.1.134
DB_DATABASE=ixdcw_dev
DB_USERNAME=root
DB_PASSWORD=xddlxdcw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缓存-session-队列" tabindex="-1"><a class="header-anchor" href="#缓存-session-队列" aria-hidden="true">#</a> 缓存 , session, 队列</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_DRIVER=database
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置邮件" tabindex="-1"><a class="header-anchor" href="#配置邮件" aria-hidden="true">#</a> 配置邮件</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>MAIL_DRIVER=smtp
MAIL_HOST=smtp.exmail.qq.com
MAIL_PORT=465
MAIL_ENCRYPTION=ssl
MAIL_USERNAME=10000@ixdcw.com
MAIL_PASSWORD=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三方数据" tabindex="-1"><a class="header-anchor" href="#第三方数据" aria-hidden="true">#</a> 第三方数据</h2>
<h3 id="图片上传" tabindex="-1"><a class="header-anchor" href="#图片上传" aria-hidden="true">#</a> 图片上传</h3>
<p>图片上传采用 l5-upload-client 组件, 这个组件形成了客户端 + 远程的方式进行上传, 几个参数配置及解释如下 如果本机作为客户端机器来访问, 需要配置</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 是否启用远程上传
L5_UPLOAD_ENABLE=true
# 图片配置的key
L5_UPLOAD_CLIENT_KEY=3302300000263176
L5_UPLOAD_CLIENT_SECRET=12345678901234567890
# 上传图片的地址
L5_UPLOAD_IMAGE_URL=http://img2.ixdcw.com/upload_image
# 获取token值的地址
L5_UPLOAD_TOKEN_URL=http://img2.ixdcw.com/upload_token
# 替换的返回地址
LEMON_RETURN_URL=http://img2.ixdcw.com/thumber/config
# 回调地址, 跨域等问题的解决
LEMON_CALLBACK_URL=http://www.ixdcw.com/upload_return
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api-配置" tabindex="-1"><a class="header-anchor" href="#api-配置" aria-hidden="true">#</a> API 配置</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>API_PREFIX=api
API_DEFAULT_FORMAT=json
API_TIME_EXPIRE=720  # 30days
API_TIME_OFFSET=1800
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置支付宝支付" tabindex="-1"><a class="header-anchor" href="#配置支付宝支付" aria-hidden="true">#</a> 配置支付宝支付</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 支付宝的key配置， 使用 l5-alipay plugin
L5_ALIPAY_SELL_ID=xundu0002@163.com
L5_ALIPAY_PARTNER_ID=2088801005396460
L5_ALIPAY_DIRECT_PAY_KEY=1uzayyzmkzl4tjys2x8af3yzwr583rm8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置融云" tabindex="-1"><a class="header-anchor" href="#配置融云" aria-hidden="true">#</a> 配置融云</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>RONGYUN_APP_KEY=y745wfm84eefv
RONGYUN_APP_SECRET=3bofyzNNpQ99
RONGYUN_APP_FORMAT=json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置微信支付" tabindex="-1"><a class="header-anchor" href="#配置微信支付" aria-hidden="true">#</a> 配置微信支付</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 微信的key
WX_APP_ID=wx3454678d1fe5743f
WX_MCH_ID=1265409901
WX_KEY=346d3a41f29b2e0106c6266c37a8ce94
WX_APP_SECRET=01c6d59a3f9024db6336662ac95c8e74
WX_CURL_PROXY_HOST=0.0.0.0
WX_CURL_PROXY_PORT=0
WX_REPORT_LEVENL=1
WX_NOTIFY_URLL=finance/weixin_notify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-chinapay-支付" tabindex="-1"><a class="header-anchor" href="#配置-chinapay-支付" aria-hidden="true">#</a> 配置 chinapay 支付</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>L5_CHINAPAY_ENV=test    # production 代替线上环境
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="友盟的-key" tabindex="-1"><a class="header-anchor" href="#友盟的-key" aria-hidden="true">#</a> 友盟的 key</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>UM_ANDROID_APP_KEY=55114237******000a33
UM_ANDROID_MASTER_SECRET=yfejij3y7i6******7prrwnllnhz8
UM_IOS_APP_KEY=557e776b67******000a89
UM_IOS_MASTER_SECRET=klsghik55******0hu0fdfkjvev1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


