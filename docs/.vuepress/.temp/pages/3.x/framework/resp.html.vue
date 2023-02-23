<template><div><h1 id="错误码" tabindex="-1"><a class="header-anchor" href="#错误码" aria-hidden="true">#</a> 错误码</h1>
<h2 id="返回格式" tabindex="-1"><a class="header-anchor" href="#返回格式" aria-hidden="true">#</a> 返回格式</h2>
<p>Api 以 Json 格式返回: 其中代表的含义如下:</p>
<ul>
<li><code v-pre>status</code>服务器错误码, 代表服务器出现错误, <code v-pre>500</code>
代表内部查询出现问题, <code v-pre>404</code> 代表页面不存在, 等</li>
<li><code v-pre>message</code>服务返回的提示信息, 如果存在 <code v-pre>status</code> , 则代表服务报错信息,
如果是自定义的 code, 这里返回的是自定义的提示信息</li>
<li><code v-pre>data</code>返回正确的时候, <code v-pre>data</code> 中会存在附加数据, 附加数据说明放置在 api
文档中, 这里不做任何补充提示.</li>
</ul>
<p>下边是示例代码:</p>
<p><strong>有服务器错误</strong></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
	<span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Internal Server Error"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>服务器无错误</strong></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"status"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"获取用户信息成功!"</span><span class="token punctuation">,</span>
	<span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"dashou001"</span><span class="token punctuation">,</span>
		<span class="token property">"userid"</span><span class="token operator">:</span> <span class="token number">123354</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误码说明" tabindex="-1"><a class="header-anchor" href="#错误码说明" aria-hidden="true">#</a> 错误码说明</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>0   : 操作成功
1   : 操作失败
2   : 凭据超时
3   : 凭据不存在
4   : 凭据错误
5   : 请求参数错误
6   : 签名错误
7   : 无权限操作
99  : 接口内部错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持-json-web" tabindex="-1"><a class="header-anchor" href="#支持-json-web" aria-hidden="true">#</a> 支持 json/web</h2>
<p>如果是 web 页面进行使用则调用定义的正确/错误的页面进行显示.</p>
<h2 id="自定义错误码" tabindex="-1"><a class="header-anchor" href="#自定义错误码" aria-hidden="true">#</a> 自定义错误码</h2>
<p>如果需要自定义错误码, 错误码需要定义在 Action 中 错误码是 6 位的数字,
其中代表含义如下</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>100101  : 错误码拆分为 3 部分
10   : 模块
01   : Action (业务逻辑)
01   : 该业务逻辑下错误码序列号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中错误的语言描述可以使用 语言包来编写</p>
</div></template>


