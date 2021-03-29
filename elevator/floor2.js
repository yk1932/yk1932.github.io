// FLOOR TWO SCRIPT

var speechBubble1 = document.getElementsByClassName('st24');
var speechBubble2 = document.getElementsByClassName('st25');
var door1 = document.getElementById('elevator_door1');
var door2 = document.getElementById('elevator_door2');
var phoneBuzz = document.getElementsByClassName('st37');
var coffeeSteam = document.getElementsByClassName('st36');

// INTERACTABLE

let interactable = document.getElementById("interactable")
let player = document.getElementById("player")


// MAIN DIALOGUE

var audio = new Audio('sound/floor 2/DIALOGUE2.ogg');
var phoneType = new Audio('sound/floor 2/type.ogg');
var slurpCoffee = new Audio('sound/floor 2/slurp.ogg');

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

// TEXTING GUY

function highlightPeter(){
  phoneBuzz[0].style.stroke = '#232222';
  phoneBuzz[1].style.stroke = '#232222';
  phoneBuzz[2].style.stroke = '#232222';
  phoneBuzz[3].style.stroke = '#232222';

  // phoneBuzz[0].style.stroke-miterlimit = '10';
  phoneType.play();

}

function dehighlightPeter(){
  phoneBuzz[0].style.stroke = '#b1d7dd00';
  phoneBuzz[1].style.stroke = '#b1d7dd00';
  phoneBuzz[2].style.stroke = '#b1d7dd00';
  phoneBuzz[3].style.stroke = '#b1d7dd00';
  phoneType.pause();
}

// AMY DRINKING

function highlightAmy(){
  coffeeSteam[0].style.fill = '#F7F5F5';
  coffeeSteam[1].style.fill = '#F7F5F5';

  slurpCoffee.play();
}

function dehighlightAmy(){
  coffeeSteam[0].style.fill = '#b1d7dd00';
  coffeeSteam[1].style.fill = '#b1d7dd00';
  slurpCoffee.pause();
}

function openDoor(){
   door1.style.display = 'none';
   door2.style.display = 'none';
   player.play();
 }

function playDing(){
   var ding = new Audio('sound/13. ding.ogg');
   ding.play();
   ding.addEventListener("ended", function(){
    location.replace("floor3.html");
  });
  }
