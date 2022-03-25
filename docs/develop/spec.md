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
