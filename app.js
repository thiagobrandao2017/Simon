$(document).ready(function(){

  var colors = ["green","red","blue","yellow"];
  var compSequence = [];
  var userSequence = [];


  var start = function() {
    userSequence = [];
    var random = colors[Math.floor(Math.random() * 4)];
    compSequence.push(random);
    console.log(compSequence);

    var timeOut = function(i) {
      var circle = $(`#${compSequence[i]}`)
      circle.addClass("click-bright-" + circle.attr("id"));
        setTimeout(function(){
          var circle = $(`#${compSequence[i]}`)
          circle.removeClass("click-bright-" + circle.attr("id"));
          if (i < compSequence.length) {
            timeOut(i + 1);
          }
      },850);
    }


    timeOut(0);
 }

  var compare = function() {
    for (var i = 0; i < compSequence.length; i++) {
      if (compSequence[i] !== userSequence[i]) {
        alert("Wrong, CLICK start again!");
        compSequence = [];
        userSequence = [];
        return;
      }
    }
    setTimeout(function() {
      start();
    },1500)

  }

  var userClick = function() {
    var colorSelected = $(this).attr("id");
    $(this).addClass("click-bright-" + colorSelected);
    var that = $(this);
    setTimeout(function() {
      that.removeClass("click-bright-" + colorSelected);
    }, 500);
    userSequence.push(colorSelected);
    if (userSequence.length === compSequence.length) {
      setTimeout(function() {
        compare();
      }, 1000);
    }
    console.log(userSequence);;
  }

  $("#start").on("click", start);
  $(".color-selection").on("click", userClick);
  $("#reset").on("click", function (){
    userSequence = [];
    compSequence = [];
  });

});
