import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { seoPlugin } from '@vuepress/plugin-seo'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/images/pintia_logo.png',
    logoAlt: 'PTA Icon',
    repo: 'Mrright024/PTA_Problem_Sets_14',
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
      },
      {
        text: '编程题',
        link: '/program/7-1.md',
        children: [
          '/program/7-1.md',
          '/program/7-2.md',
          '/program/7-3.md',
          '/program/7-4.md',
          '/program/7-5.md',
          '/program/7-6.md',
          '/program/7-7.md',
          '/program/7-8.md',
          '/program/7-9.md',
          '/program/7-10.md',
          '/program/7-11.md',
          '/program/7-12.md',
          '/program/7-13.md',
          '/program/7-14.md',
          '/program/7-15.md',
          '/program/7-16.md',
          '/program/7-17.md',
          '/program/7-18.md',
          '/program/7-19.md',
          '/program/7-20.md',
          '/program/7-21.md',
          '/program/7-22.md',
          '/program/7-23.md',
          '/program/7-24.md',
          '/program/7-25.md',
          '/program/7-26.md',
          '/program/7-27.md',
          '/program/7-28.md',
          '/program/7-29.md',
          '/program/7-30.md',
          '/program/7-31.md',
          '/program/7-32.md',
          '/program/7-33.md',
          '/program/7-34.md',
          '/program/7-35.md',
          '/program/7-36.md',
          '/program/7-37.md',
          '/program/7-38.md',
        ]
      },
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
    copyCodePlugin({
      showInMobile: true,
    }),
    googleAnalyticsPlugin({
      id: 'G-Q7K6GXDZRC',
    }),
    seoPlugin({
      hostname: 'https://mrright024.github.io//PTA_Problem_Sets_14/',
      author: {
        name: 'William Kong',
        url: 'https://williamkong.xyz',
        email: 'admin@williamkong.xyz',
      },

    }),
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