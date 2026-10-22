## 描述

Tauri 桌面绘图软件：用工具栏与表单画直线、弧、多边形、函数曲线等，实时生成 TikZ，并调用本机 `pdflatex` 编译预览；可导出 PNG/PDF。

## 使用说明

**依赖**：Node.js、Rust、本机 LaTeX（`pdflatex`）。

```bash
git clone https://github.com/Dlinuigh/tikz-drawer
cd tikz-drawer
npm install
npm run tauri dev
```

验证：`npm run build`、`npm run lint`，以及 `cd src-tauri && cargo check`。源码：<https://github.com/Dlinuigh/tikz-drawer>
