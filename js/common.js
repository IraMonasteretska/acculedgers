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
    // serv
    $('.pagetitlesection__descr, .services-wrapper').css('padding-left', paddingContainer);

    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        $('.outcustservproc__leftsect').css('padding-left', paddingContainer);
        $('.outcustservproc__rightsect').css('padding-right', paddingContainer);

        // serv
        $('.pagetitlesection__descr, .services-wrapper').css('padding-left', paddingContainer);
    });


    $('.mobmenu').click(function () {
        $('.header.header nav').addClass('show');
    });

    $('.closemenu').click(function () {
        $('.header.header nav').removeClass('show');
    });






    
            if ($('.servsidebar__servlist-body').length > 0) {
    
                $(".servsidebar__servlist-body ul").on("click", "a", function (event) {
                    console.log('sdsdsd')
                    event.preventDefault();
                    var id = $(this).attr('href'),
                        top = $(id).offset().top;
                    $('body,html').animate({ scrollTop: top - 105 }, 1500);
                });
    
    
                const links = document.querySelectorAll('.servsidebar__servlist-body li a');
                window.addEventListener('scroll', () => {
                    const anchors = document.querySelectorAll('.servsect [id]');
                    anchors.forEach(anchor => {
                        if (anchor.closest('.servsect')) {
                            const anchorTop = anchor.getBoundingClientRect().top + window.pageYOffset;
                            if (window.pageYOffset >= anchorTop - 110) {
                                links.forEach(link => {
                                    const correspondingLink = document.querySelector(`.servsidebar__servlist-body li a[href="#${anchor.id}"]`);
                                    if (correspondingLink) {
                                        link.classList.remove('active');
                                        correspondingLink.classList.add('active');
                                    }
                                });
                            }
                        }
                    });
                });
    
    
    
    
    
    
    
            }










});