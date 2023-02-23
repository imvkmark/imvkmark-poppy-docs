<template><div><h1 id="_3-2-4-0-升级说明" tabindex="-1"><a class="header-anchor" href="#_3-2-4-0-升级说明" aria-hidden="true">#</a> 3.2 -&gt; 4.0 升级说明</h1>
<h2 id="建议" tabindex="-1"><a class="header-anchor" href="#建议" aria-hidden="true">#</a> 建议</h2>
<ul>
<li>使用 <code v-pre>Guzzle\Client</code> 替代掉 <code v-pre>Curl\Curl</code>, 写法等均需要变动</li>
</ul>
<h2 id="framework" tabindex="-1"><a class="header-anchor" href="#framework" aria-hidden="true">#</a> Framework</h2>
<ul>
<li><strong>不兼容</strong></li>
</ul>
<p>移除 <code v-pre>x_app</code> 函数, 此函数在 3.2 中废弃, 因为 nginx 无法从 json 中获取需要的数据, 需要显式使用 <code v-pre>x_header</code> 来获取</p>
<p>todo : 关于 Header 的定义需要完善</p>
<p><code v-pre>jwt_token</code> 方法取消参数传递, 使用 jwt 的 <code v-pre>tymon.jwt</code> 来获取</p>
<p><code v-pre>[2022-06-10]</code> 主 ServiceProvider <code v-pre>\Poppy\Framework\Support\PoppyServiceProvider</code> 变量 <code v-pre>$listens</code> 和 <code v-pre>$policies</code> 使用 array 强类型模式</p>
<ul>
<li><strong>可替代</strong></li>
</ul>
<p>移除 <code v-pre>TestCase-&gt;poppyContainer()</code> 方法, 使用 <code v-pre>Container::getInstance()</code> 替代</p>
<p>移除 <code v-pre>Resp-&gt;data()</code> 方法, 使用 <code v-pre>Resp-&gt;custom()</code> 替代</p>
<p>移除 <code v-pre>get(), post()</code> 方法, 使用 <code v-pre>input()</code> 替代</p>
<ul>
<li><strong>调整</strong></li>
</ul>
<p><code v-pre>[2022-06-10]</code> 对于后置加载的 ServiceProvider, 需要继承 <code v-pre>\Illuminate\Contracts\Support\DeferrableProvider</code> 类, 取消 <code v-pre>$defer</code> 属性</p>
<h2 id="core" tabindex="-1"><a class="header-anchor" href="#core" aria-hidden="true">#</a> Core</h2>
<ul>
<li><strong>不兼容</strong></li>
</ul>
<p>因为 apidoc 升级导致无法生成 json , mgr-page 中无法使用新版来生成 apidoc 文档, 必须使用新版本才可以解析 json 数据, 使用 js <code v-pre>eval</code> 来解析</p>
<p><code v-pre>ServiceArray</code> 改动 <code v-pre>key()</code> 方法需要强制返回 <code v-pre>string</code></p>
<ul>
<li><strong>可替代</strong></li>
</ul>
<p>因为 sami 维护, 无法生成新版本 php api 文档, 使用 doctum 替代 sami, 接口不变, 可重新生成</p>
<p>移除 <code v-pre>RdsNative-&gt;delTaggedKeys()</code> , 使用 <code v-pre>RdsNative-&gt;del()</code> 替代</p>
<p>移除 <code v-pre>sys_success()</code> 方法, 使用 <code v-pre>sys_info()</code> 替代</p>
<h2 id="system" tabindex="-1"><a class="header-anchor" href="#system" aria-hidden="true">#</a> System</h2>
<ul>
<li><strong>不兼容</strong></li>
</ul>
<p><code v-pre>ApiSignContract</code> 方法 <code v-pre>sign</code> 增加参数 <code v-pre>$type</code> , 使该方法同时支持不同端签名</p>
<div class="language-diff line-numbers-mode" data-ext="diff"><pre v-pre class="language-diff"><code>class DefaultApiSignProvider extends DefaultBaseApiSign
{
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    public function sign(array $params): string
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    public function sign(array $params, $type = 'user'): string
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   {
</span><span class="token prefix unchanged"> </span><span class="token line">       ...
</span><span class="token prefix unchanged"> </span><span class="token line">   }
</span></span>}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>移除 <code v-pre>\Poppy\System\Classes\HtmlParser</code> 类, 不必封装过多无用的类, 以核心为主</p>
<p>移除 <code v-pre>SettingRepository</code> 的 <code v-pre>setReRead()</code>, <code v-pre>save()</code> 方法</p>
<p>此方法 <code v-pre>3.2</code> 已经重新改写为从缓存直接读取, 不使用静态变量</p>
<p>移除 <code v-pre>pages.yaml</code> 的定义以及读取, 改用 mgr-page/mgr-app 的 Form 写法</p>
<p>相关影响 : <code v-pre>Module-&gt;pages()</code>, <code v-pre>Module/Repositories/ModulesPage</code>, <code v-pre>ModuleManager-&gt;pages()</code></p>
<p>移除 <code v-pre>settings.yaml</code> 的定义以及读取, 不支持项目默认数据在 <code v-pre>settings.yaml</code> 的定义</p>
<p>相关影响 : <code v-pre>Module/Repositories/ModulesSetting</code>, <code v-pre>ModuleManager-&gt;settings()</code></p>
<p>移除 <code v-pre>ui.yaml</code> 的定义以及读取, 不支持项目默认数据在 <code v-pre>ui.yaml</code> 的定义</p>
<p>相关影响 : 移除 <code v-pre>Module/Repositories/ModulesUi</code>, 移除 <code v-pre>ModuleManager-&gt;uis()</code>, 移除 <code v-pre>Classes\Contracts\UiContract</code></p>
<p>移除 <code v-pre>ModuleManager-&gt;getExcepts()</code> 的定义以及读取(无相关用途)</p>
<p>移除 <code v-pre>\Poppy\System\Action\Pam::setPasswordById</code>, 使用 <code v-pre>\Poppy\System\Action\Pam::setPassword</code> 替代, 参数不一致, 需要注意</p>
<p>移除 <code v-pre>\Poppy\System\Classes\Contracts\UploadContract::type</code> , 使用 <code v-pre>\Poppy\System\Classes\Uploader\Uploader::kvExt</code> 替代, 参数有差异</p>
<p>移除 <code v-pre>\Poppy\System\Action\Pam::captchaLogin</code> , 参数 <code v-pre>platform</code> 替换为 guard 类型, <code v-pre>platform</code> 从 header 中进行取值</p>
<p>移除</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>\Poppy\System\Models\PamAccount::fetch()             :  多余的字段查询
\Poppy\System\Models\PamAccount::getIdByUsername()   :  频率低, 无用函数
\Poppy\System\Models\PamAccount::getTypeById()       :  频率低, 无用函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pam 中 loginCheck 移除 loginAllowIpCheck 方法(次级别调用), 会影响(ydl) 项目, 移除 <code v-pre>\System\Events\LoginSuccessEvent</code> 调用方法</p>
<div class="language-diff line-numbers-mode" data-ext="diff"><pre v-pre class="language-diff"><code>public function loginCheck(string $passport, string $password, string $guard_name = PamAccount::GUARD_WEB): bool
{

<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">        event(new LoginBannedEvent($pam, $guard));
</span></span>
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">        if (method_exists($this, 'loginAllowIpCheck') &amp;&amp; !$this->loginAllowIpCheck()) {
</span><span class="token prefix deleted">-</span><span class="token line">            $guard->logout();
</span><span class="token prefix deleted">-</span><span class="token line">            return false;
</span><span class="token prefix deleted">-</span><span class="token line">       }
</span></span>
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">        // 兼容存在 system 模块事件
</span><span class="token prefix deleted">-</span><span class="token line">        // deprecated 为了兼容 q2
</span><span class="token prefix deleted">-</span><span class="token line">        if (class_exists('\System\Events\LoginSuccessEvent')) {
</span><span class="token prefix deleted">-</span><span class="token line">            event(new \System\Events\LoginSuccessEvent($pam, $platform, $guard));
</span><span class="token prefix deleted">-</span><span class="token line">            return true;
</span><span class="token prefix deleted">-</span><span class="token line">        }
</span></span>...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>可替代</strong></li>
</ul>
<p>移除 <code v-pre>ModuleManager-&gt;repository()</code>, 使用 <code v-pre>ModuleManager-&gt;modules()</code> 替代</p>
<p>移除 <code v-pre>sys_container</code>, 使用 <code v-pre>py_container</code> 替代</p>
<p>移除 <code v-pre>\Poppy\System\Classes\Abstracts\SysRouteServiceProvider</code> , 使用框架 <code v-pre>\Poppy\Framework\Application\RouteServiceProvider</code> 替代</p>
<p>移除 <code v-pre>\Poppy\System\Action\Pam::passportType</code> , 使用 <code v-pre>PamAccount::passportType()</code> 替代</p>
<p>移除 <code v-pre>\Poppy\System\Action\Verification::getHiddenStr</code> , 使用 <code v-pre>\Poppy\System\Action\Verification::getHidden</code> 替代, 因为返回不仅仅是字串, 可能还会有数组</p>
<p>移除 <code v-pre>\Poppy\System\Tests\Base\SystemTestCase::export</code> , 使用 <code v-pre>\Poppy\Framework\Application\TestCase::outputVariables</code> 替代, 使用 stream 打印数据, 可保证运行无异常提示</p>
<p>移除 <code v-pre>\Poppy\System\Events\LoginSuccessEvent</code> 的 platform 参数, 使用 <code v-pre>x-id</code> 替代</p>
<p>继承项目 <code v-pre>\Poppy\System\Http\Forms\Settings\FormSettingBase</code> 更新为 <code v-pre>Poppy\MgrPage\Classes\Form\FormSettingBase</code>, 同理 Grid 也会迁移, 这里是对页面的组织对 mgr-page 做的一个调整</p>
<p><strong>services 钩子改动</strong></p>
<p>移除 <code v-pre>poppy.system.html_top_nav</code> 更改为 <code v-pre>poppy.mgr-page.html_top_nav</code> 并移动到 mgr-page 中</p>
<p>移除 <code v-pre>poppy.system.html_cp</code> 更改为 <code v-pre>poppy.mgr-page.html_cp</code> 并移动到 mgr-page 中</p>
<p>移除 <code v-pre>poppy.system.settings</code> 更改为 <code v-pre>poppy.mgr-page.settings</code> 并移动到 mgr-page 中</p>
<p>移除 <code v-pre>poppy.system.custom_settings</code>, 此服务并入 <code v-pre>poppy.mgr-page.settings</code></p>
<ul>
<li><strong>接口</strong></li>
</ul>
<p>接口需要增加标准化参数 <code v-pre>x-type</code> 用来指定是前台用户还是后台用户, 默认是 <code v-pre>user</code></p>
<ul>
<li><strong>重复</strong></li>
</ul>
<p>移除 <code v-pre>JwtAuthGuard</code> , 和 Jwt 包数据重复</p>
<ul>
<li><strong>移除</strong></li>
</ul>
<p>移除 <code v-pre>PamAccount-&gt;getJWTCustomClaims()</code> 的 <code v-pre>user.id</code> 返回, 改返回和 jwt 的 <code v-pre>sub</code> 一致, 不必再多余返回, 无兼容性问题</p>
<h2 id="aliyun-oss" tabindex="-1"><a class="header-anchor" href="#aliyun-oss" aria-hidden="true">#</a> Aliyun-Oss</h2>
<ul>
<li><strong>可替代</strong></li>
</ul>
<p>移除 <code v-pre>Action/ActSts</code> 类, 使用 <code v-pre>Sts</code> 类, 仅仅改动命名</p>
<p>移除 <code v-pre>Action/OssDefaultUploadProvider</code>, 使用 <code v-pre>Classes\Provider\OssDefaultUploadProvider</code>, 若依赖于 4.0 组件则此问题不必关注.</p>
<h2 id="mgrpage" tabindex="-1"><a class="header-anchor" href="#mgrpage" aria-hidden="true">#</a> MgrPage</h2>
<ul>
<li><strong>可替代</strong></li>
</ul>
<p>移除 <code v-pre>\Poppy\MgrPage\Classes\Form\Field\Number</code> 的 <code v-pre>min</code> 和 <code v-pre>max</code> 方法, 使用后端服务规则校验 <code v-pre>Rule::min</code>, <code v-pre>Rule::max</code></p>
</div></template>


