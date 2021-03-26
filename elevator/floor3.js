// FLOOR THREE SCRIPT

var momSpeech = document.getElementsByClassName('cls-39');
var siriSpeech = document.getElementsByClassName('cls-38');
var gossipSpeech = document.getElementsByClassName('cls-37');

// CHECK IF EACH AUDIO PLAYED

var momPlayed = Boolean(false);
var siriPlayed = Boolean(false);
var gossipPlayed = Boolean(false);


// MOM

var audioMom = new Audio('sound/floor 3/stop.ogg');

  function highlightMom(){
    momSpeech[0].style.fill = '#b1d7dd';
  }

  function dehighlightMom(){
    momSpeech[0].style.fill = '#b1d7dd00';
  }

  function playAudioMom(){
    // audio.pause();
    audioMom.play();
    // if (audioMom.paused == false) {
    //   momSpeech[0].style.fill = '#b1d7dd';
    // }

    momPlayed = Boolean(true);
    console.log(momPlayed);

   }


// SIRI

var audioSiri = new Audio('sound/floor 3/colonoscopy.ogg');

function highlightSiri(){
  siriSpeech[0].style.fill = '#b1d7dd';
}

function dehighlightSiri(){
  siriSpeech[0].style.fill = '#b1d7dd00';
}

function playAudioSiri(){
  // audio.pause();
  audioSiri.play();
  siriPlayed = Boolean(true);
  console.log(siriPlayed);
   }


// VOICE NOTE

var audioNote = new Audio('sound/floor 3/heyboo.ogg');

function highlightNote(){
  gossipSpeech[0].style.fill = '#b1d7dd';
}

function dehighlightNote(){
  gossipSpeech[0].style.fill = '#b1d7dd00';
}

function playAudioNote(){
  // audio.pause();
  audioNote.play();
  gossipPlayed = Boolean(true);
  console.log(gossipPlayed);
   }

// IF ALL DIALOGUES PLAYED MOVE ON

if (siriPlayed == true) {
  console.log("All Played");
}

// if (siriPlayed == true && gossipPlayed == true && momPlayed == true){
//   playDing();
//   console.log("All Played");
// }

// PLAY DING

function playDing(){
  var ding = new Audio('sound/13. ding.ogg');
  ding.play();
  ding.addEventListener("ended", function(){
   location.replace("floor4.html");
 });
}
