let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];


function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);

  let randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  switch (randomChosenColour) {
    case "red":
      let audio1 = new Audio('sounds/red.mp3');
      audio1.play();
      break;
    case "blue":
      let audio2 = new Audio('sounds/blue.mp3');
      audio2.play();
      break;
    case "green":
      let audio3 = new Audio('sounds/green.mp3');
      audio3.play();
      break;
    case "yellow":
      let audio4 = new Audio('sounds/yellow.mp3');
      audio4.play();
      break;
    default:
  }

  $("btn").click(function(){
    let userChosenColour = "#" + this.innerHTML;
    userClickedPattern.push(userChosenColour);
  });

}
