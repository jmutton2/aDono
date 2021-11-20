chrome.tabs.onUpdated.addListener(function (tabId,changeInfo,tab) {
	// for the current tab, inject the "inject.js" file & execute it
    // async function getCurrentTab() {/* ... */}
    // let tab = await getCurrentTab();

    
	chrome.scripting.executeScript( {
        target: {tabId: tabId},
		// file: ['banner.js']
        function: myFunc
	});
});

function myFunc() {
    console.log(tab.id)
}