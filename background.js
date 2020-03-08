chrome.browserAction.onClicked.addListener(function(tab) {
  // 拡張機能アイコンがクリックされた時にscript.jsを実行
  chrome.tabs.executeScript(null, { file: 'script.js' })
})
