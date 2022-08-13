/*$(document).ready(function() {
    $("#menu").on("click", function() {
          $("this").toggleClass("fa-times");
          $("header").toggleClass('toggle');
    });
}); */

/*
$(document).ready(function(){

$('#menu').click(function(){  
$(this).toggleClass('fa-times');
$('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeCLass('fa-times');
        $('header').removeCLass('toggle');
    });

    if($(window).scrollTop() > 0){
        $('.top').show();
    }else{
        $('.top').hide();
    }

    // smoth scrolling

    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();

        $('html', 'body').animate({


            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
    'linear'
        );


    });
});

*/ 


let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click', () =>{
    let background = color.style.background;
    document.querySelector('header').style.background = background;
    document.querySelector('body').style.background = background;
}));



$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

 /* var typed = new Typed('.typing', {
    strings : [ 'web developer', 'back end developer', 'java develoer'],
    typeSpeed: 120,
    loop:true
  });
*/
  