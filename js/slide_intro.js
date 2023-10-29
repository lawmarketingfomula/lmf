
$('.total_menu').click(function(){//메뉴열기//
    $('.ham-con').show();
    $('body').css({'overflow':'hidden'});	
    setTimeout(function() {
        $('header .ham-con').addClass("on")
    }, 100);
})

$('.ham-close-btn').click(function(){ //메뉴 닫기// 
    $('.wrap').stop().animate({'margin-left' : '0%'})
    $('header .ham-con').removeClass("on");
    $('body').css('overflow-y','scroll');	
    $('header .ham-con .container-box > .top').removeClass('on')
    setTimeout(function() {
        $('.ham-con').hide();
    }, 300); 
})

$('.bg').click(function(){//메뉴 컨텐츠 외 클릭시 닫힘
    $('.wrap').stop().animate({'margin-left' : '0%'})
    $('body').css('overflow-y','scroll');	
    $('header .ham-con .container-box > .top').removeClass('on')
    $('header .ham-con').removeClass("on");
    setTimeout(function() {
        $('.ham-con').hide();
    }, 300); 
})

$('.min-show .title').on('click',function(){ //모바일에서만 보이는 메뉴
    $(this).next('.min-con').slideToggle()
    $(this).toggleClass("on")
    // $(this).parents().find('header .ham-con .menu').toggleClass("on");
    // if($('.min-show .title').hasClass('on') == length < 1){
    //     $('.min-show .car-box,.bottom li,.middle ul li').addClass('on')
    // }else if($('.min-show .title').hasClass('on') == length < 0) {
    //     $('.min-show .car-box,.bottom li,.middle ul li').removeClass('on')
    // }
})

$('.Event_Menu').click(function(){//메뉴 열기//
    $('.our-con').slideToggle(400);
    $('.our-con').toggleClass("on");
    var our_con_check = $('.our-con').hasClass('on');
    if(our_con_check == true){
        $('body').css('overflow-y','hidden');	
    }else{
        // $('body').css('overflow-y','scroll');						
    }

})

$('.out-close-btn').click(function(){//메뉴 닫기//
    $('.our-con').slideUp(400);
    $('.our-con').removeClass("on");

})

$('.bg02').click(function(){//our-con 컨텐츠 외 클릭시 닫힘
    $('.our-con').slideUp(400);
    $('.our-con').removeClass("on");
    // $('body').css('overflow-y','scroll');	
})

$('.left li').on('click',function(){ //메뉴 1depth//
    var data = $(this).attr('data-rel');
    var $content = $('.' + data);
    $(this).addClass("on").siblings().removeClass("on")
    $content.show().siblings().hide()
})

$(".tab02").on('click',function(){//메뉴 2depth// 
    var title = $(this).data('tit'); 
    $(".txt-cg").text(title);
    $(this).parents('.wrap').stop().animate({'margin-left' : '-100%'})
    $('header .ham-con .container-box > .top').addClass("on");
    $('.ham-con').attr("data-depth", 2);
})

$(".tab03").on('click',function(){ //메뉴 3depth//
    var title = $(this).data('tit');
    $(".txt-cg").text(title);
    $(this).parents('.wrap').stop().animate({'margin-left' : '-200%'})
    $('.ham-con').attr("data-depth", 3);
})

$(".back").on('click',function(){ //메뉴 돌아가기//
    var depth = Number($('.ham-con').attr("data-depth"));
    var left = (depth - 2) * -100;
    $('.wrap').stop().animate({'margin-left' : left+'%'})
    if (0 == left) {
        $('header .ham-con .container-box > .top').removeClass("on");
    }

    $('.ham-con').attr("data-depth", (depth - 1)); 
})
