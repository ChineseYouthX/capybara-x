import { navbar } from 'vuepress-theme-hope'

export const enNavbar = navbar([
  '/en/',
  '/front-end/',
  '/blog/',
  {
    text: '其他',
    icon: 'lightbulb',
    children: [
      {
        text: '软考',
        children: ['/other/rk/gx/']
      }
    ]
  }
])
