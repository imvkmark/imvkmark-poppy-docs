# Form

表单支持对数据的创建以及编辑

## 创建表单

**继承方式**
表单继承了 `FormWidget`

```php
class FormBanEstablish extends FormWidget
{
    // 设置标题
    protected string $title = '新增';

    // 获取路由参数或者 Query 参数用于初始化
    public function __construct()
    {
        parent::__construct();
        $this->id = Route::input('id');
    }

    // 对数据的处理, 这里的执行在表单验证过之后触发
    public function handle()
    {
        $scope                 = input(Scope::QUERY_NAME);
        $input                 = input();
        $input['account_type'] = $scope;

        $Ban = new Ban();
        if (!$Ban->establish($input)) {
            return Resp::error($Ban->getError());
        }

        return Resp::success('操作成功', 'motion|grid:reload');
    }

    // 返回模型数据
    public function data(): array
    {
        if ($this->id) {
            $pam = PamBan::findOrFail($this->id);
            return Arr::pluck($pam, ['type', 'value', 'note']);
        }
        return [];
    }

    // 定义表单
    public function form()
    {
        $this->select('type', '类型')->options(PamBan::kvType())->rules([
            Rule::required()
        ]);
        $this->text('value', '限制值')->rules([
            Rule::required()
        ])->help("如果是Ip支持如下几种格式 :  固定IP(192.168.1.1) ; IP段 : (192.168.1.1-192.168.1.21);  IP 掩码(192.168.1.1/24); IP 通配符(192.168.1.*)");
        $this->text('note', '备注');
    }
}
```

**简易方式**

> 开发中...

## 组件

下面对组件进行相应的介绍, 所有使用方式以以上两种方式为主

## Table

表格组件, 支持行内编辑

```php
// 这个表格支持编辑模式
class FormTableEstablish extends FormWidget
{
    // 设置标题
    protected string $title = '表格';

    // 返回模型数据
    public function data(): array
    {
        return [
            'table' => [
                [ 'id'   => 1, 'name' => '多厘',],
                [ 'id'   => 2, 'name' => '晴天',],
            ]
        ];
    }

    // 定义表单
    public function form()
    {
        $this->table('table', '表格')
            // 定义列
            ->cols(function (TablePlugin $table) {
                $table->add('id', 'ID');
                $table->add('name', '用户名');
            });
    }
}

```

表格组件, 仅仅用于渲染, 将页面渲染为可以展示的表格

```php
$this->table('ez-table', '表格')->easy([
    ['Header', 'Title', 'Value'],
    ['网站', '地址', 'https://www.baidu.com'],
    ['网站', '名称', '百度'],
]);
```

### 级联选择组件

级联选择可用于级联选择, 数据返回以数组为主

```php
class FormFieldCascaderEstablish extends FormWidget
{
    protected string $title = '级联选择';

    public function handle(){}

    /**
     */
    public function data(): array
    {
        return [
            'province'    => [1],
            'city'        => [3, 35],
            'area'        => [3, 36, 468],
            'area-filter' => [3, 36, 468],
            'area-sub'    => [3, 36],
            'area-lazy'   => [3, 36],
        ];
    }

    public function form()
    {
        // 选择地区
        $this->cascader('province', '地区')->options(SysArea::cascader());
        $this->cascader('city', '城市')->options(SysArea::cascader('city'));

        // 指定宽度
        $this->cascader('area', '地区')->options(SysArea::cascader('area'))->width(300);

        // 指定可筛选
        $this->cascader('area-filter', '地区(可筛选)')->options(SysArea::cascader('area'))->filterable();

        // 开启父选项可选择
        $this->cascader('area-sub', '地区(选择两级)')->options(SysArea::cascader('area'))->width(300)->checkStrictly();

        // 开启多选
        $this->cascader('area-muti', '地区(选择两级)')->options(SysArea::cascader('area'))
            ->width(300)->checkStrictly()->multi();

        // 开启懒加载模式(当前模式下暂时无法恢复数据)
        $this->cascader('area-lazy', '地区(懒加载)')->options(SysArea::cascader('city'))->width(300)->lazy(
            route('demo:api.form.cascader')
        );
        $this->disableReset();
    }
}

```