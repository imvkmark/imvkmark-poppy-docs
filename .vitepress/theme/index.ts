import { App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Home from "@theme/components/Home.vue";

export default Object.assign({}, DefaultTheme, {
    enhanceApp({ app }: { app: App }) {
        app.component('Home', Home)
        app.component('Search', Home)
    }
})
