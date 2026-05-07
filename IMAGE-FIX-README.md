# 圖片無法顯示修正版

這版修正重點：
1. 圖片檔案已包含在專案資料夾中。
2. 網站不再依賴 ChatGPT 暫存路徑 `/mnt/data/...`。
3. `sitemap.xml` 保持正式網域 `https://pizza-b2b.com/`。

請確認 GitHub 專案根目錄上傳後有：
- index.html
- package.json
- vercel.json
- assets/  或 public/images/
- public/sitemap.xml
- public/robots.txt

圖片無法顯示通常是因為只上傳了 index.html，沒有上傳 assets 資料夾。
