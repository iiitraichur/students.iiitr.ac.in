// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel();
// });
// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items: 4,
//     loop: true,
//     margin: 10,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: true

// });
// $('.play').on('click', function () {
//     owl.trigger('play.owl.autoplay', [1000])
// })
// $('.stop').on('click', function () {
//     owl.trigger('stop.owl.autoplay')
// })

// SLIDER
$('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
})
