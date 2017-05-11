$(document).ready(function(){

//**********************//
//Functions to make Hover method work - when mouse is hovered over a circle, it adds a class in this case brighter color and no border-style.
//**********************//
var brightGreen = function(){
  $(this).addClass('bright-green');
}
var backToGreen = function(){
  $(this).removeClass('bright-green');
}
var brightRed = function(){
  $(this).addClass('bright-red');
}
var backToRed = function(){
  $(this).removeClass('bright-red');
}
var brightBlue = function(){
  $(this).addClass('bright-blue');
}
var backToBlue = function(){
  $(this).removeClass('bright-blue');
}
var brightYellow = function(){
  $(this).addClass('bright-yellow');
}
var backToYellow = function(){
  $(this).removeClass('bright-yellow');
}
$(".green").hover(brightGreen,backToGreen);
$(".red").hover(brightRed,backToRed);
$(".blue").hover(brightBlue,backToBlue);
$(".yellow").hover(brightYellow,backToYellow);


//************************//

//************************//
//Click functionality
//************************//
$(".green").on("click",function(){
  $(this).addClass('click-bright-green');
  setTimeout(function(){
    $(".green").removeClass('click-bright-green') }, 2000);
});

$(".red").on("click",function(){
  $(this).addClass('click-bright-red');
  setTimeout(function(){
    $(".red").removeClass('click-bright-red') }, 2000);
});

$(".blue").on("click",function(){
  $(this).addClass('click-bright-blue');
  setTimeout(function(){
    $(".blue").removeClass('click-bright-blue') }, 2000);
});

$(".yellow").on("click",function(){
  $(this).addClass('click-bright-yellow');
  setTimeout(function(){
    $(".yellow").removeClass('click-bright-yellow') }, 2000);
});

//************************//


})
