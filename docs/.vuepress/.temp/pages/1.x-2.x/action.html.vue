<template><div><h1 id="action-业务逻辑封装" tabindex="-1"><a class="header-anchor" href="#action-业务逻辑封装" aria-hidden="true">#</a> Action 业务逻辑封装</h1>
<h2 id="位置" tabindex="-1"><a class="header-anchor" href="#位置" aria-hidden="true">#</a> 位置</h2>
<p>位置 <code v-pre>app/Lemon/Dailian/Action</code></p>
<h2 id="写法要求" tabindex="-1"><a class="header-anchor" href="#写法要求" aria-hidden="true">#</a> 写法要求</h2>
<h3 id="必须写注释" tabindex="-1"><a class="header-anchor" href="#必须写注释" aria-hidden="true">#</a> 必须写注释</h3>
<p>这里的注释在使用 WebStorm 的时候可以自动生成 <code v-pre>/**</code> 所有的函数都需要按照这种格式来写</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * 创建|编辑订单
 * @param array  $input      订单数据
 * @param string $pay_pwd    支付密码
 * @param string $order_type 操控类型  [create|创建,edit|编辑]
 * @param string $type       支付密码传递方式
 * @return bool
 */
public function establish($input, $pay_pwd, $order_type, $type = 'plain')
{
   ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="必须返回值" tabindex="-1"><a class="header-anchor" href="#必须返回值" aria-hidden="true">#</a> 必须返回值</h3>
<p>这里的返回值必须是 <code v-pre>true/false</code> , 如果是需要获取返回数值, 需要定义 <code v-pre>getXxx</code> 方法来获取</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// 使用
$Image = new ActionUpload();
$image = (\Input::file('image'));
if ($Image->saveInput($image)) {
    return AppMsg::resp(['system.success', '上传图成功!'], [
        'url' => $Image->getUrl(),
    ]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>class 的定义</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * 图片上传
 */
class ActionUpload
{

    use AppTrait;

    protected $destination = '';

    /**
     * 保存内容或者流方式上传
     * @param $content
     * @return bool
     */
    public function saveInput($content)
    {
        // 磁盘对象
        $Disk = $this->storage();

        $fileRelativePath = $this->genRelativePath();
        $Disk->put($fileRelativePath, $content);

        // 缩放图片
        $Image = \Image::make(disk_path($this->disk) . $fileRelativePath);
        $Image->save(null, 60);

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需要引入-apptrait" tabindex="-1"><a class="header-anchor" href="#需要引入-apptrait" aria-hidden="true">#</a> 需要引入 AppTrait</h3>
<p><code v-pre>AppTrait</code> 封装了权限处理, 错误设置, 用户设置, 用户检测等方法, 需要封装时候进行调用.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>class ActionUpload
{
    use AppTrait;

    // logic code

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑处理验证方式" tabindex="-1"><a class="header-anchor" href="#逻辑处理验证方式" aria-hidden="true">#</a> 逻辑处理验证方式</h3>
<p>这里我们以订单发布为例做下简单的说明 详细说明见注释 其中根据业务情况来进行处理, 有的可能不需要这种处理</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>public function establish($input, $pay_pwd, $order_type, $type = 'plain')
{
    /*
    |--------------------------------------------------------------------------
    | 验证用户权限
    |--------------------------------------------------------------------------
    */
    if (!$this->checkFront()) {
        return $this->setError('无用户信息, 无法进行发单操作');
    }

   /*
    |--------------------------------------------------------------------------
    | 获取数据, 后边直接用到的在这里直接定义出来
    |--------------------------------------------------------------------------
    */
    $server_id       = intval(array_get($input, 'server_id', 0));
    ...
    $order_current   = trim(array_get($input, 'order_title'));

   /*
    |--------------------------------------------------------------------------
    | 和数据库字段相同的来组织数据
    |--------------------------------------------------------------------------
    */
    $dbInit = [
        'order_title'     => $order_title,
        ...

        'get_in_price' => array_get($input, 'get_in_price'),
        'order_number' => array_get($input, 'order_number'),
    ];

    /*
    |--------------------------------------------------------------------------
    | 数据合法性校验
    |--------------------------------------------------------------------------
    */
    $validator = \Validator::make($dbInit, [
        'order_title'     => 'required|string',
        ...
        'source_id'       => 'numeric',
    ], [
        'order_title.required'    => '订单标题不能为空',
        'order_add_price.min'     => '溢价价格最低不能低于 1 元',
    ]);
    if ($validator->fails()) {
        return $this->setError($validator->errors());
    }

    /*
    |--------------------------------------------------------------------------
    | 数据服务端验证合法性
    |--------------------------------------------------------------------------
    */

    /* 游戏区服校验和完善
     -------------------------------------------- */
    $codeRef      = GameServer::codeRef();
    $collCodeRef  = new Collection($codeRef);
    $serverFilter = $collCodeRef->where('server_id', $server_id);
    if (!$serverFilter->count()) {
        return $this->setError('指定的游戏区服不存在');
    }

    /*
    |--------------------------------------------------------------------------
    | 操作权限验证 / 策略验证
    |--------------------------------------------------------------------------
    */
    if (!$this->policy('pubCreate', [$this->pam, $this->front])) {
        return false;
    }

    /*
    |--------------------------------------------------------------------------
    | 处理数据
    |--------------------------------------------------------------------------
    */
    try {
        return \DB::transaction(function () use ($createData, $owner, $ownerPam, $totalNeedPrice) {

            ...
            /* 事务中抛出异常
           -------------------------------------------- */
            $this->order = DailianOrder::create($createData);
            if (!$this->order) {
                throw new TransactionException('创建订单失败, 请重试!');
            }
            ...

            return true;
        });
    } catch (\Exception $e) {
        return $this->setError($e->getMessage());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


