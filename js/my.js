$(document).ready(function () {

    //AOS
    $(function () {
        AOS.init();
    })

    //fancybox
    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });



    //錨點捲動
    $('a[href*="#section"]').on('click', function () {
        if ($(window).width() > 767) {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500, 'linear');
        } else {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 60
            }, 500, 'linear');
        }
    })
    $('a[href*="#warn2"]').on('click', function () {
        $('#warn2 .qa-content').show();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500, 'linear');
    })
    $('a[href*="#place"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 500, 'linear');
    })



    //漢堡選單
    $('.nav-hamburger').click(function () {
        $('.nav-menu').toggleClass('active');
        $('.nav-hamburger').toggleClass('active');
    })


    //goTop
    $('.goTop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.goTop').fadeIn();
        } else {
            $('.goTop').stop().fadeOut();
        }

    });

    //跳轉到另一個頁面特定tab
    var hash = location.hash; //獲取到跳轉頁面的引數
    var tab = $('.tabs-nav   li');
    var con = $('.tabs-content .tab-pane');
    for (var i = 0; i < con.length; i++) {
        var mm = con[i];
        var selectCon = "#" + $(mm).attr('id');
        if (hash == selectCon) {
            tab.siblings().removeClass('active');
            con.siblings().removeClass('active');
            $(tab[i]).addClass('active');
            $(con[i]).addClass('active');
        }
    }


})