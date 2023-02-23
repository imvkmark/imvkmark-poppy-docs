<template><div><h1 id="compass-lemoncms" tabindex="-1"><a class="header-anchor" href="#compass-lemoncms" aria-hidden="true">#</a> compass - LemonCMS</h1>
<h2 id="样式文件的管理" tabindex="-1"><a class="header-anchor" href="#样式文件的管理" aria-hidden="true">#</a> 样式文件的管理</h2>
<h3 id="使用compass" tabindex="-1"><a class="header-anchor" href="#使用compass" aria-hidden="true">#</a> 使用compass</h3>
<p>使用compass 建立并且管理样式文件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>compass create myproject
compass install blueprint
compass install blueprint/link_icons
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样式文件命名" tabindex="-1"><a class="header-anchor" href="#样式文件命名" aria-hidden="true">#</a> 样式文件命名</h3>
<p><strong>title</strong>: 标题</p>
<p><strong>list</strong> : 列表</p>
<p>左侧点状列表 * list-greyDot: * list-redDot:</p>
<p><strong>bdr</strong>:边框</p>
<p>bdr-rad-s: bdr-rad-m: bdr-rad-l:</p>
<p><strong>alpha</strong>: 背景透明度</p>
<p>不常用, 写在样式里</p>
<p><strong>table</strong>: 基础的table样式</p>
<p><strong>btn</strong> : 基础的按钮样式 button input:button</p>
<p>input, textarea(text) 滑过 默认 焦点</p>
<p>tip-error tip-success tip-warning</p>
<p>icon-s icon-m icon-l icon 元素的使用以及上下居中对齐</p>
<h3 id="对seajs-的调用" tabindex="-1"><a class="header-anchor" href="#对seajs-的调用" aria-hidden="true">#</a> 对seajs 的调用</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;script>    
var lemon = lemon || {};    
lemon.seajsBase = 'http://www.www.cc/mark/re/Public/Js/';
&lt;/script>
&lt;script src="http://www.www.cc/mark/re/Public/Js/global.js">&lt;/script>
&lt;script src="http://www.www.cc/mark/re/Public/Js/libs/seajs/2.2.0/seajs.js">&lt;/script>
&lt;script src="http://www.www.cc/mark/re/Public/Js/libs/config.js">&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对元素的大小进行操控" tabindex="-1"><a class="header-anchor" href="#对元素的大小进行操控" aria-hidden="true">#</a> 对元素的大小进行操控</h2>
<p>.select-s .select .select-l</p>
<p>.checklist .checklist-line</p>
<p>.date .date-s .date-l</p>
</div></template>


