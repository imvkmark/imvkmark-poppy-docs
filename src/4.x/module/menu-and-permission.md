---
outline: deep
---

# 权限和菜单

## 菜单

菜单采用 yaml 进行定义, 支持三级菜单, 菜单如下定义, 在添加菜单之后需要运行如下命令更新缓存后生效

```
$ php artisan poppy:optimize
```

### 支持的类型

key 包含 backend(后端), develop(开发), web(前台)这几个部分.

```yaml
backend :
  title : 广告管理
  groups :
    -
      title : 广告管理
      icon : "bi bi-badge-ad"
      injection : "poppy.mgr-page/backend||setting"
      children :
        -
          title : 广告位管理
          route : py-ad:backend.place.index
          permission : backend:poppy-ad.place.manage
develop : ...
```

### key 说明

```
title     : 标题
icon      : 支持的图标
groups    : 分组(数组)
injection : 分组的插入目标地 'poppy.mgr-page/backend||setting' 代表放置到 mgr-page/backend setting 那个 key 下模块的后台分组
match     : 用于路由的第三级别, 页面中内容区域和右侧菜单项目的匹配,不设置可能会导致页面菜单为空
```


## 权限

### 定义

权限解释 : backend:system.global.manage

```
backend : 后台
system  : 模块
global.manage : 权限操作
```

权限分为全局权限和操作权限, 全局权限用在 控制器中, 赋值 `static::$permission` 权限来进行限定,操作权限用于在操作步骤中进行限定

```yaml
-
  title : 系统
  description : 系统权限
  slug : backend:system
  groups :
    -
      slug : global
      title : 全局
      description : 管理配置内容
      permissions :
        -
          slug : manage
          description : 全局设置菜单
          default : false
        -
          slug : page
          description : 系统设置
          default : false
```

### 初始化

添加权限之后首先要对权限初始化才能够正确使用权限

```
$ php artisan py-core:permission init
```

### 设定

后台在用户角色中对权限进行赋予

### 在控制器中使用权限

在控制器中定义变量 `self::$permission`, 并赋值全局权限, 则可以对控制器进行权限控制

```php
/**
 * 广告位管理
 */
class PlaceController extends InitController
{
    public function __construct()
    {
        parent::__construct();
        // 这里的权限定义可以和策略定义在一处
        // 可以写成
        // self::$permission = AdPlacePolicy::getPermissionMap();
        self::$permission = [
            'global'     => 'backend:ad.place.manage',
        ];
    }
}
```

### 操作

**策略中权限的定义**

```php
/**
 * 用户角色策略
 */
class AdPlacePolicy
{
    use PolicyTrait;

    /**
     * @var array 权限映射
     */
    protected static $permissionMap = [
        // for controller
        'establish'  => 'backend:ad.place.establish',
        'global'     => 'backend:ad.place.manage',
        // create 操作 必须要有对应的  'backend:ad.place.establish' 权限
        'create'     => 'backend:ad.place.establish',
        'edit'       => 'backend:ad.place.establish',
        'delete'     => 'backend:ad.place.delete',
        'permission' => 'backend:ad.place.permission',
    ];
}
```

**页面中对元素权限的判定**

_创建_

```php
@can('create', \Ad\Models\AdPlace::class)
    <a href="{{route_url('ad:backend.place.establish')}}"
       class="layui-btn layui-btn-sm J_iframe">
        添加广告位
    </a>
@endcan
```

_编辑_

```php
@can('edit', $item)
    <a data-toggle="tooltip" title="编辑"
       href="{{route_url('ad:backend.place.establish', [$item->id])}}">
        <i class="bi bi-pencil text-info"></i>
    </a>
@endcan
```
