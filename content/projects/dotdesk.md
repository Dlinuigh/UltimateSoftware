## 描述

基于 Graphviz DOT 的思维导图桌面应用（Tauri v2 + React）。DOT 源码用 Monaco 编辑，本机 `dot` 渲染 SVG；画布支持导航、多选、边样式与面板开关。

## 使用说明

**依赖**：Node.js、Rust、本机 Graphviz（`dot` 在 PATH 中）。

```bash
git clone https://github.com/Dlinuigh/dotdesk
cd dotdesk
npm install
npm run tauri dev
```

可打开/保存 `.dot`、导出 SVG；思维导图快捷键含 Tab / Enter / Delete。源码：<https://github.com/Dlinuigh/dotdesk>
