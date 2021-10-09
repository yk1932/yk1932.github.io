// FLOOR ONE SCRIPT

var speechBubble1 = document.getElementsByClassName('st25');
var speechBubble2 = document.getElementsByClassName('st26');
var door1 = document.getElementById('elevator_door1');
var door2 = document.getElementById('elevator_door2');
var instructions = document.getElementById('instruction_image');

// INTERACTABLE

let interactable = document.getElementById("interactable")
let player = document.getElementById("player")


var audio = new Audio('sound/floor 1/DIALOGUE1.ogg');

  function highlight(){
    speechBubble1[0].style.fill = '#FFFFFF';
    speechBubble2[0].style.fill = '#FFFFFF';
  }

  function dehighlight(){
    speechBubble1[0].style.fill = '#b1d7dd00';
    speechBubble2[0].style.fill = '#b1d7dd00';
    audio.pause();
  }

  function playAudio(){
    // audio.pause();
    audio.play();
    audio.addEventListener("ended", function(){
     console.log("ended");
     playDing();
   });
 }

 function openDoor(){
   instructions.style.display='none';
   door1.style.display = 'none';
   door2.style.display = 'none';
   player.play();
 }

   function playDing(){
     var ding = new Audio('sound/13. ding.ogg');
     door1.style.display = 'block';
     door2.style.display = 'block';
     ding.play();
     ding.addEventListener("ended", function(){
      location.replace("floor2.html");
    });
  }
