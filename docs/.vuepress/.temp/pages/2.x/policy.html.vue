<template><div><h1 id="策略-policy" tabindex="-1"><a class="header-anchor" href="#策略-policy" aria-hidden="true">#</a> 策略(Policy)</h1>
<h3 id="策略规范" tabindex="-1"><a class="header-anchor" href="#策略规范" aria-hidden="true">#</a> 策略规范</h3>
<ul>
<li>策略使用首字母小写的驼峰模式</li>
</ul>
<h3 id="策略位置" tabindex="-1"><a class="header-anchor" href="#策略位置" aria-hidden="true">#</a> 策略位置</h3>
<p>策略分为两个部分, 第一个部分是框架策略, 第二部分是项目策略</p>
<p><strong>框架策略</strong> LemonFramework 项目中使用 <code v-pre>app/Lemon/Repositories/LemonServiceProvider.php</code> 加载</p>
<p><strong>项目策略</strong> 项目策略位置 <code v-pre>app/Policies</code> 项目 Service 位置 <code v-pre>app/Providers/PolicyServiceProvider.php</code></p>
<h3 id="策略定义" tabindex="-1"><a class="header-anchor" href="#策略定义" aria-hidden="true">#</a> 策略定义</h3>
<p>随着应用逻辑越来越复杂，要处理的权限越来越多，将所有权限定义在<code v-pre>AuthServiceProvider</code>显然不是一个明智的做法，因此Laravel引入了策略类，策略类是一些原生的PHP类，和控制器基于资源对路由进行分组类似，策略类基于资源对权限进行分组管理。</p>
<p><strong>生成策略类</strong></p>
<p>可以使用如下Artisan命令生成<code v-pre>PostPolicy</code>策略类：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php artisan make:policy PostPolicy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成的策略类位于<code v-pre>app/Policies</code>目录。</p>
<p><strong>注册策略</strong></p>
<p>然后我们可以在<code v-pre>AuthServiceProvider</code>的<code v-pre>policies</code>属性中注册策略类：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>protected $policies = [
    Post::class => PostPolicy::class,
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们编辑<code v-pre>PostPolicy</code>如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php

namespace App\Policies;

use App\User;
use App\Post;

class PostPolicy{
    /**
     * 判断给定文章是否可以被给定用户更新
     *
     * @param  \App\User  $user
     * @param  \App\Post  $post
     * @return bool
     */
    public function update(User $user, Post $post)
    {
        return $user->id === $post->user_id;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注：所有策略类都通过服务容器进行解析，这意味着你可以在策略类的构造函数中类型提示任何依赖，它们将会自动被注入。</p>
</blockquote>
<h3 id="检查策略" tabindex="-1"><a class="header-anchor" href="#检查策略" aria-hidden="true">#</a> 检查策略</h3>
<p>如果为某个资源类型定义了策略类，Gate将会使用第一个参数来判断检查策略类上的哪个方法。</p>
<p>因此，要检查是否有权限更新某篇文章，只需要传入文章实例和update权限：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php

namespace App\Http\Controllers;

use Gate;
use App\User;
use App\Post;
use App\Http\Controllers\Controller;

class PostController extends Controller{
    /**
     * 更新给定文章
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        $post = Post::findOrFail($id);

        if (Gate::denies('update', $post)) {
            abort(403);
        }

        // 更新文章...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然也可以使用User模型和Blade指令检查权限。</p>
<p>此外，Laravel还提供了一个全局帮助函数<code v-pre>policy</code>来检查权限：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>if (policy($post)->update($user, $post)) {
    //
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制器授权" tabindex="-1"><a class="header-anchor" href="#控制器授权" aria-hidden="true">#</a> 控制器授权</h3>
<p>由于大多数授权都会在检查权限失败的情况下退出控制器方法，因此在控制器中检查权限有一条捷径（<code v-pre>AuthorizesRequests</code>trait提供，该trait在基类控制器<code v-pre>Controller</code>中被使用）：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php

namespace App\Http\Controllers;

use App\Post;
use App\Http\Controllers\Controller;

class PostController extends Controller{
    /**
     * 更新给定文章
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        $post = Post::findOrFail($id);
        $this->authorize('update', $post);
        // 更新文章...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和我们上面的例子一样，如果授权失败会抛出403错误。</p>
<p>最后，如果你的控制器方法名和策略类中的方法名相同，例如都是<code v-pre>update</code>，则可以省略<code v-pre>authorize</code>的第一个参数：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>public function update($id){
    $post = Post::findOrFail($id);
    $this->authorize($post);
    // 更新文章...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，<code v-pre>AuthorizesRequests</code>也提供了对非当前认证用户权限检查的支持：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$this->authorizeForUser($user, 'update', $post);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h3>
<ul>
<li><a href="http://laravelacademy.org/post/1337.html" target="_blank" rel="noopener noreferrer">Laravel 5.1 中的ACL用户授权及权限检查功能实现教程<ExternalLinkIcon/></a></li>
</ul>
</div></template>


