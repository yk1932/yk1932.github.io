// Background p5.js

const PI2 = Math.PI * 2;

class GlowParticle {

  constructor(x, y, radius, rgb){
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.rgb = rgb;
      //speed
      this.vx = Math.random()*3;
      this.vy = Math.random()*3;

      this.sinValue = Math.random();
  }

  animate(ctx, stageWidth, stageHeight){
      this.sinValue += 0.01;
      this.radius += Math.sin(this.sinValue);
      this.x += this.vx;
      this.y += this.vy;

      if(this.x < 0){
          this.vx *= -1;
          this.x += 10;
      }else if(this.x > stageWidth){
          this.vx *= -1;
          this.x -= 10;
      }
      if(this.y < 0){
          this.vy *= -1;
          this.y += 10;
      }else if(this.y > stageHeight){
          this.vy *= -1;
          this.y -= 10;
      }

      ctx.beginPath();
      // 그라데이션 추가
      const g = ctx.createRadialGradient(
          this.x,
          this.y,
          this.radius * 0.01, 
          this.x,
          this.y,
          this.radius
      );
      g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`);
      g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`);


      //Apply Gradation
      ctx.fillStyle = g;

      ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
      ctx.fill();
  }
}

const COLORS = [

    // {r: 51, g: 160, b: 160}, // skyblue
    {r: 54, g: 53, b: 160}, // light

    // {r: 95, g:120, b: 241},
    {r: 219, g:0, b: 106},
  

    // {r: 231, g: 166, b: 87}, // yellow
    // {r: 147, g: 79, b: 125} // blue

];

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = "fixed";
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1)?2:1;

        this.totalParticles = 6;
        this.particles = [];
        this.maxRadius = 800;
        this.minRadius = 600;

        window.addEventListener('resize',this.resize.bind(this),false);
        this.resize();
        this.createParticles();


        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.canvas.width = this.stageWidth*this.pixelRatio;
        this.canvas.height = this.stageHeight*this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
        this.ctx.globalCompositeOperation = 'saturation';
    }

    createParticles(){
        let curColor = 0;
        this.particles = [];
    
        for(let i = 0; i < this.totalParticles; i++){
            const item = new GlowParticle(
                Math.random() * this.stageWidth,
                Math.random() * this.stageHeight,
                Math.random() * 
                    (this.maxRadius - this.minRadius) + this.minRadius,
                COLORS[curColor]
            );

            if(++curColor >= COLORS.length){
                curColor=0;
            }

            this.particles[i] = item;
        }
    }

    animate(){
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);

        for(let i = 0; i < this.totalParticles; i++){
            const item = this.particles[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
    }
}

let firstApp;

window.onload = () => {
  firstApp = new App();
}


// HTML Components

console.log("hello");

