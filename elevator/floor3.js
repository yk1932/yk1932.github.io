// FLOOR THREE SCRIPT

var momSpeech = document.getElementsByClassName('st38');
var siriSpeech = document.getElementsByClassName('st37');
var noteSpeech = document.getElementsByClassName('st36');
var door1 = document.getElementById('elevator_door1');
var door2 = document.getElementById('elevator_door2');

// INTERACTABLE

let interactable = document.getElementById("interactable")
let player = document.getElementById("player")

// CHECK IF EACH AUDIO PLAYED

var momPlayed = Boolean(false);
var siriPlayed = Boolean(false);
var notePlayed = Boolean(false);


// MOM

var audioMom = new Audio('sound/floor 3/stop.ogg');

  function highlightMom(){
    momSpeech[0].style.fill = '#FFFFFF';
  }

  function dehighlightMom(){
    momSpeech[0].style.fill = '#b1d7dd00';
    audioMom.pause();
  }

  function playAudioMom(){
    audioMom.play();

    // If finished playing, make boolean true
    audioMom.addEventListener("ended", function(){
      momPlayed = Boolean(true);
      console.log(momPlayed);
      checkEnd();
    });
     }


// SIRI

var audioSiri = new Audio('sound/floor 3/colonoscopy.ogg');

function highlightSiri(){
  siriSpeech[0].style.fill = '#FFFFFF';
}

function dehighlightSiri(){
  siriSpeech[0].style.fill = '#b1d7dd00';
  audioSiri.pause();
}

function playAudioSiri(){
  audioSiri.play();

  // If finished playing, make boolean true
  audioSiri.addEventListener("ended", function(){
    siriPlayed = Boolean(true);
    console.log(siriPlayed);
    checkEnd();
  });}


// VOICE NOTE

var audioNote = new Audio('sound/floor 3/heyboo.ogg');

function highlightNote(){
  noteSpeech[0].style.fill = '#FFFFFF';
}

function dehighlightNote(){
  noteSpeech[0].style.fill = '#b1d7dd00';
  audioNote.pause();
}

function playAudioNote(){
  // audio.pause();
  audioNote.play();

  // If finished playing, make boolean true
  audioNote.addEventListener("ended", function(){
    notePlayed = Boolean(true);
    console.log(notePlayed);
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

function openDoor(){
  door1.style.display = 'none';
  door2.style.display = 'none';
  player.play();
}



function checkEnd(){
  if (momPlayed){
    console.log("Mom played");}
  if (siriPlayed){
    console.log("Siri played");
    }
  if (notePlayed){
    console.log("note played");
    }
  if (momPlayed && siriPlayed && notePlayed){
    console.log("All played");
    playDing();
    }
}
