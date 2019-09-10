$(function(){
  $('a').click(function(e){
    e.preventDefault();
  });

  //rolling
   function move(){
    $('.seoul-gnb-news dd').first().slideUp(function(){
        $(this).appendTo('.seoul-gnb-news').show(); 
    });
  };
  var play=setInterval(move, 2000);

  //공지닫기
  $('.sema-notice .icon-close').click(function(){
    $('.sema-notice').hide();
  });

  //언어
  $('.icon-right-triangle').click(function(){
    $(this).toggleClass('icon-right-triangle icon-right-triangle');
    $('.lang ul').toggleClass('open');
  });
  
  $('.lang li a').click(function(e){
    e.preventDefault();
    $('.lang li a').removeClass('active'); 
    $(this).addClass('active'); 
  });

  //검색창
  $('.icon-search').click(function(){
    $(this).toggleClass('icon-search icon-closeb');
    $('.topbtn-area form').toggleClass('open');
  });

  //로그인
   $('.icon-logout').click(function(){
    $(this).toggleClass('icon-logout icon-login');
    $('#id, #password').val('');
    $('.login-pop').show();
  });

  $('.topbtn-area .icon-like').click(function(){
    $(this).toggleClass('icon-like icon-likef')
  });

  $('.wrap i').click(function(){
    $('.login-pop').hide();
  });

  $('#id, #password').on({
    focusin:function(){ 
        $(this).prev().addClass('change');
    },
    focusout:function(){
        $(this).prev().removeClass('change');
    },
  });

  $('#btn-submit').click(function(){    
    var id=$('#id').val(); 
    var password=$('#password').val();
    $('.message').remove();
    
    if(id==''){
        $('#id').after('<p class="message">아이디를 입력하세요.</p>').focus();
    }else if(password==''){
        $('#password').after('<p class="message">비밀번호를 입력하세요.</p>').focus();
    }else{
        var id=$('#id').val();
        $('.user-info b').text(id);                   
        $('.login-form').fadeOut();
        $('.user-info').show(function(){
          $(this).delay(2000).fadeOut();
        })
     }
  });


//nav                           
  $('.gnb > li').on('mouseenter',function(){
    $('.gnb > li > a').removeClass('active');
    $(this).children('a').addClass('active');                      
    $('.gnb ul, .depth2-bg').stop().slideDown();
  });    

  $('.gnb').on('mouseleave',function(){
    $('.gnb > li > a').removeClass('active');
    $('.gnb ul, .depth2-bg').stop().slideUp();
  });            
  
  //top button
  $(".icon-top").click(function() {
    $('html, body').animate({
        scrollTop : 0
    }, 400);
    return false;
  });

  //program swiper
  var programSwiper = new Swiper('.program .swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        el: '.program .swiper-pagination',
        clickable:true,
    },
  }); 

  //exhibition_list
  // 썸네일
  $('.exhibition_list').on('click','.small img',function(e){
    e.preventDefault();
    var src=$(this).attr('src');
    console.log(src);

    $(this).parents('li').find('.big').attr('src',src);
  });

  $('.list .img-area').click(function(e){
    e.preventDefault();
  }); 

  //하단탭메뉴
  $('.infotab-nav a').click(function(e){
    e.preventDefault();
    $('.infotab-nav a').removeClass('active'); 
    $(this).addClass('active'); 
          
    var id=$(this).attr('href');

    $('.tab-contents1 div').stop(true).hide(100);
    $(id).fadeIn();
  });

  //bottom-tab
  $('.tab-nav a').click(function(e){
    e.preventDefault();
    $('.tab-nav a').removeClass('active'); 
    $(this).addClass('active');   
    var id=$(this).attr('href');

    $('.tab-contents div').hide();                
    $(id).delay().show();
  });

  //research
  $('.research div').click(function(e){
    e.preventDefault();
  });

//찜 리스트
    $('.list').on('click','.btn-area button', function(e){
      e.preventDefault();
      $(this).find('i').toggleClass('icon-contentslike icon-contentslikef');
    });


})
      



   

