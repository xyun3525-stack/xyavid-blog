# Component Guidelines

> Astro 组件编写规范

---

## 组件类型

### .astro 组件（默认）

服务器端渲染，输出零 JS。用于展示型 UI。

```astro
---
// 组件逻辑在这里（TypeScript）
import BaseLayout from '../layouts/BaseLayout.astro';
const title = "Hello";
---
<!-- 模板在这里（HTML + JSX-like） -->
<h1>{title}</h1>
```

### 框架组件（仅在需要交互时引入）

如 React、Vue 组件通过 `client:*` 指令激活。

```astro
<Counter client:load />  <!-- 页面加载时激活 -->
```

---

## Props 约定

```astro
---
interface Props {
  title: string;
  date?: Date;
  excerpt?: string;
}

const { title, date, excerpt } = Astro.props;
---
```

## 样式规范

本项目使用 Tailwind CSS v4（CSS-first 配置），通过 `@tailwindcss/vite` 插件集成。

```css
/* src/styles/global.css — 全局样式 + Tailwind */
@import 'tailwindcss';
@plugin '@tailwindcss/typography';

@theme {
  --font-sans: 'Inter', system-ui, sans-serif;
}
```

- 所有样式用 Tailwind 工具类，避免写自定义 CSS
- 排版用 prose 类（`@tailwindcss/typography` 插件）
- 主题变量在 `global.css` 的 `@theme` 块中定义
- **没有** `tailwind.config.mjs` 文件 — v4 不需要

## 禁止

- 不要在 .astro 组件中写 `useState` / `useEffect` — 用框架组件
- 不要直接 import 组件而不使用
- 不要硬编码文章数据 — 用 `getCollection()`
- 不要在组件中写裸 CSS — 用 Tailwind 工具类
- 提交前必须运行 `npm run format`
