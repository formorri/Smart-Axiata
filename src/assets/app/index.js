// disappearing navbar when viewport < 960px
$(window).on('resize',() => {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var header = $(".navbar-top");
    var lastScroll = 0;
    $(window).scroll(() => {
        var currentScroll = $(this).scrollTop()
        if (vw < 960) {
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.addClass("scrolled");
            } else {
                header.removeClass("scrolled");
            }
            lastScroll = currentScroll;
        } 
    });
}).resize();

let tl1 = gsap.timeline()
tl1.from("#reveal", { delay: .5, duration: 2, width: 0, ease: "easeInOut" })
    .from(".artwork", { yPercent: 100, duration: .8, autoAlpha: 0 })
    .from(".video-button", { yPercent: 200, duration: .2, autoAlpha: 0 }, "<")
    .from(".title", { yPercent: 100, delay: "-.4", duration: 0.6, autoAlpha: 0 });


/*****CountUp Number****/
$(".count").countUp({
    delay: 10,
    /* The delay in milliseconds per number count up */
    time: 1500,
    /*The total duration of the count up animation */

});


$(".slider-counter a").click(function () {
    jQuery(document).ready(function ($) {
        $('.count').countUp({
            time: 1000
        })
    })

})