const parallax = document.getElementById("parallax");
const boxHolder = document.getElementById("BoxDisappear");


//Event Listener 1: Parallax Scrolling

    window.addEventListener("scroll",function(){
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = -offset*0.2 + "px";
    })


//Event Listener 2: Make div for about me darker on click to make text more visible, set back to default on mouse out

    //About me holder

    // const aboutMeHolder = document.getElementById("aboutMe");
    // console.log(aboutMeHolder);
    
    // aboutMeHolder.addEventListener("click", function(){
    //     // aboutMeHolder.style.fontSize = "15px";
    //     aboutMeHolder.style.backgroundColor="rgba(30,30,30,0.6)";
        
    // })

    // aboutMeHolder.addEventListener("mouseout", function(){
    //     // aboutMeHolder.style.fontSize = "13px";
    //     aboutMeHolder.style.backgroundColor="rgba(106,103,103,0.6)";

    // })


//Event Listener 2: Make scrollbox expand when user hovers mouse on it

    //Scroll Box 1

    // const scrollBox1 = document.getElementById("scrollBox1");

    // scrollBox1.addEventListener("mouseover", function(){
    //     scrollBox1.style.transform = "scale(1.05)";
    // })

    // scrollBox1.addEventListener("mouseout", function(){
    //     scrollBox1.style.transform = "scale(1)";
    // })

    //Scroll Box 2

    // const scrollBox2 = document.getElementById("scrollBox2");

    // scrollBox2.addEventListener("mouseover", function(){
    //     scrollBox2.style.transform = "scale(1.05)";
    // })

    // scrollBox2.addEventListener("mouseout", function(){
    //     scrollBox2.style.transform = "scale(1)";
    // })

document.getElementById("titleText1").addEventListener("click",function(){
    console.log("i have been clicked!")
    // this.querySelector("projectOneWork").style.display = "block";
})