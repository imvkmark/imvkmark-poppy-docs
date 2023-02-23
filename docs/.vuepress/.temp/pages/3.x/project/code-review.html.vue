<template><div><h1 id="code-review" tabindex="-1"><a class="header-anchor" href="#code-review" aria-hidden="true">#</a> Code Review</h1>
<h2 id="_1-框架需要遵循的规范" tabindex="-1"><a class="header-anchor" href="#_1-框架需要遵循的规范" aria-hidden="true">#</a> 1. 框架需要遵循的规范</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 使用 php-cs-fixer 来检测基本的格式
php artisan poppy:doc cs

# 使用 system:inspect 检测函数注释
php artisan system:inspect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-request-输入" tabindex="-1"><a class="header-anchor" href="#_2-request-输入" aria-hidden="true">#</a> 2. \Request 输入</h2>
<p>使用 \Request, 这里的 Request 代表的是全局变量
控制器中不建议使用参数注入, 使用 input 替代即可.
同理的还有 <code v-pre>\Request::get('param')</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// deprecated
$is_apply = \Input::input('is_apply');
// succcess
$is_apply = input('is_apply');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-缓存命名" tabindex="-1"><a class="header-anchor" href="#_3-缓存命名" aria-hidden="true">#</a> 3. 缓存命名</h2>
<p>缓存使用 <code v-pre>标签 + 命名</code> 的方式来命名, 便于对数据进行分组, 例如 <code v-pre>system</code> 模块的 setting 配置项目的缓存应该如下使用.
这里 <code v-pre>标签</code>   的作用适用于区分模块, <code v-pre>命名</code> 的作用是为了即使不支持缓存标签(例如文件缓存)的驱动下运行, 也能够保证系统可以正常运行.
例如:
这里的 <code v-pre>system</code> 代表 system 模块
这里的 <code v-pre>system.setting</code> 代表命名</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// 设置缓存
$this->getCache('system')->forever('system.setting', static::$cache);

// 读取缓存
$this->getCache('system')->get('system.setting')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此这般, 模块缓存的清除便可以像如下清除;</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$this->getCache('system')->clear()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-去除多余参数" tabindex="-1"><a class="header-anchor" href="#_4-去除多余参数" aria-hidden="true">#</a> 4. 去除多余参数</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># bad, 默认为空字符串, 所以第三个参数是空字符串的时候不需要写
$type = sys_get($input, 'socialite_type', ''),

# good
$type = sys_get($input, 'socialite_type'),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-保障模块洁净注释完整" tabindex="-1"><a class="header-anchor" href="#_5-保障模块洁净注释完整" aria-hidden="true">#</a> 5. 保障模块洁净注释完整</h2>
<p>system 模块不能包含其他模块的任何东西
生成 php 文档, 检查文档是否注释完整</p>
<h2 id="_6-保障模块附加组件完整" tabindex="-1"><a class="header-anchor" href="#_6-保障模块附加组件完整" aria-hidden="true">#</a> 6. 保障模块附加组件完整</h2>
<p>模块需要安装的时候需要保证组件正常, 在 dependency 中添加的模块完整, 这个放置在 dependency 中进行验证</p>
<h2 id="_7-其他注意事项" tabindex="-1"><a class="header-anchor" href="#_7-其他注意事项" aria-hidden="true">#</a> 7. 其他注意事项</h2>
<ol>
<li>保证测试脚本可以正常执行</li>
<li>Inspect 文件没有异常</li>
<li>保证接口正常, 使用接口检测 500 工具来运行, 保证接口正常</li>
<li>保证代码中不包含 debug 项目</li>
<li>不建议在项目中包含 env 的调用, 可以使用函数来进行调用</li>
</ol>
<h2 id="_8-框架升级-2-0-时候出现的问题" tabindex="-1"><a class="header-anchor" href="#_8-框架升级-2-0-时候出现的问题" aria-hidden="true">#</a> 8. 框架升级 2.0 时候出现的问题</h2>
<ul>
<li>No hint path defined for [poppy].</li>
<li>Authentication user provider [pam.web] is not defined.</li>
</ul>
<p>这里出现的问题是</p>
<ol>
<li>清空缓存</li>
<li>删除框架文件 <code v-pre>storage/framework/*.php</code></li>
<li>删除 poppy 模块缓存文件 <code v-pre>storage/app/poppy.json</code></li>
</ol>
<h2 id="_9-function-name-must-be-a-string" tabindex="-1"><a class="header-anchor" href="#_9-function-name-must-be-a-string" aria-hidden="true">#</a> 9. Function name must be a string</h2>
<p>这里一般的问题就是中间件名称和定义的中间件名称不匹配导致</p>
</div></template>


