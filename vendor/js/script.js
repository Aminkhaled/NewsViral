// interval is in milliseconds. 1000 = 1 second -> so 1000 * 10 = 10 seconds

$(document).ready(function() {
    $('.carousel').carousel({
        interval: 500 * 10
    });

    setTimeout(function(){
        $('.loader').css('display', 'none');
    }, 4000);
    $(window).scroll(function () {
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 280) {
            $('.navbar').addClass('navbar-fixed');
            $('.navbar-brand').addClass('fixed-brand');
            $('.nav-nav-light').css('background-color','rgba(1,2,3,0.58)');

        }
        if ($(window).scrollTop() < 281) {
            $('.navbar').removeClass('navbar-fixed');
            $('.navbar-brand').removeClass('fixed-brand');

        }
    });


    $('.mainSlider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        width: '300px',
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.city-weather').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        width: '300px',
        autoplaySpeed: 2000,
    });
    $(window).scroll(function () {
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 1150) {
            $('.categories-options-body').addClass('category-fixed');
            $('.categories-options-body').css('width','225px').css('margin-left','20px').css('transition ','1s');
            $('.weather-app').css('margin-top','45px');

        }
        if ($(window).scrollTop() < 1100) {
            $('.categories-options-body').removeClass('category-fixed');
            $('.categories-options-body').css('width','70%');
            $('.weather-app').css('margin-top','0px').css('transition ','1s');


        }else if($(window).scrollTop() > 1580){
            $('.categories-options-body').removeClass('category-fixed');
            $('.categories-options-body').css('width','70%');
            $('.weather-app').css('margin-top','0px').css('transition ','1s');
        }
    });
});