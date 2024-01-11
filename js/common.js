$(document).ready(function () {
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

});