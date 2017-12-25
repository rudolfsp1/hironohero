$(document).ready(function () {

    var $banners = $('.banners');
    var $slides = $('.banner');

    $banners.slick({
        autoplay: true,
        fade: true,
        dots: false,
        arrows: false
    });

    $slides.each(function () {
        $overlay = $($(this).data('overlay'));
        $overlay.height($(this).height());
    });

    $slides.on('mouseover', function () {
        $overlay = $($(this).data('overlay'));
        $overlay.show();
    });

    $slides.on('mouseout', function () {
        $overlay = $($(this).data('overlay'));
        $overlay.hide();
    });

});