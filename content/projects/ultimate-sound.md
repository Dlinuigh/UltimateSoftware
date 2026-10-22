## 描述

跨平台 Flutter 本地音乐应用：扫描导入、播放控制、曲库列表与歌单 CRUD。UI 只依赖 `AudioEngineApi`，硬件细节藏在 `AudioDriver` 后，便于后续扩展（如 DSD）。

## 使用说明

1. 安装 Flutter SDK。
2. 运行：

```bash
git clone https://github.com/Dlinuigh/ultimateSound
cd ultimateSound
flutter pub get
flutter run
```

测试：`flutter test`。源码：<https://github.com/Dlinuigh/ultimateSound>
