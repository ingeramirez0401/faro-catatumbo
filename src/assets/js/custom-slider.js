function init_slider() {
    var mainslider;

    var options = {
        slides: '.slide', // The name of a slide in the slidesContainer
        swipe: true, // Add possibility to Swipe > note that you have to include touchSwipe for this
        slideTracker: true, // Add a UL with list items to track the current slide
        slideTrackerID: 'slideposition', // The name of the UL that tracks the slides
        slideOnInterval: true, // Slide on interval
        interval: 5000, // Interval to slide on if slideOnInterval is enabled
        animateDuration: 1000, // Duration of an animation
        animationEasing: 'ease', // Accepts: linear ease in out in-out snap easeOutCubic easeInOutCubic easeInCirc easeOutCirc easeInOutCirc easeInExpo easeOutExpo easeInOutExpo easeInQuad easeOutQuad easeInOutQuad easeInQuart easeOutQuart easeInOutQuart easeInQuint easeOutQuint easeInOutQuint easeInSine easeOutSine easeInOutSine easeInBack easeOutBack easeInOutBack
        pauseOnHover: false // Pause when user hovers the slide container
    };

    $(".slider").simpleSlider(options);
    mainslider = $(".slider").data("simpleslider");
    /* yes, that's all! */


    $(".slider").on("beforeSliding", function(event) {
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='" + prevSlide + "'] .slidecontent").fadeOut();
        $(".slider .slide[data-index='" + newSlide + "'] .slidecontent").hide();
    });

    $(".slider").on("afterSliding", function(event) {
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='" + newSlide + "'] .slidecontent").fadeIn();
    });



    $(".slide#first").backstretch("assets/images/1.jpg");
    $(".slide#sec").backstretch("assets/images/2.jpg");
    $(".slide#thirth").backstretch("assets/images/3.jpg");

    $('.slide .backstretch img').on('dragstart', function(event) { event.preventDefault(); });

    $(".slidecontent").each(function() {
        $(this).css('margin-top', -$(this).height() / 2);
    });
}