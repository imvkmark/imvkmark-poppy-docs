# MgrApp

前后端分离的项目包

## 配置后台

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
