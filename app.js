$(document).ready(function(){

  var colors = ["green","red","blue","yellow"];
  var compSequence = [];
  var userSequence = [];

  var start = function() {
    userSequence = [];
    var random = colors[Math.floor(Math.random() * 4)];
    compSequence.push(random);

    console.log(compSequence);

    for (var i = 0; i < compSequence.length; i++) {
      $(`#${random}`).addClass("click-bright-" + random);
        setTimeout(function() {
          $(`#${random}`).removeClass("click-bright-" + random);
        },2000)
    }
  }

  var compare = function() {
    for (var i = 0; i < compSequence.length; i++) {
      if (compSequence[i] !== userSequence[i]) {
        alert("Wrong, start again!");
        return;
      }
    }
    start();
  }

  var userClick = function() {
    var colorSelected = $(this).attr("id");
    $(this) .addClass("click-bright-" + colorSelected);
    var that = $(this);
    setTimeout(function() {
      that.removeClass("click-bright-" + colorSelected);
    }, 2000);
    userSequence.push(colorSelected);
    if (userSequence.length === compSequence.length) {
      setTimeout(function() {
        compare();
      }, 2000);
    }
    console.log(userSequence);;
  }

  $("#start").on("click", start);
  $(".color-selection").on("click", userClick);

});
