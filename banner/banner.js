// function injectedFunction() {
//     var elemDiv = document.createElement('div');
//     //Fix this
//     elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;'; 
//     elemDiv.innerHTML("W----------------------------------------------------------");
//     document.body.appendChild(elemDiv);
//   }

// chrome.tabs.onUpdated.addListener(
//     function(tabId, changeInfo, tab) {
//         if (changeInfo.status == 'complete') {
//             console.log("just before")
//             chrome.scripting.executeScript({
//                 code: 'console.log(------------------)'
//             });
//         }
//     });

(function() {

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);

	alert('inserted self... giggity');

})();

// var imgURL = document.createElement('img');
// var imgURL = chrome.runtime.getURL("https://c4.wallpaperflare.com/wallpaper/320/142/500/akali-league-of-legends-akali-league-of-legends-league-of-legends-k-da-video-games-hd-wallpaper-preview.jpg");
// document.getElementsByTagName("img").src = imgURL;
// console.log("aosueirshtfg")                
