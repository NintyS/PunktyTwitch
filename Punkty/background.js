// Extension event listeners are a little different from the patterns you may have seen in DOM or
// Node.js APIs. The below event listener registration can be broken in to 4 distinct parts:
//
// * chrome      - the global namespace for Chrome's extension APIs
// * runtime     – the namespace of the specific API we want to use
// * onInstalled - the event we want to subscribe to
// * addListener - what we want to do with this event
//

// Kod bazowy

// there - <div class="Layout-sc-nxg1ff-0 ejhEzS chat-input__buttons-container" data-test-selector="chat-input-buttons-container">
//  TODO: Add points *there* - on first version there will be a function which checks if this stream is i ChaoZ database if yes then will show a points
//
// Where is user name: CoreText-sc-cpl358-0 ScTitleText-sc-1gsen4-0 fiLmJS gasGNr InjectLayout-sc-588ddc-0 idDHLE tw-title

// Sprawdzanie czy urzytkownik ma stronę w tle
chrome.tabs.getAllInWindow(null, function(tabs){
    var tabs = chrome.tabs.query({});
        tabs.forEach(function (tab) {
            console.log(tab);
        });
});

// Emot ikony
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
      chrome.scripting.executeScript({
          target: { tabId: tabId, allFrames: true },
          files: ["./foreground.js"]
      })
          .then(() => {
              console.log("INJECTED THE FOREGROUND SCRIPT.");
          })
          .catch(err => console.log(err));
  }
});