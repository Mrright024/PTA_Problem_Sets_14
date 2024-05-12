import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  base: "/PTA_Problem_Sets_14",
  lang: 'zh-CN',
  title: 'PTA基础编程题目集记录',
  description: '记录PTA基础编程题目集题目和自己的解题记录',

  plugins: [
    mdEnhancePlugin({
      mathjax:true,
    })
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