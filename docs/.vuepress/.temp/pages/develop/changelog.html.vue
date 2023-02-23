<template><div><h1 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> ChangeLog</h1>
<h2 id="_3-x" tabindex="-1"><a class="header-anchor" href="#_3-x" aria-hidden="true">#</a> 3.x</h2>
<h3 id="_3-2" tabindex="-1"><a class="header-anchor" href="#_3-2" aria-hidden="true">#</a> 3.2</h3>
<ul>
<li>php 最低限制 7.4</li>
<li>composer 版本 2.*</li>
<li>相关依赖变更为 <code v-pre>3.2.*</code></li>
<li>(framework) 放开 laravel 6.0 的限制至 6.*</li>
</ul>
<h3 id="_3-1" tabindex="-1"><a class="header-anchor" href="#_3-1" aria-hidden="true">#</a> 3.1</h3>
<ul>
<li>
<p>(framework) 支持安装</p>
</li>
<li>
<p>(framework) 去除 Addon 加载</p>
</li>
<li>
<p>(framework) 支持 poppy/文件夹配置</p>
</li>
<li>
<p>(framework) 支持 manifest 文件扫描配置用于加载</p>
</li>
<li>
<p>(framework) 扩展使用 ext.php 文件来加载配置,降低层级加载</p>
</li>
<li>
<p>(framework) 取消 composer 之外的文件加载</p>
</li>
<li>
<p>(framework) PoppyTrait 更改为 pyXx 模式, Poppy Function Rename</p>
</li>
<li>
<p>(framework) Symfony error FatalErrorException =&gt; FatalError</p>
</li>
<li>
<p>(framework) Remove lang/zh/http.php</p>
</li>
<li>
<p>(framework) Add parse_seo function</p>
</li>
<li>
<p>(framework) Remove str-helper generator</p>
</li>
<li>
<p>(framework) Remove web-helper</p>
</li>
<li>
<p>(framework) Remove PoppyServiceProvider@registerConsoleCommand</p>
</li>
<li>
<p>(framework) 更改为强类型(Strong Type)</p>
</li>
<li>
<p>(framework) remove <code v-pre>Http\Middlewares\CrossPreflight</code> : 使用 <code v-pre>EnableCrossRequest</code> 替代</p>
</li>
<li>
<p>(framework) Event <code v-pre>PoppyOptimized</code> move to <code v-pre>src\Events</code> folder</p>
</li>
<li>
<p>(framework) 模块支持 composer poppy 文件夹加载, poppy.xxx 为 composer 模块, module.xx 为自定义业务逻辑模块</p>
</li>
<li>
<p>(framework) Resp 内置参数 <code v-pre>_json</code>, <code v-pre>_location</code>, <code v-pre>_time</code>, <code v-pre>_forget</code>, <code v-pre>_time</code> 更改为下划线前缀</p>
</li>
<li>
<p>(framework) <code v-pre>Rule::password()</code> 和 Laravel 框架的 <code v-pre>password</code> 规则冲突, 新增 <code v-pre>Rule::simplePwd()</code> 方法来进行基本的密码校验</p>
</li>
<li>
<p>(core) 支持权限分离</p>
</li>
<li>
<p>(core) 分离 rbac -&gt; core</p>
</li>
<li>
<p>(core) 分离 module -&gt; core</p>
</li>
<li>
<p>(core) Add Rds 缓存系列工具</p>
</li>
<li>
<p>(system) 分离数据库和 system 模块</p>
</li>
<li>
<p>(system) 上传图片组件默认不需要配置 token, 如果后台使用可以直接进行使用</p>
</li>
<li>
<p>(system) 上传图片支持定义张数, 默认为 3 张</p>
</li>
<li>
<p>(system) 加入黑白名单风险防控</p>
</li>
<li>
<p>(system) 单用户登录</p>
</li>
<li>
<p>(system) 封装 form, 支持 配置方式来调用 Form</p>
</li>
<li>
<p>(system) poppy 设置使用 hook 方式</p>
</li>
<li>
<p>(system) 加入退出登录接口</p>
</li>
<li>
<p>(system) 验证码支持后台定义过期时间以及长度</p>
</li>
<li>
<p>(system) 缓存使用 PyXxDef 定义</p>
</li>
<li>
<p>(system) 重写持久化</p>
</li>
<li>
<p>(system) 是否自动解封用户采用后台配置</p>
</li>
<li>
<p>(system) Aliyun Oss 临时授权支持</p>
</li>
<li>
<p>(system) Menu 访问简化, 支持域名生成</p>
</li>
<li>
<p>(system) 支持 layui 动态表格并可以用 ListX 生成</p>
</li>
<li>
<p>(system) 使用 x_app 来获取 app 定义的信息</p>
</li>
<li>
<p>(system) Token 使用 jwt 进行验证</p>
</li>
<li>
<p>(system) 默认使用国际号码来进行存储</p>
</li>
<li>
<p>(system) 支持 Mock 工具</p>
</li>
<li>
<p>(system) Sign 签名支持自定义</p>
</li>
<li>
<p>(system) 支持上传配置和安装 aliyun-oss 组件</p>
</li>
<li>
<p>(system) 拆离组件包到 Core 模块</p>
</li>
<li>
<p>(aliyun-push) Ali 推送支持配置访问</p>
</li>
</ul>
<h2 id="_2-x" tabindex="-1"><a class="header-anchor" href="#_2-x" aria-hidden="true">#</a> 2.x</h2>
<ul>
<li>(framework) for laravel 6.x</li>
<li>(framework) remove agmotto</li>
<li>(framework) Support Module Loader</li>
</ul>
<h2 id="_1-x" tabindex="-1"><a class="header-anchor" href="#_1-x" aria-hidden="true">#</a> 1.x</h2>
<ul>
<li>(framework) for laravel 5.5</li>
<li>(framework) Remove <code v-pre>cache_name</code> function</li>
<li>(framework) Remove similar function with laravel</li>
<li>(framework) Resp</li>
<li>(extension) Move Pinyin Component to Package</li>
<li>(extension) Doc command remove to System module</li>
<li>(extension) Add Document for command</li>
<li>(framework) Delete Graphql</li>
<li>(framework) Add phplint</li>
<li>(framework) Add php-cs-fixer</li>
</ul>
</div></template>


