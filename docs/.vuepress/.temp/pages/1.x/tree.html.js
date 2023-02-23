export const data = JSON.parse("{\"key\":\"v-01474e8e\",\"path\":\"/1.x/tree.html\",\"title\":\"文件目录树\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1676513659000,\"contributors\":[{\"name\":\"duoli\",\"email\":\"zhaody901@126.com\",\"commits\":1}]},\"filePathRelative\":\"1.x/tree.md\"}")

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
