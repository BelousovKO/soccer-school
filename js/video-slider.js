let nextVideo = document.querySelector('.nav__item_next');
let prevVideo = document.querySelector('.nav__item_prev');
let videoSliderTrack = document.querySelector('.video__slider_track');
let videoNavItems = document.querySelectorAll('.nav__point');
let offsetVideo = 0
let countVideoSlider = 0;

videoNavItems[0].style.backgroundColor = "#F7272F";

nextVideo.addEventListener('click', () => {
    offsetVideo -= 519;
    countVideoSlider += 1;
    if (offsetVideo < -1557) {
        offsetVideo = 0;
        countVideoSlider = 0;
    }
    videoSliderTrack.style.left = offsetVideo + 'px';
    for (let i = 0; i < 4; i++) {
        videoNavItems[i].style.backgroundColor = "#DEDEDE";
    }
    videoNavItems[countVideoSlider].style.backgroundColor = "#F7272F";
})

prevVideo.addEventListener('click', () => {
    offsetVideo += 519;
    countVideoSlider -= 1;
    if (offsetVideo > 0) {
        offsetVideo = -1557;
        countVideoSlider = 3;
    }
    videoSliderTrack.style.left = offsetVideo + 'px';
    for (let i = 0; i < 4; i++) {
        videoNavItems[i].style.backgroundColor = "#DEDEDE";
    }
    videoNavItems[countVideoSlider].style.backgroundColor = "#F7272F";

})

