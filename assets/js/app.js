$(function () {

    /*navToggle on mobile*/

    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on('click', function (event) {
        event.preventDefault();

        $("body").toggleClass('show-nav');
        $(this).toggleClass('active');
        nav.toggleClass('show');
    });
    $(window).on("resize", function () {
        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');
    })


    let intro = $("#intro");
    let header = $("#header");
    let headerH = header.innerHeight();
    let introH = intro.innerHeight() - headerH;
    let scrollTop = $(window).scrollTop();
    headerScroll();
    /*Header class on scroll*/
    /*изменить размер - resize*/
    $(window).on("scroll resize", function () {
        headerScroll();
    })

    function headerScroll() {

        headerH = header.innerHeight();
        introH = intro.innerHeight() - headerH;

        let scrollTop = $(this).scrollTop();
        if (scrollTop >= introH) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark")
        }
    }

    /*Smooth scroll to sections*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let scrollEL = $(this).data("scroll");
        let scrollELPosition = $(scrollEL).offset().top;

        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');

        $("html,body").animate({
            scrollTop: scrollELPosition - headerH
        }, 500)
    })
    /*ScrollSpy */
    let windowH = $(window).height();
    scrollSpy(scrollTop);

    $(window).on("scroll", function () {
        scrollTop = $(this).scrollTop();
        scrollSpy(scrollTop);

    });

    function scrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function () {

            let $this = $(this);
            let sectionId = $(this).data('scrollspy');

            let sectionOffset = $this.offset().top;
            sectionOffset -= windowH * 0.3;

            if (scrollTop >= sectionOffset) {
                $('#nav [data-scroll]').removeClass('active');
                $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
            }
            if (scrollTop <= 0) {
                $('#nav [data-scroll]').removeClass('active');
            }
        });
    }

    /*Modal*/
    $('[data-modal]').on('click', function (event) {
        event.preventDefault();
        let modal = $(this).data('modal');
        $('body').addClass('no-scroll');
        $(modal).addClass('show');
        setTimeout(function () {
            $(modal).find('.modal__content').css({
                transform: 'translateY(0)',
                opacity: '1'
            });
        }, 100);

    });

    $('[data-modal-close]').on('click', function (event) {
        event.preventDefault();
        let modal = $(this).parents('.modal');
        modalClose(modal);

    });


    $('.modal').on('click', function () {
        let modal = $(this);
        modalClose(modal);

    });
    $('.modal__content').on('click', function (event) {
        event.stopPropagation();/*При клике на этот элемент не будет
        срабатывать событие клик по ее
        родителю*/
    });

    /*Function Close____________________________________________________________*/
    function modalClose(modal) {
        setTimeout(function () {
            modal.find('.modal__content').css({
                transform: 'translateY(-100px)',
                opacity: '0'
            });
        }, 100);
        setTimeout(function () {
            modal.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 200);
    }


    /*Slick - Slider https://kenwheeler.github.io/slick/*/
    /*Intro Slider*/
    let introSlider = $('#introSlider');
    introSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 1000
    });

    $('#introSliderPrev').on('click', function () {
        introSlider.slick('slickPrev')
    });
    $('#introSliderNext').on('click', function () {
        introSlider.slick('slickNext')
    });

    /*ReviewsSlider*/
    let reviewsSlider = $('#reviewsSlider');
    reviewsSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,

        speed: 500
    });

    AOS.init();

// You can also pass an optional settings object
// below listed default settings
    AOS.init({
        // Global settings:
        disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 80, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
});






































