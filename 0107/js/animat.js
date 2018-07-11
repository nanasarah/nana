$(document).ready(function(){
    var lla =$(".lla"); 
    var lla1 =$(".lla1");
    var lla2 =$(".lla2"); 
    var lla3 =$(".lla3"); 
    var lla4 =$(".lla4"); 
    var lla5 =$(".lla5");  
    var pic =$(".rw");
    var harw=$(".harw");
    var choose=$(".choose");
    var thxyf=$(".thxyf");
    var ppt=$(".ppt");
    var ppt1=$(".ppt1");
    var ppt2=$(".ppt2");
    var ppt3=$(".ppt3");
    var ppt4=$(".ppt4");
    var egg=$(".egg");
    var llrr=$(".llrr");
    var pear=$(".pear");
// 1
var timer = setInterval(function(){  
                if (timer == null) {  
                     pic.attr("src","img/zuo.png");  
                    timer = 1;   
                } else {  
                    pic.attr("src","img/you.png");   
                    timer = null;       
                }  
},500);
// 2
setTimeout(function(){var time = setInterval(function(){  
                if(time == null){  
                     lla.css("display","block"); 
                    time = 1;   
                }else {  
                    lla.css("display","none");  
                    time = null;       
                }  
},1000);},0);
setTimeout(function(){var time1 = setInterval(function(){  
                if(time1 == null){  
                     lla1.css("display","block"); 
                    time1 = 1;   
                }else {  
                    lla1.css("display","none");  
                    time1 = null;       
                }  
},1000);},1000);
setTimeout(function(){var time5 = setInterval(function(){  
                if(time5 == null){  
                     lla2.css("display","block"); 
                    time5 = 1;   
                }else {  
                    lla2.css("display","none");  
                    time5 = null;       
                }  
},1000);},500);
setTimeout(function(){var time2 = setInterval(function(){  
                if(time2 == null){  
                     lla3.css("display","block"); 
                    time2 = 1;   
                }else {  
                    lla3.css("display","none");  
                    time2 = null;       
                }  
},1000);},500);
setTimeout(function(){var time3 = setInterval(function(){  
                if(time3 == null){  
                     lla4.css("display","block"); 
                    time3 = 1;   
                }else {  
                    lla4.css("display","none");  
                    time3 = null;       
                }  
},1000);},400);
setTimeout(function(){var time4 = setInterval(function(){  
                if(time4 == null){  
                     lla5.css("display","block"); 
                    time4 = 1;   
                }else {  
                    lla5.css("display","none");  
                    time4 = null;       
                }  
},1000);},500);
 // 3
var tim = setInterval(function(){  
                if (tim == null) {  
                     harw.attr("src","img/rw4.png");  
                    tim = 1;   
                } else {  
                    harw.attr("src","img/rw41.png");   
                    tim = null;       
                }  
},500);
setTimeout(function(){    var ttrt = setInterval(function(){  
                if (ttrt == null) {  
                     ppt.css("display","block");  
                    ttrt = 1;   
                } else {  
                    ppt.css("display","none");   
                    ttrt = null;       
                }  
},500);},10);
setTimeout(function(){var ttr1 = setInterval(function(){  
                if (ttr1 == null) {  
                     ppt1.css("display","block");  
                    ttr1 = 1;   
                } else {  
                    ppt1.css("display","none");   
                    ttr1 = null;       
                }  
},500); },200);
setTimeout(function(){var ttr2 = setInterval(function(){  
                if (ttr2 == null) {  
                     ppt2.css("display","block");  
                    ttr2 = 1;   
                } else {  
                    ppt2.css("display","none");   
                    ttr2 = null;       
                }  
},500);},300);
setTimeout(function(){var ttrt1 = setInterval(function(){  
                if (ttrt1 == null) {  
                     ppt3.css("display","block");  
                    ttrt1 = 1;   
                } else {  
                    ppt3.css("display","none");   
                    ttrt1 = null;       
                }  
},300);},400);
setTimeout(function(){var ttrt2 = setInterval(function(){  
                if (ttrt2 == null) {  
                     ppt4.css("display","block");  
                    ttrt2 = 1;   
                } else {  
                    ppt4.css("display","none");   
                    ttrt2 = null;       
                }  
},500);},500);
// egg
setTimeout(function(){var qq = setInterval(function(){  
                if (qq == null) {  
                     egg.attr("src","img/jj.png"); 
                     egg.css("top","75%");
                     egg.addClass("yh");
                    qq = 1;   
                } else {  
                    egg.attr("src","img/egg.png");  
                     egg.css("top","83%");  
                    qq = null;       
                }  
},500);},500);
// llrr
setTimeout(function(){var llrr1 = setInterval(function(){  
                if (llrr1 == null) {  
                     llrr.attr("src","img/sqb.png"); 
                     llrr.css("top","75%");
                     llrr.addClass("yh");
                    llrr1 = 1;   
                } else {  
                    llrr.attr("src","img/ll.png");  
                     llrr.css("top","78%");  
                    llrr1 = null;       
                }  
},500);},2000);
// pear
setTimeout(function(){var pear1 = setInterval(function(){  
                if (pear1 == null) {  
                     pear.attr("src","img/ax.png"); 
                     pear.css({"top":"73%","width":"15%"});
                     pear.addClass("yh");
                    pear1 = 1;   
                } else {  
                    pear.attr("src","img/pear.png");   
                    pear1 = null;       
                }  
},500);},2800);
// 5
var tii = setInterval(function(){  
                if (tii == null) {  
                     thxyf.attr("src","img/rw6.png");  
                    tii = 1;   
                } else {  
                    thxyf.attr("src","img/rw61.png");   
                    tii = null;       
                }  
},500);
})


