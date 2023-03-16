# 策略

## 位置

策略放置在 `{module}/src/Models/Polices` 文件夹中

策略映射放在 `{module}/src/ServiceProvider.php` 文件中, 如下定义

```php
protected $policies = [
    PamRole::class    => RolePolicy::class,
    PamAccount::class => AccountPolicy::class,
];
```

## 策略权限

对特定用户，你可能希望通过指定的策略授权所有动作。
要达到这个目的，可以在策略中定义一个 `before` 方法。`before` 方法会在策略中其它所有方法之前执行，这样提供了一种方式来授权动作而不是指定的策略方法来执行判断。

使用这种方法的优势在于

- 可以在列表中是否显示按钮时候直接使用策略来进行定义, 并非判定两个权限
- 可以在用户操作时候进行权限和状态的多重判定

```php
class PamRolePolicy
{

    use PolicyTrait;

    /**
     * @var array 权限映射
     */
    protected static array $permissionMap = [
        'edit'       => 'backend:py-system.role.manage',
        'delete'     => 'backend:py-system.role.manage',
        'create'     => 'backend:py-system.role.manage',
        'permission' => 'backend:py-system.role.permissions',
    ];
    
    // ...
}
```

如果你想拒绝用户所有的授权，你应该在 `before` 方法中返回 `false`。如果返回的是`null`，则通过其它的策略方法来决定授权与否。

```php
/**
 * 策略映射
 */
trait PolicyTrait
{

    /**
     * @param PamAccount $pam     账号
     * @param string     $ability 能力
     * @return bool|null
     */
    public function before(PamAccount $pam, $ability)
    {
        $permission = self::$permissionMap[$ability] ?? '';
        return $permission ? $pam->capable($permission) : null;
    }
}
```

## 控制器

```php
class RoleController extends BackendController
{
    public function __construct()
    {
        parent::__construct();
        self::$permission = [
            'global' => 'backend:py-system.role.manage',
            'delete' => 'backend:py-system.role.delete',
            'menu'   => 'backend:py-system.role.permissions',
        ];
    }
}
```

这里定义的 permission 权限会在 `RbacPermission` 中间件中有拦截,让用户无法通过控制器来进入这个操作, 看到相关的数据.
