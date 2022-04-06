# 核心

## 操作

> Poppy 核心模块, system 基于本模块

### 权限操作

```
php artisan py-core:permission {slug}
{slug}:
    - list   : 获取权限列表
    - init   : 权限初始化
    - menus  : 检查菜单[todo Undefined index: children]
    - assign : 将权限赋值给指定的用户组
    - check  : 权限检测
```

### 文档以及检查工具

```
php artisan py-core:doc {slug}
{slug}:
    - api   : 生成api文档[apidoc 生成目录]
    - cs    : code style - fix , 代码格式修复(todo 以后IDE 来做)
    - cs-pf :
    - lint  : 安装检测PHP语法错误的工具
    - php   : 生成 php api 文档
    - log   : 查看当天的 storage 日志
```

**关于 phplint**

[phplint](https://github.com/overtrue/phplint)是一个快速检测 php 语法错误的工具, 此工具无需安装在项目中, 全局安装即可.

```
$ composer global require overtrue/phplint -vvv
$ php artisan py-core:doc lint
$ phplint /path/of/code -c /framework/path/.phplint.yml
```

### 检查代码

```
php artisan py-core:inspect {slug}
{slug} :
    - apidoc     : 检查api文档(需要指定目录)
    - class      : 方法检测
    - pages      : 检测页面Key[todo 以后会删掉]
    - file       : 检测文件命名[文件类和文件位置不匹配]
    - database   : 检测数据库配置
    - controller : 列出所有功能点
    - action     : 列出所有业务逻辑
    - seo        : 生成 seo 项目
    - db_seo     : 生成数据库SEO 数据
```

### 运维工具

```
php artisan py-core:op {slug}
{slug} :
    - mail   : 发送运维邮件
```

### 生成 php api 文档

> 先睹为快, 使用 doctum 生成的 php api 地址 [PoppyV4 Api](http://v4.wulicode.com/docs/php/)

**生成配置文件**

```
$ php artisan vendor:publish --tag=poppy
...
Copied File [/modules/system/resources/config/doctum-config.php] To [/storage/doctum/config.php]
Publishing complete.
```

**下载 doctum**

```
$ php artisan py-core:doc php

Please Run Command To Install doctum.phar:
curl https://doctum.long-term.support/releases/latest/doctum.phar --output /path/of/doctum/doctum.phar

# 下载之后再运行

$ php artisan py-core:doc php
Please Run Command:
php /path/of/doctum/doctum.phar update /path/of/doctum/config.php
```

我们运行命令来生成 php 文档

```
$ php /path/of/doctum/doctum.phar update /path/of/doctum/config.php
 Updating project

Version master
  Parsing   done
  Rendering done

 Version    Updated C    Removed C
   master         1224            0

 Version    Updated C    Updated N    Removed C    Removed N
   master            2            0            0            0
```

运行完成后会在 `public/docs/php` 文件夹下生成标准的 html 文档, 这样我们就可以进行访问了.

如果默认的配置无法满足你的要求可以编辑 `resources/doctum/doctum.php` 文件来修改需要生成文档的文件夹和目标路径.

生成文档如下

![](https://file.wulicode.com/note/2021/10-23/11-33-00249.png)

配置文件 : [doctum-config.php](https://github.com/dadi-cn/poppy-core/blob/4.0/resources/config/doctum-config.php)

## 配置

文件位置 : `config/poppy.php`

### apidoc

-   Type : `array`

api 接口文档配置, 改文档可以使用 `php artisan py-core:doc api` 来生成文档, 定义如下

```
'apidoc' => [
    ...
	'web' => [
        // 标题
        'title'            => '前台接口',
        // 方法
        'method'           => 'post',
        // 默认访问地址
        'default_url'      => 'api_v1/system/auth/login',
        // 匹配 src/http/request 的文件目录来生成文件, 使用 glob 规则匹配 
        'match'      => 'api.*/web|ApiWeb|api/web|ApiV1',
	],
	...
]
```

### op_mail

-   Type : `string`
-   Default : `env('CORE_OP_MAIL', '')`

后台可支持发送测试邮件, 这里配置发送人的邮箱

### rbac

-   Type : `array`

设置 RBAC 模型以及外键 KEY, 这里默认设定的是 `poppy/system` 模块的模型, 不使用此模块可以自行实现模型定义以及关联关系

```
'rbac'       => [
    // 角色模型
    'role'            => \Poppy\System\Models\PamRole::class,
    // 账号模型
    'account'         => \Poppy\System\Models\PamAccount::class,
    // 角色账号模型
    'role_account'    => \Poppy\System\Models\PamRoleAccount::class,
    // 权限模型
    'permission'      => \Poppy\System\Models\PamPermission::class,
    // 角色权限模型
    'role_permission' => \Poppy\System\Models\PamPermissionRole::class,
    // 角色外键
    'role_fk'         => 'role_id',
    // 账号外键
    'account_fk'      => 'account_id',
    // 权限外键
    'permission_fk'   => 'permission_id',
],
```

## 缓存

### 缓存定义

缓存使用扁平化管理, 缓存函数是在 laravel 的基础上加了一层标签, 用法遵循 laravel 缓存使用

缓存一般采用如下命名

```
sys_cache('{slug}')->get('{name}')
slug    : 根据模块目录来进行判定
    例如 poppy system 模块命名为 py-system
    例如 poppy core 模块命名为 py-core
    例如 poppy core rbac 模块命名为 py-core-rbac(因为需要用到 flush 方法, 这里采用标签来区分, 而不是使用 type)
name    : 代表的是缓存的名称
```

为了保证缓存名称的唯一性我们约定
slug : poppy 模块 : `py-{module}`

name : name 使用静态方法定义, 支持传参

### 示例

例如 Area 模块的我们定义缓存函数

```php
<?php namespace Poppy\Area\Classes;


class PyAreaDef
{
    /**
     * ID -> PID 映射
     * @return string
     */
    public static function ckMatchIdPid(): string
    {
        return 'match_id_pid';
    }
}
```

使用

```php
/**
 * @param bool $clear 是否清除
 * @return mixed
 */
function matchKv($clear = false)
{
    if ($clear) {
        sys_cache('py-area')->forget(PyAreaDef::ckMatchIdPid());
    }

    return sys_cache('py-area')->remember(PyAreaDef::ckMatchIdPid(), 10, function () {
        return AreaContent::pluck('parent_id', 'id')->toArray();
    });
}
```
