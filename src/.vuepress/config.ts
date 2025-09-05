import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "MIOOR",
  // description: "vuepress-theme-hope 的博客演示",
  // 设置永久链接模式
  // permalinkPattern: ':year/:month/:day/:slug.html',
  head: [
    // 引入霞鹜文楷字体，仓库地址：https://github.com/CMBill/lxgw-wenkai-web
    [
      "link",
      {
        href: "https://cdn.jsdelivr.net/npm/@callmebill/lxgw-wenkai-web@latest/style.css",
        rel: "stylesheet",
      },
    ],
    [
        'meta',
      {
        name: 'algolia-site-verification',
        content: '921F431D245B9B4D'
      }
    ],
    // 从 Google Fonts 引入 JetBrains Mono 字体
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
      },
    ],
  ],

  theme,

  pagePatterns: [
    "**/*.md",
    "!.vuepress/**",
    "!.obsidian/**",
    "!.trash/**",
    "!.git/**",
    "!node_modules/**",
    "!draft/**",
    "!template/**",
  ],

  plugins: [
  ]
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
