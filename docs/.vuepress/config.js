import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebar: [
      {
        text: '函数题',
        link: '/function/6-1.md',
        children: [
          '/function/6-1.md',
          '/function/6-2.md',
          '/function/6-3.md',
          '/function/6-4.md',
          '/function/6-5.md',
          '/function/6-6.md',
          '/function/6-7.md',
          '/function/6-8.md',
          '/function/6-9.md',
          '/function/6-10.md',
          '/function/6-11.md',
          '/function/6-12.md',
          '/function/6-13.md',
        ]
      }
    ],
    sidebarDepth: 2,
    lastUpdated: true,
  }),
  markdown: {
    headers: {
      level: [2,3,4],
    },
  },

  base: "/PTA_Problem_Sets_14/",
  lang: 'zh-CN',
  title: 'PTA Problem Sets 14',
  description: '记录PTA基础编程题目集题目和自己的解题记录',

  plugins: [
    mdEnhancePlugin({
      mathjax:true,
    }),
    shikiPlugin(),
  ],

  bundlerConfig: {
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElement.includes(tag),
        },
      },
    },
  },
})