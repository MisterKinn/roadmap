function openMenu() {
    document.querySelector(".sidebar").classList.add("open");
    document.querySelector(".overlay").classList.add("open");
    document.querySelector(".menu-container").style.display = "none"; // Hide open button when sidebar opens
    document.querySelector(".sidebar").addEventListener("click", closeMenu);
}

function closeMenu() {
    document.querySelector(".sidebar").classList.remove("open");
    document.querySelector(".overlay").classList.remove("open");
    document.querySelector(".menu-container").style.display = "flex"; // Show open button when sidebar closes
    document.querySelector(".sidebar").removeEventListener("click", closeMenu);
}

export { openMenu, closeMenu };
