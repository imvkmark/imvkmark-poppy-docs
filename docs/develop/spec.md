# 开发规范

## 框架

### 配置命名

配置定义为框架中对 config 文件的注入, 命名建议如下:

1. poppy.php
2. module.php

```
# Poppy
poppy.framework.page_max

# 模块配置
module.order.xxx
```

## 系统

### 设置命名

命名会注入到 Laravel config 中

命名分为扩展, 组件, 建议命名如下

```
# 扩展的命名
ext-aliyun::push.access_key

# 组件设置
py-system::permission.prefix
```

## 单元测试

单元测试采用 `phpunit.phar` 和项目独立的方式进行安装, 这样需要在项目中进行配置

**快捷生成**

使用如下命令便捷创建单元测试文件

```
$ php artisan poppy:test  {slug} {name}
```

**测试文件加载**

对于开发中的包, 单元测试是无法识别其路径的, 所以需要将包加入到 `composer.json` 的 `autoload` 中, 这里遵循 `psr-4` 加载规范

```json
"autoload" : {
    "classmap" : [
    ],
    "psr-4" : {
        ...
        "User\\Tests\\" : "modules/user/tests/",
        "User\\" : "modules/user/src/",
        "Site\\Tests\\" : "modules/site/tests/",
        "Site\\" : "modules/site/src/"
        ...
    }
}
```

-   单元测试 : [在 PhpStorm 中运行 Laravel 的 phpunit 单元测试](https://wulicode.com/php/vendor/phpunit-at-project/index.html)


**要求**

-   编写配置文件, 保证配置正确
-   编写模型文件, 保证模型函数正确
-   编写功能文件, 保证 Notification, Im 等功能正常
-   编写方便的 Action 测试, 便于功能点测试

## 接口

**接口文档**

接口文档写法遵循 [apidoc](https://apidocjs.com/)

-   接口文档说明: [使用 ApiDoc 编写接口文档](https://wulicode.com/develop/cooperation/apidoc/)
-   接口文档示例: [ApiDocument@Start](https://start.wulicode.com/docs/web/)

**接口要求**

-   保证接口请求不返回 null 值
