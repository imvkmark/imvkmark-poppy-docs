<template><div><h1 id="前后端分离项目约定" tabindex="-1"><a class="header-anchor" href="#前后端分离项目约定" aria-hidden="true">#</a> 前后端分离项目约定</h1>
<h2 id="表单公共项目" tabindex="-1"><a class="header-anchor" href="#表单公共项目" aria-hidden="true">#</a> 表单公共项目</h2>
<h3 id="表单项目" tabindex="-1"><a class="header-anchor" href="#表单项目" aria-hidden="true">#</a> 表单项目</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"fields"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"//demo/form/Checkbox"</span><span class="token punctuation">,</span>
	<span class="token property">"method"</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
	<span class="token property">"buttons"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"reset"</span><span class="token punctuation">,</span> <span class="token string">"submit"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>fields</code>  : 当前返回的所有组合字段
<code v-pre>action</code>  : 提交的 URL
<code v-pre>method</code>  : 提交方法
<code v-pre>buttons</code> : 允许的按钮内容</p>
<h3 id="表单公共字段" tabindex="-1"><a class="header-anchor" href="#表单公共字段" aria-hidden="true">#</a> 表单公共字段</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"checkbox_required"</span><span class="token punctuation">,</span>
	<span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"checkbox"</span><span class="token punctuation">,</span>
	<span class="token property">"value"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Checkbox"</span><span class="token punctuation">,</span>
	<span class="token property">"placeholder"</span><span class="token operator">:</span> <span class="token string">"请选择"</span><span class="token punctuation">,</span>
	<span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"required"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">"help"</span><span class="token operator">:</span> <span class="token string">"必选 至少一项"</span><span class="token punctuation">,</span>
	<span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">,</span>
			<span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"Name"</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>name</code>  : 表单提交的字段名称
<code v-pre>type</code>  : 表单的类型
<code v-pre>value</code> : 提交的值
<code v-pre>label</code> : 显示的标题标签内容
<code v-pre>placeholder</code>  : 占位符
<code v-pre>rules</code> : 提交的规则
<code v-pre>help</code> : 帮助文本
<code v-pre>options</code> : 选项值, 当是 checkbox/radio/select 等存在多选信息的时候存在此项目</p>
<h2 id="表单项目-1" tabindex="-1"><a class="header-anchor" href="#表单项目-1" aria-hidden="true">#</a> 表单项目</h2>
<h3 id="checkbox-多选" tabindex="-1"><a class="header-anchor" href="#checkbox-多选" aria-hidden="true">#</a> Checkbox / 多选</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    '...'<span class="token punctuation">,</span>
    <span class="token property">"display"</span><span class="token operator">:</span> <span class="token string">"inline"</span><span class="token punctuation">,</span>
    <span class="token property">"check_all"</span><span class="token operator">:</span> <span class="token string">"N"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>display</code> : 显示样式 [inline|单行;stack|多行]
<code v-pre>check_all</code> : 是否显示多选按钮 [Y|N]</p>
<h2 id="type-类型说明" tabindex="-1"><a class="header-anchor" href="#type-类型说明" aria-hidden="true">#</a> Type 类型说明</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>form         : 表单
setting      : 设置
grid         : 列表
dialog       : 弹窗/Iframe 渲染. 里边的类型可能是form/setting 中的任意一种
static-table : 静态表格
board        : 看板类型/用于主页的数据显示(待定)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


