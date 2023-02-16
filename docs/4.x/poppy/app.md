# 应用管理

## 应用流程

![](https://file.wulicode.com/note/2023/02-11/09-24-55889.png)


下发的应用 ID 和 密钥

```
appid     : 15
appsecret : 8987f93fc65c655cea50d83cd8b02785
```

原始参数

```
{
    "id": 5,
    "note": "单元测试应用",
    "title": "Testing 着朝",
    "file": "不参与签名",
    "_myname": "不参与签名",
    "images": [
        "https://test-oss.iliexiang.com/_res/images/01.jpg",
        "https://test-oss.iliexiang.com/_res/images/02.jpg"
    ]
} 
```

对数据追加  appid 和 timestamp 

```
{
    "id": 5,
    "note": "单元测试应用",
    "title": "Testing 着朝",
    "file": "不参与签名",
    "_myname": "不参与签名",
    "images": [
        "https://test-oss.iliexiang.com/_res/images/01.jpg",
        "https://test-oss.iliexiang.com/_res/images/02.jpg"
    ],
    "appid": 15,
    "timestamp": 1676077738
} 
```

对于下划线开始的参数和部分特殊参数不进行验签

特殊的参数有 `sign`, `image`, `file`, `appid`

对于特殊的参数进行清理

清理后的参数

```
{
    "id": "5",
    "note": "单元测试应用",
    "title": "Testing 着朝",
    "images": [
        "https://test-oss.iliexiang.com/_res/images/01.jpg",
        "https://test-oss.iliexiang.com/_res/images/02.jpg"
    ],
    "timestamp": "1676077738"
}  
```

对于清理后的参数根据一级 key 进行字母排序

排序后的结果

```
{
    "id": "5",
    "images": [
        "https://test-oss.iliexiang.com/_res/images/01.jpg",
        "https://test-oss.iliexiang.com/_res/images/02.jpg"
    ],
    "note": "单元测试应用",
    "timestamp": "1676077738",
    "title": "Testing 着朝"
}  
```

对数据进行转 kv 操作

转换后的结果

```
id=5,images=["https://test-oss.iliexiang.com/_res/images/01.jpg","https://test-oss.iliexiang.com/_res/images/02.jpg"],note=单元测试应用,timestamp=1676077738,title=Testing 着朝
```

对 kv 后的数据进行和 secret 的 md5 运算

```php
$sign = md5(md5($kvStr) . $secret)
// 1dcdd8d2dffbe1ebaa9448247b18eada
```