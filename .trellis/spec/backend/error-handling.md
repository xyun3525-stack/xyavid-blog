# Error Handling

> 静态博客的错误与边界情况处理

---

## 构建时错误

### 内容校验失败

Markdown frontmatter 与 schema 不符时，`astro build` 直接报错中断。

处理方式：修正 frontmatter 使其符合 `src/content.config.ts` 中定义的 schema。

### 缺少必需字段

```bash
# 报错示例
[content] posts/my-post.md → title: Required
```

处理方式：补全缺失字段，或标记 `draft: true` 跳过构建。

---

## 运行时页面

### 404 页面

`src/pages/404.astro` 提供友好提示，包含返回首页链接。样式与整体一致。

### 文章不存在

访问 `/posts/不存在的slug` 时，`[slug].astro` 中 `getEntry()` 返回 `undefined`，重定向到 404：

```astro
---
const { slug } = Astro.params;
const post = await getEntry('posts', slug);
if (!post) return Astro.redirect('/404');
---
```

---

## 开发时检查

- `npm run dev` 启动失败 → 检查 `astro.config.mjs` 和 `package.json`
- Tailwind 样式不生效 → 检查 `tailwind.config.mjs` 的 `content` 路径
- 新增文章不出现 → 检查 frontmatter 中 `draft` 不是 `true`
