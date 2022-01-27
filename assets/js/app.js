$(function () {
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

});






































