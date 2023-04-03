let navBtn = document.getElementById("navBtn");
let navMenu = document.getElementById("navMenu");
let opLayer = document.getElementById("opacityLayer");

function toggleMenu() {
    navMenu.classList.toggle("menuOpen");
    opLayer.classList.toggle("tintOn");
}

// Click event
navBtn.addEventListener("click", toggleMenu);