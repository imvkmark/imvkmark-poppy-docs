<template><div><h1 id="批次更新" tabindex="-1"><a class="header-anchor" href="#批次更新" aria-hidden="true">#</a> 批次更新</h1>
<h2 id="访问地址" tabindex="-1"><a class="header-anchor" href="#访问地址" aria-hidden="true">#</a> 访问地址</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http://xxx.com/mgr-page/develop
点击 数据表更新
参数
[
  'method' => '模型名.类名',// 类名多个单词通过 '_' 拼接
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类的编写" tabindex="-1"><a class="header-anchor" href="#类的编写" aria-hidden="true">#</a> 类的编写</h2>
<p>在每个模块下 progress 文件夹下(没有新建)编写</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 类命名规范 数据表名+改动(自定义)+progress
class OrderHunterResultProgress implements Progress
{
  use FixTrait;


  /**
   * @return array fix
   */
  public function handle(): array
  {
    // 初始化 fix
    $this->fixInit();
    // 指定每次更新的条数
    $this->fix['section'] = 100;
    // 重新清理掉缓存
    if (!$this->fix['cached']) {
      $this->fix['cached'] = 1;
    }

    $Db = OrderHunter::where('first_result', '!=', '');

    if (!$this->fix['total']) {
      $this->fix['total'] = $Db->count();
    }
    if (!$this->fix['max']) {
      $this->fix['max'] = $Db->max('id');
    }
    if (!$this->fix['min']) {
      $this->fix['min'] = $Db->min('id');
    }

    // ↑↑↑↑↑↑↑↑↑↑↑   获取参数

    // 剩余数
    $this->fix['left'] = $Db->whereRaw('id > ?', [$this->fix['start']])
      ->count('id');

    $this->fix['lastId'] = $this->fix['start'];

    if ($this->fix['left']) {
      // 业务逻辑
      $left_items = OrderHunter::whereRaw('id >= ?', [$this->fix['start']])
        ->where('first_result', '!=', '')
        ->take($this->fix['section'])
        ->orderBy('id', 'asc')
        ->get(['id']);
      foreach ($left_items as $item) {
        self::normal($item->id);
        $this->fix['lastId'] = $item->id + 1;
      }
    }

    return $this->fix;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


