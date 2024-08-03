const header=document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY>150);
});

document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-icon');
    let navlinks = document.querySelector('.navlink');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlinks.classList.toggle('open');
    }

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navlinks.classList.remove('open');
    }
});
