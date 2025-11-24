import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

import theme from './theme.js'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/',
  port: 9997,

  locales: {
    '/': {
      // 设置正在使用的语言
      lang: 'zh-CN',
      title: '',
      description: ''
    },
    '/en/': {
      lang: 'en-US',
      title: '',
      description: ''
    }
  },

  theme,

  clientConfigFile: path.resolve(__dirname, './client.ts'),

  alias: {
    '@theme-hope/modules/blog/components/BlogHero': path.resolve(
      __dirname,
      './components/BlogHero.vue'
    )
  },

  plugins: [
    docsearchPlugin({
      // 配置项
      appId: 'ROLCGUA9Y4',
      apiKey: 'a4fb0f414b552b003fb0369c92551eb4',
      indexName: 'capybara-x'
    })
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
})
