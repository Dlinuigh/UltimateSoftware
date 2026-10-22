## 描述

轻量 C++ 插件管理框架：宿主定义接口与 Provider，插件实现具体类型并由框架按版本兼容规则加载。上游项目见 [pluma-framework](http://pluma-framework.sourceforge.net)。

## 使用说明

1. 克隆 <https://github.com/Dlinuigh/pluma>。
2. 宿主侧用 `PLUMA_PROVIDER_HEADER` / `PLUMA_PROVIDER_SOURCE` 声明接口与版本。
3. 插件实现该接口并导出 Provider；宿主通过 Pluma 加载插件、创建实例。

示例与头文件用法见仓库 README。
