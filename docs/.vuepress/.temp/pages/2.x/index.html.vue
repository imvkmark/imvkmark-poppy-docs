<template><div><h1 id="入门手册" tabindex="-1"><a class="header-anchor" href="#入门手册" aria-hidden="true">#</a> 入门手册</h1>
<h2 id="如何渲染显示内容" tabindex="-1"><a class="header-anchor" href="#如何渲染显示内容" aria-hidden="true">#</a> 如何渲染显示内容</h2>
<h3 id="定义路由" tabindex="-1"><a class="header-anchor" href="#定义路由" aria-hidden="true">#</a> 定义路由</h3>
<p>参考资料: <a href="http://laravelacademy.org/post/53.html" target="_blank" rel="noopener noreferrer">[ Laravel 5.1 文档 ] 基础 —— HTTP 路由<ExternalLinkIcon/></a></p>
<p>路由文件夹 : <code v-pre>~/app/Http/Routes/</code> 路由说明</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>front.php    # 前台路由
desktop.php  # 后台路由
develop.php  # 开发平台
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>定义前台路由 <code v-pre>~/app/Http/Routes/front.php</code></li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 使用组定义路由
Route::group([
    'namespace' => 'Front',
], function () {
    // ...
    // 使用 controller 来定义路由
    Route::controller('test', 'TestController', [
        # 方法名           # 路由的名称
        'getShow'         => 'front_test.show',
    ]);
    // ...
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>访问地址 http://www.domain.com/test/show</li>
</ul>
<h3 id="定义控制器-方法" tabindex="-1"><a class="header-anchor" href="#定义控制器-方法" aria-hidden="true">#</a> 定义控制器 @ 方法</h3>
<p>控制器文件位置 : <code v-pre>~/app/Http/Controllers/Front/TestController.php</code> 控制器方法 <code v-pre>public function getShow(){}</code></p>
<h3 id="读取模型数据" tabindex="-1"><a class="header-anchor" href="#读取模型数据" aria-hidden="true">#</a> 读取模型数据</h3>
<p>参考资料: - <a href="http://laravelacademy.org/post/126.html" target="_blank" rel="noopener noreferrer">[ Laravel 5.1 文档 ] 数据库 —— 查询构建器<ExternalLinkIcon/></a> - <a href="http://laravelacademy.org/post/138.html" target="_blank" rel="noopener noreferrer">[ Laravel 5.1 文档 ] Eloquent ORM<ExternalLinkIcon/></a></p>
<ul>
<li>创建模型 模型的位置: <code v-pre>~/app/Models/</code> 命名规范: 首字母大写的驼峰模式 <code v-pre>GameServer</code></li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class GameServer{
    // 定义 table
    protect $table = 'game_server'
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>读取数据</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 读取全部
GameServer::all();

# 读取单条
# 设定 primary key  : `protected $primaryKey = 'server_id';`, 默认是 `id`
GameServer::find($id)

# 读取带条件的
# id
GameServer::where('server_id', 5)->first();

# 范围查询
GameServer::where('server_id','>',5)->get();

# 多条件查询
Game::where('game_id',5)
    ->where('server_id',8)
    ->get();

# 分页读取
$Db = GameOrder::where('order_status', 'ing')->take(5);
$items = $Db->paginate($this->pageNum);
    ->appends($request->input());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="渲染模板" tabindex="-1"><a class="header-anchor" href="#渲染模板" aria-hidden="true">#</a> 渲染模板</h3>
<p>参考资料 <a href="http://laravelacademy.org/post/79.html" target="_blank" rel="noopener noreferrer">Blade 模板引擎<ExternalLinkIcon/></a></p>
<p>模板位置 : <code v-pre>~/resources/views</code></p>
<p>控制器命名 命名方式采用蛇形方式命名, 和控制器进行匹配, 函数命名遵循类函数命名规范, 文件名称和方法名称有效匹配 PS:, 这个文件完整路径应是 <code v-pre>~</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 命名空间/控制器/方法.blade.php
front/test/show.blade.php

# 后台 `Desktop/AccountController`这个控制器的文件夹名称 应该是 `desktop`, 里边有登陆的 `getLogin` 方法
desktop/account/login.blade.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建模板</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输出了一个 abc {!! $abc !!} ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>调用模板</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>return view('front.test.show', [
    'abc' => $routeUrl,
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>输出的内容</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输出了一个 abc http://www.lartest.com/test/show?id=5 ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>命名约定</li>
<li>系统内置变量加 <code v-pre>_</code> 下划线前缀</li>
<li>命名方式: 小写, 蛇形</li>
</ul>
<h2 id="辅助功能" tabindex="-1"><a class="header-anchor" href="#辅助功能" aria-hidden="true">#</a> 辅助功能</h2>
<h3 id="路由地址生成" tabindex="-1"><a class="header-anchor" href="#路由地址生成" aria-hidden="true">#</a> 路由地址生成</h3>
<p>route 函数, 参数是 路由的名称 <code v-pre>route('front_test.show')</code> : helper 函数(帮助函数) <code v-pre>route('front_test.show', [1,2])</code> : helper 函数(帮助函数) <code v-pre>route_url('front_test.show', null, ['id'=&gt; 5])</code> : 框架函数 - 传参 访问地址 : <code v-pre>http://www.domain.com/test/show/5/234</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>5   : 文章的ID    ($id)
234 : 文章的评论   ($comment_id)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>传参限制 最多 5 个</li>
</ul>
<h3 id="获取参数" tabindex="-1"><a class="header-anchor" href="#获取参数" aria-hidden="true">#</a> 获取参数</h3>
<ul>
<li>获取参数</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>public function getShow($id, $comment_id) {
    var_dump($id);
    var_dump($comment_id);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>怎么样获取 querystring 传参 依赖注入</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>public function getShow(Request $request) {
    var_dump($request->all());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务器绑定目录" tabindex="-1"><a class="header-anchor" href="#服务器绑定目录" aria-hidden="true">#</a> 服务器绑定目录</h3>
<ul>
<li><code v-pre>~/public</code> 只有一个 <code v-pre>index.php</code></li>
</ul>
<h3 id="自定义框架功能" tabindex="-1"><a class="header-anchor" href="#自定义框架功能" aria-hidden="true">#</a> 自定义框架功能</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>~/app/Lemon/
    Action         带有错误信息的返回 (Nucleus)
    Contracts      接口
    Extensions     扩展的框架的一些类
    Facade         简要操作的入口, 自定义的 Facade
    Func           系统函数/ 帮助函数
    Helper         LmArr, LmEnv, LmFile (Lemon)
    Project        项目的, 比如短信平台, 邮件发送
    Suit           acl 控制, 流程控制的定义, 菜单定义
    Vendor         第三方的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三方类库的加载" tabindex="-1"><a class="header-anchor" href="#第三方类库的加载" aria-hidden="true">#</a> 第三方类库的加载</h2>
<h3 id="composer" tabindex="-1"><a class="header-anchor" href="#composer" aria-hidden="true">#</a> composer</h3>
<p>参考资料: - <a href="http://www.phpcomposer.com/" target="_blank" rel="noopener noreferrer">Composer 中文站<ExternalLinkIcon/></a> - <a href="http://packagist.com/" target="_blank" rel="noopener noreferrer">Packageist(包)<ExternalLinkIcon/></a></p>
<h3 id="位置" tabindex="-1"><a class="header-anchor" href="#位置" aria-hidden="true">#</a> 位置</h3>
<p><code v-pre>~/Vendor</code></p>
<h3 id="常用扩展" tabindex="-1"><a class="header-anchor" href="#常用扩展" aria-hidden="true">#</a> 常用扩展</h3>
<p>github 项目</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>"intervention/image"           # 图像处理
"laravel/framework"            # 核心库
"illuminate/support"           # 二开用的包
"laravelcollective/html"       # 快速生成表单和html的php 帮助类
"latrell/alipay"               # 支付宝支付接口
"mews/purifier"                # 处理 dom
"nesbot/carbon"                # 处理时间
"erusev/parsedown-extra"       # 解析 markdown
"league/html-to-markdown"      # html -> markdown
"sunra/php-simple-html-dom-parser"        # 解析dom
"socialiteproviders/qq"        # qq 自动登录
"predis/predis"                # redis 调用
"phpoffice/phpexcel"           # excel 处理
"maatwebsite/excel"            # 封装 phpexcel 的方法
"socialiteproviders/weibo":    # 微博自动登录
"doctrine/dbal"                # 生成模型帮助文件的
"guzzlehttp/guzzle"            # http 请求用
"dingo/api"                    # api接口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用的变量" tabindex="-1"><a class="header-anchor" href="#常用的变量" aria-hidden="true">#</a> 常用的变量</h3>
<ul>
<li>公用的模板变量以下划线 起头</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'_site'     => site(),                 # 网站配置
'_route'    => $this->route,           # 当前路由的名字
'_ip'       => $this->ip,              # 当前的ip地址
'_time'     => $this->time,            # 当前的unix 时间戳
'_datetime' => \Carbon\Carbon::now(),  # 当前时间 datetime 格式
'_pagesize' => $this->pageNum,         # 分页数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="保留变量" tabindex="-1"><a class="header-anchor" href="#保留变量" aria-hidden="true">#</a> 保留变量</h3>
<ul>
<li>模板保留变量 保留变量采用 下划线起头, 蛇形写法方式命名</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$_pam          # 当前登陆账户的基本信息
$_front        # 当前前端用户的基本资料
$_site         # 当前网站的配置
$_route        # 当前路由的名称，如果没有，名称为空
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>控制器保留变量 控制器保留变量采用大小写混排模式</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pageNum      # 当前每页分页数量
ip           # 当前IP
time         # 请求的时间戳
route        # 当前路由名称
datetime     # 当前请求的 datetime 时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证机制" tabindex="-1"><a class="header-anchor" href="#验证机制" aria-hidden="true">#</a> 验证机制</h2>
<h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3>
<p>Laravel提供了多种方法来验证应用输入数据, 这样的简单化前提是, 数据库中有个明确的唯一的字段值来对应唯一的名称(现在正在做的), 对于在控制器中我们需要如下约束即可</p>
<h3 id="定义约束" tabindex="-1"><a class="header-anchor" href="#定义约束" aria-hidden="true">#</a> 定义约束</h3>
<p>项目约束代码</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$validator = \Validator::make($request->all(), [
    'city_id' => 'required|integer',
]);
if ($validator->fails()) {
    return api_end('error', $validator->errors());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有详细的验证规则 <a href="http://laravelacademy.org/post/240.html#ipt_kb_toc_240_12" target="_blank" rel="noopener noreferrer">验证规则, 点击访问<ExternalLinkIcon/></a></p>
<h3 id="在各个模块的使用" tabindex="-1"><a class="header-anchor" href="#在各个模块的使用" aria-hidden="true">#</a> 在各个模块的使用</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// 前后台的的使用
site_end('error', $validator->errors())

// api 中的使用
api_end('error', $validator->errors())

// support 中的使用
return support_end('error', $validator->errors());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###定义通用的属性 位置: 在 <code v-pre>~/resources/lang/zh/validation.php</code> 语言文件中</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// 这个部分定义每个字段的显示值
'attributes' => [
    'area_id'   => '地区ID',
    'area_title'   => '地区名称',
    ...
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义错误提示" tabindex="-1"><a class="header-anchor" href="#自定义错误提示" aria-hidden="true">#</a> 自定义错误提示</h3>
<p>有时候你可能只想为特定字段指定自定义错误信息，可以通过”.”来实现，首先指定属性名，然后是规则：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// 这样定义
$messages = [
    'email.required' => '我们需要知晓您的邮箱地址!',
];

// 这样使用
$validator = \Validator::make($request->all(), [
    'email' => 'required',
], $messages);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细内容参见 <a href="http://laravelacademy.org/post/240.html" target="_blank" rel="noopener noreferrer">L5 验证<ExternalLinkIcon/></a></p>
</div></template>


