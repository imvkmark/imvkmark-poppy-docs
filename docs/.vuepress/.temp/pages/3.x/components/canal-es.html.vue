<template><div><h1 id="canales-同步导入监听组件" tabindex="-1"><a class="header-anchor" href="#canales-同步导入监听组件" aria-hidden="true">#</a> CanalEs - 同步导入监听组件</h1>
<blockquote>
<p>一个把 <code v-pre>Mysql</code> 表数据导入到 <code v-pre>Es</code> 的工具.</p>
</blockquote>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<h3 id="env-配置" tabindex="-1"><a class="header-anchor" href="#env-配置" aria-hidden="true">#</a> Env 配置</h3>
<ul>
<li><code v-pre>.env</code>文件中配置对应的<code v-pre>Mysql</code>连接信息及<code v-pre>Es</code>配置信息</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#  db
#-------------------------------------------------------
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=
DB_USERNAME=root
DB_PASSWORD=
DB_CHARSET=utf8mb4
DB_COLLATION=utf8mb4_unicode_ci

#  es
#-------------------------------------------------------
ELASTICSEARCH_CONCURRENCY=100
ELASTICSEARCH_USER=
ELASTICSEARCH_PASS=
#------------- scheme://host:port;scheme2://host2:port2 -------------#
ELASTICSEARCH_HOSTS=http://127.0.0.1:9200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引配置" tabindex="-1"><a class="header-anchor" href="#索引配置" aria-hidden="true">#</a> 索引配置</h3>
<p>此项目读取 <code v-pre>poppy.canal-es</code>  配置详细配置以及说明如下</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// canal 配置, 监听的主机
'canal'  => [
    'client_type'     => CanalClient::TYPE_SWOOLE,
    'host'            => env('CANAL_HOST', '127.0.0.1'),
    'port'            => env('CANAL_PORT', 11111),
    'client_id'       => env('CANAL_CLIENT_ID', 1001),
    'connect_timeout' => env('CANAL_CONNECT_TIMEOUT', 10),
    'message_size'    => 100,
],

// filter .*\\..*,shop.user

'mapper' => [
    // key 定义的是索引的名称
    'example_key'  => [
        // 文件格式工具, 当数据从库中取出来之后传递给es之前进行的数据处理
        'formatter'   => '',
        // 文件索引属性定义, 创建索引所需的数据
        'property'    => CsdnUser::class,
        // 数据表, 用于导入的表名称获取
        'table'       => 'canal_example.csdn_users',
        // canal 的 instance 名称
        'destination' => 'csdn_user',
        // 监听 canal 数据变动
        'filter'      => 'canal_example.csdn_users',
    ],
],

'elasticsearch' => [
    'concurrency' => env('ELASTICSEARCH_CONCURRENCY', 100),

    'hosts' => value(function () {
        $settings = env('ELASTICSEARCH_HOSTS');
        $hosts    = array_filter(explode(';', $settings));

        return $hosts ? array_map(function ($url) {
            return array_merge(parse_url($url), [
                'user' => env('ELASTICSEARCH_USER', null),
                'pass' => env('ELASTICSEARCH_PASS', null),
            ]);
        }, $hosts) : [
            [
                'host'   => '127.0.0.1',
                'port'   => '9200',
                'scheme' => 'http',
                'user'   => env('ELASTICSEARCH_USER', null),
                'pass'   => env('ELASTICSEARCH_PASS', null),
            ],
        ];
    }),
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引" aria-hidden="true">#</a> 创建索引</h2>
<p>执行<code v-pre>index:create</code>命令,即可创建指定名称的索引</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan ce:create-index index-name <span class="token punctuation">[</span>-p property class<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>设置<code v-pre>Mappings</code>并创建索引</strong></p>
<ul>
<li>创建<code v-pre>Property</code>类并且继承 <code v-pre>\Poppy\CanalEs\Classes\Properties\Property</code> 类,编写需要指定的字段及类型</li>
</ul>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Properties</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package"><span class="token punctuation">\</span>Poppy<span class="token punctuation">\</span>CanalEs<span class="token punctuation">\</span>Classes<span class="token punctuation">\</span>Properties<span class="token punctuation">\</span>Property</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">Property</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'id'</span>       <span class="token operator">=></span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">'type'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'keyword'</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'name'</span>     <span class="token operator">=></span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">'type'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'text'</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'login_at'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">'type'</span>   <span class="token operator">=></span> <span class="token string single-quoted-string">'date'</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">'format'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'yyyy-MM-dd HH:mm:ss'</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>执行命令</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan ce:create-index example <span class="token parameter variable">-p</span> <span class="token string">"\App\Properties<span class="token entity" title="\E">\E</span>xample"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="导入mysql数据到-es" tabindex="-1"><a class="header-anchor" href="#导入mysql数据到-es" aria-hidden="true">#</a> 导入<code v-pre>Mysql</code>数据到 Es</h2>
<p>执行<code v-pre>import</code>命令即可把指定数据表的数据导入到 Es 中</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan ce:import tb_name <span class="token punctuation">[</span>--index tb_name<span class="token punctuation">]</span> <span class="token punctuation">[</span>--size <span class="token number">10000</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--start <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--end <span class="token number">100000</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-f <span class="token function">format</span> class<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p
property class<span class="token punctuation">]</span> <span class="token punctuation">[</span>-v<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong></p>
<ul>
<li><code v-pre>index</code>   目标索引名称,不传递默认与数据表同名</li>
<li><code v-pre>size</code>     每批查询的数据表数量,默认<code v-pre>10000</code></li>
<li><code v-pre>start</code>   导入数据起始 id</li>
<li><code v-pre>end</code>     导入数据截止 id</li>
<li><code v-pre>p</code>       查询数据表的字段, 默认查询全部</li>
<li><code v-pre>v</code>       Debug Mode, 支持输出执行时候的 Sql 输出</li>
<li><code v-pre>f</code>       导入数据格式化文件</li>
</ul>
</div></template>


