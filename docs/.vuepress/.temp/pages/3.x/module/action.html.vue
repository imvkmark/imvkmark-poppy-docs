<template><div><h1 id="业务逻辑" tabindex="-1"><a class="header-anchor" href="#业务逻辑" aria-hidden="true">#</a> 业务逻辑</h1>
<h2 id="位置" tabindex="-1"><a class="header-anchor" href="#位置" aria-hidden="true">#</a> 位置</h2>
<p>位置 <code v-pre>modules/{module}/src/action</code></p>
<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2>
<p>这里的注释在使用 PhpStorm/WebStorm 的时候可以自动生成 <code v-pre>/**</code>
所有的函数都需要按照这种格式来写</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * 创建|编辑订单
 * @param array  $input      订单数据    &lt;br />
 *      {String} title     订单标题      &lt;br />
 *      {Int}    server_id 服务器ID      &lt;br />
 * @param string $pay_pwd    支付密码
 * @param string $order_type 操控类型  [create|创建,edit|编辑]
 * @param string $type       支付密码传递方式
 * @return bool
 */
public function establish($input, $pay_pwd, $order_type, $type = 'plain')
{
   ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要注意的是, 如果是数组, 则需要按照如下的方式进行注释</p>
<p><strong>数组注释</strong> 这里的注释方式和 Api 接口注释方式一致</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>*      {String} title     订单标题      &lt;br />
*      {Int}    server_id 服务器ID      &lt;br />
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义-code" tabindex="-1"><a class="header-anchor" href="#定义-code" aria-hidden="true">#</a> 定义 code</h2>
<p>Code 定义, Code 定义在 Action 文件中, Action 为 6 位的代码 例如错误代码为
100101, 一般对于 app 有独特错误的才会进行返回, 例如这里支付密码不正确,
需要重新设置/找回支付密码, app 拿到这个代码可以进行相应的提示,
而不能够根据返回的错误提示进行相应操作. 错误提示可以更改,
错误代码一旦定义则不能更改, 为了错误码集中统一使用单一的 AppError 来进行定义</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>10        # 代表的是模块的名称
  01      # 代表的是本模块的Action 编号
    01    # 代表本类的错误编码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="必须返回值" tabindex="-1"><a class="header-anchor" href="#必须返回值" aria-hidden="true">#</a> 必须返回值</h2>
<p>这里的返回值必须是 <code v-pre>true/false</code> , 如果是需要获取返回数值, 需要定义
<code v-pre>getXxx</code> 方法来获取</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// 使用
$Image = new Upload();
$image = (\Input::file('image'));
if ($Image->saveInput($image)) {
    return Resp::success('上传图成功!', [
        'url' => $Image->getUrl(),
    ]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>class 的定义</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * 图片上传
 */
class Upload
{

    use AppTrait;

    protected $destination = '';


    /**
     * doWhat
     * 保存内容或者流方式上传
     * @param $content
     * @return bool
     */
    public function saveInput($content)
    {
        // 磁盘对象
        $Disk = $this->storage();
      // ..

        $this->destination = $fileRelativePath;
        return true;
    }

    /**
     * 图片url的地址
     * @return string
     */
    public function getUrl()
    {
        ...
        return config('app.url') . '/uploads/' . $this->destination;
        ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑处理验证方式" tabindex="-1"><a class="header-anchor" href="#逻辑处理验证方式" aria-hidden="true">#</a> 逻辑处理验证方式</h2>
<p>这里我们以订单发布为例做下简单的说明 详细说明见注释
其中根据业务情况来进行处理, 有的可能不需要这种处理</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token comment">// 这里的 input 是从控制器获取过来的, 不允许从请求中获取</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">establish</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">,</span> <span class="token variable">$pay_pwd</span><span class="token punctuation">,</span> <span class="token variable">$order_type</span><span class="token punctuation">,</span> <span class="token variable">$type</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'plain'</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | 验证用户权限
    |--------------------------------------------------------------------------
    */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token function">checkPam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 需要明确的报错信息可以重写报错</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">setError</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'无用户信息, 无法进行发单操作'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

   <span class="token comment">/*
    |--------------------------------------------------------------------------
    | 获取数据, 后边直接用到的在这里直接定义出来
    |--------------------------------------------------------------------------
    */</span>
    <span class="token variable">$server_id</span>       <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span> <span class="token function">sys_get</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'server_id'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">...</span>
    <span class="token variable">$order_current</span>   <span class="token operator">=</span> <span class="token function">sys_get</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'order_title'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">/*
    |--------------------------------------------------------------------------
    | 和数据库字段相同的来组织数据
    |--------------------------------------------------------------------------
    */</span>
    <span class="token variable">$dbInit</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'order_title'</span>     <span class="token operator">=></span> <span class="token variable">$order_title</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
        <span class="token string single-quoted-string">'get_in_price'</span> <span class="token operator">=></span> <span class="token function">sys_get</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'get_in_price'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'hour'</span>         <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span> <span class="token function">sys_get</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'order_number'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | 数据合法性校验
    |--------------------------------------------------------------------------
    */</span>
    <span class="token variable">$validator</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Validator</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$dbInit</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'order_title'</span>     <span class="token operator">=></span> <span class="token string single-quoted-string">'required|string'</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
        <span class="token string single-quoted-string">'source_id'</span>       <span class="token operator">=></span> <span class="token string single-quoted-string">'numeric'</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'order_title.required'</span>    <span class="token operator">=></span> <span class="token string single-quoted-string">'订单标题不能为空'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'order_add_price.min'</span>     <span class="token operator">=></span> <span class="token string single-quoted-string">'溢价价格最低不能低于 1 元'</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$validator</span><span class="token operator">-></span><span class="token function">fails</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">setError</span><span class="token punctuation">(</span><span class="token variable">$validator</span><span class="token operator">-></span><span class="token function">errors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | 数据服务端验证合法性
    |--------------------------------------------------------------------------
    */</span>

    <span class="token comment">/* 游戏区服校验和完善
     -------------------------------------------- */</span>
    <span class="token variable">$codeRef</span>      <span class="token operator">=</span> <span class="token class-name static-context">GameServer</span><span class="token operator">::</span><span class="token function">codeRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$collCodeRef</span>  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Collection</span><span class="token punctuation">(</span><span class="token variable">$codeRef</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$serverFilter</span> <span class="token operator">=</span> <span class="token variable">$collCodeRef</span><span class="token operator">-></span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'server_id'</span><span class="token punctuation">,</span> <span class="token variable">$server_id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$serverFilter</span><span class="token operator">-></span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">setError</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'指定的游戏区服不存在'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | 操作权限验证 / 策略验证
    |--------------------------------------------------------------------------
    */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token function">policy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'pubCreate'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">pam</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">front</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | 处理数据
    |--------------------------------------------------------------------------
    */</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>DB</span><span class="token operator">::</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token variable">$createData</span><span class="token punctuation">,</span> <span class="token variable">$owner</span><span class="token punctuation">,</span> <span class="token variable">$ownerPam</span><span class="token punctuation">,</span> <span class="token variable">$totalNeedPrice</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token operator">...</span>
            <span class="token comment">/* 事务中抛出异常
           -------------------------------------------- */</span>
            <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">order</span> <span class="token operator">=</span> <span class="token class-name static-context">DailianOrder</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">$createData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">order</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TransactionException</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'创建订单失败, 请重试!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token operator">...</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Throwable</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">setError</span><span class="token punctuation">(</span><span class="token variable">$e</span><span class="token operator">-></span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意要点" tabindex="-1"><a class="header-anchor" href="#注意要点" aria-hidden="true">#</a> 注意要点</h2>
<p><strong>Action 中不得存在 log 日志</strong></p>
<p>Log 日志如果被 crontab
使用同时也被基本的信息错误调用便会出现权限不一致.</p>
<p><strong>必须修复所有的编辑器代码错误提示</strong></p>
<p>编辑器代码提示均可能存在 bug
或者优化项目</p>
<p><strong>Action 命名</strong></p>
<p>Action 命名不要和模型名称重复,
一般为一个单词, 例如账号管理使用 <code v-pre>Pam</code> 作为命名</p>
</div></template>


