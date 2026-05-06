# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个静态个人主页项目，部署于 GitHub Pages（leoaiolia.github.io），无构建工具，纯 HTML/CSS/JS。

## 常用命令

```bash
# 格式化所有文件（提交前必须执行）
npx prettier . --write

# 检查格式是否符合规范
npx prettier . --check
```

Prettier 配置：2 空格缩进，不使用 Tab（见 `.prettierrc`）。

## 项目结构

```
index.html          # 首页，导航至各 pages/
styles/style.css    # 全局样式，被 index.html 和 pages/ 引用
scripts/main.js     # 被 demo.html 引用的 JS 脚本
pages/              # 各功能页面（独立 HTML 文件）
images/             # 静态图片资源
```

各页面为独立 HTML 文件，没有模块系统或打包步骤；样式和脚本通过相对路径引用（`../styles/style.css`、`../scripts/main.js`）。

## 新增页面

在 `pages/` 目录下创建 HTML 文件，并在 `index.html` 的导航列表中添加对应 `<a>` 链接。每个页面自包含或通过相对路径引用公共资源。
