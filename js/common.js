$(document).ready(function () {

    // aos init
    AOS.init({
        duration: 1000,
    });

    // header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });

    if ($(this).scrollTop() > 10) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }


    $('.sublink a').click(function (e) {
        e.preventDefault();
        $(this).next('.submenu').toggleClass('show');
    })


    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)
    $('.outcustservproc__leftsect').css('padding-left', paddingContainer);
    $('.outcustservproc__rightsect').css('padding-right', paddingContainer);


    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        $('.outcustservproc__leftsect').css('padding-left', paddingContainer);
        $('.outcustservproc__rightsect').css('padding-right', paddingContainer);
    });


    $('.mobmenu').click(function () {
        $('.header.header nav').addClass('show');
    });

    $('.closemenu').click(function () {
        $('.header.header nav').removeClass('show');
    });
















});