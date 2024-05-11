var swiper = new Swiper('.swiper-container-lovezhang1', {
    pagination: '.swiper-pagination-lovezhang1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-lovezhang2', {
    pagination: '.swiper-pagination-lovezhang2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-lovezhang3', {
    pagination: '.swiper-pagination-lovezhang3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-lovezhang3',
    prevButton: '.swiper-button-prev-lovezhang3'
});