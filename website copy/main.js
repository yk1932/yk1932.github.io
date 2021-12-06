const parallax = document.getElementById("parallax");
const boxHolder = document.getElementById("BoxDisappear");


//Parallax Scrolling

    window.addEventListener("scroll",function(){
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = -offset*0.2 + "px";
    })


// document.getElementById("titleText1").addEventListener("click",function(){
//     console.log("i have been clicked!")
// })

//Scroll Up Button

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

document.getElementById("workTwentyTwentyOne").style.display = "block";
document.getElementById("twentytwentyone").classList.add("view");


document.getElementById("twentytwentyone").addEventListener("click",function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.getElementById("workTwentyNineteen").style.display = "none";
    document.getElementById("twentynineteen").classList.remove("view");
    document.getElementById("workTwentyTwenty").style.display = "none";
    document.getElementById("twentytwenty").classList.remove("view");

    document.getElementById("workTwentyTwentyOne").style.display = "block";
    document.getElementById("twentytwentyone").classList.add("view");

})

document.getElementById("twentytwenty").addEventListener("click",function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.getElementById("twentytwenty").classList.add("view");

    document.getElementById("workTwentyNineteen").style.display = "none";
    document.getElementById("twentynineteen").classList.remove("view");
    document.getElementById("workTwentyTwentyOne").style.display = "none";
    document.getElementById("twentytwentyone").classList.remove("view");

    document.getElementById("workTwentyTwenty").style.display = "block";
})

document.getElementById("twentynineteen").addEventListener("click",function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.getElementById("workTwentyTwenty").style.display = "none";
    document.getElementById("twentytwenty").classList.remove("view");
    document.getElementById("workTwentyTwentyOne").style.display = "none";
    document.getElementById("twentytwentyone").classList.remove("view");

    document.getElementById("workTwentyNineteen").style.display = "block";
    document.getElementById("twentynineteen").classList.add("view");


})
