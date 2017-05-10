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


})
