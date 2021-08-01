let nextGroup = document.querySelector('.next-group');
let prevGroup = document.querySelector('.prev-group');
let sliderGroupsTrack = document.querySelector('.slider-groups__track');
let offsetGroup = 0;
let displayWidth;
let sliderGroupsCountNext;
let sliderGroupsCountPrev;

function init() {
    displayWidth = document.querySelector('body').offsetWidth;
    if (displayWidth < 525) {
        sliderGroupsCountNext = 3;
    } else if (displayWidth > 523 && displayWidth < 795) {
        sliderGroupsCountNext = 2;
    } else if (displayWidth > 795 && displayWidth < 1064) {
        sliderGroupsCountNext = 1;
    } else if (displayWidth > 1064 && displayWidth < 1170) {
        sliderGroupsCountNext = 2;
    } else if (displayWidth > 1170) {
        sliderGroupsCountNext = 1;
    }

    offsetGroup = 0;
    sliderGroupsTrack.style.left = offsetGroup + 'px';
    sliderGroupsCountPrev = sliderGroupsCountNext;
    prevGroup.style.opacity = '0.3';
    nextGroup.style.opacity = '1';
}

nextGroup.addEventListener('click', () => {
    if (sliderGroupsCountNext > 0) {
        offsetGroup -= 270;
        sliderGroupsCountNext = sliderGroupsCountNext - 1;
        console.log(offsetGroup);

        if (sliderGroupsCountNext === 0) {
            nextGroup.style.opacity = '0.3';
        }

        if (sliderGroupsCountPrev !== sliderGroupsCountNext) {
            prevGroup.style.opacity = '1';
        }

    }
    sliderGroupsTrack.style.left = offsetGroup + 'px';
})

prevGroup.addEventListener('click', () => {
    if (sliderGroupsCountPrev !== sliderGroupsCountNext) {
        offsetGroup += 270;
        sliderGroupsTrack.style.left = offsetGroup + 'px';
        sliderGroupsCountNext = sliderGroupsCountNext + 1;
        console.log(offsetGroup);

        if (sliderGroupsCountPrev === sliderGroupsCountNext) {
            prevGroup.style.opacity = '0.3';
        }

        if (sliderGroupsCountNext !== 0) {
            nextGroup.style.opacity = '1';
        }

    }
})

init();

window.addEventListener('resize', init);

