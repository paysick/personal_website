  $('document').ready(function(){
  
    var animateOnScroll = function(element, wrapper, animation){
      $(window).scroll(function() {
       var hT = $(wrapper).offset().top,
           hH = $(wrapper).outerHeight(),
           wH = $(window).height(),
           wS = $(this).scrollTop();
       // console.log((hT-wH) , wS);
       if (wS+400 > (hT+hH-wH)){
        $(element).removeAttr('hidden');
        $(element).addClass('animated ' + animation);
       }
     });      
    }

    animateOnScroll('.card', '#cards', 'zoomIn');
    animateOnScroll('#personal_info_left', '#personal_info', 'fadeInLeft');
    animateOnScroll('#personal_info_right', '#personal_info', 'fadeInRight');
    animateOnScroll('.img_card', '#img_cards', 'flipInY');
    animateOnScroll('#navbar', '#personal_info', 'fadeIn');

    // $(window).scroll(function() {
    //    var hT = $('#personal_info').offset().top,
    //        hH = $('#personal_info').outerHeight(),
    //        wH = $(window).height(),
    //        wS = $(this).scrollTop();
    //    // console.log((hT-wH) , wS);
    //    if (wS+400 > (hT+hH-wH)){
    //     $('#personal_info_left').removeAttr('hidden');
    //     $('#personal_info_right').removeAttr('hidden');
    //     $('#personal_info_left').addClass('animated fadeInLeft');
    //     $('#personal_info_right').addClass('animated fadeInRight');
    //    }
    // });

  // $(window).scroll(function() {
  //    var hT = $('#skills').offset().top,
  //        hH = $('#skills').outerHeight(),
  //        wH = $(window).height(),
  //        wS = $(this).scrollTop();
  //     console.log((hT-wH) , wS);
  //    if (wS+400 > (hT+hH-wH)){
  //     $('#skills_right').removeAttr('hidden');
  //     $('#skills_right').addClass('animated fadeInRight');
  //     $('#skills_left').removeAttr('hidden');
  //     $('#skills_left').addClass('animated fadeIn');
  //    }
  //  });

  $(window).scroll(function() {
     var hT = $('#skills').offset().top,
         hH = $('#skills').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
     // console.log((hT-wH) , wS);
     if (wS+400 > (hT+hH-wH)){
      $('#skills_left').removeAttr('hidden');
      $('#skills_left').addClass('animated fadeIn');
      $('#skillA').removeAttr('hidden');
      setTimeout(function(){$('#skillB').removeAttr('hidden')},100);
      setTimeout(function(){$('#skillC').removeAttr('hidden')},200);
      setTimeout(function(){$('#skillD').removeAttr('hidden')},300);
      setTimeout(function(){$('#skillE').removeAttr('hidden').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('li').css('color','black');
          console.log("skill filling started"); 
          $('#skillA').html('SKILLA 90%');
          setTimeout(function(){$('#skillB').html('SKILLB 80%');$('.skill_val').addClass('animated fadeIn');},100);
          setTimeout(function(){$('#skillC').html('SKILLC 60%');},200);
          setTimeout(function(){$('#skillD').html('SKILLD 70%');},300);
          setTimeout(function(){$('#skillE').html('SKILLE 30%');},400);
          
          //$('.skill_val').addClass('animated fadeIn');
      });},400);
      
      // $('#skills_right').addClass('animated fadeInRight');
      // $('#skills_left').removeAttr('hidden');
      // $('#skills_left').addClass('animated fadeIn');
     }
   });

  $(window).scroll(function() {
     var hT = $('#personal_info').offset().top,
         hH = $('#personal_info').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
     // console.log((hT-wH) , wS);
     if (wS+400 > (hT+hH-wH)){
      $('#personal_info_left').removeAttr('hidden');
      $('#personal_info_right').removeAttr('hidden');
      $('#personal_info_left').addClass('animated fadeInLeft');
      $('#personal_info_right').addClass('animated fadeInRight');
     }
   });

});