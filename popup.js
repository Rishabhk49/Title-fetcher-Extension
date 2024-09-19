
const btn =document.getElementById('fetchTitle')
btn.addEventListener('click',function(){
    getCurrentTab();
})

async function getCurrentTab() {
    let queryOptions={active:true,lastFocusedWindow:true};
    let [tab]= await chrome.tabs.query(queryOptions);
    document.getElementById('titleDisplay').innerHTML=tab.title;
    return tab;
}

