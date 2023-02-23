<template><div><h1 id="模型-v1-0" tabindex="-1"><a class="header-anchor" href="#模型-v1-0" aria-hidden="true">#</a> 模型 v1.0</h1>
<blockquote>
<p>Lemon Framework (柠檬框架 ps:LF) 由 Sour-Lemon 团队(SL Team) 协力打造</p>
</blockquote>
<h2 id="命名及放置位置" tabindex="-1"><a class="header-anchor" href="#命名及放置位置" aria-hidden="true">#</a> 命名及放置位置</h2>
<h3 id="放置位置" tabindex="-1"><a class="header-anchor" href="#放置位置" aria-hidden="true">#</a> 放置位置</h3>
<p>模型文件统一放置在 <code v-pre>~/app/Models/</code> 文件夹下</p>
<h3 id="命名" tabindex="-1"><a class="header-anchor" href="#命名" aria-hidden="true">#</a> 命名</h3>
<p><strong>模型文件使用 首字母大写的驼峰方式</strong></p>
<p>例如 约定的数据表的名称是 <code v-pre>base_banword</code>, 命名的数据库模型是 <code v-pre>BaseBanword</code></p>
<p><strong>模型采用分组</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>base
pam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="映射" tabindex="-1"><a class="header-anchor" href="#映射" aria-hidden="true">#</a> 映射</h2>
<h3 id="表-主键" tabindex="-1"><a class="header-anchor" href="#表-主键" aria-hidden="true">#</a> 表/主键</h3>
<ul>
<li><code v-pre>$table</code> 定义的是原始表的名称</li>
<li><code v-pre>$primaryKey</code> 定义的是主键</li>
</ul>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<p>模型映射采用 <code v-pre>sofa/eloquence</code> 框架, 使用字段的映射</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Models</span><span class="token punctuation">;</span>

<span class="token comment"># 引入字段映射的类库</span>
<span class="token keyword">use</span> <span class="token package">Sofa<span class="token punctuation">\</span>Eloquence<span class="token punctuation">\</span>Eloquence</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Sofa<span class="token punctuation">\</span>Eloquence<span class="token punctuation">\</span>Mappable</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">BaseBanip</span> <span class="token keyword">extends</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Eloquent</span> <span class="token punctuation">{</span>

    <span class="token keyword">use</span> <span class="token package">Eloquence</span><span class="token punctuation">,</span> Mappable<span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token variable">$table</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'banip'</span><span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token variable">$primaryKey</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'itemid'</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token variable">$timestamps</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>

  <span class="token comment"># 这里是默认的填充的数据, 是新结构表的名称</span>
    <span class="token keyword">protected</span> <span class="token variable">$fillable</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'ip'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'editor'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'add_time'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'to_time'</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment"># 这里定义的是字段映射</span>
    <span class="token comment"># key : 新字段</span>
    <span class="token comment"># value: 老字段</span>
    <span class="token keyword">protected</span> <span class="token variable">$maps</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'add_timestamp'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'addtime'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'to_timestamp'</span>  <span class="token operator">=></span> <span class="token string single-quoted-string">'totime'</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="映射的字段" tabindex="-1"><a class="header-anchor" href="#映射的字段" aria-hidden="true">#</a> 映射的字段</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>totime   => to_timestamp
addtime  => add_datetime
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<p><strong>参考资料</strong> - 插件地址: https://github.com/jarektkaczyk/eloquence - 文档地址: https://github.com/jarektkaczyk/eloquence/wiki</p>
<p><strong>常用函数</strong> &gt; 这里只是支持常用的<code v-pre>where</code>, <code v-pre>select</code> 等方式的调用, 对于 <code v-pre>updateOrCreate</code> 这种方式暂不支持</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token comment">// 是否存在列</span>
<span class="token class-name static-context">BaseBanword</span><span class="token operator">::</span><span class="token function">hasColumn</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'replace_to'</span><span class="token punctuation">)</span>        <span class="token comment">// bool</span>
 
<span class="token comment">// 获取列</span>

<span class="token class-name static-context">BaseBanword</span><span class="token operator">::</span><span class="token function">getColumnListing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">// array</span>

<span class="token comment">// where</span>
<span class="token class-name static-context">BaseBanword</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'replace_to'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'some_value'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建</span>
<span class="token class-name static-context">BaseBanword</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'replace_from'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'优衣库'</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'replace_to'</span>   <span class="token operator">=></span> <span class="token string single-quoted-string">'妞妞'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2>
<p>这里的注释必须放置在类文件中进行定义, 里边的字段值出现的仅仅是新模块使用的, 包含兼容, 但是不包含调用的字段命名.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token doc-comment comment">/**
 * App\Models\BaseBanword
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token keyword">integer</span></span>        <span class="token parameter">$item_id</span>      id 
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token keyword">string</span></span>         <span class="token parameter">$replace_from</span> 需要替换的词
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token keyword">string</span></span>         <span class="token parameter">$replace_to</span>   替换为
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token keyword">boolean</span></span>        <span class="token parameter">$deny</span>         是否进行拦截(0,1)
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>Carbon</span> <span class="token parameter">$created_at</span>   创建时间
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>Carbon</span> <span class="token parameter">$deleted_at</span>   删除时间
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>Carbon</span> <span class="token parameter">$updated_at</span>   更新时间
 */</span> 
