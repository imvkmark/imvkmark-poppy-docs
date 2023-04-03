---
outline : deep
---

# 验证规则

## 框架规则

为了更容易识记, 框架的规则使用 `Rule::class` 进行了封装

## 自定义规则

::: tip
使用自定义规则需要在 `resources/lang/zh/validation.php` 中存在规则的验证文字, 否则会存在代码提示
:::

### username

验证是否是标准的用户名

### simple_pwd

验证用户输入密码的格式

### chid

验证用户身份证号

### mobile

验证是否是正确的手机号

### urls

验证批量数据是否是 url 地址, 当文件进行批量上传时候, 生成的数据类似于 `blob://****` 这种类型的数据, 这种数据并非正确的 url 数据 

