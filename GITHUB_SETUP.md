# 📚 GitHub自动部署设置指南

## 🚀 步骤1：创建GitHub仓库

### 在GitHub上操作：
1. 访问 https://github.com
2. 点击右上角 "+" → "New repository"
3. 填写信息：
   - **Repository name**: `oukua-website`
   - **Description**: `🔮 Oracle Alternative Data Intelligence System - Official Website`
   - **Visibility**: Private（推荐）或 Public
   - **不要勾选** "Initialize this repository with a README"

## 🔗 步骤2：连接本地仓库

创建仓库后，GitHub会显示命令。在终端运行：

```bash
# 添加远程仓库（替换YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/oukua-website.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

## ⚙️ 步骤3：设置Netlify自动部署

### 在Netlify控制面板：
1. 进入你的 oukuaai.com 项目
2. 点击 "Site settings"
3. 找到 "Build & deploy" → "Continuous Deployment"
4. 点击 "Link site to Git"
5. 选择 GitHub
6. 选择你的 `oukua-website` 仓库
7. 设置构建配置：
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

## ✅ 步骤4：测试自动部署

设置完成后：
1. 修改任何文件
2. 提交并推送到GitHub：
   ```bash
   git add .
   git commit -m "🔮 Test auto-deploy"
   git push
   ```
3. Netlify会自动检测到更改并重新部署
4. 几分钟后访问 oukuaai.com 查看更新

## 🎯 优势

设置完成后：
- ✅ 每次推送代码自动部署
- ✅ 版本控制和回滚
- ✅ 团队协作支持
- ✅ 部署历史记录
- ✅ 预览部署（PR时）

## 🔧 故障排除

如果部署失败：
1. 检查构建日志
2. 确认 `npm run build` 在本地能成功
3. 检查 `.next` 目录是否生成
4. 确认 Node.js 版本兼容

---

**兄弟，设置完这个，以后更新网站就像推送代码一样简单！** 🚀
