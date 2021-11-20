function injectedFunction() {
    var elemDiv = document.createElement('div');
    //Fix this
    elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;'; 
    elemDiv.innerHTML("W----------------------------------------------------------");
    document.body.appendChild(elemDiv);
  }
  
// chrome.webRequest.onBeforeRequest.addListener(
    // chrome.scripting.executeScript({
    //   target: { tabId: tab.id },
    //   function: injectedFunction
    // })
//  );