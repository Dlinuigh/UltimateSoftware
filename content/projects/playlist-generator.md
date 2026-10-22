## 描述

原生 SwiftUI macOS 应用：扫描 Picard 整理过的本地曲库，给曲目评分，导出**相对路径**的 `.m3u` 歌单。

## 使用说明

**环境**：macOS 14+；需 Command Line Tools（不必装完整 Xcode）。

**构建**

```bash
git clone https://github.com/Dlinuigh/PlaylistGenerator
cd PlaylistGenerator
./scripts/build-app.sh
open dist/PlaylistGenerator.app
```

**使用**

1. 设置中选定曲库根目录，再点 **Rescan**（启动时不自动扫）。
2. 可用过滤缩小浏览 / 生成范围。
3. 选模式后 **Export m3u…**（⌘E）。
4. **Rate** 页逐张为未评分曲目打分。

Release：<https://github.com/Dlinuigh/PlaylistGenerator/releases>
