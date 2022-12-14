$(window).on('resize',function(){location.reload();});

// disappearing navbar when viewport < 960px
// $(window).on('resize', () => {
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
// }).resize();

// animate gif on scroll
// Beyond chart gif
$(window).scroll(() => {
    var current = $(this).scrollTop(),
        path1 = 'assets/images/beyond.gif',
        visible = $('.scroll-gif1').css('opacity') != 0;

    if (current > 0) {
        if (!visible) $('.scroll-gif1').attr('src', path1).fadeTo(400, 1);
    }
    else if (visible) $('.scroll-gif1').fadeTo(0, 0);
});

// Nurturing chart gif
$(window).scroll(() => {
    var current = $(this).scrollTop(),
        path2 = 'assets/images/nurturing.gif',
        visible = $('.scroll-gif2').css('opacity') != 0;

    if (current > 0) {
        if (!visible) $('.scroll-gif2').attr('src', path2).fadeTo(400, 1);
    }
    else if (visible) $('.scroll-gif2').fadeTo(0, 0);
});

// Planet chart gif
$(window).scroll(() => {
    var current = $(this).scrollTop(),
        path3 = 'assets/images/planet.gif',
        visible = $('.scroll-gif3').css('opacity') != 0;

    if (current > 0) {
        if (!visible) $('.scroll-gif3').attr('src', path3).fadeTo(400, 1);
    }
    else if (visible) $('.scroll-gif3').fadeTo(0, 0);
});


let tl1 = gsap.timeline()
// tl1.from("#reveal", { delay: .5, duration: 2, width: 0, ease: "easeInOut" })
    // tl1.from(".artwork", { delay: .5, yPercent: 100, duration: .8, autoAlpha: 0, ease: "easeInOut"  })
    tl1.from(".video-button", { delay: .5, yPercent: 200, duration: .2, autoAlpha: 0 })
    // .from(".title", { yPercent: 100, delay: "-.4", duration: 0.6, autoAlpha: 0 });


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