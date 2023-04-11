# 最佳实践

## 参考阅读

- [JetBrains 系 IDE 常用插件](https://juejin.cn/post/7220683059866730557/)

## 配置

对于文件目录 & 网址, 我们不建议在右侧添加 `/` 作为后缀, 例如

```
URL_SITE=http://v4.wulicode.com
```

## Inspect

[Inspect](../poppy/core.md#检查代码) 是开发过程中的工具, 用来检查项目中的文件注释, 文件命名, seo 命名, 权限等是否都满足项目定义

```console
$ php artisan py-core:inspect > inspect.txt 
```

:::tip

- [必须] 完成 seo 校验
- [必须] 完成 validation 校验
- [必须] 完成 class 加载校验
- [建议] 完成代码注释
  :::

## 代码

### 代码编写符合规范

### 测试用例完善并且通过

## composer 配置

### 加入安全策略

项目根 `composer.json` 中加入安全建议

```
{
    "require-dev": {
        "roave/security-advisories": "dev-latest"
    }
}
```

### 映射 Form , 需要在 composer 中加入数据

由于这里是继承的 "laravelcollective/html" 组件,
所以必须先禁用掉原生的自动发现

在 composer.json 文件中禁用自动发现

```
"extra" : {
    "laravel" : {
        "dont-discover" : [
            "laravelcollective/html"
        ]
    }
},
```

在 `providers` 部分加入

```
'providers' => [
    // ...
    Collective\Html\HtmlServiceProvider::class,
    // ...
];
```

更新并清空换粗

```
composer dumpautoload && php artisan poppy:optimize
```

然后在 `app.php` 的 `aliases` 部分加入

```
'aliases' => [
    // ...
    'Html' => Collective\Html\HtmlFacade::class,
    'Form' => System\Classes\Facade\FormFacade::class,
    // ...
];
```

### IDE 项目配置

**忽略掉的目录**

右键忽略掉即可, 这个是生成的文件, 不需要进行 php 索引

```
public/assets/
storage/clockwork/
storage/phpunit/
```
