# Type Safety & Content Schema

> TypeScript 类型与 Markdown frontmatter schema

---

## 文章 Frontmatter Schema

每篇 Markdown 文章必须按以下 schema 编写：

```ts
// src/content.config.ts
import { defineCollection, z } from 'astro:content';

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

对应 Markdown 示例：

```md
---
title: "React Server Components 入门"
date: 2026-05-08
excerpt: "理解 RSC 的核心概念和使用场景"
tags: ["react", "frontend"]
draft: false
---

正文内容...
```

---

## TypeScript 规范

- 所有 .astro 组件的 frontmatter 部分使用 TypeScript
- Props 用 `interface` 声明，不写默认值
- 禁止 `any` 类型 — 不确定时用 `unknown`
