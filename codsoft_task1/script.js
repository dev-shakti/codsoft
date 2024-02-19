const menuList=document.getElementById("menu-list")
const hamburger=document.getElementById("hamburger-icon")
const closeIcon=document.getElementById("close-icon")
const menuItem=document.querySelectorAll(".menu-item")
function menuOpen(){
    menuList.classList.toggle("show")
}

function menuClose(){
    menuList.classList.remove("show")
}

hamburger.addEventListener("click",menuOpen)
closeIcon.addEventListener("click",menuClose)

menuItem.forEach((item) => {
    item.addEventListener("click", menuClose)
})
