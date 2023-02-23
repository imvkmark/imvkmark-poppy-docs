<template><div><h1 id="rbac-角色控制" tabindex="-1"><a class="header-anchor" href="#rbac-角色控制" aria-hidden="true">#</a> RBAC 角色控制</h1>
<p>这个 rbac 角色控制修改自 entrust. 因为 entrust 的 <code v-pre>@can</code> 用法和 laravel 中的 Acl 控制 <code v-pre>@can</code>冲突, 故而重新对 entrust 进行修改. 改掉了其中<code v-pre>$user-&gt;can()</code> 同样改定为 <code v-pre>$user-&gt;capable()</code></p>
<p>角色控制和acl是两个不同的权限控制, 角色控制是用户能否进行某项操作, acl 是这个用户在某个阶段能否进行某个操作, 这两个一起用来是没有冲突的.</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>在<code v-pre>config/app.php</code> 的 <code v-pre>providers</code>数组中添加服务提供者</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>App\Lemon\Repositories\Providers\RbacServiceProvider::class,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>让其注册 rbac 类和<code v-pre>@permission</code> 等语法支持</p>
<p>在 <code v-pre>aliases</code> 数组中添加</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'Rbac'      => App\Lemon\Repositories\Application\Rbac\Facades\RbacFacade::class,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>让其支持 <code v-pre>\Rbac::capable()</code> 等的快捷用法</p>
<p>如果你使用 <a href="about:blank#middleware">Middleware</a> (Laravel 5.1+) 你需要添加</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'role' => \Imvkmark\L5Rbac\Middleware\L5RbacRole::class,'permission' => \Imvkmark\L5Rbac\Middleware\L5RbacPermission::class,'ability' => \Imvkmark\L5Rbac\Middleware\L5RbacAbility::class,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>到 <code v-pre>app/Http/Kernel.php</code> 的 <code v-pre>routeMiddleware</code> 数组</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<p>设置 <code v-pre>config/auth.php</code> 的值来设定正确的用户表和模型, 同样也需要设定 <code v-pre>rbac.php</code> 来设定自定义表名称和命名空间.</p>
<h3 id="用户和角色关联" tabindex="-1"><a class="header-anchor" href="#用户和角色关联" aria-hidden="true">#</a> 用户和角色关联</h3>
<p>数据表意义: - <code v-pre>pam_role</code> — 存储角色 - <code v-pre>pam_permission</code> — 存储权限 - <code v-pre>pam_role_account</code> — 存储角色和用户的多对多关系 - <code v-pre>pam_permission_role</code> — 存储权限和角色的多对多关系</p>
<h3 id="模型" tabindex="-1"><a class="header-anchor" href="#模型" aria-hidden="true">#</a> 模型</h3>
<h3 id="role" tabindex="-1"><a class="header-anchor" href="#role" aria-hidden="true">#</a> Role</h3>
<p><code v-pre>Role</code> 模型有以下几个属性 - <code v-pre>name</code> — 角色的唯一名称, 英文标识, 例如 “admin”, “owner”, “employee”. - <code v-pre>display_name</code> — 角色可以被人识别的显示的名称(可选) - <code v-pre>description</code> — 更详细的描述(可选)</p>
<h3 id="permission" tabindex="-1"><a class="header-anchor" href="#permission" aria-hidden="true">#</a> Permission</h3>
<p><code v-pre>Permission</code> 模型和 <code v-pre>Role</code> 有类似的属性: - <code v-pre>name</code> — 唯一的权限名称, 例如: “create-post”, “edit-user”, “post-payment”, “mailing-list-subscribe”. - <code v-pre>display_name</code> — 权限的描述信息(可选) “Create Posts”, “Edit Users”, “Post Payments”, “Subscribe to mailing list”. - <code v-pre>description</code> — 更详细的权限描述信息</p>
<h3 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> User</h3>
<p>使用 <code v-pre>RbacUserTrait</code> 在系统中的 <code v-pre>User</code> 模型</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php

