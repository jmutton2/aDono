let isCacheSupported = 'caches' in window;
let url = ['/api/get/usersettings','www.google.com'];

const cacheName = 'extension-cache';

//create, initialize cache 
caches.open(cacheName).then( cache => {
    cache.add(url).then( ()=>{  
        console.log("data cached")
        console.log("Status: " + Response.status)
    });
});

//retrieve from cache
caches.open(cacheName).then(cache => {
    cache.match(url).then(item => {
        console.log(item.url)
    })
})

if ('caches' in window) {
    const cacheName = 'aDono'
    const url = '49'
    fetch(url).then(res => {
        if (!Response.ok) {
            throw new TypeError ('Bad response status')
        }
        return caches.open(cacheName).then(cache => {
            return cache.put(url,res)
        });
        
    });
    
}

const cacheName = 'aDono'
const url = '/resource'
caches.open(cacheName).then(cache => {
    cache.match(url).then(item => {
        console.log(item+ " yoohoo")
    }), 
    (error) => {
        throw error;
    }
    
})