<template><div><h1 id="模型-v2-0" tabindex="-1"><a class="header-anchor" href="#模型-v2-0" aria-hidden="true">#</a> 模型 v2.0</h1>
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
<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2>
<p>这里的注释必须放置在类文件中进行定义, 里边的字段值出现的仅仅是新模块使用的, 包含兼容, 但是不包含调用的字段命名.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/** * App\Models\BaseBanword * @property integer        $item_id      id * @property string         $replace_from 需要替换的词 * @property string         $replace_to   替换为 * @property boolean        $deny         是否进行拦截(0,1) * @property \Carbon\Carbon $created_at   创建时间 * @property \Carbon\Carbon $deleted_at   删除时间 * @property \Carbon\Carbon $updated_at   更新时间 */ class BaseBanword extends \Eloquent {     ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h2>
<ul>
<li>字串默认值必须是 ’’</li>
<li>数值必须存在默认值, 默认值为 0 (根据业务需求来定义)</li>
<li>注释唯一 例如 group_id 仅仅是会员组ID</li>
<li>模块分组 pam 作为权限验证组 plugin 作为插件组</li>
<li>使用最简略命名 username</li>
<li>数据库相关属性的字段放置在一起</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>disable_reason
disabled_from_at
disabled_to_at
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模型定义" tabindex="-1"><a class="header-anchor" href="#模型定义" aria-hidden="true">#</a> 模型定义</h2>
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
        return $this->belongsTo(App\Models\PamAccount::class, 'account_id', 'account_id');
    }
    // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据表字段" tabindex="-1"><a class="header-anchor" href="#数据表字段" aria-hidden="true">#</a> 数据表字段</h2>
<h3 id="数据表常用字段" tabindex="-1"><a class="header-anchor" href="#数据表常用字段" aria-hidden="true">#</a> 数据表常用字段</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>id               : 条目ID
name             : 标示符, 只能是 英文
title            : 标题
account_id       : 用户ID
username         : 用户名
add_timestamp    : unix 时间戳
created_at       : datetime 类型 , L5 默认创建时间
deleted_at       : l5 软删除
updated_at       : l5 更新
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库索引" tabindex="-1"><a class="header-anchor" href="#数据库索引" aria-hidden="true">#</a> 数据库索引</h2>
<h3 id="索引命名" tabindex="-1"><a class="header-anchor" href="#索引命名" aria-hidden="true">#</a> 索引命名</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 索引(index)
item            k_base_config_item

# 唯一验证(unique)
account_name    u_account_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="建表规范" tabindex="-1"><a class="header-anchor" href="#建表规范" aria-hidden="true">#</a> 建表规范</h2>
<ul>
<li>数据类型尽量用数字类型，数字类型的比字符类型的要快很多，比如使用INT UNSIGNED存储IP</li>
<li>大数据字段最好剥离出单独的表，以便影响性能</li>
<li>使用varchar，代替char，这是因为varchar会动态分配长度</li>
<li>数据类型尽量小，这里的尽量小是指在满足可以预见的未来需求的前提下的,但是有不能太小，所以在建表的时候一定要预估这个字段最大的长度到底是多少</li>
<li>不允许NULL，用NOT NULL+DEFAULT 的值来代替</li>
<li>少用TEXT和IMAGE，二进制字段的读写是比较慢的，而且，读取的方法也不多，大部分情况下最好不用</li>
<li>表名 字段名字统一用小写</li>
<li>字段名字不要用驼峰命名法 比如add_time 不要写成AddTime</li>
<li>字段命名关键字统一用下划线&quot;_&quot;分割，一般采用简写，关键字要准确，不能有歧义</li>
<li>所有的表必须包含id（自增主键），add_time（新增时间），update_time（更新时间），mark（删除标记 ）这3个字段</li>
<li>每个字段的COMMENT必须写清楚，枚举类型必须写清楚每个值到底是什么意思，枚举的写法统一成“删除标记（0：未删除，1：已经删除）”，符号为中文符号</li>
<li>update_time（更新时间）字段自动修改。<code v-pre>update_time</code> timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT ‘更新时间’</li>
<li>时间类型尽量用 timestamp 4个字节,而不用datetime 8个字节。只用表示日期的字段用date类型</li>
<li>建表语句不允许包含外键</li>
<li>库、表、字段字符集统一使用UTF8。</li>
</ul>
</div></template>


