console.log("HeyYY!");

// 1 - selectors
let orangeParagraph = document.getElementById("orange-paragraph")

// 2 - events

orangeParagraph.addEventListener('click', () => {

  orangeParagraph.style.color="#2b2828";
  document.location.href = "video.html";

})
