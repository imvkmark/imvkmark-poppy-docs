<template><div><h1 id="支付宝支付" tabindex="-1"><a class="header-anchor" href="#支付宝支付" aria-hidden="true">#</a> 支付宝支付</h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>composer require poppy/ext-alipay
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新你的依赖包 <code v-pre>composer update</code> 或者全新安装 <code v-pre>composer install</code></p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$Aop</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AopCertClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$Aop</span><span class="token operator">-></span><span class="token function">setSignType</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'RSA2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$Aop</span><span class="token operator">-></span><span class="token function">setAppId</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'app-id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$Aop</span><span class="token operator">-></span><span class="token function">setRsaPrivateKey</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'one-line-private-key'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$Aop</span><span class="token operator">-></span><span class="token function">setEnv</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'production-or-sandbox'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$Aop</span><span class="token operator">-></span><span class="token function">setAlipayrsaPublicKey</span><span class="token punctuation">(</span><span class="token variable">$Aop</span><span class="token operator">-></span><span class="token function">getPublicKey</span><span class="token punctuation">(</span><span class="token variable">$alipayCertPath</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用getPublicKey从支付宝公钥证书中提取公钥</span>
<span class="token variable">$Aop</span><span class="token operator">-></span><span class="token function">setAppCertSN</span><span class="token punctuation">(</span><span class="token variable">$Aop</span><span class="token operator">-></span><span class="token function">getCertSN</span><span class="token punctuation">(</span><span class="token variable">$appCertPath</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用getCertSN获取证书序列号</span>
<span class="token variable">$Aop</span><span class="token operator">-></span><span class="token function">setAlipayRootCertSN</span><span class="token punctuation">(</span><span class="token variable">$Aop</span><span class="token operator">-></span><span class="token function">getRootCertSN</span><span class="token punctuation">(</span><span class="token variable">$rootCertPath</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用getRootCertSN获取支付宝根证书序列号</span>
<span class="token variable">$Aop</span><span class="token operator">-></span><span class="token function">setIsCheckAlipayPublicCert</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token variable">$Aop</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="change-log" tabindex="-1"><a class="header-anchor" href="#change-log" aria-hidden="true">#</a> Change Log</h2>
<p><strong>3.2</strong></p>
<ul>
<li>支持 composer 2.x</li>
</ul>
<p><strong>3.0</strong></p>
<ul>
<li>加入request 访问地址</li>
<li>加入单元测试</li>
<li>加入支付宝沙箱证书</li>
<li>加入两个基本使用方法</li>
<li>去除 app('files') 使用</li>
</ul>
</div></template>