use App\Lemon\Repositories\Application\Rbac\Traits\RbacUserTrait;
class User extends Eloquent {    
    use RbacUserTrait;  
    // add this trait to your user model    
    // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个会启用用户和<code v-pre>Role</code> 关联关系, 并且给<code v-pre>User</code>模型添加以下方法 <code v-pre>roles()</code>, <code v-pre>hasRole($name)</code>, <code v-pre>capble($permission)</code>, <code v-pre>ability($roles, $permissions, $options)</code></p>
<p>添加完成之后不要忘记更新 composer 的自动加载文件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>composer dump-autoload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="soft-deleting" tabindex="-1"><a class="header-anchor" href="#soft-deleting" aria-hidden="true">#</a> Soft Deleting</h3>
<p>The default migration takes advantage of <code v-pre>onDelete('cascade')</code> clauses within the pivot tables to remove relations when a parent record is deleted. If for some reason you cannot use cascading deletes in your database, the EntrustRole and EntrustPermission classes, and the HasRole trait include event listeners to manually delete records in relevant pivot tables. In the interest of not accidentally deleting data, the event listeners will <strong>not</strong> delete pivot data if the model uses soft deleting. However, due to limitations in Laravel’s event listeners, there is no way to distinguish between a call to <code v-pre>delete()</code> versus a call to <code v-pre>forceDelete()</code>. For this reason, <strong>before you force delete a model, you must manually delete any of the relationship data</strong> (unless your pivot tables uses cascading deletes). For example:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$role = Role::findOrFail(1); 
// Pull back a given role
// Regular Delete
$role->delete(); 
// This will work no matter what
// Force Delete
$role->users()->sync([]); 
// Delete relationship data
$role->perms()->sync([]); 
// Delete relationship data
$role->forceDelete(); 
// Now force delete will work regardless of whether the pivot table has cascading delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<p>下面开始创建角色和权限</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$owner = new Role();
$owner->name         = 'owner';
$owner->display_name = 'Project Owner'; 
// optional
$owner->description  = 'User is the owner of a given project'; 
// optional
$owner->save();
$admin = new Role();
$admin->name         = 'admin';
$admin->display_name = 'User Administrator'; 
// optional
$admin->description  = 'User is allowed to manage and edit other users'; 
// optional
$admin->save();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来， 给用户赋予角色， 我们使用 <code v-pre>HasRole</code> trait 来非常方便的给用户赋予固定的角色</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$user = User::where('username', '=', 'michele')->first();
// role attach alias
$user->attachRole($admin); 
// parameter can be an Role object, array, or id
// or eloquent's original technique
$user->roles()->attach($admin->id); 
// id only
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们给角色赋予权限</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$createPost = new Permission();
$createPost->name         = 'create-post';
$createPost->display_name = 'Create Posts'; 
// optional
// Allow a user to...
$createPost->description  = 'create new blog posts'; 
// optional$createPost->save();
$editUser = new Permission();
$editUser->name         = 'edit-user';
$editUser->display_name = 'Edit Users'; 
// optional
// Allow a user to...
$editUser->description  = 'edit existing users'; 
// optional
$editUser->save();
$admin->attachPermission($createPost);
// equivalent to 
$admin->perms()->sync(array($createPost->id));
$owner->attachPermissions(array($createPost, $editUser));
// equivalent to 
$owner->perms()->sync(array($createPost->id, $editUser->id));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查-roles-和-permissions" tabindex="-1"><a class="header-anchor" href="#检查-roles-和-permissions" aria-hidden="true">#</a> 检查 Roles 和 Permissions</h3>
<p>我们通过以下方式来检测</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$user->hasRole('owner');   // false$user->hasRole('admin');   // true$user->capable('edit-user');   // false$user->capable('create-post'); // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>hasRole()</code> 和 <code v-pre>capable()</code> 接收数组形式的角色和权限来进行检测</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$user->hasRole(['owner', 'admin']);       // true$user->capable(['edit-user', 'create-post']); // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认, 如果任何一个权限或者角色通过都会返回 <code v-pre>true</code>, 如果传递第二个参数 <code v-pre>true</code> , 则要求<code v-pre>所有</code>的权限都必须检测通过才能返回 <code v-pre>true</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$user->hasRole(['owner', 'admin']);             
// true
$user->hasRole(['owner', 'admin'], true);       
// false, user does not have admin role
$user->capable(['edit-user', 'create-post']);       
// true
$user->capable(['edit-user', 'create-post'], true); 
// false, user does not have edit-user permission
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个<code v-pre>用户</code>能够拥有多个<code v-pre>角色</code>, 反之亦然.</p>
<p><code v-pre>Rbac</code> 对当前用户存在两个方法 <code v-pre>capable()</code> 和 <code v-pre>hasRole()</code>来检测是否有这个角色或者有相关的权限</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Rbac::hasRole('role-name');
Rbac::capable('permission-name');
// is identical to
Auth::user()->hasRole('role-name');
Auth::user()->capable('permission-name');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你同样可以使用占位符来检测匹配的权限.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// match any admin permission
$user->capable("admin.*"); 
// true
// match any permission about users
$user->capable("*_users"); 
// true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="user-ability" tabindex="-1"><a class="header-anchor" href="#user-ability" aria-hidden="true">#</a> User ability</h3>
<p><code v-pre>ability</code> 方法是更具有优势的一个请求方法. 他需要传递三个参数</p>
<ul>
<li><code v-pre>roles</code> 一系列需要检测的角色</li>
<li><code v-pre>permissions</code> 一系列权限</li>
</ul>
<p>每组角色或权限都可以使用数组或者使用 <code v-pre>,</code> 分隔</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$user->ability(array('admin', 'owner'), array('create-post', 'edit-user'));
// or$user->ability('admin,owner', 'create-post,edit-user');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这会检测用户是否有相关的权限或者角色. 如上说明: 如果用户是 <code v-pre>admin</code> 角色并且拥有<code v-pre>create-post</code>则返回 <code v-pre>true</code>.</p>
<p>第三个参数是个可选的数组.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$options = array(    
    'validate_all' => true | false (Default: false),    'return_type'  => boolean | array | both (Default: boolean)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>validate_all</code> 是否检测所有的权限, 或者说只要是存在匹配则返回<code v-pre>true</code>.</li>
<li><code v-pre>return_type</code> 指定返回的类型: <code v-pre>boolean</code>, <code v-pre>array</code>, 或者两个都返回</li>
</ul>
<p>下面是示例 :</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$options = array(    
    'validate_all' => true,    
    'return_type' => 'both'
);
list($validate, $allValidations) = $user->ability(    
    array('admin', 'owner'),    
    array('create-post', 'edit-user'),    
    $options
);
var_dump($validate);
// bool(false)
var_dump($allValidations);
// array(4) {
//     ['role'] => bool(true)
//     ['role_2'] => bool(false)
//     ['create-post'] => bool(true)
//     ['edit-user'] => bool(false)
// }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Rbac</code> 有一个 <code v-pre>ability()</code> 快捷方式来检测当前的用户</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Rbac::ability('admin,owner', 'create-post,edit-user');// is identical toAuth::user()->ability('admin,owner', 'create-post,edit-user');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="blade-语法" tabindex="-1"><a class="header-anchor" href="#blade-语法" aria-hidden="true">#</a> Blade 语法</h3>
<p>在 blade 模板中有三个标签可用: 传递的值会直接传递给 <code v-pre>Rbac</code> 函数</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>@role('admin')    &lt;p>This is visible to users with the admin role. Gets translated to    \Rbac::role('admin')&lt;/p>

@endrole

@permission('manage-admins')    

&lt;p>This is visible to users with the given permissions. Gets translated to    \Rbac::capable('manage-admins'). The @can directive is already taken by core    laravel authorization package, hence the @permission directive instead.&lt;/p>

@endpermission

@ability('admin,owner', 'create-post,edit-user')    
&lt;p>This is visible to users with the given abilities. Gets translated to    \Rbac::ability('admin,owner', 'create-post,edit-user')&lt;/p>
@endability
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="middleware-中间件" tabindex="-1"><a class="header-anchor" href="#middleware-中间件" aria-hidden="true">#</a> Middleware 中间件</h3>
<p>你可以使用中间件来过滤路由或者是一组路由, 通过权限或者是角色</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Route::group([
    'prefix' => 'admin', 
    'middleware' => ['role:admin']
], function() {    
    Route::get('/', 'AdminController@welcome');    
    Route::get('/manage', [
        'middleware' => ['permission:manage-admins'], 
        'uses' => 'AdminController@manageAdmins'
    ]);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is possible to use pipe symbol as <em>OR</em> operator: 也可以使用管道符号 <code v-pre>|</code> 来替代 <code v-pre>OR</code> 选项</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'middleware' => ['role:admin|root']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code v-pre>AND</code> 方法则需要传递多个值给中间件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'middleware' => ['permission:owner', 'permission:writer']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更多的中间件兼容性用法支持 <code v-pre>ability</code>方式,他接受三个参数: roles, permissions, validate_all</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>'middleware' => ['ability:admin|owner,create-post|edit-user,true']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="路由过滤语法" tabindex="-1"><a class="header-anchor" href="#路由过滤语法" aria-hidden="true">#</a> 路由过滤语法</h3>
<p>通过 权限/ 角色来过滤路由的方式是在 <code v-pre>app/Http/routes.php</code> 文件中调用:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// only users with roles that have the 'manage_posts' permission will be able to access any route within admin/post
Rbac::routeNeedsPermission('admin/post*', 'create-post');

// only owners will have access to routes within admin/advanced
Rbac::routeNeedsRole('admin/advanced*', 'owner');// optionally the second parameter can be an array of permissions or roles

// user would need to match all roles or permissions for that route
Rbac::routeNeedsPermission('admin/post*', array('create-post', 'edit-comment'));
Rbac::routeNeedsRole('admin/advanced*', array('owner','writer'));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上的方法都接受第三个参数, 如果第三个参数传递为空则返回 <code v-pre>App::abort(403)</code>, 否则返回其他的输入值</p>
<p>所以你可以如下使用 :</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Rbac::routeNeedsRole('admin/advanced*', 'owner', Redirect::to('/home'));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然也可以传递第四个参数, 默认是 <code v-pre>true</code> 他的意思是检查所有给定的 roles/permissions</p>
<p>如果设置为 false, 函数仅仅在用户角色不符合同时权限也不符合的时候返回 <code v-pre>false</code>. 这个在管理员允许多组用户的时候会非常有用</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// if a user has 'create-post', 'edit-comment', or both they will have access
Rbac::routeNeedsPermission('admin/post*', array('create-post', 'edit-comment'), null, false);

// if a user is a member of 'owner', 'writer', or both they will have access
Rbac::routeNeedsRole('admin/advanced*', array('owner','writer'), null, false);

// if a user is a member of 'owner', 'writer', or both, or user has 'create-post', 'edit-comment' they will have access
// if the 4th parameter is true then the user must be a member of Role and must have Permission
Rbac::routeNeedsRoleOrPermission(    
    'admin/advanced*',    
    array('owner', 'writer'),    
    array('create-post', 'edit-comment'),    
    null,    
    false
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由过滤" tabindex="-1"><a class="header-anchor" href="#路由过滤" aria-hidden="true">#</a> 路由过滤</h3>
<p><code v-pre>Rbac</code> roles/permissions 也能够很简单的写在路由的过滤器中通过 Facade 进行权限控制</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Route::filter('manage_posts', function(){    
    // check the current user    
    if (!Rbac::capable('create-post')) {        
        return Redirect::to('admin');    
    }
});

// only users with roles that have the 'manage_posts' permission will be able to access any admin/post route
Route::when('admin/post*', 'manage_posts');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过滤一个角色:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Route::filter('owner_role', function(){    
    // check the current user    
    if (!Rbac::hasRole('Owner')) {        
        App::abort(403);    
    }
});
// only owners will have access to routes within admin/advancedRoute::when('admin/advanced*', 'owner_role');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示 <code v-pre>Rbac::hasRole()</code> 和 <code v-pre>Rbac::capable()</code> 检查用户是否已经登陆同时这个用户是否有这个权限来操作这个功能. 如果用户未登录则返回的值一定是 false;</p>
<h2 id="错误提示" tabindex="-1"><a class="header-anchor" href="#错误提示" aria-hidden="true">#</a> 错误提示</h2>
<p><code v-pre>$user-&gt;capable()</code> 的权限必须在 acl 中定义, 并且更新到权限表中, 否则返回肯定是错误的</p>
</div></template>


