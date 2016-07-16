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

    /**********************************************************************************/
    $(document).ready(function () {
        $('.carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout:3000,
        });
    });
});
