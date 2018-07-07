$(".header-bottom>.one>li:first-child").hover(function(){
    $(this).addClass("title-ulhover");
    $(this).find("span").addClass("trigonBottom");
    $(".header-bottom>.one>li:first-child").css("color","#fff");
    $(".title-ul").css("display","block");
},function(){
    $(".title-ul").css("display","none");
    $(this).removeClass();
    $(this).find("span").removeClass();
   $(".header-bottom>.one>li:first-child").css("color","#000"); 
})

    $(".header-bottom>.two>li").hover(function(){
var span=$(this).index();
console.log(span)
$(".header-bottom>.two>li span").eq(span).addClass("trigonTop");
},function(){
var span=$(this).index();
    $(".header-bottom>.two>li span").eq(span).removeClass();
})