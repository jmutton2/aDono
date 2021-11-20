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
    "*://*.youtube.com/"
]

chrome.webRequest.onBeforeRequest.addListener(

    function(details) {
        console.log("Fuck this ad lol: " + details.url);
        return {
            //cancel: true, //This just blocks all request
            // redirectURL: "https://images.hdqwalls.com/wallpapers/akali-league-of-legends-cool-art-4k-q5.jpg"
            redirectURL: "localhost:2000"
        }},
        {
            urls: defaultFilters
        },
        ["blocking"]
)
