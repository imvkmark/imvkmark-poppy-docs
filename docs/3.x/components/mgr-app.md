# MgrApp

前后端分离的项目包

-   [] 安装方式
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

## Grid

table 列表

### Filter

表的筛选工具

### Render

列显示的渲染

## Form

表单支持对数据的创建以及编辑

## Setting

设置用于支持分组的配置

## Action(操作)

设置用于在表单中加入操作, 在 Grid 渲染中加入操作, 批处理, 表单的快速操作
