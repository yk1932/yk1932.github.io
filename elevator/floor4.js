// FLOOR THREE SCRIPT

var deliverySpeech = document.getElementsByClassName('st39');
var coworkerSpeech1 = document.getElementsByClassName('st37');
var coworkerSpeech2 = document.getElementsByClassName('st38');
var karen = new Audio('sound/floor 5/karen.ogg');
var door1 = document.getElementById('elevator_door1');
var door2 = document.getElementById('elevator_door2');


// INTERACTABLE

let interactable = document.getElementById("interactable")
let player = document.getElementById("player")

// CHECK IF EACH AUDIO PLAYED

var deliveryPlayed = Boolean(false);
var coworkerPlayed = Boolean(false);


// DELIVERY

var audioDelivery = new Audio('sound/floor 4/delivery.ogg');

function highlightDelivery(){
  deliverySpeech[0].style.fill = '#FFFFFF';
}

function dehighlightDelivery(){
  deliverySpeech[0].style.fill = '#b1d7dd00';
  audioDelivery.pause();
}

function playAudioDelivery(){
  audioDelivery.play();

  // If finished playing, make boolean true
  audioDelivery.addEventListener("ended", function(){
    deliveryPlayed = Boolean(true);
    console.log(deliveryPlayed);
    checkEnd();
  });}


// COWORKER

var audioCoworker = new Audio('sound/floor 4/coworkertalk.ogg');

function highlightCoworker(){
  coworkerSpeech1[0].style.fill = '#FFFFFF';
  coworkerSpeech2[0].style.fill = '#FFFFFF';
}

function dehighlightCoworker(){
  coworkerSpeech1[0].style.fill = '#b1d7dd00';
  coworkerSpeech2[0].style.fill = '#b1d7dd00';
  audioCoworker.pause();
}

function playAudioCoworker(){
  // audio.pause();
  audioCoworker.play();

  // If finished playing, make boolean true
  audioCoworker.addEventListener("ended", function(){
    coworkerPlayed = Boolean(true);
    console.log(coworkerPlayed);
    checkEnd();});

   }

var ding = new Audio('sound/13. ding.ogg');

// PLAY DING


function openDoor(){
  door1.style.display = 'none';
  door2.style.display = 'none';
  player.play();
}


function checkEnd(){

  if (deliveryPlayed){
    console.log("Delivery played");
    }
  if (coworkerPlayed){
    console.log("Coworker played");
    }
  if (deliveryPlayed && coworkerPlayed){
    console.log("All played");

    // Disable speech bubbles and mute dialogues
    coworkerSpeech1[0].style.display = 'none';
    coworkerSpeech2[0].style.display = 'none';
    deliverySpeech[0].style.display = 'none';
    audioDelivery.volume = 0;
    audioCoworker.volume = 0;

    // close door
    door1.style.display = 'block';
    door2.style.display = 'block';

    // Play ding
    ding.play();
    ding.addEventListener("ended", function(){

      // open door
      door1.style.display = 'none';
      door2.style.display = 'none';

      // karen walks in
      karen.play();});
    }
}
