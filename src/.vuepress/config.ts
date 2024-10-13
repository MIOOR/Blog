import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "MIOOR",
  // description: "vuepress-theme-hope 的博客演示",

  head: [
    [
      "link",
      {
        href: "https://cdn.jsdelivr.net/npm/@callmebill/lxgw-wenkai-web@latest/lxgwwenkai-regular/result.css",
        rel: "stylesheet",
      },
  ]
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
