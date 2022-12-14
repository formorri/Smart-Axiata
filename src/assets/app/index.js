
// force reload when resize
$(window).on('resize', function () { location.reload(); });

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
function gifReload(gif, path, visible) {
    var current = $(this).scrollTop();
    if (current > 0) {
        if (!visible) gif.attr('src', path).fadeTo(400, 1);
    }
    else if (visible) gif.fadeTo(0, 0);
}

$(window).on('scroll resize load', () => {
    // Beyond chart gif
    {
        var gif = $('.scroll-gif1'),
            path = 'assets/images/beyond.gif',
            visible = gif.css('opacity') != 0;
        gifReload(gif, path, visible);
    };
    // Nurturing chart gif
    {
        var gif = $('.scroll-gif2'),
            path = 'assets/images/nurturing.gif',
            visible = gif.css('opacity') != 0;
        gifReload(gif, path, visible);
    };
    // Planet chart gif
    {
        var gif = $('.scroll-gif3'),
            path = 'assets/images/planet.gif',
            visible = gif.css('opacity') != 0;
        gifReload(gif, path, visible);
    }
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

