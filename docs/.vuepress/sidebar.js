module.exports = {
	"/develop/": [
		{
			text: "约定",
			children: ["/develop/index.md", "/develop/spec.md", "/develop/changelog.md"],
		},
	],
	"/4.x/": [
		{
			text: "升级",
			children: ["/4.x/upgrade.md"],
		},
		{
			text: "组件",
			children: ["/4.x/components/mgr-app.md", "/4.x/components/core.md"],
		},
	],
	"/3.x/": [
		{
			text: "框架",
			children: [
				"/3.x/framework/readme.md",
				"/3.x/framework/extension.md",
				"/3.x/framework/plan.md",
				"/3.x/framework/resp.md",
				"/3.x/framework/tree.md",
			],
		},
		{
			text: "模块",
			children: [
				"/3.x/module/readme.md",
				"/3.x/module/action.md",
				"/3.x/module/event.md",
				"/3.x/module/hook.md",
				"/3.x/module/lang.md",
				"/3.x/module/menus.md",
				"/3.x/module/models.md",
				"/3.x/module/permission.md",
				"/3.x/module/policy.md",
				"/3.x/module/progress.md",
				"/3.x/module/qa.md",
			],
		},
		{
			text: "组件",
			children: [
				"/3.x/components/core.md",
				"/3.x/components/system.md",
				"/3.x/components/mgr-page.md",
				"/3.x/components/canal-es.md",
			],
		},
		{
			text: "项目",
			children: [
				"/3.x/project/readme.md",
				"/3.x/project/install.md",
				"/3.x/project/fe-mix.md",
				"/3.x/project/fe-backend.md",
				"/3.x/project/code-review.md",
				"/3.x/project/best-practice.md",
			],
		},
	],
};
