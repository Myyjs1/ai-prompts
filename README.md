# AI提示词库

一个优质的AI提示词收集和分享平台，旨在提升AI对话效率。

## 特性

- 🎯 多领域提示词：覆盖编程、写作、绘画、视频等多个领域
- 🔍 智能搜索：支持标题、内容、标签的模糊搜索
- 🏷️ 标签系统：通过标签快速筛选相关提示词
- ⭐ 收藏功能：收藏常用提示词，快速访问
- 📊 使用统计：记录提示词使用次数，智能排序
- 🌓 深色模式：支持浅色/深色主题切换
- 📱 响应式设计：完美支持移动端访问

## 在线体验

访问 [AI提示词库](https://myyjs1.github.io/ai-prompts) 立即体验

## 本地开发

```bash
# 克隆项目
git clone https://github.com/Myyjs1/ai-prompts.git

# 进入项目目录
cd ai-prompts

# 使用任意静态服务器运行
# 例如使用 Python 的 http.server
python -m http.server 8080

# 或使用 Node.js 的 http-server
npx http-server
```

## 提交新提示词

1. Fork 本仓库
2. 在相应分类的 JSON 文件中添加你的提示词
3. 创建 Pull Request

或者直接[创建 Issue](https://github.com/Myyjs1/ai-prompts/issues/new) 提交你的提示词

## 提示词格式

```json
{
    "id": "unique_id",
    "title": "提示词标题",
    "content": "提示词内容",
    "tags": ["标签1", "标签2"],
    "usage": "使用说明",
    "example": "使用示例",
    "author": {
        "username": "作者名",
        "avatar": "头像URL",
        "github": "GitHub用户名"
    }
}
```

## 项目结构

```
ai-prompts/
├── index.html          # 主页面
├── css/               # 样式文件
│   ├── reset.css      # 重置样式
│   ├── style.css      # 主样式
│   └── animations.css # 动画样式
├── js/
│   └── main.js        # 主逻辑
└── data/              # 提示词数据
    ├── categories.json # 分类数据
    └── prompts/       # 各分类提示词
```

## 贡献指南

欢迎提交 Pull Request 或创建 Issue 来：

- 添加新的提示词
- 优化现有提示词
- 修复错误
- 改进功能
- 提出建议

## 开源协议

[MIT License](LICENSE)

## 致谢

感谢所有贡献者对本项目的支持！ 