var firstli=  $(".header-bottom>.one>li:first-child");
var twoli=$(".header-bottom>.two>li")
firstli.hover(function(){
    $(this).addClass("title-ulhover");
    $(this).find("span").addClass("trigonBottom");
    firstli.prop("color","#fff");
    $(".title-ul").css("display","block");
},function(){
    $(".title-ul").css("display","none");
    $(this).removeClass();
    // $(this).find("span").removeClass();
})

twoli.hover(function(){
var span=$(this).index();
$(".header-bottom>.two>li span").eq(span).addClass("trigonTop");
},function(){
var span=$(this).index();
    $(".header-bottom>.two>li span").eq(span).removeClass("trigonTop");
 
 
})