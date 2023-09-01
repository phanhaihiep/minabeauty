$(function() {
    if ( $(window).width() < 768 ) {
        startCarousel();
    } else {
        $('.owl-carousel').addClass('off');
    }
    $(window).resize(function() {
        if ( $(window).width() < 768 ) {
          startCarousel();
        } else {
          stopCarousel();
        }
    });
    function startCarousel (){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin: 30, // marfin giữa các hình ảnh
            nav: false,  // Cho phép hiển thị pre/next button
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            },
            dots: true,
            autoplay:false,
            autoplayTimeout:4000,
            autoplayHoverPause:true
        })
    }
    function stopCarousel() {
        var owl = $('.owl-carousel');
        owl.trigger('destroy.owl.carousel');
        owl.addClass('off');
    }

    // accordion
    const accordion = document.getElementsByClassName('container');
    Array.from(accordion).forEach((item, index) => {
        item.addEventListener('click', function () {
            removeActive(index);
            this.classList.toggle('active');
        })
    });
    function removeActive(index){
        console.log("index ===", index )
        Array.from(accordion).forEach((item2, index2) => {
            if( index != index2){
                item2.classList.remove('active');
            }
        });
    }
    // scroll element
    $("#scroll-types").click(function (){
        $('html, body').animate({
            scrollTop: $('#wrapper__type').offset().top
        }, 2000);
    });
    $("#scroll-benefits").click(function (){
        $('html, body').animate({
            scrollTop: $('#wrapper__bnf').offset().top
        }, 2000);
    });
    $("#scroll-experience").click(function (){
        $('html, body').animate({
            scrollTop: $('#wrapper__exp').offset().top
        }, 2000);
    });
    $("#scroll-aftercare").click(function (){
        $('html, body').animate({
            scrollTop: $('#wrapper__care').offset().top
        }, 2000);
    });
    $("#scroll-faq").click(function (){
        $('html, body').animate({
            scrollTop: $('.wrapper__faqs').offset().top
        }, 2000);
    });
});
