document.addEventListener("DOMContentLoaded", ()=> {
//dispalying dropdown menu
const dropdownIcon = document.getElementById('dropdown-icon')
const dropdownContent = document.getElementsByClassName('dropdown-content')[0];
const sttyle = window.getComputedStyle(dropdownContent);
dropdownIcon.onclick = function(){
    let res;
    sttyle.display == "none"? res = "block": res = "none";
    dropdownContent.style.display = res;
}
//displaying news-card dropdown
const drop = document.getElementById('dropdown-icon');
const dropCont = document.getElementsByClassName('')[0];
console.log(dropCont)
const dropstyle = window.getComputedStyle(dropCont);
drop.onclick = function(){
    let res;
    dropstyle.display == "none"? res = "block": res = "none";
    dropCont.style.display = res;
}

});


