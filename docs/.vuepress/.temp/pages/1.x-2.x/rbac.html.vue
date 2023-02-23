<template><div><h1 id="rbac-在项目中的实现" tabindex="-1"><a class="header-anchor" href="#rbac-在项目中的实现" aria-hidden="true">#</a> rbac 在项目中的实现</h1>
<h2 id="什么是rbac" tabindex="-1"><a class="header-anchor" href="#什么是rbac" aria-hidden="true">#</a> 什么是RBAC</h2>
<p>RBAC（Role-Based Access Control ）基于角色的访问控制, RBAC认为授权实际就是who,what,how三者之间的关系，即who对what进行how的操作。</p>
<ul>
<li>Who,权限的拥用者或主体（如Principal、User、Group、Role、Actor等等）；</li>
<li>what,权限针对的对象或资源（Resource、Class） ；</li>
<li>How,具体的权限（Privilege,正向授权与负向授权）。</li>
</ul>
<p>简单一点说吧就是，我们通过给角色授权，然后将附有权利的角色施加到某个用户身上，这样用户就可以实施相应的权利了。通过中间角色的身份，是权限管理更加灵活：角色的权利可以灵活改变，用户的角色的身份可以随着场所的不同而发生改变等。这样这套RBAC就几乎可以运用到所有的权限管理的模块上了。</p>
<h2 id="rbac-权限模型" tabindex="-1"><a class="header-anchor" href="#rbac-权限模型" aria-hidden="true">#</a> Rbac 权限模型</h2>
<p><img src="https://file.wulicode.com/mweb/2021/12/15810952070762.jpg" alt="https://file.wulicode.com/mweb/2021/12/15810952070762.jpg"></p>
<h2 id="前后台权限定义" tabindex="-1"><a class="header-anchor" href="#前后台权限定义" aria-hidden="true">#</a> 前后台权限定义</h2>
<h3 id="后台角色-权限" tabindex="-1"><a class="header-anchor" href="#后台角色-权限" aria-hidden="true">#</a> 后台角色/权限</h3>
<p><strong>后台角色列表</strong> - <code v-pre>root</code> : 超级管理员</p>
<p><strong>后台权限初始化</strong> 导入 <code v-pre>acl/desktop</code> 的设置项目到权限表</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php artisan lemon:rbac init --type=desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="后台角色-权限-1" tabindex="-1"><a class="header-anchor" href="#后台角色-权限-1" aria-hidden="true">#</a> 后台角色/权限</h3>
<p><strong>前台权限初始化</strong> 导入 <code v-pre>acl/front</code> 的设置项目到权限表</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php artisan lemon:rbac init --type=front
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="后台权限设定" tabindex="-1"><a class="header-anchor" href="#后台权限设定" aria-hidden="true">#</a> 后台权限设定</h2>
<p>设定位置</p>
<p><img src="https://file.wulicode.com/mweb/2021/12/15810952155542.jpg" alt="https://file.wulicode.com/mweb/2021/12/15810952155542.jpg"></p>
</div></template>


