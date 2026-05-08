# Quality Guidelines

> 代码质量与测试规范

---

## Lint & Format

```bash
npm run lint      # astro check (类型 + 模板检查)
npm run format    # prettier --write .
```

CI 通过标准：`astro check` 零错误，`prettier --check` 零差异。

---

## 测试

| 层 | 工具 | 测什么 |
|----|------|--------|
| 类型检查 | `astro check` | 所有 .astro / .ts 文件类型正确 |
| 构建验证 | `astro build` | 构建零错误，输出静态文件 |
| 内容校验 | `astro:content` schema | Markdown frontmatter 格式正确 |
| 手动验证 | 浏览器 | 三页面渲染 + 移动端响应式 |

第一周不引入 E2E 测试框架，后续按需加 `@playwright/test`。

---

## 禁止

- `astro build` 报错时提交
- 未格式化代码提交
- 构建警告忽略不处理
