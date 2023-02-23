<template><div><h1 id="系统" tabindex="-1"><a class="header-anchor" href="#系统" aria-hidden="true">#</a> 系统</h1>
<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2>
<h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 项目初始化
$ php artisan py-system:install

# 用户部分
$ php artisan py-system:user {slug}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h2>
<p>本系统基于角色的权限访问控制（Role-Based Access Control）</p>
<h3 id="用户类型" tabindex="-1"><a class="header-anchor" href="#用户类型" aria-hidden="true">#</a> 用户类型</h3>
<p>根据使用分为三种用户类型(默认)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>user            # 前台用户
develop         # 开发者用户
backend         # 后台用户
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于用户的类型区分我们使用 Header 来进行区分, Header 的名称是 <code v-pre>x-type</code> 来进行区分, 区分的层级为</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1. 中间件参数 [web, backend, develop, jwt, jwt_backend, jwt_web, jwt_develop]
2. Header参数 [user/backend/develop]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数的类型便是用户的类型, 这里的数据和 guard起到映射关系, 但无需一致</p>
<p>根据使用到的用户的类型我们应当分为这几项</p>
<p>Guard : web,backend,develop
Type : user, backend, develop</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>用户 - api (jwt) 驱动
用户 - web 驱动
开发 - web 驱动
后端 - web 驱动
后端 - api (jwt) 驱动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一种用户定义的角色分为三种</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>root     : 后台超级管理员
user     : 前台普通用户
develop  : 开发者
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="密码加密方式" tabindex="-1"><a class="header-anchor" href="#密码加密方式" aria-hidden="true">#</a> 密码加密方式</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$password     : 原始密码
$reg_datetime : 注册时间(datetime) 类型
$randomKey    : 六位随机值
md5(sha1($password . $reg_datetime) . $randomKey);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通行证约定" tabindex="-1"><a class="header-anchor" href="#通行证约定" aria-hidden="true">#</a> 通行证约定</h3>
<table>
<thead>
<tr>
<th>id</th>
<th>int(10)</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>username</td>
<td>varchar(45)</td>
<td>字母数字下划线中文, 冒号(英文,子用户使用)</td>
</tr>
<tr>
<td>mobile</td>
<td>varchar(45)</td>
<td>手机号, 格式 86-15555555555, 国别手机号</td>
</tr>
<tr>
<td>email</td>
<td>varchar(50)</td>
<td>邮箱</td>
</tr>
</tbody>
</table>
<p>因为以上这些可以作为通行证, 所以必须是经过认证的才可以写入这个数据表, 否则无法进行写入</p>
<h3 id="平台" tabindex="-1"><a class="header-anchor" href="#平台" aria-hidden="true">#</a> 平台</h3>
<p>平台遵循标准化, x-id: 定义为设备ID</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<blockquote>
<p>本模块的配置是注入到 <code v-pre>poppy.php</code> 文件中, 以下的所有配置均可配置
key 是 <code v-pre>poppy.system</code></p>
</blockquote>
<h3 id="cross-origin" tabindex="-1"><a class="header-anchor" href="#cross-origin" aria-hidden="true">#</a> cross_origin</h3>
<ul>
<li>Type : <code v-pre>string|array</code></li>
<li>Default : <code v-pre>*</code></li>
</ul>
<p>接口请求的时候可以对来源进行设定, 防止 web 端跨域访问资源, 这里的来源可以为 <code v-pre>*</code> 或者数组, 数组为类似于 <code v-pre>http://poppy.wulicode.com</code> 这种形式, 如果是网址则只能填写一个完整字串, 或者多个网址, 使用
数组进行设定</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'cross_origin'      => [
    'http://poppy.wulicode.com'
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cross-headers" tabindex="-1"><a class="header-anchor" href="#cross-headers" aria-hidden="true">#</a> cross_headers</h3>
<ul>
<li>Type : <code v-pre>string</code></li>
<li>Default : <code v-pre>''</code></li>
</ul>
<p>允许的 Header, 可以允许设定前端访问的时候指定的 Header 可以通过浏览器跨域验证, 多个参数使用 <code v-pre>,</code> 分隔</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cross_headers => 'X-APP-VERSION'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h3>
<ul>
<li>Type : <code v-pre>bool</code></li>
<li>Default : <code v-pre>false</code></li>
</ul>
<p>演示模式, 开启则无法上传文件, 修改密码</p>
<h3 id="upload-image-district" tabindex="-1"><a class="header-anchor" href="#upload-image-district" aria-hidden="true">#</a> upload_image_district</h3>
<ul>
<li>Type : <code v-pre>array</code></li>
<li>Default : <code v-pre>['default' =&gt; 1920,'avatar' =&gt; 300,]</code></li>
</ul>
<p>上传图片大小限制, 根据接口上传的 <code v-pre>image_type</code> 类型对图片进行压缩</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'upload_image_district' => [
    'default' => 1920,
    'avatar'  => 300,
    ...
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="csrf-except" tabindex="-1"><a class="header-anchor" href="#csrf-except" aria-hidden="true">#</a> csrf_except</h3>
<ul>
<li>Type : <code v-pre>array</code></li>
<li>Default : <code v-pre>[]</code></li>
</ul>
<p>支持 Laravel 的路由过滤的方式来移除匹配的路由不进行 csrf 验证. 参考 : <a href="https://learnku.com/docs/laravel/6.x/csrf/5137" target="_blank" rel="noopener noreferrer">CSRF 保护<ExternalLinkIcon/></a></p>
<h3 id="uncrypt-cookies" tabindex="-1"><a class="header-anchor" href="#uncrypt-cookies" aria-hidden="true">#</a> uncrypt_cookies</h3>
<ul>
<li>Type : <code v-pre>array</code></li>
<li>Default : <code v-pre>[]</code></li>
</ul>
<p>使用 laravel cookie 进行设定时, 设定的 cookie 不进行加密输出, 方便 js 进行读取, 共享数据</p>
<h3 id="password-provider" tabindex="-1"><a class="header-anchor" href="#password-provider" aria-hidden="true">#</a> password_provider</h3>
<ul>
<li>Type : <code v-pre>string</code></li>
<li>Default : <code v-pre>''</code></li>
</ul>
<p>密码加载器, 这里这里设定密码算法, 为了保护用户数据安全, 特设定此方式来保护密码计算 默认是 <code v-pre>\Poppy\System\Classes\Auth\Password\DefaultPasswordProvider::class</code>
替换该实现方式需要实现 <code v-pre>\Poppy\System\Classes\Contracts\PasswordContract::class</code> 约定.</p>
<h3 id="user-location" tabindex="-1"><a class="header-anchor" href="#user-location" aria-hidden="true">#</a> user_location</h3>
<ul>
<li>Type : <code v-pre>string</code></li>
<li>Default : <code v-pre>''</code></li>
</ul>
<p>登录跳转地址, 使用默认的 <code v-pre>web-auth</code> guard 做验证则需要设定此配置, 当验证失败, 自动跳转到此路径, 这里是路径, 不是路由地址</p>
<h3 id="route-hide" tabindex="-1"><a class="header-anchor" href="#route-hide" aria-hidden="true">#</a> route_hide</h3>
<ul>
<li>Type : <code v-pre>array</code></li>
<li>Default : <code v-pre>[]</code></li>
</ul>
<p>隐藏路由, 后台可以隐藏的路由, 写在这里, 后台列表不予显示</p>
<h3 id="prefix" tabindex="-1"><a class="header-anchor" href="#prefix" aria-hidden="true">#</a> prefix</h3>
<ul>
<li>Type : <code v-pre>string</code></li>
<li>Default : <code v-pre>mgr-page</code></li>
</ul>
<p>后台默认登陆入口</p>
<h3 id="api-enable-sign" tabindex="-1"><a class="header-anchor" href="#api-enable-sign" aria-hidden="true">#</a> api_enable_sign</h3>
<ul>
<li>Type : <code v-pre>bool</code></li>
<li>Default : <code v-pre>true</code></li>
</ul>
<p>是否启用 api 签名验证</p>
<h3 id="api-sign-provider" tabindex="-1"><a class="header-anchor" href="#api-sign-provider" aria-hidden="true">#</a> api_sign_provider</h3>
<p>接口签名算法, 需要实现 <code v-pre>\Poppy\System\Classes\Contracts\ApiSignContract:class</code> 约定</p>
<h3 id="payment-types" tabindex="-1"><a class="header-anchor" href="#payment-types" aria-hidden="true">#</a> (*)payment_types</h3>
<ul>
<li>Type : <code v-pre>array</code></li>
<li>Default : <code v-pre>[]</code></li>
</ul>
<p>[待定]支付类型</p>
<h2 id="使用-progress-方式数据表更新" tabindex="-1"><a class="header-anchor" href="#使用-progress-方式数据表更新" aria-hidden="true">#</a> 使用 Progress 方式数据表更新</h2>
<h3 id="访问地址" tabindex="-1"><a class="header-anchor" href="#访问地址" aria-hidden="true">#</a> 访问地址</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http://xxx.com/mgr-page/develop
点击 数据表更新
参数
[
  'method' => '模型名.类名',// 类名多个单词通过 '_' 拼接
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的编写" tabindex="-1"><a class="header-anchor" href="#类的编写" aria-hidden="true">#</a> 类的编写</h3>
<p>在每个模块下 progress 文件夹下(没有新建)编写</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token comment"># 类命名规范 数据表名+改动(自定义)+progress</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">OrderHunterResultProgress</span> <span class="token keyword">implements</span> <span class="token class-name">Progress</span>
<span class="token punctuation">{</span>
  <span class="token keyword">use</span> <span class="token package">FixTrait</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span> fix
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 初始化 fix</span>
    <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">fixInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 指定每次更新的条数</span>
    <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'section'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token comment">// 重新清理掉缓存</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'cached'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'cached'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token variable">$Db</span> <span class="token operator">=</span> <span class="token class-name static-context">OrderHunter</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'first_result'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'!='</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'total'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'total'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$Db</span><span class="token operator">-></span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'max'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'max'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$Db</span><span class="token operator">-></span><span class="token function">max</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'min'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'min'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$Db</span><span class="token operator">-></span><span class="token function">min</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ↑↑↑↑↑↑↑↑↑↑↑   获取参数</span>

    <span class="token comment">// 剩余数</span>
    <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'left'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$Db</span><span class="token operator">-></span><span class="token function">whereRaw</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id > ?'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'start'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token operator">-></span><span class="token function">count</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'lastId'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'start'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'left'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 业务逻辑</span>
      <span class="token variable">$left_items</span> <span class="token operator">=</span> <span class="token class-name static-context">OrderHunter</span><span class="token operator">::</span><span class="token function">whereRaw</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id >= ?'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'start'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'first_result'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'!='</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">''</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">take</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'section'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">orderBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'asc'</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$left_items</span> <span class="token keyword">as</span> <span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token function">normal</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token operator">-></span><span class="token property">id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'lastId'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$item</span><span class="token operator">-></span><span class="token property">id</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">fix</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h2>
<h3 id="jwtauthenticate" tabindex="-1"><a class="header-anchor" href="#jwtauthenticate" aria-hidden="true">#</a> JwtAuthenticate</h3>
<p>作用</p>
<ul>
<li>校验 token 是否合法(不涉及到数据库查询, 校验 Token 合法性)</li>
<li>校验 用户密码是否符合, 在拿到授权之后, 对比 salt, 验证是否合法</li>
</ul>
<p>流程参考</p>
<p><img src="https://file.wulicode.com/note/2021/11-09/11-46-46495.png" alt=""></p>
<h3 id="ban" tabindex="-1"><a class="header-anchor" href="#ban" aria-hidden="true">#</a> Ban</h3>
<p>对用户进行IP/设备的封禁</p>
<p>如果是前台用户, 放到所有请求之前
如果是后台用户, 放到所有请求之后(需要放过管理员)</p>
</div></template>