window.addEventListener("load", ()=> {

  fetch('/messages')
  .then(res => res.json())
  .then((data)=>{
    console.log(data);
    // document.getElementById('msgs').innerHTML = "";
    data.data.forEach(msg=> {
      let li = document.createElement('li');

      // Date
      let date = document.createElement('h2');
      date.classList.add("post__date");
      date.innerHTML = msg.createdAt;
      console.log(date);


      // Content
      let content = document.createElement('p');
      content.classList.add("post__content");
      content.innerHTML = msg.post;
      console.log(content);

      // li.innerHTML = date.innerHTML+content.innerHTML;
      li.classList.add("post");
      // li.appendChild(date);
      li.appendChild(content);
      document.getElementById('msgs').appendChild(li);

      console.log(msg);
    })
  })

// Import All Elements

// Home Page

let subTitle = document.getElementById("subtitleLog");
let startPage = document.getElementById("startPage");

// About Page
let aboutPage = document.getElementById("aboutPage");
let startButton = document.getElementById("start__button");

// Posts
let postContainer = document.getElementById("container");

//Header
let headerBar = document.getElementById("headBar");
let iconLogo =document.getElementById("headBar__logo");
let newPostButton = document.getElementById("headBar__postButton");

// Write post interface
let createPostInterface = document.getElementById("create");
let colorInputButton = document.getElementById("colorInput");
let textInput = document.getElementById("create__post");
let createPostButton = document.getElementById("create__button");
let backButton = document.getElementById("headBar__backButton");


// Make about page, post page, post interface invisible initially
aboutPage.style.display = "none";
postContainer.style.display = "none";
headerBar.style.display = "none";


// Interactions

// 1. Home Interactions

// When users click "archive your emotions, they go to the about page"
subTitle.addEventListener("click", () => {
    startPage.style.display = "none";
    // createPostInterface.style.display = "flex";
    aboutPage.style.display = "flex";

  })

// 2. Header Interactions

//When users click icon goes back to home
iconLogo.addEventListener("click", () => {
  startPage.style.display = "flex";
  postContainer.style.display = "none";
  createPostInterface.style.display = "none";
})


// New post leads user to create post interface
newPostButton.addEventListener("click", () => {
  createPostInterface.style.display = "flex";
  postContainer.style.display = "none";
  newPostButton.style.display = "none";
  backButton.style.display = "flex";
  iconLogo.style.display = "none";

})

backButton.addEventListener("click", () => {
  createPostInterface.style.display = "none";
  backButton.style.display = "none";
  headerBar.style.display = "flex";
  iconLogo.style.display = "flex";
  newPostButton.style.display = "flex";
  postContainer.style.display = "flex";
})

// 3. About Page Interactions

// When user clicks "get started, they are lead to the create post interface"

startButton.addEventListener("click", () => {
  aboutPage.style.display = "none";
  createPostInterface.style.display = "flex";
  headerBar.style.display = "none";
})

// back button

backButton.style.display = "none";

// 4. Create Post interactions


// If there is a color input, store it in array and update gradient
colorInputButton.addEventListener('change', function(e) {
  console.log(e.target.value);
  console.log("color change has happened");
  console.log(hexToRgb(e.target.value));

  // Update Color array
  COLORS.shift();
  COLORS.push(hexToRgb(document.getElementById("colorInput").value));  
  console.log(COLORS);

  // Update canvas
  firstApp.createParticles();
})

// SUBMIT POST
createPostButton.addEventListener('click',() => {
  createPostInterface.style.display = "none";
  postContainer.style.display = "flex";
  headerBar.style.display = "flex";
  newPostButton.style.display = "flex";
  backButton.style.display = "none";
  iconLogo.style.display = "flex";


  //taken the name and post details from the input fields
  let cPost = document.getElementById("postInput").value;
  let cColor = hexToRgb(document.getElementById("colorInput").value);

  //creating the object we want to send over the server
  let data = {
    post: cPost,
    color: cColor
  }

  // send it over the server
  let msgObjectJSON = JSON.stringify(data);
  console.log(msgObjectJSON);

  // Send the data to the server
  fetch('/message',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: msgObjectJSON
  })
  
  // Server tells user that data is received
  .then(res => res.json())
  .then(data => {
    console.log("this is the data" +cPost);
  })

  // Clear the previous input
  document.getElementById("postInput").value = "";

  fetch('/messages')
  .then(res => res.json())
  .then((data)=>{
    // console.log(data);
    document.getElementById('msgs').innerHTML = "";
    data.data.forEach(msg=> {
      let li = document.createElement('li');

      // Date
      let date = document.createElement('h2');
      date.classList.add("post__date");
      date.innerHTML = msg.createdAt;
      // console.log(date);


      // Content
      let content = document.createElement('p');
      content.classList.add("post__content");
      content.style.color = data.color;

      content.innerHTML = msg.post;
      // console.log(content);

      //
      // li.innerHTML = date.innerHTML+content.innerHTML;
      li.classList.add("post");
      // li.appendChild(date);
      li.appendChild(content);
      document.getElementById('msgs').appendChild(li);

      // console.log(msg);
    })

  })

})

})



db.find({}).sort({ planet: -1 }).exec(function (err, docs) {
console.log(docs);
dataToSend = {data: docs};
res.json(dataToSend);
});






