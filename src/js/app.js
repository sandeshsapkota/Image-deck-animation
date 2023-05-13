//========================================================================
//========================== VARIABLES ===================================
//========================================================================

const banner = document.querySelector('.banner');
const bannerImages = [...document.querySelectorAll('.banner__img')];
const bannerImageText = [...document.querySelectorAll('.banner__img-name p')];
const magnetCursor = document.querySelector('.scroll')

let currentImageIndex = bannerImages.length - 1;
let wheelIndex = 0;
let reverse = false;


//========================================================================
//========================== MAIN CONTENT ================================
//========================================================================

const throwImage = () => {
    const animationDuration = 600;

    if (reverse) {
        currentImageIndex = 0
    } else {
        if (currentImageIndex < 0) currentImageIndex = bannerImages.length - 1;
    }


    // at initialization - this is the last img in the array
    const firedImage = bannerImages.splice(reverse ? 0 : bannerImages.length - 1, 1)[0]; // poping out last img
    bannerImages.length ? bannerImages.unshift(firedImage) : bannerImages.push(firedImage)// adding that image at the front

    handleTranslation(firedImage)


    // changing the z-index of all images right after throwing
    setTimeout(() => handleZindex(bannerImages), (animationDuration / 3))
    // removing the animate class
    // setTimeout(() => firedImage.classList.remove("animate"), (animationDuration * 84) / 100)
    // rotating the image at the time it stacks at the back
    setTimeout(() => handleTranslationBack(firedImage), 400)

    // preparing for the next throwing image - un rotating
    const lastImage = bannerImages[bannerImages.length - 1]
    lastImage.style.transform = reverse ? handleTranslationBack(lastImage) : "rotate(0) scale(1.01)"

    currentImageIndex = reverse ? currentImageIndex + 1 : currentImageIndex - 1
}

const handleMagnetCursor = (e) => {
    const {x, y} = e
    magnetCursor.style.transform = `translate(${x}px, ${y}px)`

    const ifMagnetIsToHide = e.target.classList.contains('hide-magnet') ? 'add' : 'remove';

    handleClass(magnetCursor, 'fade-out', ifMagnetIsToHide)
    handleClass(magnetCursor, 'hide', 'remove')
}

let throttleTimer;
const throttle = (callback, time) => {
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
        callback();
        throttleTimer = false;
    }, time);
}
window.addEventListener("scroll", () => {

});

banner.addEventListener('mousewheel', function (e) {
    const {deltaY} = e
    wheelIndex++;
    deltaY < 0 ? reverse = true : reverse = false;
    wheelIndex % 10 === 0 ? throttle(throwImage, 300) : 0
})

window.addEventListener('mousemove', handleMagnetCursor)


//========================================================================
//========================== UTILITIES ===================================
//========================================================================

const handleZindex = (arr) => {
    reverse ? arr.reverse().forEach((item, i) => item.style.zIndex = i) : arr.forEach((item, i) => item.style.zIndex = i)
}

const handleTranslationBack = img => {
    const randomDeg = Math.floor(Math.random() * 12) + -18;
    img.style.transition = '.2s linear'
    img.style.transform = reverse ? `translateX(0) rotate(0deg)` : `rotate(${randomDeg}deg)`;
    img.classList.remove('img-size')
}

const handleTranslation = img => {
    img.style.transform = 'translateX(-500px) rotate(-16deg)'
    img.classList.add('img-size')
    img.style.transition = '.3s ease'

}

function handleClass(node, className, type = 'add') {
    node.classList[type](className)
}

//========================================================================
//========================== INIT ========================================
//========================================================================

handleZindex(bannerImages)



