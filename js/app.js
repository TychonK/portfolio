import throttle from './throttle.js'
import { openclose } from './openCloseMenu.js'
import readMore from './readMore.js';

    // Open and close mobile navigation menu button listeners

    const menuBtnRef = document.querySelector("[data-menu-button]");
    menuBtnRef.addEventListener("click", openclose);
    
    // Mobile navigation menu listeners   

    const menuItems = document.querySelectorAll(".anchor-link")
    Array.from(menuItems).map(item => item.addEventListener("click", openclose))
    
    // Read more buttons listeners

    const readMoreButtons = document.querySelectorAll("#readMoreBtn")
    Array.from(readMoreButtons).map(item => item.addEventListener("click", readMore))


// When the user scrolls down 50px from the top of the document, show the menu

const nav = document.querySelector(".navigation-fixed");
const mobileNavBtn = document.querySelector(".mobile-menu")

window.onscroll = throttle(scrollFunction, 100);

function scrollFunction() {
    if (document.documentElement.scrollTop > 300) {
        if(nav.classList.value.includes("show")) {
            return
        }
        console.log("scroll")
        nav.classList.add("show");
        mobileNavBtn.classList.add("mobile-menu-fixed")
    } else {
        nav.classList.remove("show");
        mobileNavBtn.classList.remove("mobile-menu-fixed")
  }
}