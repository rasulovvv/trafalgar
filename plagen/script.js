$('.content-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
    }
});