## 描述

独立网易云 Android 播放应用（原 MusicCast 辅助路径已归档）。登录、推荐、收藏专辑、歌单与搜索均在应用内完成；歌曲本机播放，进度条与歌词跟随播放器时间。音质按账号权限从高到低选取。不做评论、私信、动态、MV 与广告；Cookie 只存本机。划掉进程后会记住播放顺序、上次歌曲与进度。

## 使用说明

仓库在 `MusicCast/netease`（本地工程）。构建示例：

```bash
export JAVA_HOME="/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home"
export ANDROID_HOME="$HOME/Library/Android/sdk"
./gradlew :netease:assembleDebug
```

调试包：`netease/build/outputs/apk/debug/netease-debug.apk`。正式包需本地 `keystore.properties`（不进 git）。
