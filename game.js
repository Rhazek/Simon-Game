let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let level = 0;
let started = false;

$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  let userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.lastIndexOf(userChosenColor));
});


function nextSequence() {

  level++;
  userClickedPattern = [];
  $("#level-title").text("Level " + level);


  let randomNumber = Math.floor(Math.random() * 4);

  let randomChosenColour = buttonColors[randomNumber];

  var colour = new Audio("sounds/" + randomChosenColour + ".mp3");
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  colour.play();
}

function playSound(name) {
  $("#" + name);
  var colour = new Audio("sounds/" + name + ".mp3");
  colour.play();
}

function animatePress(currentColor) {
  let activeBottom = $(".btn" + "." + currentColor).addClass("pressed");
  setTimeout(function() {
    activeBottom.removeClass("pressed");
  }, 100);
}


function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log(userClickedPattern[currentLevel]);
    console.log(gamePattern[currentLevel]);
    var count = 0;
    for (var i = 0; i < gamePattern.length; i++) {
      if (gamePattern[i] === userClickedPattern[i]) {
        count++;
      }
    }


    if (count === gamePattern.length) {
      console.log("success");
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
