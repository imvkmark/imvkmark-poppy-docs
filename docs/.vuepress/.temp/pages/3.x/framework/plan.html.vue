<template><div><h1 id="开发计划" tabindex="-1"><a class="header-anchor" href="#开发计划" aria-hidden="true">#</a> 开发计划</h1>
<h2 id="版本计划" tabindex="-1"><a class="header-anchor" href="#版本计划" aria-hidden="true">#</a> 版本计划</h2>
<ol>
<li>modules 和 poppy 不同的地方是</li>
</ol>
<ul>
<li>manifest 交给 composer 部分</li>
<li>service provider 交给</li>
</ul>
<ol>
<li>system 配置文件可以独立出来</li>
<li>文件注册(publish)官方的可以使用统一的命名, 即 <code v-pre>poppy</code></li>
</ol>
<h2 id="开源" tabindex="-1"><a class="header-anchor" href="#开源" aria-hidden="true">#</a> 开源</h2>
<p>软件著作权
部分模块内部开发, 然后付费使用
addon 可以支持 数据库[支持 js 扩展]</p>
<h3 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h3>
<p>主要负责功能的介绍</p>
<h3 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h3>
<p>介绍 Frame/Module/System 模块</p>
<h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h3>
<p>演示链接</p>
<h3 id="帮助链接" tabindex="-1"><a class="header-anchor" href="#帮助链接" aria-hidden="true">#</a> 帮助链接</h3>
<ul>
<li><a href="https://www.nicetheme.cn/" target="_blank" rel="noopener noreferrer">https://www.nicetheme.cn/<ExternalLinkIcon/></a></li>
<li><a href="https://easyweb.vip/" target="_blank" rel="noopener noreferrer">https://easyweb.vip/<ExternalLinkIcon/></a></li>
<li><a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">https://vuepress.vuejs.org/zh/<ExternalLinkIcon/></a></li>
</ul>
<h3 id="需要完善" tabindex="-1"><a class="header-anchor" href="#需要完善" aria-hidden="true">#</a> 需要完善</h3>
<ul>
<li>
<p>[]命令行测试</p>
</li>
<li>
<p>[]页面注释检查</p>
</li>
<li></li>
<li>
<p>[]单元测试完善(类需要存在)</p>
</li>
<li>
<p>[x] 创建静态文档/ 框架介绍(雨雀)</p>
</li>
</ul>
<h2 id="考虑" tabindex="-1"><a class="header-anchor" href="#考虑" aria-hidden="true">#</a> 考虑</h2>
<p>目标: 模块化开发</p>
<ol>
<li>php 后端采用模块化开发, 模块化加载, 关于模块, 使用需要两个方案
. 安装
执行安装过程, 进行数据库初始化
安装权限, 功能, 页面
安装设置为 true
触发事件, 执行缓存
. 启用
注册数据库启用字段
更新缓存</li>
<li>权限</li>
</ol>
<ul>
<li>项目安装, 检测是否安装</li>
<li>项目中列表</li>
</ul>
</div></template>


