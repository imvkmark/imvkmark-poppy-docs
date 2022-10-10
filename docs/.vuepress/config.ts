import { defaultTheme } from "vuepress";

const sidebar = require("./sidebar.js");
const navbar = require("./navbar.js");
import { path } from "@vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { tocPlugin } from "@vuepress/plugin-toc";

module.exports = {
	lang: "zh-CN",
	title: "Poppy Framework",
	base: "/",
	theme: defaultTheme({
		navbar,
		sidebar,
		logo: "/images/logo.png",
		repo: "https://github.com/dadi-cn/poppy-docs",
		docsBranch: "master",
		docsDir: "docs",
	}),
	markdown: {
		code: {
			// lineNumbers: false,
		},
	},
	plugins: [
		tocPlugin({}),
		registerComponentsPlugin({
			components: {
				Home: path.resolve(__dirname, "./comp/Home.vue"),
			},
		}),
	],
};
