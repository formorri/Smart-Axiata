// gsap.registerPlugin(ScrollTrigger);
// const scrub = 3;
// const startTrigger = "top 10%";
let tl1=gsap.timeline()
tl1.from("#reveal", {delay:.5, duration:2, width: 0, ease: "easeInOut"})
.from(".artwork", {yPercent:100, duration:.8, autoAlpha:0})
.from(".video-button", {yPercent:200, duration:.2, autoAlpha:0}, "<")
.from(".title", {yPercent:100, delay:"-.4", duration: 0.6,autoAlpha:0});

// let card = document.querySelector('.artwork');
//   document.addEventListener('mousemove', function (e) {
//     let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
//     let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
//     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });


/*****CountUp Number****/
$(".count").countUp({
	delay: 10,
	/* The delay in milliseconds per number count up */
	time: 2300,
	/*The total duration of the count up animation */
});



$(".slider-counter a").click(function() {
    jQuery(document).ready(function($) {
        $('.count').countUp({
            time: 1000
        })
    })

})	