console.log("HeyYY!");

// Declaring Variable
let blueText = document.getElementById("blue-text")

// interactivity: When button is clicked, the text in the button changes
// to blue and the user is directed to the video page

blueText.addEventListener('click', () => {

  blueText.style.color="#2b2828";
  document.location.href = "video.html";

})
