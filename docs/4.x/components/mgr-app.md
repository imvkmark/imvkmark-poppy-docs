# 管理端(前后端分离)

前后端分离的项目包

## 配置

### 前端访问

mgr-app 文件内置在 mgr-page 包的 resources 目录下, nginx 进行如下配置

_mgr-app.conf_

```
server {
    listen 9101;
    server_name localhost;
    index index.html;
    root /path/of/mgr-app;

    location / {
        add_header Cache-Control "public, max-age=0, must-revalidate";
        try_files $uri $uri/ /index.html?$query_string;
    }

    access_log off;
    error_log off;
}
```

_domain.conf_

```
server {
    # ...
    location /mgr-app {
        rewrite "mgr-app/(.*)" /$1 break;
        proxy_pass http://127.0.0.1:9101;
    }
    # ...
}
```

如果需要自定义目录, 从源码编译并自行配置包目录即可

### 后端支持

后端需要添加包 `poppy/mgr-app` 当前版本是开发版, 版本是 `4.0.x-dev`, 因为授权返回的地址是有此包支持, 所以需要添加此扩展包

## 开发

数据准备

```
# demo 集成
$ php artisan poppy:migrate module.demo

# 创建数据
$ php artisan poppy:seed module.demo --class='\Demo\Database\Seeds\DemoWebappDatabaseSeeder'
$ php artisan poppy:seed module.demo --class='\Demo\Database\Seeds\DemoUserDatabaseSeeder'

# 还原数据
$ php artisan poppy:migrate:rollback
```

## 路径配置

路径是生成前端所用导航的入口文件, 告诉前端如何加载数据, 渲染页面, 文件位于 `modules/{module}/configurations/path.yaml`

```yaml
# [1]
backend:
    # [2]
    default:
        title: 菜单
        # [3]
        icon: picture-rounded
        # [4]
        children:
            - title: 分组
              children:
                  - title: 链接
                    # {type}/{route}/{route_params|explode by ,}/{query|gen_key}
                    path: form/demo:api.mgr_app.form/field-textarea
```

**[1]类型**
backend 代表和用户类型想匹配的定义, 分为 user/develop/backend 三种

**[2]注入**
这里的 KEY 作为注入项目 module.demo/backend||default, 可以将配置注入到这个地方, 例如在 mgr-page 模块下存在 key `backend.setting` 这个 key, 我们使用 injection 可以将模块配置注入到另外一个模块中达到不同的导航菜单的功能, 对于模块之间的顺序, 我们可以通过模块 `manifest.json` 文件中的 `order` 字段来进行定义, 按照从小到大的顺序进行排列

```yaml
backend:
    area:
        title: 地区管理
        # 将当前模块下所有 children 追加到指定key 的 children 中
        injection: "poppy.mgr-app/backend||setting"
        children:
            - title: 地区管理
              children:
                  - title: 地区管理
                    path: grid/py-area:api-backend.content.index
                    permission: "backend:py-area.main.manage"
```

**[3]图标**

