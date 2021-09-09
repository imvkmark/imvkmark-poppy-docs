const sidebar = require("./sidebar.js");
const navbar = require("./navbar.js");
const { path } = require("@vuepress/utils");

module.exports = {
	lang: "zh-CN",
	title: "Poppy Framework 中文文档",
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
				apiKey: "eee6e259e4f1bf8fda4e0111ec2c7bd4",
				indexName: "lang",
				appId: "SXPLIEYR2X",
				locales: {
					"/": {
						placeholder: "Search",
					},
				},
			},
		],
	],
};
