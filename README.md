## 戶數、人口數按戶別及性別 統計圖表

live demo:https://gov-people-data.vercel.app

## Requirements

- 使用 React
- Follow Airbnb coding style
- 程式碼 commit 至 GitHub
- 以 live demo 做呈現 (Vercel)
- 使用 Typescript
- 使用第三方套件
- Figma 中的 TAIWAN 不跟隨畫面滾動
- Input group

  - Submit button: All fields must be selected, otherwise, the button should be disabled
  - The selection menus for "縣/市" and "區", need to use autocomplete selector to help users quickly find the desired option
  - The selection menu for "區" is disabled until "縣/市" is selected
  - When the selection for "縣/市" changes, the value for "區" should be cleared

- Submit and Send Request

  - Based on the values of "年", "縣/市", and "區", redirect to a new URL/page and send an API request
  - While waiting for the API response, there should be a UI prompt indicating that the page is loading
  - Users can also trigger the query by entering "年", "縣/市", and "區" directly into the URL

- Charts

  - The charts example in Figma are images because there are no restrictions on how they should be implemented, but we recommend Highcharts

- RWD
  - In Figma, only two sizes are specified, so the general principle for implementing other screen sizes is to avoid breaking the layout
