# 多语言

## 语言包用到的地方和命名

由于语言包用到的地方众多， 所以这里分几种情况来定义语言包的位置

### Laravel 验证默认

```
validation.php   # L5 系统默认的语言文件
```

### 控制器

对于控制器中的函数， 多个控制器采用同一个语言包， 语言包命名参考 【LF - 路由 / 控制器】

```
front.php       # 网站前端
desktop.php     # 网站后端
view.php        # 网站视图
```

### Action

Action 中使用 `action.php`

### Api 接口

接口使用 `api.php`, api 命名方式和

## 命名 和调用

### 默认命名

默认命名放置在 `_` 中进行存储 例如保存成功， 我们放置在

```
# desktop.php
'_' => [
    'save_success' => '保存成功！',
],
```

### 通用命名

对于多个文件放置在同一个文件的语言函数， 我们约定使用 类简约方法+_+类名称 方式进行调用 例如后台控制器用户控制里的方法我们用的时候可以如此写

```
# desktop.php
'login' => [
    'account_exists' => '用户名不存在！',
],
```

## 调用

- 函数中调用

```
trans('desktop.login.xxx')
```

- 模板中调用

```
@lang('desktop.login.xxx')
```