export default function readMore(e) {
    const dots = document.querySelectorAll("#dots");
    const moreText = document.querySelectorAll("#more");
    const readMoreBtn = document.querySelectorAll("#readMoreBtn");

    const num = e.target.dataset.indexNumber;

    if (dots[num].style.display === "none") {
        dots[num].style.display = "inline";
        readMoreBtn[num].innerHTML === "Read less" ? readMoreBtn[num].innerHTML = "Read more" : readMoreBtn[num].innerHTML = "Читать больше"
        moreText[num].classList.remove("expanded")
    } else {
        dots[num].style.display = "none";
        readMoreBtn[num].innerHTML === "Read more" ? readMoreBtn[num].innerHTML = "Read less" : readMoreBtn[num].innerHTML = "Читать меньше";
        moreText[num].classList.add("expanded");
    }
}