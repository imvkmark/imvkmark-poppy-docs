const sidebar = require("./sidebar.js");
const navbar = require("./navbar.js");
const { path } = require("@vuepress/utils");

module.exports = {
	lang: "zh-CN",
	title: "Poppy Framework",
	base: "/doc/",
	themeConfig: {
		logo: "/images/logo.png",
		sidebar,
		navbar,
		displayAllHeaders: true,
		smoothScroll: true,
	},
	markdown: {
		code: {
			// lineNumbers: false,
		},
	},
	plugins: [
		[
			"@vuepress/docsearch",
			{
				apiKey: "9eca016e40335ee789f9a73253c13be1",
				indexName: "poppy",
				appId: "LD89A1JN8Y",
				locales: {
					"/": {
						placeholder: "Search",
					},
				},
			},
		],
	],
};
