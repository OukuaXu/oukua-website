# 🚀 部署到 oukuaai.com 指南

## 方法1：通过Netlify CLI（推荐）

### 步骤1：链接到现有项目
在终端中，当看到选择提示时：
1. 选择 "Link this directory to an existing project"（第一个选项）
2. 选择你的 oukuaai.com 项目
3. 确认部署

### 步骤2：如果没有找到项目
```bash
# 创建新站点并部署
netlify deploy --create-site oukuaai --prod

# 或者指定目录
netlify deploy --dir=.next --prod
```

## 方法2：通过Netlify网站（备选）

1. 登录 https://app.netlify.com
2. 找到 oukuaai.com 项目
3. 直接拖拽 `.next` 文件夹到部署区域

## 方法3：通过Git自动部署（最佳长期方案）

### 1. 推送代码到GitHub
```bash
cd ~/Desktop/oukua-website
git init
git add .
git commit -m "🔮 Oracle v0.1.0 - Updated website with latest achievements"
git remote add origin https://github.com/YOUR_USERNAME/oukua-website.git
git push -u origin main
```

### 2. 在Netlify设置自动部署
1. 登录 Netlify
2. Import from Git
3. 选择你的仓库
4. 设置构建命令：`npm run build`
5. 发布目录：`.next`

## 🎯 立即操作

如果你现在在终端看到选择：
- 按方向键选择第一个选项 "Link this directory to an existing project"
- 回车确认
- 选择 oukuaai.com
- 等待部署完成（约1-2分钟）

## ✅ 验证部署

部署完成后，访问 https://oukuaai.com 查看更新！

---

**兄弟，选择第一个选项链接到现有项目，然后就能看到更新了！** 🚀
