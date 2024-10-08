const burger = document.querySelector(".hamburger .burger");
const burgerClose = document.querySelector(".hamburger .burger-close");
const nav = document.querySelector("header nav ul");

burger.addEventListener("click", () => {
    burger.style.display = "none";
    burgerClose.style.display = "block";
    nav.style.display = "flex";
    document.body.style.overflow = "hidden";
});

burgerClose.addEventListener("click", () => {
    burgerClose.style.display = "none";
    burger.style.display = "block";
    nav.style.display = "none";
    document.body.style.overflow = "visible";
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
        document.body.style.overflow = "visible";
        burgerClose.style.display = "none";
        burger.style.display = "block";
    }
});