const burger = document.querySelector('.burger')
const navigation = document.querySelector('.navigation');
const navigationClose= document.querySelector('navigation__close');
burger.addEventListener('click', () => { 
    navigation.classList.add('navigation_active');
});
navigationClose.addEventListener('click', () => {
    navigation.classList.remove('navigation_active');
});

const mute =


const sliderThumds = new Swiper('.slider-thumbs', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 3,
        centeredSlides: true,
        loopedSlides: 4,

    });

    sliderThumds.on('click', (swiper) => {
        swiper.slideTo(swiper.clickedIndex)
    })

    const sliderMain = new Swiper('.slider-main', {
        loop: true,
        spaceBetween: 10,
        loopedSlides: 4,
    });

    sliderThumds.controller.control = sliderMain;
    sliderThumds.controller.control = sliderThumds;
