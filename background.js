const suspiciousWords = [
"login",
"verify",
"secure",
"account",
"update",
"bank",
"password",
"confirm"
];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  if (changeInfo.url) {

    const url = changeInfo.url.toLowerCase();

    for (let word of suspiciousWords) {

      if (url.includes(word)) {

        chrome.tabs.update(tabId, {
          url: chrome.runtime.getURL("warning.html")
        });

        break;
      }

    }

  }

});