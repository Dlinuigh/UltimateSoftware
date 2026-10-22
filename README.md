# UltimateSoftware

个人软件作品集站点，发布于 GitHub Pages：

**https://dlinuigh.github.io/UltimateSoftware/**

当前版本：**0.1.0**

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

产物在 `dist/`（含 SPA 用的 `404.html`）。`base` 为 `/UltimateSoftware/`。

## 内容

- [`data/projects.json`](data/projects.json) — 项目索引
- [`content/projects/`](content/projects/) — 各项目描述与使用说明（Markdown）

## 部署

推送到 `main` 后，GitHub Actions 构建并发布 Pages。仓库 Settings → Pages 来源选 **GitHub Actions**。
