export const data = JSON.parse("{\"key\":\"v-0d365097\",\"path\":\"/1.x-2.x/tree-1.0.html\",\"title\":\"文件目录树 v1.0\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1673852096000,\"contributors\":[{\"name\":\"多厘\",\"email\":\"zhaody901@126.com\",\"commits\":1}]},\"filePathRelative\":\"1.x-2.x/tree-1.0.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
