# MgrApp

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
    // 圆形图标
    ->circle()
```

### 使用场景

**表格**

```php
class GridTableActions extends GridBase
{
    public function table(TableWidget $table)
    {
        $table->action(function (ActionsRender $actions) {
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

### request(请求)

对服务器发起一个 ajax 请求, 并根据服务端返回内容进行前端页面的操作, 这里根据服务端的返回触发全局 Motion, 操作返回的 data 的数据作为 Motion 数据

## Grid

Grid 是项目的数据展示工具, 各个部件如下所示

![](https://file.wulicode.com/note/2022/06-11/10-51-50606.png)

### Action

> 操作

### Filter

> 表的搜索工具

### Batch

> 对数据的批处理

### Table

table 列表

### Render

列显示的渲染

**隐藏**

## Form

表单支持对数据的创建以及编辑

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
    motion : 'grid:reload'
    time: 200 
}
```

设置用于在表单中加入操作, 在 Grid 渲染中加入操作, 批处理, 表单的快速操作
