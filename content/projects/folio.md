## 描述

macOS 本地图片 / PDF 查看器。只扫当前文件夹（不进子目录），PDF 按页当幻灯片。目标是打开快、内存小：按窗口像素解码，只缓存当前页与前后各一页。

## 使用说明

**环境**：macOS 14+。

**安装**：下载 [0.2.0 Release](https://github.com/Dlinuigh/folio/releases/tag/0.2.0) 的 DMG，拖到「应用程序」。

**开发运行**

```bash
git clone https://github.com/Dlinuigh/folio
cd folio
swift run folio -- ~/Pictures
```

方向键翻页；空格开始/暂停自动播放；可拖文件夹或文件进窗口打开。
