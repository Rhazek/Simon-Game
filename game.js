let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];


function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);

  let randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  var colour = new Audio ("sounds/" + randomChosenColour + ".mp3");
  colour.play();
}

  $(".btn").click(function () {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
  });

function playSound(name) {
  $("#" + name);
    var colour = new Audio("sounds/" + name + ".mp3");
    colour.play();
}

function animatePress(currentColor) {
  let activeBottom = $(".btn" + "." + currentColor).addClass("pressed");
    setTimeout(function(){
      activeBottom.removeClass("pressed");
    },100);
}
