import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/': [
    {
      text: 'web 开发',
      link: 'web-dev/',
      icon: 'code',
      collapsible: true, // 是否可折叠
      expanded: false, // 是否展开
      children: [
        {
          text: 'nginx',
          link: 'web-dev/nginx/'
        },
        {
          text: '部署',
          link: 'web-dev/deploy/'
        },
        {
          text: 'Node JS',
          link: 'web-dev/node-js/'
        }
      ]
    },
    {
      text: '其他',
      icon: 'lightbulb',
      link: 'other/'
    }
  ]
})
