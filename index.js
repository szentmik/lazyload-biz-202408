// toggle switch 
const mMenuBtn = document.querySelector(".mobile-menu-btn");
const navClose = document.querySelector(".nav-close");
const toggleSwitch = document.querySelectorAll(".slide-btns");

toggleSwitch.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        toggleSwitch[i].children[0].classList.toggle("slide-btn-active");
        toggleSwitch[i].children[1].classList.toggle("slide-btn-active");

    });
});

// mobile menu 

mMenuBtn.addEventListener("click", () => {
    document.querySelector(".navbar-links-bg").classList.add("show-nav-links");
    mMenuBtn.classList.add("desktop-hide");
    console.log("click");   

});

navClose.addEventListener("click", () => {
    mMenuBtn.classList.remove("desktop-hide");
    document.querySelector(".navbar-links-bg").classList.remove("show-nav-links");
});