const banner = document.querySelector('.banner');
const bannerImages = document.querySelectorAll('.banner__img');

let num = 0;

banner.addEventListener('mousewheel', function () {
    num++;
    if (num % 10 === 0) {
        fireImg()
    }
})

function fireImg() {

}