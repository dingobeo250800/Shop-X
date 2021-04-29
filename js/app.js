console.log("hello");
function closeInfo(){
    document.getElementById("info").style.display = "none"
}
//header-onscroll
const close1 = document.getElementById("info");
const banner1 = document.getElementById("onscroll-Event");
function myFunction(){
    if(document.body.scrollTop >50 || document.documentElement.scrollTop >50){
        banner1.style.position = "fixed";
        banner1.style.backgroundColor = "black";
        banner1.style.marginTop = 0;
        banner1.style.zIndex = 100;
        close1.style.display = "none";
    }else{
        close1.style.display = "block";
        banner1.style.position = "absolute";
        banner1.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}
window.onscroll = function(){
    myFunction();
}
//siddeBar-menu
function openMenu() {
    document.getElementById("leftMenu").style.display = "block";
}

function closeMenu() {
    document.getElementById("leftMenu").style.display = "none";
}