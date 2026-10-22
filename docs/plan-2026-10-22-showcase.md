# Plan：UltimateSoftware 作品集站点

日期：2026-10-22

## 目标

在 `UltimateSoftware` 仓库搭建 GitHub.io（Project Pages）作品集，展示本地与远程 GitHub 项目，每项含描述与使用说明。

## 决策

- 托管：`Dlinuigh/UltimateSoftware` → `https://dlinuigh.github.io/UltimateSoftware/`
- 品牌：UltimateSoftware
- 范围：本地 8 + 远程 10（短名单全部）

## 实现摘要

- Vite + vanilla TS SPA；`base: '/UltimateSoftware/'`；构建复制 `404.html`
- `data/projects.json` + `content/projects/*.md`
- GitHub Actions 部署 Pages
