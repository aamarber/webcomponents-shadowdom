(() =>{
    let wcTexts = document.getElementsByClassName('wc-text');
    
    if(!wcTexts.length){
        return;
    }
    
    wcTexts[0].innerHTML('MODIFIED TEXT!');
})();