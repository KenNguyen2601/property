var buttonEl = document.getElementsByClassName("btn");
var bannerEl = document.getElementById("banner");

buttonEl[0].addEventListener('click', function() {
    bannerEl.src = "./img/pic1.png";
    animation()
    this.classList.add('active')
})
buttonEl[1].addEventListener('click', function() {
    bannerEl.src = "./img/pic2.png";
    animation()
    this.classList.add('active')
})
buttonEl[2].addEventListener('click', function() {
    bannerEl.src = "./img/pic3.png ";
    animation()
    this.classList.add('active')
})

function animation() {
    bannerEl.classList.add('zoom');
    setTimeout(function() {
        bannerEl.classList.remove('zoom');
    }, 500);
    for (b of buttonEl) {
        b.classList.remove('active')


    }
}