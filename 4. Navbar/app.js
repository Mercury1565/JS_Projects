const nav_toggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".nav-link-list")

nav_toggle.addEventListener('click', () => {
    console.log(links.classList);
    if (links.classList.contains("show-links")){
        links.classList.remove("show-links");
    }
    else{
        links.classList.add("show-links");
    }
})