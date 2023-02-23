<template><div><h1 id="模型" tabindex="-1"><a class="header-anchor" href="#模型" aria-hidden="true">#</a> 模型</h1>
<h2 id="命名及放置位置" tabindex="-1"><a class="header-anchor" href="#命名及放置位置" aria-hidden="true">#</a> 命名及放置位置</h2>
<h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h3>
<p>使用 <code v-pre>php artisan poppy:model {module} {DbModel}</code> 来生成模型</p>
<p>模型文件统一放置在 <code v-pre>~/modules/{module}/src/models/</code> 文件夹下,
这个文件夹中包含 4 中类型的数据</p>
<ul>
<li>模型</li>
<li>筛选过滤器</li>
<li>策略</li>
<li>接口资源文件</li>
</ul>
<p>配置项目</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 指定表名
protected $table = '';

# 指定主键, 如果 主键为 'id' 可以不用指定默认值
protected $primaryKey = '';

# 指定插入数据库字段
protected $fillable = [];

# 时间是否自动维护, (false 不自动维护,true 自动维护) 默认true
protected $timestamp = false;

# 时间类型 例:  logined_at, disabled_at  要放在
protected $dates = [
    'logined_at',
    'disabled_at',
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>模型</strong>:</p>
<p>模型文件放置在上述文件夹中的根目录( <code v-pre>~</code>  )下,命名与数据表名称相对应</p>
<p><strong>筛选过滤器</strong></p>
<p>放置位置 : <code v-pre>~/filters</code>
文件命名 : 模型名称+Filter 例如 :
(<code v-pre>PamAccountFilter</code>)</p>
<p><strong>策略</strong></p>
<p>放置位置 :
<code v-pre>~/policies</code>
文件命名 :
模型名称+Policy 例如 : (<code v-pre>PamAccountPolicy</code>)</p>
<p><strong>资源文件(接口资源)</strong>:</p>
<p>放置位置 : <code v-pre>~/resources</code>
文件命名 : 模型名称+Resource 例如 😦<code v-pre>PamAccountResource</code>)</p>
<h3 id="模型注释" tabindex="-1"><a class="header-anchor" href="#模型注释" aria-hidden="true">#</a> 模型注释</h3>
<p>模型需要有完备的文档注释, 日期格式和文字说明, 并且需要参数和注释对齐</p>
<p>使用 <code v-pre>ide-helper</code> 生成模型文档语法</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ php artisan ide-helper:model "System\Models\PamAccount"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>模型注释需要导入提示, 在 PHPstorm 中需要 <code v-pre>alt+enter</code> 进行 <code v-pre>Import Class</code>
或者 <code v-pre>Simplify FQN</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token comment"># bad</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">\</span>Carbon<span class="token punctuation">\</span>Carbon</span>    <span class="token parameter">$created_at</span>
 */</span>

 <span class="token doc-comment comment">/**
 * <span class="token keyword">@property</span> <span class="token class-name">Carbon</span>    <span class="token parameter">$created_at</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完整注释" tabindex="-1"><a class="header-anchor" href="#完整注释" aria-hidden="true">#</a> 完整注释</h3>
<p>这里的注释必须放置在类文件中进行定义,
里边的字段值出现的仅仅是新模块使用的, 包含兼容,
但是不包含调用的字段命名.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token doc-comment comment">/**
 * System\BaseBanword
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存储为 datetime 类型的数字放到 $dates 数组中</p>
<h3 id="命名" tabindex="-1"><a class="header-anchor" href="#命名" aria-hidden="true">#</a> 命名</h3>
<p><strong>模型文件使用 首字母大写的驼峰方式</strong></p>
<p>例如 约定的数据表的名称是 <code v-pre>base_config</code>, 命名的数据库模型是 <code v-pre>BaseConfig</code></p>
<p><strong>模型采用分组</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>base    # 后台
pam     # 用户身份认证
order   # 订单
message # 消息
user    # 用户
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php namespace {Module}\Models;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="表-主键" tabindex="-1"><a class="header-anchor" href="#表-主键" aria-hidden="true">#</a> 表/主键</h3>
<ul>
<li><code v-pre>$table</code> 定义的是原始表的名称</li>
<li><code v-pre>$primaryKey</code> 定义的是主键</li>
</ul>
<h4 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h4>
<ul>
<li>字串默认值必须是 ''</li>
<li>数值必须存在默认值, 默认值为 0 (根据业务需求来定义)</li>
<li>唯一 字段映射的唯一性 例如 group_id 仅仅是会员组 ID</li>
<li>模块分组 pam 作为权限验证组</li>
<li>使用最简略命名 username</li>
<li>数据库相关属性的字段放置在一起</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>disable_reason
disabled_from_at
disabled_to_at
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模型定义" tabindex="-1"><a class="header-anchor" href="#模型定义" aria-hidden="true">#</a> 模型定义</h4>
<h4 id="kv-定义" tabindex="-1"><a class="header-anchor" href="#kv-定义" aria-hidden="true">#</a> kv 定义</h4>
<p>开发中不允许出现状态是 1, 2, 3, 所有的对应项目必须在模型中给予定义,
采用常量的方式进行定义</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>const LOCK_LOCK    = 1;
const LOCK_UNLOCK  = 0;

/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enum-的使用" tabindex="-1"><a class="header-anchor" href="#enum-的使用" aria-hidden="true">#</a> Enum 的使用</h3>
<p>开发中使用<code v-pre>常量</code>来替代 <code v-pre>enum</code>, 不得使用 <code v-pre>enum</code> 来对数据库进行枚举,
公共的定义放置在<code v-pre>BaseConfig</code> 中</p>
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
<p>对于关联关系的命名, 采用简写格式. 例如我们需要关联用户表,
模型中需要如下定义</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class FinanceCash{
    // ...
    public function pam() {
        return $this->belongsTo(App\Models\PamAccount::class, 'account_id', 'account_id');
    }
    // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在代码中调用模型注释" tabindex="-1"><a class="header-anchor" href="#在代码中调用模型注释" aria-hidden="true">#</a> 在代码中调用模型注释</h3>
<h4 id="注释调用" tabindex="-1"><a class="header-anchor" href="#注释调用" aria-hidden="true">#</a> 注释调用</h4>
<p>例如以下这个模型</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>...
* @property int    $login_times  登录次数[成功请求接口便认定为1次]
...
class PamAccount extends \Eloquent
{
   ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用 <code v-pre>sys_db('pam_account.login_times')</code> 便可以获取</p>
<ul>
<li><code v-pre>pam_account</code> 是模型的蛇形写法</li>
<li><code v-pre>login_times</code> 是字段名称</li>
</ul>
<p>这里注意的是, 注释中 <code v-pre>[]</code> 内的内容认定为模型注释, 不必进行返回</p>
<h4 id="注释更新" tabindex="-1"><a class="header-anchor" href="#注释更新" aria-hidden="true">#</a> 注释更新</h4>
<p>如果注释更新之后模型中调用没有获取到最新的, 清空下缓存即可.</p>
<h2 id="数据表字段" tabindex="-1"><a class="header-anchor" href="#数据表字段" aria-hidden="true">#</a> 数据表字段</h2>
<h3 id="数据表常用字段" tabindex="-1"><a class="header-anchor" href="#数据表常用字段" aria-hidden="true">#</a> 数据表常用字段</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>id               : 条目ID
name             : 标示符, 只能是 英文
title            : 标题
account_id       : 用户ID
username         : 用户名
created_at       : datetime 类型 , L5 默认创建时间
deleted_at       : l5 软删除(项目中不推荐使用, 效率低下)
updated_at       : l5 更新
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库索引" tabindex="-1"><a class="header-anchor" href="#数据库索引" aria-hidden="true">#</a> 数据库索引</h2>
<h3 id="索引命名" tabindex="-1"><a class="header-anchor" href="#索引命名" aria-hidden="true">#</a> 索引命名</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 索引(index)
item            k_base_config_item

# 唯一验证(unique)
account_name    u_account_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<h2 id="表创建" tabindex="-1"><a class="header-anchor" href="#表创建" aria-hidden="true">#</a> 表创建</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$tb_pam   = (new PamAccount())->getTable();
$tb_ft    = (new AccountFront())->getTable();
$Db = \DB::table($tb_pam)->where('account_type', 'front');
$Db->where($tb_pam . '.account_id', '!=', \FrontAuth::id());
$Db->join($tb_ft, $tb_pam . '.account_id', '=', $tb_ft . '.account_id');
$accounts = $Db->paginate(16);
$accounts->appends($request->input());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="like-搜索" tabindex="-1"><a class="header-anchor" href="#like-搜索" aria-hidden="true">#</a> like 搜索</h3>
<p><strong>多字段 like</strong></p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="建表规范" tabindex="-1"><a class="header-anchor" href="#建表规范" aria-hidden="true">#</a> 建表规范</h2>
<ul>
<li>数据类型尽量用数字类型，数字类型的比字符类型的要快很多，比如使用 INT
UNSIGNED 存储 IP</li>
<li>大数据字段最好剥离出单独的表，以便影响性能</li>
<li>使用 varchar，代替 char，这是因为 varchar 会动态分配长度</li>
<li>数据类型尽量小，这里的尽量小是指在满足可以预见的未来需求的前提下的,但是有不能太小，所以在建表的时候一定要预估这个字段最大的长度到底是多少</li>
<li>不允许 NULL，用 NOT NULL+DEFAULT 的值来代替</li>
<li>少用 TEXT 和 IMAGE，二进制字段的读写是比较慢的，而且，读取的方法也不多，大部分情况下最好不用</li>
<li>表名 字段名字统一用小写</li>
<li>字段名字不要用驼峰命名法 比如 add_time 不要写成 AddTime</li>
<li>字段命名关键字统一用下划线&quot;_&quot;分割，一般采用简写，关键字要准确，不能有歧义</li>
<li>所有的表必须包含 id（自增主键），add_time（新增时间），update_time（更新时间），mark（删除标记
）这 3 个字段</li>
<li>每个字段的 COMMENT 必须写清楚，枚举类型必须写清楚每个值到底是什么意思，枚举的写法统一成&quot;删除标记（0：未删除，1：已经删除）&quot;，符号为中文符号</li>
<li>update_time（更新时间）字段自动修改。<code v-pre>update_time</code> timestamp NOT
NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT
'更新时间 '</li>
<li>时间类型尽量用 timestamp 4 个字节,而不用 datetime
8 个字节。只用表示日期的字段用 date 类型</li>
<li>建表语句不允许包含外键</li>
<li>库、表、字段字符集统一使用 UTF8。</li>
</ul>
</div></template>


