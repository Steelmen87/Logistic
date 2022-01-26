$(function () {
    let intro = $("#intro");
    let header = $("#header");
    let headerH = header.innerHeight();
    let introH = intro.innerHeight() - headerH;
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

    $(window).on("scroll", function () {

        let scrollTop = $(this).scrollTop();

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
        })

    });

})
