图标我们使用 [element-plus 图标库](https://element-plus.org/zh-CN/component/icon.html), 图标名称格式支持 `kebab-case` 和 `CamelCase` 命名, 例如 `CircleCheck` 图标, 我们也可以写为 `circle-check`

**[4]菜单**
对于以上层级我们进行如下定义

```
导航 : 在顶部作为主导航
分组 : 对链接进行分组
链接 : 可以更改路由地址的链接
```

**[5]链接**

链接的组成规范

```
form   / demo:api.mgr_app.form / field-textarea / name|my
{type} / {route}               / {route_params} / {query}


```

-   type : 链接支持的格式, form : 表单, setting : 设置, grid : 列表
-   route : 路由, 通过 Laravel 定义的路由
-   route_params : 路由参数, 使用 , 分隔
-   query : 使用 `\Poppy\Framework\Helper\ArrayHelper::genKey()` 方式把字串解析成数组

## Action

项目中的操作项, 操作可分为 `request(请求)`, `page(页面)`, `copy(复制)`, `progress(进度)`

### 样式 / 操作扩展

```php
$action
    // 弹出确认弹窗
    ->confirm()
    // 设置图标
    // 完整图标地址 : https://element-plus.org/zh-CN/component/icon.html#图标集合
    ->icon('Close') // 设置图标名称
    ->only()        // 设置是否仅仅显示图标
    // 设置风格
    ->primary()    // 主题样式
    ->default()    // 默认
    ->success()    // 成功
    ->info()       // 信息
    ->warning()    // 警告
    ->danger()     // 危险
    ->disabled()   // 禁用
    // 朴素样式
    ->plain()
    // 文本样式
    ->link()
    // 圆形图标
    ->circle()
```

### 使用场景

**表格**

```php
class GridTableActions extends GridBase
{
    public function table(TablePlugin $table)
    {
        // 添加 Action
        $table->add('handle', '操作')->asAction(function (ActionsRender $actions) {
            // 获取单行数据
            $row = $actions->getRow();
            $actions->request('错误', route('demo:api.mgr_app.grid_request', ['error']));
            $actions->page('页面', route('demo:api.mgr_app.grid_form', ['detail']), 'form');
            $actions->copy('复制', '复制自定义的内容' . $row['id']);
        });
    }
}
```

**快捷操作/批量操作**

```php
class GridLayout extends GridBase
{
    public string $title = '布局';

    public function quick(Actions $actions)
    {
        $actions->page('快捷操作', route('demo:api.mgr_app.grid_form', ['detail']), 'form')->icon('Plus');
    }

    public function batch(Actions $actions)
    {
        $actions->request('批量操作', route('demo:api.mgr_app.grid_request', ['success']));
    }
}
```

### 种类

**request - Ajax 请求**

对服务器发起一个 ajax 请求, 并根据服务端返回内容进行前端页面的操作, 这里根据服务端的返回触发全局 Motion, 操作返回的 data 的数据作为 Motion 数据

```php
$actions->request('成功', route('demo:api.mgr_app.grid_request', ['success']));
```

**page - 以内部页面方式打开指定类型数据**

使用侧边栏方式打开一个页面, 当前支持 `form`, `grid` 两种数据内容

```php
$actions->page('页面', route('demo:api.mgr_app.grid_form', ['detail']), 'form');
```

**copy - 复制自定义数据**

复制按钮, 点击此按钮可已复制自定义的数据

```php
$actions->copy('复制', '复制自定义的内容' . $row['id']);
```

**target - 在新窗口打开链接**

新窗口打开, 打开自定义的链接地址

```php
$actions->target('Target(百度)', 'https://www.baidu.com');
```

## Dashboard

Dashboard 意思是仪表盘, 目的是集中多个部分放到一个页面中进行展示, 可用于不同 `scope` 之间的配置和主页仪表盘

![](https://file.wulicode.com/note/2022/06-23/17-41-48420.png)

类之间的关系如下

![](https://file.wulicode.com/note/2022/06-23/17-52-34572.png)

`Dashboard` 是仪表板, `Panel` 定义为仪表盘的部件

### 使用

**定义路径**

这里的 url 类型是 `dashboard`

```yaml
- title: 表单仪表盘
  path: dashboard/demo:api.mgr_app.dashboard/form
```

**定义控制器**

```php
class DashboardController {
    public function form()
    {
        $dashboard = new DashboardForm();
        return $dashboard->resp();
    }
}
```

**定义仪表盘**

```php
/**
 * 表单仪表盘
 */
class DashboardForm extends DashboardWidget
{

    // 标题
    public string $title = '仪表盘';

    public function __construct()
    {
        parent::__construct();
        // 定义 Scope
        $this->scope('test', 'TEST');
        $this->scope('mark', 'Mark');
    }

    // 定义仪表盘面板
    public function panels(): array
    {
        // 获取当前的Scope
        $scope = $this->getCurrentScope();

        // 定义面板
        $form1 = (new PanelForm('site', 12))->form(function (FormPlugin $form) use ($scope) {
            $form->text($scope->value . ':Title', $scope->label . '标题')->rules([
                Rule::required(),
            ]);
        })->handle(function ($data) {
            return Resp::success('返回成功' . var_export($data, true));
        });
        return [$form1];
    }
}
```

### Scope

Scope 定义为 Dashboard 分类, 根据不同的类型区分不同的仪表盘的数据展示, 这里引用的是 trait `\Poppy\MgrApp\Classes\Traits\UseScopes` , 提供的方法有

```php
trait UseScopes
{

    /**
     * 添加全局范围, 在添加全局范围之后, 如果不传入 Scope, 则默认为第一个 Scope
     */
    public function scope(string $key, string $label)

    /**
     * 范围结构
     * @return Collection
     */
    public function getScopesStruct(): Collection

    /**
     * 获取当前的Scope,
     * 支持未传入
     */
    public function getCurrentScope(): ?Scope
}
```

### PanelForm

表单面板, 定义为表单提交类型

```php
// 定义标题以及宽度
(new PanelForm('site', 12))
    // 定义表单项目, 这里的类型和 Form 一致
    ->form(function (FormPlugin $form) {
        $form->text('Title', '标题')->rules([
            Rule::required(),
        ]);
    })
    // 定义表单数据接收的处理方式
    ->handle(function ($data) {
        return Resp::success('返回成功' . var_export($data, true));
    });
```

## Grid

Grid 是项目的数据展示工具, 各个部件如下所示

![](https://file.wulicode.com/note/2022/06-11/10-51-50606.png)

### Table

列渲染, 列采用如下方式进行列的添加

#### 列展示

```php
public function table(TablePlugin $table)
{
    $table->add('id', 'ID')->quickId();
}
```

列的基础属性

```php
public function table(TablePlugin $table)
{
    $table->add('id', 'ID')
        // 定义最小宽度
        ->width(100)
        // 固定最小宽度
        ->width(100, true)
        // 设置展示位置, 默认 left, 可选 [left,center,right]
        ->align('left')
        // 标识列为可排序
        ->sortable()
        // 标识列为可fix 显示, 默认是右侧, 可以设置为 [left, right], 例如操作按钮可固定在右侧展示
        ->fixed('right')
        // 文字显示为一行, 并且多余使用省略号
        ->ellipsis()
        // 纯文本可复制
        ->copyable()
}
```

列的快捷属性

```php
public function table(TablePlugin $table)
{
    $table->add('id', 'ID')
        // 渲染为ID, 固定宽度, 并将ID 居中, 普通模式 5位数值, large模式 7 位数字
        ->quickId()
        ->quickId(true)

        // 渲染为标题, 默认显示 15个汉字, large 模式显示 20个汉字左右
        ->quickTitle()
        ->quickTitle(true)

        // 渲染为 Y-m-d h:i:s 宽度并居中
        ->quickDatetime()

        // 定义 Icon 的快捷数量, 宽度根据数量来进行计算
        ->quickIcon($num = 3)
}
```

列渲染展示, 添加列若是模型存在的数据, 则原样展示, 如果没有, 或者需要对数据进行组合, 格式化, 可以采用自定义的渲染方式

如果存在 ID, 则展示为 ID

```php
$table->add('id', 'ID')
```

#### 列渲染

如果想把用户的手机号进行隐藏展示, 并且手机号是存在的字段

```php
$table->add('mobile', '用户手机号')->display(function($value){
    return substr($value, 0, 3) .'****'.substr($value, 8);
})
```

如果想组合两个字段的展示, 例如用户的姓名和部门是两个字段

```php
// 这里 $this 返回的是模型的一行数据
$table->add('info', '姓名(部门)')->display(function($value){
    return $this->truename."({$this->department})";
})
```

这里也定义快捷的渲染方法, 渲染方法使用 `asXx` 格式

```php
// 渲染为可点击的链接地址
$table->add('url', '用户主页')->->asLink();

// 渲染为Html
$table->add('color', 'Html')->asHtml(function () {
    return "<div style='{$this->style}'>$this->title</div>";
})

// 图片, 将存储的图片地址以图片的形式展示到数据行中
$table->add('image', '图片')->asImage();

// 可下载, 渲染为下载按钮
$table->add('pdf', 'Pdf')->asDownload();

// 显示为快捷开关
$table->add('loading', 'Loading')->asOnOff();

// 使用定义的状态字段来返回
$table->add('status', 'usingKv')->asKv(DemoWebapp::kvStatus());

// 显示为可以格式化的时间
$table->add('date', '创建时间')->asDate('m-d h:i');

// 根据语言显示为 距今 xxx 形式
$table->add('date', '创建时间')->asDiffForHumans();

// 根据语言显示为 距今 xxx 形式
$table->add('filesize', '文件体积')->asFilesize();

// 显示为隐藏数据, 并可以自定义接口来返回数据并显示在列表中
$table->add('filesize', '文件体积')->asHidden();
```

#### 列编辑

支持行内编辑, 文本模式, 开关模式, 选择模式, 如果不指定地址, 则采用模型的数据进行修改, 此功能对于不敏感的数据进行编辑, 如果涉及到业务逻辑的数据, 建议使用自定义地址进行修改

```php
// 支持编辑, 并支持字段更换名称
$table->add('loading-alt', '行内编辑(字段更名)')->editAsOnOff(function () {
    return $this->loading;
})->query('loading');

// 禁用指定行的数据进行编辑
$table->add('loading-disable', '行内编辑(禁用部分)')->editAsOnOff(function () {
    return $this->loading;
}, function () {
    return $this->id % 3 === 0;
})->query('loading');

// 自定义Url进行编辑
$table->add('loading-url', '行内编辑(自定义Url)')->editAsOnOff(function () {
    return $this->loading;
})->query('loading', route('demo:api.mgr_app.grid_modify_loading'));
```

当前支持的几个类型为

**Select, 选择数据进行提交**

```php
$table->add('status-alt', '行内编辑(字段更名)')->editAsSelect(function () {
    return $this->status;
})->query('status')->options(DemoWebapp::kvStatus());
```

**OnOff, 开关**

```php
$table->add('loading', '行内编辑(字段更名)')->editAsOnOff(function () {
    return $this->loading;
});
```

**Text, 文字变更**

```php
$table->add('sort-alt', '行内编辑(字段更名)')->copyable()->editAsText(function () {
    return $this->sort;
})->query('sort');
```

### Filter

> 表的搜索工具

### Batch

> 对数据的批处理

### Render

列显示的渲染

### Action

操作 [Action](#action) 是触发全局动作, 参考 Action 部分

```php
$table->add('handle', '操作')->asAction(function (ActionsRender $actions) {
    $actions->request('成功', route('demo:api.mgr_app.grid_request', ['success']));
    $actions->page('页面', route('demo:api.mgr_app.grid_form', ['detail']), 'form');
    $actions->target('Target(百度)', 'https://www.baidu.com');
});
```

**隐藏**

## Form

表单支持对数据的创建以及编辑

### 创建表单

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

下面对组件进行相应的介绍, 所有使用方式以以上两种方式为主

### Table

表单的表格组件

```php
class FormTableEstablish extends FormWidget
{
    // 设置标题
    protected string $title = '表格';

    // 返回模型数据
    public function data(): array
    {
        return [
            'table' => [
                [
                    'id'   => 1,
                    'name' => '多厘',
                ],
                [
                    'id'   => 2,
                    'name' => '晴天',
                ],
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

## Setting

设置用于支持分组的配置

## 其他概念

### Motion

> Motion 用于触发全局的动作, 使用后端返回内容来用于前端的不同操作

编写: Motion 使用 [Resp](./../framework/resp.md) 返回
Motion 格式如下, 如果使用 Resp 返回, 则也可使用 kv 方式来编写 `motion|grid:reload;time|200`

解析之后的对象如下所示

```js
{
	motion: "grid:reload";
	time: 200;
}
```

设置用于在表单中加入操作, 在 Grid 渲染中加入操作, 批处理, 表单的快速操作
