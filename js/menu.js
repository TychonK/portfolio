openclose = () => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    document.body.classList.toggle('modal-open')

    mobileMenuRef.classList.toggle("is-open");
}

(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    menuBtnRef.addEventListener("click", openclose);
})();

function readMore(e) {
    const dots = document.querySelectorAll("#dots");
    const moreText = document.querySelectorAll("#more");
    const readMoreBtn = document.querySelectorAll("#readMoreBtn");

    const num = e.target.dataset.indexNumber;

    if (dots[num].style.display === "none") {
        dots[num].style.display = "inline";
        readMoreBtn[num].innerHTML = "Read more";
        moreText[num].classList.remove("expanded")
    } else {
        dots[num].style.display = "none";
        readMoreBtn[num].innerHTML = "Read less";
        moreText[num].classList.add("expanded");
    }
}

(() => {
    menuItems = document.querySelectorAll(".anchor-link")
    Array.from(menuItems).map(item => item.addEventListener("click", openclose))
    readMoreButtons = document.querySelectorAll("#readMoreBtn")
    Array.from(readMoreButtons).map(item => item.addEventListener("click", readMore))
})();

// When the user scrolls down 50px from the top of the document, show the button
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

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}