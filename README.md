## Frontend Engineer Exam 實作紀錄 📝

1. 如何執行此專案
   1. 根據畫面拆分所有功能並列下來逐一執行
   2. 元件以 MUI 為主，sass module 為輔
2. 專案架構、邏輯說明

   1. 專案架構

      ![組件架構](https://github.com/ismeleft/WenYingPortfolio/assets/76611330/83e73bf5-7030-4281-9316-57d9d8392711)

      - 主頁由 Banner + Info 組成
      - Info 由 SearchBar + JobContainer + Pagination組成
      - JobContainer 由 JobCard 組成
      - 點擊 JobCard 後的彈出視窗包含 Dialog Component + Carousel

3. 專案遇到的困難、問題及解決方法

   1. 環境安裝：ESLint 與 Prettier 產生某些語法上的衝突

      → 解決方法：綜合 stackoverflow 與 ChatGPT 的解法，把 eslint-config 拿掉，並各自新增 .eslintrc.json & .prettierrc 的規則

   2. 功能實作：分頁邏輯

      →參考相關教學資源

4. 已優化、待優化
   1. 已優化：
      - 使用者體驗：加上 MUI skeleton & CircularProgress
   2. 待優化：
      - 語法上大多使用 props 傳遞資料，可能改用狀態管理工具
