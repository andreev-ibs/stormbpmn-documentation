import comp from "C:/Users/kotov/stormbpmn-documentation/src/.vuepress/.temp/pages/features/0_home-page.html.vue"
const data = JSON.parse("{\"path\":\"/features/0_home-page.html\",\"title\":\"Главная страница\",\"lang\":\"ru-RU\",\"frontmatter\":{\"order\":1,\"icon\":null},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"features/0_home-page.md\"}")
export { comp, data }

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
