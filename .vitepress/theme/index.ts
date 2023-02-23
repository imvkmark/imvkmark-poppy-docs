import './styles/index.css'
import { App, h } from 'vue'
import { VPTheme } from '@vue/theme'
import PreferenceSwitch from './components/PreferenceSwitch.vue'
import { filterHeadersByPreference, preferComposition, preferSFC } from './components/preferences'
// import SponsorsAside from './components/SponsorsAside.vue'
import VueSchoolLink from './components/VueSchoolLink.vue'
import Home from "@theme/components/Home.vue";
import NavBarTitle from "@theme/components/NavBarTitle.vue";
// import Banner from './components/Banner.vue'

export default Object.assign({}, VPTheme, {
    Layout: () => {
        // @ts-ignore
        return h(VPTheme.Layout, null, {
            // banner: () => h(Banner),
            'sidebar-top': () => h(PreferenceSwitch),
            'navbar-title': () => h(NavBarTitle),
            // 'aside-mid': () => h(SponsorsAside)
        })
    },
    enhanceApp({ app }: { app: App }) {
        app.provide('prefer-composition', preferComposition)
        app.provide('prefer-sfc', preferSFC)
        app.provide('filter-headers', filterHeadersByPreference)
        app.component('VueSchoolLink', VueSchoolLink)
        app.component('Home', Home)
    }
})
