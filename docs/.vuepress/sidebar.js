module.exports = {
	"/": [
		{
			text: "项目",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/readme.md", "/project/install.md", "/project/project.md", "/project/todo.md"],
		},
	],
	"/framework/": [
		"/framework/readme.md",
		"/framework/build.md",
		"/framework/config.md",
		"/framework/extension.md",
		"/framework/tree.md",
		"/framework/resp.md",
	],
	"/module/": [
		"/module/readme.md",
		"/module/action.md",
		"/module/apidoc.md",
		"/module/event.md",
		"/module/hook.md",
		"/module/lang.md",
		"/module/menus.md",
		"/module/models.md",
		"/module/permission.md",
		"/module/policy.md",
		"/module/progress.md",
	],
	"/poppy/": [
		{
			text: "系统",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/poppy/system/readme.md", "/poppy/system/config.md"],
		},
		{
			text: "核心",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/poppy/core/readme.md", "/poppy/core/cache.md", "/poppy/core/config.md", "/poppy/core/sami.md"],
		},
	],
};
