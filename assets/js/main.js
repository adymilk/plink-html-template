jQuery(function($) {
    'use strict';
    $(window).on('scroll',
    function() {
        if ($(this).scrollTop() > 350) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });
    $(".others-option-for-responsive .dot-menu").on("click",
    function() {
        $(".others-option-for-responsive .container .container").toggleClass("active");
    });
    $('.default-btn').on('mouseenter',
    function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: relY,
            left: relX
        })
    }).on('mouseout',
    function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: relY,
            left: relX
        })
    });
    $('.home-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: false,
        autoplay: false,
        autoHeight: true,
        items: 1,
        navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
    });
    $(".home-slides").on("translate.owl.carousel",
    function() {
        $(".main-slides-content h1").removeClass("animated fadeInUp").css("opacity", "0");
        $(".main-slides-content p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".main-slides-content .slides-btn .default-btn").removeClass("animated fadeInUp").css("opacity", "0");
        $(".main-slides-content .slides-btn .optional-btn").removeClass("animated fadeInUp").css("opacity", "0");
    });
    $(".home-slides").on("translated.owl.carousel",
    function() {
        $(".main-slides-content h1").addClass("animated fadeInUp").css("opacity", "1");
        $(".main-slides-content p").addClass("animated fadeInUp").css("opacity", "1");
        $(".main-slides-content .slides-btn .default-btn").addClass("animated fadeInUp").css("opacity", "1");
        $(".main-slides-content .slides-btn .optional-btn").addClass("animated fadeInUp").css("opacity", "1");
    });
    $('.expect-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 25,
        autoplayHoverPause: true,
        autoplay: true,
        autoHeight: true,
        navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
        responsive: {
            0 : {
                items: 1
            },
            576 : {
                items: 2
            },
            768 : {
                items: 3
            },
            1200 : {
                items: 5
            }
        }
    });
    $('.testimonial-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 25,
        autoplayHoverPause: true,
        autoplay: true,
        autoHeight: true,
        navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
        responsive: {
            0 : {
                items: 1
            },
            576 : {
                items: 2
            },
            768 : {
                items: 2
            },
            1200 : {
                items: 4
            }
        }
    });
    $('.testimonial-slides-two').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 25,
        autoplayHoverPause: true,
        autoplay: true,
        autoHeight: true,
        navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
        responsive: {
            0 : {
                items: 1
            },
            576 : {
                items: 1
            },
            768 : {
                items: 2
            },
            1200 : {
                items: 2
            }
        }
    });
    $('.partner-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 500,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        autoHeight: true,
        navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
        responsive: {
            0 : {
                items: 1
            },
            576 : {
                items: 2
            },
            768 : {
                items: 3
            },
            1200 : {
                items: 5
            }
        }
    });
    function makeTimer() {
        var endTime = new Date("September 30, 2024 17:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() {
        makeTimer();
    },
    300);
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    function makeTimer() {
        var endTime = new Date("December 30, 2024 17:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() {
        makeTimer();
    },
    0);
    $(".newsletter-form").validator().on("submit",
    function(event) {
        if (event.isDefaultPrevented()) {
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            event.preventDefault();
        }
    });
    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        },
        4000)
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        },
        1000)
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({
        url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
        callback: callbackFunction
    });
    $('.input-counter').each(function() {
        var spinner = jQuery(this),
        input = spinner.find('input[type="text"]'),
        btnUp = spinner.find('.plus-btn'),
        btnDown = spinner.find('.minus-btn'),
        min = input.attr('min'),
        max = input.attr('max');
        btnUp.on('click',
        function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on('click',
        function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
    $('.products-details-image-slides').slick({
        dots: true,
        speed: 500,
        fade: false,
        slide: 'li',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: false,
        nextArrow: false,
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                variableWidth: false,
                slidesToShow: 1,
                dots: true
            },
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                variableWidth: false,
                slidesToShow: 1,
                dots: true
            }
        }],
        customPaging: function(slider, i) {
            return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
        }
    });
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }
    $(window).on('scroll',
    function() {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });
    $('.go-top').on('click',
    function() {
        $("html, body").animate({
            scrollTop: "0"
        },
        500);
    });
    jQuery(window).on('load',
    function() {
        jQuery(".preloader").fadeOut(500);
    });
} (jQuery));