# ChangeLog

## 3.x

### 3.2

- php 最低限制 7.4
- composer 版本 2.*
- (framework) 放开 laravel 6.0 的限制至 6.*

### 3.1

- (framework) 支持安装
- (framework) 去除 Addon 加载
- (framework) 支持 poppy/文件夹配置
- (framework) 支持 manifest 文件扫描配置用于加载
- (framework) 扩展使用 ext.php 文件来加载配置,降低层级加载
- (framework) 取消 composer 之外的文件加载
- (core) 支持权限分离
- (core) 分离 rbac -> core
- (core) 分离 module -> core
- (system) 分离数据库和 system 模块
- (system) 上传图片组件默认不需要配置 token, 如果后台使用可以直接进行使用
- (system) 上传图片支持定义张数, 默认为 3 张
- (system) 加入黑白名单风险防控
- (system) 单用户登录
- (system) 封装 form, 支持 配置方式来调用 Form
- (system) poppy 设置使用 hook 方式
- (system) 加入退出登录接口
- (system) 验证码支持后台定义过期时间以及长度
- (system) 缓存使用 PyXxDef 定义
- (system) 重写持久化
- (system) 是否自动解封用户采用后台配置
- (system) Aliyun Oss 临时授权支持
- (system) Menu 访问简化, 支持域名生成
- (system) 支持 layui 动态表格并可以用 ListX 生成
- (system) 使用 x_app 来获取app定义的信息
- (system) Token 使用 jwt 进行验证
- (system) 默认使用国际号码来进行存储
- (system) 支持 Mock 工具
- (system) Sign 签名支持自定义
- (system) 支持上传配置和安装 aliyun-oss 组件
- (aliyun-push) Ali推送支持配置访问
