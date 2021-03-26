// FLOOR TWO SCRIPT

var speechBubble1 = document.getElementsByClassName('cls-25');
var speechBubble2 = document.getElementsByClassName('cls-26');

// INTERACTABLE

let interactable = document.getElementById("interactable")
let player = document.getElementById("player")

interactable.addEventListener('mousemove', () => {
  player.play();
})

// Lisa

var audio = new Audio('sound/floor 2/DIALOGUE2.ogg');

  function highlight(){
    speechBubble1[0].style.fill = '#FFFFFF';
    speechBubble2[0].style.fill = '#FFFFFF';
  }

  function dehighlight(){
    speechBubble1[0].style.fill = '#b1d7dd00';
    speechBubble2[0].style.fill = '#b1d7dd00';
    audio.pause();
    audio.currentTime = 0;
  }

  function playAudio(){
    // audio.pause();
    audio.play();
    audio.currentTime = 0;
    audio.addEventListener("ended", function(){
     console.log("ended");
     playDing();
   });
 }

   function playDing(){
     var ding = new Audio('sound/13. ding.ogg');
     ding.play();
     ding.addEventListener("ended", function(){
      location.replace("floor3.html");
    });
  }
