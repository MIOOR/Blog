import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "MIOOR",
  // description: "vuepress-theme-hope 的博客演示",

  // 引入霞鹜文楷字体，仓库地址：https://github.com/CMBill/lxgw-wenkai-web
  head: [
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
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
