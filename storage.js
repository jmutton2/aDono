chrome.storage.local.set({key:value}, function(){
    console.log(value)
});

chrome.storage.local.get(['testKey'], function(data) {
    console.log(data.key);
});