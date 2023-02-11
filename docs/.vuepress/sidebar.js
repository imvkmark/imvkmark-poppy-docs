module.exports = {
	"/develop/": [
		{
			text: "约定",
			children: ["/develop/index.md", "/develop/spec.md", "/develop/changelog.md"],
		},
	],
	"/4.x/": [
		{
			text: "Poppy",
			children: [
				"/4.x/poppy/system.md",
				"/4.x/poppy/mgr-page.md",
				"/4.x/poppy/core.md",
				"/4.x/poppy/sms.md",
				"/4.x/poppy/aliyun-oss.md",
				"/4.x/poppy/aliyun-push.md",
				"/4.x/poppy/app.md",
				"/4.x/poppy/ext-alipay.md",
				"/4.x/poppy/ext-ip_store.md",
				"/4.x/poppy/ext-phpstan.md",
			],
		},
		{
			text: "升级",
			children: ["/4.x/upgrade/4.x.md", "/4.x/upgrade/3.2-4.0.md"],
		},
		{
			text: "[WIP]MgrApp",
			children: [
				"/4.x/poppy/mgr-app.md",
				"/4.x/poppy/mgr-app-table.md",
				"/4.x/poppy/mgr-app-grid.md",
				"/4.x/poppy/mgr-app-form.md",
			],
		},
	],
	"/1.x-2.x/": [
		{
			text: "2.x",
			children: [
				"/1.x-2.x/index.md",
				"/1.x-2.x/sample.md",
				"/1.x-2.x/acl.md",
				"/1.x-2.x/action.md",
				"/1.x-2.x/api.md",
				"/1.x-2.x/compass.md",
				"/1.x-2.x/env.md",
				"/1.x-2.x/lang.md",
				"/1.x-2.x/model-2.0.md",
				"/1.x-2.x/policy.md",
				"/1.x-2.x/rbac-role.md",
				"/1.x-2.x/rbac.md",
				"/1.x-2.x/route.md",
				"/1.x-2.x/upload.md",
			],
		},
		{
			text: "1.x",
			children: ["/1.x-2.x/model-1.0.md", "/1.x-2.x/tree-1.0.md"],
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
