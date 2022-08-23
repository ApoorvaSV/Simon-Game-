let buttonColors=["red", "blue", "green", "yellow"];
let gamePattern=[];
let userClickedPattern=[];
let level=0;
let started=false;



function nextSequence(){
  userClickedPattern=[];
  let randomNumber=Math.floor(Math.random()*4);
let randomChosenColor=buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
playSound(randomChosenColor);
level+=1;
  console.log(level);
  $("h1").text("Level "+level);
}


function playSound(color){
let audio =new Audio("sounds/"+color+".mp3");
audio.play();
    $("."+color).fadeOut(50);
      $("."+color).fadeIn(50);
}


$(".btn").click(function(e){
let userChosenColor=this.id;
playSound(userChosenColor);
animatePress(userChosenColor);
userClickedPattern.push(userChosenColor);
checkAnswer(userClickedPattern.length-1);
//nextSequence();

});


function animatePress(currentcolor){
$("."+currentcolor).addClass("pressed") ;
setTimeout(function(){
  $("."+currentcolor).removeClass("pressed") ;
},100);
}




$(document).keypress(function(){

  if(started===false){
  $("h1").text("Level "+level);
    nextSequence();

    console.log(level);
    started=true;
  }

});



function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success");


  if(gamePattern.length===userClickedPattern.length){
    setTimeout(function(){
      nextSequence();
    },1000);


      }
  }
  else{
    console.log("error");
  playSound("wrong");
    $("body").addClass("game-over") ;
    setTimeout(function(){
      $("body").removeClass("game-over") ;
    },200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
startOver();
  }
}


function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}
