# Directory Structure

> Astro 静态博客项目结构

---

## Directory Layout

```
myblog/
├── src/
│   ├── content/
│   │   └── posts/           # Markdown 文章 (.md)
│   ├── pages/
│   │   ├── index.astro      # 首页 - 文章列表
│   │   ├── about.astro      # 关于页
│   │   ├── posts/
│   │   │   └── [slug].astro # 文章详情页 (动态路由)
│   │   └── 404.astro        # 404 页面
│   ├── components/
│   │   ├── PostCard.astro   # 文章卡片 (列表项)
│   │   ├── PostList.astro   # 文章列表容器
│   │   ├── Header.astro     # 顶部导航
│   │   └── Footer.astro     # 底部
│   ├── layouts/
│   │   └── BaseLayout.astro # 全局布局 (HTML shell, head, nav, footer)
│   ├── styles/
│   │   └── global.css       # Tailwind + 全局样式
│   └── content.config.ts    # 内容集合 schema 定义
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Naming Conventions

| 规则 | 说明 |
|------|------|
| 组件文件 | PascalCase: `PostCard.astro` |
| 页面路由 | kebab-case 目录: `posts/[slug].astro` |
| 样式文件 | 小写: `global.css` |
| 配置文件 | 小写 + 后缀: `astro.config.mjs` |

---

## Conventions

- 组件放 `src/components/`，布局放 `src/layouts/`
- 文章统一放 `src/content/posts/`，文件名即 URL slug
- 新增文章无需改任何代码，自动出现在列表
