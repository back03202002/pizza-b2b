# Search Console Product 結構化資料修正版

Google Search Console 顯示：
「必須指定 offers、review 或 aggregateRating」

原因：
網站頁面有 Product 結構化資料，但 B2B 批發頁沒有公開售價、庫存、評論或評分，所以 Google 判定 Product Rich Result 不完整。

本版修正：
- 移除不適合的 Product rich result JSON-LD
- 保留一般 SEO / sitemap / robots
- 不影響 Google 收錄
- 避免 Search Console 繼續顯示 Product 無效項目

部署後請到 Search Console：
網址審查 → 測試線上網址 → 要求建立索引
