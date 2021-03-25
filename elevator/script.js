var speechBubble1 = document.getElementsByClassName('cls-26');
var speechBubble2 = document.getElementsByClassName('cls-27');

// Lisa

var audio = new Audio('sound/floor 1/DIALOGUE1.ogg');

  function highlight(){
    speechBubble1[0].style.fill = '#b1d7dd';
    speechBubble2[0].style.fill = '#b1d7dd';
  }

  function dehighlight(){
    speechBubble1[0].style.fill = '#b1d7dd00';
    speechBubble2[0].style.fill = '#b1d7dd00';
  }

  function playAudio(){
    // audio.pause();
    audio.play();
    speechBubble1[0].style.fill = '#b1d7dd';
    speechBubble2[0].style.fill = '#b1d7dd';
  }
