// FLOOR THREE SCRIPT

var deliverySpeech = document.getElementsByClassName('cls-40');
var coworkerSpeech1 = document.getElementsByClassName('cls-38');
var coworkerSpeech2 = document.getElementsByClassName('cls-39');


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
  audioDelivery.currentTime = 0;
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
  audioCoworker.currentTime = 0;
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


// PLAY DING

function playDing(){
  var ding = new Audio('sound/13. ding.ogg');
  ding.play();
  ding.addEventListener("ended", function(){
   location.replace("floor4.html");
 });
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
    playDing();
    }
}
