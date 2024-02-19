const hamburger=document.getElementById("hamburger")
const closeIcon=document.getElementById("close-icon")
const list=document.getElementById("nav-list")
const navItems=document.querySelectorAll(".nav-item")

function menuOpen(){
    list.classList.add("active")
}

function menuClose(){
    list.classList.remove("active")
}
hamburger.addEventListener("click",menuOpen)
closeIcon.addEventListener("click",menuClose)

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        list.classList.remove("active")
    })
})