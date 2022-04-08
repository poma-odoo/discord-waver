
let waveEmBtn = document.getElementById("WaveEm");

// When the button is clicked, inject waveEmAll into current page
waveEmBtn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: waveEmAll,
  });
});

function waveEmAll() {
  document.querySelectorAll("div.reaction-2A2y9y:not(.reactionMe-3I9gFK)  img[src='/assets/df7ba0f4020ca70048a0226d1dfa73f6.svg']").forEach(function(x){x.click();});
}
