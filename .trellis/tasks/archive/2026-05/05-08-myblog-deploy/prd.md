# PRD: Myblog 部署上线

## 目标

将 Myblog 部署到 GitHub Pages，使其可通过公开 URL 访问。

## 方案

- GitHub Pages + GitHub Actions 自动部署
- push 到 main 分支自动触发构建和部署
- URL: `https://xyavid.github.io/myblog/`

## 实施步骤

1. 在 astro.config.mjs 中恢复 `base: '/myblog'` 并修复本地开发兼容
2. 创建 `.github/workflows/deploy.yml` — GitHub Actions 部署脚本
3. 创建 GitHub 仓库并推送代码

## 验收标准

1. `https://xyavid.github.io/myblog/` 可公网访问
2. 所有页面和功能正常
3. push 代码后自动部署
