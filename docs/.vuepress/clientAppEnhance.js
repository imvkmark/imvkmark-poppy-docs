import { defineClientAppEnhance } from "@vuepress/client";
import Home from "./comp/Home.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
	app.component("Home", Home);
});
