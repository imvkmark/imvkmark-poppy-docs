<template><div><h1 id="应用管理" tabindex="-1"><a class="header-anchor" href="#应用管理" aria-hidden="true">#</a> 应用管理</h1>
<h2 id="应用流程" tabindex="-1"><a class="header-anchor" href="#应用流程" aria-hidden="true">#</a> 应用流程</h2>
<p><img src="https://file.wulicode.com/note/2023/02-11/09-24-55889.png" alt=""></p>
<p>下发的应用 ID 和 密钥</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>appid     : 15
appsecret : 8987f93fc65c655cea50d83cd8b02785
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>原始参数</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
    "id": 5,
    "note": "单元测试应用",
    "title": "Testing 着朝",
    "file": "不参与签名",
    "_myname": "不参与签名",
    "images": [
        "https://test-oss.iliexiang.com/_res/images/01.jpg",
        "https://test-oss.iliexiang.com/_res/images/02.jpg"
    ]
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对数据追加  appid 和 timestamp</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
    "id": 5,
    "note": "单元测试应用",
    "title": "Testing 着朝",
    "file": "不参与签名",
    "_myname": "不参与签名",
    "images": [
        "https://test-oss.iliexiang.com/_res/images/01.jpg",
        "https://test-oss.iliexiang.com/_res/images/02.jpg"
    ],
    "appid": 15,
    "timestamp": 1676077738
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于下划线开始的参数和部分特殊参数不进行验签</p>
<p>特殊的参数有 <code v-pre>sign</code>, <code v-pre>image</code>, <code v-pre>file</code>, <code v-pre>appid</code></p>
<p>对于特殊的参数进行清理</p>
<p>清理后的参数</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
    "id": "5",
    "note": "单元测试应用",
    "title": "Testing 着朝",
    "images": [
        "https://test-oss.iliexiang.com/_res/images/01.jpg",
        "https://test-oss.iliexiang.com/_res/images/02.jpg"
    ],
    "timestamp": "1676077738"
}  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于清理后的参数根据一级 key 进行字母排序</p>
<p>排序后的结果</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
    "id": "5",
    "images": [
        "https://test-oss.iliexiang.com/_res/images/01.jpg",
        "https://test-oss.iliexiang.com/_res/images/02.jpg"
    ],
    "note": "单元测试应用",
    "timestamp": "1676077738",
    "title": "Testing 着朝"
}  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对数据进行转 kv 操作</p>
<p>转换后的结果</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>id=5,images=["https://test-oss.iliexiang.com/_res/images/01.jpg","https://test-oss.iliexiang.com/_res/images/02.jpg"],note=单元测试应用,timestamp=1676077738,title=Testing 着朝
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对 kv 后的数据进行和 secret 的 md5 运算</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$sign</span> <span class="token operator">=</span> <span class="token function">md5</span><span class="token punctuation">(</span><span class="token function">md5</span><span class="token punctuation">(</span><span class="token variable">$kvStr</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token variable">$secret</span><span class="token punctuation">)</span>
<span class="token comment">// 1dcdd8d2dffbe1ebaa9448247b18eada</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


