# Vercel 強制純靜態部署版

此版本已在 vercel.json 內強制設定：

- Framework Preset：Other
- Install Command：跳過
- Build Command：跳過
- Output Directory：專案根目錄 `.`
- 不含 package.json、lock file、Vite 設定
- 不含 public 資料夾，避免 Vercel 誤選輸出目錄

## 必須確認 GitHub 根目錄

GitHub 專案最外層應直接看到：

- index.html
- frozen-mini-pizza-wholesale/
- assets/
- sitemap.xml
- robots.txt
- vercel.json

不可再看到：

- package.json
- package-lock.json
- vite.config.js
- public/
- dist/

## Vercel 重新部署

上傳後建立一筆新 commit，再到 Deployments 對最新 commit 按 Redeploy。
建議取消 Use existing Build Cache。
