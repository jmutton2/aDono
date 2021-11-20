const init = function() {
    const injectElement = document.createElement('div');
    injectElement.className = 'somerandomelementlol';
    injectElement.style.background = 'rgb(63, 163, 77)';
    injectElement.style.borderTop = '4px';
    injectElement.style.top = 0;
    injectElement.style.position = 'fixed';
    injectElement.style.width = '100%'
    injectElement.style.zIndex = 2147483647;
    //Change this inner HTML to an ad you care about.
    injectElement.innerHTML = "THIS IS AN AD FOR A CAUSE YOU CARE ABOUT!!!";
    document.body.prepend(injectElement); 
}
init();