const parallax = document.getElementById("parallax");
const boxHolder = document.getElementById("BoxDisappear")

window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = -offset*0.2 + "px";
})

