# 开发者模式/ACL

## 开启访问者模式

在 `.env` 文件中添加或者启用开发者访问模式, 否则无法对账号进行管理

```
# lemon enable develop
LM_EN_DEVELOP=true
```

访问地址:

- 访问地址 http://www.lartest.com/dev
- 添加访问账号 : http://www.lartest.com/dsk_cp
- 默认的访问账号密码是 : develop/develop

![https://file.wulicode.com/mweb/2021/12/15810952404028.jpg](https://file.wulicode.com/mweb/2021/12/15810952404028.jpg)

## 开发者工具

访问 : http://www.lartest.com/dev_home/cp ### 访问入口的定义 访问总入口放置在: `app/Lemon/Suit/Acl/develop.php` 结构说明:

```
# name key 用作菜单时候的ID 值
'api'     => [
    'title' => '接口测试',    # 标题
    'param' => '',           # 附加参数, 使用 a=b形式进行添加 会组成 dev_api?a=b 访问地址
    'group' => [             # 分组, 用于接口的分组管理
        'dev_api',
    ],
],
```

访问单文件的入口在: `app/Lemon/Suit/Acl/Develop` 下, 我们看下 `dev_api.php`

文件示例:

```
'title'     => '接口测试',    # 本组的标题
'route'     => 'dev_api',    # 路由名称
'operation' => [
    'auto' => [              # 操作, 会组成 dev_api/auto 的访问URL
        'title' => '自动',    # 本路由的命名,
        'menu'  => true,     # 是否是菜单项目(预留)
    ],
]
```

![https://file.wulicode.com/mweb/2021/12/15810952501288.jpg](https://file.wulicode.com/mweb/2021/12/15810952501288.jpg)

## 开发者插件

### 命名方式

`lm_` 代表 Lemon Framework `dev` 代表开发