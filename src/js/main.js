$(function () {
    $('.menu__title').click(function (event) {
        if ($('.menu').hasClass('one')) {
            $('.menu__title').not($(this)).removeClass('active')
            $('.menu__ref').not($(this).next()).slideUp(300)
        }
        $(this).toggleClass('active').next().slideToggle(300)
    });

    $('.top-slider').slick(
        {
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="../img/next-arrow.png" alt="next arrow"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="../img/prev-arrow.png" alt="prev arrow"></button>',
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {

        //         }
        //     },
        //     {
        //         breakpoint: 640,
        //         settings: {
        //             arrows: false
        //         }
        //     },

        // ]
    });

})

