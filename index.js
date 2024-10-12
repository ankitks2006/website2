const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}


var sidemenu=document.querySelector("#sidemenu");
function openmenu(){
    sidemenu.style.right="0" 
}
function closemenu(){
    sidemenu.style.right="-300px"
}
