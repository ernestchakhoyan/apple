$(document).ready(function () {

    /*Menu*************************************************************************/

    var navPos, winPos, navHeight;

    function refreshVar() {
        navPos = $('.top-line').offset().top;
        navHeight = $('.top-line').outerHeight(true);
    }

    refreshVar();
    $(window).resize(refreshVar);

    $('<div class="clone-nav"></div>').insertBefore('.top-line').css('height', navHeight).hide();

    $(window).scroll(function () {
        winPos = $(window).scrollTop();

        if (winPos >= navPos) {
            $('.top-line').addClass('fixed shadow');
            $('.clone-nav').show();
        } else {
            $('.top-line').removeClass('fixed shadow');
            $('.clone-nav').hide();
        }


    });
    /*********************************************CAROUSEL*********************************/
    $('.carousel').owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
        },
        navText: "",
        autoplay: true,
        autoplayTimeout: 3000,
    });

    /******************************************ANIMATE***************************************/
    $('.top-line').animated('bounceInDown');
    $('.header-text').animated('bounceInLeft','bounceOutRight');
    $('.feat-items').animated('fadeInUp','fadeOutRight');
    $('.feat-items').animated('fadeInUp','fadeOutRight');
    $('.iphone').animated('zoomIn','zoomOut');
    $('.map-img').animated('slideInRight','slideOutRight');
    $('.map-text').animated('slideInLeft','slideOutLeft');
    $('.screens h2').animated('fadeInDown','fadeOutUp');




});
