import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Home", defineAsyncComponent(() => import("/Users/duoli/Documents/workbench/dl.poppy/docs/docs/.vuepress/comp/Home.vue")))
  },
}
