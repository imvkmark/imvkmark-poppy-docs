# Grid

Grid 是项目的数据展示工具, 各个部件如下所示

![](https://file.wulicode.com/note/2022/06-11/10-51-50606.png)

## Filter

> 表的搜索工具

## Batch

> 对数据的批处理

## Render

列显示的渲染

## Action

操作 [Action](#action) 是触发全局动作, 参考 Action 部分

```php
$table->add('handle', '操作')->asAction(function (ActionsRender $actions) {
    $actions->request('成功', route('demo:api.mgr_app.grid_request', ['success']));
    $actions->page('页面', route('demo:api.mgr_app.grid_form', ['detail']), 'form');
    $actions->target('Target(百度)', 'https://www.baidu.com');
});
```

## 模型 Model

![](https://file.wulicode.com/note/2022/06-25/16-26-37428.png)


有些情况下单模型或者简单模型的查询不会满足要求或者数据量过大导致性能异常, 这里扩展出来一个类 `QueryCustom` 进行自定义查询

```php
class QueryDemoWebapp extends QueryCustom
{

    public function get(): Collection
    {
        // 参数
        $params = $this->params;
        $Object = DemoWebapp::whereRaw('id % 3 =0');
        // 总数
        $this->total = $Object->count();
        // 返回自定义的数据
        return $Object->take($this->pagesize)->offset($this->pageOffset)->get();
    }
}
```

以下模型的几个方法说明如下

### get

获取的数据即可

### edit

用于行内编辑

### getPrimaryKey

获取组件

### chunk

用于导出数据时候批量读取数据

### prepare

用于在读取数据的时候引用查询对象和查询列数据