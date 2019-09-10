 $(function(){

//*a
$('a').click(function(e){
    e.preventDefault();
  });

//롤링
   function move(){
    $('.seoul-gnb-news dd').first().slideUp(function(){
        $(this).appendTo('.seoul-gnb-news').show(); 
    });
  }
var play=setInterval(move, 2000);

//공지닫기
$('.sema-notice .icon-close').click(function(){
  $('.sema-notice').hide();
  });

//nav
$('.icon-menu').click(function(){
    $(this).toggleClass('icon-menu icon-closeb1');
    $('nav').toggleClass('open');
    $('.nav-bg').toggleClass('open');
});


$('.gnb li a').on('click',function(){
    $(this).addClass('active');
    $(this).hasClass('active')
        $(this).removeClass('active');
        $(this).next().slideToggle();
   
});

//언어
$('.icon-up-triangle').click(function(e){
    e.preventDefault();
    $(this).toggleClass('icon-up-triangle icon-down-triangle');
  });
  
  
  $('.gnb .box li:last-child ul a').click(function(e){
    e.preventDefault();
    $('.gnb .box li:last-child ul a.active').removeClass('active'); 
    $(this).addClass('active'); 
  });

// 검색창
$('.icon-search').click(function(){
    $(this).toggleClass('icon-search icon-closeb');
    $('.search-area form').toggleClass('open');
    
});

//로그인
$('.gnb li:last-child .box li:first-child').click(function(){
    $('#id, #password').val('');
    $('.login-pop').show();
  })

  $('#btn-submit').click(function(){
    $('.gnb .box:last-child > li:first-child').text('로그아웃').css('color','#fff');
      })

  $('.wrap i').click(function(){
    $('.login-pop').hide();
  })

  $('#id, #password').on({
    focusin:function(){ 
        $(this).prev().addClass('change');
    },
    focusout:function(){
        $(this).prev().removeClass('change');
    },
  })

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
        $('.user-info').show(500).hide(2000);
      }
  })

  $('#id, #password').keyup(function(){
    var textLength=$(this).val().length;
        if(textLength!=0){
        $(this).next('.message').remove();
      }
  })      


//top button
$(".icon-top").click(function() {
    $('html, body').animate({
        scrollTop : 0
    }, 300);
    return false;
    });

    var boxPosition=$('#qiuck-menu').offset().top;
    $(window).scroll(function(){
        var scrollTop=$(this).scrollTop();
        $('#qiuck-menu').stop(true).animate({
            top:scrollTop+boxPosition
        },300)
    })           
    

//contents
$('.gallery li').slice(0,2).show();
            
$('.more').click(function(e){
    e.preventDefault();
    if($(this).text()=='End'){
        $('.gallery li').hide().slice(0,2).show();
        $(this).text('더보기');
    }else{
        $('.gallery li:hidden').slice(0,2).slideDown();
        if($('.gallery li:hidden').length==0){
            $(this).text('End');
        }
    }
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

//퀵메뉴
//top button
$(".icon-top").click(function() {
    $('html, body').animate({
        scrollTop : 0
    }, 400);
    return false;
  });

//찜
$('.list .icon-contentslike').click(function(){
  $(this).toggleClass('icon-contentslike icon-contentslikef');
})

})
      



   

