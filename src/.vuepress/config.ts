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
    // algolia 站点验证
    [
        'meta',
      {
        name: 'algolia-site-verification',
        content: '2388DB042933D4BE'
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
    docsearchPlugin({
      appId: 'GJ0L5HSCA2',
      apiKey: '39972eb2e73154f3548e9cd3dac66904',
      indexName: '<INDEX_NAME>',
      locales: {
        '/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation',
            },
          },
        },
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
      },
    }),
  ]
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
