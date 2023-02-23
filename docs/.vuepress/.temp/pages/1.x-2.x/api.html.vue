<template><div><h1 id="api文档-1-0" tabindex="-1"><a class="header-anchor" href="#api文档-1-0" aria-hidden="true">#</a> Api文档 1.0</h1>
<h2 id="初始化说明" tabindex="-1"><a class="header-anchor" href="#初始化说明" aria-hidden="true">#</a> 初始化说明</h2>
<h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3>
<p>LF 使用 <code v-pre>dingo/api</code> 框架作为reset 接口的组织方式, 采用服务器验证的方式来存储数据, 即服务器首次访问的时候会首先访问 <code v-pre>/init</code> 接口, 然后从中获取到 <code v-pre>access_token</code> 作为账号认证权限来对服务器进行再次请求, 作为访问的授权来进行访问, 访问地址是 : <code v-pre>http://api.larxd.com/api</code></p>
<p>例如首次访问将会获取如下示例:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
  "code": "0000100",
  "message": "初始化成功!",
  "data": {
    "api_version": "v1",
    "api_url": "http://api.larxd.com/api"
    "api_format": "jsonp",
    "access_token": "91adcb71dc21e381dcad0611e1b7271c"
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次进行访问的时候将会传入这个值 <code v-pre>access_token</code>, 否则将不会返回任何有效数据 ### sign 生成规范</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 输入的参数
$params = [
    'app_version' => $app_version,             # app 版本号
    'device_type' => $device_type,             # 设备类型
    'device_id'   => $device_id,               # 设备ID号
    'time'        => $time,                    # app 获取到的时间戳
    'crypt_key'   => config('lemon.app_crypt_key'),    # 加密密钥(服务器约定)
];
# 将所有的参数按照 键进行字母排序, 并且转换成 Kv 字串, 以上的参数会拼接成
# app_version=1.1.0,crypt_key=,device_id=mark_zhao_Sdvwyocj,device_type=ios,time=1449816499
# 然后对这个字串进行 sha1(md5($str)) 加密
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="请求规范" tabindex="-1"><a class="header-anchor" href="#请求规范" aria-hidden="true">#</a> 请求规范</h2>
<p>获取到上边获取到的 <code v-pre>access_token</code> 之后, 每次访问的时候需要用 <code v-pre>header</code> 头的方式代入这个参数. <strong>Header 头的值是 <code v-pre>X-ACCESS-TOKEN</code></strong></p>
<p><img src="https://file.wulicode.com/mweb/2021/12/15810953770694.jpg" alt="https://file.wulicode.com/mweb/2021/12/15810953770694.jpg"></p>
<h2 id="代码返回规范" tabindex="-1"><a class="header-anchor" href="#代码返回规范" aria-hidden="true">#</a> 代码返回规范</h2>
<p>Api 返回约束: 以服务端为准, 服务端可以进行处理的, 一律服务端进行处理, 减少app的处理 代码会返回一个json字串, 任何情况下都会. 即使是服务器错误也会返回, 其中代表的含义如下 - <code v-pre>status</code>
服务器错误码, 代表服务器出现错误, <code v-pre>500</code> 代表内部查询出现问题, <code v-pre>404</code> 代表页面不存在, 等 - <code v-pre>status_text</code> 服务器出错的时候, 这里的状态码代表出错时候的返回错误详情 - <code v-pre>code</code> 识别码, 如果该代码是 7 位数字字串, 则代表服务器请求正常, 这里代表的是 api 约定的错误或者正确类型, 则此时不会出现 <code v-pre>status_code</code> 自定义代码 如下分解 <code v-pre>000</code> <code v-pre>00</code> <code v-pre>00</code>, 前三位代表 模块区分 中间两位代表 方法/动作, 最后两位代表错误码, 如果是 <code v-pre>00</code> 代表操作成功. - <code v-pre>message</code> 服务返回的提示信息, 如果存在 <code v-pre>status_code</code> , 则代表服务报错信息, 如果是自定义的code, 这里返回的是自定义的提示信息 - <code v-pre>data</code> 返回正确的时候, <code v-pre>data</code> 中会存在附加数据, 附加数据说明放置在api 文档中, 这里不做任何补充提示.</p>
<p>下边是示例代码: <strong>有服务器错误</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
  "readyState": 4,
  // ...
  "status": 500,
  "statusText": "Internal Server Error"
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>服务器无错误</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
  "code": "0010200",
  "message": "获取用户信息成功!",
  "data": {
    "username": "dashou001",
    "userid": 123354,
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-文档生成-测试" tabindex="-1"><a class="header-anchor" href="#api-文档生成-测试" aria-hidden="true">#</a> Api 文档生成/测试</h2>
<h3 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h3>
<p>访问 <a href="http://apidocjs.com/" target="_blank" rel="noopener noreferrer">http://apidocjs.com/<ExternalLinkIcon/></a> 来获取使用说明</p>
<h3 id="安装并生成文档" tabindex="-1"><a class="header-anchor" href="#安装并生成文档" aria-hidden="true">#</a> 安装并生成文档</h3>
<p><strong>安装nodejs</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ apt-get install nodejs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>安装node</strong> nodejs 访问地址 https://nodejs.org/en/, 具体版本号访问这个地址获取</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ wget http://nodejs.org/dist/vx.xx.xxx/node-*.tar.gz
$ tar zxvf node-*.tar.gz
$ ./configure
$ make &amp;&amp; make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="http://npm.taobao.org/" target="_blank" rel="noopener noreferrer">淘宝 npm 镜像<ExternalLinkIcon/></a></strong> 安装淘宝镜像, 使用淘宝镜像访问 node 库, 访问速度会快一些</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ npm install -g cnpm --registry=https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>全局安装</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ cnpm install apidoc -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>生成文档</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ apidoc -i app/Http/Controllers/Api/ -o public/docs/api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="访问api-文档" tabindex="-1"><a class="header-anchor" href="#访问api-文档" aria-hidden="true">#</a> 访问Api 文档</h3>
<p>使用浏览器打开 <code v-pre>~/public/docs/api/index.html</code> 在测试文档的右侧打开此文档</p>
<p><img src="https://file.wulicode.com/mweb/2021/12/15810953973022.jpg" alt="https://file.wulicode.com/mweb/2021/12/15810953973022.jpg"></p>
<ul>
<li>set AT : 设置 AccessToken</li>
<li>clear AT : 清空 AccessToken</li>
</ul>
<h3 id="使用-api-文档做测试" tabindex="-1"><a class="header-anchor" href="#使用-api-文档做测试" aria-hidden="true">#</a> 使用 api 文档做测试</h3>
<p><strong>接口测试访问地址</strong> http://www.larxd.com/dev_api/auto <strong>访问接口的位置</strong></p>
<p><img src="https://file.wulicode.com/mweb/2021/12/15810954046982.jpg" alt="https://file.wulicode.com/mweb/2021/12/15810954046982.jpg"></p>
<p>因为请求的时候需要设置 <code v-pre>access_token</code> 的值, 所以每次请求前必须保证初始化时候 <code v-pre>X-ACCESS-TOKEN</code> 的值是存在的, 所以必须设置下token 值</p>
<h2 id="api-文件写法" tabindex="-1"><a class="header-anchor" href="#api-文件写法" aria-hidden="true">#</a> Api 文件写法</h2>
<h3 id="路由写法" tabindex="-1"><a class="header-anchor" href="#路由写法" aria-hidden="true">#</a> 路由写法</h3>
<p>路由放置在 <code v-pre>app\Http\Routes\api.php</code> 文件中, 写法遵循 <code v-pre>dingo/api</code> 写法. 另外还有几项约定 <strong>版本</strong> 版本使用 v 开头, 数字结尾, 类似于 v1,v2,v3, 不允许出现小数点 <strong>命名</strong> api 命名采用 <code v-pre>api_</code> 作为前缀, 后边跟控制器的小写, 例如 <code v-pre>HomeController</code> 的名称是 <code v-pre>api_home</code>, 再后边则是方法名, 为了体现是接口调用, 接口中的方法采用 <code v-pre>getXxxx</code>, <code v-pre>postXxxx</code> 来表明这是一个 <code v-pre>post</code> 请求或者是 <code v-pre>get</code> 请求</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$api = app('api.router');
$api->version(['v1'], function ($api) {
    // init
    $api->get('init', [
        'as'   => 'api_home.init',
        'uses' => 'App\Http\Controllers\Api\Front\HomeController@getInit'
    ]);

    // account
    $api->post('account/edit', [
        'as'   => 'api_account.edit',
        'uses' => 'App\Http\Controllers\Api\Front\AccountController@postEdit'
    ]);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h3>
<p>返回采用 <code v-pre>api_end($trans, $append=null)</code> helper 函数来调用返回, 第一个传值调用的是对应的状态码说明, 第二个调用的是附加数据. 如果没有特殊提示返回 可以传值 <code v-pre>success</code>, <code v-pre>error</code>, 则默认返回 <code v-pre>api_account.php</code> 语言包中的 <code v-pre>request_success</code> 和 <code v-pre>request_error</code> 两个默认值. 如果传值使用 helper 函数 <code v-pre>trans($key)</code> 来调用, 因为可以用 Laravel Plugin ( phpstorm 的 Laravel ) 实现对语言包文件的跟踪. <strong>示例:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getInit</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    <span class="token variable">$device_id</span>   <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-></span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'device_id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">// 设备序列号    </span>
    <span class="token variable">$time</span>        <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-></span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'time'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token variable">$sign</span>        <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-></span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'sign'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token variable">$device_type</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-></span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'device_type'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token variable">$app_version</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-></span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'app_version'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token comment">// 验证这些值是否符合指定规则    </span>
    <span class="token variable">$validator</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Validator</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-></span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'device_id'</span>   <span class="token operator">=></span> <span class="token string single-quoted-string">'required'</span><span class="token punctuation">,</span>        
        <span class="token string single-quoted-string">'time'</span>        <span class="token operator">=></span> <span class="token string single-quoted-string">'required'</span><span class="token punctuation">,</span>        
        <span class="token string single-quoted-string">'sign'</span>        <span class="token operator">=></span> <span class="token string single-quoted-string">'required'</span><span class="token punctuation">,</span>        
        <span class="token string single-quoted-string">'device_type'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'required'</span><span class="token punctuation">,</span>        
        <span class="token string single-quoted-string">'app_version'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'required'</span><span class="token punctuation">,</span>    
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$validator</span><span class="token operator">-></span><span class="token function">fails</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>        
        <span class="token keyword">return</span> <span class="token function">api_end</span><span class="token punctuation">(</span><span class="token variable">$validator</span><span class="token operator">-></span><span class="token function">errors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>    
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$accessToken</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>        
        <span class="token keyword">return</span> <span class="token function">api_end</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Api</span><span class="token operator">::</span><span class="token function">getError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>   
    <span class="token variable">$apiInfo</span> <span class="token operator">=</span> <span class="token punctuation">[</span>        
        <span class="token string single-quoted-string">'api_version'</span>  <span class="token operator">=></span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'api.version'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>        
        <span class="token string single-quoted-string">'api_domain'</span>   <span class="token operator">=></span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'api.domain'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>        
        <span class="token string single-quoted-string">'api_format'</span>   <span class="token operator">=></span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'api.defaultFormat'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>        
        <span class="token string single-quoted-string">'access_token'</span> <span class="token operator">=></span> <span class="token variable">$accessToken</span><span class="token punctuation">,</span>    
    <span class="token punctuation">]</span><span class="token punctuation">;</span>    
    <span class="token keyword">return</span> <span class="token function">api_end</span><span class="token punctuation">(</span><span class="token function">trans</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'api_front.init_success'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$apiInfo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本说明" tabindex="-1"><a class="header-anchor" href="#版本说明" aria-hidden="true">#</a> 版本说明</h2>
<ul>
<li>2015-12-12 : 加入淘宝镜像安装方法</li>
<li>2015-12-11 : 更改返回错误码</li>
</ul>
</div></template>


