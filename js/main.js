$(document).ready(function () {
    $('#menu').on('click', function (e) {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $(this).removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 68) {
            $('.header-2').addClass('header-active');
        } else {
            $('.header-2').removeClass('header-active');
        }
    }); 

    // گرفتن مقدار عکس و جای گذاری در عکس بدی
    $('.small-image img').on('click', function () {
        $(this).addClass('image-active').siblings().removeClass('image-active')
        let image = $(this).attr('src');
        $('.big-image img').attr('src', image);
        console.log(image);
    });

    //دسته بندی کردن 
    $('.gallery .btn').on('click', function () {
        let filter = $(this).attr('data-filter');

        if (filter == 'all') {
            $('.gallery .boxx').show(400);
        } else {
            $('.gallery .boxx').not('.' + filter).hide(200);
            $('.gallery .boxx').filter('.' + filter).show(200);
        }

    });
});



