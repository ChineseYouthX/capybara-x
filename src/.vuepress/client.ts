import { defineClientConfig } from 'vuepress/client'
import Blog from './layouts/Blog.vue'

// import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
// import { setupSnowFall } from 'vuepress-theme-hope/presets/snowFall.js' // 雪花

// import 'vuepress-theme-hope/presets/shinning-feature-panel.scss' // 为项目主页的特性添加闪光效果
import 'vuepress-theme-hope/presets/bounce-icon.scss' // 为页面图标添加鼠标悬停的跳动效果
import 'vuepress-theme-hope/presets/hr-driving-car.scss' // 为所有 hr 元素添加驾驶的车图标

export default defineClientConfig({
  setup: () => {
    // setupTransparentNavbar({ type: "homepage" });
    // setupSnowFall() // 雪花
  },
  layouts: {
    Blog
  }
})
