# Minimalist Hugo Theme

一个极简主义的 Hugo 主题，专注于内容展示和阅读体验。

## 特性

- 极简设计，突出内容
- 响应式布局，完美适配各种设备
- 深色/浅色模式切换
- 支持文章分类和标签
- 支持代码高亮
- 支持数学公式
- 支持评论系统
- 支持多语言
- SEO 友好

## 安装

### 方法一：作为 Git 子模块

```bash
git submodule add https://github.com/zhuhongming/minimalist.git themes/minimalist
```

### 方法二：直接克隆

```bash
git clone https://github.com/zhuhongming/minimalist.git themes/minimalist
```

## 配置

在 Hugo 站点的 `config.toml` 或 `config.yaml` 中添加以下配置：

```toml
theme = "minimalist"

# ...
```

## 使用说明

### 创建新文章

```bash
hugo new posts/my-first-post.md
```

### 本地预览

```bash
hugo server -D
```

## 自定义

如何自定义的教程... TODO

## TODO 列表

### 核心功能
- [ ] 完成基础布局设计
  - [x] 首页布局
  - [ ] 文章列表页
  - [x] 文章详情页
  - [ ] 分类和标签页
- [ ] 实现响应式设计
  - [ ] 移动端适配
  - [ ] 平板适配
  - [ ] 桌面端适配
- [ ] 添加深色/浅色模式切换
- [ ] 实现搜索功能

### 增强功能
- [ ] 添加代码高亮支持
  - [ ] 支持多种代码主题
  - [ ] 支持行号显示
- [ ] 添加数学公式支持
  - [ ] KaTeX 集成
  - [ ] MathJax 集成
- [ ] 集成评论系统
  - [ ] Disqus 支持
  - [ ] Utterances 支持
- [ ] 添加多语言支持
- [ ] 优化 SEO
  - [ ] 添加 meta 标签
  - [ ] 添加 Open Graph 标签
  - [ ] 添加 Twitter Cards
- [x] 添加文章目录导航
- [ ] 添加文章分享功能

### 性能优化
- [ ] 优化资源加载
  - [ ] CSS 压缩
  - [ ] JavaScript 压缩
  - [ ] 图片优化
- [ ] 实现图片懒加载
- [ ] 添加资源压缩
- [ ] 优化移动端性能

### 文档
- [ ] 完善使用文档
- [ ] 添加主题配置说明
- [ ] 编写自定义指南
- [ ] 添加示例站点

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License

## 致谢

感谢所有为这个主题提供灵感和帮助的人！
