
//environment
chrome.storage.local.set({c1:'env1'}, function(){
    console.log(value)
});

chrome.storage.local.set({c2:'env2'}, function(){
    console.log(value)
});
chrome.storage.local.set({c3:'env3'}, function(){
    console.log(value)
});
chrome.storage.local.set({c4:'env4'}, function(){
    console.log(value)
});
chrome.storage.local.set({c5:'env5'}, function(){
    console.log(value)
});

// humanitarian
chrome.storage.local.set({c1:'hum1'}, function(){
    console.log(value)
});

chrome.storage.local.set({c2:'hum2'}, function(){
    console.log(value)
});
chrome.storage.local.set({c3:'hum3'}, function(){
    console.log(value)
});
chrome.storage.local.set({c4:'hum4'}, function(){
    console.log(value)
});
chrome.storage.local.set({c5:'hum5'}, function(){
    console.log(value)
});

//social
chrome.storage.local.set({c1:'soc1'}, function(){
    console.log(value)
});

chrome.storage.local.set({c2:'soc2'}, function(){
    console.log(value)
});
chrome.storage.local.set({c3:'soc3'}, function(){
    console.log(value)
});
chrome.storage.local.set({c4:'soc4'}, function(){
    console.log(value)
});
chrome.storage.local.set({c5:'soc5'}, function(){
    console.log(value)
});

chrome.storage.local.get(['testKey'], function(data) {
    console.log(data.key);
});