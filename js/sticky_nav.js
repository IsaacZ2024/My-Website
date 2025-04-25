window.onscroll = function() { stickyNav(); };
 
var navbar = document.querySelector(".sticky-nav");
var header = document.querySelector("header");
var sticky = header.offsetHeight;
  
// Optional: Placeholder to prevent content jump
var placeholder = document.createElement("div");
placeholder.className = "nav-placeholder";
navbar.parentNode.insertBefore(placeholder, navbar);
  
function stickyNav() {
    if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    placeholder.classList.add("show");
    } else {
    navbar.classList.remove("sticky");
    placeholder.classList.remove("show");
    }
}