<span class="token keyword">class</span> <span class="token class-name-definition class-name">BaseBanword</span> <span class="token keyword">extends</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\</span>Eloquent</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模型定义" tabindex="-1"><a class="header-anchor" href="#模型定义" aria-hidden="true">#</a> 模型定义</h2>
<h3 id="kv-定义" tabindex="-1"><a class="header-anchor" href="#kv-定义" aria-hidden="true">#</a> kv 定义</h3>
<p>开发中不允许出现状态是 1, 2, 3, 所有的对应项目必须在模型中给予定义, 采用常量的方式进行定义</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * 锁定/解锁
 * @param null $key
 * @return array|mixed
 */
public static function kvLock($key = null) {
    $desc = [
        self::LOCK_LOCK   => '锁定',
        self::LOCK_UNLOCK => '解锁',
    ];
    return kv($key);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enum-的使用" tabindex="-1"><a class="header-anchor" href="#enum-的使用" aria-hidden="true">#</a> Enum 的使用</h3>
<p>开发中使用<code v-pre>常量</code>来替代 <code v-pre>enum</code>, 不得使用 <code v-pre>enum</code> 来对数据库进行枚举, 公共的定义放置在<code v-pre>BaseConfig</code> 中</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class BaseConfig{
    const YES = 1;
    const NO  = 0;

    public static function kvYn($key = null) {
            $desc = [
              self::YES   => '是',
              self::NO    => '否',
         ];
         return kv($key);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关联关系的命名" tabindex="-1"><a class="header-anchor" href="#关联关系的命名" aria-hidden="true">#</a> 关联关系的命名</h3>
<p>对于关联关系的命名, 采用简写格式. 例如我们需要关联用户表, 模型中需要如下定义</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class FinanceCash{
    // ...
    public function pam() {
        return $this->belongsTo('App\Models\PamAccount', 'account_id', 'account_id');
    }
    // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据表字段" tabindex="-1"><a class="header-anchor" href="#数据表字段" aria-hidden="true">#</a> 数据表字段</h2>
<h3 id="数据表命名原则" tabindex="-1"><a class="header-anchor" href="#数据表命名原则" aria-hidden="true">#</a> 数据表命名原则</h3>
<ul>
<li>注释唯一 例如 group_id 仅仅是会员组ID</li>
<li>模块分组 pam 作为权限验证组 plugin 作为插件组</li>
</ul>
<h3 id="数据表常用字段" tabindex="-1"><a class="header-anchor" href="#数据表常用字段" aria-hidden="true">#</a> 数据表常用字段</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>item_id     : 条目ID
area_id     : 地区ID
cat_id      : 分类ID
type_id     : 类型ID
userid      : 用户ID
username    : 用户名
module_id   : 模块ID
add_time    : unix 时间戳
created_at  : datetime 类型 , L5 默认创建时间
deleted_at  : l5 软删除
updated_at  : l5 更新
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h2>
<h3 id="表创建" tabindex="-1"><a class="header-anchor" href="#表创建" aria-hidden="true">#</a> 表创建</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$tb_pam   = (new PamAccount())->getTable();
$tb_ft    = (new AccountFront())->getTable();
$Db = \DB::table($tb_pam)->where('account_type', 'front');
$Db->where($tb_pam . '.account_id', '!=', \FrontAuth::id());
$Db->join($tb_ft, $tb_pam . '.account_id', '=', $tb_ft . '.account_id');
$accounts = $Db->paginate(16);
$accounts->appends($request->input());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="like搜索" tabindex="-1"><a class="header-anchor" href="#like搜索" aria-hidden="true">#</a> like搜索</h3>
<p><strong>多字段like</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$kw = $request->input('kw');
if ($kw) {
    $Db->where(function($query) use ($kw, $tb_weixin){
        $query->orWhere($tb_weixin.'.wx_account', 'like', '%'.$kw.'%');
        $query->orWhere($tb_weixin.'.wx_account', 'like', '%'.$kw.'%');
    });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>单字段 like</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$account_name = $request->input('account_name');
if ($account_name) {
    $Db->where($tb_pam . '.account_name', 'like', '%' . $account_name . '%');
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="普通搜索" tabindex="-1"><a class="header-anchor" href="#普通搜索" aria-hidden="true">#</a> 普通搜索</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$wx_status = $request->input('wx_status');
if ($wx_status) {
    $Db->where('wx_status', $wx_status);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$orderKey = in_array(SysSearch::key(), [
    'wx_fans',
]) ? SysSearch::key() : 'created_at';
$Db->orderBy($tb_weixin . '.' . $orderKey, SysSearch::order());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


