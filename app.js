$(document).ready(function(){

  var green = $("#green");
  var red = $("#red");
  var blue = $("#blue");
  var yellow = $("#yellow");
  var colors = [green,red,blue,yellow];
  var random = colors[Math.floor(Math.random() * 4)].attr("id");
  var compSequence = [];
  var userSequence = [];


  $("#start").on("click",function(){
     $(`#${random}`).addClass("click-bright-" + random);
     setTimeout(function() {
       $(`#${random}`).removeClass("click-bright-" + random);
     }, 2000);
     compSequence.push(random);
 });

 $(".color-selection").on("click", function() {
    var colorSelected = $(this).attr("id");
    $(this)
    .addClass("click-bright-" + colorSelected)
    var that = this;
    setTimeout(function() {
      $(that).removeClass("click-bright-" + colorSelected);
    }, 2000);
    userSequence.push(colorSelected);
  });



})
