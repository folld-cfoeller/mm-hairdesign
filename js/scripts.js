/*!
 * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
(function($) {
    "use strict"; // Start of use strict
    var isMobile;
    (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? isMobile = true: isMobile = false;

    $.cookieBar({
        style: 'bottom',
        default: 'https://www.google.com/policies/technologies/cookies/',
        language: 'de'
    });
    $.cookieBar('addTranslation', 'de', {
        message: 'Zur Bereitstellung von Diensten verwenden wir Cookies. Durch die Nutzung dieser Website stimmen Sie zu.',
        acceptText: 'OK',
        infoText: 'Mehr Informationen',
        privacyText: 'Datenschutz'
    });

    // When the user scrolls the page - sticky header and add spacing 
    window.onscroll = function() {
        if (window.pageYOffset > 0) {
            navbar.addClass("fixed-top");
            $('#spacer').addClass("navbar-spacer");
            $("#home-nav-img").attr("src", "./assets/img/MMLOGO-small_wb.png");
        } else {
            navbar.removeClass("fixed-top");
            $('#spacer').removeClass("navbar-spacer");
            $("#home-nav-img").attr("src", "./assets/img/MMLOGO-small_bw.png");
        }
    };

    // display News Modal onLoad

    document.addEventListener('DOMContentLoaded', function () {
        $('#modalNews').modal('show');
    });
    



    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    $(".team-card").click(function(obj) {

        var i = this.id.split('-')[1];

        $("#modalTeam #team-name").html(team[i].name.toUpperCase());
        $("#modalTeam #team-role").html(team[i].role.toUpperCase());
        $("#modalTeam #team-img").attr("src", team[i].img);
        $("#modalTeam #team-q1").html(team[i].a1);
        $("#modalTeam #team-q2").html(team[i].a2);
        $("#modalTeam #team-q3").html(team[i].a3);
        $("#modalTeam #team-q4").html(team[i].a4);
        $("#modalTeam #team-q5").html(team[i].a5);
        $("#modalTeam #team-q6").html(team[i].a6);

        $('#modalTeam').modal('show');
    });


    // Smooth scroll to id

    // Get the navbar
    var navbar = $("#navbar");
    var introbar = $(".masthead");
    var spacing = 163;

    // Get the offset position of the navbar
    var sticky = navbar.offset().top;
    var smootherScroll = (e) => {
        var $target = $(e.data.target);
        var scrollTo = $target.offset().top;
        scrollTo = scrollTo - spacing;
        $('html, body').animate({
            'scrollTop': scrollTo
        }, 900, 'swing', function() {});
    }

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {


            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - spacing,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // before after init
    var sliders = [
        { selector: '.ba-slider_1', default: '.ba-slider_1' },
        { selector: '.ba-slider_2', default: '.ba-slider_1' }, // need a fallback of first desktop element
        { selector: '.ba-slider_3', default: '.ba-slider_1' },
        { selector: '.ba-slider_4', default: '.ba-slider_1' },
        { selector: '.ba-slider_5', default: '.ba-slider_1' },
        { selector: '.ba-slider_6', default: '.ba-slider_1' },
        { selector: '.ba-slider_7', default: '.ba-slider_1' },
        { selector: '.ba-slider_11', default: '.ba-slider_11' },
        { selector: '.ba-slider_22', default: '.ba-slider_11' }, // need a fallback of first mobile element
        { selector: '.ba-slider_33', default: '.ba-slider_11' },
        { selector: '.ba-slider_44', default: '.ba-slider_11' },
        { selector: '.ba-slider_55', default: '.ba-slider_11' },
        { selector: '.ba-slider_66', default: '.ba-slider_11' },
        { selector: '.ba-slider_77', default: '.ba-slider_11' }
    ];
    for (var i = 0; i < sliders.length; i++) {
        $(sliders[i].selector).beforeAfter({ hiddenElementDefault: sliders[i].default, mobile: sliders[i].mobile });
    }

    $('#carousel-inspirations-mobile').carousel({
        interval: 5000,
        touch: false
    })

    $('#carousel-inspirations').carousel({
        interval: 5000,
        touch: false
    })

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add "active" class to navbar items on scroll
    $("body").scrollspy({
        target: "#navbar",
        offset: 170, // offset of navbar height
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#navbar").offset().top > spacing) {
            $("#navbar").addClass("navbar-shrink");
        } else {
            $("#navbar").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);




    // Google Maps - 2 click solution
    function activateGoogleMaps() {
        var mapPlaceholder = $('.map-placeholder');
        var mapPlaceholderWidth = mapPlaceholder.attr('data-width');
        var mapPlaceholderHeight = mapPlaceholder.attr('data-height');
        var mapPlaceholderSrc = mapPlaceholder.attr('data-iframe-src')
            // Build iframe
        var mapIFrame = '<iframe src="' + mapPlaceholderSrc + '" width="' + mapPlaceholderWidth + '" height="' + mapPlaceholderHeight + '" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
        // Add iFrame and remove placeholder
        mapPlaceholder.after(mapIFrame);
        mapPlaceholder.attr('style', 'display:none !important');
    }

    function setCookie() {
        Cookies.set('googleMapsAllowed', '1', { expires: 1 })
    }
    $(document).ready(function() {
        var cookie = Cookies.get('googleMapsAllowed');
        if (cookie) {
            activateGoogleMaps();
        }
        $('#map-privacy-check-once').click(function() {
            activateGoogleMaps();
        })
        $('#map-privacy-check-always').click(function() {
            activateGoogleMaps();
            setCookie();
        })
    });


})(jQuery); // End of use strict