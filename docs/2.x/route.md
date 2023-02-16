# 路由 / 控制器

## 加载机制

### 加载流程图

![https://file.wulicode.com/mweb/2021/12/15810951194457.jpg](https://file.wulicode.com/mweb/2021/12/15810951194457.jpg)

### 分组模式

| 文件名 | 前缀 | 备注 |
| --- | --- | --- |
| front.php | front_ | 网站前台 |
| desktop.php | dsk_ | 网站后台 |
| api.php | api_ | app /接口部分 |
| develop.php | dev_ | 开发者平台 |
| wap.php | wap_ | wap 端 |
| support.php | support_ | 公用的支持类函数 |

## 路由

### 路由位置

`~/app/Http/routes.php`

### 路由文件名称

`routes.php` 是框架加载路由的入口文件

### 子路由位置

目录 ~/app/Http/Routes/

### 路由命名规则

路由命名的基本规则是 `前缀` + `控制器蛇形写法` + `.` + `方法名的蛇形写法` 例如：

```
Route::group([
    'namespace' => 'Front',
], function () {
    # 这里的路由命名是 front_test.show  front_ + test + . + show
    Route::controller('test', 'TestController', [
        # 方法名          # 路由的名称
        'getShow'         => 'front_test.show',
    ]);
});
```

## 控制器

### 控制器定义

- 控制器位置位于 `～/app/Http/Controllers/` 目录下
- 控制器命名采用分组模式， 首字母大写
- 路由名称和控制器名称匹配