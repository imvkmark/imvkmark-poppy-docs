# 后台管理

> 基于 layui 的后台管理工具包

## 开发

### 打包 Js 资源

在资源开发过程中, 我们使用如下命令进行资源监听, `webpack.mix.js` 本不存在, 需要在 `poppy/mgr-page/resources/libs/` 目录下复制 `webpack.mix.sample.js` 文件并更改名称, 将文件放置到你所喜欢的的位置均可, 其中的代理域名以本地开发为主

```
$ mix watch --mix-config=poppy/mgr-page/resources/libs/webpack.mix.js
```

在资源变动之后我们需要将打包后的文件反向复制到 `mgr-page` 这个包中, 用到以下命令

```
$ php artisan py-mgr-page:mix
```

这样进行包提交即可

### 发布到项目

MgrPage 管理后台使用的是 js 加载方式, 如果使用 MgrPage, 则需要在更新 composer 组件之后运行以下命令进行强制更新

```
$ php artisan vendor:publish --force --tag=poppy-mix
```

或者将此命令加入 composer.json 文件中, 每次更新完成 composer 的时候都会自动进行一次发布

```json
{
    ...
    "scripts": {
        "post-update-cmd": [
            ...
            "php artisan vendor:publish --force --tag=poppy-mix"
            ...
        ],
    }
    ...
}
```

## Pjax

### Pjax 错误

![](https://file.wulicode.com/note/2023/01-16/13-57-27757.png)

使用方式

```php
use Poppy\System\Classes\Traits\PjaxTrait;

/**
 * 内容生成器
 */
class JsController extends WebController
{

    use PjaxTrait;

    /**
     * Pjax Error
     * @return Factory|JsonResponse|RedirectResponse|Response|View
     */
    public function pjax()
    {
        if (!check_js_time(input('start_at'))) {
            return $this->pjaxError('Pjax 请求错误 : 提交的时间和日期不符');
        }
        return view('demo::js.fe');
    }
}
```
