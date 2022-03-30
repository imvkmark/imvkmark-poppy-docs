# 3.2 -> 4.0 升级说明

## Framework

-   **不兼容** 移除 `x_app` 函数, 此函数在 3.2 中废弃, 因为 nginx 无法从 json 中获取需要的数据, 需要显式使用 `x_header` 来获取

todo : 关于 Header 的定义需要完善

-   **可替代** 移除 `TestCase->poppyContainer()` 方法, 使用 `Container::getInstance()` 替代

-   **可替代** 移除 `Resp->data()` 方法, 使用 `Resp->custom()` 替代

-   **可替代** 移除 `get(), post()` 方法, 使用 `input()` 替代

## Core

-   **可替代** 移除 `RdsNative->delTaggedKeys()` , 使用 `RdsNative->del()` 替代

-   **可替代** 移除 `sys_success()` 方法, 使用 `sys_info()` 替代

## System

1. **不兼容** `ApiSignContract` 方法 `sign` 增加参数 `$type` , 使该方法同时支持不同端签名

```diff
class DefaultApiSignProvider extends DefaultBaseApiSign
{
-    public function sign(array $params): string
+    public function sign(array $params, $type = 'user'): string
    {
        ...
    }
}
```

-   **不兼容** 移除 `SettingRepository` 的 `setReRead()`, `save()` 方法

此方法 `3.2` 已经重新改写为从缓存直接读取, 不使用静态变量

-   **不兼容** 移除 `pages.yaml` 的定义以及读取, 改用 mgr-page/mgr-app 的 Form 写法

相关影响 : `Module->pages()`, `Module/Repositories/ModulesPage`, `ModuleManager->pages()`

-   **不兼容** 移除 `settings.yaml` 的定义以及读取, 不支持项目默认数据在 `settings.yaml` 的定义

相关影响 : `Module/Repositories/ModulesSetting`, `ModuleManager->settings()`

-   **不兼容** 移除 `ui.yaml` 的定义以及读取, 不支持项目默认数据在 `ui.yaml` 的定义

相关影响 : 移除 `Module/Repositories/ModulesUi`, 移除 `ModuleManager->uis()`, 移除 `Classes\Contracts\UiContract`

-   **不兼容** 移除 `ModuleManager->getExcepts()` 的定义以及读取(无相关用途)

-   **不兼容** 移除 `\Poppy\System\Action\Pam::setPasswordById`, 使用 `\Poppy\System\Action\Pam::setPassword` 替代, 参数不一致, 需要注意

-   **不兼容** 移除 `\Poppy\System\Classes\Contracts\UploadContract::type` , 使用 `\Poppy\System\Classes\Uploader\Uploader::kvExt` 替代, 参数有差异
-   **不兼容** 移除

```
\Poppy\System\Models\PamAccount::fetch()             :  多余的字段查询
\Poppy\System\Models\PamAccount::getIdByUsername()   :  频率低, 无用函数
\Poppy\System\Models\PamAccount::getTypeById()       :  频率低, 无用函数
```

-   **可替代** 移除 `ModuleManager->repository()`, 使用 `ModuleManager->modules()` 替代

-   **可替代** 移除 `sys_container`, 使用 `py_container` 替代

-   **可替代** 移除 `\Poppy\System\Classes\Abstracts\SysRouteServiceProvider` , 使用框架 `\Poppy\Framework\Application\RouteServiceProvider` 替代

-   **可替代** 移除 `\Poppy\System\Action\Pam::passportType` , 使用 `PamAccount::passportType()` 替代

-   **可替代** 移除 `\Poppy\System\Action\Verification::getHiddenStr` , 使用 `\Poppy\System\Action\Verification::getHidden` 替代, 因为返回不仅仅是字串, 可能还会有数组

-   **可替代** 移除 `\Poppy\System\Tests\Base\SystemTestCase::export` , 使用 `\Poppy\Framework\Application\TestCase::outputVariables` 替代, 使用 stream 打印数据, 可保证运行无异常提示

## Aliyun-Oss

-   **可替代** 移除 `Action/ActSts` 类, 使用 `Sts` 类, 仅仅改动命名

-   **可替代** 移除 `Action/OssDefaultUploadProvider`, 使用 `Classes\Provider\OssDefaultUploadProvider`, 若依赖于 4.0 组件则此问题不必关注.

## MgrPage

-   **可替代** 移除 `\Poppy\MgrPage\Classes\Form\Field\Number` 的 `min` 和 `max` 方法, 使用后端服务规则校验 `Rule::min`, `Rule::max`
