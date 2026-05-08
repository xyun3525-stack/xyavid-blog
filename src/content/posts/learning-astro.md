---
title: "学习 Astro 的笔记"
date: 2026-05-05
excerpt: "记录在学习 Astro 静态站点框架过程中的关键概念和实践心得。"
tags: ["Astro", "前端", "静态站点"]
draft: false
---

# 学习 Astro 的笔记

## 什么是 Astro

Astro 是一个现代静态站点框架，它最核心的理念是**默认输出零 JavaScript**。对于内容驱动的网站（博客、文档、营销页面等），这是一个巨大的优势。

## 核心概念

### 岛屿架构（Islands Architecture）

Astro 把页面上的交互式 UI 组件称为"岛屿"。页面的大部分是静态 HTML，只有需要交互的部分才会加载 JavaScript。

```astro
---
// 这个组件在服务端渲染，输出零 JS
import StaticHeader from '../components/Header.astro';
// 这个组件在客户端激活
import SearchBox from '../components/SearchBox.jsx';
---

<StaticHeader />
<SearchBox client:load />
```

### 内容集合（Content Collections）

这是我对 Astro 最喜欢的功能之一。你可以定义 Markdown 文章的 schema，Astro 会自动做类型校验：

```ts
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string().max(200),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
```

### 文件路由

`src/pages/` 下的文件自动映射为路由：

- `src/pages/index.astro` -> `/`
- `src/pages/about.astro` -> `/about`
- `src/pages/posts/[slug].astro` -> `/posts/hello-world`

## 和 Next.js 的对比

| 特性         | Astro  | Next.js    |
| ------------ | ------ | ---------- |
| 默认 JS 输出 | 0 KB   | ~70+ KB    |
| 内容站点     | 极佳   | 可用但过重 |
| 应用站点     | 不适用 | 最佳选择   |
| 学习曲线     | 低     | 中高       |

## 实际体验

用了几天 Astro 的感受：

- 文档质量很高，跟着教程走一遍就能上手
- 构建速度快，dev 模式的热更新几乎是瞬间的
- 和 Tailwind CSS 搭配使用体验很好
- 内容集合的类型安全让我不再担心 frontmatter 写错

## 总结

对于个人博客、文档站、作品集这类内容型网站，Astro 是我目前的首选。它很轻量，却足够灵活，没有多余的复杂性。

下一篇我打算写写 Tailwind CSS 的使用心得。
