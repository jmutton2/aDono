const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
    "*://*.analytic-google.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
    "*://*.googlevideo.com/*",
    "*://*.ads.youtube.com/*",
    "*://*.innovid.com/*",
    "*://*.adservice.google.com/*",
    "*://*.googletagservices.com/*",
    "*://*.fwmrm.net/*",
    "*://*.moatads.com/*",
    "*://*.adform.net/*",
    "*://*.reference.com/*",
    "https://en.wikipedia.org/wiki/NewPage",

]

chrome.webRequest.onBeforeRequest.addListener(

    //Callback for addListener()
    function(details) {
            return {
                cancel: true
            };
        },
    //Filter for addListener()
    {
        types: ['main_frame', 'sub_frame'],
        urls: defaultFilters
    },
    //Extra infoSpec for addListener()
    ["blocking"]
) 
