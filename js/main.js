(function () {

    $(document).on('click', '.search-button', function () {
        $(this).parent().parent().toggleClass('active');
    });
    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
    });
})();