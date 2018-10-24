window.onload = function () {
    $('.fade').css('display', 'none');
    $('.swiper-container').css('visibility', 'visible');
};

$(function () {
    new Swiper('.swiper-container', {
        direction: 'vertical',
        on: {
            slideChangeTransitionEnd: function () {
                if (this.realIndex === 0) {
                    firstShowHandle();
                    secondHideHandle();
                } else if (this.realIndex === 1) {
                    firstHideHandle();
                    secondShowHandle();
                    thirdHideHandle();
                } else if (this.realIndex === 2) {
                    secondHideHandle();
                    thirdShowHandle();
                }
            }
        }
    });

    firstShowHandle();
    secondHideHandle();
    thirdHideHandle();

    /* 第一屏 */
    function firstShowHandle() {
        $('.first').show(0);
        var subtitle = $('#subtitle');
        $('#title').addClass('animated fadeIn');
        subtitle.find('.item').eq(0).addClass('animated fadeInLeft');
        subtitle.find('.item').eq(1).addClass('animated bounceIn');
        subtitle.find('.item').eq(2).addClass('animated fadeInRight');
        $('#date').addClass('animated fadeIn');
        $('#practice').addClass('animated fadeInUp');
        $('#iphone,#travel,#shop,#food').addClass('animated rotateIn');
        $('#firstBottom').addClass('animated fadeInUp');
    }

    function firstHideHandle() {
        var subtitle = $('#subtitle');
        $('#title').removeClass('animated fadeIn');
        subtitle.find('.item').eq(0).removeClass('animated fadeInLeft');
        subtitle.find('.item').eq(1).removeClass('animated bounceIn');
        subtitle.find('.item').eq(2).removeClass('animated fadeInRight');
        $('#date').removeClass('animated fadeIn');
        $('#practice').removeClass('animated fadeInUp');
        $('#iphone,#travel,#shop,#food').removeClass('animated rotateIn');
        $('#firstBottom').removeClass('animated fadeInUp');
        $('.first').hide(0);
    }

    /* 第二屏 */
    function secondShowHandle() {
        $('.second').show(0);
        $('#secondTitle').addClass('animated fadeIn');
        $('#cloud').addClass('animated fadeIn');
        $('#photo').addClass('animated fadeIn');
        $('#secondSubtitle').addClass('animated fadeIn');
        $('#secondSubtitle2').addClass('animated fadeInUp');
        $('#honBao').addClass('animated bounceIn');
        $('#secondDate').addClass('animated fadeInUp');
    }

    function secondHideHandle() {
        $('#secondTitle').removeClass('animated fadeIn');
        $('#cloud').removeClass('animated fadeIn');
        $('#photo').removeClass('animated fadeIn');
        $('#secondSubtitle').removeClass('animated fadeIn');
        $('#secondSubtitle2').removeClass('animated fadeInUp');
        $('#honBao').removeClass('animated bounceIn');
        $('#secondDate').removeClass('animated fadeInUp');
        $('.second').hide(0);
    }

    /* 第三屏 */
    function thirdShowHandle() {
        $('.third').show(0);
        $('#ready').addClass('animated fadeInLeft');
        $('#begin').addClass('animated fadeInUp');
        $('#thirdTitle,#money,#duck,#sweet,#bag').addClass('animated fadeIn');
    }

    function thirdHideHandle() {
        $('.third').hide(0);
        $('#ready').removeClass('animated fadeInLeft');
        $('#begin').removeClass('animated fadeInUp');
        $('#thirdTitle,#money,#duck,#sweet,#bag').removeClass('animated fadeIn');
    }
});
