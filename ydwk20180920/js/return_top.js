$(document).ready(function(){  

    $(".top").hide();  

   $(function () {  

      //检测屏幕高度  

        var height=$(window).height();  

       //scroll() 方法为滚动事件  

       $(window).scroll(function(){  

           if ($(window).scrollTop()>height){  

              $(".top").fadeIn(500);  

         }else{  

              $(".top").fadeOut(500);  

                }  

        });  

        $(".top").click(function(){  

           $('body,html').animate({scrollTop:0},100);  

           return false;  

        });  

   });  

});  